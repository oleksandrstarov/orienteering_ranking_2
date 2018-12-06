import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const { nativeElement } = this.element;
    const YAxisCoord = window.scrollY;
    const headerHeight = 50;
    if (YAxisCoord > headerHeight) {
      this.renderer.addClass(nativeElement, 'visible-title');
    } else {
      this.renderer.removeClass(nativeElement, 'visible-title');
    }
  }
}
