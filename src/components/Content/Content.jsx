import React from "react";
import { FaUser } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { BsCreditCardFill } from "react-icons/bs";
import checkiconMobile from "../../assets/mobile/checkpoint.svg";

const Content = () => {
    const customer = useSpring({
        customers: 10245,
        from: {
            customers: 0,
        },
    });
    const card = useSpring({
        cards: 12045,
        from: {
            cards: 0,
        },
    });
    return (
        <section className="md:flex md:flex-row">
            <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[24px] md:w-[40%] md:ml-[54px]">
                <div className="mt-16 flex items-start gap-8">
                    <FaUser size={"22px"} className="mt-{12px}" />
                    <div className="text-26">
                        <animated.div>
                            {customer.customers.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="text-13 font-semibold mb-[36px] md:text-16">
                            Customer
                        </p>
                    </div>
                </div>
                <div className="gap-8 flex items-start mb-14">
                    <BsCreditCardFill size={"22px"} className="mt-[12px]" />
                    <div className="text-26">
                        <animated.div>
                            {card.cards.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="text-13 font-semibold md:text-14">
                            Cards Issued
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold mx:w-[30%] md:mt-0 md:text-16 md:ml-[10%]">
                <div className="check-content">
                    <img src={checkiconMobile} alt="" />
                    <p>Card report sent to your phone every weeks</p>
                </div>
                <div className="check-content">
                    <img src={checkiconMobile} alt="" />
                    <p>No external fee</p>
                </div>
                <div className="check-content">
                    <img src={checkiconMobile} alt="" />
                    <p>Set spending limits and restrictions</p>
                </div>
            </div>
        </section>
    );
};

export default Content;
