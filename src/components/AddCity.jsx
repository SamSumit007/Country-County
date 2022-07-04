import React, { useState } from "react";

export const AddCity = () => {
  const [city, setcity] = useState({
    country: "",
    city: "",
    population: "",
  });
  const handleEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setcity({
      ...city,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    fetch("http://localhost:8080/cities", {
      method: "POST",
      body: JSON.stringify(city),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Country name</td>
              <td>
                <input type="text" name="country" onChange={handleEvent} />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input type="text" name="city" onChange={handleEvent} />
              </td>
            </tr>
            <tr>
              <td>Population</td>
              <td>
                <input type="text" name="population" onChange={handleEvent} />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Add City" />
      </form>
    </>
  );
};
