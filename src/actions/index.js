import { DATA_REQUESTED, CHANGE_VIEW_MODE } from "../constants/action-types";

export function getData() {
  return { type: DATA_REQUESTED };
};
export function setViewMode(mode){
  return { type: CHANGE_VIEW_MODE, payload: mode};
}