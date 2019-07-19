import React, { memo, Fragment } from 'react';
import { Switch, Route } from 'react-router';
import Grid from '@material-ui/core/Grid';
//Todo: Styles
import StyleMain from '../themes/StyleMain';


const NotFoundForm = memo(props => {
    const StyleContainer = StyleMain.styleContainer();
    return (
        <Fragment>
            <Grid container className={StyleContainer.appDiv}>
                <h4>404</h4>
            </Grid>
        </Fragment>
    )
})
export default NotFoundForm;