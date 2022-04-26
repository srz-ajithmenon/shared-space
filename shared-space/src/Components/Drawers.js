import React from "react";
import {  Drawer as MUIDrawer,  ListItem,  List,  ListItemIcon,  ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { GiOfficeChair } from 'react-icons/gi';


const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});

const Drawer = props => {

    let navigate = useNavigate();
    const classes = useStyles();
    const itemsList = [
      {
        text: "Home",
        icon: <HiHome />,
        onClick: () => navigate('/home')
      },
      {
        text: "Book",
        icon: <GiOfficeChair />,
        onClick: () => navigate('/book')
      },
      {
        text: "Booked Seats",
        icon: <GiOfficeChair />,
        onClick: () => navigate('/booked')
      },
      {
        text: "About",
        icon: <HiHome />,
        onClick: () => navigate('/home')
      }
    ];
    
    return (
      <MUIDrawer variant="permanent" className={classes.drawer}>
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </MUIDrawer>
    );
};

export default Drawer;
