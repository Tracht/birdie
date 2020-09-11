import { combineReducers } from 'redux';

export type RootState = Readonly<{}>;

export const rootReducer = combineReducers<RootState>({});

// import { ADD_ARTICLE } from "../types";

// const initialState = {
//   articles: [],
//   remoteArticles: []
// };

// function rootReducer(state = initialState, action: any) {
//   if (action.type === ADD_ARTICLE) {
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload)
//     });
//   }
//   if (action.type === "DATA_LOADED") {
//     return Object.assign({}, state, {
//       remoteArticles: state.remoteArticles.concat(action.payload)
//     });
//   }
//   return state;
// }

export default rootReducer;