import { InferActionsTypes } from "../redux";
import logoIcon from '../../assets/images/logo.svg'
import { LinkType } from "../../types/types";


type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>;

let initialState = {
   logo: logoIcon as any,
   name: 'Test TaskSPA' as string,
   links: [
      { id: 1, to: '/', name: 'welcome' },
      { id: 2, to: '/todo', name: 'todo' }
   ] as Array<LinkType>
};

const headerReducer = (state = initialState, action: ActionTypes): InitialStateType => {
   switch (action.type) {
      default:
         return state;
   }
};

export const actions = {
}



export default headerReducer;