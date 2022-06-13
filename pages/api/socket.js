import { Server } from "Socket.IO";

const SocketHandler = (req, res) => {
	if (res.socket.server.io) {
		console.log("Socket is already running");
	} else {
		console.log("Socket is initializing");
		const io = new Server(res.socket.server);
		res.socket.server.io = io;

		io.on("connection", (socket) => {
			//listen to client through event "login" then send to all users who logged
			socket.on("login", (msg) => {
				io.emit("getNotification", msg);
			});
		});
	}
	res.end();
};

export default SocketHandler;
