import React from 'react';
import {Link} from "react-router-dom";

const HomeComponent = () => {
    return (
        <div className="grid grid-cols-2 items-center text-4xl h-screen">
            <div className="h-full border-r-2 flex items-center justify-center">
                <Link className='underline hover:scale-125 transition duration-300'
                      to="pagination">Pagination</Link>
            </div>
            <div className='h-full flex items-center justify-center'>
                <Link className='underline hover:scale-125 transition duration-300' to="infiniteScroll">Infinite
                    scroll</Link>
            </div>
        </div>
    );
};

export default HomeComponent;