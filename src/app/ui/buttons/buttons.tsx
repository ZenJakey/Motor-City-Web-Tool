'use client'

import {Player} from "@/app/lib/definitions";
import {banPlayer, kickPlayer, unbanPlayer} from "@/app/lib/motorcity-api";
import {useServerCredentials} from "@/app/context/server-credentials-context";

export function KickButton({player}: { player: Player }) {
    const { serverIp, apiPassword } = useServerCredentials();
    if (!serverIp || !apiPassword) {
        return
    }

    const handleKick = () => {
        kickPlayer(serverIp, apiPassword, player);
    };

    return (
        <button
            type="button"
            onClick={handleKick}
            className="mr-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Kick
        </button>
    );
}

export function BanButton({player}: { player: Player }) {
    const { serverIp, apiPassword } = useServerCredentials();
    if (!serverIp || !apiPassword) {
        return;
    }

    const handleBan = () => {
        banPlayer(serverIp, apiPassword, player);
    }
    return (
        <button
            type="button"
            onClick={handleBan}
            className="mr-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Ban
        </button>
    );
}

export function UnbanButton({player}: { player: Player }) {
    const { serverIp, apiPassword } = useServerCredentials();
    if (!serverIp || !apiPassword) {
        return
    }
    const handleUnban = () => {
        unbanPlayer(serverIp, apiPassword, player)
    }
    return (
        <button
            type="button"
            onClick={handleUnban}
            className="mr-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Unban
        </button>
    );
}
