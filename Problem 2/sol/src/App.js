import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [list, setList] = useState([]);

  const handleRemoveItem = (id) => {
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
  };
  const fetchData = () => {
    // api has users from 1 to 83, so generating random number in that range
    const randomNumber = Math.floor(Math.random() * 83) + 1;
    return axios
      .get(`https://swapi.dev/api/people/${randomNumber}`)
      .then((response) => {
        console.log(response.data);
        const newUser = {
          name: response.data.name,
          id: response.data.url,
        };
        setList((prev) => [...prev, newUser]); // On each response - populate array with new data
      });
  };
  return (
    <div className="App">
      <div>
        <button className="addbtn" onClick={fetchData}>
          Add Record
        </button>
      </div>
      <div>
        {list.map((item) => (
          <>
            <div className="boxes">
              <div>{item.name}</div>
              <button
                className="dltbtn"
                onClick={() => handleRemoveItem(item.id)}
              >
                Delete
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
