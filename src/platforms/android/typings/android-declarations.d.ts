interface ArrayConstructor {
  create(type: any, count: number): any;
}

declare namespace native {
  export class Array<T> {
    constructor();
    length: number;
    [index: number]: T;
  }
}

import globalAndroid = android;
