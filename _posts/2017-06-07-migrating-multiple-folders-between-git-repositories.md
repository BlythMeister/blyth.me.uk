---
layout: post
title: Migrating Multiple Folders Between GIT Repositories
date: 2017-06-07 13:25:00 -0000
excerpt: "I recently had a situation where I needed to move parts of a GIT repository over to a new repository but wanted to keep all the history from the original repository."
image: /images/me.png
tags: [git, GitHub, History, Migration, Move Folder]
comments: true
---

## The Brief

I recently had a situation where I needed to move parts of a GIT repository over to a new repository but wanted to keep all the history from the original repository.

## The Research

After a bit of searching on google and finding many resources on "the best way to do this" i ended up hitting a wall.  The overall thought patterns I found looked good, but there was no one size fits all "tutorial" for how to do this.

## The Eureka Moment

After muddling through (and deleting my local copies of the repository many times!) I finally managed to achieve what i wanted.

A pull request in each repository one deleting the folders with my code, and the other adding them complete with all their history (that second pull request looks very scary with a lot of commits)

But how did I do it i hear you ask...well...this post aims to make this easier for everyone, so keep reading!

## The Process

The process documented below states all the git bash commands your going to need.

Start from any folder you have on disk, we going to leave it clean at the end :)

At various parts in the process you will need to modify the command to put your own variable content in.  These are show with text in brackets.

### Get Your Source/From Repo

To prevent screwing up any local copies of the repo you already have, i suggest a clean pull and remove remote.

~~~ bash
git clone (url-to-from-repo) FromRepo
cd FromRepo
git remote rm origin
~~~

### Clean Your Source/From Repo

Since we only want the history to contain certain folders, we can run a command to completely remove everything outside of these folders from history - essentially rewrite history with just the bits we want. - This may take some time if you have a lot of history.

After this, we are done with this repo for now, so move back up to the root folder.

~~~ bash
git filter-branch --index-filter 'git rm --cached -qr --ignore-unmatch -- . && git reset -q $GIT_COMMIT -- (folder-paths-space-seperated)' --prune-empty -- --all
git reset --hard
cd ..
~~~

### Getting You Destination/To Repo

We need a fresh copy of our destination repository again, this prevents us screwing up any local copy we already have!

~~~ bash
git clone (url-to-repo) ToRepo
cd ToRepo
~~~

### Linking Our Repositories

Next we want to get the Source/From repo into our Destination/To repo onto a branch called "feature/RepoMigrate"

~~~ bash
git remote add fromRepo (full-path-of-from-repo)
git pull fromRepo master
git remote rm fromRepo
git branch feature/RepoMigrate
git reset --hard origin/master
~~~

### Pushing Our Migrated Folders

Now we have all our folders in our repo, we can them into our repository and we are then done with this copy of the repository too.

~~~ bash
git checkout feature/RepoMigrate
git push origin feature/RepoMigrate
cd ..
~~~

### Clean Up Pass 1

So far so good right? - we have got the branch ready to put the important parts of the source/from repository into the new one, so let's have a tidy up!

~~~ bash
rm -rf FromRepo
rm -rf ToRepo
~~~

### Removing Folders From Source/From Repository

We need a fresh copy of the source/from repository to work with to perform these updates and we also want to be on a branch to perform this clean-up

~~~ bash
git clone (url-to-from-repo) FromRepo
cd FromRepo
git branch feature/RepoMigrate
git checkout feature/RepoMigrate
~~~

### Remove and Commit

For each folder you have migrated you want to remove and commit the removal

~~~ bash
rm -rf (folder-path-migrated)
git commit -a -m 'Remove migrated folder (folder-name) as moved to (new-repo)'
~~~

### Now Push & Tidy Up

Your almost done! We just need to push and tidy up.

~~~ bash
git push origin feature/RepoMigrate
cd ..
rm -rf FromRepo
~~~

## What Next?

Well, you now have a branch in each repo called "feature/RepoMigrate" one removes the folders, and the other adds.

Personally, I raised a pull request onto master for each of these (and had to make some changes to get the CI working correctly in the destination/to repo)