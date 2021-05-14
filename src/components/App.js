import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';
import { ThemeProvider } from '@material-ui/styles';
import theme from './UI/Theme';
import {useState} from 'react';
import LandingPage from '../components/LandingPage';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route exact path="/customsoftware" component={() => <div>custom software</div>} />
          <Route exact path="/mobileapps" component={() => <div>mobile apps</div>} />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
          <Route exact path="/revolution" component={() => <div>revolution</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
