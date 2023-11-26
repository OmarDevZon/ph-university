import app from './app';
import config from './config';
import { databaseConnecting } from './config/databaseConnecting';


databaseConnecting();

app.listen(config.PORT, () => {
  console.log(
    `Example app listening on  ${config.PORT} goto link 👉 http://localhost:${config.PORT}/`,
  );
});

