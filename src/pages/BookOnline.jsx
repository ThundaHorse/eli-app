import React, { useState } from "react";
import ApiCalendar from "react-google-calendar-api";
import { BookNowCalendar } from "../components/calendar";

export const BookOnline = () => {
  const [events, setEvents] = useState([]);
  const [signedIn, setSignedIn] = useState(false);

  const handleItemClick = (e, name) => {
    if (name === "sign-in") {
      ApiCalendar.handleAuthClick()
        .then(() => {
          console.log("sign in succesful!");
          setSignedIn(true);
        })
        .catch((e) => {
          console.error(`sign in failed ${e}`);
        });
    } else if (name === "sign-out") {
      ApiCalendar.handleSignoutClick();
      console.log("Signed out");
      setSignedIn(false);
    }
  };

  return (
    <>
      <BookNowCalendar />
    </>
  );
};
