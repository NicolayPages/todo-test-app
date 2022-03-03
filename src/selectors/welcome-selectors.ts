import { AppStateType } from "../redux/redux";

export const getTitle = (state: AppStateType) => {
   return state.welcome.title
};
export const getLink = (state: AppStateType) => {
   return state.welcome.link
};