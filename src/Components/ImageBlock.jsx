import React from 'react'

const ImageBlock = ({ src }) => {
    
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = src;
        link.download = "PicsImage";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <>
            <div className='lg:w-[300px] border-4 border-black  rounded flex flex-col justify-around'>
                <div className='h-'><img src={src} /></div>
                <div className='flex justify-between my-4 items-center text-black px-5'>
                    PicImage
                    <h2 onClick={handleDownload}className='cursor-pointer font-bold rounded border-2 border-black px-2'>
                        Download
                        </h2></div>
            </div>
        </>
    )
}

export default ImageBlock