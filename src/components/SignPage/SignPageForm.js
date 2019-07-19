import React, { memo, Fragment } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component
import SignInContainer from '../../containers/SignPage/SignInContainer';
import SignUpContainer from '../../containers/SignPage/SignUpContainer';
import SignPageRightForm from './SignPageRightForm';


const SignPageForm = memo(props => {
    const StyleContainer = StyleMain.styleContainer();
    return (
        <Fragment>
            <Grid container className={StyleContainer.imageContainer} style={{ justifyContent: 'center' }}>
                <div style={{ display: 'flex', flex: .85 }}>
                    <Route path="/" exact render={() => <SignInContainer />} />
                    <Route path="/sign/sign-in" exact render={() => <SignInContainer />} />
                    <Route path="/sign/sign-up" exact render={() => <SignUpContainer />} />
                    <SignPageRightForm />
                </div>
            </Grid>
        </Fragment>
    )
})
export default SignPageForm;