require('./bundle-config');
var application = require('tns-core-modules/application');
application.cssFile = 'app.css';
application.start({ moduleName: 'main-page' });
