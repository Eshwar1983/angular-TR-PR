import { ComponentRef, ComponentFactoryResolver, ViewContainerRef, ViewChild, Component, ElementRef, OnInit } from "@angular/core";
import { AdRmChildComponent } from './ad-rm-child/ad-rm-child.component';

@Component({
  selector: 'app-ad-rm-parent',
  templateUrl: './ad-rm-parent.component.html',
  styleUrls: ['./ad-rm-parent.component.scss']
})
export class AdRmParentComponent implements OnInit {

  //@ViewChild('viewContainerRef', { read: ViewContainerRef }) VCR: ViewContainerRef;
  @ViewChild('viewContainerRef', { static: false, }) nameField: ElementRef;

  index: number = 0;

  componentsReferences = [];

  constructor(private CFR: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  createComponent() {

    let componentFactory = this.CFR.resolveComponentFactory(AdRmChildComponent);
    let componentRef: ComponentRef<AdRmChildComponent> = this.nameField.nativeElement.createComponent(componentFactory);
    let currentComponent = componentRef.instance;

    //currentComponent.selfRef = currentComponent;
    //currentComponent.index = ++this.index;

    // prividing parent Component reference to get access to parent class methods
    //currentComponent.compInteraction = this;

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
  }

  remove(index: number) {

    if (this.nameField.nativeElement.length < 1)
      return;

    let componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];
    let component: AdRmChildComponent = <AdRmChildComponent>componentRef.instance;

    let vcrIndex: number = this.nameField.nativeElement.indexOf(componentRef)

    // removing component from container
    this.nameField.nativeElement.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }

}