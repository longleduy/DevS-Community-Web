import React, { memo, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component


const HomePageContainerForm = memo(props => {
    const StyleHomePageContainer = StyleMain.styleHomePageContainer();
    const StyleApp = StyleMain.styleApp();
    return (
        <Fragment>
            <Grid className={StyleHomePageContainer.divMain}>
                <Grid item md={12} className={StyleHomePageContainer.divLogo}>
                    <span className={StyleHomePageContainer.spanContent}>
                        <label className={StyleHomePageContainer.labelAppName}>DevS# Community</label>
                        <label>
                            cong dong danh cho developer, HR, sinh vien... Noi giao luu, trao doi kinh nghiem
                            lap trinh, tuyen ung vien, tim viec...
                        </label>
                    </span>
                </Grid>
                <Grid item md={12} className={StyleHomePageContainer.divContent}>
                    <Link to="/sign/sign-in" className={StyleApp.linkButton}>
                        <Button className={StyleHomePageContainer.flatButtonSignIn}>
                            Đăng nhập
                    </Button>
                    </Link>
                    <label>hoặc</label>
                    <Link to="/sign/sign-up" className={StyleApp.linkButton}>
                        <Button className={StyleHomePageContainer.flatButtonSignUp}>
                            Đăng ký
                    </Button>
                    </Link>
                </Grid>
                <Grid item className={StyleHomePageContainer.divMobileApp}>
                    <label>Phien ban danh cho di dong</label>
                    <img style={{ width: '6%', marginRight: 10 }} src={require('../../../public/images/logo/android-store.png')} />
                    <img style={{ width: '6%' }} src={require('../../../public/images/logo/ios-store.png')} />
                </Grid>
            </Grid>
        </Fragment>
    )
})
export default HomePageContainerForm;