eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&

cd /home/ubuntu/arafat/react/react_ci &&
git pull && 
npm install &&
npm run build
