import type { PalServerType, PalPlayerType, PalSettingsType, PalServerMetricsType, PalResponseStatusType, SteamUserIdType } from './types/types';
export declare class PalWrapper {
    URL: string;
    private authorization;
    constructor(adminPassword: string, { serverIP, APIPort, endpointVersion, }: {
        serverIP: string;
        APIPort?: number;
        endpointVersion: string;
    });
    getServerInfo: () => Promise<PalServerType | PalResponseStatusType>;
    getPlayers: () => Promise<PalPlayerType | PalResponseStatusType>;
    getSettings: () => Promise<PalSettingsType | PalResponseStatusType>;
    getServerMetrics: () => Promise<PalServerMetricsType | PalResponseStatusType>;
    /**
     *
     * @param message Message to send to the server
     * @returns
     */
    announceMessage: (message: string) => Promise<PalResponseStatusType>;
    /**
     *
     * @param userId The Steam user Id of the user to unban
     * @param message The kick reason
     * @returns
     */
    kickPlayer: (userId: SteamUserIdType, message?: string) => Promise<PalResponseStatusType>;
    /**
     *
     * @param userId The Steam user Id of the user to unban
     * @param message The ban reason
     * @returns
     */
    banPlayer: (userId: SteamUserIdType, message?: string) => Promise<PalResponseStatusType>;
    /**
     *
     * @param userId The Steam user Id of the user to unban
     * @returns
     */
    unbanPlayer: (userId: SteamUserIdType) => Promise<PalResponseStatusType>;
    saveWorld: () => Promise<PalResponseStatusType>;
    /**
     *
     * @param waitTime Time in seconds
     * @param message
     * @returns
     */
    shutDown: (waitTime: number, message?: string) => Promise<PalResponseStatusType>;
    stop: () => Promise<PalResponseStatusType>;
}
//# sourceMappingURL=index.d.ts.map