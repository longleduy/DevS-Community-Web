import { makeStyles } from '@material-ui/styles';
import mainVariable from '../StyleVariable'
const txfSign = {
    '& label': {
        fontSize: '.9em !important',
        color: '#bbb !important'
    },
    '& label.MuiFormLabel-filled,label.Mui-focused': {
        fontSize: '1em !important',
        color: '#bbb !important'
    },
    '& input': {
        color: 'white !important'
    },
    '& :before': {
        borderColor: '#bbb !important'
    },
    '& :after': {
        borderColor: 'white !important'
    }
};
const divSocialLogin = {
    ...mainVariable.flexRowCenter,
    margin: '45px 0px 0px 0px',
    width: '95%',
};
const styleSignInForm = makeStyles({
    divSignIn: {
        padding: '20px 20px 10px 20px',
        boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.3), 0px 2px 2px 0px rgba(0, 0, 0, 0.24), 0px 3px 1px -2px rgba(0, 0, 0, 0.22)",
        backgroundColor: 'rgba(25, 25, 25, 0.8)',
        margin: '30px 0px',
        borderRadius: '3px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    flatButton: {
        color: 'white !important',
        textTransform: 'unset !important'
    },
    divLogo: {
        ...mainVariable.flexColumnCenter
    },
    iconLogo: {
        color: 'white !important',
        fontSize: '7em !important'
    },
    lblSignIn: {
        color: 'white',
        margin: '10px 0px 10px 0px',
        fontSize: '1.1em',
        fontWeight: 'bold'
    },
    divFormField: {
        ...mainVariable.flexColumn,
        width: '95%',
    },
    divFormField2: {
        ...mainVariable.flexRow,
        width: '95%',
    },
    txfSign: {
        ...txfSign,
    },
    txfSignError: {
        '& div:before': {
            borderColor: 'red !important',
            borderWidth:'2px !important'
        },
        '& div:after': {
            borderColor: 'red !important'
        }
    },
    txfSignLeft: {
        ...txfSign,
        flex: 1,
        marginRight: '10px !important'
    },
    txfSignRight: {
        ...txfSign,
        flex: 1,
        marginLeft: '10px !important'
    },
    lblForgotPass: {
        color: 'white',
        fontSize: '.7em',
        width: '95%',
        textAlign: 'right',
        display: 'block',
    },
    divSocialLogin: {
        ...divSocialLogin
    },
    svgSocialLogin: {
        width: '36px',
        '& path': {
            fill: 'white'
        }
    },
    divAction: {
        ...mainVariable.flexRow,
        bottom: 15
    },
    lblSignUp: {
        color: 'white',
        fontSize: '.9em'
    },
    divButtonSignIn: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-end'
    }, btnLogin: {
        flex: .7,
        borderRadius: '2px !important',
        backgroundColor: '#ff3b00 !important',
        color: 'white !important'
    },
    icnButtonNext: {
        width: '40px !important',
        height: '40px !important',
        backgroundColor: '#ff3b00 !important'
    },
    divSignUpAction: {
        ...divSocialLogin,
        justifyContent: 'flex-end'
    },
    divWarning: {
        ...mainVariable.flexRow,
        flexGrow: 1,
        alignItems: 'center',
        '& svg': {
            marginRight: 5,
            width: '15px',
            height: '15px',
            '& path': {
                fill: mainVariable.warningColor,
            }
        },
        '& label': {
            color: mainVariable.warningColor,
            fontSize: '.75em'
        }
    },
    divGender: {
        ...mainVariable.flexRow,
        justifyContent:'space-between',
        margin:'15px 0px 15px 0px'
    },
    rbGender:{
        color:'white !important',
        '& span': {
            color:'white !important',
        }
    },
    divSignInStatus:{
        ...mainVariable.flexRowCenter,
        flexGrow:1,
        '& svg': {
            marginRight: 5,
            width: '18px',
            height: '18px',
            '& path': {
                fill: mainVariable.warningColor,
            }
        },
        '& label': {
            color: mainVariable.warningColor,
            fontSize:'.9em'
        }
    },
    divSignInBlock: {
        position:'absolute',
        top:0,
        right:0,
        width:'100%',
        height:'100%',
        zIndex:9999
    }
})
export default styleSignInForm