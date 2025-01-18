import { useState, useEffect } from "react";

interface Post {
  id: {
    value: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
}

const FetchData = () => {
  const [data, setData] = useState<{ results: Post[] }>();

  const results = data?.results || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
      {results.map((item: Post) => (
        <li key={item.id.value}>
          <p>
            {item.name.first} {item.name.last}
          </p>
          <p>{item.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default FetchData;
