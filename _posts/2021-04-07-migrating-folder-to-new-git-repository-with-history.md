---
title: Migrating Folder To New GIT Repository With History
date: 2021-04-07 15:00:00 +0100
excerpt: Using my previous GIT repository migration I scripted process to migrate single folders at a time
tags: [git, GitHub, History, Migration, Move Folder]
show: true
---

## Background

Having spent a lot of time working out how to migrate multiple folders (see previous post), the time taken on large repositories made this counter productive.

Not only did the process require a human to watch it to run the next command, some of the commands took hours (or even DAYS) to run.

So I needed to find a more effective way to move a folder from 1 GIT repository to another complete with history.

For the purpose of this, I worked on only moving a single folder.  The reason for this is that if i needed to move more than 1 folder, I could run the process twice.

## Automation

In order to automate the process so that it can be set off and left, I created a C# script which could I ran in LinqPad.

The script would essentially call the git exe on my machine to perform the operations that a human would type.

I would end up with 2 feature branches one in each repo.  1 to remove the migrated folder & another to merge the history into the destination branch.

## Outcome

My script can be found in a [GitHub Gist](https://gist.github.com/BlythMeister/65fb84b190ddc4825974e00fbb5464ec)

{% gist 65fb84b190ddc4825974e00fbb5464ec %}