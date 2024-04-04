import type {
	PalServerType,
	PalPlayerType,
	PalSettingsType,
	PalServerMetricsType,
} from './types/types';

export class PalWrapper {
	URL: string;
	private authorization: string;

	constructor(
		adminPassword: string,
		{
			serverIP,
			APIPort = 8212,
			endpointVersion = 'v1',
		}: { serverIP: string; APIPort?: number; endpointVersion: string }
	) {
		this.authorization = btoa('admin:' + adminPassword);
		this.URL = `http://${serverIP}:${APIPort}/${endpointVersion}/api`;
	}

	getServerInfo = async (): Promise<PalServerType> => {
		let res = await fetch(`${this.URL}/info`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${this.authorization}`,
			},
		});
		let json = await res.json();

		return {
			version: json.version,
			name: json.servername,
			description: json.description,
		};
	};

	getPlayers = async (): Promise<PalPlayerType> => {
		let res = await fetch(`${this.URL}/players`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${this.authorization}`,
			},
		});
		let json = await res.json();

		return json.players;
	};

	getSettings = async (): Promise<PalSettingsType> => {
		let res = await fetch(`${this.URL}/settings`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${this.authorization}`,
			},
		});
		let json = await res.json();

		return json;
	};

	getServerMetrics = async (): Promise<PalServerMetricsType> => {
		let res = await fetch(`${this.URL}/metrics`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${this.authorization}`,
			},
		});
		let json = await res.json();

		return {
			FPS: json.serverfps,
			currentPlayerNum: json.currentplayernum,
			frametime: json.serverframetime,
			maxPlayerNum: json.maxplayernum,
			uptime: json.uptime,
		};
	};

	announceMessage = async (message: string): Promise<number> => {
		let res = await fetch(`${this.URL}/announce`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${this.authorization}`,
			},
			body: JSON.stringify({ message: message }),
		});

		if (res.status !== 200) return res.status;
		else return 200;
	};

	kickPlayer = async (userId: string, message?: string): Promise<number> => {
		let res = await fetch(`${this.URL}/kick`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${this.authorization}`,
			},
			body: JSON.stringify({ userid: userId, message: message }),
		});

		if (res.status !== 200) return res.status;
		else return 200;
	};

	banPlayer = async (userId: string, message?: string): Promise<number> => {
		let res = await fetch(`${this.URL}/ban`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${this.authorization}`,
			},
			body: JSON.stringify({ userid: userId, message: message }),
		});

		if (res.status !== 200) return res.status;
		else return 200;
	};

	unbanPlayer = async (userId: string): Promise<number> => {
		let res = await fetch(`${this.URL}/unban`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${this.authorization}`,
			},
			body: JSON.stringify({ userid: userId }),
		});

		if (res.status !== 200) return res.status;
		else return 200;
	};

	saveWorld = async (): Promise<number> => {
		let res = await fetch(`${this.URL}/save`, {
			method: 'POST',
			headers: {
				Authorization: `Basic ${this.authorization}`,
			},
		});

		if (res.status !== 200) return res.status;
		else return 200;
	};

	shutDown = async (waitTime: number, message: string): Promise<number> => {
		let res = await fetch(`${this.URL}/shutdown`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${this.authorization}`,
			},
			body: JSON.stringify({ waittime: waitTime, message: message }),
		});

		if (res.status !== 200) return res.status;
		else return 200;
	};

	stop = async (): Promise<number> => {
		let res = await fetch(`${this.URL}/stop`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${this.authorization}`,
			},
		});

		if (res.status !== 200) return res.status;
		else return 200;
	};
}
