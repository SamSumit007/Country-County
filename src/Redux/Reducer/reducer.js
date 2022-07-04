import { GET_COUNTRY } from "../Action/ActionTypes";
async function getdata() {
  let data = await fetch("http://localhost:8080/countries");
  let d = await data.json();
  console.log(d);
  return d;
}
export const countryReducer = (store, { type, payload }) => {
  switch (type) {
    case GET_COUNTRY: {
      return { ...store, countries: getdata() };
    }

    default:
      return { ...store };
  }
};
