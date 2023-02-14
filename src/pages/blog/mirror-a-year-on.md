---
layout: "../../layouts/BlogPost.astro"
title: "Mirror: [Almost] a year on"
description: "The backstory behind this project, and some news."
pubDate: "2022-12-06T13:37:00+11:00"
---

Hello!

After nearly a year of running public facing infrastructure, I wanted to give you (the reader) an update on how things are going.

Just in case you are not aware, I currently run an official tier 2 Arch Linux mirror at [mirrors.wale.id.au](https://mirrors.wale.id.au).

## The backstory
The `wale/mirrors` project was born out of a personal need of stable, fast Australian mirrors for Arch Linux, as well as a learning project. The only issue with that is that things like mirrors tend to [usually] need a lot of money to spend on infrastructure alone. 

So I did it anyway, in spite of my low income as a student in higher education. At first, I went with a cheap option, where I first spent A$15/mo on a server with 500GB of storage and 3TB of data transfer at [BinaryLane](https://www.binarylane.com.au/), then spent A$22.50/mo on an upgrade to a server with 1TB of HDD storage and 4TB of data transfer.

After that was proving to not be enough, a friend of mine (h/t [Ovyerus](https://ovyerus.com/?utm_medium=referral&utm_source=Wale&utm_campaign=friends)) lent me a VM with enough storage and network bandwidth to support the traffic that my mirror pulls through CloudFlare.

## The fun part: statistics
Over the last seven days of this post being written (6th of December 2022), I have achieved 508.61GB of total data transfer, where the majority is being served directly by the server.

![Cloudflare data transfer stats](https://i.imgur.com/YsIZ9LU.png)

Over the last 30 days from the post's writing date, I have served 2TB of data through Cloudflare and my server, though with a poor caching rate.

![Cloudflare stats over last 30 days](https://i.imgur.com/jWZM1R6.png)

On the Arch Linux side, I have been consistently on the higher scoring mirrors in Australia. (at least, with the HTTP mirror) At the time of writing, my mirror is not far behind `sydney.mirrors.pkgbuild.com`, an official mirror provided by the Arch Linux team. I also beat out my own university's mirror score, which is listed under `ftp.swin.edu.au`.

![Arch Linux mirror scores](https://i.imgur.com/weeiQjF.png)

## Plans for 2023
I have a lot of plans for the mirror over the next year, which include:
- To serve more distributions - immediate plans for the next distributions include Gentoo, Termux, Alpine Linux and Arch Linux ARM.
- To make the switch to `mirrors.wale.au`, where I will stagger the move from now until mid-2024. A roadmap for this change will come soon. Keep an eye on this website over the coming months for a post on this change.
- Complete a move to a stable status page. I am currently in the process to moving to [Uptime Robot](https://uptimerobot.com). The current status page that uses this is at [status.wale.au](https://status.wale.au).
- Possibly move off Cloudflare in favour of something in the vein of [Bunny.net](https://bunny.net).
- Rewrite the frontend of the mirrors service.

## Thanks!
Over the past year, I've been running the mirror mainly out of my own pocket and through help from friends, such as [Ovyerus](https://ovyerus.com/?utm_medium=referral&utm_source=Wale&utm_campaign=friends). I could not have expected how popular this mirror was, even outside of Australia, and how well it has been received. Thank you so much for using this mirror, and for helping me learn new things.