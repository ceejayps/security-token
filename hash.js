const crypto = require("crypto");
const tokenId = 1876;

const genr8Code = (id) => {
  // Get the current time without seconds
  const time = new Date().toISOString().slice(0, 16);
  // Covert the ios string to time string
  const hashTime = Date.parse(time);
  // Combine the id and current time into a single string
  const combinedString = `${id},${hashTime}`;
  // Create a hash object using SHA-256
  const hash = crypto.createHash("sha256");
  // Hash the combined string
  hash.update(combinedString);
  // Get the hashed value in binary format
  const hashedBuffer = hash.digest();
  // Convert the binary data to a hexadecimal string
  const hashedString = hashedBuffer.toString("hex");
  // Get first 4 characters of the hash to create the hex
  const hexCode = hashedString.substring(0, 6);
  // Convert hexstring to decimal
  const code = parseInt(hexCode, 16);
  //return parseInt(code, 16);
  return code.toString().substring(0, 6)
};

console.log(genr8Code(tokenId));