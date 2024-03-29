import { combineReducers } from "redux";

import top from "./top";
import episode from "./episode";
import episodes from "./episodes";
import details from "./details";
import search from "./search"
import favorites from "./favorites"
import watched from "./watched"
import update from "./update"

const rootReducer = combineReducers({
  top,
  episode,
  episodes,
  details,
  search,
  favorites,
  watched,
  update,
})

export default rootReducer
