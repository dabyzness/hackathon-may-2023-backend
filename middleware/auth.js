import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

const SECRET = process.env.SECRET;

async function auth(req, res, next) {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error("Unauthorized access");
    }

    const decoded = jwt.verify(token, SECRET);

    req.token = decoded;

    next();
  } catch (error) {
    res.status(401).send(error);
  }
}

async function encryptPassword(req, res, next) {
  const { password } = req.body?.user;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  req.body.user.password = hashedPassword;
  next();
}

// const decodeUserFromToken = (req, res, next) => {
//   let token = req.get("Authorization") || req.query.token || req.body.token;
//   if (token) {
//     token = token.replace("Bearer ", "");
//     jwt.verify(token, SECRET, (err, decoded) => {
//       if (err) {
//         next(err);
//       } else {
//         req.user = decoded.user;
//         next();
//       }
//     });
//   } else {
//     next();
//   }
// };

// function checkAuth(req, res, next) {
//   return req.user ? next() : res.status(401).json({ msg: "Not Authorized" });
// }

export { auth, encryptPassword };
