#!/bin/bash
set -e
yarn build

SERVER=web4.kinet.ch
SERVER_DIR=/srv/www/docs.gymkirchenfeld.ch/pensen/
LOCAL_DIR=./docs/.vitepress/dist/
ME=$(ssh ${SERVER} echo \$\{USER\})
ssh ${SERVER} sudo chown -R ${ME} ${SERVER_DIR}
rsync -av --delete ${LOCAL_DIR}/* ${SERVER}:${SERVER_DIR}
ssh ${SERVER} sudo chgrp -R adm ${SERVER_DIR}
ssh ${SERVER} sudo chmod -R g+w ${SERVER_DIR}
