import React, { Fragment,useEffect  } from 'react';
import jwt from 'jsonwebtoken';
import {Redirect,withRouter } from 'react-router-dom';
const PublicRoutePropRender = (props) => {
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
    if(checkAuthen() !== true){
        return <Fragment>{props.renderChild()}</Fragment>
    }
    return <Redirect to={{pathname: "/default-post"}}/>
}
export default withRouter(PublicRoutePropRender);