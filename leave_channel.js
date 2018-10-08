const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{

    constructor(client)
    {
        super(client,{
            name: 'sus',
            group: 'music',
            memberName: 'sus',
            description: 'Leaves the voice channel of the commander'
        });
    }
    
    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
        }
        else 
        {
            message.reply("Olmadığım yerden beni kovamazsın!");
        }
    }
}

module.exports = LeaveChannelCommand;