import React, { memo,Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component
import RecruitmentPostLeftForm from './RecruitmentPostLeftForm';
import RecruitmentPostRightForm from './RecruitmentPostRightForm';

const RecruitmentPostForm = memo(props => {
    const StyleApp = StyleMain.styleApp();
    return (
        <Fragment>
            <Grid container className={StyleApp.defaultContainer}>
                <RecruitmentPostLeftForm/>
                <RecruitmentPostRightForm/>
            </Grid>
        </Fragment>
    )
})
export default RecruitmentPostForm;