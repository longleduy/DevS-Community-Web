import { makeStyles } from '@material-ui/styles';
import mainVariable from '../StyleVariable';

const styleLeftForm = makeStyles({
    leftFormDiv: {
        position: 'relative',
        ...mainVariable.flexColumn,
        padding: 10,
        backgroundColor: '#fff',
        marginRight: '15px',
        height: 'calc(100vh - 100px)',
        borderRadius: '3px',
        //backgroundColor: mainVariable.contentBackgroundColor,
        flex: 3,
        '& div.divAvatar': {
            position: 'relative',
            width: '100%',
        },
        '& div.divAvatar:before': {
            content: "''",
            display: 'block',
            paddingTop: '100%'
        }
    },
    userAvatarDiv: {
        ...mainVariable.flexRowCenter,
        flex: 1,
        width: '50px',
        position: 'absolute',
        bottom: '-30px',
        left: '15px',
    },
    avatar: {
        width: '100% !important',
        height: '100% !important',
        position: 'absolute !important',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        border: 'solid 2px white',
    },
    userProfile: {
        ...mainVariable.flexRowCenter,
        marginBottom: '20px'
    },
    userNameDiv: {
        display: 'flex',
        width: '100%',
        flex: 1,
        position: 'absolute',
        flexDirection: 'column',
        bottom: '-25px',
        left: '75px',
        '& label': {
            color: '#444',
            fontSize:'1.1em'
        }
    },
    lblName: {
        fontWeight: 'bold'
    },
    divGender: {
        ...mainVariable.flexRow,
        '& svg': {
            width: '14px',
            '& path': {
                fill: mainVariable.headerIconColor
            },
            marginRight: 5
        },
        '& label': {
            fontSize: '.7em'
        }
    },
    moreInfoDiv: {
        ...mainVariable.flexRow,
        margin: '7px 0px 7px 0px',
        '& svg': {
            width: '20px',
            '& path': {
                fill: mainVariable.headerIconColor
            },
            marginRight: 5
        },
        '& label': {
            color: '#444',
            fontSize: '.8em',
            fontWeight:600
        }
    },
    moreInfoLabelDiv: {
        ...mainVariable.flexRow,
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '7px 0px 7px 0px',
        '& label': {
            color: '#444',
            fontSize: '.8em',
            fontWeight:600
        }
    },
    lblTitle: {
        color: mainVariable.headerIconColor,
        fontSize: '.8em',
        fontWeight: 'bold',
        marginRight: 5
    },
    lblSkill: {
        padding: '0px 5px 0px 5px',
        border: 'solid 1px #ccc',
        margin: '3px 3px 3px 3px',
        borderRadius: '16px',
        fontSize: '.7em !important'
    },
    sourceInfo: {
        '& button': {
            padding: '7px !important',
        },
        '& svg': {
            width: '1.3em',
            height: '1.3em',
            '& path': {
                fill: mainVariable.headerIconColor,
            }
        },
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    iconUserSetting: {
        padding: '5px !important',
        '& svg': {
            width: '.8em',
            '& path': {
                fill: mainVariable.headerIconColor,
            }
        },
    },
    userSettingDiv: {
        ...mainVariable.flexRow,
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bannerDiv: {
        display: 'flex',
        position: 'relative',
        marginBottom: '50px'
    },
    banner: {
        width: '100%'
    }
})
export default styleLeftForm;