const crypto = require("crypto");
const tokenId = 1876;

let now = new Date();
console.log(now);

// Create options for New York timezone
let options = { timeZone: "America/New_York" };

// Use Intl.DateTimeFormat to get the parts of the date in New York timezone
let formatter = new Intl.DateTimeFormat("en-US", {
  ...options,
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

// Convert to parts
let parts = formatter.formatToParts(now);

// Extract the parts
let year = parts.find((part) => part.type === "year").value;
let month = parts.find((part) => part.type === "month").value;
let day = parts.find((part) => part.type === "day").value;
let hour = parts.find((part) => part.type === "hour").value;
let minute = parts.find((part) => part.type === "minute").value;
let second = parts.find((part) => part.type === "second").value;

// Create a new date object in New York timezone

console.log(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
let newYorkDate = new Date(
  `${year}-${month}-${day}T${hour}:${minute}:${second}`
);

// Log the new date object

// Get the formatted date and time string

const genr8Code = (id) => {
  // Get the current time without seconds
  const time = `${year}-${
    month < 10 ? "0" + month : month
  }-${day}T${hour}:${minute}:00.000Z`;
  console.log(time);
  // Covert the ios string to time string
  const hashTime = Date.parse(time);
  console.log({ hashTime });
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
  // Convert hexstring to decimala
  const code = parseInt(hexCode, 16);
  //return parseInt(code, 16);
  return code.toString().substring(0, 6);
};

console.log(genr8Code(tokenId));
