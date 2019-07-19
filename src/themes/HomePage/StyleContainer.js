import { makeStyles } from '@material-ui/styles';
const flatButton = {
    borderRadius: '2px !important',
    margin: '0px 10px 0px 10px !important',
    fontSize: '.9em !important',
    minWidth: '100px !important',
    '& span': {
        fontFamily: '"canilari" !important',
    }

}
const styleContainer = makeStyles({
    divMain: { flexGrow: 1, flexDirection: 'column', display: 'flex', justifyContent: 'center', paddingBottom: 100 },
    divLogo: { justifyContent: 'center', display: 'flex', flexBasis: 'unset' },
    divContent: {
        display: 'flex',
        justifyContent: 'center',
        flexBasis: 'unset',
        alignItems: 'center',
        '& label': {
            color: 'white',
            fontSize: '.9em',
            fontFamily: "canilari !important"
        }
    },
    flatButtonSignIn: {
        ...flatButton,
        color: 'white !important',
        border: 'solid 1px #ccc !important'
    },
    flatButtonSignUp: {
        ...flatButton,
        color: 'white !important',
        border: 'solid 1px #ff3b00 !important',
        backgroundColor: '#ff3b00 !important',

    },
    spanContent: {
        color: 'white !important',
        fontSize: '1.5em !important',
        width: '60%',
        textAlign: 'center',
        margin: '25px 0px 25px 0px !important',
        '& label': {
            fontFamily: "canilari !important"
        }
    },
    labelAppName:{
        marginRight: '5px',
        color: '#ff3b00'
    },
    divMobileApp: {
        position:'absolute',
        bottom:'15px',
        flexBasis:'unset',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:30,
        '& label': {
            fontFamily: "canilari !important",
            color:'white',
            marginRight:10,
            fontSize:'.8em'
        }
    }
})
export default styleContainer;