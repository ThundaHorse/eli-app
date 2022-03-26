import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState } from "react";
import "./bookNowCalendar.scss";
import { BookNowModal } from "../modal";
import ApiCalendar from "react-google-calendar-api";

export const BookNowCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [dayInfo, setDayInfo] = useState({});
  const [signedIn, setSignedIn] = useState(false);

  const eventClicked = (info) => {
    info.jsEvent.preventDefault();

    if (info.event.url) {
      window.open(info.event.url);
    }
  };

  const handleDateClick = (info) => {
    if (signedIn) {
      const date = info.date;
      setDayInfo({
        date: info.dateStr,
        year: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        day: date.getDay(),
        timeStr: date.toUTCString(),
        dateStr: date.toDateString(),
        start: {
          dateTime: "",
          timeZone: "",
        },
        end: {
          dateTime: "",
          timeZone: "",
        },
      });
      setShowModal(true);
    } else {
      handleGoogleAuth();
    }
  };

  const handleGoogleAuth = () => {
    if (!signedIn) {
      ApiCalendar.handleAuthClick()
        .then(() => {
          console.log("sign in succesful!");
          setSignedIn(true);
        })
        .catch((e) => {
          console.error(`sign in failed ${e}`);
        });
    } else {
      ApiCalendar.handleSignoutClick();
      console.log("Signed out");
      setSignedIn(false);
    }
  };

  const modalHandler = () => {
    setShowModal(false);
    setDayInfo({});
  };

  return (
    <>
      <div className='container'>
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          themeSystem='bootstrap5'
          googleCalendarApiKey={process.env.REACT_APP_CALENDAR_API_KEY}
          headerToolbar={{
            left: "",
            center: "title",
          }}
          events={{
            googleCalendarId: process.env.REACT_APP_CALENDAR_ID,
            className: "gcal-event",
          }}
          lazyFetching={true}
          selectAllow={true}
          dateClick={handleDateClick}
          eventClick={eventClicked}
        />

        <br />

        <BookNowModal
          showModal={showModal}
          modalHandler={modalHandler}
          dayInfo={dayInfo}
        />
      </div>
    </>
  );
};
