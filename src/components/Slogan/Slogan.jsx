import React from "react";
import Cards from "../../assets/desktop/isocard.svg";

const Slogan = () => {
    return (
        <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
            <div className="text-center md:col-span-2 md:col-start-1">
                <p className="bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] to-100% bg-clip-text text-transparent">
                    A Fast Blockchain.
                </p>
                <p className="">Scalable AI.</p>
                <button className="text-white text-20 px-6 py-[6px] font-bold mt-[27px] bg-[#D94FD5] rounded-[14px] hover:bg-pink-500 transition-all duration-300 md:text-25 md:px-8 md:py-[8px]">
                    Get started
                </button>
            </div>
            <div className="mt-[69px] md:absolute md:right-[-5rem]">
                <img src={Cards} alt="card-credit" className="mx-auto"></img>
            </div>
        </section>
    );
};

export default Slogan;
