import React from "react";
import Event from "./Event";
import EventFirstPage from "./EventFirstPage";
import AllEventsPage from "./AllEventsPage";
import EventDesc from "./EventDesc";
import UpcomingEvent from "./UpcomingEvent";
const EventPage = () => {
  return (
    <div>
      <EventFirstPage />
      <Event />
      <UpcomingEvent />
      <AllEventsPage />
      <EventDesc
        event={{
          title: "EVENT-2",
          date: "11.10.2023",
          venue: "NEAR SAC",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          images: ["/eventPic.png", "/eventPic.png", "/eventPic.png"], // Array of image paths
        }}
      />
    </div>
  );
};

export default EventPage;
