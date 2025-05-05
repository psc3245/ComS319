import React, { useState } from "react";

function DeleteRobot() {
  const [robotId, setRobotId] = useState("");
  
  const handleChange = (event) => {
    setRobotId(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://127.0.0.1:8080/deleteRobot/${robotId}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete Robot: ${errorText}`);
      }
      const result = await response.json();
      console.log("Success:", result);
      alert("Robot deleted successfully!");
      setRobotId("");
    } catch (error) {
      console.error("Error:", error);
      alert(`Error deleting Robot: ${error.message}`);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={robotId}
        onChange={handleChange}
        placeholder="Enter Robot ID"
        required
      />
      <br />
      <br />
      <button type="submit">Delete Robot</button>
    </form>
  );
}

export default DeleteRobot;
