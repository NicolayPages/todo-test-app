import { ThunkAction } from 'redux-thunk';
import { todoAPI } from '../../api/todo-api';
import { TaskType } from '../../types/types';
import { AppStateType, InferActionsTypes } from '../redux';
import { showError } from './errors-reducer';


type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>


let initialState = {
   tasks: [] as Array<TaskType>,
   limit: 10,
   totalCount: 0,
   page: 1,
   isFetching: false,
};

const todoReducer = (state = initialState, action: ActionTypes): InitialStateType => {
   switch (action.type) {
      case 'SET_TASKS':
         return {
            ...state,
            tasks: action.tasks,
         };
      case 'SET_TOTAL_COUNT':
         return {
            ...state,
            totalCount: action.totalCount,
         };
      case 'SET_PAGE':
         return {
            ...state, page: action.page,
         };
      case 'IS_FETCHING':
         return {
            ...state,
            isFetching: action.isFetching,
         };
      case 'ADD_TASK':
         let newTask = {
            userId: 1,
            id: action.payload.taskId,
            title: action.payload.task.title,
            completed: false
         }
         return {
            ...state,
            tasks: [newTask, ...state.tasks],
         };
      case 'CHANGE_TASK':
         return {
            ...state,
            tasks: state.tasks.map(t => {
               if (t.id == action.payload.taskId) {
                  return { ...t, title: action.payload.taskTitle, }
               }
               return t;
            }),
         };
      case 'COMPLETE_TASK':
         return {
            ...state,
            tasks: state.tasks.map(t => {
               if (t.id == action.payload.taskId) {
                  return { ...t, completed: action.payload.completed }
               }
               return t;
            }),
         };
      case 'DELETE_TASK':
         return {
            ...state,
            tasks: state.tasks.filter(p => p.id != action.taskId),
         };
      default:
         return state;
   }
};

export const actions = {
   setTasks: (tasks: Array<TaskType>) => ({ type: 'SET_TASKS', tasks } as const),
   toggleIsFetching: (isFetching: boolean) => ({ type: 'IS_FETCHING', isFetching } as const),
   setTotalCount: (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount } as const),
   setPage: (page: number) => ({ type: 'SET_PAGE', page } as const),
   addTask: (task: TaskType, taskId: number) => ({ type: 'ADD_TASK', payload: { task, taskId } } as const),
   changeTask: (taskId: number, taskTitle: string) => ({ type: 'CHANGE_TASK', payload: { taskId, taskTitle } } as const),
   completeTask: (taskId: number, completed: boolean) => ({ type: 'COMPLETE_TASK', payload: { taskId, completed } } as const),
   deleteTask: (taskId: number) => ({ type: 'DELETE_TASK', taskId } as const),
}



export const requestTasks = (page: number, limit: number): ThunkType => async (dispatch) => {
   try {
      dispatch(actions.toggleIsFetching(true))
      dispatch(actions.setPage(page));
      let response = await todoAPI.getTasks(limit, page)
      dispatch(actions.setTotalCount(Number(response.headers['x-total-count'])))
      dispatch(actions.setTasks(response.data))
   } catch (error: any) {
      dispatch(showError(error.message))
   } finally {
      dispatch(actions.toggleIsFetching(false))
   }
};
export const addTask = (task: TaskType): ThunkType => async (dispatch) => {
   try {
      let data = await todoAPI.addTasks(task)
      dispatch(actions.addTask(data.body, data.id))
   } catch (error: any) {
      dispatch(showError(error.message))
   }
};
export const deleteTask = (taskId: number): ThunkType => async (dispatch) => {
   try {
      let response = await todoAPI.deleteTasks(taskId)
      if (response.status == 200) {
         dispatch(actions.deleteTask(taskId))
      }
   } catch (error: any) {
      dispatch(showError(error.message))
   }
};
export const changeTask = (taskId: number, taskTitle: string): ThunkType => async (dispatch) => {
   try {
      let data = await todoAPI.changeTasks(taskId, taskTitle)
      dispatch(actions.changeTask(data.id, data.body.title))
   } catch (error: any) {
      dispatch(showError(error.message))
   }
};
export const completeTask = (taskId: number, complete: boolean): ThunkType => async (dispatch) => {
   try {
      let data = await todoAPI.completeTasks(taskId, complete)
      dispatch(actions.completeTask(data.id, data.body.completed))
   } catch (error: any) {
      dispatch(showError(error.message))
   }
};



export default todoReducer;
