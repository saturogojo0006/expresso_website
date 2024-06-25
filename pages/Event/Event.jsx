import React, { useState, useEffect } from "react";
import Image from "next/image";
// import {NavLink, Navigate, useNavigate} from 'react-router-dom' ;

const Event = () => {
  const [events, setEvents] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [overlay, setOverlay] = useState({ isOpen: false, image: null });
 
  // const goBackHome = () => {
  //   Navigate('/');
  // };
  
  const fetchEventData = async () => {
    const data = [
      {
        id: 1,
        title: "Doodle Your Day",
        description: `"Art is the language of the soul, speaking volumes where words falter, and painting colors of humanity’s shared journey."
"Expresso" - the art and literary club of NIT Patna had organized an interesting event on 15th April at the front of Architecture department as we celebrated World Art day with our exciting event, Doddle your day.
Doodling made a creative outlet, relaxation, and sometimes unexpected inspiration. It’s a way to let your mind wander and express itself freely. On that evening every detail find its place in the tapestry of time. Each doodle captures a fragment of time, weaving together the story of the day well-lived.`,
        images: [
          "https://drive.google.com/uc?export=view&id=1_9COrNsZ_R4d3AbK0DkXepbjrJIrvK2x",
          "https://drive.google.com/uc?export=view&id=1qzHpqHAZXaNosv_Usov-nzAuqIJtsL6G",
          "https://drive.google.com/uc?export=view&id=19saXVqqJYGtic09tOYXKTbXHfkGKgbjH",
          "https://drive.google.com/uc?export=view&id=1y698mqcbW3OEyJ0MmoFq6ldojSv2jT3o",
          "https://drive.google.com/uc?export=view&id=1x4YnI4uQXsOEstB-1anmfre243pgZLWy",
          "https://drive.google.com/uc?export=view&id=11L59xTpdtoRlSRHLiCe8p-_ZYVQQmpzt",
        ],
      },
      {
        id: 2,
        title: "Dil se Canvas",
        description: `Expresso is all about expressing yourself, and this time 
you can do it in “Dil Se Canvas”. This is one of the awesome events of Expresso, 
where two artists team up to create magic on a canvas! First, one artist starts 
with the theme, then they swap, and the other finishes it. Organized at 
CV Raman Hall on March 3rd, 2024, at 5:00 pm, so just grab your partner now and 
unleash your creativity. We will give you paint and you’ll give us painting. 
Let your creativity shine!`,
        images: [
          "https://drive.google.com/uc?export=view&id=1nM-6o2etnG-ai1pCTrpBGHKMqvBWPPAU",
          "https://drive.google.com/uc?export=view&id=1m4sn77c9Dv4s6ltcqRwkVjN5A6sIapwG",
          "https://drive.google.com/uc?export=view&id=1Y2_DnJKmqBblYpgdHqYiPESBGy1W2-oQ",
          "https://drive.google.com/uc?export=view&id=1-cD4sYI-vc-aThk1bzLJDVYXFb1jQS8Q",
          "https://drive.google.com/uc?export=view&id=1L6NwNbPex0iEEK0mc7VrkgvRW0fhy3PK",
        ],
      },
      {
        id: 3,
        title: "MUN",
        description: `The aroma of NIT Patna immersed in Diplomacy as the first 
ever Model United Nations (MUN) of the campus commenced on 9th and 10th September 
of 2k23 in the Visvesvaraya Hall. MUN acts as a simulation of the working of 

United Nations giving students the opportunity to act like delegates representing 
their allotted nations.

In our edition we had 3 committees to facilitate proceedings namely 
1.General Assembly: For tackling global challenges with wide coordination.
2.Security Council: Resolving security concerns as world leaders.
3.International Press: To give a sneak peek of international proceeding to masses.
          
The curtain rang up on the first day with General Assembly and rang down on the 
following day with Security Council, while the press covered both the proceedings. 
Participants enjoyed the festivities and got exposure to International Diplomacy 
reporting a significant enhancement in their public speaking and planning skills.`,
        images: [
          "https://drive.google.com/uc?export=view&id=1YqKLiExA_l_YWnLvkc8sAMQZceemTqYq",
          "https://drive.google.com/uc?export=view&id=11uWINvUJYC7jhVP5oKvx0dTLKO5g9S77",
          "https://drive.google.com/uc?export=view&id=17eRhpN5a8bB06068EhrBitjwpzUOx7Wj",
          "https://drive.google.com/uc?export=view&id=1ot8kuBOBKdGgz3s8-eKm-2MAf5iTeiTT",
          "https://drive.google.com/uc?export=view&id=1JZ7diMyYh19Cm4KxFHRrIvViP2cRQQ8L",
          "https://drive.google.com/uc?export=view&id=1rlKr-84Sm-bJG_0Rd_2dXtV3W1ND5zPZ",
          "https://drive.google.com/uc?export=view&id=1mzPdo4E4YbXiktyOiWBkmQtNkLhPVldB",
        ],
      },
      {
        id: 4,
        title: "AAWAAZ",
        description: `The NIT Patna , under the collaboration of  
Expresso - the Literary & Art Club and Saptak - the music club hosted a 
captivating event , AAWAAZ Shayari and Ghazal Night on 13th September , 2023 
from 5:30 pm onwards  in the ever lively C.V. Raman Hall.

The attendees were treated to a mesmerizing display of poetic prowess, as 
each poet shared their unique perspectives and interpretations of love, life, 
and the human experience.

AAWAAZ was a resounding success , leaving a lasting impression on everyone who 
attended. This was possible only due to the amazing cooperation and active 
participation of the members of both the fantastic clubs of NIT Patna , 
Expresso - The Literary & Art Club & Saptak - The Music Club.`,
        images: [
          "https://drive.google.com/uc?export=view&id=1XBK49Y-SY4apQFFHG7Gz8TFJcu3SfaoQ",
          "https://drive.google.com/uc?export=view&id=1ntv9S8DyCp09gDTSeZ9TJw1sDVKRMgUG",
          "https://drive.google.com/uc?export=view&id=1zPyteJ4cM9tS4bC6U8KJKOd7lld9a_Mr",
          "https://drive.google.com/uc?export=view&id=15I3ZGSQ6tGvVIz2Q3RPgVrrLKED6SAOI",
          "https://drive.google.com/uc?export=view&id=1X2bzxqxVQpKw7xwBJQJK-yAqARW1Hk77",
          "https://drive.google.com/uc?export=view&id=1BpBybbbLJwCfFw4HK8zaBRIIzHZE71Fa",
        ],
      },
      {
        id: 5,
        title: "Kitabe Padho Behas Nhi Tark Do..",
        description: `"Books are our Bestfriends , windows to the World."
        
EXPRESSO: The art and literary club of NITPatna
Started an online Event called " किताबे पढो - बहस नही तर्क दो   "..on 1st March, 2024.
Every month a Book is started in which on each Wednesday and Sunday a content derived 
from the book is posted  on Instagram handel of Expresso.

- March was the month of Book- “CHANAKYANITI” by acharya Chankya ..

Chanakyaniti is a collection of aphorisms composed by Chanakya. It is a set of ideas
and statements given by the acharya  Chankya  many of which give valuable tips on 
how to lead a good and productive life even in this day and age.


- April was the month of “MADHUSHALA” by harivanshrai bachchan .

Madhushala is a classic poetry book. The poetic narrative symbolises life as 
a tavern or a public drinking place. It teaches us to have a must life goal 
otherwise we will live in distraction and get deviated on life.

- May was the month magic love with " Gunaho Ka Devta " by Dharamveer Bharti .


The novel tells the passionate love story of Chander and Sudha. The book also 
addresses moral and ethical concerns . The main character, Chander, is a complex man 
who struggles to balance between his loyalty to his friend Pammi and his desire 
for Sudha. The story examines the tension between obligation 
and desire, as well as effect of our decisions.

- June was the month of Enlightenment with " GOD OF LITTLE THINGS " 
by Arundhati Roy

It is a story about the childhood experiences of fraternal twins whose lives
are destroyed by the "Love Laws" prevalent in 1960s Kerala, India.This novel 
explores love and how love can't be ignored when confronted with social boundaries. 
The novel examines how conventional society seeks to destroy true love as 
this novel is constantly connected to loss, death and sadness.

This series will stay continued and will bring  best out of bestBooks to the readers 
& learning enthusiasts...`,
        images: [
          "https://drive.google.com/uc?export=view&id=1ZdujiG9hnilCFSUi6QIOPF9E29We_itO",
          "https://drive.google.com/uc?export=view&id=1Ko8DqU_mHcOIky7lvYb5hIj5_qXgHcv1",
          "https://drive.google.com/uc?export=view&id=1vR9NcBVu0VCW5FZtgwfQMkpdLRfphyfs",
          "https://drive.google.com/uc?export=view&id=1Kd3qw7cT-0RJWNV80cNQq_oKpSvx5NXZ",
          "https://drive.google.com/uc?export=view&id=1Hl0pWXX4IBVhDNPWS4xATU3VW65lyuCa",
        ],
      },
      
      {
        id: 6,
        title: "TCF_Avlokan",
        title: 'TCF_Avlokan',
        description: `"The power of a mastermind lies in their ability to see the bigger picture and connect the dots"!
        Expresso - Literary and Art Club of NIT Patna organized a series of events under Avlokan in TCF '24, providing an opportunity to hone your abilities and talents in the fun-filled hours of dares, wisdom, writing, and spelling.

        Avlokan brought together students with a passion for intellectual pursuits, spelling prowess, and creative writing. The event kicked off with Spelling Bee and Geek-O-Brain on January 24th, followed by Don't You Dare And Nazm on January 26th.

        1. Geek-O-Brain explored the knowledge, analytical and critical thinking skills of the individuals by a quiz based on diverse topics, an interesting and informative sub-event for participants as well as the audience.

        2. Spelling Bee showcased the linguistic prowess of students, it accommodated a wide range of vocabulary and challenged participants appropriately, consisting of two parts - Rapid Fire Spell-it-out and Unscramble.

        3. Nazm highlighted the creativity and poetic skills of the participants as they presented shayri and poems incorporating a specific trigger word. The team with the most creative and skillful poetry were crowned the Nazm event champions.

        4. In Don't you Dare, participants were given a dare to perform through chit-selection in the allotted time. The event was individual participation and participants performed the dare among excitement and laughter.

        Following these enthusiastic and spirited events, participants found a sense of belonging in the literary and artistic community at NIT Patna, recognizing the talent and skills of all involved.`,
        images: [
          "https://drive.google.com/uc?export=view&id=1jnD5R6O2lA3XpNkxzIu04q0AQvImEkUI",
          "https://drive.google.com/uc?export=view&id=1CamCCY355BtkDS2AXdO5NFXxvhkmLFEf",
          "https://drive.google.com/uc?export=view&id=1MqIsMO1_18-G4G5TWIXvTEYEZzKdjRCG",
          "https://drive.google.com/uc?export=view&id=1Ei3LmDuB37s9l7gPMtR2lLbI0iiSIlwq",
          "https://drive.google.com/uc?export=view&id=1QnYBYP9lz_xuHzFzVD2kGGMklYUXTddQ",
          "https://drive.google.com/uc?export=view&id=1qb84ahX2cieoA4ir-YyvC8ubshAQkLex",
        ],
      },
      {
        id: 7,
        title: "Tcf_Sanhita",
        description: `Literature and debate are twin pillars of intellectual growth; while literature enriches our minds with diverse narratives and profound truths, debate sharpens our ability to challenge, defend, and refine those ideas through rigorous discourse.

        During TCF'24 , the Literature and Art Club of NIT Patna, Expresso  organized a series of stimulating debates under the event named SANHITA '24 . Each of the debates had many teams each consisting of 3 members.
        
        The event consisted of :
          1. Parliamentary Debate
            - Teams argue for or against a motion in a formal, structured format, simulating parliamentary procedures. Participants must use logic, evidence, and rhetoric to defend their stance, with a focus on quick thinking and teamwork.
          2. English Debate
            - Teams debate on various topics in English, focusing on clear articulation, strong arguments, and rebuttals. The emphasis is on language proficiency, critical analysis, and persuasive speaking skills.
          3. Hindi Debate
            - Similar to the English Debate but conducted in Hindi, this event challenges participants to demonstrate their debating skills in their native language, promoting cultural and linguistic diversity.      
          4. Turn Coat
            - A single participant must argue both for and against a given topic, switching sides at designated intervals. This format tests the debater's ability to understand and articulate both perspectives, showcasing flexibility and comprehensive understanding of the subject.
          5. Story Wars
            - Teams of three are given a picture and tasked with collaboratively writing a story based on it. This event,emphasizes creativity, teamwork, and narrative skills, allowing participants to explore imaginative storytelling.
        
        These events saw enthusiastic participation from students across various disciplines, engaging in thought-provoking discussions on diverse topics. The debates highlighted the power of critical thinking, fostering an environment of intellectual curiosity and lively discourse.
        `,
        images: [
          "https://drive.google.com/uc?export=view&id=1OueiPz3IF8bMjrSjLpQqYoEFa9ljTxKV",
          "https://drive.google.com/uc?export=view&id=1yTJP9Ncx4YHieY6gIr8oqbvC96Rq_oCS",
          "https://drive.google.com/uc?export=view&id=1XwKKWKsNofwe_mAhVpsqSvgLcGSNZM9n",
          "https://drive.google.com/uc?export=view&id=1QLkbGAEJBHVoa0Uq6CQQnH7diSwUIST-",
          "https://drive.google.com/uc?export=view&id=1LvOwSac26eJTaHwcSYjUCPcmQrhRkjXc",
          "https://drive.google.com/uc?export=view&id=1iUwg2gJ54zihRCGOkzG_bocsbmLj3Nb3",
        ],
      },
      {
        id: 8,
        title: `Valentine's Week`,
        description: ` What's better than sharing your feelings and thoughts to your favourite person without the fear of judgement, that too in the love-filled and heartfelt week of valentine's.

        Expresso organised a fun event during the valentine's week from 7th to 14th February titled 'Love is in the air' which allowed everyone to pour their heart out anonymously.
        
        The club's social media handle acted as a messenger to deliver the special messages in a secret way, i.e without letting the receiver know about the one who wrote the message.
        
        This event allowed students to nurture new connections that enhanced their social experiences in the college and created a vibrant and inclusive environment which celebrated different forms of love and connections. `,
        images: [
          "https://drive.google.com/uc?export=view&id=1lD7lgJUeGrKDiQPM3eouCP_7dPd9eHp2",
          "https://drive.google.com/uc?export=view&id=1Dr1wR2XXfLPfMKBAI7VxpFlC0qGroEkf",
          "https://drive.google.com/uc?export=view&id=1Elu-bztGLxlX1pgGXEEvz4Z2jiVFHlE4",
        ],
      },
      {
        id: 9,
        title: "Movie Matinee",
        description: `Expresso’s Signature Event, Secret Valentine, brought an unforgettable cinematic experience to NIT Patna  with the screening of Sita Ramam! 

        As part of the broader Secret Valentine celebration, Movie Matinee was organized by Expresso, the Art and Literary Club of NITP.
        
        On February 9th, 2024, at Meghnad Saha Hall, we gathered to celebrate Valentine’s week filled with drama and love. Starting at 5:30 PM, the event transformed the hall into a hub of excitement and anticipation.  The atmosphere was electric as the lights dimmed and Sita Ramam began, promising to deliver not just a movie, but an experience that resonated deeply with each viewer. The film’s compelling narrative of love and connection was perfect for the season of romance. 
        
        It was more than just a movie night; it was a communal celebration of storytelling and shared emotions, all orchestrated by Expresso.
        
        The event truly highlighted the magic of cinema in bringing people together, making it an evening to remember.
        `,
        images: [
          "https://drive.google.com/uc?export=view&id=1pZXAtVnyjzRxE__LWd5vOS5yHA-UZJDW",
          "https://drive.google.com/uc?export=view&id=1egNy-bNoa2lCSxyX56XDjV0Dz0LfrjYo",
          "https://drive.google.com/uc?export=view&id=16io85ugk4pGFQ8NzfzTXng88k9WsgCZX",
        ],
      },
      {
        id: 10,
        title: "Portrait Palooza and Tattoo Booth",
        description: ` The artist and their passionate immersed in two great event under the Expresso named as Portrait Palooza and Tattoo Booth on 10th February, 2024 from 2.30 pm onwards at Pmc offering a vibrant blend of live tattooing and portrait artistry. 

        Attendees could witness skilled tattoo artists at work, getting inked with unique designs or watching as intricate portraits came to life on canvases.
        
        The event was a haven for art lovers, featuring interactive sessions where participants could learn about tattoo techniques and portrait drawing. It was a day of creativity, inspiration, and the celebration of artistic expression.
        `,
        images: [
          "https://drive.google.com/uc?export=view&id=1d0bDyf_c2HPAs5g2mLVsDt4ZKneEk7ou",
          "https://drive.google.com/uc?export=view&id=1YtZjDXVmrP4BChWGiGbdfbtq7Zi2pGGO",
          "https://drive.google.com/uc?export=view&id=1I-F9d-pZM0RBkhiib-YKdoNwjDinMFxU",
          "https://drive.google.com/uc?export=view&id=1-iZPbK4XH3CFQ0rIuBky6v0l79zX5y3W",
        ],
      },
      {
        id: 11,
        title: "Tcf_Kalakriti",
        description: ` Art is the expression of emotions and beauty in a creative manner that stirs the soul ….. 

        “ _Expresso_ “-the art and literary club of Nit Patna , organised “ _kalakriti_ “ an event under TCF ’24 calling all the artists to unleash their artistic spirit in the most creative and amazing manner. The event was comprised of multiple sub-events with a 2-3 member participation in each group in a never seen before interesting way!         
        
        It had a total sparks of ten events :-
          1. Dye verse 
            - a ‘T-shirt painting ‘competition …. One of the most interesting events according to all the participants…         
          2. Frame the Face 
            -  a competition where you would get to paint the face of people in the surroundings….                 
          3. No Brushes 
            - painting was to be done based on a theme but without using any brush .
          4. Caricature-Culture - a cartoon character making competition which reminds us of our childhood memories……        
          5. DoodleFiesta 
            - a solo competition of doodle making with creativity and talent….   
          6. Safar e Rangoli 
            - a 3 membered competition to make a colourful rangoli based on a given theme .. 
          7. Clay- clash 
            -it reminds us of the fragnance of depicting our hidden talent….a two membered competition to craft a clay model based on instant theme…… 
          8. TattooFiesta 
            - this is the event of creating tatoo on the arm of the random people with their own creativity and originality…. 
          9. CineFrame 
            - based on originality and visualisation participants have to frame the given theme work…         
          10. Mosaic-Marvel 
            - collage making event with solo or group of 2 participants… 
        
        These idiosyncratic ideas and interesting events encourage the participants to show their talents and creativity with the enhancement by glorifying their qualities ....
        `,
        images: [
          "https://drive.google.com/uc?export=view&id=1ZXgELRdXETPbFGimQcfDnDfE5Y0m3rPu",
          "https://drive.google.com/uc?export=view&id=11ZAiGywVWm_iPylMRNv-oTKGwgQJC0x5",
          "https://drive.google.com/uc?export=view&id=1Yyt9n49QZiuALvSUUojVlAPOjsjBOO7d",
          "https://drive.google.com/uc?export=view&id=1Nn1-BLYTMhqu_bK90IuEgpOjWhtzBATN",
          "https://drive.google.com/uc?export=view&id=1jkGaFppYUy2W3gB1hy2GqjX973yZFIKd",
          "https://drive.google.com/uc?export=view&id=1ZAOoKSbp5LVo63Hf2zDskxVOJlaP48J_",
        ],
      },
    ];
    setEvents(data);

    const initialImageIndex = data.reduce((acc, event) => {
      acc[event.id] = 0;
      return acc;
    }, {});
    setCurrentImageIndex(initialImageIndex);
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  const handleNextImage = (eventId) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [eventId]:
        (prevState[eventId] + 1) %
        events.find((event) => event.id === eventId).images.length,
    }));
  };

  const handlePrevImage = (eventId) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [eventId]:
        (prevState[eventId] -
          1 +
          events.find((event) => event.id === eventId).images.length) %
        events.find((event) => event.id === eventId).images.length,
    }));
  };

  const openOverlay = (image) => {
    setOverlay({ isOpen: true, image });
  };

  const closeOverlay = () => {
    setOverlay({ isOpen: false, image: null });
  };

  return (
    <div className="flex flex-col bg-[#4B4B4B] h-full pt-4 px-4 sm:px-8 sm:justify-center">
      <button className="self-end h-[29px] w-[109px] mb-4 sm:mb-0"
      // onClick={goBackHome}
      >
        <div className="flex gap-1 flex-row-reverse items-center">
          <div className="text-white text-xl font-antonio pb-1">BACK</div>
          <div className="border-2 rounded-full border-white p-1">
            <Image src="/Arrow2.png" width={20} height={20} alt="Arrow" />
          </div>
        </div>
      </button>

      {events.map((event, index) => (
        <div
          key={event.id}
          className={`flex flex-col sm:flex-row items-center sm:items-${
            index % 2 === 0 ? "start" : "end"
          } mt-4 gap-4`}
        >
          <div
            className={`w-full sm:w-auto ${
              index % 2 !== 0 ? "sm:order-2" : ""
            } `}
          >
            <div
              className="relative  h-80 w-80 lg:mx-4 overflow-hidden rounded-full border-4 border-[#FEB952] cursor-pointer mx-auto shadow-lg shadow-slate-100"
              onClick={() =>
                openOverlay(event.images[currentImageIndex[event.id]])
              }
            >
              <Image
                src={event.images[currentImageIndex[event.id]]}
                layout="fill"
                objectFit="cover"
                alt="Event Picture"
              />
            </div>
            <div className="flex items-center justify-center mt-2 text-white text-[24px] font-bold p-2">
              <button
                onClick={() => handlePrevImage(event.id)}
                className="px-2"
              >
                {"<"}
              </button>
              <span className="px-4">
                {currentImageIndex[event.id] + 1}/
                {events.find((event) => event.id === event.id).images.length}
              </span>
              <button
                onClick={() => handleNextImage(event.id)}
                className="px-2"
              >
                {">"}
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full sm:ml-4 lg:mx-16 ">
            <div
              className={`font-antonio text-white text-2xl sm:text-5xl ${
                index % 2 !== 0 ? "text-right" : ""
              }`}
            >
              {event.title}
            </div>
            <div
              className="text-[#ffffff] text-base sm:text-lg bg-cover bg-center p-4 mt-4 mb-6 whitespace-pre-line overflow-y-auto max-h-64 rounded-2xl"
              style={{ backgroundImage: `url('/event.png')` }}
            >
              {event.description}
            </div>
          </div>
          </div>
       
      ))}

      {overlay.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeOverlay}
        >
          <div className="relative w-4/5 h-4/5">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeOverlay}
            >
              &times;
            </button>
            <div className="flex justify-center items-center h-full">
              <Image
                src={overlay.image}
                layout="fill"
                objectFit="contain"
                alt="Overlay"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
