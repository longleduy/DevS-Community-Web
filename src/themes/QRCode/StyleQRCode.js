import { makeStyles } from '@material-ui/styles';
import mainVariable from '../StyleVariable';

const styleQRCode = makeStyles({
    divQrCode: {
        ...mainVariable.flexRow,
        flex:1,
        padding: '0px 50px 0px 50px'
    },
    divQrCodeLeft:{
        flex:1,
        flexDirection:'column',
        paddingTop:30
    },
    divQrCodeRight:{
        flex:1,
        paddingTop:30,
        display:'flex',
        justifyContent:'center',
        marginTop:50
    },
    title:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        fontWeight:'bold',
        color: mainVariable.headerIconColor
    },
    divMaSX:{
        display:'flex',
        justifyContent:'center'
    },
    inputMaSX:{
        width:'70%'
    },
    divMaTP:{
        ...mainVariable.flexRow,
        width:'70%',
    },
    divMaTPL:{
        ...mainVariable.flexColumn,
        flex:1
    },
    divMaTPR:{
        ...mainVariable.flexColumn,
        flex:1
    },
    btnSave:{
        width:'70%',
        backgroundColor:mainVariable.headerIconColor
    },
    divStatus:{
        ...mainVariable.flexRow,
        '& svg':{
            width:'100px',
            height:'100px',
            '& path':{
                fill:'green'
            }
        },
        '& label':{
            fontWeight:'bold',
            color:'green'
        }
    },
    divMainFilter:{
        ...mainVariable.flexColumn,
        flex:1,
        alignItems:'center',
        paddingTop:30
    },
    divFilter:{
        width:'50%',
        //backgroundColor:'white',
        ...mainVariable.flexColumn,
        flex:1
    },
    lblInQR:{
        color:mainVariable.headerIconColor,
        fontWeight:'bold'
    },
    divSearch:{
        margin: '15px 0px 15px 0px',
        '& input':{
            width:'100%',
            borderRadius:4,
            border:'solid .5px #eee',
            padding: '10px 10px 10px 10px',
            boxSizing: 'border-box',
            boxShadow:'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 0px -1px',
        },
        '& ::placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: mainVariable.headerIconColor,
            opacity: '.8',
            fontWeight: 'bold'
        }
    },
    divResultItem:{
        ...mainVariable.flexRow,
        alignItems:'center',
        padding: '10px 5px',
        margin: '10px 0px',
        //backgroundColor:'white',
        borderBottom:'solid 1px #ddd',
        //borderRadius:3,
        //boxShadow:'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 0px -1px',
        '& label':{
            fontSize:'.9em',
            color: mainVariable.headerIconColor,
            fontWeight:600
        }
    },
    lblStt:{
        display:'flex',
        flex:.2
    },
    lblMaSx:{
        display:'flex',
        flex:1
    },
    lblCreateTime:{
        display:'flex',
        flex:1
    },
    divQrCode:{
        display:'flex',
        flex:1,
        justifyContent:'center'
    },
    divMainInfo:{
        ...mainVariable.flexColumnCenter,
        flex:1
    },
    divInfo:{
        ...mainVariable.flexColumnCenter,
        '& label':{
            marginTop:10,
            color:mainVariable.headerIconColor,
            fontWeight:600
        }
    },
    divAction:{
        ...mainVariable.flexRow,
        width:200,
        margin:'10px 0px',
        '& input':{
            display:'flex',
            flex:1,
            width:'50%',
            borderRadius:4,
            border:'solid .5px #eee',
            padding: '5px 5px',
        },
        '& input:first-child':{
            marginRight:3
        },
        '& input:last-child':{
            marginLeft:3
        },
        '& ::placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: mainVariable.headerIconColor,
            opacity: '.6',
            fontWeight: 'bold'
        }
    },
    btnIn:{
        width:'45px !important',
        height:'45px !important',
        backgroundColor: mainVariable.headerIconColor,
        color:'white !important',
        position:'fixed !important',
        bottom:30,
        right:50
    },
    btnCancel:{
        width:'45px !important',
        height:'45px !important',
        backgroundColor: mainVariable.headerIconColor,
        color:'white !important',
        position:'fixed !important',
        bottom:30,
        left:50
    }
})
export default styleQRCode;