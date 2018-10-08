const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NDk4MjEyMzg4ODgxOTU2ODY0.Dpqdcg.Sqd6OsCCYl_M9oE1drtUGpoa0Jo'

bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers = {};



bot.on('message', function(message){
    if(message.content == 'Selam')
    {
        message.reply('Selam tatlım, nasılsın?');
    }
});

bot.on('message', function(message){
    if(message.content == 'selam')
    {
        message.reply('Selam tatlım, nasılsın?');
    }
});


bot.on('message', function(message){
    if(message.content == 'merhaba')
    {
        message.reply('Selam tatlım, nasılsın?');
    }
});


bot.on('message', function(message){
    if(message.content == 'sa')
    {
        message.reply('Aleykümselam tatlım, nasılsın?');
    }
});


bot.on('message', function(message){
    if(message.content == 'oç')
    {
        message.reply('Ağzını topla yoksa aklını alırım!');
    }
});


bot.on('message', function(message){
    if(message.content == 'şerefsiz')
    {
        message.reply('Ağzını topla yoksa aklını alırım!');
    }
});


bot.on('message', function(message){
    if(message.content == 'piç')
    {
        message.reply('Ağzını topla yoksa aklını alırım!');
    }
});


bot.on('message', function(message){
    if(message.content == 'sikeyim')
    {
        message.reply('Ağzını topla yoksa aklını alırım!');
    }
});



bot.on('message', function(message){
    if(message.content == 'sikerim')
    {
        message.reply('Ağzını topla yoksa aklını alırım!');
    }
});

bot.on('message', function(message){
    if(message.content == 'orospu')
    {
        message.reply('Ağzını topla yoksa aklını alırım!');
    }
});

bot.on('message', function(message){
    if(message.content == 'sürtük')
    {
        message.reply('Ağzını topla yoksa aklını alırım!');
    }
});


bot.on('message', function(message){
    if(message.content == 'siktir git')
    {
        message.reply('Ağzını topla yoksa aklını alırım!');
    }
});













bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);
