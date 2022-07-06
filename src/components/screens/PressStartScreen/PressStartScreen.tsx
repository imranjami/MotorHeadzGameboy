import LOGO from './../../../assets/motorheadz-logo.webp';
import './PressStartScreen.scss';
import A from '../../../assets/nfts/a.webp';
import B from '../../../assets/nfts/b.webp';
import C from '../../../assets/nfts/c.webp';
import D from '../../../assets/nfts/d.webp';
import E from '../../../assets/nfts/e.webp';

import { motion } from 'framer-motion';

function PressStartScreen() {
  const images = [C, D, A, B, E];
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const NFT_DURATION = 0.8;
  const NFT_DELAY = 1;

  return (
    <motion.div initial='hidden' animate='visible' variants={variants} className='pressStartScreen__container'>
      <img className='logo' src={LOGO} alt='Motorheadz Logo' />
      <motion.div initial='hidden' animate='visible' variants={variants} transition={{ delay: 0.5 }} className='nft__container'>
        <motion.img animate={{ x: [100, 0], opacity: [0, 1] }} transition={{ duration: NFT_DURATION, delay: NFT_DELAY, ease: 'easeOut' }} className='nft' src={C} alt='nft' />
        <motion.img animate={{ x: [50, 0], opacity: [0, 1] }} transition={{ duration: NFT_DURATION, delay: NFT_DELAY, ease: 'easeOut' }} className='nft' src={D} alt='nft' />
        <motion.img className='nft' src={A} alt='nft' />
        <motion.img animate={{ x: [-50, 0], opacity: [0, 1] }} transition={{ duration: NFT_DURATION, delay: NFT_DELAY, ease: 'easeOut' }} className='nft' src={B} alt='nft' />
        <motion.img animate={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: NFT_DURATION, delay: NFT_DELAY, ease: 'easeOut' }} className='nft' src={E} alt='nft' />
      </motion.div>
      <motion.div initial='hidden' animate='visible' variants={variants} transition={{ delay: 0.25 }} className='pressStart'>
        <p>Press start to continue...</p>
      </motion.div>
      <motion.p initial='hidden' animate='visible' variants={variants} transition={{ delay: NFT_DELAY + NFT_DURATION }} className='copyright'>
        2022 Flameboy inc.
      </motion.p>
    </motion.div>
  );
}

export default PressStartScreen;
