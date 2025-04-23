import React, { useEffect, useState } from 'react';
import { apiUrl, filterData } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';

function App() {
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setCourses(result.data);
      } catch (error) {
        toast.error('Error fetching course data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-700 to-green-950 text-white font-sans">
      {/* Navbar */}
      <header className="shadow-md">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-6 mt-8 px-4">
        {/* Filter Buttons */}
        <Filter filterData={filterData} category={category} setCategory={setCategory} />

        {/* Courses Section */}
        <section className="w-full max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] mt-2 px-2 sm:px-0">
          {courses ? (
            <Cards courses={courses} category={category} />
          ) : (
            <div className="text-lg text-gray-300 animate-pulse">Loading courses...</div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
