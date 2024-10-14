import HomeFooter from "../Home/Home_Footer/HomeFooter"
import "./LearnNow_Page.css"

import React, { useRef, useEffect, useState } from 'react';

export default function LearnNowPage() {
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const boxRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0 // Fully visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsBoxVisible(true);
                } else {
                    setIsBoxVisible(false);
                }
            });
        }, options);

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }

        // Cleanup
        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, []);
    return (
    <div className="learn_now_page_container">
        
        <div className="learn_header_container">
            <div className="learn_header_info">
                <h1>Shaping the Future through a Strategic Blueprint</h1>
                <div className="leran_header_logo_container">
                    <img src="./GRTPAY_logo_full.png" alt="" />
                </div>
            </div>
        </div>

        <div className="more_info_container">
            <div className="more_info_head">
                <h1>Welcome to the heart of the GRT-Pay Network – our Tokenomics.</h1>
                <p>Through a meticulous blend of strategy and foresight, we have designed a system that ensures transparency, rewards commitment, and lays the foundation for sustained growth.</p>
            </div>

            <div className="more_info_body">

                <hr />
                <div className="boxes" ref={boxRef}>
                    <div className="number_info">
                        <p>Conin Supply</p>
                        <h2>50,000,000,000 (50 Billion) - in presale</h2>
                    </div>
                    <div className="image_info_container">
                        <img src="./learnNow_page_images/box_1.png" alt="" />
                        <div>
                            <p>GRT-Pay Coin (BDAG) stands out with a total supply of 150 billion coins, underscoring its rarity and commitment to maintaining value. At GRT-Pay Network, we've implemented a halving event every 12 months, further solidifying our commitment to maintaining scarcity and value. Setting a limit on our coin supply helps us manage growth responsibly, avoid excessive inflation and create a stable environment for our community.</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="boxes" ref={boxRef}>
                    <div className="number_info">
                        <p>Community Allocation</p>
                        <h2>98,500,000,000 (98.5 Billion) - 66% of Max Supply</h2>
                    </div>

                    <div className="image_info_container">
                        <img src="./learnNow_page_images/box_2.png" alt="" />
                        <div>
                            <p>The Pillar of BlockDAG: We've reserved a major portion for our community because we believe in its power. This allocation represents our commitment to everyone who uses, promotes, and envisions the network's potential.</p>
                            <p>Miners (78.8 billion coins or 80% of Community Coins): Rewards for those crucial to our network's operation.</p>
                            <p>Liquidity Pool (4.9 billion coins or 5% of Community Coins): To ensure smooth and stable trading experiences.</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="boxes" ref={boxRef}>
                    <div className="number_info">
                        <p>Presale Allocation</p>
                        <h2>50,000,000,000 (50 Billion) - 33% of Max Supply </h2>
                    </div>

                    <div className="image_info_container">
                        <img src="./learnNow_page_images/box_3.png" alt="" />
                        <div>
                            <p>GRT-Pay Coin (BDAG) stands out with a total supply of 150 billion coins, underscoring its rarity and commitment to maintaining value. At GRT-Pay Network, we've implemented a halving event every 12 months, further solidifying our commitment to maintaining scarcity and value. Setting a limit on our coin supply helps us manage growth responsibly, avoid excessive inflation and create a stable environment for our community.</p>
                        </div>
                    </div>
                
                </div>
                <hr />

                <div className="boxes" ref={boxRef}>
                    <div className="number_info">
                        <p>Team Allocation</p>
                        <h2>1,500,000,000 (1.5 Billion) - 1% of Max Supply</h2>
                    </div>
                    <div className="image_info_container">
                        <img src="./learnNow_page_images/box_4.png" alt="" />
                        <div>
                            <p>GRT-Pay Coin (BDAG) stands out with a total supply of 150 billion coins, underscoring its rarity and commitment to maintaining value. At BlockDAG Network, we've implemented a halving event every 12 months, further solidifying our commitment to maintaining scarcity and value. Setting a limit on our coin supply helps us manage growth responsibly, avoid excessive inflation and create a stable environment for our community.</p>
                        </div>
                    </div>
                    </div>
                <hr />

            </div>
        </div>

        <div className="end_content">
            <h1>Our Commitment Showcased</h1>
            <p>The team—our core driving force—is allocated this portion. Demonstrating our long-term vision, these coins are locked for 2 years. It's our way of saying we're in this for the long haul, fully invested in the success of GRT-Pay.Conclusion
               Tokenomics isn't just a distribution strategy; it's a reflection of our ethos, our vision, and our promise to stakeholders. At GRT-Pay Network, our tokenomics is a transparent commitment to every supporter, miner, developer, and believer in our mission. This is our blueprint, and with it, we're building the future of crypto.
               Be Part of Our Story. Join the BlockDAG Revolution.
            </p>
        </div>

        <HomeFooter/>
    </div>)
}