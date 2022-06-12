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
    default:
      return null;
  }
}