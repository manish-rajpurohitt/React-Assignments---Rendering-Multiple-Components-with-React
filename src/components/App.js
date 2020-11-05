import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <h1 data-ns-test="project-name">Project-1 Title</h1>
      <p data-ns-test="project-description">project-1 Description</p>
      <h1 data-ns-test="project-name">Project-2 Title</h1>
      <p data-ns-test="project-description">project-2 Description</p>
    </>
  );
};

export default App;
