import { server } from "../../config";
const { updateNotifications } = require("../api/userRoutes");


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
				res.send(err);
				console.log(err);
			}

			break;
		case "register":
			try {
				let response = await fetch(
					`${server}/api/microservices/register/register/`,
					{
						method: "POST",
						headers: req.headers,
						body: JSON.stringify(req.body),
					}
				);
				const data = await response.json();
				if (data.fullname && data._id) {
					updateNotifications({ accID: data.fullname, userID: data._id });
				}
				console.log({ data })
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "getAllAccounts":
			try {
				let response = await fetch(
					`${server}/api/microservices/admin/getAllAccounts/`,
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
		case "getAllUsers":
			try {

				let response = await fetch(
					`${server}/api/microservices/admin/getAllUsers/`,
					{
						method: "GET",
						headers: req.headers,
					}
				);
				const data = await response.json();

				res.status(200).json(data);
			} catch (err) {
				console.log('error is', err);
			}
			break;
		case "getNewUsers":
			try {
				let response = await fetch(
					`${server}/api/microservices/admin/getNewUsers/`,
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
		case "rechargingAmount":
			try {
				let response = await fetch(
					`${server}/api/microservices/admin/rechargingAmount/`,
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
		case "transactionsLastMonth":
			try {
				let response = await fetch(
					`${server}/api/microservices/admin/transactionsLastMonth/`,
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
		case "transferAmount":
			try {
				let response = await fetch(
					`${server}/api/microservices/admin/transferAmount/`,
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
		case "withDrawAmount":
			try {
				let response = await fetch(
					`${server}/api/microservices/admin/withDrawAmount/`,
					{
						method: "GET",
						headers: req.headers,
					}
				);
				const data = await response.json();
				res.send(data);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "updateUserStatus":
			try {
				let response = await fetch(
					`${server}/api/microservices/admin/updateUserStatus/`,
					{
						method: "POST",
						headers: req.headers,
						body: JSON.stringify(req.body),
					}
				);
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "updateAccountStatus":
			try {
				let response = await fetch(
					`${server}/api/microservices/admin/updateAccountStatus/`,
					{
						method: "POST",
						headers: req.headers,
						body: JSON.stringify(req.body),
					}
				);
				const data = await response.json();
				res.send(data);
				console.log("data", data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "createNewAccount":
			try {
				let response = await fetch(
					`${server}/api/microservices/user/createNewAccount/`,
					{
						method: "POST",
						headers: req.headers,
						body: JSON.stringify(req.body),
					}
				);
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "editUserProfile":
			try {
				let response = await fetch(
					`${server}/api/microservices/user/editUserProfile/`,
					{
						method: "POST",
						headers: req.headers,
						body: JSON.stringify(req.body),
					}
				);
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		case "getUserAccounts":
			try {
				let response = await fetch(
					`${server}/api/microservices/user/getUserAccounts/`,
					{
						method: "POST",
						headers: req.headers,
						body: JSON.stringify(req.body),
					}
				);
				const data = await response.json();
				res.send(data);
			} catch (err) {
				console.log(err);
			}
			break;
		//get user transactions waiting for function complete
		case "totalMoneyInAccounts":
			try {
				let response = await fetch(
					`${server}/api/microservices/user/totalMoneyInAccounts/`,
					{
						method: "POST",
						headers: req.headers,
						body: JSON.stringify(req.body),
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
<nav>
	<ul>
		<li></li>
	</ul>
</nav>;
