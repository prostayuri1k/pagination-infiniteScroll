import React from 'react';
import PagesWrapper from "../../components/PagesWrapper/PagesWrapper";
import HomeComponent from "../../components/HomeComponent/HomeComponent";

const Home = () => {
    return (
        <PagesWrapper pageTitle='Pagination & Infinite Scroll'>
            <HomeComponent/>
        </PagesWrapper>
    );
};

export default Home;

// flex justify-evenly