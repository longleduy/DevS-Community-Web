import React, { memo, Fragment, useState, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import BubbleChart from '@material-ui/icons/BubbleChart';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Done from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Utils
import {validEmail,passWordRegx} from '../../utils/validator';
//Todo: Component
import SignUpStep1 from './SignUp/SignUpStep1';
import SignUpStep2 from './SignUp/SignUpStep2';
import SignUpStep3 from './SignUp/SignUpStep3';

export const SignUpContext = createContext();
const SignUpProvider = memo(props => {
    const [signUpData, setSignUpData] = useState({
        firstName: 'Duy',
        lastName: 'Long',
        userName: 'longldseatechit@gmail.com',
        passWord: '',
        rePassWord: '',
        dateOfBirth: '1994-08-21',
        gender: 'M',
        errorField: '',
        signUpStatus: null,
        signUpStatusMessage: ''
    });
    const handleFunc = {
        _onChangeText: e => {
            let field = e.target.name;
            let value = e.target.value;
            setSignUpData({
                ...signUpData,
                [field]: value,
                errorField: signUpData.errorField === field ? '' : signUpData.errorField
            })
        },
        _onSetErrorField: errorField => {
            setSignUpData({
                ...signUpData,
                errorField
            })
        }
    }
    return (
        <SignUpContext.Provider value={{ signUpData, handleFunc }}>
            <SignUpForm />
        </SignUpContext.Provider>
    )
})
const SignUpForm = memo(props => {
    const { signUpData, handleFunc: { _onSetErrorField } } = useContext(SignUpContext);
    const StyleSignInForm = StyleMain.styleSignInForm();
    const StyleApp = StyleMain.styleApp();
    const [stepData, handleStepData] = useState({
        currentStep: 'STEP1',
        warningMessage: 'Mã xác thực sẽ được gửi đến email đăng ký'
    });
    const _onNextStep = () => {
        let currentStep;
        let warningMessage;
        if (!validateSignUpForm()) return false;
        if (stepData.currentStep === 'STEP3') {
            return console.log(signUpData);
        }
        switch (stepData.currentStep) {
            case 'STEP1':
                currentStep = 'STEP2';
                warningMessage = 'Mật khẩu chứa ít nhất 6 ký tự, gồm chữ hoa, thường và số';
                break;
            case 'STEP2':
                currentStep = 'STEP3';
                warningMessage = 'Kiểm tra lại thông tin cá nhận trước khi xác nhận đăng ký';
                break;
            default:
                return;
        };
        handleStepData({
            currentStep,
            warningMessage
        })
    }
    const validateSignUpForm = () => {
        let { currentStep } = stepData;
        let errorField;
        if (currentStep === 'STEP1') {
            switch ('') {
                case signUpData.firstName:
                    errorField = 'firstName';
                    break;
                case signUpData.lastName:
                    errorField = 'lastName';
                    break;
                case signUpData.userName:
                    errorField = 'userName';
                    break;
                default:
                    if(!validEmail(signUpData.userName)){
                        errorField = 'userName';
                    }

            }
        }
        if (currentStep === 'STEP2') {
            switch ('') {
                case signUpData.passWord:
                    errorField = 'passWord';
                    break;
                case signUpData.rePassWord:
                    errorField = 'rePassWord';
                    break;
                default:
                        if(!passWordRegx(signUpData.passWord)){
                            errorField = 'passWord';
                            break;
                        }
                    if (signUpData.passWord !== signUpData.rePassWord) {
                        errorField = 'rePassWord';
                        break;
                    }
            }
        }
        if (errorField) {
            _onSetErrorField(errorField);
            return false;
        }
        return true;
    }
    const _onBackStep = () => {
        let currentStep;
        let warningMessage;
        switch (stepData.currentStep) {
            case 'STEP2':
                currentStep = 'STEP1';
                warningMessage = 'Mã xác thực sẽ được gửi đến email đăng ký';
                break;
            case 'STEP3':
                currentStep = 'STEP2';
                warningMessage = 'Mật khẩu chứa ít nhất 6 ký tự, gồm chữ hoa, thường và số';
                break;
            default:
                return;
        };
        handleStepData({
            currentStep,
            warningMessage
        })
    }
    const _onShowButton = () => {
        if (stepData.currentStep !== 'STEP1') {
            return <Button
                className={StyleSignInForm.flatButton}
                onClick={_onBackStep}
            >Quay lại</Button>
        }
        return <Link to="/sign/sign-in" className={StyleApp.linkButton}>
            <Button
                className={StyleSignInForm.flatButton}
                onClick={_onBackStep}
            >Đăng nhập</Button>
        </Link>
    }
    return (
        <Fragment>
            <Grid item md={6} style={{ display: 'flex' }}>
                <div className={StyleSignInForm.divSignIn}>
                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <div className={StyleSignInForm.divLogo}>
                            <BubbleChart className={StyleSignInForm.iconLogo} />
                        </div>
                        <label className={StyleSignInForm.lblSignIn}>Tạo tài khoản</label>
                        {/* //Todo: Step */}
                        {stepData.currentStep === 'STEP1' && <SignUpStep1 />}
                        {stepData.currentStep === 'STEP2' && <SignUpStep2 />}
                        {stepData.currentStep === 'STEP3' && <SignUpStep3 />}
                        <div className={StyleSignInForm.divSignUpAction}>
                            <div className={StyleSignInForm.divWarning}>
                                <svg viewBox="0 0 24 24">
                                    <path fill="#000000" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
                                </svg>
                                <label>{stepData.warningMessage}</label>
                            </div>
                            <Fab
                                color="primary"
                                aria-label="Add"
                                className={StyleSignInForm.icnButtonNext}
                                onClick={_onNextStep}
                            >
                                {stepData.currentStep === 'STEP3' ? <Done /> : <ArrowForward />}
                            </Fab>
                        </div>
                    </div>
                    <div className={StyleSignInForm.divAction}>
                        {_onShowButton()}
                    </div>
                </div>
            </Grid>
        </Fragment>
    )
})
export default SignUpProvider;