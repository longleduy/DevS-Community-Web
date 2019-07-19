import React, { memo, Fragment,useContext } from 'react';
import TextField from '@material-ui/core/TextField';
//Todo: Styles
import StyleMain from '../../../themes/StyleMain';
//Todo: Component

//Todo: Context
import {SignUpContext} from '../SignUpForm';

const SignUpStep2 = memo(props => {
    const {handleFunc:{_onChangeText},signUpData:{passWord,rePassWord,errorField}} = useContext(SignUpContext);
    const StyleSignInForm = StyleMain.styleSignInForm();
    return (
        <Fragment>
            <div className={StyleSignInForm.divFormField2}>
                <TextField
                    id="passWord"
                    name="passWord"
                    label="Mật khẩu"
                    value={passWord}
                    className={`${StyleSignInForm.txfSignLeft} ${errorField === 'passWord'?StyleSignInForm.txfSignError:''} `}
                    type="password"
                    onChange={e => _onChangeText(e)}
                    margin="normal"
                />
                <TextField
                    id="rePassWord"
                    name="rePassWord"
                    label="Nhắc lại mật khẩu"
                    value={rePassWord}
                    className={`${StyleSignInForm.txfSignRight} ${errorField === 'rePassWord'?StyleSignInForm.txfSignError:''} `}
                    type="password"
                    onChange={e => _onChangeText(e)}
                    margin="normal"
                />
            </div>
        </Fragment>
    )
})
export default SignUpStep2;