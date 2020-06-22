import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        // initialStateで初期化
        ...state,
        // actions.payloadeで上書き
        ...action.payload,
      };
    default:
      return state;
  }
};
