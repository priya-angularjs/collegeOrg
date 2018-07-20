import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAPPConfig {
  apiEndPoint: string;
}

export const AppConfig: IAPPConfig = {
  apiEndPoint: 'http://localhost:5000'
};
