#export NODE_OPTIONS=--openssl-legacy-provider
yarn build #&& rsync -av --delete ./docs/.vitepress/dist/* web4.kinet.ch:/srv/www/dooku
