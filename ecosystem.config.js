module.exports = {
  apps : [{
    name   : "ankitprakash_info",
    script : "server.js",
    env_production : {
      NODE_ENV : "production",
    }
  }],
  // Deployment Configuration
  deploy : {
    production : {
       "user" : "root",
       "host" : ["ankitprakash.online"],
       "ref"  : "origin/main",
       "repo" : "git@github.com:ankitprakashap13/ankitprakash_info.git",
       "path" : "/var/www/ankitprakash_info",
       "post-setup" : "",
       "post-deploy" : "npm install; npm run build; pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
}
