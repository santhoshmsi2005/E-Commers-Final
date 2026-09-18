// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();
// const bcrypt = require("bcrypt");

// const RegisterService = async (data) => {
//     const isUsetExist = await prisma.users.findUnique({
//         where: {
//             email: data.email,
//         }
//     })

//     if (isUsetExist) {
//         throw new Error("Email already exists");
//     }

//     const hashedPassword = await bcrypt.hash(data.password, 10)

//     const newUser = await prisma.users.create({
//         data: {
//             name: data.name,
//             email: data.email,
//             password: hashedPassword,
//             role: data.role || "user",
//             avatar: data.avatar,
//             phone: data.phone,
//         }
//     })

//     const {password, ...userWithoutPassword} = newUser;
    
//     return userWithoutPassword
// }


// module.exports = {
//     RegisterService
// }