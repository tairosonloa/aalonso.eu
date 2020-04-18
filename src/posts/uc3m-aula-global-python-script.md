---
title: How I made a python script to download my university moodle files
date: 2018-01-30
img: /images/posts/aula-global-python.png
tags: [Software, Education, Portfolio, Projects, Python, Scripting]
---

In my university, Universidad Carlos III de Madrid, we use moodle as our virtual classroom. Professors usually upload all the subjects content to this platform, which we call *[Aula Global](https://aulaglobal.uc3m.es)*. There we the students can find exercises, references, papers, slides, etc.

I must say that most of the students like to download those files to our own computer, or to sync them on the cloud such as the Google Drive within our Google Education accounts. That's because this way is easier to view or edit them, and also we have a backup if for whatever reason *Aula Global* gets down so we can't access the files. More than once it has happened that we wanted to access a file before an exam but we couldn't because the platform was down.

However, *Aula Global* doesn't have an option to download all the files inside a subject. We have to manually downloading them one by one which is tedious, as every subject have many files, and we have between five and ten subjects on this platform. So I decided to develop a Python 3 script to download all the contents of *Aula Global* and save it on a folder per subject. The source code can be found on [GitHub](https://github.com/tairosonloa/Aula_Global_UC3M).

## How it works (2019 updated)
Originally, it was thought to connect to the API REST service that moodle provides to log in users. After a successfully login, it got from that API  an XML with the site structure, subjects name, and every file name and URL within every subject. So what it had to do was just to retrieve those files and save them with their name in their subject folder.

However, *Aula Global* got updated on summer 2019 and this API REST service was closed. [I contacted with the IT service at my university via Twitter](https://twitter.com/Tairosonloa/status/1173521849080320000), where they are very active, and they told me this service won't be longer available.

So as October 30, when I had some free time, I reinvented the wheel. I started developing the script from scratch again, and this time I thought it as a web crawler. What it does now is the following: it connects to the *Aula Global* login page, fills and sends the login form with the user credentials, and after login in, starts navigating through the subjects links and inspecting every file URL to download it. It stills maintains the subject folders structure, and works like a charm!