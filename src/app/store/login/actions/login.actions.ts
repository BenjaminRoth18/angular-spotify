import { createAction, props } from '@ngrx/store';
import { Token } from 'src/app/models/login.model';

export const getToken = createAction('[Login] Get Token');
export const getTokenSuccess = createAction(
    '[Login] Get Token Success',
    props<{ payload: Token }>()
);
