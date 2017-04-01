//You need discord.js!
const Discord = require('Discord.js');
//Tell the bot what a bot is.
const bot = new Discord.Client();
//Tell the bot where your configuration file is.
var config = require("./config.json");
//Tell the bot how to use your filesystem. This makes it so the bot can log all messages or just ones that trigger the bans.
var fs = require('fs');

//Tell the bot what the logger is and how to use it
var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

//Blacklist
var blacklist = [

	'yiff',
	'porn',
	'faggot',
	'fag',
	'kys',
	'kill yourself',
	'hope you die',
	'go die in a hole',
	'i yearn to bleach your skull and use it as a novelty pencil holder',
	'i will cut you',
	'your mom last night',
	'your mom in bed',
	'hoe',
	'kill you',
	'rape',
	'go die',
	'slut',
	'pimp'

];

//List of swears
var swears = [

	'fuck',
	'shit',
	'damn',
	'ass',
	'cunt',
	'tit'

];

//Tell the bot how to search for bad things.
function contains(a, b) {
	if (Array.isArray(b)) {
		return b.some(x => a.indexOf(x) > -1);
	}
	return a.indexOf(b) > -1;
}

//When Discord says the bot is ready, do this
bot.on('ready', () => {
	//Grab the time
	var d = new Date();
	//Write to the console that it's ready.
	console.log('Anti-bullying online.');
	//Write to the log that it has started up.
	logger.write('\n' + d + ' Ready.');
});

//When a message is sent,
bot.on('message', message => {
	//Refresh the time
	var d = new Date();
	//Check if the server owner wants me to log all messages
	if(config.log == 1)
	{
		//If so, write down the message.
		logger.write('\n' + d + ' ' + message.author.username + ' said' + message + ' .');
	}
	else
	{
		//If not, don't write it down unless it triggers a ban.
		return;
	}
	
	//Does the owner want to check for profanity?
	if(config.disableswears == 1)
	{
		//If so, scan for swears
		if( contains(swears, message) )
		{
			//If one was found, ban the sender
			logger.write('\n' + d + ' Banned ' + message.author.username + ' for the message ' + message);
			guild.ban(message.author, 7);
		}
		
	}
	
	//Does the message contain an insult?
	if( contains(blacklist, message) )
	{
		//If one was found, ban the sender.
		logger.write('\n' + d + ' Banned ' + message.author.username + ' for the message ' + message);
		guild.ban(message.author, 7);
		
	}
});


//Tell discord what your token is, so they know what bot to use
bot.login(config.token);
