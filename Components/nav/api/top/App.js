import React from "react";
import "./App.scss";

export default function Top(){
  return(
    <nav id="TopNav">
    <button><i class="fas fa-sign-in-alt"></i>&nbsp; تسجيل الدخول </button>
    <span><i class="fas fa-bell"></i>&nbsp; التنبيهات</span>
    <span><img src="https://i.ibb.co/qkXKLcR/53e0d3434a55aa14f6da8c7dda79367e103adae05b526c4870-1.png" /></span>
    </nav>
  )
}