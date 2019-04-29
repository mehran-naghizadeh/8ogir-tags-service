import { app } from 'mu';

/**
 * Environment constants
 */

/**
 * Internal constants
 */


app.get('/', function( req, res ){
  res.set('Content-Type', 'text/html');
  res.send(`
<h3>Welcome to the dowload url service.</h3>

<p>This service periodically looks for urls and tries to download and store their content locally, if not already stored. You can force it to run immediately by visiting the <a href="./checkurls">/checkurls</a> subroute. This service utilizes these environment variables:</p>
<dl style="margin-left:1em">
  <dt>FILE_STORAGE</dt>
  <dd>The local storage of files</dd>
  <br>
  <dt>CACHING_MAX_RETRIES</dt>
  <dd>How many times will the service try to download a resource before considering it as failed.</dd>
  <br>
  <dt>CACHING_CRON_PATTERN</dt>
  <dd>The time interval of service's re-execution.</dd>
</dl>`);
});