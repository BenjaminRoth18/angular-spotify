import { createAction, props } from '@ngrx/store';
import { Token } from 'src/app/shared/models/auth/auth.model';

export enum AuthActionTypes {
    GET_TOKEN = '[Auth] Get Token',
    GET_TOKEN_SUCCESS = '[Auth] Get Token Success'
}

export const getToken = createAction(AuthActionTypes.GET_TOKEN);
export const getTokenSuccess = createAction(
    AuthActionTypes.GET_TOKEN_SUCCESS,
    props<{ payload: Token }>()
);
