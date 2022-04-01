# Budget Tracker

## Table of Contents

[Description](#description)  
[Installation](#installation)  
[How it works](#how-it-works)  
[Usage](#usage)  
[Utilizes](#utilizes)  
[Credits](#credits)  
[Questions](#questions)  
[License](#license)

## Description

![main screenshot](./public/images/screen1.png)

the Budget Tracker app was designed so that users could keep track of their expenses over time.

This app served as a great way to learn more about PWAs and the benefits they can provide to users above and beyond those of traditional web applications.

On that note, the application is characterized by three main features:

- Users can record expenses through the app's minimalist and user-friendly UI.
- Budget data is displayed in both column and graph format.
- Application utilizes Service Worker and IndexedDB for offline functionality.

## Installation

No installation required; simply follow the link below to access the deployed application.

## How it works

My primary focus was building a fully-fledged PWA with offline functionality; With that in mind, the rest of the application is fairly lean. The UI is minimalist, and only three Express.js routes were necessary to access/modify the database, which consists of one table.

Usage is straightforward. Simply enter your transaction name and amount in the appropriate input boxes, and then hit the "Add Funds" button.

![main screenshot](./public/images/screen32.png)

The highlight of the application is its offline capability. Users can submit transactions in the absence of internet connectivity thanks to IndexedDB's caching functionality. Additionally, all front-end assets are cached using Service Worker.

## Utilizes

- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose

## Questions

Feel free to shoot me any questions at the email below:

rrich.kray.93@gmail.com

find my GitHub profile by following the link below:

https://github.com/rrich-kray/

## License

Copyright (c) 2022, Ryan Kray
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE file in the root directory of this source tree and reproduced below.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. All advertising materials mentioning features or use of this software must display the following acknowledgement: This product includes software developed by Ryan Kray.
4. Neither the name of this application's developer nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER ''AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.