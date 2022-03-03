import { LinkType } from "../../types/types";
import { InferActionsTypes } from "../redux";


type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>;

let initialState = {
   title: 'Welcome to my SPA test project',
   link: { id: 1, name: 'Go to todo', to: '/todo' } as LinkType
};

const welcomeReducer = (state = initialState, action: ActionTypes): InitialStateType => {
   switch (action.type) {
      default:
         return state;
   }
};

export const actions = {
}



export default welcomeReducer;