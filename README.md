# antibully
An anti-cyberbullying bot for Discord.

# Configuration
Note: you need Node.JS installed.
If on Windows or Mac:
Head to https://nodejs.org/en/ and download the install package for your OS.

If on Linux (assuming you are on Ubuntu or Debian, if not google how to set up node on your distro!):

curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs



Step 1: Open config.json
Step 2: Grab a discord bot token. You can do this from the developer portal by creating an application.
Step 3: Put the token in the quotes next to token.
Step 4 (optional): If you want to disable the profanity filter (enabled by default) change "'disableswears' = '1'" to "'disableswears' = '0'".
Step 5: If on Windows, run the file "start.bat"
Step 5b: If on another OS, run the commands "cd bot" then "node bot.js". I am working on making running on these OSes easier :D
Step 6: Add your bot to your server. Copy this and replace "id-here" with your bot ID. (on the dev portal!)

https://discordapp.com/oauth2/authorize?client_id=ID-HERE&scope=bot&permissions=4

Step 7: Test. Head to your server and send the message >ping. You should get a message from the bot saying "Pong!".

# Suggest a word or phrase be blacklisted
Just open an issue and tell me a phrase is missing. Say the phrase and I will add it. (provided it is an actual insult, not just the word hi or something like that)



