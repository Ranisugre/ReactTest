import React, { useState, useEffect } from "react";
import axios from "axios";
const ShowEvents = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const result = await axios.get("http://localhost:8001/data");
    console.log(result.data);
    setData(result.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Show Events</h1>
      <table className="table table-stripped">
        <thead>
          <tr className="table table-dark">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <>
                <tr key={item.id}>
                  <td scope="col">{item.id}</td>
                  <td scope="col">{item.name}</td>
                  <td scope="col">{item.date}</td>
                  <td scope="col">{item.location}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default ShowEvents;
