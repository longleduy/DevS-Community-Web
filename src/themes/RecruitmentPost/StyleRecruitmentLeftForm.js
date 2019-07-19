import { makeStyles } from '@material-ui/styles';
import mainVariable from '../StyleVariable';

const styleRecruitmentLeftForm = makeStyles({
    divRecruitmentLeft: {
        flex: 1,
        ...mainVariable.flexColumn,
        borderRadius: '2px',
        padding: '10px 15px 10px 15px'
    },
    divTitle: {
        paddingBottom: '15px',
        '& label': {
            fontWeight: 'bold',
            color: mainVariable.headerIconColor
        }
    },
    divRecruitmentLeftItem: {
        ...mainVariable.flexColumn,
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        backgroundColor: '#fff',
        padding: '10px 15px',
        borderRadius: '3px',
        marginBottom: '10px'
    },
    divCompanyInfo: {
        ...mainVariable.flexRow,

    },
    divCompany: {
        flex: 1,
        ...mainVariable.flexRow,
        alignItems: 'center',
        '& svg': {
            width: '22px',
            '& path': {
                fill: mainVariable.mainColor
            },
            marginRight: 5
        },
        '& label': {
            color: mainVariable.mainColor,
            fontWeight: 'bold'
        },
        marginBottom: 20
    },
    divUser: {
        flex: 1,
        ...mainVariable.flexRow,
        justifyContent: 'flex-end'
    },
    divUserName: {
        ...mainVariable.flexColumn
    },
    userAvatarLabel: {
        width: '25px !important',
        height: '25px !important',
        marginRight: 5
    },
    userAvatar: {
        width: '25px !important',
        height: '25px !important',
        marginRight: 5
    },
    lblUserName: {
        fontSize: '.8em',
        color: '#666',
        fontWeight: 600
    },
    lblCreateTime: {
        fontSize: '.6em',
        color: '#666',
    },
    divSalaryInfo: {
        ...mainVariable.flexRow,
        marginBottom: 15
    },
    divNumber: {
        flex: 1,
        '& label': {
            fontSize: '.9em',
            color: '#444'
        }
    },
    divSalary: {
        flex: 1,
        '& label': {
            fontWeight: 'bold',
            fontSize: '.9em',
            color: mainVariable.mainColor
        }
    },
    numberTitle: {
        fontWeight: 600
    },
    divRoleInfo: {
        ...mainVariable.flexRow,
        marginBottom: 15
    },
    lblRoleTitle: {
        fontSize: '.9em',
        color: '#444',
        fontWeight: 600,
        marginRight: 5
    },
    divRole: {
        flexGrow: 1,
        '& label': {
            fontSize: '.8em',
            color: '#444',
            //padding: '2px 5px 2px 5px',
            margin: '0px 3px',
            //backgroundColor:'#eee',
            //borderRadius:'16px'
        }
    },
    divSkill: {
        flexGrow: 1,
        '& label': {
            fontSize: '.7em',
            color: '#444',
            padding: '1px 5px 1px 5px',
            margin: '0px 3px',
            backgroundColor: '#eee',
            borderRadius: '16px'
        }
    },
    divContent: {
        marginBottom: 15,
        '& label': {
            fontSize: '.9em',
            color: '#444'
        }
    },
    divContact: {
        ...mainVariable.flexRow
    },
    divPhoneNumber: {
        flex: 1,
        ...mainVariable.flexRow,
        '& svg': {

            marginRight: 5,
            width: '20px',
            '& path': {
                fill: mainVariable.headerIconColor
            },
        },
        '& label': {
            fontSize: '.9em',
            color: '#444'
        }
    },
    divEmail: {
        flex: 1,
        ...mainVariable.flexRow,
        marginBottom: '20px',
        '& svg': {
            marginRight: 5,
            width: '20px',
            '& path': {
                fill: mainVariable.headerIconColor
            }
        },
        '& label': {
            fontSize: '.9em',
            color: '#444'
        }
    },
    divAction: {
        ...mainVariable.flexRow,
        borderTop: 'solid 1px #eee',
        padding: '5px 0px',
        '& svg': {

            marginRight: 5,
            width: '20px',
            '& path': {
                fill: mainVariable.headerIconColor
            }
        },
        '& button': {
            textTransform: 'unset !important',
            borderRadius: '2px',
            padding: '5px !important',
            width: '90%',
            '& span': {
                color: mainVariable.headerIconColor,
                fontWeight: 600
            }
        }
    },
    divComment: {
        flex: 1
    },
    divJDDownload: {
        flex: 1
    },
    divCreateCV: {
        flex: 1,
        '& button': {
            '& svg': {
                '& path': {
                    fill: mainVariable.mainColor
                }
            },
            '& span': {
                color: mainVariable.mainColor,
            }
        }
    },
    userAvatarLabel: {
        backgroundColor: mainVariable.headerIconColor,
        width: '25px !important',
        height: '25px !important',
        '& label': {
            fontSize: '.8em'
        },
        
        marginRight:'10px',
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
})
export default styleRecruitmentLeftForm;

