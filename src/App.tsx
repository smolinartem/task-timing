import { useStopwatch } from 'react-timer-hook'

function App() {
  const { seconds, minutes, hours, start, pause } = useStopwatch()

  return (
    <main className='py-20'>
      <div className='max-w-xl mx-auto p-8 flex flex-col items-center gap-8'>
        <div className='leading-tight text-stone-700 text-8xl w-full text-center font-light'>
          {hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </div>
        <div className='flex w-full justify-between gap-4'>
          <button className='button-main' onClick={start}>
            start
          </button>
          <button className='button-main' onClick={pause}>
            pause
          </button>
          <button className='button-main'>stop</button>
        </div>
      </div>
    </main>
  )
}

export default App
