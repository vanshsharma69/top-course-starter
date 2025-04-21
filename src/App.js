import React, { use } from 'react';
import { apiUrl,filterData } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

function App() {

  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setCourses(result.data);
      } catch (error) {
        toast.error('Error fetching data:');
      }
    }
    fetchData();
  }, []);


  return (
    <div>
      <Navbar> </Navbar>

      <Filter filterData={filterData}></Filter>

      <Cards courses={courses} ></Cards>

    </div>
  );
}

export default App;
