import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const AddEvents = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  function saveData(data) {
    axios.post("http://localhost:8001/data", data);
    console.log(data);
    alert("data added");
    navigate("/show");
  }
  return (
    <>
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit(saveData)}>
        <div>
          <label id="name">Name:</label>
          <input
            type="text"
            {...register("name")}
            style={{ marginLeft: "30px" }}
          ></input>
        </div>
        <div>
          <label id="date">Date:</label>
          <input
            type="date"
            {...register("date")}
            style={{ marginLeft: "40px" }}
          ></input>
        </div>
        <div>
          <label id="location">Location:</label>
          <input
            type="text"
            {...register("location")}
            style={{ marginLeft: "15px" }}
          ></input>
        </div>
        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </>
  );
};
export default AddEvents;
