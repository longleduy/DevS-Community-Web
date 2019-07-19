import { makeStyles } from '@material-ui/styles';
import mainVariable from './StyleVariable';

const styleApp = makeStyles({
    divApp: {
        minHeight: '100vh',
        flexDirection: 'column',
        backgroundColor: mainVariable.mainBackgroundColor,
    },
    defaultContainer:{
        display:'flex',
        flexGrow:1,
        padding: '70px 50px 20px 50px'
    },
    flatWhiteButton: {
        color: "white !important",
        margin: '0px 5px 0px 5px !important',
        textDecoration:'none',
        '& span':{
            fontFamily:'"canilari" !important',
        }
        
    },
    linkButton: {
        textDecoration:'unset !important'
    }
})
export default styleApp;