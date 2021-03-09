// import
import AppBar from "@material-ui/core/AppBar";
import { Icon, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export const Navigation = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/*<IconBtton edge={"start"} color={"inherit"}>*/}
        {/*	<Icon>menu</Icon>*/}
        {/*</IconBtton>*/}
        <Typography variant={"h6"}>Exchange</Typography>
      </Toolbar>
    </AppBar>
  );
};
