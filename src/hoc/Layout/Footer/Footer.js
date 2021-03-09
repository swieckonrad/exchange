import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

export const Footer = () => {
  return (
    <Paper>
      <Typography align="center">
        Copyright (c) {new Date().getFullYear()}
      </Typography>
    </Paper>
  );
};
