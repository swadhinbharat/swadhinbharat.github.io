# Jekyll Personal Website
Personal website and blog built with Jekyll, hosted on GitHub Pages at swadh.in. Uses the Minima theme with custom pages for quotes, collections, projects, and blog posts.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively
- Bootstrap and build the repository:
  - `sudo gem install bundler` -- installs Bundler gem manager (< 1 minute)
  - `sudo bundle install` -- installs Jekyll and all dependencies (35 seconds). NEVER CANCEL.
  - `sudo bundle exec jekyll build` -- builds the static site (2 seconds). NEVER CANCEL.
- Run the development server:
  - Standard: `sudo bundle exec jekyll serve --livereload --host 0.0.0.0 --port 4000`
  - WSL/Windows: `sudo bundle exec jekyll serve --force_polling --livereload --host 0.0.0.0 --port 4000`
  - Access at: `http://localhost:4000`
  - LiveReload automatically refreshes browser on file changes
- CRITICAL: All bundle commands require `sudo` due to gem permission restrictions. Do NOT attempt to run without sudo.

## Validation
- ALWAYS manually test the website functionality after making changes.
- Test these core user scenarios after any modifications:
  1. Navigate to homepage (`http://localhost:4000`) and verify it loads correctly
  2. Click through navigation links: Blogs, Collections, Quotes, Projects, About
  3. Verify social media links in footer are working
  4. Test blog post links from the homepage
  5. Ensure Hindi text renders properly on Quotes page
- Take screenshots of any UI changes to verify visual impact.
- ALWAYS run `sudo bundle exec jekyll build` before committing to ensure no build errors.

## Repository Structure
### Key Directories
- `_pages/` -- Main content pages (about.md, blogs.md, collections.md, quotes.md, projects.md, portfolio.md)
- `_posts/` -- Blog posts in Markdown format (named: YYYY-MM-DD-title.markdown)
- `_includes/` -- Partial templates (header.html contains navigation)
- `_layouts/` -- Page layouts (default.html)
- `_config.yml` -- Main Jekyll configuration file
- `assets/` -- Static assets (CSS, images, favicon)
- `projects/` -- Project-specific content
- `files/` -- Additional downloadable files

### Important Files
- `_config.yml` -- Site configuration, theme settings, social links, navigation
- `_includes/header.html` -- Navigation menu with external links (Resume, Tips)
- `_pages/quotes.md` -- Contains collection of quotes with special Hindi font support
- `_pages/collections.md` -- YouTube video embeds and collections
- `Gemfile` -- Ruby dependencies including github-pages gem
- `CNAME` -- Custom domain configuration (swadh.in)

## Content Management
### Adding Blog Posts
- Create new file in `_posts/` with format: `YYYY-MM-DD-title.markdown`
- Include front matter:
```yaml
---
layout: post
title: "Your Title"
date: YYYY-MM-DD HH:MM:SS +0800
categories: category1 category2
---
```

### Modifying Navigation
- Edit `_includes/header.html` for external links (Resume, Tips)
- Edit `_config.yml` under `header_pages:` for internal page links
- Order in `header_pages` determines navigation order

### Custom Styling
- Main styles from Minima theme
- Custom quote styles in `assets/css/quotes.css`
- Hindi font support via Google Fonts (Noto Sans Devanagari)

## Common Tasks
The following are typical development scenarios and their solutions:

### Site Not Loading
1. Ensure Jekyll server is running: `sudo bundle exec jekyll serve --livereload --host 0.0.0.0 --port 4000`
2. Check for build errors in terminal output
3. Verify port 4000 is not blocked
4. Access via `http://localhost:4000` (not 127.0.0.1)

### Build Failures
1. Run `sudo bundle exec jekyll build` to see specific errors
2. Check for YAML front matter syntax errors in markdown files
3. Verify all referenced images/files exist in `assets/` directory
4. Ensure proper file naming for posts (YYYY-MM-DD-title.markdown)

### Permission Errors
- ALL Jekyll/Bundle commands require `sudo` in this environment
- Use `sudo bundle install`, `sudo bundle exec jekyll serve`, etc.
- This is due to system gem directory permissions

### Livereload Not Working
- Ensure `--livereload` flag is included in serve command
- For WSL/Windows systems, use `--force_polling` flag
- Browser should show "LiveReload: Browser connected" message in terminal

## Deployment
- Site automatically deploys to GitHub Pages on push to main branch
- Custom domain: swadh.in (configured via CNAME file)
- Uses GitHub Pages compatible gems (github-pages gem)
- No manual deployment required

## Performance Notes
- Bundle install: ~35 seconds (includes all Jekyll dependencies)
- Jekyll build: ~2 seconds (very fast, minimal content)
- Jekyll serve startup: ~1 second (includes theme download)
- All commands complete quickly - NEVER CANCEL operations

## Troubleshooting
### Deprecated Warnings
- `DidYouMean::SPELL_CHECKERS.merge!` warnings are harmless, ignore them
- `faraday-retry` gem warning is informational only
- Ruby Sass deprecation warning doesn't affect functionality

### External Resource Blocks
- Some external fonts/CDN resources may be blocked in development
- Site functionality is not affected
- Production deployment works normally

### Theme Issues
- Uses remote theme `jekyll/minima@1e8a445` 
- Theme files downloaded automatically during build
- Local modifications in `_includes/` and `_layouts/` override theme defaults

Remember: This is a simple Jekyll site with fast build times. All operations complete within seconds to minutes. Never cancel builds or long-running commands as they complete quickly.