import { ComponentRef, ComponentFactoryResolver, ViewChild, Component, ElementRef } from "@angular/core";
import { dynamicAddComponent } from './child-component';

@Component({
  selector: 'dynamicAddRemove-parent',
   template: 
  `
    <button type="button" (click)="createComponent()">
      I am Parent, Create Child
    </button>
    <div>
      <ng-template #viewContainerRef></ng-template>
    </div>
  `,
  styles: [
      `button {
        background-color: #4CAF50;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
      }`
  ]
})
export class dynamicAddRemove {

  @ViewChild('viewContainerRef', { static: false, }) nameField: ElementRef;

  index: number = 0;

  componentsReferences = [];

  constructor(private CFR: ComponentFactoryResolver) {
  }

  createComponent() {

    let componentFactory = this.CFR.resolveComponentFactory(dynamicAddComponent);
    let componentRef: ComponentRef<dynamicAddComponent> = this.nameField.nativeElement.createComponent(componentFactory);
    let currentComponent = componentRef.instance;

    currentComponent.selfRef = currentComponent;
    currentComponent.index = ++this.index;

    // prividing parent Component reference to get access to parent class methods
    currentComponent.compInteraction = this;

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
  }

  remove(index: number) {

    if (this.nameField.nativeElement.length < 1)
      return;

    let componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];
    let component: dynamicAddComponent = <dynamicAddComponent>componentRef.instance;

    let vcrIndex: number = this.nameField.nativeElement.indexOf(componentRef)

    // removing component from container
    this.nameField.nativeElement.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }

}