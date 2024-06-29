import '../App.css'
import { useEffect } from 'react';

export default  function Grant() {

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
     <h1>You can apply for grants here</h1>
     <h3>Comming Soon</h3>
    </>
  )
}

