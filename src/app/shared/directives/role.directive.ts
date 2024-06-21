import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[isNotAdmin]',
  standalone: true
})
export class RoleDirective {
  @Input() isNotAdmin: boolean = true;
  @Input() action : 'disabled' | 'display-none' | 'hidden' | undefined;

  constructor(private hostElement: ElementRef, private renderer: Renderer2) { }
  ngOnChanges(changes: SimpleChanges){
    this.applyStyle(changes['isNotAdmin'].currentValue,changes['action'].currentValue);

  }

  applyStyle(isNotAdmin:boolean,action:'disabled' | 'display-none' | 'hidden'){
    console.log(this.action);
    switch(this.action){
      case 'disabled':
        this.renderer.setProperty(this.hostElement.nativeElement,'disabled', isNotAdmin ? true : false);
        break;
      case 'display-none':
        this.renderer.setStyle(this.hostElement.nativeElement, 'display', isNotAdmin ? 'none' : 'block');
        break;
      case 'hidden':
        this.renderer.setStyle(this.hostElement.nativeElement, 'visibility', isNotAdmin ? 'hidden' : 'visible');
        break
    }
  }

}
