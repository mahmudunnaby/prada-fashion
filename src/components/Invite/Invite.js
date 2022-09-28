import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

const Invite = () => {
    const [close, setClose] = useState(false)


    return (
        <div className={close ? 'hidden' : 'block'}>
            <div className=' h-14 w-full flex relative bg-[#F9FAFF] justify-center items-center'>
                <h5 className=' md:text-lg text-xs py-4 font-normal'>Invite Friends and get 50% off on your next purchase <span className='text-[#00398F] cursor-pointer ml-2 font-normal'>Invite Now</span></h5>
                <button onClick={() => setClose(true)} className='absolute right-0 mr-4 top-2 md:top-4'><MdClose className=' md:text-xl text-xs text-[#848484] hover:bg-[#a4a4a4a5] rounded-full' /></button>
            </div>
        </div>
    );
};

export default Invite;