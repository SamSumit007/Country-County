import { legacy_createStore as createStore } from "redux";
import { countryReducer } from "../Reducer/reducer";
// async function getdata() {
//   let data = await fetch("http://localhost:8080/countries");
//   let d = await data.json();
//   console.log(d);
//   return d;
// }
let initialState = { countries: [] };
export const store = createStore(countryReducer, initialState);
