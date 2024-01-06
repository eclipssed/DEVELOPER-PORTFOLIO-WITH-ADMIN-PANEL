import connectMongoDB from "@/db/connectMongoDB";
import User from "../../../models/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connectMongoDB();

export async function POST(req) {
  const { username, email, password } = await req.json();
  try {
    console.log(username, email, password);
    const userFound = await User.findOne({ username });
    if (userFound) {
      const validEmail = email === userFound.email;
      if (userFound) {
        const validPassword = await bcrypt.compare(
          password,
          userFound.password
        );

        if (validPassword) {
          const tokenData = {
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
          };
          const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
            expiresIn: "6h",
          });
          const response = NextResponse.json({
            status: 200,
            message: "login successful",
          });
          response.cookies.set("token", token, {
            httpOnly: true,
          });
          return response;
        } else {
          return NextResponse.json({
            status: 400,
            message: "invlaid credentials.",
          });
        }
      } else {
        return NextResponse.json({
          status: 400,
          message: "invlaid credentials.",
        });
      }
    }

    return NextResponse.json({ status: 400, message: "Not a valid user" });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong please try again later.",
    });
  }
}

// export async function POST(req) {
//   try {
//     const { username, email, password } = await req.json();

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     console.log("saved to db");

//     return NextResponse.json({ status: 200, newUser });
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// }
