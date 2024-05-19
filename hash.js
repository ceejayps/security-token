const crypto = require("crypto");
const tokenId = 1876;

// Get the current date and time
let now = new Date();

// Format the date and time
let options = {
  timeZone: "America/New_York", // You can change this to the desired US timezone
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true, // Use 12-hour clock format
};

// Get the formatted date and time string

const genr8Code = (id) => {
  let formattedTime = now.toLocaleString("en-US", options);
  // Get the current time without seconds
  const time = formattedTime;
  console.log(time);
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
  return code.toString().substring(0, 6);
};

console.log(genr8Code(tokenId));
