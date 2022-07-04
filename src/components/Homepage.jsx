import axios from "axios";
import React, { useEffect, useState } from "react";

export const Homepage = () => {
  const [city, setCity] = useState([])
  useEffect(() => getData(), []);

  const getData = () => {
    axios.get(`http://localhost:8080/cities`).then((res) => {
      console.log("res data", res.data);
      setCity([...res.data]);
    });
  };
 
  function sortChange(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <div className="filter">
        Country
        <select>
          <option value="">india</option>
        </select>
      </div>
      <div className="sort">
        <select onChange={sortChange}>
          <option value="">Population</option>
          <option value="ascending">Assending</option>
          <option value="decending">Decending</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="tbody">
        {city.map((e) => {
            return (
              <tr className="row">
                <td>{e.id} </td>
                <td>{e.country} </td>
                <td>{e.city} </td>
                <td>{e.population} </td>
                <td>Edit </td>
                <td>Delete </td>

              </tr>
               )
              })}
        </tbody>
      </table>
    </>
  );
};
