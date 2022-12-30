import React from "react"
import "../styles/GlobalStyles.scss"
import "../styles/Home.scss"
import MainCake from "../assets/imgs/cakes/main-cake.jpg"

const Home = () => {
  return (
    <div className="main-content-container">
      <div className="img-container">
        <img className="img-source" src={MainCake} alt="main-cake" />
      </div>
    </div>
  )
}

export default Home
