import { createReducer, on } from '@ngrx/store';
import * as chatAction from '../actions/chat.action';

const initalValue: Boolean = true;
export const clickContactReducer = createReducer(
  initalValue,
  on(chatAction.switchToConversation, (state) => {
    return !state;
  })
);
