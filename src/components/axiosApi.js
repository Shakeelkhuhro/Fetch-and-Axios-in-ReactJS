import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
}
 export default MyComponent1;