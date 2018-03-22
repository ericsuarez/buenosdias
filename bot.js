const Telegraf = require('telegraf');
const bot = new Telegraf("527489649:AAHQKLYJRAvNgTUUKqpUsu6vkW3j4yOhC4o");

const chatid = [];


var CronJob = require('cron').CronJob;  
new CronJob('00 23 22 * * 1-5', function() {
  for(var i =0;i<chatid.length;i++){
    bot.telegram.sendMessage(chatid[i],"Aitor eres un gran jputa!! Buenas noches cabronazo");
  }
}, null, true, 'Europe/Madrid');



var CronJob = require('cron').CronJob;  
new CronJob('00 00 05 * * 1-5', function() {
  for(var i =0;i<chatid.length;i++){
    bot.telegram.sendMessage(chatid[i],"Buenos dias jputilla! que te folle un oso");
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

