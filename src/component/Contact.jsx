import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate=useNavigate();
  const gotoMovies = () =>{
    navigate("/Movies")
  }
  return (
    <div>
      <img
        alt="contact us"
        src="https://imgs.search.brave.com/xdwxiCE8PDEVdDUChhV2DSflY8dCIk6u0ISfI9znUqY/rs:fit:1200:600:1/g:ce/aHR0cDovL3VzaWNv/Yy5iaXovd3AtY29u/dGVudC91cGxvYWRz/LzIwMTcvMDMvY29u/dGFjdC1iYW5uZXIu/anBn"
        height="200"
        width="450"
      ></img>
      <h2>
        You may also find us in all these different platforms so please be sure
        to <b>FOLLOW</b>{" "}
      </h2>
      <button onClick={gotoMovies}>Go to Movies Page</button>
    </div>
  );
}

export default Contact;
