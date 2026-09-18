// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const LoginService = async (data) => {
//     try {

//         const isUserExist = await prisma.users.findUnique({
//             where: {
//                 email: data.email,
//             }
//         })

//         if (!isUserExist) {
//             throw new Error("User does not exist");
//         }

//         const isMatch = await bcrypt.compare(data.password, isUserExist.password);

//         if (!isMatch) {
//             throw new Error("Invalid password");
//         }

//         const temp_token = jwt.sign({ id: isUserExist.id, email: isUserExist.email, role: isUserExist.role },
//             "E-comerce", { expiresIn: "1h" });

//         const main_token = jwt.sign({id: isUserExist.id, email: isUserExist.email, role: isUserExist.role}, 
//             "E-comerce", {expiresIn: "1d"});

//         const { password, ...userWithoutPassword } = isUserExist;

//         return {
//             token: {
//                 temp_token,
//                 main_token
//             },
//             user: userWithoutPassword,
//             message: "Login Successfull"
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// const refreshService = async (data) => {
//     try {

//         const decoded = jwt.verify(data.main_token, "E-comerce");

//         const temp_token = jwt.sign(
//             {
//                 id: decoded.id,
//                 email: decoded.email,
//                 role: decoded.role,
//             },
//             "E-comerce",
//             { expiresIn: "1h" }
//         );

//         return {
//             token: {
//                 temp_token,
//             },
//             message: "Token refreshed successfully",
//         };

//     } catch (error) {
//         throw new Error("Invalid or Expired Refresh Token");
//     }
// };

// module.exports = {
//     LoginService,
//     refreshService
// }