import React, { Fragment } from 'react'
import Header from "../../component/header/Header";
import Intro from "../../component/Intro/Intro";
import Slider from "../../component/Sliders/Sliders";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Intro />
            <Slider />
        </Fragment>
    )
}

export default Home