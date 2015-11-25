// ==UserScript==
// @name        LigerTools
// @namespace   https://ligerdriver.xyz/apps/LigerTools/
// @icon        https://ligerdriver.xyz/assets/images/Liger_logo.png
// @downloadURL https://ligerdriver.xyz/apps/LigerTools/liger.user.js
// @description Multi-Tool for Managed Services
// @include     *://toolzilla*
// @include     *://crm*
// @include     *://iris*
// @include     *://hs*
// @version     0.1.0
// @grant       none
// @copyright   2015+, Rick Markins (rmarkins@)
// ==/UserScript==

(function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://ligerdriver.xyz/apps/LigerTools/loader.js';
  document.getElementsByTagName('head')[0].appendChild(script);
})();
