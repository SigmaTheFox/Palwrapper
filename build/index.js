"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalWrapper = void 0;
class PalWrapper {
    URL;
    authorization;
    constructor(adminPassword, { serverIP, APIPort = 8212, endpointVersion = 'v1', }) {
        this.authorization = btoa('admin:' + adminPassword);
        this.URL = `http://${serverIP}:${APIPort}/${endpointVersion}/api`;
    }
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
