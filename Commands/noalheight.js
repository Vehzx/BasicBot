module.exports = {
    name: 'noalheight',
    description: "Shows an accurate image of Noals Height.",
    execute(message, args)
        {
            if(message.member.roles.cache.has('551114898655150081')){
            message.channel.send('https://i.imgur.com/2MizdUe.png');
        }
        else {
            message.channel.send('You do not have sufficient permissions for this command.');
        }
    }
}