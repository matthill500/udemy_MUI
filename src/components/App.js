import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';
import { ThemeProvider } from '@material-ui/styles';
import theme from './UI/Theme';
import {useState} from 'react';

import LandingPage from '../components/LandingPage';
import Services from '../components/Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';
import Websites from './Websites';
import Revolution from './Revolution';
import About from './About';
import Contact from './Contact';
import Estimate from './Estimate';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/services" render={(props) => <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/customsoftware" render={(props) => <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/mobileapps" render={(props) => <MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/websites" render={(props) => <Websites {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/about" render={(props) => <About {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/contact" render={(props) => <Contact {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/estimate" component={(props) => <Estimate {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/revolution" render={(props) => <Revolution {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
        </Switch>
        <Footer  setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
