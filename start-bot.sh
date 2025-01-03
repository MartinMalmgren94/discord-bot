cd /home/martinmalmgren/Documents/GitHub/discord-bot
echo Updating the bot...

git checkout main
git fetch
git pull

rm -rf node_modules

npm install

echo Update commands done

echo Starting bot
npm start
