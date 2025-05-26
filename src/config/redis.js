const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: 'rPB3bs1xpdN3MVyZGzKj43OmVAmZagre',
    socket: {
        host: 'redis-18786.c99.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 18786
    }
});

module.exports = redisClient;