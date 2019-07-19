import React, { memo, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
import '../../themes/fonts.css';
//Todo: Component


const HomePageHeaderForm = memo(props => {
    const StyleContainer = StyleMain.styleContainer();
    const StyleHeader = StyleMain.styleHeader();
    return (
        <Fragment>
            <Grid container style={{ flexDirection: 'row' }}>
                <Grid item md={4}>
                    <label className={StyleContainer.labelLogo}>DevS#</label>
                </Grid>
                <Grid item md={8} style={{textAlign:'right'}}>

                </Grid>
            </Grid>
        </Fragment>
    )
})
export default HomePageHeaderForm;