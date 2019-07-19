import { makeStyles } from '@material-ui/styles';
import mainVariable from './StyleVariable';

const styleContainer = makeStyles({
    imageContainer: {
        flexGrow: 1,
        backgroundSize: '100%',
        backgroundRepeat: 'round',
        backgroundAttachment: 'fixed',
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://www.upsieutoc.com/images/2019/07/01/back-ground.png')"
    },
    labelLogo: {
        fontFamily: '"canilari" !important',
        fontSize: '2em',
        color: 'white'
    },
    appDiv: {
        flex: 1
    }
})
export default styleContainer;

