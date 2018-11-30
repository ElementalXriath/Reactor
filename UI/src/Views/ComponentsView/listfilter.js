import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    borderColor: 'black',
  
    margin: '10',

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    borderColor: 'black',
  
   
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        border: '2px solid black',
      },
  },

  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'Trending',
    label: 'Trending',
  },
  {
    value: 'Newest',
    label: 'Newest',
  },
  {
    value: 'Top-Rated',
    label: 'Top-Rated',
  },
  {
    value: 'Exclusicve',
    label: 'Exclusive',
  },
];

class OutlinedTextFields extends React.Component {
  state = {
  
    filter: 'Newest',
  };

  handleChange = filter => event => {
    this.setState({
      [filter]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (    
      <form className={classes.container} noValidate autoComplete="off">

   

          
         
        <TextField
          id="outlined-select-filter"
          select
          label="Select"
          className={classes.textField}
          value={this.state.filter}
          onChange={this.handleChange('filter')}
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
      
         
  

    
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);