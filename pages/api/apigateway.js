import { server } from "../../config";

export default async function handler(req, res) {
	const APIEND = req.headers["apiend"];

	switch (APIEND) {
		case "login":
			try {
				let response = await fetch(`${server}/api/login/login/`, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(req.body),
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}

			break;
		case "register":
			try {
				let response = await fetch(`${server}/api/register/register/`, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(req.body),
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "getAllAccounts":
			try {
				let response = await fetch(`${server}/api/admin/getAllAccounts/`, {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "getAllUsers":
			try {
				let response = await fetch(`${server}/api/admin/getAllUsers/`, {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "getNewUsers":
			try {
				let response = await fetch(`${server}/api/admin/getNewUsers/`, {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "rechargingAmount":
			try {
				let response = await fetch(`${server}/api/admin/rechargingAmount/`, {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "transactionsLastMonth":
			try {
				let response = await fetch(
					`${server}/api/admin/transactionsLastMonth/`,
					{
						method: "GET",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
					}
				);
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "transferAmount":
			try {
				let response = await fetch(`${server}/api/admin/transferAmount/`, {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "withDrawAmount":
			try {
				let response = await fetch(`${server}/api/admin/withDrawAmount/`, {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "updateUserStatus":
			try {
				let response = await fetch(`${server}/api/admin/updateUserStatus/`, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(req.body),
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "createNewAccount":
			try {
				let response = await fetch(`${server}/api/user/createNewAccount/`, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(req.body),
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "editUserProfile":
			try {
				let response = await fetch(`${server}/api/user/editUserProfile/`, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(req.body),
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "getUserAccounts":
			try {
				let response = await fetch(`${server}/api/user/getUserAccounts/`, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(req.body),
				});
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		//get user transactions waiting for function complete
		case "totalMoneyInAccounts":
			try {
				let response = await fetch(`${server}/api/user/totalMoneyInAccounts/`, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(req.body),
				});
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
