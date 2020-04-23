import React from "react";
import "./App.css";
import Top from './api/top/App';
import Side from './api/side/App';

export default function Nav(){
  return(
    <>
      <Top />
      <Side />
    </>
  )
}