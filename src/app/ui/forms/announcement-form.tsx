'use client'
import {useState} from "react";
import {sendAnnouncement} from "@/app/lib/motorcity-api";
import {useSearchParams} from "next/navigation";

export default function AnnouncementForm() {
    const [announcement, setAnnouncement] = useState(""); // State to hold the input value
    const searchParams = useSearchParams(); // Moved hook call inside the component body

    const handleSend = async () => {
        if (!announcement) {
            alert("Please enter an announcement."); // Validate input
            return;
        }

        try {
            const params = new URLSearchParams(searchParams.toString());
            const serverIp = params.get("serverip");
            const apiPassword = params.get("apiPassword");
            if (!serverIp || !apiPassword) {
                return;
            }
            await sendAnnouncement(serverIp, apiPassword, announcement); // Call the function
            alert("Announcement sent successfully!"); // Notify success
            setAnnouncement(""); // Clear the input
        } catch (error) {
            console.error("Failed to send announcement:", error);
            alert("Failed to send announcement."); // Notify failure
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-foreground rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault() /* Prevent form submission */}>
                <div>
                    <label htmlFor="announcement" className="block text-sm font-medium text-gray-50">
                        Announcement
                    </label>
                    <input
                        type="text"
                        id="announcement"
                        name="announcement"
                        value={announcement} // Bind state
                        onChange={(e) => setAnnouncement(e.target.value)} // Update state on input
                        placeholder="Send an announcement"
                        className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={handleSend} // Attach function to button click
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
