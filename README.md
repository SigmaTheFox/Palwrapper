# Palwrapper

A simple Palworld API wrapper for Node.js projects

## Usage

```JS
const { PalWrapper } = require('palwrapper');
/**
 * AdminPassword: The Admin Password set in the Palworld server settings
 * serverIP: The IP/URL of the server
 * APIPort: The port of the server's API
 */
const pal = new PalWrapper('AdminPassword', {
	serverIP: '127.0.0.1',
	APIPort: 8212, // default 8212
});

// List all currently online players
pal.getPlayers()
	.then(players => console.log(players));

// Get the server name, description and version
pal.getServerInfo()
	.then(server => console.log(server));

// Get server FPS, current and max player count, frametime and uptime
pal.getServerMetrics()
	.then(metrics => console.log(metrics));

// List all server settings
pal.getSettings()
	.then(settings => console.log(settings));

// Kick a player from the server
pal.kickPlayer("steam_00000000000000000", "Reason");

// Ban a player from the server
pal.banPlayer("steam_00000000000000000", "Reason");

// Unban a player
pal.unban("steam_00000000000000000");

/*
	All methods below will only return the status code of the API call.
	Useful for error handling.
*/

// Announce a message to the server
pal.announceMessage("Hello Pals");

// Save the world
pal.save();

// shut down the server
pal.shutDown(10 /*Seconds*/, "For reasons");

// Force stop the server
pal.stop();
```
