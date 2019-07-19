import React, { memo, Fragment,useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//Todo: Styles
import StyleMain from '../../../themes/StyleMain';
//Todo: Component

//Todo: Context
import {SignUpContext} from '../SignUpForm';

const SignUpStep3 = memo(props => {
    const {handleFunc:{_onChangeText},signUpData:{dateOfBirth,gender}} = useContext(SignUpContext);
    const StyleSignInForm = StyleMain.styleSignInForm();
    return (
        <Fragment>
            <div className={StyleSignInForm.divFormField}>
                <RadioGroup
                    aria-label="Gender"
                    name="gender"
                    className={StyleSignInForm.divGender}
                    value={gender}
                    onChange={e => _onChangeText(e)}
                >
                    <FormControlLabel value="F" control={<Radio />} label="Nữ" className={StyleSignInForm.rbGender}/>
                    <FormControlLabel value="M" control={<Radio />} label="Nam" className={StyleSignInForm.rbGender}/>
                    <FormControlLabel value="O" control={<Radio />} label="Giới tính khác" className={StyleSignInForm.rbGender}/>
                </RadioGroup>
            </div>
            <div className={StyleSignInForm.divFormField}>
                <TextField
                    style={{width:'50%'}}
                    id="dateOfBirth"
                    name="dateOfBirth"
                    label="Ngày sinh"
                    value={dateOfBirth}
                    type="date"
                    className={StyleSignInForm.txfSign}
                    onChange={e => _onChangeText(e)}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                      }}
                />
            </div>
        </Fragment>
    )
})
export default SignUpStep3;