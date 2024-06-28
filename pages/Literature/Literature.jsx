import React from "react"
import Image from "next/image"

export default function Literature() {
    return (
        <>
            <div className="h-screen w-full text-gray-100 text-center flex items-center justify-center bg-[url(/litbg.png)] bg-cover min-h-[400px]">
                <div className={`text-[20vw] relative z-10 font-antonio`} >
                    LITERATURE
                </div>
            </div>
        </>
    )
}
