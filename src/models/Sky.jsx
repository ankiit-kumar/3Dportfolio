import { useGLTF } from '@react-three/drei'
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import skyScene from '../assets/3d/sky.glb'
const Sky = ({isRotating}) => {
    const sky=useGLTF(skyScene);
    const skyRef=useRef();
    //to rotate the sky we use the useFrame hook and ref in mesh from react-three-fiber
    useFrame((_,delta)=>{
      //the first parameter _ is the reference to the current frame and delta is the difference between last and current frame
      if(isRotating){
        skyRef.current.rotation.y +=0.18*delta;
      }
    })
  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky;
{/*By using <primitive>, you can directly pass a Three.js object (in this case, sky.scene) into your React component tree.
    When you load a GLTF model using useGLTF, it returns a Three.js scene graph (including meshes, lights, etc.), 
    which is not a React component by default.  
    we use another image of sky seperately because we need the relative rotation between 2 objects*/}