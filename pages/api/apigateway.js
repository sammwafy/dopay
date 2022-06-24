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
        console.log("error is", err);
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
    case "rechargeAmount":
      try {
        let response = await fetch(
          `${server}/api/microservices/user/rechargeMoney/`,
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
    case "withdrawAmount":
      try {
        let response = await fetch(
          `${server}/api/microservices/user/withdrawAmount`,
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
    case "pay":
      try {
        let response = await fetch(
          `${server}/api/microservices/user/payToAccount`,
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
    case "transfer":
      try {
        let response = await fetch(
          `${server}/api/microservices/user/transferToAccount`,
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
