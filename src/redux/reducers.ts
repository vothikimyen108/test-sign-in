import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_FAILURE } from './constants';
import { User } from './type';

const initialState: User = {
  email: "",
  firstName: "",
  lastName:"",
  gender: "other",
  error: "",
  isAuthenticated: false,
  isLoading: false
};

export default function reducers(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_RESPONSE:
      return { ...state, ...action.payload, err: "", isAuthenticated: true, isLoading: false };
    case LOGIN_FAILURE:
      return {
        ...initialState, error: action.payload, isAuthenticated: false, isLoading: false };
    default:
      return state;
  }
}