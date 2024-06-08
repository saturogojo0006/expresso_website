import React from "react"
import Image from "next/image"
import styles from "./Art.module.css"

export default function Art() {
    return (
        <>
            <div className="relative h-screen w-full text-white text-center flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <Image
                        src="/art-bg.png"
                        layout="fill"
                        objectFit="cover"
                        alt="Background Image"
                    />
                </div>
                <div className={`${styles.fontssz} relative z-10 font-antonio`} >
                    ART
                </div>
            </div>
        </>
    )
}
