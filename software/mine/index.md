---
title: My Apps & Software
description: "My many open sourced software projects"
redirect_from: "/software/"
---

## My Apps & Software

A collection of open-source projects, Home Assistant integrations, CLI utilities, libraries, and custom watch faces. Contributions, issues, and PRs are always welcome.

---

### Time Tracking

#### [Gallifrey](https://gallifrey.blyth.me.uk)
> **Jira work logging companion and time-tracking desktop app.**

Essentially a big stopwatch app with direct Jira integration to log hours worked and manage remaining estimates without opening the web portal. Become a Jira time lord!

- **Links:** [Website](https://gallifrey.blyth.me.uk) · [Source (GitHub)](https://github.com/BlythMeister/Gallifrey)
- **Install:** Direct download via the website (includes auto-updates).

---

#### [ClockifyCli](https://clockify-cli.blyth.me.uk)
> **Cross-platform terminal client for Clockify time tracking.**

List, start, stop, and edit time entries directly from your shell without leaving your terminal or switching contexts.

- **Links:** [Website](https://clockify-cli.blyth.me.uk) · [Source (GitHub)](https://github.com/BlythMeister/ClockifyCli) · [NuGet](https://www.nuget.org/packages/ClockifyCli)
- **Install:** `dotnet tool install --global ClockifyCli`

---

### Wearables & Watch Faces

#### [Amazfit Watchfaces](https://amazfit-watchfaces.blyth.me.uk)
> **Custom, data-dense digital faces designed for Amazfit smartwatches.**

A collection of custom watch faces built for high readability, data metrics, and battery efficiency on Amazfit hardware.

- **Links:** [Website](https://amazfit-watchfaces.blyth.me.uk) · [Source (GitHub)](https://github.com/BlythMeister/Amazfit-Watchfaces)
- **Install:** Sideload via [amazfitwatchfaces.com](https://amazfitwatchfaces.com) or install via the Zepp app.

---

#### [Fitbit Overview Watch Face](https://fitbit-overview.blyth.me.uk)
> **Stats-heavy glanceable display for Fitbit devices.**

Packed with daily fitness metrics, battery level, active zone minutes, heart rate, and step goal rings.

- **Links:** [Website](https://fitbit-overview.blyth.me.uk) · [Source (GitHub)](https://github.com/BlythMeister/Fitbit-Overview-Face) · [Fitbit Gallery Listing](https://gallery.fitbit.com/details/7c4f7506-8ed8-4eb9-84e3-28b85671f26b)

---

### Home Assistant

#### [Clockify-HA](https://github.com/BlythMeister/Clockify-HA)
> **Home Assistant integration for Clockify workspace and timer monitoring.**

Pulls active time tracking data, current timers, and logged activity from Clockify into Home Assistant sensors for desktop status dashboards and automated desk presence tracking.

- **Links:** [Source (GitHub)](https://github.com/BlythMeister/Clockify-HA)
- **Install:** Add as a custom repository in HACS or copy to `custom_components/clockify`.

---

#### [Hildebrand Glow DCC (Maintained Fork)](https://github.com/BlythMeister/ha-hildebrandglow-dcc)
> **Home Assistant integration for UK SMETS smart meter data via Hildebrand Glow.**

A maintained fork of the Hildebrand Glow integration for UK DCC-connected smart meters. Pulls half-hourly electricity and gas consumption, standing charges, and rates directly into the Home Assistant Energy Dashboard.

- **Links:** [Source (GitHub)](https://github.com/BlythMeister/ha-hildebrandglow-dcc)
- **Install:** Add as a custom integration in HACS.

---

#### [SolarSynk v2 (Maintained Fork)](https://github.com/BlythMeister/solarsynkv2)
> **Home Assistant add-on and integration for Sunsynk solar inverters and battery storage.**

A maintained fork of the SolarSynk v2 integration. Connects to Sunsynk cloud APIs to monitor solar PV generation, multi-phase loads, battery charge/discharge capacity, and grid export parameters in real time.

- **Links:** [Source (GitHub)](https://github.com/BlythMeister/solarsynkv2)
- **Install:** Add as a custom add-on / integration repository within Home Assistant.

---

### Developer Tools & CLIs

#### [Paket Chain](https://paket-chain.blyth.me.uk)
> **Fluent command chainer and automation utility for Paket.**

Simplifies calling Paket across project folders and chains commands together to streamline dependency workflows.

- **Links:** [Website](https://paket-chain.blyth.me.uk) · [Source (GitHub)](https://github.com/BlythMeister/PaketChain) · [NuGet](https://www.nuget.org/packages/PaketChain)
- **Install:** `dotnet tool install --global PaketChain`

---

#### [Doser](https://doser.blyth.me.uk)
> **Lightweight CLI uptime and stress testing utility.**

A dotnet CLI tool to call URLs in bulk to benchmark endpoint responsiveness, warm up services, and verify uptime.

- **Links:** [Website](https://doser.blyth.me.uk) · [Source (GitHub)](https://github.com/BlythMeister/Doser) · [NuGet](https://www.nuget.org/packages/Doser)
- **Install:** `dotnet tool install --global Doser`

---

#### [What3Passwords](https://what-three-passwords.blyth.me.uk)
> **Memorable, high-entropy password generator.**

Picks a random global location via the [What3Words](https://what3words.com) API to generate randomized, secure, and human-readable 3-word passwords.

- **Links:** [Website](https://what-three-passwords.blyth.me.uk) · [Source (GitHub)](https://github.com/BlythMeister/What3Passwords) · [NuGet](https://www.nuget.org/packages/What3Passwords)
- **Install:** `dotnet tool install --global What3Passwords`

---

#### [Bing Image Downloader](https://bing-images.blyth.me.uk)
> **Automated scraper for daily Bing desktop wallpapers.**

Facilitates downloading high-definition featured daily wallpapers from Bing sites worldwide straight into a local folder for rotating desktop backgrounds.

- **Links:** [Website](https://bing-images.blyth.me.uk) · [Source (GitHub)](https://github.com/BlythMeister/BingImageDowload) · [NuGet](https://www.nuget.org/packages/BingImageDownload)
- **Install:** `dotnet tool install --global BingImageDownload`

---

### Libraries & Backend

#### [Google Diff-Match-Patch (.NET)](https://diff-match-patch.blyth.me.uk)
> **Modernized .NET Standard port of Google's diffing engine.**

Repackaged for modern .NET runtimes with an ergonomic API surface and built-in formatting extensions to output cleaner HTML and text diffs.

- **Links:** [Website](https://diff-match-patch.blyth.me.uk) · [Source (GitHub)](https://github.com/BlythMeister/google-diff-match-patch) · [NuGet](https://www.nuget.org/packages/google-diff-match-patch)
- **Install:** `dotnet add package google-diff-match-patch`

---

#### [WebhookRelay.net](https://github.com/BlythMeister/WebhookRelay.net)
> **Secure inbound webhook proxy for firewalled environments.**

An Azure Function + Azure Service Bus pipeline that receives external webhooks and relays them safely down to an internal agent running behind private firewalls.

- **Links:** [Source (GitHub)](https://github.com/BlythMeister/WebhookRelay.net)

---

### Chocolatey

#### [Chocolatey Packages](https://github.com/BlythMeister/chocolatey-packages)
> **Maintained collection of automated Windows packages for Chocolatey.**

A collection of community Windows software packages maintained and automated using the Chocolatey AU (Automatic Updater) framework and CI/CD pipelines to publish updates to chocolatey.org.

- **Links:** [Source (GitHub)](https://github.com/BlythMeister/chocolatey-packages)
- **Install:** `choco install <package-name>`

---

### Utilities & Fun

| Project | Description | Stack & Links |
| :--- | :--- | :--- |
| **[Timelapse](https://github.com/BlythMeister/Timelapse)** | Takes a webcam photo every minute via Bash, then timestamps and compiles frames into a 30 FPS video with C#. | `Bash` · `C#` · [GitHub](https://github.com/BlythMeister/Timelapse) |
| **[Secret Santa Helper](https://github.com/BlythMeister/SecretSantaHelper)** | Festive WPF app that randomizes gift pairings and quietly sends assignments via an SMTP relay. | `WPF` · `C#` · [GitHub](https://github.com/BlythMeister/SecretSantaHelper) |
| **[Advent of Code](https://github.com/BlythMeister/AdventOfCode)** | Solutions and problem benchmarks for the annual Advent of Code challenges. | `C#` · [GitHub](https://github.com/BlythMeister/AdventOfCode) |
