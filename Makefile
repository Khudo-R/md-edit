.PHONY: dev build

# Run the application in live development mode
dev:
	wails dev

# Build a redistributable, production mode package
build:
	wails build
