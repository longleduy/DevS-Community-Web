import React, { memo, Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Save from '@material-ui/icons/Save';
import Slide from '@material-ui/core/Slide';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
//Todo: Styles
import StyleMain from '../../../themes/StyleMain';
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
const CreateDefaultPostForm = memo(props => {
    const StyleCreateDefaultPost = StyleMain.styleCreateDefaultPost();
    const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
    const handleClose = () => {
        props.closeCreatePostForm();
    }
    function handleChange(event) {
        setPersonName(event.target.value);
      }
    
      function handleChangeMultiple(event) {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        setPersonName(value);
      }
    return (
        <Fragment>
            <Dialog style={{ zIndex: 99999 }}
                fullScreen open={props.openCreatePostForm}
                onClose={handleClose}
                TransitionComponent={Transition}
                className={StyleCreateDefaultPost.dialog}>
                <AppBar className={StyleCreateDefaultPost.appBar}>
                    <Toolbar>
                        {/* <Button color="inherit" onClick={handleClose} className={StyleCreateDefaultPost.saveBtn}>
                            save
                        </Button> */}
                        <IconButton edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="Close"
                            className={StyleCreateDefaultPost.saveBtn}>
                            <Save />
                        </IconButton>
                        <Typography variant="h6" className={StyleCreateDefaultPost.title}>
                            Tạo cuộc thảo luận
                        </Typography>
                        <IconButton edge="start" color="inherit"
                            onClick={handleClose} aria-label="Close"
                            className={StyleCreateDefaultPost.closeBtn}>
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Grid container className={StyleCreateDefaultPost.divContent}>
                    <Grid item md={6} sm={12} className={StyleCreateDefaultPost.divLeftContent}>
                        <TextField
                            className={StyleCreateDefaultPost.inputContent}
                            id="outlined-bare"
                            margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                            multiline
                            rowsMax={4}
                            placeholder="Nhập nội dung thảo luận"
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
                            <Select
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<Input id="select-multiple-checkbox" />}
                                renderValue={selected => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                <MenuItem  value={"123"}>
                                        <Checkbox checked={false} />
                                        <ListItemText primary="123" />
                                    </MenuItem>
                                {names.map(name => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={personName.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        2
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    )
})
export default CreateDefaultPostForm;