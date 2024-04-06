"use strict";
/**
 * @module Main
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalWrapper = void 0;
class PalWrapper {
    URL;
    authorization;
    /**
     * @param adminPassword The server's admin password
     * @param options
     *
     *```JS
     *	new PalWrapper("AdminPassword", {
     *		serverIP: "127.0.0.1", // Default
     *		APIPort: 8212 // Default
     *	})
     *```
     */
    constructor(adminPassword, options = {
        serverIP: '127.0.0.1',
        APIPort: 8212,
    }) {
        this.authorization = btoa(`admin:${adminPassword}`);
        this.URL = `http://${options.serverIP}:${options.APIPort}/v1/api`;
    }
    /**
     *```JS
     *	// Get the server name, description and version
     *	pal.getServerInfo()
     *		.then(server => console.log(server));
     *```
     */
    getServerInfo = async () => {
        let res = await fetch(`${this.URL}/info`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${this.authorization}`,
            },
        });
        if (res.status !== 200)
            return res.status;
        let json = await res.json();
        return {
            version: json.version,
            name: json.servername,
            description: json.description,
        };
    };
    /**
     *```JS
     * // List all currently online players
     * 	pal.getPlayers()
     * 		.then(players => console.log(players));
     *```
     */
    getPlayers = async () => {
        let res = await fetch(`${this.URL}/players`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${this.authorization}`,
            },
        });
        if (res.status !== 200)
            return res.status;
        let json = await res.json();
        return json.players;
    };
    /**
     *```JS
     *	// List all server settings
     *	pal.getSettings()
     *		.then(settings => console.log(settings));
     *```
     */
    getSettings = async () => {
        let res = await fetch(`${this.URL}/settings`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${this.authorization}`,
            },
        });
        if (res.status !== 200)
            return res.status;
        let json = await res.json();
        return json;
    };
    /**
     *
     *```JS
     *	// Get server FPS, current and max player count, frametime and uptime
     *	pal.getServerMetrics()
     * 		.then(metrics => console.log(metrics));
     *```
     */
    getServerMetrics = async () => {
        let res = await fetch(`${this.URL}/metrics`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${this.authorization}`,
            },
        });
        if (res.status !== 200)
            return res.status;
        let json = await res.json();
        return {
            FPS: json.serverfps,
            currentPlayerNum: json.currentplayernum,
            frametime: json.serverframetime,
            maxPlayerNum: json.maxplayernum,
            uptime: json.uptime,
        };
    };
    /**
     *
     * @param message Message to send to the server
     * @returns
     *
     *```JS
     *	// Announce a message to the server
     * 	pal.announceMessage("Hello Pals");
     *```
     */
    announceMessage = async (message) => {
        let res = await fetch(`${this.URL}/announce`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${this.authorization}`,
            },
            body: JSON.stringify({ message: message }),
        });
        if (res.status !== 200)
            return res.status;
        else
            return 200;
    };
    /**
     *
     * @param userId The Steam user Id of the user to unban
     * @param message The kick reason
     * @returns
     *
     *```JS
     *	// Kick a player from the server
     *	pal.kickPlayer("steam_00000000000000000", "Reason");
     *```
     */
    kickPlayer = async (userId, message) => {
        let res = await fetch(`${this.URL}/kick`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${this.authorization}`,
            },
            body: JSON.stringify({ userid: userId, message: message }),
        });
        if (res.status !== 200)
            return res.status;
        else
            return 200;
    };
    /**
     *
     * @param userId The Steam user Id of the user to unban
     * @param message The ban reason
     * @returns
     *
     *```JS
     *	// Ban a player from the server
     *	pal.banPlayer("steam_00000000000000000", "Reason");
     *```
     */
    banPlayer = async (userId, message) => {
        let res = await fetch(`${this.URL}/ban`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${this.authorization}`,
            },
            body: JSON.stringify({ userid: userId, message: message }),
        });
        if (res.status !== 200)
            return res.status;
        else
            return 200;
    };
    /**
     *
     * @param userId The Steam user Id of the user to unban
     * @returns
     *
     *```JS
     *	// Unban a player
     *	pal.unban("steam_00000000000000000");
     *```
     */
    unbanPlayer = async (userId) => {
        let res = await fetch(`${this.URL}/unban`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${this.authorization}`,
            },
            body: JSON.stringify({ userid: userId }),
        });
        if (res.status !== 200)
            return res.status;
        else
            return 200;
    };
    /**
     *```JS
     *	// Save the world
     *	pal.save();
     *```
     */
    saveWorld = async () => {
        let res = await fetch(`${this.URL}/save`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${this.authorization}`,
            },
        });
        if (res.status !== 200)
            return res.status;
        else
            return 200;
    };
    /**
     *
     * @param waitTime Time in seconds
     * @param message
     * @returns
     *
     *```JS
     *	// shut down the server
     *	pal.shutDown(10 /*Seconds*\/, "For reasons");
     *```
     */
    shutDown = async (waitTime, message) => {
        let res = await fetch(`${this.URL}/shutdown`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${this.authorization}`,
            },
            body: JSON.stringify({ waittime: waitTime, message: message }),
        });
        if (res.status !== 200)
            return res.status;
        else
            return 200;
    };
    /**
     *
     *```JS
     *	// Force stop the server
     *	pal.stop();
     *```
     */
    stop = async () => {
        let res = await fetch(`${this.URL}/stop`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${this.authorization}`,
            },
        });
        if (res.status !== 200)
            return res.status;
        else
            return 200;
    };
}
exports.PalWrapper = PalWrapper;
