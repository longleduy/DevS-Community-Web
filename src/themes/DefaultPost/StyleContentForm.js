import { makeStyles } from '@material-ui/styles';
import mainVariable from '../StyleVariable';

const styleContentForm = makeStyles({
    card: {
        //marginBottom: 10,
        //boxShadow: 'unset !important',
        borderBottom:'solid 1px #ccc !important',
        borderRadius: '2px !important'
    },
    cardHeader: {
        '& div:nth-child(2)': {
            '& span:first-child': {
                fontWeight: 'bold !important',
                color: mainVariable.headerIconColor,
                fontSize:'1em !important'
            },
            '& span:last-child': {
                fontSize: '.7em !important',
                fontWeight:600,
                color:'#777 !important'
            }
        }
    },
    cardContent: {
        padding: '5px 16px 5px 16px !important',
        '& p':{
            color:'#444 !important',
            fontSize:'.9em'
        }
    },
    cardActions: {
        padding: '4px 8px 4px 8px !important'
    },
    avatarLabel: {
        backgroundColor: mainVariable.headerIconColor
    },
    cardMedia: {
        height: 0,
        paddingTop: `${screen.height * 100 / screen.width}%`,
    },
    likeCountDiv: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-end',
        '& button': {
            textTransform: 'unset !important',
            color: mainVariable.headerIconColor,
            fontSize: '.8em'
        },
        '& button:hover': {
            backgroundColor: 'unset !important'
        }
    }, buttonActions: {
        padding: '5px 15px 5px 15px !important',
        borderRadius: '3px !important',
        alignItems: 'flex-start !important'
    },
    commentAction: {
        width: '.9em !important',
        height: '.9em !important',
        '& path': {
            fill: 'rgba(0, 0, 0, 0.54) !important'
        }
    },
    likedIcon: {
        '& path': {
            fill: mainVariable.mainColor
        }
    },
    commentActionDiv: {
        marginLeft: '15px',
        ...mainVariable.flexRowCenter
    },
    commentCountLbl: {
        marginRight: 5,
        fontSize: '.6em',
        fontWeight: 'bold'
    },
    divTag: {
        padding: '0px 16px 0px 16px',
        marginBottom: '10px !important',
        '& label': {
            padding: '2px 5px 2px 5px',
            color: '#444 !important',
            fontSize: '.7em',
            margin: '0px 3px 0px 3px',
            backgroundColor: '#eee',
            borderRadius: '16px'
        }
    },
    createPostButton: {
        width: '45px !important',
        height: '45px !important',
        '& svg': {
            width: '50% !important',
            height: '50% !important',
            '& path': {
                fill: 'white !important'
            },
        },
        backgroundColor: mainVariable.mainColor
    },
    divCreatePostButton: {
        position: 'sticky',
        bottom: '15px',
        textAlign: 'right',
        paddingRight: '15px',
    },
    buttonActionsActv:{
        '&:hover':{
            backgroundColor:'rgba(228, 40, 101, 0.16) !important'
        }
    },
    divLoading:{
        backgroundColor:'white',
        flex:7,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '& svg':{
        fill: mainVariable.mainColor
        }
    }
})
export default styleContentForm;