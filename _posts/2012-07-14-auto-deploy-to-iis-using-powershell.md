---
title: Auto Deploy To IIS Using PowerShell
date: 2012-07-14 11:44:00 -0000
excerpt: At 15below we are using a tool called Octopus for our product deployment.  The tool works well, but it's integration to install our web-based application products doesn't suit our needs.
tags: [15below, Deployment, Ensconce, IIS, Powershell]
comments: true
show: true
---

## Overview

At 15below we are using a tool called [Octopus](http://octopusdeploy.com/) for our product deployment.  The tool works well, but it's integration to install our web-based application products doesn't suit our needs.

However, with Octopus we can write custom PowerShell for deploying our applications.  This got us into a situation where we have 3 different versions of IIS across our servers, each of which has a different method of installation, but we want a nice and easy way we can trigger the creates.  Cue a "clever" script.

Firstly, what are the differences between the versions:

- IIS6 (Server 2K3 & XP) - WMI needed to interact between IIS and PowerShell.
- IIS7 (Server 2K8 R1 & Vista) - PowerShell snap-in available for [download](http://www.iis.net/download/powershell) (I would recommend using the Web Platform Installer)
- IIS7.5 (Server 2K8 R2 & 7) - PowerShell module, installed when selecting "Scripts" from IIS role feature installer.

The solution we came up with is hosted in the 15below public source code repository and sits inside the Ensconce application (more on that in a latter blog post, or link to 15below post) on GitHub.  To see more information, or get the PowerShell scripts, <a title="click here" href="https://github.com/15below/Ensconce" target="_blank" rel="noopener">click here</a>.

The 3 PowerShell scripts we are talking about are:

- CreateWebsite.ps1
- createiis6app.ps1
- createiis7app.ps1

Both the create IIS app scripts have the same 3 callable functions, these are:

- CreateAppPool (which takes a string for the name)
- CreateWebSite (which takes name, local path, app pool name, application name, host header value & log location)
- AddSSLCertification (which takes website name to add to & certificate name)

Breaking these down, how does it work...

## CreateWebsite.ps1

This will try to do a WMI control with IIS6, hiding any errors, but should it get a success, it will include the script "createiis6app.ps1".  Should the operation be unsuccessful, the "createiis7app.ps1" is included.

From this, you will be able to call any of the 3 functions outlined above.

Therefore, your PowerShell deployment only needs to include this PowerShell, and you can install into IIS 6,7 & 7.5. - helpful right!

## createiis6app.ps1

Using only WMI controls, the functions are all callable once included (either directly or through the create website script)

## createiis7app.ps1

So, as I've already mentioned, IIS7 and IIS7.5 operate in different ways and both require something extra to be added to your PowerShell session.

When this script is included, it will check if the IIS module is present to be imported, if it is, it will import it, if the import fails, or it's not there it will try to locate and install the Snap-In.

If neither of these things is present it will return you an error.

This means that you don't have IIS6, and you don't have the required components for an IIS 7 install.

## Summary 

I hope that you may find this useful should you need to do any operations like this on your application deployment.

Feel free to head over to GitHub and check out the Ensconce application, and the IIS scripts. - You may find that the Ensconce application has other benefits to your deployment :)

Details of the Ensconce application functions can be found on the read-me within GitHub.
