import React from "react";
import "./App.scss";

export default function Top(){
  return(
    <nav id="TopNav">
    <button><i class="fas fa-sign-in-alt"></i>&nbsp; تسجيل الدخول </button>
    <span><i class="fas fa-bell"></i>&nbsp; التنبيهات</span>
    </nav>
  )
}