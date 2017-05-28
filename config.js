'use strict';


	module.exports = {
	    name: 'rest-api',
	    version: '0.0.1',
	    env: process.env.NODE_ENV || 'development',
	    port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
	    db: {
	        uri: process.env.MONGO_URL
			//uri : 'mongodb://localhost:27017/api'
	    }
	}

