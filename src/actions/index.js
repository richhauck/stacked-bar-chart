import { DATA_REQUESTED } from "../constants/action-types";

export function getData() {
  return { type: DATA_REQUESTED };
};