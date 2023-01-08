import React, {useState, useEffect} from 'react'

export default function Timer() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(false)
    
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer) {
        if (seconds === 0 && minutes === 0 && hours === 0) {
          return 0
        } else {
          setSeconds((prev) => (prev <= 0 ? 59 : prev - 1))
        }
      }
    }, 100)
    return () => {
      clearInterval(interval)
    }
  }, [timer])

  useEffect(() => {
    if (seconds === 59) {
       setMinutes((prev) => (prev <= 0 ? 59 : prev - 1))
     }
  }, [seconds])

  useEffect(() => {
    if (minutes === 59) {
      setHours((prev) => (prev <= 0 ? 59 : prev - 1))
    }
  }, [minutes])

  useEffect(() => {
    if (seconds === 0 && minutes === 0 && hours === 0) {
      setTimer(false)
     }
  }, [seconds, minutes, hours])

  const pad = (num) => {
    return String(num).padStart(2, 0)
  }
  const Button = ({ text, onClick }) => (
    <button onClick={onClick} className='bg-purple-300 px-2 py-0.5 rounded-sm text-sm font-medium'>
      {text}
  </button>
  )

  const changeHours = (action) => {
    if (action === 'increment') {
      setHours((prev) => prev + 1)
    } else {
      setHours((prev) => {
        if (prev <= 0) {
          return 0;
        } else {
          return prev - 1
        }
      })
    }
  }
  const changeMinutes = (action) => {
    if (action === 'increment') {
      if (minutes === 59) {
        setMinutes(0)
        setHours(prev => prev + 1)
      } else {
        setMinutes(prev => prev + 1)
      }
    } else {
      setMinutes((prev) => {
        if (prev <= 0) {
          return 0
        } else {
          return prev - 1
        }
      })
    }
  }
  const changeSeconds = (action) => {
    if (action === 'increment') {
      if (seconds === 59) {
        setSeconds(0)
        setMinutes(prev => prev + 1)
      } else {
        setSeconds(prev => prev + 1)
      }
    } else {
      seconds((prev) => {
        if (prev <= 0) {
          return 0
        } else {
          return prev - 1
        }
      })
    }
  }

  return (
    <section className='bg-white py-6 px-10 rounded-md'>
      <h1 className='text-4xl text-center font-bold mb-6'>Timer</h1>
      {timer ? (
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
          {/* <div className='flex items-center justify-center gap-[65px] mt-5'>
            <Button text='Pause' onClick={() => setTimer(false)} />
            <Button text='Play' onClick={() => setTimer(true)} />
            <Button
              text='Reset'
              onClick={() => {
                setTimer(false);
                setSeconds(0);
                setMinutes(0);
                setHours(0);
              }}
            />
          </div> */}
        </div>
      ) : (
        <>
          <div className='flex'>
            <div className='text-center'>
              <p className='text-xs text-purple-500 mr-8'>Hours</p>
              <div className='flex gap-3 items-center'>
                <span className='h-20 w-20 shadow-md shadow-gray-300 rounded-md flex items-center justify-center'>
                  <h3 className='text-5xl font-semibold'>{pad(hours)}</h3>
                </span>
                <div className='flex gap-1 flex-col mr-3'>
                  <Button text='+' onClick={() => changeHours('increment')} />
                  <Button text='-' onClick={() => changeHours('decrement')} />
                </div>
              </div>
            </div>

            <div className='text-center'>
              <p className='text-xs text-purple-500 mr-8'>Minutes</p>
              <div className='flex gap-3 items-center'>
                <span className='h-20 w-20 shadow-md shadow-gray-300 rounded-md flex items-center justify-center'>
                  <h3 className='text-5xl font-semibold'>{pad(minutes)}</h3>
                </span>
                <div className='flex gap-1 flex-col mr-3'>
                  <Button text='+' onClick={() => changeMinutes('increment')} />
                  <Button text='-' onClick={() => changeMinutes('decrement')} />
                </div>
              </div>
            </div>

            <div className='text-center'>
              <p className='text-xs text-purple-500'>Seconds</p>
              <div className='flex gap-3 items-center'>
                <span className='h-20 w-20 shadow-md shadow-gray-300 rounded-md flex items-center justify-center'>
                  <h3 className='text-5xl font-semibold'>{pad(seconds)}</h3>
                </span>
                <div className='flex gap-1 flex-col mr-0'>
                  <Button text='+' onClick={() => changeSeconds('increment')} />
                  <Button text='-' onClick={() => changeSeconds('decrement')} />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='flex justify-center'>
            <button
              onClick={() => setTimer(true)}
              className='bg-purple-300 px-3 py-0.5 rounded text-md font-medium'
            >
              Play
            </button>
          </div>
        </>
      )}
    </section>
  );
}
