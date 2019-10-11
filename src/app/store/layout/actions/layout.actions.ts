import { createAction } from '@ngrx/store';

export enum LayoutActionTypes {
    ADD_LOADING = '[Layout] Add loading',
    REMOVE_LOADING = '[Layout] Remove loading'
}

export const addLoading = createAction(LayoutActionTypes.ADD_LOADING);
export const removeLoading = createAction(LayoutActionTypes.REMOVE_LOADING);
