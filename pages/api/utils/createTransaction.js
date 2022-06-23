import { server } from "../../../config.js";

export default async function CreateTransaction(req,res) {

  try {
    let response = await fetch(
      `${server}/api/microservices/user/createTransaction/`,
      {
        method: "POST",
        headers: req.headers,
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    console.log(data);
    // res.send(data);
  } catch (err) {
    // res.send(err);
    console.log(err);
  }
}
