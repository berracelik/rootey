const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dipatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection, message);
        }
        else
        {
            connection.disconnect();
        }
    });
}

class JoinChannelCommand extends commando.Command
{

    constructor(client)
    {
        super(client,{
            name: 'çal',
            group: 'music',
            memberName: 'çal',
            description: 'Joins the voice channel of the commander'
        });
    }
    
    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
           {
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id]
                        message.reply("Emrinizdeyim efendim!");
                        server.queue.push(args);
                        Play(connection, message);
                    })

           }     
        }
        else
        {
            message.reply("Sen oradayken gelemem mal!");
        }
    }
}

module.exports = JoinChannelCommand;