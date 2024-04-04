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

pal.getPlayers()
	.then(players => console.log(players))

```
