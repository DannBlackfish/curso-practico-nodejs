module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'x883vbi2pT',
        password: process.env.MYSQL_PASS || '2XbvpucwRh',
        database: process.env.MYSQL_DB || 'x883vbi2pT',
    },
}