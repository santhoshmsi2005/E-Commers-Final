
// const { LoginService, refreshService } = require("../../services/users/LoginServices");

// const LoginController = async (req, res) => {
//     try {
//         const data = req.body;

//         const result = await LoginService(data);

//         // res.cookie("temp_token", result.token.temp_token, {
//         //     httpOnly: true,
//         //     secure: true,
//         //     sameSite: "strict",
//         //     maxAge: 60 * 60 * 1000
//         // });

//         // res.cookie("main_token", result.token.main_token, {
//         //     httpOnly: true,
//         //     secure: true,
//         //     sameSite: "strict",
//         //     maxAge: 60 * 60 * 24 * 1000
//         // });

//         res.status(201).json(result);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// const refreshController = async (req, res) => {
//     try {
//         const data = req.body
//         const new_token = await refreshService(data);
//         res.status(200).json(new_token);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// module.exports = {
//     LoginController,
//     refreshController
// }