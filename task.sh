#!/bin/bash

arr[0]="bot: 👋 Hello Github..!"
arr[1]="bot: 🥳 Horee Update Baru Lagi Gaes"
arr[2]="bot: 😬 Working from github."
arr[3]="bot: 👨‍💻 Work, work, work!"
arr[4]="bot: 😪 Hufft Error..."
arr[5]="bot: 😎 I'm Runtime!"
arr[6]="bot: 🙄 Running task, again."
arr[7]="bot: 👻 Thanks master."

rand=$[$RANDOM % ${#arr[@]}]
d=`date '+%Y-%m-%dT%H:%M:%SZ'`

echo "## 🤔 LAST UPDATED AT: ${d}" > update.md

git config --local user.email "tahaluindo@gmail.com"
git config --local user.name "LulzGhost-Team BOT"
git commit -am "${arr[$rand]} (at ${d})"
