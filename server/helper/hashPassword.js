const bcrypt = require("bcrypt");
const salt = 10;

exports.hashPass = async (password) => {
    const hashPass = await bcrypt.hash(password, salt);
    return hashPass;

}