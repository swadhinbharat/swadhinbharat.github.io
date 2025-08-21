# Development Container

This repository includes a devcontainer configuration for easy local development using Docker.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Getting Started

1. Clone this repository
2. Open the repository in Visual Studio Code
3. When prompted, click "Reopen in Container" or use the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and select "Dev Containers: Reopen in Container"
4. Wait for the container to build and install dependencies
5. Start the Jekyll development server:
   ```bash
   bundle exec jekyll serve --host 0.0.0.0 --livereload
   ```
6. Open your browser to `http://localhost:4000` to view the site

## What's Included

- **Ruby 3.2** development environment
- **Jekyll** and all required gems
- **Git** and **GitHub CLI** tools
- **VS Code extensions** for Jekyll, Ruby, YAML, and web development
- **Port forwarding** for Jekyll development server (port 4000)
- **Volume mounting** for faster gem installation

## Development Commands

```bash
# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve --host 0.0.0.0 --livereload

# Start development server with drafts
bundle exec jekyll serve --host 0.0.0.0 --livereload --drafts

# Build the site
bundle exec jekyll build

# Clean generated files
bundle exec jekyll clean
```

## Troubleshooting

- If you encounter permission issues, make sure Docker is running and you have the necessary permissions
- If gems fail to install, try rebuilding the container: Command Palette → "Dev Containers: Rebuild Container"
- For port conflicts, check that port 4000 is not already in use on your system