# [Stony Brook's 2018 iGEM Wiki](http://2018.igem.org/Team:Stony_Brook)

### Note on Media Wiki, templating, and other iGEM-specific things
After we finish designing this wiki, we'll go through and replace elements with their respective Media Wiki equivalents. We'll do this last so we can focus on the functionality and look of the wiki first.

## Guidelines
Just some general dos and dont's.
* Don't edit any framework code/code that was not written by us.
* No CDNs or loading anything externally (iGEM rules).
* For consistency, keep HTML, CSS and JS tab-spaced. 
* Make detailed commit summaries!

## Styles
iGEM requires all wiki content to be hosted on the 2018.igem.org server, which includes CSS. This is why we'll be using a local copy of Bootstrap (and any other CSS frameworks we end up using). While we've seen a few teams break this rule in some way or another, it'd be best to adhere to it as much as possible. Here are some bullet points:
* Keep all CSS in the _css_ folder. No inline styles pls.
* CSS we write goes in _styles.css_.
* To keep things organized, group styles by tag, class, then id.

## Scripts
Same thing applies to any scripts. iGEM has an older version of jQuery installed by default, but there's nothing stopping us from using a newer version or whatever we come up with on our own. More bullet points:
* Scripts go in the _scripts_ folder.
* Load scripts at the bottom of each page's body (this is so visual elements will load before scripts).
