import React, { Fragment,useEffect  } from 'react';
import jwt from 'jsonwebtoken';
import {Redirect,withRouter } from 'react-router-dom';
const ProtectedRoutePropRender = (props) => {
    useEffect(() => {
        return () => {
            let token = JSON.parse(localStorage.getItem('token'));
            let isPublic = (location.hash).indexOf('/sign/sign-up') === -1 && (location.hash).indexOf('/sign/sign-in') === -1 && location.hash !== '#/';
            if(token && !isPublic) props.history.push('/default-post')
        }
      },[]);
    const checkAuthen = () => {
        let payload = null;
        let token = null;
        try {
            token = JSON.parse(localStorage.getItem('token'));
            payload = jwt.decode(token);
        } catch (error) {
            return false;
        }
        if(payload == null || payload ==''){
            return false;
        }
        return true;
    }
    if(checkAuthen() === true){
        return <Fragment>{props.renderChild()}</Fragment>
    }
    return <Redirect to={{pathname: "/"}}/>
}
export default withRouter(ProtectedRoutePropRender);