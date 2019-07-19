import React, { memo, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
//Todo: Styles
import StyleMain from './themes/StyleMain';
//Todo: Component
import Container from './containers/Container';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';

const App = props => {
    const StyleApp = StyleMain.styleApp();
    const isShowHeader = (location.hash).indexOf('/sign/sign-up') == -1 && (location.hash).indexOf('/sign/sign-in') == -1 && location.hash != '#/';
    return (
        <Fragment>
            <Grid container className={StyleApp.divApp}>
                {isShowHeader && <HeaderContainer />}
                <Container />
                {isShowHeader && <FooterContainer />}
            </Grid>
        </Fragment>
    )
}
export default withRouter(App);