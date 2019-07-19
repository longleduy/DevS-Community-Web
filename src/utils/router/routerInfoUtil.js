import React from 'react';

import ProtectedRoutePropRender from '../../components/Utils/HOC_RDP/ProtectedRoutePropRender';
import PublicRoutePropRender from '../../components/Utils/HOC_RDP/PublicRoutePropRender';
//Todo: Public routes
import HomePageContainer from '../../containers/HomePage/HomePageContainer';
import SignPageContainer from '../../containers/SignPage/SignPageContainer';
//Todo: Private routes
import DefaultPostContainer from '../../containers/DefaultPost/DefaultPostContainer';
import RecruitmentPostContainer from '../../containers/RecruitmentPost/RecruitmentPostContainer';
import QRCodeContainer from '../../containers/QRCode/QRCodeContainer';
import QRCodeFilterContainer from '../../containers/QRCode/QRCodeFilterContainer';
import QRCodeInfoContainer from '../../containers/QRCode/QRCodeInfoContainer';

export const listPublicRouter = [
    {
        path: '/',
        exact: true,
        main: () => <PublicRoutePropRender renderChild={() =>  <SignPageContainer />}/>
    },
    {
        path: '/sign',
        exact: false,
        main: () => <PublicRoutePropRender renderChild={() =>  <SignPageContainer />}/>
    },
];
export const listPrivateRouter = [
    {
        path: '/default-post',
        exact: true,
        main: () => <ProtectedRoutePropRender renderChild={() => <DefaultPostContainer />}/>
    },
    {
        path: '/recruitment-post',
        exact: true,
        main: () => <ProtectedRoutePropRender renderChild={() => <RecruitmentPostContainer />}/>
    },
    {
        path: '/qrcode',
        exact: true,
        main: () => <ProtectedRoutePropRender renderChild={() => <QRCodeContainer />}/>
    },
    {
        path: '/qrcode-filter',
        exact: true,
        main: () => <ProtectedRoutePropRender renderChild={() => <QRCodeFilterContainer />}/>
    }
    ,
    {
        path: '/qrcode/:id',
        exact: false,
        main: () => <ProtectedRoutePropRender renderChild={() => <QRCodeInfoContainer />}/>
    }
];

export const listMenuRouter = [
    {
        name: 'Thảo luận',
        role: 'DEFAULT_POST',
        to: '/default-post',
        exact: true
    },
    {
        name: 'Tuyển dụng',
        role: 'REQUIREMENT_POST',
        to: '/recruitment-post',
        exact: true
    },
    {
        name: 'QRCode',
        role: 'QRCODE',
        to: '/qrcode',
        exact: true
    },
    {
        name: 'QRCode Filter',
        role: 'QRCODE_FILTER',
        to: '/qrcode-filter',
        exact: true
    },
];
