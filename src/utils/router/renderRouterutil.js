import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import StyleMain from '../../themes/StyleMain';
import {
    listMenuRouter,
    listPublicRouter,
    listPrivateRouter
} from './routerInfoUtil';
import { Route, NavLink } from "react-router-dom";
const getMunuIcon = role => {
    switch (role) {
        case 'DEFAULT_POST':
            return <path fill="#000000" d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M6,7H18V9H6V7M6,11H16V13H6V11Z" />;
        case 'REQUIREMENT_POST':
            return <path fill="#000000" d="M12,3A4,4 0 0,1 16,7A4,4 0 0,1 12,11A4,4 0 0,1 8,7A4,4 0 0,1 12,3M16,13.54C16,14.6 15.72,17.07 13.81,19.83L13,15L13.94,13.12C13.32,13.05 12.67,13 12,13C11.33,13 10.68,13.05 10.06,13.12L11,15L10.19,19.83C8.28,17.07 8,14.6 8,13.54C5.61,14.24 4,15.5 4,17V21H10L11.09,21H12.91L14,21H20V17C20,15.5 18.4,14.24 16,13.54Z" />;
        case 'QRCODE':
            return <path fill="#000000" d="M3,11H5V13H3V11M11,5H13V9H11V5M9,11H13V15H11V13H9V11M15,11H17V13H19V11H21V13H19V15H21V19H19V21H17V19H13V21H11V17H15V15H17V13H15V11M19,19V15H17V19H19M15,3H21V9H15V3M17,5V7H19V5H17M3,3H9V9H3V3M5,5V7H7V5H5M3,15H9V21H3V15M5,17V19H7V17H5Z" />;
        default:
            return <path fill="#000000" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M5,3H19C20.11,3 21,3.89 21,5V13.03C20.5,12.23 19.81,11.54 19,11V5H5V19H9.5C9.81,19.75 10.26,20.42 10.81,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3M7,7H17V9H7V7M7,11H12.03C11.23,11.5 10.54,12.19 10,13H7V11M7,15H9.17C9.06,15.5 9,16 9,16.5V17H7V15Z" />;
    }
}
const MyNavLink = ({ name, role, to, activeOnlyWhenExact }) => {
    const StyleAppHeader = StyleMain.styleAppHeader();
    return <Route path={to} exact={activeOnlyWhenExact}
        children={({ match }) => {
            let active = match ? StyleAppHeader.iconBtnMenuActv : null;
            return <NavLink
                to={to}
                exact={true}
            >
                <IconButton className={`${StyleAppHeader.iconBtnMenu} ${active}`}>
                    <svg viewBox="0 0 24 24">
                        {getMunuIcon(role)}
                    </svg>
                </IconButton>
            </NavLink>
        }}
    />
}

export const showMenuRouter = () => {
    return listMenuRouter.map(({ role, name, to, exact }, idx) => {
        return <MyNavLink
            key={idx}
            name={name}
            to={to}
            role={role}
            activeOnlyWhenExact={exact}
        />
    })
}

export const showPublicRouter = () => {
    return listPublicRouter.map(({ path, main, exact }, idx) => {
        return <Route
            key={idx}
            path={path}
            render={main}
            exact={exact}
        />
    })
}

export const showPrivateRouter = () => {
    return listPrivateRouter.map(({ path, main, exact }, idx) => {
        return <Route
            key={idx}
            path={path}
            render={main}
            exact={exact}
        />
    })
}