import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Event = () => {
  const [events, setEvents] = useState([]);

  // Mimicking an API call to fetch event data
  const fetchEventData = async () => {
    // Simulated data, replace with actual API call
    const data = [
      {
        id: 1,
        title: 'Art_Doodle your day',
        description: `“Art is the language of the soul, speaking volumes where words falter,and painting colors of humanity’s shared journey.” 

      “Expresso”- the art and literary club of NIT Patna had organised an interesting event on 15th April at the front of Architecture department as we celebrated World Art day with our exciting event, Doddle your day 

      Doddling made a creative outlet, relaxation,and sometimes unexpected inspiration.It’s a way to let your mind wander and express itself freely.

      On that evening every detail find its place in the tapestry of time.Each doodle captures a fragment of time, weaving together the story of the day well-lived.
      `,
        image: '/eventPicture.png'
      },
      {
        id: 2,
        title: 'kitabe padho behas nhi tark do..',
        description: `" Books are our Bestfriends , 
        windows to the World ."
        EXPRESSO : The art and literary club of NITPatna 
        Started an online Event called " किताबे पढो - बहस नही तर्क दो   "..on 1st March,2024.
        Every month a Book is started in which on each wednesday and Sunday a content derived from the book is posted  on Instagram handel of Expresso .

        ●_ March was the month of Book- “CHANAKYANITI” by acharya Chankya ..
       Chanakyaniti is a collection of aphorisms composed by Chanakya. It is a set of ideas and statements given by the acharya  Chankya  many of which give valuable tips on how to lead a good and productive life even in this day and age.
        ● _April was the month of “MADHUSHALA” by harivanshrai bachchan .
        Madhushala is a classicpoetry book .The poetic narrative symbolises life as a tavern or a public drinking place. It teaches us to have a must life goal otherwise we will live in distraction and get deviated on life.
        ●_May was the month magiclove with " Gunaho Ka Devta " by Dharamveer Bharti .
        The novel tells the passionate love story of Chander and Sudha. The book also addresses moral and ethical concerns . The main character, Chander, is a complex man who struggles to balance between his loyalty to his friend Pammi and his desire for Sudha. The story examines the tension between obligation and desire, as well as effect of our desicions. 
        ●_June was the month of Enlightenment with " GOD OF LITTLE THINGS " by Arundhati Roy
        It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the "Love Laws" prevalent in 1960s Kerala, India.This novel explores love and how love can't be ignored when confronted with social boundaries. 
        The novel examines how conventional society seeks to destroy true love as this novel is constantly connected to loss, death and sadness.
        This series will stay continued and will bring  best out of bestBooks to the readers & learning enthusiasths...`,
        image: '/Group 204.png'
      },
      {
        id: 3,
        title: 'literature _mun',
        description: `The aroma of NIT Patna immersed in Diplomacy as the first ever Model United Nations (MUN) of the campus commenced on 9th and 10th September of 2k23 in the Visvesvaraya Hall. MUN acts as a stimulation of the working of United Nations giving students the opportunity to act like delegates representing their allotted nations.


        In our edition we had 3 committees to facilitate proceedings namely 
        1.General Assembly: For tackling global challenges with wide coordination.
        2.Security Council: Resolving security concerns as world leaders.
        3.International Press: To give a sneak peek of international proceeding to masses.
        
        
        The curtain rang up on the first day with General Assembly and rang down on the following day with Security Council, while the press covered both the proceedings. Participants enjoyed the festivities and got exposure to International Diplomacy reporting a significant enhancement in their public speaking and planning skills.`,
        
        image: '/eventPicture.png'
      },
      {
        id: 4,
        title: 'Literature_AAWAAZ',
        description: `The NIT Patna , under the collaboration of  Expresso - the Literary & Art Club and Saptak - the music club hosted a captivating event , AAWAAZ Shayari and Ghazal Night on 13th September , 2023 from 5:30 pm onwards  in the ever lively C.V. Raman Hall.


        The attendees were treated to a mesmerizing display of poetic prowess, as each poet shared their unique perspectives and interpretations of love, life, and the human experience.
        
        
        AAWAAZ was a resounding success , leaving a lasting impression on everyone who attended. This was possible only due to the amazing cooperation and active participation of the members of both the fantastic clubs of NIT Patna , Expresso - The Literary & Art Club & Saptak - The Music Club .`
        ,
        image: '/eventPicture.png'
      }, 
      {
        id: 5,
        title: 'literature_dil se canvas',
        description: `Expresso is all about expresing yourself, and this time you can do it in “Dil Se Canvas” . This is one of the awesome event of expresso, where two artists team up to create magic on a canvas! First, one artist starts with the theme, then they swap, and the other finishes it. Organised at CV Raman Hall on March 3rd, 2024, at 5:00 pm, so just grab your partner now and unleash your creativity. We will give you paint and you’ll give us painting. Let your creativity shine!`
        ,
        image: '/eventPicture.png'
      }, 
      {
        id: 6,
        title: 'Literature_TCF_Avlokan',
        description: `"The power of a mastermind lies in their ability to see the bigger picture and connect the dots"!

        Expresso - Literary and Art Club of NIT Patna organized a series of events under Avlokan in TCF '24, providing an opportunity to hone your abilities and talents in the fun filled hours of dares, wisdom, writing and spelling.

        Avlokan brought together students with a passion for intellectual pursuits, spelling prowess, and creative writing. The event kicked off with Spelling Bee and Geek-O-Brain on January 24th, followed by Don't You Dare And Nazm on January 26th.

        Geek-O-Brain explored the knowledge, analytical and critical thinking skills of the individuals by quiz based on diverse topics, an interesting and informative sub-event for participants as well as the audience.

        Spelling Bee showcased the linguistic prowess of students, it accommodated a wide range of vocabulary and challenged participants appropriately, consisting of two parts - Rapid Fire Spell-it-out and Unscramble.

        Nazm highlighted the creativity and poetic skills of the participants as they presented shayri and poems incorporating a specific trigger word. The team with the most creative and skillful poetry were crowned the Nazm event champions.

        In Don't you Dare, participants were given a dare to perform through chit-selection in allotted time. The event was individual participation and participants performed the dare among excitement and laughter.

        Following these intense sessions, the excitement continued with participants expressing their thoughts and emotions, testing their resolve and daring spirit, reminding us of the power of words and the importance of seeing the bigger picture in literature and art.

        Avlokan 2024 was more than just an event, it was a collaboration of intelligence, creativity, fun and knowledge. We eagerly anticipate many more enjoyable and enriching experiences like this in the future.`  
,
        image: '/eventPicture.png'
      }, 
      {
        id: 7,
        title: 'Literature_Tcf_Sanhita',
        description: `Literature and debate are twin pillars of intellectual growth; while literature enriches our minds with diverse narratives and profound truths, debate sharpens our ability to challenge, defend, and refine those ideas through rigorous discourse.

        During  TCF'24 , the Literature and Art Club of NIT Patna, Expresso  organized a series of stimulating debates under the event named SANHITA '24 . Each of the debates had many teams each consisting of 3 members.
        
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
           - Teams of three are given a picture and tasked with collaboratively writing a story based on it. This event emphasizes creativity, teamwork, and narrative skills, allowing participants to explore imaginative storytelling.
        
        These events saw enthusiastic participation from students across various disciplines, engaging in thought-provoking discussions on diverse topics. The debates highlighted the power of critical thinking, fostering an environment of intellectual curiosity and lively discourse.`
        ,
        image: '/eventPicture.png'
      }, 
      {
        id: 8,
        title: `literature_valentine's week`,
        description:`What's better than sharing your feelings and thoughts to your favourite person without the fear of judgement, that too in the love-filled and heartfelt week of valentine's.
        Expresso organised a fun event during the valentine's week from 7th to 14th February titled 'Love is in the air' which allowed everyone to pour their heart out anonymously.
        
        The club's social media handle acted as a messenger to deliver the special messages in a secret way, i.e without letting the receiver know about the one who wrote the message.
        
        This event allowed students to nurture new connections that enhanced their social experiences in the college and created a vibrant and inclusive environment which celebrated different forms of love and connections.`
        ,
        image: '/eventPicture.png'
      }, 
      {
        id: 9,
        title: 'Movie matinee',
        description: `Expresso’s Signature Event, Secret Valentine, brought an unforgettable cinematic experience to NIT Patna  with the screening of Sita Ramam! 

        As part of the broader Secret Valentine celebration, Movie Matinee was organized by Expresso, the Art and Literary Club of NITP.
        
         On February 9th, 2024, at Meghnad Saha Hall, we gathered to celebrate Valentine’s week filled with drama and love. Starting at 5:30 PM, the event transformed the hall into a hub of excitement and anticipation.  The atmosphere was electric as the lights dimmed and Sita Ramam began, promising to deliver not just a movie, but an experience that resonated deeply with each viewer. The film’s compelling narrative of love and connection was perfect for the season of romance. 
        
        It was more than just a movie night; it was a communal celebration of storytelling and shared emotions, all orchestrated by Expresso.
        
         The event truly highlighted the magic of cinema in bringing people together, making it an evening to remember.`
        ,
        image: '/eventPicture.png'
      }, 
      {
        id: 10,
        title: 'Portrait Palooza and Tattoo Booth',
        description: `The artist and their passionate immersed in two great event under the Expresso named as Portrait Palooza and Tattoo Booth on 10th February, 2024 from 2.30 pm onwards at Pmc offering a vibrant blend of live tattooing and portrait artistry. 

        Attendees could witness skilled tattoo artists at work, getting inked with unique designs or watching as intricate portraits came to life on canvases.
        
        The event was a haven for art lovers, featuring interactive sessions where participants could learn about tattoo techniques and portrait drawing. It was a day of creativity, inspiration, and the celebration of artistic expression.`
        ,
        image: '/eventPicture.png'
      }, 
      {
        id: 11,
        title: 'tcf_kalakriti',
        description: `Art is the expression of emotions and beauty in a creative manner that stirs the soul ….. 

        “ _Expresso_ “-the art and literary club of Nit Patna , organised “ _kalakriti_ “ an event under TCF ’24 calling all the artists to unleash their artistic spirit in the most creative and amazing manner . 
        
        The event was comprised of multiple sub-events with a 2-3 member participation in each group in a never seen before interesting way ! 
        
        It had a total sparks of ten events :-
        Dye verse - a ‘T-shirt painting ‘competition …. One of the most interesting events according to all the participants… 
        
        Frame the Face -  a competition where you would get to paint the face of people in the surroundings…. 
        
        
        No Brushes - painting was to be done based on a theme but without using any brush .
        
        Caricature-Culture - a cartoon character making competition which reminds us of our childhood memories…… 
        
        
        DoodleFiesta - a solo competition of doodle making with creativity and talent…. 
        
        Safar e Rangoli - a 3 membered competition to make a colourful rangoli based on a given theme .. 
        
        
        Clay- clash -it reminds us of the fragnance of depicting our hidden talent….a two membered competition to craft a clay model based on instant theme…… 
        
        TattooFiesta - this is the event of creating tatoo on the arm of the random people with their own creativity and originality…. 
        
         
        CineFrame - based on originality and visualisation participants have to frame the given theme work… 
        
        10 )Mosaic-Marvel - collage making event with solo or group of 2 participants… 
        
        These idiosyncratic ideas and interesting events encourage the participants to show their talents and creativity with the enhancement by glorifying their qualities ....`
        ,
        image: '/eventPicture.png'
      }
    ];
    setEvents(data);
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className="flex flex-col bg-[#4B4B4B] h-full pt-4 px-4 sm:px-8">
      <button className="self-end h-[29px] w-[109px] mb-4 sm:mb-0">
        <div className="flex gap-1 flex-row-reverse items-center">
          <div className="text-white text-xl font-antonio pb-1">BACK</div>
          <div className="border-2 rounded-full border-white p-1">
            <Image src='/Arrow2.png' width={20} height={20} alt="Arrow" />
          </div>
        </div>
      </button>

      {events.map((event, index) => (
        <div key={event.id} className={`flex flex-col sm:flex-row items-center sm:items-${index % 2 === 0 ? 'start' : 'end'} mt-4 gap-4`}>
          <div className={`w-full sm:w-auto ${index % 2 !== 0 ? 'sm:order-2' : ''}`}>
            <Image src={event.image} width={1500} height={200} alt="Event Picture" className="object-cover w-full h-auto" />
          </div>
          <div className="flex flex-col w-full sm:ml-4">
            <div className={`font-antonio text-[#FEFEFE] text-2xl sm:text-5xl ${index % 2 !== 0 ? 'text-right' : ''}`}>{event.title}</div>
            <div className="text-[#ffffff] text-base sm:text-lg bg-cover bg-center p-4 mt-2" style={{ backgroundImage: `url('/event.png')` }}>
              <pre>{event.description}</pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
