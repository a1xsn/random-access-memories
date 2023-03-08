import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes'

import useSticky from './components/useSticky';

import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Team from './components/sections/Team';
import FAQ from './components/sections/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Trailer from './components/sections/Trailer';
import EXR from './components/sections/EXR';
import StageII from './components/sections/StageII';
import Intro from './components/sections/Intro';

function App() {

  const { isSticky, element } = useSticky()

  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
        <Intro />
        <Navigation />
        <Home />
        <Trailer />
        <About />
        <EXR />
        <StageII />
        <Team />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
