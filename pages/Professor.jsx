import React from "react";
import Image from 'next/image';
import styles from "./Professor.module.css";

function Professor() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex-1 relative">
        <Image
          src="/profbg.png"
          layout="fill"
          className={styles.bgImage}
          alt="Background"
        />
        <div className={styles.msg}>
          <span><Image src="/Letter.png" width={54} height={190} /></span>
          <span>ESSAGE FROM OUR</span> <br />
        </div>
        <div className={styles.professorInCharge}>PROFESSOR-IN-CHARGE</div>
        <div className={styles.club}>EXPRESSO-THE LITERARY AND ART CLUB</div>
        <div className={styles.letter}>
          <p>
            Dear Club Enthusiasts, We are thrilled to extend a warm welcome to you as you 
            explore the vibrant world<br/> of the Literary and Art Club at NIT Patna. I am honored 
            to introduce myself as the Professor Incharge of<br/> this dynamic community of creative 
            minds. Our club is a melting pot of talent, where literature meets art<br/> in a fusion 
            of imagination and expression. As you navigate through our website, you'll discover 
            the diverse range of activities, projects, and events that define our creative journey. 
            In the upcoming weeks, we have an exciting lineup of events that beckon your participation 
            and artistic contribution. We believe in fostering an environment where every voice is heard, 
            and every brushstroke tells a unique story. Feel free to explore, engage, and connect with us. 
            Whether you're an aspiring writer, a visual artist, or someone passionate about the intersection 
            of words and images, you've found your creative home. Let's embark on this artistic odyssey together, 
            where inspiration knows no limits and the Literary and Art Club becomes a canvas for your imagination. 
            Thank you for being a part of our creative community. <br /> <br />
            Best regards, <br />
            Dr. Dharmendra Kumar Dheer <br />
            Professor Incharge, <br />
            Expresso- Literary and Art Club<br />
            NIT Patna
          </p>
        </div>
        <div className={styles.rectangle}></div>
        <span className={styles.topRightImage}><Image src="/PI.png" width={294} height = {276}  /></span>
      </div>
    </div>
  );
}

export default Professor;
