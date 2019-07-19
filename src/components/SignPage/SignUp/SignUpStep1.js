import React, { memo, Fragment,useContext } from 'react';
import TextField from '@material-ui/core/TextField';
//Todo: Styles
import StyleMain from '../../../themes/StyleMain';
//Todo: Component

//Todo: Context
import {SignUpContext} from '../SignUpForm';

const SignUpStep1 = memo(props => {
    const {handleFunc:{_onChangeText},signUpData:{firstName,lastName,userName,errorField}} = useContext(SignUpContext);
    const StyleSignInForm = StyleMain.styleSignInForm();
    return (
        <Fragment>
            <div className={StyleSignInForm.divFormField2}>
                <TextField
                    id="firstName"
                    name="firstName"
                    label="Họ"
                    className={`${StyleSignInForm.txfSignLeft} ${errorField === 'firstName'?StyleSignInForm.txfSignError:''} `}
                    value={firstName}
                    onChange={e => _onChangeText(e)}
                    margin="normal"
                />
                <TextField
                    id="lastName"
                    name="lastName"
                    label="Tên"
                    className={`${StyleSignInForm.txfSignRight} ${errorField === 'lastName'?StyleSignInForm.txfSignError:''} `}
                    value={lastName}
                    onChange={e => _onChangeText(e)}
                    margin="normal"
                />
            </div>
            <div className={StyleSignInForm.divFormField}>
                <TextField
                    id="userName"
                    name="userName"
                    label="Địa chỉ email"
                    className={`${StyleSignInForm.txfSign} ${errorField === 'userName'?StyleSignInForm.txfSignError:''} `}
                    value={userName}
                    onChange={e => _onChangeText(e)}
                    margin="normal"
                />
            </div>
        </Fragment>
    )
})
export default SignUpStep1;