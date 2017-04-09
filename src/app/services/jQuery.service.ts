import { OpaqueToken } from '@angular/core';

export const JQ_TOKEN = new OpaqueToken('jQuery');

// return the global instance of jquery
export function jQueryFactory() {
  return window['jQuery'];
}
// providers
export const JQUERY_PROVIDER = [
  { provide: JQ_TOKEN, useFactory: jQueryFactory },
];