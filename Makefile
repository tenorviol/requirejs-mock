
test:
	npm install
	bower install
	./node_modules/karma/bin/karma start karma.conf.js

.PHONY: test
