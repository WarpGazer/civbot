const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const { on } = require("process");
const client = new Discord.Client();

const optionsMaster = [
  "City-States",
  "Disaster Intensity",
  "Map",
  "Resources",
  "World Age",
  "Temperature",
  "Rainfall",
  "Sea level",
];

let maptypes = [
  "Continents",
  "Fractal",
  "Inland Sea",
  "Island Plates",
  "Lakes",
  "Pangea",
  "Seven Seas",
  "Shuffle",
  "Small Continents",
  "Terra",
  "Four-Leaf Clover",
  "6-Armed Snowflake",
  "Mirror",
  "Earth",
  "True start Location Earth",
  "Archipelago",
  "Continents and Islands",
  "Primordial",
  "Splintered Fractal",
  "Tilted Axis",
  "East Asia",
  "True Start Location East Asia",
  "Europe",
  "True Start Location Europe",
];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  var options = [
    "City-States",
    "Disaster Intensity",
    "Map",
    "Resources",
    "World Age",
    "Temperature",
    "Rainfall",
    "Sea level",
  ];

  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();

  var output = "";

  if (command === "civ") {
    options.forEach((element) => {
      let random = Math.floor(Math.random() * args.length);
      output += `${args[random]}` + " : " + element + "\n";
    });
    message.channel.send(output);
  } else if (command === "civshuffle") {
    shuffleArray(options);
    options.forEach((element) => {
      let random = Math.floor(Math.random() * args.length);
      output += `${args[random]}` + " : " + element + "\n";
    });
    message.channel.send(output);
  } else if (command === "civjoe") {
    options.forEach((element) => {
      if (element === "Map") {
        output += "jonas" + " : " + element + "\n";
      } else {
        let random = Math.floor(Math.random() * args.length);
        output += `${args[random]}` + " : " + element + "\n";
      }
    });
    message.channel.send(output);
  }
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

client.login(token);
