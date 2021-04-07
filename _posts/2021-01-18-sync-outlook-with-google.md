---
title: Sync Outlook Or Office 365 With Google
date: 2021-01-18 08:00:00 -0000
excerpt: Syncing You Work Calendar With Ease
tags: [Office,Outlook,Google,Work,Home]
show: true
---
## Background

I really wanted to improve my working from home routine and utilise the features of the Google assistance / Google home I have in my home office.

The big issue I had was that the company I work for uses Office 365 and Outlook which are not compatible to link the calendar into my Google home assistant.

## Solutions

I had experimented with various ways of sharing the calendar from Office 365 to my personal Google calendar but nothing would work reliably.

Thats when i came across a great open-source project [Outlook Google Calendar Sync](https://phw198.github.io/OutlookGoogleCalendarSync/)

This tool can be setup to automatically update a selected Google calendar whenever you change an appointment in Outlook.

## My Setup

So, with Outlook running on my work laptop, I installed the Outlook Google Calendar Sync.

Rather than pollute my home calendar with work events, I created a dedicated calendar in my Google account specifically for my work events.

There are some events I didn't want my Google assistant to announce like work calendar blocks in put in for a Lunch break, but the sync has me covered there with support to exclude events which are in a certain category. - So i was able to make a "No Google Sync" category and place it on the events I didn't want to sync.

With a setup stating to sync 14 days in the past, and 168 days (approx 6 months) in the future my Google calendar was all ready.  My sync is setup to run every 5 hours, but also setup to automatically push when changes occur.

Through the Google assistant settings, I was able to make it look at my new Work Google calendar, so now when I start work I can say "hey google, good morning" and Google will tell me all about my day.

## Small Flaw

If I get a meeting invite outside of my work day and I accept it on my phone, the Outlook on my laptop (which is off outside my work day) will not pick up and sync to Google calendar.

I could leave my work laptop on at all times and this would mean that when I accept the invite on my phone, the Outlook on my laptop would ge the event and therefore sync to Google.

## Other Notes

For anyone else who has a Google home device in their home office, there is a neat "Workday" feature built into Google assistant now that will allow you to wake up and announce something at set times throughout the day.

This is a great way to remind you to get up and move around (something that I've found myself neglecting over the last 10 months).
