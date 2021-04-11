import { InjectionToken } from '@angular/core';
import { ActionsInterface } from '../models/actions';

export const ACTION_TOKEN = new InjectionToken<ActionsInterface>('action.config');
export const ACTION_CONFIG: {
  [name: string]: ActionsInterface;
} = {
  add: {
    title: 'Add new user',
    button: 'Add',
    btnClass: 'btn-primary'
  },
  edit: {
    title: 'Edit user :)',
    button: 'Edit',
    btnClass: 'btn-warning'
  }
};
