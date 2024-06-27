import React from 'react';
import {Link} from "react-router-dom";
import {HomeFilled} from "@ant-design/icons";

const HomeLink = () => {
    return (
        <div className='p-8'>
            <Link to='/pagination-infiniteScroll'><HomeFilled className='text-3xl hover:scale-125 transition duration-300'/></Link>
        </div>
    );
};

export default HomeLink;