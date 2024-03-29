import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { control } from '../../../state';
import { CONTROLS } from '../../../types';
import './AppScreen.scss';
interface Props {
  onBack: () => void;
}

function AppScreen({ onBack }: Props) {
  const [controlState, setControlState] = useRecoilState(control);
  const [menuIndex, setMenuIndex] = useState(0);

  const MINT = 'https://quixotic.io/launchpad/0x5c9D55b78FEBCC2061715BA4f57EcF8EA2711F2c';
  // const COLLECTION = 'https://quixotic.io/';
  const COLLECTION = 'https://quixotic.io/collection/motorheadz';
  const TWITTER = 'https://twitter.com/jvmi_';
  const MIRROR = 'https://mirror.xyz/0x57D1eAE9f0972723F0e78EAF4e6C08e90565206F/AtKMzoVY1qzrvA1gal1XqJv74bpx-sg9ptv5TDw2maU';

  useEffect(() => {
    if (controlState.last === CONTROLS.B) {
      const newControlState = { last: '', history: [...controlState.history] };
      setControlState(newControlState);
      onBack();
    }
    if (controlState.last === CONTROLS.RIGHT || controlState.last === CONTROLS.LEFT) {
      const newControlState = { last: '', history: [...controlState.history] };
      setControlState(newControlState);
      switch (menuIndex) {
        case 0:
          setMenuIndex(1);
          break;
        case 1:
          setMenuIndex(0);
          break;
        case 2:
          setMenuIndex(3);
          break;
        case 3:
          setMenuIndex(2);
          break;
        default:
      }
    }

    if (controlState.last === CONTROLS.A) {
      switch (menuIndex) {
        case 0:
          window.open(MINT, '_blank');
          break;
        case 1:
          window.open(COLLECTION, '_blank');
          break;
        case 2:
          window.open(TWITTER, '_blank');
          break;
        case 3:
          window.open(MIRROR, '_blank');
          break;
        default:
      }
    }

    if (controlState.last === CONTROLS.UP || controlState.last === CONTROLS.DOWN) {
      const newControlState = { last: '', history: [...controlState.history] };
      setControlState(newControlState);
      switch (menuIndex) {
        case 0:
          setMenuIndex(2);
          break;
        case 1:
          setMenuIndex(3);
          break;
        case 2:
          setMenuIndex(0);
          break;
        case 3:
          setMenuIndex(1);
          break;
        default:
      }
    }
  });

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <div className='appScreen__container'>
      <div className='appCard__wrapper'>
        <motion.div initial='hidden' animate='visible' variants={variants} transition={{ duration: 0.75, delay: 0 }} className={`appCard ${menuIndex === 0 ? 'mint' : ''}`}>
          mint
        </motion.div>
        <motion.div initial='hidden' animate='visible' variants={variants} transition={{ duration: 0.75, delay: 0.15 }} className={`appCard ${menuIndex === 1 ? 'collection' : ''}`}>
          collection
        </motion.div>
        <motion.div initial='hidden' animate='visible' variants={variants} transition={{ duration: 0.75, delay: 0.3 }} className={`appCard ${menuIndex === 2 ? 'twitter' : ''}`}>
          twitter
        </motion.div>
        <motion.div initial='hidden' animate='visible' variants={variants} transition={{ duration: 0.75, delay: 0.45 }} className={`appCard ${menuIndex === 3 ? 'blog' : ''}`}>
          blog
        </motion.div>
      </div>
      <motion.p animate={{ y: [100, 0] }} transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }} className='instructions'>
        {'arrows to navigate, A to select, B to exit'}
      </motion.p>
    </div>
  );
}

export default AppScreen;
