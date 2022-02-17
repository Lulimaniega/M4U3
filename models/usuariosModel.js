var pool= require('./bd');
var md5 = require('md5');
const async = require('hbs/lib/async');
const { query } = require('express');

async function getUserByUsernameAndPassword(user, password) {
    try {Var query = 'select * from usuarios where usuario = ? and password = ?
    limit 1 ';
    var rows = await pool.query(query, [user,md5(password)]);
    return rows[0];
} catch (error) {
    console.log(error);
}
}
module.exports = {getUserByUsernameAndPassword}