const Telegraf = require('telegraf');
const bot = new Telegraf("527489649:AAHQKLYJRAvNgTUUKqpUsu6vkW3j4yOhC4o");
const firstname = ["jputillaaa","crackkk del basket","mariposa de jardin", "ornitorrinco mareado","flumifero peollo","saltamontes tartamudo","sangre sucia","renacuajo vomitivo"];
const secondname = ["hijo del señor","misericordioso perro","hijo de satan","lombriz asustada","meaculos","robot asesino","fenomeno desmesurado","rata rasurada","avestruz lonjeba"];
const action = ["mate un leopardo","viole un oso","folle un perro","den por el orto","quemen la punta del pene","saquen los ojos","muerdan el clitoris","escupan en la cara","laven con lejia"];



const chatid = [];


var CronJob = require('cron').CronJob;  
new CronJob('00 23 22 * * 1-5', function() {
  
  var rand1 = firstname[Math.floor(Math.random() * firstname.length)];
  var rand2 = secondname[Math.floor(Math.random() * secondname.length)];
  
  for(var i =0;i<chatid.length;i++){
    bot.telegram.sendMessage(chatid[i],"Aitor eres un " + rand1  + " Buenas noches " + rand2);
  }
}, null, true, 'Europe/Madrid');



var CronJob = require('cron').CronJob;  
new CronJob('00 00 05 * * 1-5', function() {
  
  var rand1 = firstname[Math.floor(Math.random() * firstname.length)];
  var rand2 = action[Math.floor(Math.random() * action.length)];
  
  for(var i =0;i<chatid.length;i++){
    bot.telegram.sendMessage(chatid[i],"Buenos dias " + rand1 + "!! que te " + rand2);
  } 
}, null, true, 'Europe/Madrid');




//  bot.telegram.sendMessage("File content at: " + new Date() + " is: \n" + file);

bot.catch((err) => {
  console.log('Ooops', err)
})


bot.start((ctx) => {
  console.log('started:', ctx.chat);
  chatid.push(ctx.chat.id);
  return ctx.reply('Aitor es usted un hdp! saludos kawais');
});





bot.command(('help'), (ctx) => { ctx.reply('fck you Aitor!')});



bot.startPolling() 

