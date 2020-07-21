const discord = require("discord.js")
const figlet = require("figlet");
const colors = require('colors');
const config = require("./config.json")
const bot = new discord.Client()


bot.on("ready", ready => {
    console.log(require("figlet").textSync("Loggin Successfully").green);;
    console.log(" ")
    console.log("By Lys".magenta);
    console.log(" ")
    console.log("Github = https://github.com/LysEnFleur".magenta);
})

bot.on('message', msg => {

    let args = msg.content.trim().split(/ + /g);

    if (msg.guild.id != config.serveursniped) return

    if (msg.channel.id === config.channelsniped) {
        var embedspy = new discord.RichEmbed()
            .setTitle(msg.author.username)
            .setDescription("**" + msg.content + "**")
            .setThumbnail(msg.author.avatarURL)
            .setTimestamp()
            .setFooter(msg.author.id)
            .setColor(config.embedcolor)

        bot.guilds.get(config.serverreceiving).channels.find(x => x.id === config.channelreceiving).send(embedspy)

    }

    if (msg.channel.id === config.channelsniped2) { 
        var embedspy2 = new discord.RichEmbed()
            .setTitle(msg.author.username)
            .setDescription("**" + msg.content + "**")
            .setThumbnail(msg.author.avatarURL)
            .setTimestamp()
            .setFooter(msg.author.id)
            .setColor(config.embedcolor)
   
        bot.guilds.get(config.serverreceiving2).channels.find(x => x.id === config.channelreceiving2).send(embedspy2)
    }
    
    if (msg.channel.id === config.channelsniped3) { 
        var embedspy3 = new discord.RichEmbed()
            .setTitle(msg.author.username)
            .setDescription("**" + msg.content + "**")
            .setThumbnail(msg.author.avatarURL)
            .setTimestamp()
            .setFooter(msg.author.id)
            .setColor(config.embedcolor)
       
        bot.guilds.get(config.serverreceiving3).channels.find(x => x.id === config.channelreceiving3).send(embedspy3)
    }
})

bot.login(config.token)
