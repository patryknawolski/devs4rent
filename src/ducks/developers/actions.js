import { GET_DEVELOPERS_SUCCESS } from "./actionTypes";

export const loadDevelopersSuccess = developers => ({
  type: GET_DEVELOPERS_SUCCESS,
  developers
});