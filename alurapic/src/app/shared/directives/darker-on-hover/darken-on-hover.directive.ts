import { Directive, ElementRef, Host, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkerOnHoverDirective {

    @Input() brightness = '70%';

    constructor(
        private el: ElementRef,
        private render: Renderer
    ) {}

    @HostListener('mouseover')
    darkenOn() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(90%)');
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }

}