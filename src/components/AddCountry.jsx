import React, { useState } from "react";
export const AddCountry = () => {
  const [country, setcountry] = useState({
    country: "",
  });
  const handleEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setcountry({
      ...country,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/countries/", {
      method: "POST",
      body: JSON.stringify(country),
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
          </tbody>
        </table>
        <input type="submit" value="Add Country" />
      </form>
    </>
  );
};
