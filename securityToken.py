import datetime
import hashlib

id = 1876
# Get the current date and time without the seconds
now = datetime.datetime.now()
date_time = now.strftime("%Y-%m-%d %H:%M")
# Convert the date and time string to a datetime object
date_time_obj = datetime.datetime.strptime(date_time, "%Y-%m-%d %H:%M")
# Convert date obj to a millisecs and add 300 minutes
hashTime = int(date_time_obj.timestamp() * 1000 + 18000000)
# create hashString by cancating id and hashTime with ','
combinedString = str(id) +','+ str(hashTime)
# Encode the string to bytes
string_bytes = combinedString.encode()
# Create a SHA-256 hash object
hash_object = hashlib.sha256()
# Update the hash object with the string bytes
hash_object.update(string_bytes)
# Get first 4 characters of hash digest as a hexadecimal string
hexCode = hash_object.hexdigest()[:6]
# Convert the hexadecimal string to bytes
code = str(int(hexCode, 16))[:6]
print(code) 