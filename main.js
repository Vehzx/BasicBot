const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                  Bot connection message log.                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                             Edit this to your bot name if you want.                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.once('ready', () => {
    console.log('vBot is now online.')
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                       On Message Function                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            If you are just setting up a simple bot with basic commands, no need to touch this.                                            //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                             COMMANDS                                                                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                           Edit or add commands below, simply copy and paste the existing commands, then in the                                            //
//                                                 commands folder make a new .js file under the same name as the command.                                                   //
//                                                   Documentation below if you need any guidance with adding commands.                                                      //
//                                                  https://discordjs.guide/creating-your-bot/adding-more-commands.html                                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(command === 'ping')
    {
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'youtube')
    {
        client.commands.get('youtube').execute(message, args);
    }
    else if (command === 'twitter')
    {
        client.commands.get('twitter').execute(message, args);
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                             DISCORD TOKEN                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              Your token MUST be used to allow your bot to connect to your discord server.                                                 //
//                                        You can replace "DISCORD_TOKEN" with your token if you wish, but to keep the token secure                                          //
//                                       I would advise creating a .env file pointing to your discord token key for security reasons.                                        //
//                           Simply point to your token using the following code in the .env file: "DISCORD_TOKEN = YOUR_DISCORD_TOKEN_GOES_HERE"                            //
//                                               Find your discord token in the discord developer hub under the "bot" section.                                               //
//                                                               https://discord.com/developers/applications                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.login(process.env.DISCORD_TOKEN);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                            All done! To test your bot type "node ." in the terminal below.                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////