import { useState } from 'react'
import { IoClose } from "react-icons/io5";
function CollageGallery(){
    let data = [
        {
            id:1,
            imgSrc: '/Pen.png',
        },
        {
            id:2,
            imgSrc: '/background.png',
        },
        {
            id:3,
            imgSrc: '/contact.png',
        },
        {
            id:4,
            imgSrc: '/Pen.png',
        }
    ]
        const [model, setModel] = useState(false);
        const [tempImg, setTempImg] = useState('');
    const getImg = (imgSrc) => {
        setTempImg(imgSrc);
        setModel(true);
    }
    return(
        <div style={{backgroundImage: '/art-bg.png'}}>
        <div className={model?"model open":"model"}>
            <img src={tempImg} alt="" />
            <IoClose className='absolute top-0 right-0 h-8 w-8 cursor-pointer text-white ' onClick={()=>setModel(false)}/>
        </div>
        <h1 className="text-center text-3xl mb-4 pt-2 font-bold font-mono text-red">Image Gallery</h1>
        <div className='gallery'>
            {data.map((item, index)=>{
                return(
                    <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" style={{width: '100%'}}/>

                    </div>
                )
            })}
        </div>
</div>
    );
}
export default CollageGallery;