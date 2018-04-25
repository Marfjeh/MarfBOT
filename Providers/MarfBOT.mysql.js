/*
I wrote this out of frustration, because the settingprovider of Discord.js-commando is COMPLETELY RETARDED.

  _____  ______ _____  _____  ______ _____       _______ ______ _____
 |  __ \|  ____|  __ \|  __ \|  ____/ ____|   /\|__   __|  ____|  __ \
 | |  | | |__  | |__) | |__) | |__ | |       /  \  | |  | |__  | |  | |
 | |  | |  __| |  ___/|  _  /|  __|| |      / /\ \ | |  |  __| | |  | |
 | |__| | |____| |    | | \ \| |___| |____ / ____ \| |  | |____| |__| |
 |_____/|______|_|    |_|  \_\______\_____/_/    \_\_|  |______|_____/
 Need to rewrite it.
 */
const MySQL = require('mysql2/promise'),
    Settings = require("./settings.json"),
    Marflib = require("./MarfBOT.js"),
    MarfBOT = new Marflib();

module.exports = class MarfBOTMySQLProvider  {

    SQL = await MySQL.createConnection({
                                           host: Settings.mysql_host,
    user: Settings.mysql_user,
    password: Settings.mysql_pass,
    database: Settings.mysql_db
});
getSetting(guildId, setting) {

}
setSetting(guildId, setting) {

}
runRawSQL(SQLquery){ //CHANGE THIS TO ASYNC YOU IDIOT
    // const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
    SQL.query(SQLquery, function(err, results) {
        MarfBOT.clog("MYSQL", results); // results contains rows returned by server
        if (err) {
            MarfBOT.clog("MySQL", "Error! : " + err);
        }
        return results;
    });
}
};