// ==UserScript==
// @name         InstaBypass X
// @namespace    https://github.com/mrdavidss-vgg/InstantBypass-X
// @version      X
// @description  Instant Bypass for Adlinks!
// @author       mrdavidss + pookie deepseek v3
// @match        *://*.linkvertise.com/*
// @match        *://*.sub2get.com/*
// @match        *://*.loot-link.com/*
// @match        *://*.adfoc.us/*
// @match        *://*.boost.ink/*
// @match        *://*.boostfusedgt.com/*
// @match        *://*.leasurepartment.xyz/*
// @match        *://*.letsboost.net/*
// @match        *://*.mboost.me/*
// @match        *://*.rekonise.com/*
// @match        *://*.shorte.st/*
// @match        *://*.sub2unlock.com/*
// @match        *://*.sub2unlock.net/*
// @match        *://*.v.gd/*
// @match        *://*.dragonslayer.com/*
// @match        *://*.tinyurl.com/*
// @match        *://*.bit.ly/*
// @match        *://*.is.gd/*
// @match        *://*.rebrand.ly/*
// @match        *://*.empebau.eu/*
// @match        *://*.socialwolvez.com/*
// @match        *://*.sub1s.com/*
// @match        *://*.tinylink.onl/*
// @match        *://*.google-url.com/*
// @match        *://*.justpaste.it/*
// @match        *://*.subfinal.com/*
// @match        *://*.location-redirect.com/*
// @match        *://*.ad-maven.com/*
// @exclude      *://linkvertise.com/
// @exclude      *://www.linkvertise.com/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function createUI() {
        const ui = document.createElement('div');
        ui.style.position = 'fixed';
        ui.style.top = '20px';
        ui.style.left = '20px';
        ui.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        ui.style.color = 'white';
        ui.style.fontSize = '16px';
        ui.style.fontFamily = 'Arial, sans-serif';
        ui.style.padding = '10px 20px';
        ui.style.borderRadius = '5px';
        ui.style.zIndex = '9999';
        ui.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        ui.textContent = 'Bypassing Link with (InstaBypass X)...';
        document.body.appendChild(ui);
        return ui;
    }

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function bypassProcess() {
        if (window.location.hostname === 'linkvertise.com' || window.location.hostname === 'www.linkvertise.com') {
            if (window.location.pathname === '/' || window.location.pathname === '') {
                console.log('Linkvertise homepage detected. Skipping bypass.');
                return;
            }
        }

        const ui = createUI();

        await wait(450);

        const currentUrl = window.location.href;

        const bypassUrl = `http://bypass.city/bypass?bypass=${encodeURIComponent(currentUrl)}&userscript=true&userscript-version=14.0.2`;

        window.location.href = bypassUrl;
    }

    bypassProcess();
})();
