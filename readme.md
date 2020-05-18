
## I'm using pnpm for a more efficient and clear package.json

Used in my testing website [Electric Circuits](http://diogny.com/tests/circuits.php).

### install development packajes

	pnpm i mocha -D
	pnpm i chai -D


### build project
	pnpm run build


### tests
	pnpm run test


### git
	git init
		Initialized empty Git repository in C:/Users/diogn/OneDrive/Projects/npm/electric-units/.git/

### git add files
	git add package.json
	git add tsconfig.json
	git add dist/
	git add test/
	git add readme.md
	git add .gitignore

### git first commit
	git commit -m "first commit"
	git remote add origin https://github.com/Diogny/electric-units.git
	git push -u origin master

### git update
	git status

	git add <file> ...	git add .
	git commit -m "update message"
	git tag v1.0.2
	git push origin master --tags

### npm publish
	npm adduser | npm login
	npm publish --access public

	npm version patch
	npm version major
	npm version patch -m "Version %s - add sweet badges"
	npm publish --access public

### npm package url
	https://npmjs.com/package/<your-package-name> 
	https://www.npmjs.com/package/@dabberio/electric-units
