import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ 
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @Input('pkmnBorderCard') borderColor: string;
  @Input() pkmnBorderCard: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#OO9688'); // (this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');     //(this.initialColor);
  }
  
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

 private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = `solid 4x ${color}`;
  }
}
