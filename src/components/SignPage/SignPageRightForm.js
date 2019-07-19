import React, { memo, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component


const SignPageRightForm = memo(props => {
    const StyleRigtForm = StyleMain.styleRigtForm();
    return (
        <Fragment>
            <Grid item md={6} style={{
                display: 'flex', flexDirection: 'column',
                padding: '0px 0px 0px 100px',
                margin: '30px 0px 30px 0px'
            }}>
                <div className={StyleRigtForm.divRightForm}>
                    <label className={StyleRigtForm.labelAppName}>
                        DevS# Community
                    </label>
                    <Grid container>
                        <Grid item md={6} className={StyleRigtForm.divContent}>
                            <svg viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
                            </svg>
                            <label>Thảo luận, hỏi đáp</label>
                        </Grid>
                        <Grid item md={6} className={StyleRigtForm.divContent}>
                            <svg viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M12,3A4,4 0 0,1 16,7A4,4 0 0,1 12,11A4,4 0 0,1 8,7A4,4 0 0,1 12,3M16,13.54C16,14.6 15.72,17.07 13.81,19.83L13,15L13.94,13.12C13.32,13.05 12.67,13 12,13C11.33,13 10.68,13.05 10.06,13.12L11,15L10.19,19.83C8.28,17.07 8,14.6 8,13.54C5.61,14.24 4,15.5 4,17V21H10L11.09,21H12.91L14,21H20V17C20,15.5 18.4,14.24 16,13.54Z" />
                            </svg>
                            <label>Tuyển dụng</label>
                        </Grid>
                        <Grid item md={6} className={StyleRigtForm.divContent}>
                            <svg viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" /></svg>
                            <label>Tìm việc</label>
                        </Grid>
                        <Grid item md={6} className={StyleRigtForm.divContent}>
                            <svg viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z" /></svg>
                            <label>Tạo CV online</label>
                        </Grid>
                        <Grid item md={6} className={StyleRigtForm.divContent}>
                            <svg viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" /></svg>
                            <label>Đặt lịch phỏng vấn</label>
                        </Grid>
                        <Grid item md={6} className={StyleRigtForm.divContent}>
                            <svg viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z" /></svg>
                            <label>Chia sẻ tài liệu</label>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Fragment>
    )
})
export default SignPageRightForm;