import React, { useEffect } from "react";
import axios from 'axios'

function Home() {
  useEffect(() => {
    axios.get("http://localhost:8000/users").then((response) => console.log(response));
  }, []);
  return <div>Home</div>;
}

export default Home;
