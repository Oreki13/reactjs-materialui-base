import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/index";
import menu from "../routes/menu";

export default function Sidebar(props) {
  const { sidebar, closeSidebar } = useContext(AppContext);

  return (
    <Drawer anchor={"left"} open={sidebar} onClose={closeSidebar}>
      <Box style={{ width: 230 }}>
        <List>
          {menu.map((data, index) => {
            return (
              <ListItem
                onClick={() => props.history.push(data.to)}
                button
                key={index}
              >
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.name} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
