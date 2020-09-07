import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { GlobalStyle, AppContainer } from './AppStyle';

import Title from '@App/components/Title';
import Logo from '@App/components/Logo';
import SubTitle from '@App/components/SubTitle';
// import Button from '@App/components/Button';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

// Typescript declarations 
interface AppProps {

}

interface AppState {
  // isOnHomePage: boolean,
  // showDashboard: Function,
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

  }

  render() {
    // const isOnHomePage = this.state.isOnHomePage;

    // if ( isOnHomePage === true ) {
      return(
        <>
          <GlobalStyle />
          <AppContainer>
            <Logo src={LogoUrl} />
            <Title>Welcome</Title>
            <SubTitle>Let's see how your loved one is doing</SubTitle>
            {/* <Button onClick={this.showDashboard}>Go to dashboard!</Button> */}
          </AppContainer>
        </>
      ); 
    // } else {
    //     return(
    //     <>
    //       <GlobalStyle />
    //       <AppContainer>
    //         {/* <Dashboard /> */}
    //         <h1>Dashboard</h1>
    //       </AppContainer>
    //     </>
    //     )
    
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(App);