import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  
  @Input() isMenuOpen: boolean;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('homeClick', { static: false, }) eleClick: ElementRef;

  ngOnInit() {
    setTimeout(() => {
      this.eleClick.nativeElement.click();
    }, 200);
  }
  
  menuStatus($event){
    this.isMenuOpen = !this.isMenuOpen;
    this.notify.emit(this.isMenuOpen);
    $event.stopPropagation();
  }

  stopPropagation($event){
    $event.stopPropagation();
  }
}
