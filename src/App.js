import './App.css';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <>

     <div className="App">
        <Navbar />
       <div className="content">

         <Home />
       </div>
       <footer className='grid grid-cols-5 gap-10 bg-purple-900 p-7 '>
       <span className='font-bold p-2 text-center rounded-lg text-white  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Home</span>
       <span className='font-bold p-2 text-center rounded-lg text-white  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Home</span>
       <span className='font-bold p-2 text-center rounded-lg text-white  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Home</span>
       <span className='font-bold p-2 text-center rounded-lg text-white  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Home</span>
       <span className='font-bold p-2 text-center rounded-lg text-white  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Home</span>
       </footer>
       </div>  
    </>
  );
}

export default App;
