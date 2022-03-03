import { AppStateType } from "../redux/redux";

export const getErrorMessage = (state: AppStateType) => {
   return state.errors.errorMessage
};
