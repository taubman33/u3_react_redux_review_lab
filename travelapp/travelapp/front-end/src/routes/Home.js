import React from "react";
import "../App.css";
import Destinations from "../components/Destinations";

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Find the perfect spot in Tokyo.</p>
      <Destinations />
    </div>
  );
}
