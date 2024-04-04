import type { PalServerType, PalPlayerType, PalSettingsType, PalServerMetricsType } from './types/types';
export declare class PalWrapper {
    URL: string;
    private authorization;
    constructor(adminPassword: string, { serverIP, APIPort, endpointVersion, }: {
        serverIP: string;
        APIPort?: number;
        endpointVersion: string;
    });
    getServerInfo: () => Promise<PalServerType>;
    getPlayers: () => Promise<PalPlayerType>;
    getSettings: () => Promise<PalSettingsType>;
    getServerMetrics: () => Promise<PalServerMetricsType>;
    announceMessage: (message: string) => Promise<number>;
    kickPlayer: (userId: string, message?: string) => Promise<number>;
    banPlayer: (userId: string, message?: string) => Promise<number>;
    unbanPlayer: (userId: string) => Promise<number>;
    saveWorld: () => Promise<number>;
    shutDown: (waitTime: number, message: string) => Promise<number>;
    stop: () => Promise<number>;
}
//# sourceMappingURL=index.d.ts.map