import { Button } from '@nativescript/core/ui/button';
import { Property } from '@nativescript/core/ui/core/properties';

import { POCButtonType } from '../internal/internals';

export const typeProperty = new Property<Button, POCButtonType>({
  name: 'type',
  affectsLayout: true,
  defaultValue: POCButtonType.PRIMARY,
  valueConverter: v => POCButtonType[v.toUpperCase()],
});

typeProperty.register(Button);
