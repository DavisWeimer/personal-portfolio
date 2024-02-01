import React from 'react'
import MeImg from '../assets/fiverr-pic.jpg'
import Book from '../assets/babylon.webp'

const AboutMe = () => {
  return (
    <div id='about-me' className='max-w-[780px] m-auto xl:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-mussels-bold text-center text-dark_gray'>
        About Me
      </h1>
      <div className='font-mussels text-center'>
        <p className='mb-4'>
        My name is Davis and I'm a Software Engineer with a background in Audio Engineering. When I am not programming I love listening to, collecting and making music. Check out my <a className='hover:underline hover:text-alien_green' href='https://soundcloud.com/berrik' target="_blank" rel="noopener noreferrer">SoundCloud</a> to see what I've been working on. I also enjoy reading (especially sci-fi space operas), playing video games, <a className='hover:underline hover:text-alien_green' href='https://www.mixcloud.com/da-5k/' target="_blank" rel="noopener noreferrer">DJing</a>, and spending time with my partner Mary and our cat.
        </p>
      </div>
        <div className='flex flex-col items-center'>
        <img className='mt-2 w-48 h-48 m-6 object-cover rounded-full shadow-xl' src={MeImg} />
        </div>
      <div className='flex lg:flex-row flex-col gap-2 items-center justify-center'>
        <div className='bg-dark_gray rounded-lg p-4' style={{ width: '320px', height: '445px' }}>
          <a href="https://open.spotify.com/user/davis.weimer?si=60942ca615b740b6" target="_blank" rel="noopener noreferrer">
            <img className='object-cover w-full h-full' src="https://spotify-github-profile.vercel.app/api/view?uid=davis.weimer&cover_image=true&theme=default&show_offline=false&background_color=303030&interchange=false&bar_color=a4f236" alt="spotify-github-profile" />
          </a>
        </div>
        <div className='bg-dark_gray rounded-lg p-4' style={{ width: '320px', height: '445px' }}>
          <h2 className='text-xl font-mussels-bold text-center text-white mb-2'>Currently Reading</h2>
          <div style={{ height: 'calc(100% - 2.2rem)' }}>
            <img className='object-cover w-full h-full' src={Book} alt="Current Book" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

// 320 x 445