# Angular Error

## Error: ENOSPC: System limit for number of file watchers reached

=> Error from chokidar (/home/amit/git/angular-learning/angular-practice1): Error: ENOSPC: System limit for number of file watchers reached, watch '/home/amit/git/angular-learning/angular-practice1/tslint.json'

=> Explanation:

NodeJS throws ENOSPC (Error no space) when there is not enough space available to run the application. But df -h tells a different story. df -h return stats which clearly shows that the machine has ample amount of free space. 

Executing following command will resolve the issue:
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

We come to know that linux machine put a limit on number of files inotify program can monitor. Above command increase the limit of number of files it can watch. This means that create-angular-app is using inotify to monitor files and it is asking inotify to monitor files more than its limit.

Error stack trace shows that npm module chokidar is throwing the error. On checking the dependent tab, its clear the babel and webpack both are using chokidar to monitor files. So probably, chokidar is using inotify to monitor project files.

By increasing number of file being watched by inotify limit will solve the issue. In case you don’t want to do development on linux machine. you just want to host the app then just create a build and run a simple server like http-server which will serve the app.

==============================================================================================================

