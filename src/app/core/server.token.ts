import { InjectionToken } from '@angular/core';

export const SERVER_URL: InjectionToken<string> = new InjectionToken('description of token');

export const REQUEST: InjectionToken<any> = new InjectionToken('REQUEST Token');
export const RESPONSE: InjectionToken<any> = new InjectionToken('RESPONSE Token');
