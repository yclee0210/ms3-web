import {Action} from '@ngrx/store';
import * as AuthActions from './auth.actions';
import * as Crud from './crud.reducer';
import {Accesses} from '../_domains/accesses';
import {Auth} from '../_domains/auth';

const prefix = AuthActions.ACTION_NAME;
const INIT = 'INIT';
const initialState: Auth = new Auth();

export function reducer(state = initialState, action: Action = {type: INIT}): Accesses {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
}