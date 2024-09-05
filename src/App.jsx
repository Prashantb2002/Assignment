import React from 'react';
import Gallery from './components/Gallery';
import About from './components/About';
import Experience from './components/Experience';
import Recommended from './components/Recommended';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  
  return (
    // <>
    // <div className="h-screen w-screen bg-gray-500 flex items-center justify-center">
    //   <div className="flex w-full h-full justify-between p-6 border">
    //     <div className="h-5/6 w-2/3 bg-gray-400 mr-4 border border-blue-400 text-white rounded-lg my-20
        
    //     ">
    //     </div>
    //     <div className=" h-5/6 w-2/3 ml-4 flex flex-col space-y-10 my-20">
    //       <div className='h-80 bg-gray-700 rounded-lg'>
    //         <Router>
    //           <Routes>
    //             <Route path='/' element={<About/>}/>
    //             <Route path='/experience' element={<Experience/>}/>
    //             <Route path='/recommended' element={<Recommended/>}/>
    //           </Routes>
    //         </Router>
           
    //       </div>
    //       <div className='h-80 bg-gray-700 rounded-lg'>
    //       <Gallery/>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    // </>

    <>
  <div className="h-screen w-screen bg-gray-500 flex items-center justify-center">
    <div className="flex flex-col lg:flex-row w-full h-full justify-between p-6 border">
      <div className="h-64 lg:h-5/6 w-full lg:w-2/3 bg-gray-400 lg:mr-4 border border-blue-400 text-white rounded-lg mb-4 lg:mb-0 my-20">
        {/* Left side content */}
      </div>
      <div className="h-64 lg:h-5/6 w-full lg:w-2/3 lg:ml-4 flex flex-col space-y-10 my-20">
        <div className="h-64 lg:h-80 bg-gray-700 rounded-lg">
          <Router>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/recommended' element={<Recommended />} />
            </Routes>
          </Router>
        </div>
        <div className="h-64 lg:h-80 bg-gray-700 rounded-lg">
          <Gallery />
        </div>
      </div>
    </div>
  </div>
</>


  );
}

export default App;



