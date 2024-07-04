import '../App.css'
import WormholeConnect from '@wormhole-foundation/wormhole-connect';

export default function Swap() {


    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    return <WormholeConnect />
}