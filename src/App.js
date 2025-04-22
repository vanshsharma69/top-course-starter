import React, { useEffect, useState } from 'react';
import { apiUrl, filterData } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';


function App() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setCourses(result.data);
      } catch (error) {
        toast.error('Error fetching data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
      <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
  {
    courses ? <Cards courses={courses} /> : <p>Loading...</p>
  }
</div>

    </div>
  );
}

export default App;
