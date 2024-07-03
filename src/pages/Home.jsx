import '../App.css'
import applogo from '../assets/crypto-plate-transparent.svg'
import Charts from '../components/Charts'
import { useEffect } from 'react';

export default function Home() {
        
        useEffect(() => {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
          script.innerHTML = JSON.stringify({
            symbols: [
              { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
              { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
              { description: "Ton", proName: "CRYPTOCAP:TON" },
              { description: "Injective", proName: "CRYPTO:INJUSD" },
              { description: "Solana", proName: "CRYPTOCAP:SOL" },
              { description: "Notcoin", proName: "CRYPTO:NOTUSD" },
              { description: "", proName: "CRYPTOCAP:OP" },
              { description: "Bonk", proName: "BYBIT:BONKUSDT" }
            ],
            showSymbolLogo: true,
            isTransparent: true,
            displayMode: "regular",
            colorTheme: "dark",
            locale: "en"
          });
          document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);



        }, []);
      

    const listingImages =  {
        image1: "https://www.tbstat.com/wp/uploads/2024/05/20240509_Bitcoin_News_4-1200x675.jpg?isSafari=false&isMobile=false",
        image2: "https://www.tbstat.com/wp/uploads/2022/10/20221006_zkSync-1200x675.jpg?isSafari=false&isMobile=false",
        image3: "https://www.tbstat.com/wp/uploads/2021/05/shutterstock_1900201285-1013x675.jpg?isSafari=false&isMobile=false",
        image4: "https://www.tbstat.com/cdn-cgi/image/format=avif,q=50/wp/uploads/2021/07/Behind-the-Scenes-of-EU-Crypto-Reg-IMAGE-1012x675.jpeg",
        image5: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=747/https://s3.cointelegraph.com/storage/uploads/view/377ad6cafc135d41c85e5fd3defb14d7.jpg",
        image6: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=747/https://s3.cointelegraph.com/uploads/2024-05/ec956e4f-a6b8-485a-8f6b-286f61e8bf06.jpg",
        image7: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=747/https://s3.cointelegraph.com/storage/uploads/view/6deab08103cdfd678f574211928fe3e2.jpg",
        image8: "https://bitcoinmagazine.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_320/MjA2NDgyNTkwNzE3MTkxODg2/default_workers_bitcoin_0.webp",
        image9: "https://bitcoinmagazine.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_320/MjA2NDk2NDk4ODk1MDM3Nzgw/morgan-s.webp",
        image10: "https://bitcoinmagazine.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_320/MjA2NDIwNjk4ODk2Mjc5MjQ2/screen-shot-2024-05-14-at-124125-am.webp",
        image11: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=747/https://s3.cointelegraph.com/uploads/2024-05/9d7aa322-2bd5-419f-bea8-f04693ee2806.jpg",
        image12: "https://www.tbstat.com/wp/uploads/2023/08/20230726_DeFi_News-1200x675.jpg",
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    return (
        <>
                    <div className="tradingview-widget-container">
                        <div className="tradingview-widget-container__widget"></div>
                    </div>
                    <div className="introductions">
                        <span className="about">
                        <img src={applogo} alt="Logo" className='app-logo2' />
                            Welcome to our Crypto Hub! 🚀
                            Here, you'll find the latest insights and detailed guides on everything crypto-related. Whether you're interested in the newest trends in cryptocurrency, seeking grants to fund your blockchain projects, or exploring platforms to earn and mine crypto, we've got you covered. Dive into our blog posts and stay ahead in the ever-evolving world of digital currencies. 💎✨
                        </span>
                    </div>
                    <div className="introductions wormhole-intro">
                        <h2>Wolmhole A Multichain Application</h2>
                        <span>Wormhole is not a blockchain itself, it provides a means of communication between blockchains or rollups.</span>
                        <span>Wormhole is not a token bridge, though there are protocols built on Wormhole that serve this purpose.</span>
                        <Link to="/swap">Try it Now</Link>
                    </div>

                    <div className='trading-view'>
                        <h2>Advanced Real-Time Chart</h2>
                        <Charts />
                    </div>

                    <div className="introductions wormhole-detail">
                        <h3>What can Wormhole be used for?</h3>
                        <ul>
                            <li><b>Cross Chain Exchange:</b> Using Wormhole Connect, a developer can build an exchange that allows deposits from any Wormhole connected chain, massively increasing the liquidity their users can access.</li>
                            <li><b>Cross Chain Governance:</b> If a group of NFT collections on different networks wanted their holders to vote on a combined proposal, they could pick a "voting" chain, and use Wormhole to communicate votes cast on their disparate chains to the voting chain.</li>
                            <li><b>Cross Chain Game:</b> A game could be built and played on a performant network like Solana, and it's rewards issued as NFTs on a different network, for example Ethereum.</li>
                        </ul>
                    </div>

                        <div className="listing-container">
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image1} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">Spot bitcoin ETF inflows in May have made up for April outflows: analyst</span>
                                    <span className="list-source">The Block</span>
                                </div>
                                <div className="listing-content">
                                    <span>"The bitcoin ETFs have put together a solid two weeks with $1.3 billion in inflows, which offsets the entirety of the negative flows in April — putting them back around high water mark of +$12.3 billion net since launch," wrote Bloomberg's senior ETF analyst Eric Balchunas on the social media platform X.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://www.theblock.co/post/295204/spot-bitcoin-etf-inflows-in-may-have-made-up-for-april-outflows-analyst" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image2} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">ZkSync teases v24 upgrade, fueling airdrop rumors</span>
                                    <span className="list-source">The Block</span>
                                </div>
                                <div className="listing-content">
                                    <span>ZkSync said Friday in an X post that it will soon roll out an upgrade to accelerate its protocol's decentralization. Some traders see the announcement as a sign that the network will conduct an airdrop this summer.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://www.theblock.co/post/295190/zksync-teases-v24-upgrade-fueling-airdrop-rumors" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image3} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">Memecoins GME, Roaring Kitty spike even as GameStop's stock tumbles back to earth</span>
                                    <span className="list-source">The Block</span>
                                </div>
                                <div className="listing-content">
                                    <span>GME and Roaring Kitty, two memecoins themed on — though not connected to — the video game retailer GameStop, spiked within the past day as the firm's stock fell. </span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://www.theblock.co/post/295138/memecoins-gme-roaring-kitty-spike-even-as-gamestops-stock-tumbles-back-to-earth"target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image4} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">Scaramucci says institutional adoption of Bitcoin set to accelerate</span>
                                    <span className="list-source">Crypto Slate</span>
                                </div>
                                <div className="listing-content">
                                    <span>"He attributed the growing institutional interest to Bitcoin's regulatory approval, which addresses a key barrier for large-scale institutional investors.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://cryptoslate.com/scaramucci-says-institutional-adoption-set-to-accelerate/" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image5} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">How blockchain and AI can reshape agriculture: Interview with Dimitra</span>
                                    <span className="list-source">CoinTelegraph</span>
                                </div>
                                <div className="listing-content">
                                    <span>Blockchain exec shares key insights on how decentralization offers smallholder farmers access to more efficient and sustainable agriculture.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://cointelegraph.com/news/how-blockchain-and-ai-can-reshape-agriculture-interview-with-dimitra" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image6} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">Genesis Global secures court approval for $3B payout</span>
                                    <span className="list-source">CoinTelegraph</span>
                                </div>
                                <div className="listing-content">
                                    <span>According to Judge Lane, any available funds for distribution by Genesis are being exhausted by creditor claims, which take priority over DCG’s equity stake.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://cointelegraph.com/news/genesis-global-secures-court-approval-for-3b-payout" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image7} alt="CoinTelegraph" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">Web3 travel app turns regional experiences into mintable NFTs</span>
                                    <span className="list-source">CoinTelegraph</span>
                                </div>
                                <div className="listing-content">
                                    <span>Travelers around the world are ready to discover new destinations, and blockchain is here to help connect local attractions to global experiences.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://cointelegraph.com/news/web3-travel-app-turns-regional-experiences-into-mintable-nfts" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image8} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">$5.1 BILLION PENSION FUND CIO JOINS NON-PROFIT ORGANIZATION FOCUSED ON BITCOIN ADOPTION</span>
                                    <span className="list-source">Bitcoin Magazine</span>
                                </div>
                                <div className="listing-content">
                                    <span>Today, the Proof of Workforce Foundation, a 501(c)(4) tax-exempt nonprofit organization, has announced the addition of two distinguished members to its Board of Directors: Ajit Singh and Raphael Zagury, according to a press release sent to Bitcoin Magazine. This duo is being brought on to further strengthen the Foundation’s mission to promote meaningful, education-based Bitcoin adoption among workforce organizations.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://bitcoinmagazine.com/business/5-1-billion-pension-fund-cio-joins-non-profit-organization-focused-on-bitcoin-adoption" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image9} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">$1.5 TRILLION WALL STREET GIANT MORGAN STANLEY BUYS BITCOIN ETF EXPOSURE</span>
                                    <span className="list-source">Bitcoin Magazine</span>
                                </div>
                                <div className="listing-content">
                                    <span>Recent 13F SEC filings have revealed several major US financial institutions are allocating serious money to Bitcoin via spot ETFs, with these filings disclosing the holdings of institutional investors with over $100 million allocated.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://bitcoinmagazine.com/business/1-5t-morgan-stanley-is-buying-us-spot-bitcoin-etf" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image10} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">BITCOIN ASIA: CHINA EMERGES AS NEW FRONTIER FOR BITCOIN INNOVATION</span>
                                    <span className="list-source">Bitcoin Magazine</span>
                                </div>
                                <div className="listing-content">
                                    <span>The frontier has a way of capturing everyone’s imagination – young and old. The cowboys, the outlaws, the gold prospectors. A land of opportunity and harsh cruelty. Unforgiving yet irresistible.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://bitcoinmagazine.com/culture/china-new-frontier-bitcoin-innovation" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image11} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">Blockchain gaming investments reached nearly $1B in April</span>
                                    <span className="list-source">CoinTelegraph</span>
                                </div>
                                <div className="listing-content">
                                    <span>The investment figures come alongside a record high 2.9 million daily unique active wallets (dUAW) for the month. Blockchain gaming saw investments totaling $988 million in the month of April, the highest since January 2021. The number of daily unique active wallets also reached a record-setting 2.9 million for blockchain gaming.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://cointelegraph.com/news/blockchain-gaming-investments-1-billion-nft-web3-april" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                            <div className="listing-items show-scroll-animaton">
                                <div className="listing-head">
                                    <img src={listingImages.image12} alt="The Block" />
                                    <span>Blog</span>
                                </div>
                                <div className="title-container">
                                    <span className="name">After start of SEC's 'war on DeFi,' UNI and others struggle to recover</span>
                                    <span className="list-source">The Block</span>
                                </div>
                                <div className="listing-content">
                                    <span>It has now been over a month since it was revealed that Uniswap UNI +4.58% Labs had received a Wells Notice, indicating the U.S. Securities and Exchange Commission intends to bring charges against the developers of the largest decentralized exchange.</span>
                                </div>
                                <div className="blog-url">
                                    <span><a href="https://cointelegraph.com/news/genesis-global-secures-court-approval-for-3b-payout" target='_blank'>Visit</a></span>
                                </div>
                            </div>
                    </div>
        </>
    )
}