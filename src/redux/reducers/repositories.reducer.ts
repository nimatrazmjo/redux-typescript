import IAction from "../../interfaces/action.interface";
import IRepositoriesState from "../../interfaces/repositories-state.interface";
import repositoriesType from "./repositories.type";

interface searchRepositoriesAction {
  type: repositoriesType.SEARCH_REPOSITORIES;
}

interface searchRepositoriesSuccessAction {
  type: repositoriesType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface searchRepositoriesErrorAction {
  type: repositoriesType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action = searchRepositoriesAction
  | searchRepositoriesSuccessAction
  | searchRepositoriesErrorAction

const reducer = (
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

export default reducer;
