import { useEffect, useState } from "react";
import axios from "axios";
import {
  CircularProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

export const HomePage = () => {
  const [currency, setCurrency] = useState();
  const [loading, setLoading] = useState(true);
  const [baseCurrencyAmount, setBaseCurrencyAmount] = useState(0);
  const [baseCurrencyRate, setBaseCurrencyRate] = useState(0);
  const [outputCurrencyRate, setOutputCurrencyRate] = useState(0);

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

  return (
    <div>
      <TextField
        type="number"
        variant="outlined"
        placeholder="Input amount of money to exchange"
        onChange={(e) => setBaseCurrencyAmount(e.target.value)}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Typography>Select the base currency</Typography>
          <Select
            variant="outlined"
            onChange={(e) => setBaseCurrencyRate(e.target.value)}
          >
            {Object.keys(currency).map((symbol) => (
              <MenuItem key={symbol} value={currency[symbol]}>
                {symbol}
              </MenuItem>
            ))}
          </Select>
          <Typography>Select output currency</Typography>
          <Select
            variant="outlined"
            onChange={(e) => setOutputCurrencyRate(e.target.value)}
          >
            {Object.keys(currency).map((symbol) => (
              <MenuItem key={symbol} value={currency[symbol]}>
                {symbol}
              </MenuItem>
            ))}
          </Select>
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
