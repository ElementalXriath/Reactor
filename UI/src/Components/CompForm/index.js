import React from 'react';
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
    
    
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    fontSize: 6,
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
    border: '1px solid #ced4da',
    fontSize: 6,
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
          <Paper className={classes.paper}>
       <Button variant="contained" color="primary" className={classes.button}>
       Save
      </Button>
          </Paper>
        </Grid>

     
        <Grid item lg={4} xs={12}>
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