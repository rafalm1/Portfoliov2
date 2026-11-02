import { app, host, port } from './app.js';

const onListening = () => {
  console.log(`Portfolio API listening on http://${host ?? 'localhost'}:${port}`);
};

if (host) app.listen(port, host, onListening);
else app.listen(port, onListening);
