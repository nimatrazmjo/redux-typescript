import repositoriesType from "../action-type";

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
  
  export type Action = searchRepositoriesAction
    | searchRepositoriesSuccessAction
    | searchRepositoriesErrorAction
  