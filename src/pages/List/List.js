import { MenuItem, Select, Typography } from "@material-ui/core";
import { jsx, css } from "@emotion/react";

export const List = ({ title, setRate, currency }) => {
  const styles = {
    input: css`
      width: 20vw;
    `,
    list: css`
      width: 10vw;
    `,
  };

  return (
    <div>
      <Typography>{title}</Typography>
      <Select
        css={styles.list}
        variant="outlined"
        onChange={(e) => setRate(e.target.value)}
      >
        {Object.keys(currency).map((symbol) => (
          <MenuItem key={symbol} value={currency[symbol]}>
            {symbol}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
