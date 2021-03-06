import React from 'react';


//////  Will be taking these forms to a yard sell and trading them for a first editon lion king bowling bowl, championships are next tues
and im going to the gold! .... really tho. Im using these just a easy to view list of forms ill be merging back into the final compnents 
entry form that will be a custom code editor.
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid';
import './form.css';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    color: blue[500],

  
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'whitesmoke',
    border: '.5px solid  rgb(0, 21, 46)',
    boxShadow: '0 0 0 0.2rem rgb(1, 58, 133)',
  },
  papertool: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: ' rgb(0, 21, 46)',
    border: '2px solid  rgb(0, 21, 46)',
    boxShadow: '0 0 0 0.2rem rgb(0, 21, 46)',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    fontSize: 4,
    backgroundColor:'white',
  
   
 
    
  },

  menu: {
    width: 200,
  },
  
  cssLabel: {
    '&$cssFocused': {
      color: blue[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: blue[500],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: blue[500],
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.navy,
    border: '1px solid  rgb(0, 21, 46)',
    fontSize: 4,
    padding: '8px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },


  
});

const currencies = [
  {
    value: 'Nav',
    label: 'Nav',
  },
  {
    value: 'Button',
    label: 'BTN',
  },
  {
    value: 'Nav Bar',
    label: 'Nav Bar',
  },
  {
    value: 'Table',
    label: 'Table',
  },
];


class OutlinedTextFields extends React.Component {
  state = {
    name: 'User',
    title: 'Component',
    multiline: 'Controlled',
    currency: 'Button',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <br />
        <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={24}>
        //Author . This will be auto filled by USER INFO
        <Grid item xs={6} lg={3}>
          <Paper className={classes.paper}> 
          <TextField
          id="outlined-name"
          label="User"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
          color="blue"
        
        />
        </Paper>
        </Grid>
        // Title of Comp
        <Grid item xs={6} lg={3}>
          <Paper className={classes.paper}>
          <TextField
          id="outlined-name"
          label="Title"
          className={classes.textField}
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
          variant="outlined"
          color="blue"
        
        />
          </Paper>
        </Grid>

        <Grid item xs={6} lg={3}>
          <Paper className={classes.paper}>
          <TextField
          id="outlined-select-currency"
          select
          label="Component Type"
          className={classes.Menu}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
    
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </Paper>
        </Grid>

        <Grid item xs={6} lg={3}>
          <Paper className={classes.papertool}>
       <Button variant="contained" color="info" className={classes.button}>
       Save
      </Button>
          </Paper>
        </Grid>

     
        <Grid item lg={4} xs={12}>
          //This will be the JS form
          <Paper className={classes.paper}>
          <TextField
          id="JS"
          label="JSX / Bable"
          placeholder="Paste JS/JSX"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth="true"
          rows="8"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
   
          </Paper>
        </Grid>
//Css Entry Form
        <Grid item xs={12} lg={4}>
          <Paper className={classes.paper}>
          <TextField
          id="CSS"
          label="CSS3 / LESS / SASS"
          placeholder="CSS"
          multiline
          className={classes.textField}
          margin="normal"
          fullWidth="true"
          variant="outlined"
          rows="8"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
          </Paper>
        </Grid>
//Dexcription of Comp
        <Grid item xs={12} lg={4}>
          <Paper className={classes.paper}>
          <TextField
          id="description"
          label="Description"
          placeholder="Text"
          multiline
          className={classes.textField}
          margin="normal"
          fullWidth="true"
          variant="outlined"
          rows="8"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
          </Paper>
        </Grid>


        <Grid item xs={12}>
          <Paper className={classes.paper}>
// List of Dependicies  VVVVVVVVV and all rhe below will be option selects of all differnt ones then and option to enter a new one
             <h1> NPMS REQUIRED </h1>

          <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
         </TextField>
          <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className={classes.textField}
          value ={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </Paper>
        </Grid>

       <Grid item xs={12}>
          <Paper className={classes.paper}>Example Component Goes Here</Paper>
        </Grid>
      </Grid>
     
 
    
       
      </form>
    </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
