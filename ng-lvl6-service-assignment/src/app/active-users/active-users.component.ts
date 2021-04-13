import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
	selector: 'app-active-users',
	templateUrl: './active-users.component.html',
	styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
	users: string[];

	constructor(private userSevice: UserService) { }

	ngOnInit(): void {
		this.users = this.userSevice.activeUsers;
	}

	onSetToInactive(id: number) {
		this.userSevice.setToInactive(id);
	}
}
