// ==UserScript==
// @name         InstaBypass X
// @namespace    https://github.com/mrdavidss-vgg/InstantBypass-X
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
        // Don't run if we're already on bypass.city
        if (window.location.hostname === 'bypass.city') {
            console.log('Already on bypass.city, skipping redirection');
            return;
        }
        
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
