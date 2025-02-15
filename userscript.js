// ==UserScript==
// @name         InstaBypass X
// @namespace    http://tampermonkey.net/
// @version      X
// @description  Instant Bypass for Adlinks!
// @author       mrdavidss + pookie deepseek v3
// @match        *://*.adshnk.com/*
// @match        *://*.adshrink.it/*
// @match        *://*.shrink-service.it/*
// @match        *://adfoc.us/*
// @match        *://boost.ink/*
// @match        *://bst.gg/*
// @match        *://bst.wtf/*
// @match        *://booo.st/*
// @match        *://boost.fusedgt.com/*
// @match        *://thedragonslayer2.github.io/*
// @match        *://empebau.eu/*
// @match        *://www.google.com/url*
// @match        *://is.gd/*
// @match        *://justpaste.it/redirect/*
// @match        *://leasurepartment.xyz/*
// @match        *://letsboost.net/*
// @match        *://linkvertise.com/*
// @match        *://loot-link.com/*
// @match        *://loot-link.co/*
// @match        *://loot-link.org/*
// @match        *://loot-link.net/*
// @match        *://loot-link.info/*
// @match        *://loot-links.com/*
// @match        *://loot-links.co/*
// @match        *://loot-links.org/*
// @match        *://loot-links.net/*
// @match        *://loot-links.info/*
// @match        *://lootlinks.com/*
// @match        *://lootlinks.co/*
// @match        *://lootlinks.org/*
// @match        *://lootlinks.net/*
// @match        *://lootlinks.info/*
// @match        *://lootdest.com/*
// @match        *://lootdest.co/*
// @match        *://lootdest.org/*
// @match        *://lootdest.net/*
// @match        *://lootdest.info/*
// @match        *://links-loot.com/*
// @match        *://links-loot.co/*
// @match        *://links-loot.org/*
// @match        *://links-loot.net/*
// @match        *://links-loot.info/*
// @match        *://linksloot.com/*
// @match        *://linksloot.co/*
// @match        *://linksloot.org/*
// @match        *://linksloot.net/*
// @match        *://linksloot.info/*
// @match        *://lootlink.com/*
// @match        *://lootlink.co/*
// @match        *://lootlink.org/*
// @match        *://lootlink.net/*
// @match        *://lootlink.info/*
// @match        *://mboost.me/*
// @match        *://rekonise.com/*
// @match        *://rkns.link/*
// @match        *://shorte.st/*
// @match        *://sh.st/*
// @match        *://gestyy.com/*
// @match        *://destyy.com/*
// @match        *://social-unlock.com/*
// @match        *://socialwolvez.com/app/l/*
// @match        *://sub1s.com/*
// @match        *://sub2get.com/*
// @match        *://subtolink.com/*
// @match        *://sub2unlock.com/*
// @match        *://unlocknow.net/*
// @match        *://v.gd/*
// @match        https://bypass.city/*
// @match        https://adbypass.org/*
// @match        http://localhost:3000/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
  
  function createUI() {
    const ui = document.createElement('div');
    ui.style.position = 'fixed';
    ui.style.top = '0';
    ui.style.left = '0';
    ui.style.width = '100%';
    ui.style.height = '100%';
    ui.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    ui.style.display = 'flex';
    ui.style.justifyContent = 'center';
    ui.style.alignItems = 'center';
    ui.style.color = 'white';
    ui.style.fontSize = '24px';
    ui.style.fontFamily = 'Futura, Arial, sans-serif';
    ui.style.zIndex = '9999';
    ui.textContent = 'Bypassing Link with (InstaBypass X)';
    document.body.appendChild(ui);
    return ui;
  }
  
  
    // Get the current URL of the opened tab
    const currentUrl = window.location.href;

    // Construct the bypass URL
    const bypassUrl = `http://bypass.city/bypass?bypass=${encodeURIComponent(currentUrl)}`;

    // Redirect to the bypass URL in the current tab
    window.location.href = bypassUrl;
})();
