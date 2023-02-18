import useRandomImage from '@/Hooks/useRandomImage';
import React from 'react';
import { HiSearch } from 'react-icons/hi';

const Hero = () => {
    const image = useRandomImage('house');

    return (
        <div
            className="h-[27.5rem] bg-cover bg-center border-box"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="h-full flex flex-col justify-center items-center gap-y-8 max-w-xl mx-auto box-content">
                <h2
                    className="text-4xl text-white"
                    style={{
                        filter: 'drop-shadow(0px 0px 5px #000)',
                    }}
                >
                    Find it. Tour it. Own it.
                </h2>

                <div className="w-full flex items-center bg-white rounded-md group">
                    <input
                        autoComplete="off"
                        placeholder="Enter an address, neighborhood, city, or ZIP code"
                        type="text"
                        className="p-5 w-[92.5%] placeholder:font-semibold rounded-l-md border-none outline-none focus:ring-0"
                    />
                    <button className="w-[7.5%] h-full flex justify-center items-center border-none outline-none">
                        <HiSearch size={24} className="text-slate-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
