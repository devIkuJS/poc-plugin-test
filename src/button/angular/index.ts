import { NgModule } from '@angular/core';

import { registerElement } from 'nativescript-angular';

import { DIRECTIVES } from './directives';

@NgModule({
  exports: DIRECTIVES,
  declarations: DIRECTIVES,
})
export class POCButtonModule {}

// tslint:disable-next-line: no-require-imports
registerElement('POCButton', () => require('../').POCButton);
