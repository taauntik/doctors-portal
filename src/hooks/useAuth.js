import jwt_decode from "jwt-decode";
import { useState } from "react";

async function getUserData(userid) {
  const response = await fetch(`http://localhost:5000/user/${userid}`);
  const data = response.json();
  return data;
}

export default function useAuth() {
  let decodedUser;
  let role;
  let userid;
  let loggedIn;
  const token = window.localStorage.getItem("token");
  if (token) {
    loggedIn = true;
  }
  // if (token) {
  //   decodedUser = jwt_decode(token);
  //   userid = decodedUser.userid;
  //   getUserData(userid).then(({ data }) => {
  //     if (data._id) {
  //       setLoggedIn(true);
  //     } else {
  //       setLoggedIn(false);
  //     }
  //   });
  // }

  return {
    loggedIn,
  };
}
