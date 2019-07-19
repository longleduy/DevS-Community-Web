import React, { memo, Fragment } from 'react';
import { Switch, Route } from 'react-router';
import Grid from '@material-ui/core/Grid';
//Todo: Styles
import StyleMain from '../themes/StyleMain';
//Todo: Component
import NotFoundForm from './NotFoundForm';

//Todo: Utils
import { showPublicRouter, showPrivateRouter } from '../utils/router/renderRouterutil';

const ContainerForm = memo(props => {
    const StyleContainer = StyleMain.styleContainer();
    return (
        <Fragment>
            <Grid container className={StyleContainer.appDiv}>
                <Switch>
                    {showPublicRouter()}
                    {showPrivateRouter()}
                    <Route render={() => <NotFoundForm />} />
                </Switch>
            </Grid>
        </Fragment>
    )
})
export default ContainerForm;