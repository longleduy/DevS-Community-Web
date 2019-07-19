import { makeStyles } from '@material-ui/styles';
import mainVariable from './StyleVariable';

const styleHeader = makeStyles({
    headerDivMain: {
        display: 'flex !important',
        ...mainVariable.flexRow,
        minHeight: '60px',
        maxHeight: 61,
        padding: '0px 50px 0px 50px',
        position: 'fixed',
        top: 0,
        backgroundColor: mainVariable.mainBackgroundColor,
        zIndex: 9999,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 0px -1px'
    },
    headerRightDiv: {
        ...mainVariable.flexRow,
        flexGrow: 1
    },
    headerDivLogo: {
        ...mainVariable.flexColumnCenter,
    },
    headerLogo: {
        color: mainVariable.mainColor
    },
    headerSignOutLogo: {
        color: mainVariable.headerIconColor,
    },
    headerDivNotiLogo: {
        ...mainVariable.flexRow,
        flex: 1,
        alignItems: 'center'
    },
    headerNotifiLogo: {
        color: mainVariable.headerIconColor,
        margin: '0px 10px 0px 10px',
        fontSize: '1.6em !important'
    },
    headerDivSearch: {
        ...mainVariable.flexRowCenter,
        flex: 3,
        '& input': {
            flex: .9,
            border: 'solid .5px #eee',
            padding: '5px 10px 5px 10px',
            borderRadius: 4,
        },
        '& ::placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: mainVariable.headerIconColor,
            opacity: '.6',
            fontWeight: 'bold'
        }
    },
    headerDivMenu: {
        flex: 2.5,
        ...mainVariable.flexRow,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // '& button:hover':{
        //     backgroundColor:'unset !important'
        // }
    },
    btnMenu: {
        color: mainVariable.headerIconColor,
        borderRadius: '0px !important',
        '& span': {
            fontWeight: 'bold !important'
        },
    },

    btnMenuActive: {
        borderBottom: 'solid 1px hsla(220, 46%, 41%, 0.7) !important',
        borderColor: mainVariable.headerIconColor,
    },
    iconBtnMenu: {
        padding: '8px !important',
        '& svg': {
            width: '1.2em',
            '& path': {
                fill: mainVariable.headerIconColor
            }
        }
    },
    iconBtnMenuActv: {
        '& svg': {
            '& path': {
                fill: mainVariable.mainColor
            }
        }
    },
    avatarHeader: {
        '& img': {
            width: '80% !important',
            height: '80% !important',
            borderRadius: '100%',
            border: 'solid 2px white !important'
        }
    },
    menuMore: {
        borderRadius: '2px !important',
        ...mainVariable.flexColumn,
        position: 'absolute',
        top: 65,
        right: 5,
        backgroundColor: 'white'
    },
    menuMoreBtn: {
        textTransform: 'unset !important',
        padding: '5px 50px 5px 10px !important',
        '& svg': {
            width: '1.3em',
            marginRight: 5,
            '& path': {
                fill: mainVariable.headerIconColor
            }
        },
        '& label': {
            color: mainVariable.headerIconColor,
            fontSize: '.9em',
            fontWeight: 600
        },
        '& span': {
            justifyContent: 'flex-start !important'
        }
    },
    menuMoreBtnExit: {

        textTransform: 'unset !important',
        padding: '5px 50px 5px 10px !important',
        '& svg': {
            width: '1.3em',
            marginRight: 5,
            '& path': {
                fill: 'red !important'
            }
        },
        '& label': {
            color: 'red !important',
            fontSize: '.9em',
            fontWeight: 600
        },
        '& span': {
            justifyContent: 'flex-start !important'
        }
    },
    headerDivNotiCount:{
        display:'flex !important',
        position:'relative',
        '& label':{
            position: 'absolute',
            fontSize: '.75em',
            width: '20px',
            height: '20px',
            lineHeight: '20px',
            color: 'white',
            fontWeight: 600,
            top: '-5px',
            right: '5px',
            textAlign: 'center',
            backgroundColor: '#e42865',
            borderRadius: '100%',
        }
    }
})
export default styleHeader;