const { PalWrapper } = require('./build/index.js');
const pal = new PalWrapper('Password', {
	serverIP: '127.0.0.1',
	APIPort: 8212,
});

async function Test() {
	console.log('Endpoint URL:', pal.URL);
	console.log('Server Info:', await pal.getServerInfo());
	console.log('Player list:', await pal.getPlayers());
	console.log('Server Settings:', await pal.getSettings());
	console.log('Server Metrics:', await pal.getServerMetrics());
	console.log('Announce Message:', await pal.announceMessage('Hello Pals'));
}

Test();
