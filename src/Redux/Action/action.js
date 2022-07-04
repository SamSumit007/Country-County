// import { ADD_CITY } from "./ActionTypes";
// import { ADD_COUNTRY } from "./ActionTypes";
import { GET_COUNTRY } from "./ActionTypes";

export const getCountry = (data) => {
  return {
    type: GET_COUNTRY,
    payload: data,
  };
};
