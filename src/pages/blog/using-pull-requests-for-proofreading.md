---
layout: "../../layouts/BlogPost.astro"
title: "Using pull requests for proof reading"
description: "I managed to use Git in an unconventional manner."
pubDate: "November 16 2022"
---

After launching my new site, I realised that, now that all of my blog posts were stored in the file-system, and directly pushed to Git...

...I decided to use one of Git's better known features to allow third parties to review any new posts.

## My 'workflow'
*...if you can call it that.*

The instructions on how I manage my post creation workflow are as follows:
- I check out a new branch (i.e. the branch this post is being updated on is `post/using-pull-requests-for-proof-reading`)
- I write the post, including all of its required frontmatter.
- I push the branch, as normal.
- I use the GitHub [pull request UI](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to open the PR and allow people to review.

To have another individual review your posts, you can [request a review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) from the pull request page. A reviewer does **not** have to have push access to the repository, but they will have to be added as a 'collaborator'.

Any modifications to the post will be automatically added to the pull request.

The workflow of this site also includes a "preview" feature on pull requests that is managed by [Vercel](https://vercel.com), the hosting provider that I use to manage the builds of the site.

![Vercel preview comment](https://media.discordapp.net/attachments/455992467578159104/1042257403325992980/image.png)

Also, this post itself is in this [pull request](https://github.com/wale/site/pull/1) system.

## The catch
Branch names, which in this case, correspond to the format `post/<title>`, can only be a total of 244 characters on many Git providers, such as Github (excluding the preceding `refs/heads/` before the branch name), so your post titles can't be obscenely long. This catch may differ depending on what Git software you're using to manage this system.