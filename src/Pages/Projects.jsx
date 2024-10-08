import React from 'react'
import { projects } from '../constants'
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from '../Components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span></h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I've embarked on some projects throughout my college span,but these are the one that have helped me grow from a 
          beginner to my current state.
           Many of them is open-sourced so your advice and collaboration is highly valued.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((projects)=>(
          <div className='lg:w-[400px] w-full' key={projects.name}>
            <div className='block-container w-12 h-12'>
              <div className='{`btn-back rounded-xl ${project.theme}`}'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={projects.iconUrl} alt="Project Icon" className='w-3/4 h-3/4 object-contain'/>
                </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>{projects.name}</h4>
                <p className='mt-2 text-slate-500'>{projects.description}

                </p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link to={projects.link}
                  target="_blank"
                  rel="noopener no referrer"
                  className="font-semibold text-blue-600">
                    Live Link
                  </Link>
                  <img src={arrow} alt="arrow" className='w-4 h-4 object-contain'/>
                </div>

              

            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200'/>
      <CTA/>
      </section>
  )
}

export default Projects