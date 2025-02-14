'use client'
import {Player} from "@/app/lib/definitions";
import {getPlayerList} from "@/app/lib/motorcity-api";
import {BanButton, KickButton} from "@/app/ui/buttons/buttons";
import {useEffect, useState} from "react";
import {useServerCredentials} from "@/app/context/server-credentials-context";

export default function PlayerList() {
    const [players, setPlayers] = useState<Player[]>([]);
    const {serverIp, apiPassword} = useServerCredentials();

    useEffect(() => {
        const fetchPlayers = async () => {
            const playerData = await getPlayerList(serverIp, apiPassword);
            setPlayers(playerData);
        };

        fetchPlayers();
        const interval = setInterval(fetchPlayers, 1000); // Refresh every 5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [serverIp, apiPassword]); // Depend on serverIp and apiPassword to prevent constant updates

    return (
        <div className="overflow-y-auto max-h-96">
            <table className="w-full table-fixed divide-y divide-gray-200">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {players.map((player, index) => (
                    <tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-listColor1" : "bg-listColor2"}`}
                    >
                        <td className="text-gray-50">{player.name}</td>
                        <td className="text-right">
                            <div className="flex justify-end space-x-2">
                                <KickButton player={player}/>
                                <BanButton player={player}/>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
