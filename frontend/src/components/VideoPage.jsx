import React, {useEffect, useState} from "react";
import VideoPlayer from "./VideoPlayer";

const VideoPage = (props) => {

useEffect(() => {
 {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/comments/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
    </div>
  );
};

export default HomePage;