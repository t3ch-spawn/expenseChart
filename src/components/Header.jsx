import React from 'react';
import icon from "../images/logo.svg"

function Header(props) {
    return (
        <div className='bg-bar p-[12px] px-[18px] rounded-lg flex justify-between items-center text-chartCard'>
            
            <div className="balance">
                <p className='text-xs'>My balance</p>
                <h3 className='text-xl font-bold mt-2'>$921.48</h3>
            </div>
            <div className="icon">
                <img src={icon} alt="" className='h-8' />
            </div>

        </div>
    );
}

export default Header;