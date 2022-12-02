const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "MEE7 - ready.js üzerinden değiştir",
        "satır 1",
        "satır 2",
        "satır 3",
        "satır 4",
        "satır 5",
       //DBL EKLENCEKSENIZ 5000 EN IYI DEÐÝÞÝM SÜRESÝDÝR! EKLEMEK ÝSTEMÝYORSANIZ ÝDEAL 2500

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.youtube.com/channel/UC5mxQbR-4er2giWDTq9SgQg?view_as=subscriber" );
      }, 2 * 5000); //DEÐÝÞME SÜRESÝ

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriþ yapýldý!`);
  client.user.setStatus("online");
  client.user.setActivity(`${prefix}yardým + ${client.guilds.size} sunucu + ${client.users.size} kullanýcý`);
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Þu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanýcýya hizmet veriliyor!`);
}; 
