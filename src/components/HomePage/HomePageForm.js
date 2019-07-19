import React, { memo, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component
import HomePageHeaderForm from './HomePageHeaderForm';
import HomePageContainerForm from './HomePageContainerForm';

const HomePageForm = memo(props => {
    const StyleContainer = StyleMain.styleContainer();
    return (
        <Fragment>
            <Grid container className={StyleContainer.imageContainer} style={{padding: '10px 15px 10px 15px'}}>
                <HomePageHeaderForm />
                <HomePageContainerForm />
            </Grid>
        </Fragment>
    )
})
export default HomePageForm;