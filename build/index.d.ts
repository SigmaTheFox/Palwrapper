import type { PalServerType, PalPlayerType, PalSettingsType, PalServerMetricsType, PalResponseStatusType, SteamUserIdType, PalWrapperOptionsType } from './types/types';
export declare class PalWrapper {
    URL: string;
    private authorization;
    /**
     * @param adminPassword The server's admin password
     * @param options
     *
     *```JS
     *	new PalWrapper("AdminPassword", {
     *		serverIP: "127.0.0.1", // Default
     *		APIPort: 8212, // Default
     *		endpointVersion: "v1" // Default
     *	})
     *```
     */
    constructor(adminPassword: string, options?: PalWrapperOptionsType);
    /**
     *```JS
     *	// Get the server name, description and version
     *	pal.getServerInfo()
     *		.then(server => console.log(server));
     *```
     */
    getServerInfo: () => Promise<PalServerType | PalResponseStatusType>;
    /**
     *```JS
     * // List all currently online players
     * 	pal.getPlayers()
     * 		.then(players => console.log(players));
     *```
     */
    getPlayers: () => Promise<PalPlayerType | PalResponseStatusType>;
    /**
     *```JS
     *	// List all server settings
     *	pal.getSettings()
     *		.then(settings => console.log(settings));
     *```
     */
    getSettings: () => Promise<PalSettingsType | PalResponseStatusType>;
    /**
     *
     *```JS
     *	// Get server FPS, current and max player count, frametime and uptime
     *	pal.getServerMetrics()
     * 		.then(metrics => console.log(metrics));
     *```
     */
    getServerMetrics: () => Promise<PalServerMetricsType | PalResponseStatusType>;
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
    announceMessage: (message: string) => Promise<PalResponseStatusType>;
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
    kickPlayer: (userId: SteamUserIdType, message?: string) => Promise<PalResponseStatusType>;
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
    banPlayer: (userId: SteamUserIdType, message?: string) => Promise<PalResponseStatusType>;
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
    unbanPlayer: (userId: SteamUserIdType) => Promise<PalResponseStatusType>;
    /**
     *```JS
     *	// Save the world
     *	pal.save();
     *```
     */
    saveWorld: () => Promise<PalResponseStatusType>;
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
    shutDown: (waitTime: number, message?: string) => Promise<PalResponseStatusType>;
    /**
     *
     *```JS
     *	// Force stop the server
     *	pal.stop();
     *```
     */
    stop: () => Promise<PalResponseStatusType>;
}
//# sourceMappingURL=index.d.ts.map