const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
const token = "{YOUR_TOKEN}";
var gid = '';
var cid = '';
var buff = '';
var sendid = '';

client.on('ready', () => {
  console.log("ready...");
});

client.on("guildCreate",() => {
  //参加ギルド確認用
  console.log('join,guild')
})

client.on("message", message => {
  if (message.author.bot) {
    return;
  }else if (message.content === '!setlog' && message.guild) {
    if (!message.member.permissions.has('ADMINISTRATOR')){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle('Error')
      .setURL('{YOUR_SERVER_URL}')
      .addFields({name: '309', value:'権限がありません'+ '\n' + '詳しくは Error をクリック'})
      message.channel.send(exampleEmbed);
      return;
      //↑権限がない人に対して送る文
    }
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#00FF00')
    .setTitle('completion:!setlog')
    message.channel.send(exampleEmbed);
    gid = message.guild.id;
    cid = message.channel.id;
    try {
      buff = fs.readFileSync('./id.json', "utf8");
      if (buff === '') {
        let data = [{ guildid: gid, channelid: cid }];
        let jdata = JSON.stringify(data);
        fs.writeFileSync('./id.json', jdata);
      } else {
        let data = JSON.parse(buff);
        data.push({ guildid: gid, channelid: cid });
        let jdata = JSON.stringify(data);
        fs.writeFileSync('./id.json', jdata);
      }
    }
    catch (e) {
      console.log(e);
    }
  }else{
    return;
  }
});

client.on("message", message => {
  if (message.author.bot) {
    return;
  }else if (message.content !== null) {
    let buff = fs.readFileSync('./id.json', "utf8");
    let data = JSON.parse(buff);
    data.reverse();
    for (var i = 0; i < data.length; i++) {
      if (data[i]["guildid"] === message.guild.id || message.system == true) {
        sendid = data[i]["channelid"];
        let msg = message.content;
        let chname = message.channel.name;
        let now = new Date();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hour = now.getHours() + 9;
        let minute = now.getMinutes();
        let nick = message.member.nickname;
        let icon = message.author.avatarURL();
        let files = message.attachments.map(attachment => attachment.url);
        nick = (nick) ? nick + "/" + message.author.tag : message.author.tag;
        let time = month + "月" + date + "日" + hour + "時" + minute + "分"
        if (0 !== msg.length && 0 !== Object.keys(files).length) {
          const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(nick)
            .setAuthor('logs', icon)
            .setThumbnail(icon)
            .addFields(
              { name: 'channel', value: chname },
              { name: 'message', value: msg, inline: true },
              { name: 'files', value: files, inline: true },
            )
            .setImage('')
            .setFooter(time);

          client.channels.cache.get(sendid).send(exampleEmbed);
          return;
        }
        else if (0 !== msg.length && 0 === Object.keys(files).length) {
          const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(nick)
            .setAuthor('logs', icon)
            .setThumbnail(icon)
            .addFields(
              { name: 'channel', value: chname },
              { name: 'message', value: msg, inline: true },
            )
            .setImage('')
            .setFooter(time);

          client.channels.cache.get(sendid).send(exampleEmbed);
          return;
        } else if(message.system == true){
          const exampleEmbed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('system message')
          .setFooter(time);

        client.channels.cache.get(sendid).send(exampleEmbed);
        return;
        }else {
          const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(nick)
            .setAuthor('logs', icon)
            .setThumbnail(icon)
            .addFields(
              { name: 'channel', value: chname },
              { name: 'files', value: files, inline: true },
            )
            .setImage('')
            .setFooter(time);

          client.channels.cache.get(sendid).send(exampleEmbed);
          return;
        }
      }
    }
  }
}
);

client.login(token);