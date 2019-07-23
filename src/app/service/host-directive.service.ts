import { Injectable } from '@angular/core';
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostDirectives]'
})
@Injectable({
  providedIn: 'root'
})
export class HostDirectiveService {

  @HostBinding('attr.class') class = 'inactive';
  @HostListener('click') onClick() {
    this.class = this.class == 'inactive' ? 'active' : 'inactive';
  }

  constructor() { }
}
