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
          title: "Portrait Palooza and Tattoo Booth",
          date: "11.10.2023",
          venue: "NEAR SAC",
          description:
            `The artist and their passionate immersed in two great event under 
the Expresso named as Portrait Palooza and Tattoo Booth on 10th February, 2024 from 
2.30 pm onwards at Pmc offering a vibrant blend of live tattooing and portrait artistry. 

Attendees could witness skilled tattoo artists at work, getting inked with unique designs 
or watching as intricate portraits came to life on canvases.
        
The event was a haven for art lovers, featuring interactive sessions where participants 
could learn about tattoo techniques and portrait drawing. It was a day of creativity, 
inspiration, and the celebration of artistic expression. `,
          images: ["/eventPic.png", "/eventPic.png", "/eventPic.png"], // Array of image paths
        }}
      />
    </div>
  );
};

export default EventPage;
