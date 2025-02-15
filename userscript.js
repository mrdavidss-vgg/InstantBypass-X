// ==UserScript==
// @name         InstaBypass X
// @namespace    http://tampermonkey.net/
// @version      X.1
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

    // Create a UI overlay to indicate the bypass process
    function createUI() {
        const ui = document.createElement('div');
        ui.style.position = 'fixed';
        ui.style.top = '20px'; // Position at the top
        ui.style.left = '20px'; // Position at the left
        ui.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Semi-transparent black background
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

    // Helper function to wait for a specified time
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Main function to handle the bypass process
    async function bypassProcess() {
        // Check if the current page is the Linkvertise homepage
        if (window.location.hostname === 'linkvertise.com' || window.location.hostname === 'www.linkvertise.com') {
            if (window.location.pathname === '/' || window.location.pathname === '') {
                console.log('Linkvertise homepage detected. Skipping bypass.');
                return; // Exit the function if it's the homepage
            }
        }

        // Display the UI overlay
        const ui = createUI();

        // Wait for 2 seconds to ensure the UI is visible
        await wait(500);

        // Get the current URL of the opened tab
        const currentUrl = window.location.href;

        // Construct the bypass URL
        const bypassUrl = `http://bypass.city/bypass?bypass=${encodeURIComponent(currentUrl)}&userscript=true&userscript-version=14.0.2`;

        // Redirect to the bypass URL
        window.location.href = bypassUrl;
    }

    // Start the bypass process
    bypassProcess();
})();
