const discord = require("discord.js")
const bot = new discord.Client()
const figlet = require("figlet");
const colors = require('colors');

bot.on("ready", ready => {
    console.log(require("figlet").textSync("FTNL SPY").green);;
    console.log("By Lys aka Zelensky".magenta);
})

bot.on('message', msg => {

    let args = msg.content.trim().split(/ + /g);

    if (msg.guild.id != "408947376041230346") return

    if (msg.channel.id === "408947376041230348") {
        var embedspy = new discord.RichEmbed()
            .setTitle(msg.author.username)
            .setDescription("**" + msg.content + "**")
            .setThumbnail(msg.author.avatarURL)
            .setTimestamp()
            .setFooter(msg.author.id)
        bot.guilds.get("732920509821354086").channels.find(x => x.id === "732920509821354090").send(embedspy)

    }

    if (msg.channel.id === "519577157807112199") { 
        var embedspy2 = new discord.RichEmbed()
            .setTitle(msg.author.username)
            .setDescription("**" + msg.content + "**")
            .setThumbnail(msg.author.avatarURL)
            .setTimestamp()
            .setFooter(msg.author.id)
   
        bot.guilds.get("732920509821354086").channels.find(x => x.id === "732921057899708439").send(embedspy2)
    }
    
    if (msg.channel.id === "409016405615312906") { 
        var embedspy3 = new discord.RichEmbed()
            .setTitle(msg.author.username)
            .setDescription("**" + msg.content + "**")
            .setThumbnail(msg.author.avatarURL)
            .setTimestamp()
            .setFooter(msg.author.id)
       
        bot.guilds.get("732920509821354086").channels.find(x => x.id === "732920879784263680").send(embedspy3)
    }
})

bot.login(process.env.TOKEN)
