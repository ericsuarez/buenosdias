const Telegraf = require('telegraf');
const bot = new Telegraf("*");

const chatid = [];


var CronJob = require('cron').CronJob;
new CronJob('00 36 21 * * 1-5', function() {
  for(var i =0;i<chatid.length;i++){
    bot.telegram.sendMessage(chatid[i],"eres un jputa");
  }
  

  
  
}, null, true, 'Europe/Madrid');




//  bot.telegram.sendMessage("File content at: " + new Date() + " is: \n" + file);

bot.catch((err) => {
  console.log('Ooops', err)
})


bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  chatid.push(ctx.from.id);
  return ctx.reply('Aitor es usted un hdp! saludos kawais');
});





bot.command('help', (ctx) => ctx.reply('fck you!'));



bot.startPolling() 
