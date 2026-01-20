import Server from "./Server/Server.js";
import SocketServer from "./Server/plugins/SocketServer/SocketServer.js";
import LiveReload from "./Server/plugins/SocketServer/LiveReload.js";
import Directory from "./Server/plugins/Directory.js";

SocketServer.use(LiveReload);
Server.use(SocketServer);
Server.use(Directory);

new Server();