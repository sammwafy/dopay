const { nanoid } = require("nanoid");
const UserModel = require("../../models/userModel");
const sse = require("../api/sse");

const getUserService = async () => {
   try {
      const users = await UserModel.find();
      const _length = users.length;
      const message = _length === 0 ? "Not found" : "success";
      const error = _length === 0 ? true : false;
      const statusCode = _length === 0 ? 404 : 200;
      return { data: users, error, message, statusCode };
   } catch (error) {
      return {
         data: [],
         error: true,
         message: "Sorry an error occurred",
         statusCode: 500,
      };
   }
};

const createUserService = async (user) => {
   try {
      const _user = await UserModel.create(user);
      return { data: [_user], error: false, message: "success", statusCode: 200 };
   } catch (error) {
      return {
         data: [],
         error: true,
         message: "Sorry an error occurred",
         statusCode: 500,
      };
   }
};

const accountCreation = async (accID, userId) => {
   try {
      const user = await UserModel.findByIdAndUpdate(
         accID,
         { $push: { account: userId } },
         { new: true }
      );
      return { data: [user], error: false, message: "success", statusCode: 200 };
   } catch (error) {
      return {
         data: [],
         error: true,
         message: "Sorry an error occurred",
         statusCode: 500,
      };
   }
};

const createNotification = ({ accID, authorId, userId }) => {
   return {
      id: nanoid(),
      userId: authorId,
      title: `New account created by user ${userId}`,
      type: "user",
      meta: {
         id: accID,
      },
   };
};

const getUserController = async (req, res) => {
   const result = await getUserService();
   res.status(result.statusCode).json(result);
};

const createUserController = async (req, res) => {
   const body = req.body;
   const result = await createUserService(body);
   res.status(result.statusCode).json(result);
   if (!result.error) {
      //   emit user event
      sse.send(result.data[0], "user");
   }
};

const updateNotifications = async (req, res) => {
   const accID = req.params.id;
   const userId = req.body.userId;
   const result = await accountCreation(accID, userId);

   res.status(result.statusCode).json(result);
   if (!result.error) {
      const account = result.data[0];
      const data = { liker: userId, account };
      // emit account_creation event to all users
      sse.send(data, "account_creation");

      // send notification to the admin
      //NEEED WOOOOOORK
      if (account.userId !== userId) {
         const authorId = account.userId;
         const _notif = createNotification({ accID, userId, authorId });
         // emit notification_{userId} to the admin
         sse.send(_notif, `notification-${authorId}`);
      }
   }
};

module.exports = {
   getUserService,
   createUserService,
   accountCreation,
   createNotification,
   getUserController,
   createUserController,
   updateNotifications
};