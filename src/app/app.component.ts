import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  toggleClass: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log('Page loaded');
  }

  windowResize() {
    var w = window.outerWidth;
    console.log(w);
  }

  sidebarStatus($event) {
    this.toggleClass = $event;
  }

  wrpperClick() {
    this.toggleClass = false;
  }
}
