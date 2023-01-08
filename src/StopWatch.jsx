import React, { useEffect, useState } from 'react';

export default function StopWatch() {
  const [watch, setWatch] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    const time = setInterval(() => {
      if (isPlaying) {
        setWatch(prevWatch => prevWatch + 1)
      }
    }, 100)
    return () => {
      clearInterval(time)
    }
  }, [isPlaying])

  const hours = Math.floor(watch / 3600)
  const remSecAfterHours = watch % 3600
  const minutes = Math.floor(remSecAfterHours / 60)
  const seconds = remSecAfterHours % 60

  const pad = (num) => {
    return String(num).padStart(2, 0);
  };
  const Button = ({ text, onClick }) => (
    <button
      onClick={onClick}
      className='bg-purple-300 px-2 py-0.5 rounded-sm text-sm font-medium'
    >
      {text}
    </button>
  );

  return (
    <section className='bg-white py-6 px-10 rounded-md'>
      <h1 className='text-4xl text-center font-bold mb-6'>Stop Watch</h1>
      <div className='flex'>
        <div className='text-center'>
          <p className='text-xs text-purple-500 mr-8'>Hours</p>
          <div className='flex gap-3 items-center'>
            <span className='h-20 w-20 shadow-md shadow-gray-300 rounded-md flex items-center justify-center'>
              <h3 className='text-5xl font-semibold'>{pad(hours)}</h3>
            </span>
            <p className='mr-3 text-purple-500 text-4xl'>:</p>
          </div>
        </div>

        <div className='text-center'>
          <p className='text-xs text-purple-500 mr-8'>Minutes</p>
          <div className='flex gap-3 items-center'>
            <span className='h-20 w-20 shadow-md shadow-gray-300 rounded-md flex items-center justify-center'>
              <h3 className='text-5xl font-semibold'>{pad(minutes)}</h3>
            </span>
            <p className='mr-3 text-purple-500 text-4xl'>:</p>
          </div>
        </div>

        <div className='text-center'>
          <p className='text-xs text-purple-500'>Seconds</p>
          <div className=''>
            <span className='h-20 w-20 shadow-md shadow-gray-300 rounded-md flex items-center justify-center'>
              <h3 className='text-5xl font-semibold'>{pad(seconds)}</h3>
            </span>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-[65px] mt-5'>
        <Button text='Pause' onClick={() => setIsPlaying(false)} />
        <Button text='Play' onClick={() => setIsPlaying(true)} />
        <Button text='Reset' onClick={() => {
          setIsPlaying(false)
          setWatch(0)
        }} />
      </div>
    </section>
  );
}
