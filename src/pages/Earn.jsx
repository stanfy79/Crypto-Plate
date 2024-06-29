import '../App.css'
import { useEffect } from 'react';

export default function Earn() {

    const earnImage = {
      image1: "https://cdn-bplcd.nitrocdn.com/yYxFdwLqsIdKMsfCFJkddYGFYoJKEdpp/assets/images/optimized/rev-8a81c00/www.cryptonewsz.com/wp-content/uploads/2023/09/iq-mining-smart-contracts-for-profitability-768x460.png",
      image2: "http://ecos.am/wp-content/uploads/2024/01/1-1-768x512.webp",
      image3: "https://hashing24.com/i/hashing-logo.png",
      image4: "https://public.bnbstatic.com/static/academy/uploads-original/ad75b7b113ac422080d6ce73d379de6e.png",
      image5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcceu1Q7pBp1XgOG7dM9tIxzzwGNr1QGb9KMlBJ_EOA&s",
      image6: "https://coinlaunch.space/media/images/2/7/8/5/2785.sd2hmp.1920.jpeg",
      image: "",
      image: "",
    }

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
      

  return (
    <>
    <div className="tradingview-widget-container">
                        <div className="tradingview-widget-container__widget"></div>
                    </div>
     <h1>You can earn here</h1>

     <div className="listing-container">
        <div className="listing-items">
            <div className="listing-head">
                <img src={earnImage.image1} alt="IQ Mining" />
                <span>Earn</span>
            </div>
            <div className="title-container">
                <span className="name">IQ Mining</span>
                <span className="list-source">cryptonews</span>
            </div>
            <div className="listing-content">
                <span>Known for its smart mining contracts and automated payouts, IQ Mining supports a range of cryptocurrencies like BTC, ETH, and LTC. It offers daily payouts and has a relatively low fraud risk​ (cryptonewsz)​.</span>
            </div>
            <div className="blog-url">
                <span><a href="https://iqmining.com/" target='_blank'>Visit</a></span>
            </div>
        </div>
        <div className="listing-items">
            <div className="listing-head">
                <img src={earnImage.image2} alt="ECOS" />
                <span>Earn</span>
            </div>
            <div className="title-container">
                <span className="name">ECOS</span>
                <span className="list-source">Google</span>
            </div>
            <div className="listing-content">
                <span>A comprehensive platform that offers customizable Bitcoin mining contracts. It's known for its low entry costs and potential high returns, with a user-friendly mobile app for managing investments​ (cryptonews)​.</span>
            </div>
            <div className="blog-url">
                <span><a href="https://ecos.am/en/mining-farm" target='_blank'>Visit</a></span>
            </div>
        </div>
        <div className="listing-items">
            <div className="listing-head">
                <img src={earnImage.image3} alt="Hashing24" />
                <span>Earn</span>
            </div>
            <div className="title-container">
                <span className="name">Hashing24</span>
                <span className="list-source">hedgewithcrypto</span>
            </div>
            <div className="listing-content">
                <span>This long-standing service provides reliable Bitcoin mining with fixed-duration contracts and a user-friendly platform. It’s suitable for beginners due to its low entry barrier and demo mining account​ (hedgewithcrypto)​​. MetaMask is a self-custodial wallet used to manage your identity, digital assets and explore web3.</span>
            </div>
            <div className="blog-url">
                <span><a href="https://hashing24.com/" target='_blank'>Visit</a></span>
            </div>
        </div>
        <div className="listing-items">
            <div className="listing-head">
                <img src={earnImage.image4} alt="MetaMask" />
                <span>Earn</span>
            </div>
            <div className="title-container">
                <span className="name">MetaMask Validator Staking Smart Contracts: Program InfoIQ Mining</span>
                <span className="list-source">Bounty</span>
            </div>
            <div className="listing-content">
                <span>This program covers Staking in MetaMask Portfolio Validator Staking. Users stake 32 ETH and receive rewards in return. Deposits, claiming rewards, requesting withdrawals, provisionsing/deprovisioning of validator keys by the operator, and dispatching of rewards/fees are all executed by/via the Kiln On-Chain (v1) smart contracts deployed without a proxy.</span>
            </div>
            <div className="blog-url">
                <span><a href="https://hackenproof.com/metamask/metamask-validator-staking-smart-contracts" target='_blank'>Visit</a></span>
            </div>
        </div>
        <div className="listing-items">
            <div className="listing-head">
                <img src={earnImage.image5} alt="Polygon" />
                <span>Earn</span>
            </div>
            <div className="title-container">
                <span className="name">Polygon POS: Program Info</span>
                <span className="list-source">Bounty</span>
            </div>
            <div className="listing-content">
                <span>Polygon Labs develops Ethereum scaling solutions for Polygon protocols. Polygon Labs engages with other ecosystem developers to help make available scalable, affordable, secure and sustainable blockchain infrastructure for Web3. Polygon Labs develops Ethereum scaling solutions for Polygon protocols. Polygon Labs engages with other ecosystem developers to help make available scalable, affordable, secure and sustainable blockchain infrastructure for Web3</span>
            </div>
            <div className="blog-url">
                <span><a href="https://www.theblock.co/post/295204/spot-bitcoin-etf-inflows-in-may-have-made-up-for-april-outflows-analysthttps://hackenproof.com/polygon-technology/polygon-pos" target='_blank'>Visit</a></span>
            </div>
        </div>
        <div className="listing-items">
            <div className="listing-head">
                <img src={earnImage.image6} alt="Linea" />
                <span>Earn</span>
            </div>
            <div className="title-container">
                <span className="name">Founder of Uniswap Discusses Criteria for a Fair Airdrop</span>
                <span className="list-source">Airdrop</span>
            </div>
            <div className="listing-content">
                <span>Recently, Hayden Adams, founder of Uniswap, explained how airdrops work. He also discussed some mistakes other big projects tend to make before, giving his suggestions on the issue. He in particular pointed out that bringing in liquidity by attracting market makers was wrong. He encouraged them to be real clear on airdrop terms and details without depending on the future so much as well as not acting greedy.</span>
            </div>
            <div className="blog-url">
                <span><a href="https://coinlaunch.space/blog/uniswaps-founder-discusses-criteria-for-fair-airdrop/" target='_blank'>Visit</a></span>
            </div>
        </div>
    </div>
    </>
  )
}

