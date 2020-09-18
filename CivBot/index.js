const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const { on } = require('process');
const client = new Discord.Client();


const optionsMaster = ["City-States","Disaster Intensity", "Map", "Resources", "World Age", "Temperature", "Rainfall", "Sea level"];

let maptypes = ["Continents", "Fractal", "Inland Sea",
"Island Plates", "Lakes", "Pangea", "Seven Seas", "Shuffle", "Small Continents", "Terra",
"Four-Leaf Clover", "6-Armed Snowflake", "Mirror", "Earth", "True start Location Earth",
"Archipelago", "Continents and Islands", "Primordial", "Splintered Fractal", "Tilted Axis",
"East Asia", "True Start Location East Asia", "Europe", "True Start Location Europe"];




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on( 'message', message => {
  
  var options = ["City-States","Disaster Intensity", "Map", "Resources", "World Age", "Temperature", "Rainfall", "Sea level"];

if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();


var output = '';

if(command === 'civ'){
  
options.forEach(element => {
  let random = Math.floor(Math.random() * args.length);
  output+=(`${args[random]}`+' : '+element+'\n');
});
message.channel.send(output);
}
else if(command === 'civshuffle'){
  shuffleArray(options);
  options.forEach(element => {
    let random = Math.floor(Math.random() * args.length);
    output+=(`${args[random]}`+' : '+element+'\n');
  });
  message.channel.send(output);
  
  }
else if(command === 'civjoe'){
  options.forEach(element => {
    if(element === "Map"){
      output+=('jonas'+' : '+element+'\n');
    }
    else{
    let random = Math.floor(Math.random() * args.length);
    output+=(`${args[random]}`+' : '+element+'\n');
    }
  });
  message.channel.send(output);
}
else if(command === 'civdraft'){

  options.forEach(element => {
    message.channel.awaitMessages(m => m.author.id == message.author.id,
      {max: 1, time: 120000}).then(collected => {
              // only accept messages by the user who sent the command
              // accept only 1 message, and return the promise after 30000ms = 30s
  
              // first (and, in this case, only) message of the collection
              if (collected.first().content.toLowerCase() == 'next') {
                let random = Math.floor(Math.random() * args.length);
                      message.reply(`${args[random]}`+' : '+element+'\n');
                      client.destroy();
              }
  
              else
                      message.reply('Operation canceled.');      
      }).catch(() => {
              message.reply('No answer after 120 seconds, operation canceled.');
      });
    
  });
  
}

});



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

client.login(token);