import { makeStyles } from '@material-ui/styles';
import mainVariable from '../StyleVariable';

const styleRightForm = makeStyles({
    divNews:{
        flex:1,
        overflow:'hidden',
        padding:'5px',
        backgroundColor: '#fff',
        position:'relative'
    },
    divRightForm:{
        '&>div:not(:last-child)':{
            marginBottom:'10px',
        },
        flex:3,
        ...mainVariable.flexColumn,
        //padding: 10,
        //backgroundColor: '#fff',
        marginLeft: '15px',
        height: 'calc(100vh - 80px)',
        borderRadius: '3px',
    },
    imgNews:{
        width:'100%',
        height:'auto'
    },
    contentNews:{
        position: 'absolute',
        bottom: '0px',
        padding: '5px',
        margin: '0px 5px',
        left: '0px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        '& label':{
            color:'white',
            fontSize:'.9em'
        }
    }
});
export default styleRightForm;