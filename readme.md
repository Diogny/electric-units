
## I'm using pnpm for a more efficient and clear package.json

## install development packajes

	pnpm i mocha -D
	pnpm i chai -D


## build project
	pnpm run build


## tests
	pnpm run test


## git
	git init
		Initialized empty Git repository in C:/Users/diogn/OneDrive/Projects/npm/electric-units/.git/

## git add files
	git add package.json
	git add tsconfig.json
	git add dist/
	git add test/
	git add readme.md
	git add .gitignore

## git first commit
	git commit -m "first commit"
	git remote add origin https://github.com/Diogny/electric-units.git
	git push -u origin master

## git update
	git add <file> ...	git add .
	git commit -m "update message"
	git tag v1.0.2
	git push origin master --tags
