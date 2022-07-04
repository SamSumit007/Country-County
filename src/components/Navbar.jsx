import React from 'react'
import{Link} from 'react-router-dom';
export const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="add-country">Add Country</Link>
        <Link to="add-city">Add City</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
