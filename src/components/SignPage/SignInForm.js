import React, { memo, Fragment, useState } from 'react';
import { Mutation, withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Grid from '@material-ui/core/Grid';
import BubbleChart from '@material-ui/icons/BubbleChart';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Done from '@material-ui/icons/Done';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component
//Todo: Graphqls
import { SIGN_IN_MUTATION } from '../../graphqls/mutations/userMutation';
//Todo: LocalState graphql
import { USER_INFO_MUTATION_STATE } from '../../graphqls/localStates/mutation';
//Todo: Containts
import { SIGN_IN_FAILDED, SIGN_IN_FORM_INVALID } from '../../utils/contains/formValidateContain';

const SignInForm = memo(props => {
    const StyleSignInForm = StyleMain.styleSignInForm();
    const StyleApp = StyleMain.styleApp();
    const { history } = props;
    const [signInData, setSignInData] = useState({
        userName: 'longldseatechit@gmail.com',
        passWord: 'longkhanh94',
        errorField: '',
        signInMessageStatus: ''
    })
    const _onSignIn = (action) => {
        let errorField;
        if (signInData.userName === '') {
            errorField = 'userName'
        }
        else if (signInData.passWord === '') {
            errorField = 'passWord'
        }
        if (errorField) {
            return setSignInData({
                ...signInData,
                errorField
            })
        }
        return _onSignInSubmit(action);
    }
    const _onSignInSubmit = async (action) => {
        let data = {
            email: signInData.userName,
            passWord: signInData.passWord
        }
        let respone = await action({ variables: { signInData: data } });
        if (respone && respone.data.signIn != null && respone.data.signIn != '' && respone.data.signIn.isSuccess) {
            const jsontoken = respone.data.signIn.jwt;
            return _createUserInfo(jsontoken);
        }
        else if (respone && !respone.data.signIn.isSuccess && respone.data.signIn.message) {
            setSignInData({
                ...signInData,
                signInMessageStatus: respone.data.signIn.message
            })
        }
        else {
            setSignInData({
                ...signInData,
                signInMessageStatus: SIGN_IN_FAILDED
            })
        }
    }
    const _createUserInfo = async (jsontoken) => {
        const userInfoAsync = jwtDecode(jsontoken);
        const userInfo = await userInfoAsync;
        userInfo['isAuthen'] = true;
        const res = await props.client.mutate({
            variables: { userInfo },
            mutation: USER_INFO_MUTATION_STATE
        });
        localStorage.setItem('token', JSON.stringify(jsontoken));
        props.history.push('/default-post')
    }
    const _onChangeText = e => {
        let field = e.target.name;
        let value = e.target.value;
        setSignInData({
            ...signInData,
            [field]: value,
            errorField: signInData.errorField === field ? '' : signInData.errorField,
            signInMessageStatus: ''
        })
    };
    const _onSignInErrorHandler = (error) => {
        setSignInData({
            ...signInData,
            signInMessageStatus: SIGN_IN_FAILDED
        })
    }
    const _getSignButton = (loading, action) => {
        if (loading) return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
            <circle transform="translate(8 0)" cx="0" cy="16" r="0">
                <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
                    keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
            </circle>
            <circle transform="translate(16 0)" cx="0" cy="16" r="0">
                <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
                    keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
            </circle>
            <circle transform="translate(24 0)" cx="0" cy="16" r="0">
                <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
                    keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
            </circle>
        </svg>;
        return <Fab
            color="primary"
            aria-label="Add"
            className={StyleSignInForm.icnButtonNext}
            onClick={() => _onSignIn(action)}
        >
            <Done />
        </Fab>

    }
    return (
        <Mutation mutation={SIGN_IN_MUTATION} onError={(error) => _onSignInErrorHandler(error)}>
            {(action, { data, loading, error }) => (
                <Fragment>
                    <Grid item md={6} style={{ display: 'flex' }}>
                        <div className={StyleSignInForm.divSignIn}>
                            {loading  &&<div className={StyleSignInForm.divSignInBlock}></div>}
                            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div className={StyleSignInForm.divLogo}>
                                    <BubbleChart className={StyleSignInForm.iconLogo} />
                                </div>
                                <label className={StyleSignInForm.lblSignIn}>Đăng nhập</label>
                                <div className={StyleSignInForm.divFormField}>
                                    <TextField
                                        id="userName"
                                        name="userName"
                                        label="Địa chỉ email"
                                        value={signInData.userName}
                                        className={`${StyleSignInForm.txfSign} ${signInData.errorField === 'userName' ? StyleSignInForm.txfSignError : ''} `}
                                        onChange={e => _onChangeText(e)}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="passWord"
                                        name="passWord"
                                        label="Mật khẩu"
                                        value={signInData.passWord}
                                        className={`${StyleSignInForm.txfSign} ${signInData.errorField === 'passWord' ? StyleSignInForm.txfSignError : ''} `}
                                        type="password"
                                        onChange={e => _onChangeText(e)}
                                        margin="normal"
                                    />
                                </div>
                                <label className={StyleSignInForm.lblForgotPass}>Quên mật khẩu?</label>
                                <div className={StyleSignInForm.divSocialLogin}>
                                    {/* <Button variant="contained" className={StyleSignInForm.btnLogin}>
                                Đăng nhập
                            </Button> */}
                                    <div style={{ display: 'flex', flex: 1 }}>
                                        <svg viewBox="0 0 24 24" className={StyleSignInForm.svgSocialLogin}>
                                            <path fill="#000000" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
                                        </svg>
                                        <svg viewBox="0 0 24 24" style={{ margin: '0px 5px 0px 5px' }} className={StyleSignInForm.svgSocialLogin}>
                                            <path fill="#000000" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M19.5,12H18V10.5H17V12H15.5V13H17V14.5H18V13H19.5V12M9.65,11.36V12.9H12.22C12.09,13.54 11.45,14.83 9.65,14.83C8.11,14.83 6.89,13.54 6.89,12C6.89,10.46 8.11,9.17 9.65,9.17C10.55,9.17 11.13,9.56 11.45,9.88L12.67,8.72C11.9,7.95 10.87,7.5 9.65,7.5C7.14,7.5 5.15,9.5 5.15,12C5.15,14.5 7.14,16.5 9.65,16.5C12.22,16.5 13.96,14.7 13.96,12.13C13.96,11.81 13.96,11.61 13.89,11.36H9.65Z" />
                                        </svg>
                                        <svg viewBox="0 0 24 24" className={StyleSignInForm.svgSocialLogin}>
                                            <path fill="#000000" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z" />
                                        </svg>
                                    </div>
                                    {_getSignButton(loading, action)}
                                </div>
                                {signInData.signInMessageStatus && <div className={StyleSignInForm.divSignInStatus}>
                                    <svg viewBox="0 0 24 24">
                                        <path fill="#000000" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
                                    </svg>
                                    <label>{signInData.signInMessageStatus}</label>
                                </div>
                                }
                            </div>

                            <div className={StyleSignInForm.divAction}>
                                <Link to="/sign/sign-up" className={StyleApp.linkButton}>
                                    <Button
                                        className={StyleSignInForm.flatButton}
                                    >Tạo tài khoản</Button>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Fragment>
            )}
        </Mutation>
    )
})
export default withApollo(withRouter(SignInForm));