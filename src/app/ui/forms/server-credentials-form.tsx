'use client'; // Mark as client component because we are using hooks like useContext


import {useServerCredentials} from "@/app/context/server-credentials-context";
import {useState} from "react";

export default function ServerCredentialsForm() {
    const {setServerIp, setApiPassword} = useServerCredentials();
    const [tempServerIp, setTempServerIp] = useState<string>("");
    const [tempApiPassword, setTempApiPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setServerIp(tempServerIp);
        setApiPassword(tempApiPassword);
        // Logging for debugging purposes
        console.log('Server IP:', tempServerIp);
        console.log('API Password:', tempApiPassword);
        // Any additional logic, e.g., validating, connecting to a server, etc.
        alert('Server credentials saved!'); // Example feedback
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-foreground rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="serverip" className="block text-sm font-medium text-gray-50">
                        Server IP:Port
                    </label>
                    <input
                        type="text"
                        id="serverip"
                        name="serverip"
                        placeholder="127.0.0.1:8080"
                        className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={tempServerIp}
                        onChange={(e) => setTempServerIp(e.target.value)} // Temporarily update serverIp
                    />
                </div>
                <div>
                    <label htmlFor="apiPassword" className="block text-sm font-medium text-gray-50">
                        API Password
                    </label>
                    <input
                        type="password"
                        id="apiPassword"
                        name="apiPassword"
                        placeholder="Enter API password"
                        className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={tempApiPassword}
                        onChange={(e) => setTempApiPassword(e.target.value)} // Temporarily update apiPassword
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Connect
                    </button>
                </div>
            </form>
        </div>
    );
}
