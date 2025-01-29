import {Metadata} from "next";
import ServerCredentialsForm from "@/app/ui/forms/server-credentials-form";
import AnnouncementForm from "@/app/ui/forms/announcement-form";
import PlayerList from "@/app/ui/player-list";
import BanList from "@/app/ui/ban-list";

export const metadata: Metadata = {};

export default function Home() {
  return (
      <>
          <div className="flex flex-col items-center justify-start min-h-screen pt-10">
              <h1 className="text-4xl font-bold text-gray-200">Motor City Admin Tool</h1>
              <p className="text-sm text-gray-300 pt-4">By ZenJakey</p>
              <div className="grid grid-cols-1 md:grid-cols-12 w-full mt-8 items-start">
                  <div className="md:col-span-3 p-4 ml-2 mr2 rounded-md">
                      <div className="text-center text-gray-300">
                          <ServerCredentialsForm/>
                      </div>

                      <div className="text-center text-gray-300 pt-10">
                          <AnnouncementForm/>
                      </div>
                  </div>
                  <div className="md:col-span-4 bg-foreground text-center text-gray-300 p-4 ml-2 mr-2 rounded-md">
                      Player list
                      <PlayerList/>
                  </div>
                  <div className="md:col-span-4 bg-foreground text-center text-gray-300 p-4 ml-2 mr-2 rounded-md">
                      Ban list
                      <BanList/>
                  </div>
              </div>
          </div>
      </>
  );
}
