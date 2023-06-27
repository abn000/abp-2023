module.exports = {
    entry: './index.js',
    resolve: {
        fallback: {
            "fs": false,
            "stream": false,
            "string_decoder": false,
            "path": false,
            "util": false,
            "crypto": false,
            "assert": false,
            "dns": false,
            "net": false,
            "tls": false,
            "pg-native": false
        }
    },
    "mode": "development"
}