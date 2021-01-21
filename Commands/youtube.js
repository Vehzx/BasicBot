module.exports = {
    name: 'youtube',
    description: "Sends youtube link.",
    execute(message, args)
        {
            message.channel.send('https://youtube.com/c/vehzx');
        }
}