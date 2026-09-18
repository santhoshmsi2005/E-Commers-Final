// const { RegisterService } = require("../../services/users/RegisterService");

// const RegisterController = async (req, res) => {
//     try {

//         const data = req.body;

//         const newUser = await RegisterService(data);

//         res.status(201).json({ message: "Registration Successfull", data: newUser });

//     } catch (error) {
//         if (error.message === "Email already exists") {
//             return res.status(400).json({ message: error.message });
//         }
//         return res.status(500).json({ message: "Internal server error" });
//     }
// }

// module.exports = {
//     RegisterController
// }