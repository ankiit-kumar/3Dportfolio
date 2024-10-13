import React from 'react';
import { skills } from '../constants';
import CTA from '../Components/CTA';

const About = () => {
  return (
    <section className='max-container px-4 py-8'>
      <h1 className='head-text text-4xl font-bold'>
        Hello I'm <span className='blue-gradient_text font-semibold drop-shadow-lg'>Ankit Kumar</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p className='text-lg'>
          Web Developer based in Bengaluru, specializing in technical education through hands-on learning and building applications.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-2xl font-semibold'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20 relative group'>
              <div className='btn-back rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-md transition-transform duration-200 transform group-hover:scale-105'></div>
              <div className='btn-front rounded-xl flex justify-center items-center bg-white shadow-md transition-transform duration-200 transform group-hover:scale-105'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text text-2xl font-semibold'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p className='text-lg'>
            I am working on multiple projects to level up my skills and apply them in the professional field. <br />
            I mostly work on projects to understand the working principles behind the technology.
          </p>
        </div>
      </div>
      <CTA />
      <hr className='border-slate-200' />
    </section>
  );
};

export default About;
