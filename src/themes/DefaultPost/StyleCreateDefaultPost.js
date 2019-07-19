import { makeStyles } from '@material-ui/styles';
import mainVariable from '../StyleVariable';

const styleCreateDefaultPost = makeStyles({
    appBar: {
        position: 'relative !important',
        height: '60px !important',
        backgroundColor: mainVariable.mainBackgroundColor,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 0px -1px !important',
        '& h6': {
            fontFamily: 'Open Sans !important'
        }
    },
    saveBtn: {
        color: mainVariable.headerIconColor
    },
    closeBtn: {
        color: mainVariable.mainColor
    },
    title: {
        flex: 1,
        color: mainVariable.headerIconColor,
        margin: '0px 10px !important',
        fontWeight: 'bold !important'
    },
    divContent:{
        flex:1,
        backgroundColor: mainVariable.mainBackgroundColor,
        padding:'20px 50px'
    },
    divLeftContent:{
        padding: '0px 10px',
        //backgroundColor:'white'
    },
    inputContent:{
        width:'90%',
        '& >div:hover fieldset':{
            borderColor: mainVariable.headerIconColor
        }
    }
})
export default styleCreateDefaultPost;