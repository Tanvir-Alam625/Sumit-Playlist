
import './App.css';
import VideoPlayer from './Components/VideoContainer';
function App() {
  return (
    <div className="bg-[#494D80] min-h-screen min-w-full">
     <header className='py-8'>
      <h2 className='text-4xl text-center text-white tracking-wide '>Talk With Sumit</h2>
     </header>
     <VideoPlayer/>
    </div>
  );
}

export default App;
