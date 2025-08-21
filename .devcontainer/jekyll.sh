#!/bin/bash

# Jekyll Development Helper Script

set -e

case "$1" in
  "serve"|"s")
    echo "Starting Jekyll development server..."
    bundle exec jekyll serve --host 0.0.0.0 --livereload --drafts
    ;;
  "build"|"b")
    echo "Building Jekyll site..."
    bundle exec jekyll build
    ;;
  "clean"|"c")
    echo "Cleaning Jekyll site..."
    bundle exec jekyll clean
    ;;
  "install"|"i")
    echo "Installing dependencies..."
    bundle install
    ;;
  "update"|"u")
    echo "Updating dependencies..."
    bundle update
    ;;
  *)
    echo "Jekyll Development Helper"
    echo ""
    echo "Usage: $0 {serve|build|clean|install|update}"
    echo ""
    echo "Commands:"
    echo "  serve, s    - Start development server with live reload"
    echo "  build, b    - Build the Jekyll site"
    echo "  clean, c    - Clean generated files"
    echo "  install, i  - Install dependencies"
    echo "  update, u   - Update dependencies"
    echo ""
    echo "Examples:"
    echo "  $0 serve    # Start development server"
    echo "  $0 build    # Build the site"
    exit 1
    ;;
esac