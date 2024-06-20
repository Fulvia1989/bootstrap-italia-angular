import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[isAdmin]',
  standalone: true
})
export class RoleDirective {
  @Input() isAdmin: boolean = false;
  @Input() action : 'disabled' | 'display-none' | 'hidden' | undefined;

  constructor(private hostElement: ElementRef, private renderer: Renderer2) { }
  ngOnChanges(changes: SimpleChanges){
    this.applyStyle(changes['isAdmin'].currentValue,changes['action'].currentValue);

  }

  applyStyle(isAdmin:boolean,action:'disabled' | 'display-none' | 'hidden'){
    console.log(this.action);
    switch(this.action){
      case 'disabled':
        this.renderer.setProperty(this.hostElement.nativeElement,'disabled', !isAdmin ? true : false);
        break;
      case 'display-none':
        this.renderer.setStyle(this.hostElement.nativeElement, 'display', !isAdmin ? 'none' : 'block');
        break;
      case 'hidden':
        this.renderer.setStyle(this.hostElement.nativeElement, 'visibility', !isAdmin ? 'hidden' : 'visible');
        break
    }
  }

}
