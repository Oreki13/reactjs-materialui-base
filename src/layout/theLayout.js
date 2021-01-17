import { Box } from "@material-ui/core";
import React from "react";
import Content from "./content";
import Header from "./header";
import Sidebar from "./sidebar";

export default function TheLayout(props) {
  return (
    <Box>
      <Sidebar {...props} />
      <Header {...props} />
      <Content />
    </Box>
  );
}
