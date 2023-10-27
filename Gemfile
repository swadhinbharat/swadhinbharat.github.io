source "https://rubygems.org"
gem "jekyll"
# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", github: "jekyll/minima"

gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
    gem 'jekyll-sitemap'
    gem 'jekyll-feed'
    gem 'jekyll-seo-tag'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "webrick", "~> 1.8"
gem 'eventmachine', '1.2.7'
gem "jekyll-commonmark-ghpages"