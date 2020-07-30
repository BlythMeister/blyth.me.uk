---
title: Click-Once Deployment In GitHub
date: 2014-06-26 13:46:00 -0000
excerpt: Introducing my new blog designed by myself (no nasty templates!) and hosted in GitHub Pages
tags: [AutoUpdate, click-once, deploy, Gallifrey, GitHub, publish]
show: true
---

## Overview 

I've decided to use click once for my new OpenSource app called Gallifrey.

You can get/see the app on my GitHub account at <https://github.com/BlythMeister/Gallifrey/>

This blog post will try and explain the decision why we have used click once and how I have gone about implementing it.

## What is Click-Once?

Click-Once is an easy way to regularly push updates out to your windows desktop apps.

Click-Once can install updates automatically on application start, or you can handle this manually within your app.

## Why Is Gallifrey Using Click-Once?

We have decided to go with the manual check approach, the reason for this is that we can integrate this experience into the app, rather than having a launcher that downloads the updates.
Therefore we operate in a similar way to other apps like Spotify whereby the updates are downloaded and installed, all the user has to do is restart the app.

## How Does It Work?

GitHub offers a "raw" version of all its files, and this can be used to serve the application.manifest from a click-once application over the internet.

Changes can be made an published locally to disk, and then when the changes are committed into GitHub they are ready for everyone's application to search and download the new versions.

From Visual Studio the publish of click once is done into 1 of 2 directories depending on the version of the app.
The "stable" version will publish to "..\..\deploy\stable\" whereas the beta will publish to "..\..\deploy\beta\"
This is just so that someone with a Stable version doesn't accidentally get beta installs.

The update URL is then set to "<https://raw.githubusercontent.com/BlythMeister/Gallifrey/master/deploy/stable/>" or for the beta version "<https://raw.githubusercontent.com/BlythMeister/Gallifrey/develop/deploy/beta/>"
This is the path to where the updates are, once published on GitHub.

The Gallifrey App using click-once will know to go to this URL when checking for updates. The great this about this is that pushing updates is as simple as pushing a new version into GitHub.
The only pain point is having to manually perform the publish prior to the push into GitHub.

This means that we have 2 installers.  The first works from the master branch and is for the stable version.  This can be downloaded here: <https://github.com/BlythMeister/Gallifrey/raw/master/deploy/stable/setup.exe>
The second is the beta version which is from the develop branch and can be downloaded here: <https://github.com/BlythMeister/Gallifrey/raw/develop/deploy/beta/setup.exe>

Both versions can be linked from external websites as the Gallifrey GitHub pages site shows: [blythmeister.github.io/Gallifrey](http://blythmeister.github.io/Gallifrey/)

And you can just link to a specific version as we have done on our Atlassian Marketplace page!
<https://marketplace.atlassian.com/plugins/Gallifrey>

## The Pain Points

There are a few pain points to get around with using this approach.

- GitAttributes - Since your pushing XML and .deploy files you don't want your Git client to change the line endings. You can add a .GitAttributes file to your repository (check the one in this repo) that will tell Git that all ".manifest" or ".deploy" files are binary and should not be compared or adjusted.
- GitHub raw seems to have a cache of some description, so when requesting the latest and greatest version, sometimes this is out of date. From my experience, the updates are there within 5 minutes, so it's fully workable.
- You have LOTS of files in your deploy folders! Git stores everything in history, so the more versions you push, the bigger your repo gets. Even if you clean up the files, someone has to pull all the history in, which could over time become cumbersome. Though, we are not talking GB's of download in Gallifrey (Yet!)

I hope that this is useful to you and I'm happy to help anyone else who is trying to get a click-once app deployed using GitHub :)
