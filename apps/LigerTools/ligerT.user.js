// ==UserScript==
// @name LigerTools
// @namespace   http://ligerdriver.xyz/apps/ligerTools/
// @icon        http://ligerdriver.xyz/assets/images/Liger_logo.png
// @downloadURL http://ligerdriver.xyz/apps/LigerTools/ligerT.user.js
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
  script.src = 'http://ligerdriver.xyz/apps/LigerTools/loader.js';
  document.getElementsByTagName('head')[0].appendChild(script);
})();
