module.exports = {
    name: 'twitter',
    description: "Sends twitter link.",
    execute(message, args)
        {
            message.channel.send('https://twitter.com/c/vehzx');
        }
}