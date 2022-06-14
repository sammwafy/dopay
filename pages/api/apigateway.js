import { server } from "../../config";

export default async function handler(req, res) {
	const APIEND = req.headers["apiend"];

	// login
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

		// get all users (admin)
		case "users":
			try {
				let response = await fetch(`${server}/api/microservices/users/users/`, {
					method: "GET",
					headers: req.headers,
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				res.status(res.statusCode).send(err);
			}

			break;

		// update user (admin)
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

		// update bank accounts (admin)
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
