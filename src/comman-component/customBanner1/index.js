import React from 'react';

const CustomBanner1 = ({ title, description }) => {
    return (
        <div className='bg-[#4D5D60] h-[220px] flex items-center'>
            <div className='custom-container  grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
                {/* Title */}
                <h1 className='text-white text-[32px] md:text-[48px] font-medium leading-tight'>
                    {title}
                </h1>

                {/* Description */}
                <p className='text-white text-base responsive-text'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CustomBanner1;