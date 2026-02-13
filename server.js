import Server from "./Server/Server.js";
import Directory from "./Server/plugins/Directory.js";

import SocketServer from "./Server/plugins/SocketServer/SocketServer.js";
import LiveReload from "./Server/plugins/SocketServer/LiveReload.js";
import Runtime from "./Server/plugins/SocketServer/Runtime.js";


SocketServer.on("new", () => {
	console.log("New socket server");
});
SocketServer.use(LiveReload);
SocketServer.use(Runtime);

Server.use(SocketServer);
Server.use(Directory);

new Server();