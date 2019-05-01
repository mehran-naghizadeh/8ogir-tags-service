import { app } from 'mu';

/**
 * Environment constants
 */

/**
 * Internal constants
 */


app.get('/', function( req, res ){
  res.set('Content-Type', 'text/html');
  res.send(`Hello world`);
});
app.get('/tags', function( req, res ){
  res.set('COntent-Type', 'text/html');
  res.send('All tags listed');
});