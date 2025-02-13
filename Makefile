.PHONY: build test deploy

build:
	cd typescript && npm run build
	cd python && python setup.py build

test:
	cd typescript && npm test
	cd python && pytest

deploy:
	./scripts/deploy.sh