import React, { memo,Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component
import DefaultPostLeftForm from './DefaultPostLeftForm';
import DefaultContentContainer from '../../containers/DefaultPost/DefaultContentContainer';
import DefaultPostRightForm from './DefaultPostRightForm';

const DefaultPostForm = memo(props => {
    const StyleApp = StyleMain.styleApp();
    return (
        <Fragment>
            <Grid container className={StyleApp.defaultContainer}>
                <DefaultPostLeftForm/>
                <DefaultContentContainer/>
                <DefaultPostRightForm/>
            </Grid>
        </Fragment>
    )
})
export default DefaultPostForm;