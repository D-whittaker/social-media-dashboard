import React, {useState} from "react";
import ReactDOM from "react-dom";
import Followers from "./components/Followers.js"
import Details from "./components/Details.js"



const App =()=> {
const [theme, setTheme] = useState('Dark');
function Darkmode(){
//const x = document.getElementById("switch");
//if(x.checked){
  console.log("light mode")
//}
//if(!x.checked){
  console.log("dark mode")
//}
}  return (
    <>
      <header className="header">
        <h3>Social Media Dashboard</h3>
        <h5>Total Followers: 23,004</h5>
        <hr />
        <span style={{width: '30vw', margin:0, color: '#7777ff'}}>Dark Mode</span>
        <label className="switch" style={{float:'right'}}>
          <input id='switch' type="checkbox" onClick={Darkmode()} name="theme" />
          <span className="slider round"></span>
        </label>
      </header>

      <section className="container">
        <Followers profile ="@nathanf" following= "F O L L O W E R S" name="facebook" num ={1987} pos={true} change={12} />
        <Followers profile ="@nathanf" following= "F O L L O W E R S" name="instagram" num ={1044} pos={true} change={99} />
        <Followers profile ="@realnathanf" following= "F O L L O W E R S" name="twitter" num ={11000} pos={true} change={1099} />
        <Followers profile ="@Nathan F." following= "S U B S C R I B E R S" name="youtube" num ={8239} pos={false} change={144} />
      </section>
      <h5>Overview - Today</h5>
      <section className="container">
        <Details name="facebook" desc="Page Views" num="87" pos={true} change={3}/>
        <Details name="facebook" desc="Likes" num="52" pos={false} change={2}/>
        <Details name="instagram" desc="Likes" num="5463" pos={true} change={2257}/>
        <Details name="instagram" desc="Profile Views" num="52k" pos={true} change={1375}/>
        <Details name="twitter" desc="Retweets" num="117" pos={true} change={303}/>
        <Details name="twitter" desc="Likes" num="507" pos={true} change={553}/>
        <Details name="youtube" desc="Likes" num="107" pos={false} change={19}/>
        <Details name="youtube" desc="Total Views" num="1407" pos={false} change={12}/>
      </section>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode><App  /></React.StrictMode>,
  document.getElementById('root')
);