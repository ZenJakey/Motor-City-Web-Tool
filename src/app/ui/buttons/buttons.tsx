'use client'

import {Player} from "@/app/lib/definitions";
import {banPlayer, kickPlayer, unbanPlayer} from "@/app/lib/motorcity-api";
import {useSearchParams} from "next/navigation";

export function GetParams() {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const serverIp = params.get("serverip");
    const apiPassword = params.get("apiPassword");
    return {serverIp, apiPassword}
}

export function KickButton({player}: { player: Player }) {
    const {serverIp, apiPassword} = GetParams()
    if (!serverIp || !apiPassword) {
        return
    }

    const kick = kickPlayer.bind(null, serverIp, apiPassword, player)
    return (
        <form action={kick}>
            <button
                type="submit"
                className="mr-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Kick
            </button>
        </form>
    );
}

export function BanButton({player}: { player: Player }) {
    const {serverIp, apiPassword} = GetParams()
    if (!serverIp || !apiPassword) {
        console.log("Early exit");
        return;
    }

    const ban = banPlayer.bind(null, serverIp, apiPassword, player)
    return (
        <form action={ban}>
            <button
                type="submit"
                className="mr-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Ban
            </button>
        </form>
    );
}

export function UnbanButton({player}: { player: Player }) {
    const {serverIp, apiPassword} = GetParams()
    if (!serverIp || !apiPassword) {
        return
    }
    const unban = unbanPlayer.bind(null, serverIp, apiPassword, player)
    return (
        <form action={unban}>
            <button
                type="submit"
                className="mr-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Unban
            </button>
        </form>
    );
}
