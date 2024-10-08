import React, { Suspense, useState,useEffect,useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import Island from '../models/island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../Components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundon } from '../assets/icons';
import { soundoff } from '../assets/icons';

{/*we need to first import the models in the home page which is also the main page and then make changes in individual jsx files */}
const Home = () => {
  const audioRef=useRef(new Audio(sakura));
  audioRef.current.volume=0.6;
  audioRef.current.loop=true;
  const [isRotating,setIsRotating]=useState(false);
  const [currentStage,setCurrentStage]=useState(1);
  const[isPlayingMusic,setIsPlayingMusic]=useState(false);
  useEffect(() =>{
    if(isPlayingMusic){
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  },[isPlayingMusic]);


  const adjustIslandForScreenSize=()=>{

    let screenScale=null;
    let screenPosition=[0,-6.5,-43];
    let rotation=[0.1,4.7,0];

    if(window.innerWidth<768){
      screenScale=[0.9,0.9,0.9];
    }

    else{
      screenScale=[1,1,1];
    }
    return [screenScale,screenPosition,rotation]
  }


  const adjustPlaneForScreenSize=()=>{

    let screenScale,screenPosition ;
 
    if(window.innerWidth<768){
      screenScale=[1.5,1.5,1.5];
      screenPosition=[0,-1.5,0];
    }

    else{
      screenScale=[3,3,3];
      screenPosition=[0,-4,-4];
    }
    return [screenScale,screenPosition]
  }

  const [islandScale,islandPosition,islandRotation]=adjustIslandForScreenSize();
  const [planeScale,planePosition]=adjustPlaneForScreenSize();

  
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage&& <HomeInfo currentStage={currentStage}/>}
      </div>
       <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near: 0.1, far: 1000}}>
{/*above note that its not an inverted comma at the beginning but instead ` marked on key below esc */}
            <Suspense fallback={<Loader/>}> 
                <directionalLight position={[1,1,1]} intensity={2} />
                <ambientLight intensity={0.5}/> 
                <hemisphereLight skyColor='#b1e1ff' groundColor="#000000" intensity={1}/>
                
                <Bird />
                <Sky isRotating={isRotating} />
                {/*the below semantics are passing the props  */}
                <Island 
                position ={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}/>
                {/*here we are using rotating because we need to rotate the propeller*/}
                <Plane 
                isRotating={isRotating} 
                scale={planeScale}
                position={planePosition}
                rotation={[0,20,0]}/>
            </Suspense>
            {/*the plane aint rotating because we need to pass the plane props in plane.jsx in the function
            also pass the props/properties to mesh so that the changes in properties can be seen in the plane.jsx
            '...props' is used to pass all the properties or props */}
         
        </Canvas>
        <div className='absolute bottom-2 left-2'>
          <img src={!isPlayingMusic ? soundoff:soundon}  alt='sound' className='w-10 h-10 cursor-pointer object-contain'
          onClick={()=>setIsPlayingMusic(!isPlayingMusic)}/>

        </div>
    </section>
  )
}

export default Home;