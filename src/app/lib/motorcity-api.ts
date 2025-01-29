'use server';

import {Player} from "@/app/lib/definitions";
import axios from 'axios';

export async function fetchJsonData(url: string) {
    try {
        console.log(`GET ${url}`)
        return await axios.get(url);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

export async function postRequest(url: string){
    try {
        console.log(`POST ${url}`)
        const response = await axios.post(url);
        return response.data;
    } catch (error) {
        console.error('Error posting JSON data:', error);
        throw error;
    }
}

export async function getPlayerList(address: string, apiPassword: string): Promise<Player []> {
    if (!address || !apiPassword) {return []}
    const url = `http://${address}/player/list/?password=${apiPassword}`
    const response = await fetchJsonData(url)
    if(!response) return []

    return Object.values(response.data.data).map(entry => ({
        name: entry.name,
        uid: entry.unique_id
    }));
}

export async function getBanList(address: string, apiPassword: string): Promise<Player []> {
    if (!address || !apiPassword) {return []}
    const url = `http://${address}/player/banlist/?password=${apiPassword}`
    const response = await fetchJsonData(url)
    if(!response) return []

    return Object.values(response.data.data).map(entry => ({
        name: entry.name,
        uid: entry.unique_id
    }));
}

export async function getPlayerCount(address: string, apiPassword: string): Promise<number> {
    if (!address || !apiPassword) {return 0}
    const url = `http://${address}/player/count/?password=${apiPassword}`
    const response = await fetchJsonData(url)
    console.log(response?.data)
    return 0
}

export async function kickPlayer(address: string, apiPassword: string, player: Player) {
    const url = `http://${address}/player/kick/?password=${apiPassword}&unique_id=${player.uid}`
    await postRequest(url)
}

export async function banPlayer(address: string, apiPassword: string, player: Player) {
    const url = `http://${address}/player/ban/?password=${apiPassword}&unique_id=${player.uid}`
    await postRequest(url)
}

export async function unbanPlayer(address: string, apiPassword: string, player: Player) {
    const url = `http://${address}/player/unban/?password=${apiPassword}&unique_id=${player.uid}`
    await postRequest(url)
}

export async function sendAnnouncement(address: string, apiPassword: string, message: string) {
    const url = `http://${address}/chat/?password=${apiPassword}&message=${message}`
    await postRequest(url)
}
