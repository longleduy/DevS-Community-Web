import { makeStyles } from '@material-ui/styles';
import mainVariable from '../StyleVariable'

const styleRigtForm = makeStyles({
    divRightForm: {
        ...mainVariable.flexColumn,
        flex:.5,
        justifyContent:'flex-end'
    },
    labelAppName:{
        color:'white',
        fontWeight:'bold',
        fontSize:'1.4em',
        marginBottom:'15px'
    },
    divContent:{
        display:'flex',
        flexDirection:'row',
        margin:'10px 0px 10px 0px',
        '& svg':{
            width:'20px',
            marginRight:5
        },
        '& label':{
            color:'#ccc',
            fontSize:'1em',
            fontWeight:'bold'
        }
    }
})
export default styleRigtForm;