import datetime
import hashlib

id = 1876
# Get the current date and time without the seconds
now = datetime.datetime.now()
date_time = now.strftime("%Y-%m-%d %H:%M")
# Convert the date and time string to a datetime object
date_time_obj = datetime.datetime.strptime(date_time, "%Y-%m-%d %H:%M")
# Convert the datetime object to a timestamp in seconds
timestamp_seconds = date_time_obj.timestamp()
# Multiply the timestamp by 1000 to convert it to milliseconds
# then  add 18000000 to match with nodejs date
timestamp_milliseconds = timestamp_seconds * 1000 + 18000000
# convert to int
timestamp_milliseconds = int(timestamp_milliseconds)
# create hashString by adding cancating id and timestamp_milliseconds with ','
combinedString = str(id) +','+ str(timestamp_milliseconds)
# Encode the string to bytes
string_bytes = combinedString.encode()
# Create a SHA-256 hash object
hash_object = hashlib.sha256()
# Update the hash object with the string bytes
hash_object.update(string_bytes)
# Get the hash digest as a hexadecimal string
hash_hex = hash_object.hexdigest()
# Get first 4 characters of the hash to create the hex
hexCode = hash_hex[:6]
# Convert the hexadecimal string to bytes
code = str(int(hexCode, 16))[:6]
print(code) 