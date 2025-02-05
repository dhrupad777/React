// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reactLogo from './assets/react.svg'
import me from './assets/me.jpg'
import viteLogo from '/vite.svg'
import Objectprops from "./Objectprops.jsx"
import jokes from "./jokesdata.js"
import Jokes from "./Jokes.jsx"




import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
const ninja = [<h3>ll</h3>,<h3>kk</h3>];// instead of ["jj","kk"] pass in html format which react can understand
root.render(
    <>

    <Jokes  />
    

    </>
    // <>


    // <Objectprops 
    // name = "Mount. fuji"
    // address="Japan"
    // obj={{
    //     rent:"500",
    //     buy:"1000"
    // }}
    // ninjaA = {ninja}
    // // ninja = [<h1>"hi"</h1>]
    
    // />
    //     <Objectprops
    // name = "Mount. fuji"
    // address="Japan"
    // obj={{
    //     rent:"500",
    //     buy:"1000"
    // }}
    // />

        {/* <App
            photo={reactLogo}
            profile={me}
            name="Dhrupad Rajpurohit"
            email="dhrupadrajpurohit@gmail.com"
            phone="6352903282"
            address="Amity University Mumbai"
            comments={[
                {mentor:"gg",exp:5}
            ]}
        />
        <App
            photo={reactLogo}
            profile={me}
            name="John Doe2"
            email="johndoe@example.com2"
            phone="+12345678902"
            address="123 React Street, JavaScript City2"
            comments={[
                {mentor:"kk",exp:7}
            ]}
        /> */}


    
)
console.log(<h1>Hello</h1>)