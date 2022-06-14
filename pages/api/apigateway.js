import { server } from "../../config";

export default async function handler(req, res) {
	const APIEND = req.headers["apiend"];

	switch (APIEND) {
		case "login":
			try {
				let response = await fetch(`${server}/api/microservices/login/login/`, {
					method: "POST",
					headers: req.headers,
					body: JSON.stringify(req.body),
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				res.status(401).send(err);
			}

			break;

		case "users":
			try {
				let response = await fetch(`${server}/api/microservices/users/users/`, {
					method: "GET",
					headers: req.headers,
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				res.status(401).send("not authorized");
			}

			break;

		case "updateUser":
			try {
				let response = await fetch(`${server}/api/microservices/users/users/`, {
					method: "PUT",
					headers: req.headers,
					body: JSON.stringify(req.body),
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}

			break;

		case "accounts":
			try {
				let response = await fetch(
					`${server}/api/microservices/accounts/accounts/`,
					{
						method: "GET",
						headers: req.headers,
					}
				);
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}

			break;

		default:
			return null;
	}
}
