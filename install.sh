#!/bin/bash

# Step 1: Fetch data from Notion table
NOTION_URL="https://notion.cystack.workers.dev/v1/table/81583cba4cae44ba906a4bc12c4007cf"
DATA=$(curl -s "$NOTION_URL")

if [ -z "$DATA" ]; then
  echo "Failed to fetch data from Notion. Exiting."
  exit 1
fi

# Step 2: Determine system architecture
ARCH=$(uname -m)
TAG=""
if [ "$ARCH" = "arm64" ]; then
  TAG="mac-arm64"
elif [ "$ARCH" = "x86_64" ]; then
  TAG="mac-x64"
else
  echo "Unsupported architecture: $ARCH. Exiting."
  exit 1
fi

# Step 3: Parse data to find the Link with the correct Tag
LINK=$(echo "$DATA" | awk -v tag="$TAG" '
  BEGIN { RS = ","; FS = "\"" }
  /"Tag"/ { gsub(/"| /, "", $4); tag_value = $4 }
  /"Link"/ { gsub(/"| /, "", $4); link_value = $4 }
  tag_value == tag { print link_value; exit }
')

if [ -z "$LINK" ]; then
  echo "No matching file found for tag $TAG. Exiting."
  exit 1
fi

# Step 4: Download the file
FILE_NAME="lockerpm.pkg"

echo "Downloading pkg from $LINK"

curl -o "$FILE_NAME" "$LINK" -LS
if [ $? -ne 0 ]; then
  echo "Failed to download file from $LINK. Exiting."
  exit 1
fi

# Step 5: Open the downloaded file
open "$FILE_NAME"

# Step 6: Monitor when the file is closed, then delete it (if possible)
echo "Waiting for the installer to close..."
sleep 5

while pgrep -x "Installer" > /dev/null; do
  sleep 1
done

rm -f "$FILE_NAME"
echo "Temporary file deleted."
