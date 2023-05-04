import { React, useState, useEffect } from 'react'
function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();
            setData(json);
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

export default MyComponent;