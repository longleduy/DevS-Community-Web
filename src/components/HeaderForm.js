import React, { memo, Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';
import Notifications from '@material-ui/icons/NotificationsActive';
//Todo: Styles
import StyleMain from '../themes/StyleMain';
//Todo: Component
//Todo: Utils
import {showMenuRouter} from '../utils/router/renderRouterutil';

const HeaderForm = memo(props => {
    const StyleAppHeader = StyleMain.styleAppHeader();
    const [openMenu, setOpenMenu] = useState(false);
    const handleClickAway = () => {
        setOpenMenu(false)
    }
    const _onHandleMenu = () => {
        setOpenMenu(!openMenu)
    }
    const _onSignOut = () => {
        localStorage.removeItem('token');
        props.history.push('/sign/sign-in')
    }
    return (
        <Fragment>
            <Grid container className={StyleAppHeader.headerDivMain}>
                <div className={StyleAppHeader.headerRightDiv}>
                    <div className={StyleAppHeader.headerDivNotiLogo} style={{ flex: 1 }}>
                        <div className={StyleAppHeader.headerDivNotiCount}>
                            <Email className={StyleAppHeader.headerNotifiLogo} />
                            <label className={StyleAppHeader.labelNotiCount}>12</label>
                        </div>
                        <div className={StyleAppHeader.headerDivNotiCount}>
                            <Notifications className={StyleAppHeader.headerNotifiLogo} />
                            <label className={StyleAppHeader.labelNotiCount}>5</label>
                        </div>
                    </div>
                    <div className={StyleAppHeader.headerDivMenu}>
                        {showMenuRouter()}
                        {/* <IconButton className={`${StyleAppHeader.iconBtnMenu} ${StyleAppHeader.iconBtnMenuActv}`}>
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M6,7H18V9H6V7M6,11H16V13H6V11Z" />
                            </svg>
                        </IconButton>
                        <IconButton className={StyleAppHeader.iconBtnMenu}>
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" d="M12,3A4,4 0 0,1 16,7A4,4 0 0,1 12,11A4,4 0 0,1 8,7A4,4 0 0,1 12,3M16,13.54C16,14.6 15.72,17.07 13.81,19.83L13,15L13.94,13.12C13.32,13.05 12.67,13 12,13C11.33,13 10.68,13.05 10.06,13.12L11,15L10.19,19.83C8.28,17.07 8,14.6 8,13.54C5.61,14.24 4,15.5 4,17V21H10L11.09,21H12.91L14,21H20V17C20,15.5 18.4,14.24 16,13.54Z" />
                            </svg>
                        </IconButton>
                        <IconButton className={StyleAppHeader.iconBtnMenu}>
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z" />
                            </svg>
                        </IconButton> */}
                    </div>
                    <div className={StyleAppHeader.headerDivSearch}>
                        <input type='text' placeholder='Nhập từ khóa tìm kiếm' />
                    </div>

                </div>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Fragment>
                        <div className={StyleAppHeader.headerDivLogo}>
                            <Avatar
                                className={StyleAppHeader.avatarHeader}
                                src="https://res.cloudinary.com/seatechit/image/upload/v1557370393/g75ni2vbjm0jkdc0ccu7.jpg"
                                onClick={_onHandleMenu} />
                            {openMenu && <Paper className={StyleAppHeader.menuMore}>
                                <Button className={StyleAppHeader.menuMoreBtn}>
                                    <svg viewBox="0 0 24 24">
                                        <path fill="#000000" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                                    </svg>
                                    <label>Trang cá nhân</label>
                                </Button>
                                <Button className={StyleAppHeader.menuMoreBtn}>
                                    <svg viewBox="0 0 24 24">
                                        <path fill="#000000" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                                    </svg>
                                    <label>Cài đặt</label>
                                </Button>
                                <Button className={StyleAppHeader.menuMoreBtn}>
                                    <svg viewBox="0 0 24 24">
                                        <path fill="#000000" d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18V21Z" />
                                    </svg>
                                    <label>Bảo mật</label>
                                </Button>
                                <Button
                                    className={StyleAppHeader.menuMoreBtnExit}
                                    onClick={_onSignOut}>
                                    <svg viewBox="0 0 24 24">
                                        <path fill="#000000" d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" />
                                    </svg>
                                    <label>Đăng xuất</label>
                                </Button>
                            </Paper>}
                        </div>

                    </Fragment>
                </ClickAwayListener>
            </Grid>
        </Fragment>
    )
})
export default withRouter(HeaderForm);