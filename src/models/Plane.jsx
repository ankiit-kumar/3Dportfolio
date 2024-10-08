import {useEffect, useRef} from 'react'
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
const Plane = ({isRotating, ...props}) => {
  const ref=useRef();
    const {scene,animations}=useGLTF(planeScene);
    const {actions}=useAnimations(animations,ref);
  useEffect(()=>{
    console.log({isRotating});
    
    if(isRotating){
      //this starts the blade of the plane
      actions['Take 001'].play();

    }
    else{
      //stops the blade of the plane from rotating
      actions['Take 001'].stop();
    }
  },[actions,isRotating])

  return (
    <mesh{...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane
{/*when we import the files into home page and not change the tag from div to mesh in the corresponding file 
    such as Plane.jsx then the website is not responding
    Hence after importing we should change the tag from div to mesh and the website responds */}