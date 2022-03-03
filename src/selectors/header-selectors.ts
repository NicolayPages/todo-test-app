import { AppStateType } from "../redux/redux";

export const getLogo = (state: AppStateType) => {
   return state.header.logo
};
export const getName = (state: AppStateType) => {
   return state.header.name
};
export const getLinks = (state: AppStateType) => {
   return state.header.links
};