const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const LoginService = async (data) => {
    try {

        const isUserExist = await prisma.users.findUnique({
            where: {
                email: data.email,
            }
        })

        if (!isUserExist) {
            throw new Error("User does not exist");
        }

        const isMatch = await bcrypt.compare(data.password, isUserExist.password);

        if (!isMatch) {
            throw new Error("Invalid password");
        }

        const temp_token = jwt.sign({ id: isUserExist.id, email: isUserExist.email, role: isUserExist.role },
            process.env.JWT_ACCESS_SECRET, { expiresIn: "1h" });

        const main_token = jwt.sign({id: isUserExist.id, email: isUserExist.email, role: isUserExist.role}, 
            process.env.JWT_REFRESH_SECRET, {expiresIn: "1d"});

        const { password, ...userWithoutPassword } = isUserExist;

        return {
            token: {
                temp_token,
                main_token
            },
            user: userWithoutPassword,
            message: "Login Successfull"
        }
    } catch (error) {
        throw error;
    }
}

const refreshService = async (data) => {
    try {

        const decoded = jwt.verify(data.main_token, process.env.JWT_REFRESH_SECRET);

        const temp_token = jwt.sign(
            {
                id: decoded.id,
                email: decoded.email,
                role: decoded.role,
            },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: "1h" }
        );

        return {
            token: {
                temp_token,
            },
            message: "Token refreshed successfully",
        };

    } catch (error) {
        throw new Error("Invalid or Expired Refresh Token");
    }
};

const RegisterService = async (data) => {
    try {

        const isUserExist = await prisma.users.findUnique({
            where: {
                email: data.email,
            }
        })

        if (isUserExist) {
            throw new Error("User already exist");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await prisma.users.create({
            data: {
                email: data.email,
                password: hashedPassword,
                name: data.name,
                role: data.role,
            }
        })

        return {
            user,
            message: "User registered successfully"
        }
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

const LogoutService = async () => {
    return {
        success: true,
        message: "Logout successful"
    }
}

module.exports = {
    LoginService,
    refreshService,
    RegisterService,
    LogoutService
}