---
title: Fitbit Overview Release Version 1.11.1
date: 2022-09-07 14:00:00 +0100
excerpt: Version 1.11.1 has been released now
tags: [release, Fitbit, overview]
show: true
---

## Details

Version 1.11.1 of the [Fitbit overview watch face](https://gallery.Fitbit.com/details/7c4f7506-8ed8-4eb9-84e3-28b85671f26b) has been released and is available now.

## What's New

This release only makes changes to the Versa 3 & Sense watch faces.

A new phone connection indicator has been added which will make the watch check conectivity to the phone on a regular basis (every 10 minutes) and if conectivity drops then an icon can be displayed.

The companion (phone app) will now listen for "significant" changes in location and when this occurs will fetch and send the weather to the watch regardless of if a refresh is due.

When display is off, rather than using the clock ticking every second to trigger updates, updates will be checked once every 2 minutes which means weather and phone connection continues to work even when the display is off.

Coupled with these changes to improve reliability in messaging between phone and watch, the entire messange sending has been replaced to include automated retries for sending messages as well as only considering a message as "processed" once the reciever has confirmed reciept.

Finally, the font size for the "no progress bar" mode has been slightly increased.
