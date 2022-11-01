module.exports = {
  apps : [{
    name   : "ankitprakash_info",
    script : "./app.js",
    env_production : {
      NODE_ENV : "production",
    }
  }],
  // Deployment Configuration
  deploy : {
    production : {
       "user" : "root",
       "host" : ["143.110.177.113"],
       "ref"  : "main",
       "repo" : "git@github.com:ankitprakashap13/ankitprakash_info.git",
       "path" : "/var/www/ankitprakash_info",
       "post-deploy" : "pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
}
