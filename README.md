# civbot
Simple discord bot for assigning map option choices to random players.

javascript, node.js, discord.js

Listens for "!civ" command and then takes any number of space separated strings as arguments to populate a list of players.
Then for each map option in a predefined array it will determine a random player from the list to choose that map option.
Output as String one line for each combination.

"!civdraft" command as above but order of map options gets randomly shuffled first
