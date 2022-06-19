//const { getUserController, createUserController, updateNotifications } = require("../api/userService");
const { dbConnect } = require("../../db/middleware/mongodb");
//const { nanoid } = require("nanoid");
const UserModel = require("../../models/userModel");
const sse = require("../api/sse");

const adminID = '1234';

const createNotification = ({ accID, userID }) => {
   console.log("notif created");
   return {
      id: userID,
      userID: userID,
      title: `New account ${accID} created by user ${userID}`,
      type: "user",
      meta: {
         id: accID,
      },
   };
};

const updateNotifications = (accID, userID) => {
   // send notification to the admin
   //NEEED WOOOOOORK
   const _notif = createNotification({ accID, userID });
   const data = { liker: userID };
   // emit post_reaction event to all users
   sse.send(data, "new_account");
   // emit notification_{userId} to the admin
   sse.send(_notif, `notification-${adminID}`);
   console.log("Sent");
   if (userID === adminID) {

   }
};

// export default async function userCheck(req, res) {
//    await dbConnect().then(console.log("connected"));

//    if (req.method === "POST") {
//       //const cookies = req.cookies;
//       console.log("testing POST");

//       const { accID, userID } = req.body;

//       if (accID && userID) {
//          console.log("accID:");
//          console.log(accID);
//          console.log("UserId:");
//          console.log(userID);

//          updateNotifications({ accID, userID });
//          res.json("");
//       }
//       //res.json({});
//    } else if (req.method === "GET") {
//       res.json({});
//    } else {
//       res.status(422).send("req_method_not_supported");
//    }
// };

module.exports = { updateNotifications }
