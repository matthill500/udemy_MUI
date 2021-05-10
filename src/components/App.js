import Header from '../components/UI/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './UI/Theme';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={() => <div>home</div>} />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route exact path="/customsoftware" component={() => <div>custom software</div>} />
          <Route exact path="/mobileapps" component={() => <div>mobile apps</div>} />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
          <Route exact path="/revolution" component={() => <div>revolution</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
