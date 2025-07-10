import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaChartBar, FaUniversity, FaUserPlus } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-gray-100 flex-row justify-between ">


      {/* Sidebar */}
      <aside className="w-64 bg-white font-bold shadow-md p-4">
        <h1 className="text-xl font-bold text-purple-700 mb-4">SchoolSynk</h1>
        <div className="mb-6">
          <img src="../assets/school.png" alt="" />
          <div className="text-sm text-gray-600">Ridgewood Academy</div>
          <div className="text-xs text-gray-400">Branch 1</div>
        </div>
        <h3 className='text-gray-400 mb-4'>Menu</h3>
        <nav className="space-y-2">
          <button className="block w-full text-left px-2 py-1 text-gray-800 hover:bg-gray-100 rounded">Home</button>
          <button className="block w-full text-left px-2 py-1 text-gray-800 hover:bg-gray-100 rounded">Management</button>
          <button className="block w-full text-left px-2 py-1 text-gray-800 hover:bg-gray-100 rounded">National Policy</button>
          <button className="block w-full text-left px-2 py-1 text-gray-800 hover:bg-gray-100 rounded">Training</button>
          <button className="block w-full text-left px-2 py-1 text-gray-800 hover:bg-gray-100 rounded">Counselling</button>
        </nav>
        <div className="mt-36 border-t pt-4">
          <button className="block w-full text-left px-2 py-1 text-gray-600 hover:text-purple-700">How to use</button>
          <button className="block w-full text-left px-2 py-1 text-gray-600 hover:text-purple-700">Settings</button>
          <button className="block w-full text-left px-2 py-1 text-gray-600 hover:text-purple-700">Help</button>
        </div>
      </aside>
      {/* <div className=' flex flex-col w-screen'>
        <header className=' bg-purple-700 text-white p-4 shadow-md flex justify-between items-center'>
          hello
        </header>
      </div> */}
      {/* Main Content */}
      <main className="flex-1 p-6 px-60">

        <h2 className="text-2xl ml-60 font-semibold">Good Morning, <span className="text-purple-700 font-bold">Samara!</span></h2>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Ask Anything"
            className="w-[780px] h-[150px] px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ backgroundImage: "url('../assets/search.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '20px' }}
          />
        </div>

        {/* Dashboard Cards */}
        <div className="flex gap-4 mt-6 flex-wrap font-bold">
          <div className="p-4 bg-white rounded-xl shadow  w-[200px] flex flex-col justify-evenly items-center">
            <p className="text-sm text-gray-500">Today's Attendance</p>
            <h3 className="text-4xl font-bold text-purple-700">88%</h3>
            <p className="text-xs text-green-500">↑ 3% vs Yesterday</p>
          </div>
          <div className="p-4 bg-white font-bold rounded-xl shadow w-[200px] flex flex-col justify-evenly items-center">
            <p className="text-sm text-gray-500">AI Suggestions</p>
            <p className="text-md text-gray-800">2 students may need counselling</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow h-[200px] w-[350px] flex flex-col justify-evenly pl-10 ">
            <p className="text-sm text-gray-500">NEP Compliant</p>
            <h3 className="text-2xl font-bold text-purple-700 flex ">76% <p className='text-sm text-black'>compliant</p></h3>
            <h6 className='text-sm '>Ai Suggestions</h6>
            <p className="text-xs text-gray-600">you need to upgrade diversity in subjects for students</p>

          </div>
        </div>

        {/* Icons Row */}
        <div className="flex justify-evenly space-x-4 mt-6 w-[780px]  overflow-x-auto">
          <IoIosArrowBack className='text-4xl font-bold' />
          <div className="flex flex-col text-2xl items-center space-y-1">
            <div className="bg-purple-700 text-white p-3 rounded-full"><FaUserGraduate /></div>
            <span>Students</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="bg-purple-500 text-2xl text-white p-4 rounded-full"><FaChalkboardTeacher /></div>
            <span>Teachers</span>
          </div>
          <button
            className="flex flex-col items-center space-y-1 text-2xl">

            <div
              onClick={() => navigate('/academics')}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-red-900 hover:text-shadow-lg hover:scale-125 "><FaBook /></div>
            <span>Academics</span>
          </button>
          <div className="flex flex-col items-center space-y-1 text-2xl">
            <div className="bg-green-600 text-white p-3 rounded-full"><FaChartBar /></div>
            <span>Finance</span>
          </div>
          <div className="flex flex-col items-center space-y-1 text-2xl">
            <div className="bg-yellow-500 text-white p-3 rounded-full"><FaUniversity /></div>
            <span>Library</span>
          </div>
          <div className="flex flex-col items-center space-y-1 text-2xl">
            <div className="bg-teal-600 text-white p-3 rounded-full"><FaUserPlus /></div>
            <span>Enquiry & <br /> Admission</span>
          </div>
          <IoIosArrowForward className='text-4xl font-bold' />
        </div>

        {/* Placeholder sections */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="h-24 bg-white rounded shadow"></div>
          <div className="h-24 bg-white rounded shadow"></div>
          <div className="h-24 bg-white rounded shadow"></div>
          <div className="h-24 bg-white rounded shadow"></div>
        </div>



        <div className="mt-4 flex flex-col gap-4">
          <div>

          </div>
          <div className='flex  items-center'>
            <CiMenuKebab />
            <p className='text-gray-500 font-bold'> Schedule</p>
          </div>
          <div className="h-66 bg-white rounded-md shadow"></div>

          <div>
            <div className='flex  items-center'> <CiMenuKebab />
              <p className='text-gray-500 font-bold'>Events</p>
            </div>

            <div className="h-66 bg-white rounded-md shadow"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
