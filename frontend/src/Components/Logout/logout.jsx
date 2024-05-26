import React from 'react'
import axios from 'axios'

export default function logout() {
  const logouting = ()=>{
    axios
      .post("http://localhost/backend/api/logout.php")
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message === "Logout successful.") {
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  } 
  logouting();

  return (
    <></>
  )
}
