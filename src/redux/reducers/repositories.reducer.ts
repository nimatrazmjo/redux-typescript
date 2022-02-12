import IAction from "../../interfaces/action.interface";
import IRepositoriesState from "../../interfaces/repositories-state.interface";
import repositoriesType from "./repositories.type";

interface searchRepositoriesAction {
  type: "SEARCH_REPOSITORIES";
}

interface searchRepositoriesSuccessAction {
  type: "SEARCH_REPOSITORIES_SUCCESS";
  payload: string[];
}
interface searchRepositoriesErrorAction {
  type: "SEARCH_REPOSITORIES_ERROR";
  payload: string;
}

const reducer = (
  state: IRepositoriesState,
  action:
    | searchRepositoriesAction
    | searchRepositoriesSuccessAction
    | searchRepositoriesErrorAction
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
