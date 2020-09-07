import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { GlobalStyle, AppContainer } from './AppStyle';
import Title from '@App/components/Title';
import Logo from '@App/components/Logo';
import SubTitle from '@App/components/SubTitle';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

// Typescript declarations 
interface AppProps {

}
interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Logo src={LogoUrl} />
          <Title>Welcome!</Title>
          <SubTitle>Let's see how your loved one is doing.</SubTitle>
        </AppContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => {};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};

export default connect(mapStateToProps, mapDispatchToProps)(App);