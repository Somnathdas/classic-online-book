import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Grid container spacing={1}>  
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    <NavLink
     to="/"
     exact
    >
    <BottomNavigationAction label="Books" icon={<HomeIcon />} />
    </NavLink>
    <NavLink to="/addbook">
    <BottomNavigationAction label="Add Book" icon={<AddBoxIcon />} />
    </NavLink>  
    </BottomNavigation>
    </Grid>
  );
}
