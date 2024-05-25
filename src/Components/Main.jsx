import React,{ useState, useEffect } from 'react'
import ImageBlock from './ImageBlock';

const Main = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
      const importAllImages = async () => {
        // Use import.meta.glob to dynamically import all images in the directory
        const imageModules = import.meta.glob('../Images/*.{png,jpg,jpeg,gif}');
  
        // Dynamically import the images and store them in an array
        const imagePaths = await Promise.all(
          Object.keys(imageModules).map(async (path) => {
            const image = await imageModules[path]();
            return image.default;
          })
        );
  
        setImages(imagePaths);
      };
  
      importAllImages();
    }, []);
    
  return (
    <>

    <div className='p-10'>
        <h1 className=' text-5xl'>Download images here</h1>
        <div className=" mt-5 flex gap-5 flex-wrap flex-1 justify-center">
{images.map((src, index) => (
                
                <ImageBlock src={src}/>
              ))}

        </div>
             
        
        
         </div>
    </>
  )
}

export default Main