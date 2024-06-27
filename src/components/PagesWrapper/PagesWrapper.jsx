import React from 'react';
import HomeLink from "../HomeLink/HomeLink";

const PagesWrapper = ({children, pageTitle, homeLink}) => {
    return (
        <div className="container mx-auto">
            <header className="border-b-2 flex items-center justify-between">
                <h1 className='text-4xl text font-bold p-8'>{pageTitle}</h1>
                {homeLink && <HomeLink/>}
            </header>
            <div>{children}</div>
        </div>
    );
};

export default PagesWrapper;