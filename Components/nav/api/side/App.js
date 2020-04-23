import React, { Component } from "react";
import "./App.scss";

export default class Side extends Component {

  constructor(){
    this.state={
      close:"",
    }
  }
  render(){
    return (
    <nav id="SideNav">
      <div id="wrapper" onClick={()=>{
        if(this.state.close === ""){
          this.setState({
            close:'close'
          })
          document.getElementById('SideNav').style.width="350px"
        }else{
          this.setState({
            close:''
          })
          document.getElementById('SideNav').style.width="50px"
        }
      }}>
        <div class={'circle icon '+this.state.close}>
          <span class="line top" />
          <span class="line middle" />
          <span class="line bottom" />
        </div>
      </div>
    </nav>
  );
  }
}
