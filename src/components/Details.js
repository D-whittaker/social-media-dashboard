import React from "react";
import ReactDOM from "react-dom";

export default function Details(props) {
  const ImgName=`./images/icon-facebook.svg`;
  const Img = require(`./images/icon-facebook.svg`);
  const Img2=require(`./images/icon-instagram.svg`);
  const Img3=require(`./images/icon-twitter.svg`);
  const Img4=require(`./images/icon-youtube.svg`);
  const Inc= require(`./images/icon-up.svg`);
  const Dec= require(`./images/icon-down.svg`);
  var logo;
  var change;
  let colors;
  if(props.name==="facebook")logo=Img; 
  else if(props.name==="instagram")logo=Img2;
  else if(props.name==="twitter")logo=Img3;
  else if(props.name==="youtube")logo=Img4;
  else {logo=Img1;}
  if(props.pos){change=Inc; colors="inc";}
  else {change= Dec; colors="dec";}
  return(
<section className="details">
          <p>
            {props.desc}
            <img 
              alt={props.name}
              src={logo}
              style={{float: 'right', margin:'10px'}}/>
          </p>

          <p style={{fontSize: '35px', color: 'white', margin: 0}}>
            {props.num}
            <span className={colors}>
            <img 
              alt={props.name}
              src={change}
            />
              {props.change}%
            </span>
          </p>
        </section>

    )
}