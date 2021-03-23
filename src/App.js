import './styles/App.css';

import StarfieldAnimation from 'react-starfield-animation';

import Examples from './components/structure/Examples';
import Hero from './components/structure/Hero';
import Process from './components/structure/Process';
import Pricing from './components/structure/Pricing';
import Contact from './components/structure/Contact';
import Questions from './components/structure/Questions';

function App() {
    return (
        <>
            <StarfieldAnimation
                numParticles='62.5'
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: '-10'
                }}
            />
            <Hero />
            <Examples />
            <Process />
            <Pricing />
            <Contact />
            <Questions />
        </>
    );
}

export default App;
