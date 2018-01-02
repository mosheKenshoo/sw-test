// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

function setAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.browserAction.setBadgeText({text: 'ON'});
  chrome.alarms.create({delayInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});
  window.close();
}

function tempFunc(event) {

    chrome.notifications.create({
        type:     'basic',
        iconUrl:  'stay_hydrated2.png',
        title:    'aThis is another title',
        message:  'bThis is a message',
        buttons: [
            {title: 'cThis is some title'}
        ],
        priority: 0});

    $.get("http://www.feedforall.com/blog-feed.xml", function (data) {
        $(data).find("entry").each(function () { // or "item" or whatever suits your feed
            var el = $(this);

            console.log("------------------------");
            console.log("title      : " + el.find("title").text());
            console.log("author     : " + el.find("author").text());
            console.log("description: " + el.find("description").text());
        });
    });



    // window.close();
}

function clearAlarm() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.alarms.clearAll();
  window.close();
}

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute incriments if released
document.getElementById('sampleSecond').addEventListener('click', setAlarm);
document.getElementById('15min').addEventListener('click', setAlarm);
document.getElementById('ajaxRequest').addEventListener('click', tempFunc);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);
