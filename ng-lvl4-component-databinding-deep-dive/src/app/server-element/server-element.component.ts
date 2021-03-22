import {
  Component, OnInit, Input, ViewEncapsulation,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, SimpleChanges
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild() header: ElementRef;

  constructor() { }

  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    console.log('Method not implemented.');
  }
  ngAfterViewInit(): void {
    console.log('Method not implemented.');
    console.log('Text Content : ' + this.header.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('Method not implemented.');
  }
  ngAfterContentInit(): void {
    console.log('Method not implemented.');
  }
  ngDoCheck(): void {
    console.log('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.')
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content : ' + this.header.nativeElement.textContent);
  }

}
