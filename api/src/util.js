module.exports = {
    secret: process.env.AUTH_SECRET || "esto es un secreto",
    expires: process.env.AUTH_EXPIRES || "1h",
    rounds: process.env.AUTH_ROUNDS || 10
}