import IAction from "../../interfaces/action.interface";
import IRepositoriesState from "../../interfaces/repositories-state.interface";
import { Action } from "../actions";
import repositoriesType from "../action-type";

const repositoriesReducer = (
  state: IRepositoriesState,
  action: Action
): IRepositoriesState => {
  switch (action.type) {
    case repositoriesType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case repositoriesType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case repositoriesType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repositoriesReducer;
