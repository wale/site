---
title: "New site, same me"
description: "Discussing my site rewrite and re-design."
published: 2023-12-08T10:23:26Z
tags: ["programming", "news"]
---

I have finally redesigned my site, and added some design and functionality improvements to it!

## Design Language
Instead of just utilising an existing colour scheme, I took some lessons from a website named [grayscale.design](https://grayscale.design), and built a nice grayscale theme that meets my needs, for both this site, as well as other websites that I may make in the future. I found this tool interesting, as the concept takes the harsh lesson of colour theory away, for a grayscale-first approach.

For the font, instead of [Inter](https://rsms.me/inter) as in my previous website, I decided to use another sans-serif font named [General Sans](https://www.fontshare.com/fonts/general-sans). Preformatted text on the other hand stays as [Iosevka](https://typeof.net/iosevka).

If you were wondering about the font used in my logo (and by extension, the [IPA rendering component](https://github.com/wale/site/blob/main/src/components/IPA.astro)), it utilises the [Voces](https://fonts.google.com/specimen/Voces) font, which is a typeface designed for the specific use-case of IPA phonetic renditions in bi-lingual dictionaries.

## Programming
Like the previous website, the website uses [Astro](https://astro.build) for static HTML generation, as well as the all-powerful [TailwindCSS](https://tailwindcss.com) CSS toolkit. I'm especially a big fan of Astro due to its prolific use of performance optimisation, to the point that this very blog post loads in _less than a second_. It also benefits me extremely well with my use of JavaScript modules, the return value of which can be built into the site, without the end user having to load any JavaScript themselves.

An example of this is Astro's native support for [MDX](https://mdxjs.com), where you can import components willy-nilly.
```mdx
// extract from the source of the /about page.
import IPA from "~/components/IPA.astro";

## Overview
I'm Duale Siad (pronounced <IPA transcription="broad" characters="duˈɑː.li ˈsi.æd" phonetic="do-UH-lee SEE-ad" />), also known as "Wale" (<IPA transcription="broad" characters="wɑːli" phonetic="WUH-lee"/>).
```

Tailwind is especially powerful for a tool like Astro, due to the nature of the tool only building the CSS that is explicitly used within the application; leading to less network requests.

## What's next?
After some minor tweaks to this website, I am planning on using the aforementioned design scheme in a planned website about Melbourne libraries, as well as (hopefully) more blog posts.