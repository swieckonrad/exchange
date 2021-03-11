import { jsx, css } from "@emotion/react";
import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";

export const Layout = (props) => {
  const styles = {
    root: css`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      text-align: center;
    `,
    page: css`
      flex: 1;
      margin-top: 20px;
    `,
  };

  return (
    <div css={styles.root}>
      <CssBaseline />
      <Navigation />
      <div css={styles.page}>{props.children}</div>
      <Footer />
    </div>
  );
};
