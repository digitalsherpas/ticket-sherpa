var pgtools = require('pgtools');

const config = {
  user: 'postgres',
  password: 'password',
  port: 5432,
  host: 'localhost'
}

pgtools.createdb(config, 'tickether', function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});