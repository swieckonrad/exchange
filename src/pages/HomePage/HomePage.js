import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, TextField, Typography } from "@material-ui/core";
import { jsx, css } from "@emotion/react";
import { List } from "../List/List";

export const HomePage = () => {
  const [currency, setCurrency] = useState();
  const [loading, setLoading] = useState(true);
  const [baseCurrencyAmount, setBaseCurrencyAmount] = useState(0);
  const [baseCurrencyRate, setBaseCurrencyRate] = useState(0);
  const [outputCurrencyRate, setOutputCurrencyRate] = useState(0);

  const styles = {
    input: css`
      width: 20vw;
    `,
    list: css`
      width: 10vw;
    `,
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api.exchangeratesapi.io/latest"
      );
      setCurrency(response.data.rates);
      setLoading(false);
    })();
  }, []);

  const exchangeArray = [
    {
      title: "Select the base currency",
      setRate: setBaseCurrencyRate,
    },
    {
      title: "Select the output currency",
      setRate: setOutputCurrencyRate,
    },
  ];

  return (
    <div>
      <TextField
        css={styles.input}
        type="number"
        variant="outlined"
        placeholder="Input amount of money to exchange"
        onChange={(e) => setBaseCurrencyAmount(e.target.value)}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          {exchangeArray.map((data, i) => (
            <List
              key={i}
              title={data.title}
              setRate={data.setRate}
              currency={currency}
            />
          ))}
          <Typography>
            {(
              (baseCurrencyAmount / baseCurrencyRate) *
              outputCurrencyRate
            ).toFixed(2)}
          </Typography>
        </div>
      )}
    </div>
  );
};
