import { AppStateType } from "../redux/redux";

export const getTasks = (state: AppStateType) => {
   return state.todo.tasks
};
export const getIsFetching = (state: AppStateType) => {
   return state.todo.isFetching
};
export const getIsExpectation = (state: AppStateType) => {
   return state.todo.isExpectation
};
export const getLimit = (state: AppStateType) => {
   return state.todo.limit
};
export const getTotalCount = (state: AppStateType) => {
   return state.todo.totalCount
};
export const getPage = (state: AppStateType) => {
   return state.todo.page
};