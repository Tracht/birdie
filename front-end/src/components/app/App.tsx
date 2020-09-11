import * as React from 'react';
// import { RootState } from '@App/store/reducers/reducerIndex';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import { GlobalStyle, AppContainer, Logo, Title, SubTitle } from './AppStyle';

import Button from '@App/components/ButtonStyle';
import Dashboard from '../dashboard/Dashboard';
const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppState {
  isHomePageHidden?: boolean;
  toggleHomePageHidden?: boolean;
}

interface AppProps {
  isHomePageHidden?: boolean;
  toggleHomePageHidden?: boolean;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = { isHomePageHidden: false };
    this.toggleHomePageHidden = this.toggleHomePageHidden.bind(this);
  }

  toggleHomePageHidden () {
    this.setState({
      isHomePageHidden: !this.state.isHomePageHidden
    });
  }

  render() {
    const isHomePageHidden = this.state.isHomePageHidden;

    if ( isHomePageHidden === false ) {
      return(
        <div>
          <GlobalStyle />
          <AppContainer>
            <Logo src={LogoUrl} />
            <Title> Welcome </Title>
            <SubTitle> Let's see how your loved one is doing </SubTitle>
            <Button onClick={this.toggleHomePageHidden} > Go to dashboard! </Button>
          </AppContainer>
        </div>
      ); 
    } else {
        return(
        <div>
          <GlobalStyle />
          <AppContainer>
            <Logo src={LogoUrl} />
            <Button onClick={this.toggleHomePageHidden} > Go to homepage </Button>
            <Dashboard />
          </AppContainer>
        </div>
        );
      }
  }

} 

export default App; 