const app = require('./src/app');
require('./src/db');

async function main() {
  await app.listen(app.get('port'), () => console.log('Server on port 3001'));
}
main();
