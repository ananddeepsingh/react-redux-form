import { SAVEDATATTOSTORE } from '../actions';

export default function UserFormDataReducer(state = {}, action){
  switch (action.type){
    case SAVEDATATTOSTORE:
      return action.items;
    default:
      return state
  }
}