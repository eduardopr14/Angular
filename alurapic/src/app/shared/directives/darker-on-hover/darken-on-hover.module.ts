import { NgModule } from '@angular/core';
import { DarkerOnHoverDirective } from './darken-on-hover.directive';

@NgModule({
    declarations: [ DarkerOnHoverDirective ],
    exports: [ DarkerOnHoverDirective ]
})
export class DarkenOnHoverModule {}