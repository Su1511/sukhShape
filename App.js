import React from "react";
import './App.css';

// JSX Working

// function App(){

//   const fname="Rachna";
//   const lname = "Pant";
//   const dept="IT";

//   const mStyle={
//     backgroundColor:"cyan",
//     fontSize:"44px",
//     fontFamily:"Jokerman"
//   }

//   return(
//     // <React.Fragment>
//     //    <h1> I am APP Component </h1>
//     //   <p>Welcome </p>
//     // </React.Fragment>
//     <>
//        <h1> I am APP Component </h1>
//       <p>Welcome </p>
//       <p style={mStyle}> My name is {fname} {lname}

//        </p>
//        <hr />
//       <p style={{backgroundColor:"red", fontSize:"40px"}}>
//         I am Working in {dept} Department
//       </p>

//     </>

//   )
// }

const footer = {
  backgroundColor: "pink",
  height: "200px"
}
function App() {
  // const socialMedia =["Facebook","Instagram","YouTube"];

  return (
    <>
      <header>
        <div className="flex-container">
          <div className="left-header">
          <ul>
            <li> <a href="/"><i className="fa fa-envelope"></i> </a> </li>
            <li> <a href="/"> <i className="fa fa-phone"></i></a> </li>
          </ul>
          </div>
          <div className="right-header">
              <ul>
              <li> <a href="/"> <i className="fa fa-facebook"></i> </a> </li>
              <li> <a href="/"> <i className="fa fa-instagram"></i> </a> </li>
                
              </ul>
          </div>
        </div>
      </header>
      <nav>
        <div className="flex-container">
          <div className="flex-left">
            <h1> My Logo </h1>
          </div>
          <div className="flex-right">
            <ul>
              <li><a href="/"> Home</a> </li>
              <li> <a href="/">About </a> </li>
              <li> <a href="/"> Service </a> </li>
              <li> <a href="/"> Contact</a> </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <h1 style={{ fontSize: "33px", color: "white", margin: "0" }}> I am Slider  </h1>
      </section>
      <footer style={footer}></footer>
    </>
  )
}

export default App;