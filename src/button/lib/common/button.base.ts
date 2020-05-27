import { Button } from '@nativescript/core/ui/button';
import { CSSType } from '@nativescript/core/ui/core/view';

import { POCButtonType } from '../internal/internals';
import { typeProperty } from './button.properties';

@CSSType('POCButton')
export class POCButtonBase extends Button {
  type: POCButtonType;

  initNativeView() {
    super.initNativeView();
    // Set default variation on button initialization
    this.className = this.type;
  }

  [typeProperty.setNative](variation: POCButtonType) {
    this.className = variation;
  }
}
