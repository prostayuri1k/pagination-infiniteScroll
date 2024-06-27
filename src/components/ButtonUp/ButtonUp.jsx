import React from 'react';
import {UpCircleOutlined} from "@ant-design/icons";

const ButtonUp = () => {

    const handleClick = () => {
        window.scroll({top: 0, left: 0, behavior: "smooth"});
    }

    return (
        <div className="fixed right-20 bottom-1/3">
            <UpCircleOutlined className='text-4xl cursor-pointer hover:scale-125 transition duration-300'
                              onClick={handleClick}/>
        </div>
    );
};

export default ButtonUp;