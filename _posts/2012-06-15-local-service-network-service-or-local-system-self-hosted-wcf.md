---
layout: post
title: "Local Service, Network Service Or Local System Self Hosted WCF"
date: 2012-06-15 14:10:00 -0000
excerpt: "Recently I experienced a bit of confusion over the users you can run a TopShelf service as, in particular one which started a WCF endpoint."
image: /images/me.png
tags: [http://go.microsoft.com/fwlink/?LinkId=70353, LocalService, LocalSystem, NetworkService, System.Net.HttpListenerException: Access is denied, TopShelf, WCF, Your process does not have access rights to this namespace]
comments: true
---
## Overview
Recently I experienced a bit of confusion over the users you can run a TopShelf service as, in particular one which started a WCF endpoint.

I would get an error, with a nice stack trace, but research on the Internet didn't yield me an answer. - Once I had a solution, I thought I would share, so others don't have to spend as long as I did trying to resolve the issue.

So, the error I got was this:

~~~
System.ServiceModel.AddressAccessDeniedException: HTTP could not register URL http://+:8082/MyWCFService/. Your process does not have access rights to this namespace (see http://go.microsoft.com/fwlink/?LinkId=70353 for details). ---> System.Net.HttpListenerException: Access is denied
at System.Net.HttpListener.AddAllPrefixes()
at System.Net.HttpListener.Start()
at System.ServiceModel.Channels.SharedHttpTransportManager.OnOpen()
~~~

With a pretty long stack trace after!

Now this does look like a useful error, with a link to a Microsoft post (<a href="http://go.microsoft.com/fwlink/?LinkId=70353"><code>http://go.microsoft.com/fwlink/?LinkId=70353</code></a>).  Brilliant I thought, until I found clicking the link resulted in this…

![Error Loading Image]({{ site.url}}/images/posts/go-microsoft-com_link70353_notload.png){:height="103px" width="300px"}
This was far from helpful

The first thing that confused me was the url, which changed from "http://localhost:8082/MyWCFService" changed to "http://+:8082/MyWCFService/". When looking at URLs, it would seem that the "+" symbol means "Generic host", therefore it could be anything, as long as it is on this PC. The config could state "http://127.0.0.1:8082/MyWCFService/" whereby localhost and 127.0.0.1 are the same. The log file only shows the 1 value, a "+".

A little scout around and I was able to understand that the user I was running my service under didn’t have sufficient permissions, and I should run as a more elevated “Administrator” user, sure enough, setting my windows service to run as the system admin did the trick, though, TopShelf doesn’t offer this as a default install address, you can just have:

- LocalService
- NetworkService
- LocalSystem

I eventually decided to work my way through the users to find out which one had sufficient permission to start the service, and it turns out “LocalSystem” does. – Which at the time, I thought was least likely to work!

Sure enough, I could change my TopShelf setup to be:

~~~
hc.Service<MyWCFService>(sc =>
{
sc.SetServiceName(Name);
sc.ConstructUsing(() => new MyWCFService());
sc.WhenStarted(cs => cs.OnStart());
sc.WhenStopped(cs => cs.OnStop());
});
~~~

~~~
hc.RunAsLocalSystem();
hc.SetDescription(Description);
hc.SetDisplayName(DisplayName);
hc.SetServiceName(Name);
~~~

And this, worked like a charm!

This got me thinking about the 3 “RunAs” I had to choose between, and what purpose I would use each of them for, so lifted from a TechNet post  (<http://technet.microsoft.com/en-us/library/cc782435(v=ws.10).aspx>).

## LocalService

The Local Service account is a special, built-in account that is similar to an authenticated user account. The Local Service account has the same level of access to resources and objects as members of the Users group. This limited access helps safeguard your system if individual services or processes are compromised. Services that run as the Local Service account access network resources as a null session with no credentials.

## NetworkService

The Network Service account is a special, built-in account that is similar to an authenticated user account. The Network Service account has the same level of access to resources and objects as members of the Users group. This limited access helps safeguard your system if individual services or processes are compromised. Services that run as the Network Service account access network resources using the credentials of the computer account.

## LocalSystem

The Local System account is a powerful account that has full access to the system, including the directory service on domain controllers. If a service logs on to the Local System account on a domain controller, that service has access to the entire domain. Some services are configured by default to log on to the Local System account. Do not change the default service setting.

I hope that this post will help other to overcome the user problem I encountered faster than I did!
