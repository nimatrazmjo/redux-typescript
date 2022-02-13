import axios from "axios";

import { Action } from "../actions";

import repositoriesType from "../action-type";
import { Dispatch } from "react";

export const searchReposity = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: repositoriesType.SEARCH_REPOSITORIES
        });

        try {
            const { data } = await axios.get(
                'https://registry.npmjs.org/-/v1/search',
                {
                  params: {
                    text: term,
                  },
                }
              )

            const names = data.objects.map((result: any) => result.package.name);

            dispatch({
                type: repositoriesType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })
        } catch (error: any) {
            dispatch({
                type: repositoriesType.SEARCH_REPOSITORIES_ERROR,
                payload: error.mesage
            })
        }
    }
}