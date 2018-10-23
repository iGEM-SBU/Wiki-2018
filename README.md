# [Stony Brook's 2018 iGEM Wiki](http://2018.igem.org/Team:Stony_Brook)


## Note
This repo is a snapshot of our working repo before we started working directly with iGEM's wiki system. Check out the final product at http://2018.igem.org/Team:Stony_Brook

## How we Built it
The majority of our site was drafted in Mobirise, a WYSIWYG Bootstrap editor. Mobirise doesn't come with any remote collaboration features out of the box, so we came up with some workarounds:
* Put Mobirise project files (\*.mobirise, \*.mobirise-tmp, publish-hashes.JSON etc.) in a seperate, private repository, and have all collaborative WYSIWYG editing drawing from that repo.
* Set auto-pulling up for everyone, and commit a page's worth of changes at a time.
* Every few commits, export the project as a static site and push that code to our igem-sbu.github.io repo for IRL testing.
* Rinse and repeat
