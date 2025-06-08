import { v4 } from "uuid";
import Admin from "../models/admin.js";
import Client from "../models/client.js";
import User from "../models/user.js";

const registerUser = async (req, res) => {
  try {
    const uid = v4();
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
    await  User.create({
        email: email,
        password: password,
        role: role,
      });
      console.log(role);
      if (role === "Admin") {
        await Admin.create({
          phoneNumber: "1234567899",
          userId: uid,
        });
      } else if (role === "Client") {
        await Client.create({
          target: "",
          activity: "",
          userId: uid,
        });
      }

      res.status(200).json({ message: "User created" });
    } else {
      res.status(400).json({ message: "User already exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server Error" });
  }
};
export default registerUser;
