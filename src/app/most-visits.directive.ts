import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMostVisits]'
})
export class MostVisitsDirective implements OnChanges {

  @Input() appMostVisits: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.appMostVisits){
      this.renderer.setStyle(this.el.nativeElement,'background-color', 'green');
    }else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
      
  }

}
