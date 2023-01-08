import StopWatch from './StopWatch'
import Timer from './Timer'

function App() {
  

  return (
    <div className='min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center gap-10'>
      <StopWatch />
       <Timer />
    </div>
  );
}

export default App
