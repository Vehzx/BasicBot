module.exports = {
    name: 'sharkpog',
    description: "Shows an image of sharkpog.",
    execute(message, args)
        {
            if(message.member.roles.cache.has('551114898655150081')){
            message.channel.send('https://i.imgur.com/4cUxb83.jpg');
        }
        else {
            message.channel.send('You do not have sufficient permissions for this command.');
        }
    }
}