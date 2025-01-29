'use client'
import {Player} from "@/app/lib/definitions";
import {getBanList} from "@/app/lib/motorcity-api";
import {UnbanButton} from "@/app/ui/buttons/buttons";
import {useEffect, useState} from "react";
import {useServerCredentials} from "@/app/context/server-credentials-context";

export default function PlayerList() {
    const [players, setPlayers] = useState<Player[]>([]);
    const {serverIp, apiPassword} = useServerCredentials();

    useEffect(() => {
        const fetchPlayers = async () => {
            const fetchedPlayers = await getBanList(serverIp, apiPassword);
            setPlayers(fetchedPlayers);
        };

        fetchPlayers();
        const interval = setInterval(fetchPlayers, 1000);

        return () => clearInterval(interval);
    }, [serverIp, apiPassword]);

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
                            <UnbanButton player={player}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
