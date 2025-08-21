# swadhinbharat.github.io
Swadhin

## Development Options

### Option 1: Dev Container (Recommended)

The easiest way to get started is using the provided dev container:

1. Install [Docker](https://www.docker.com/get-started) and [VS Code](https://code.visualstudio.com/)
2. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Open this repository in VS Code
4. When prompted, click "Reopen in Container"
5. Use the helper script: `.devcontainer/jekyll.sh serve`

See [.devcontainer/README.md](.devcontainer/README.md) for more details.

### Option 2: Local Installation

## Install
```Bash
bundle install
```

## Run

Bash
```Bash
bundle exec jekyll serve --livereload
```

WSL
```Bash
bundle exec jekyll serve --force_polling --livereload
```

Open URL [http://localhost:4000](http://localhost:4000)
