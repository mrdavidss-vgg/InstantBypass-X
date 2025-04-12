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

    // Unique identifier for this script's operations
    const SCRIPT_ID = 'instabypass-x-14.0.2';

    function createUI(message) {
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
        ui.textContent = message;
        document.body.appendChild(ui);
        return ui;
    }

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function bypassProcess() {
        // Skip if we've already processed this URL in this session
        const processedKey = `${SCRIPT_ID}-processed-${window.location.href}`;
        if (sessionStorage.getItem(processedKey)) {
            console.log('URL already processed in this session, skipping');
            return;
        }

        // Don't run on bypass.city or its subdomains
        if (window.location.hostname.includes('bypass.city')) {
            console.log('Bypass destination reached');
            return;
        }

        // Skip Linkvertise homepage
        if (window.location.hostname.match(/(www\.)?linkvertise\.com/) && 
            ['/', ''].includes(window.location.pathname)) {
            console.log('Linkvertise homepage detected, skipping');
            return;
        }

        // Mark this URL as processed
        sessionStorage.setItem(processedKey, 'true');

        const ui = createUI('Bypassing Link with (InstaBypass X)...');
        
        try {
            await wait(450);
            
            // Create new URL to avoid potential loops from redirects
            const bypassUrl = new URL('https://bypass.city/bypass');
            bypassUrl.searchParams.set('bypass', window.location.href);
            bypassUrl.searchParams.set('userscript', 'true');
            bypassUrl.searchParams.set('userscript-version', '14.0.2');
            
            // Add a random parameter to prevent caching issues
            bypassUrl.searchParams.set('_t', Date.now());

            ui.textContent = 'Redirecting to bypass service...';
            window.location.href = bypassUrl.toString();
        } catch (error) {
            ui.textContent = 'Bypass failed!';
            console.error('Bypass error:', error);
            setTimeout(() => document.body.removeChild(ui), 3000);
        }
    }

    // Run with a slight delay to allow page to settle
    setTimeout(bypassProcess, 100);
})();
