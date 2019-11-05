import React , {Component} from "react";
import { tsPropertySignature } from "@babel/types";


const Downicon =(props)=>{
   return(
    <div
    onClick={props.onClick}
    style={{
     
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "-34px",
      transform: "translateY(-45px)"
    }}
  >
    <div style={{maxWidth:"30px"}}>
      <img src={props.Icons} />
    </div>
  </div>
   )
}
export default  Downicon;
