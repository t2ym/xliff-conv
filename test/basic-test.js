/*
@license https://github.com/t2ym/xliff-conv/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
*/
(function (root, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.XliffConvBasicTest = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.XliffConvBasicTest = factory();
  }

}(this, function () {
// UMD Definition above, do not remove this line
  'use strict';

  var XliffConvBasicTest = function () {};

  XliffConvBasicTest.prototype.run = function (XliffConv, chai) {
    var assert = chai.assert;
    var bundle_de_prev = {
      "app": {
        "meta": {
          "todo": [
            {
              "op": "replacex",
              "path": "/headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2",
              "value": "Copyright (c) 2015 The Polymer Authors. All rights reserved."
            },
            {
              "op": "replace",
              "path": "/headerPanelMain:div_1:iron-pages:section_1:paper-material:h1",
              "value": "no Users"
            },
            {
              "op": "replace",
              "path": "/headerPanelMain:div_1:iron-pages:section_2:paper-material:h1/1",
              "value": "X{{params.name}}"
            },
            {
              "op": "replace",
              "path": "/headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1/1",
              "value": "{{params.name}}"
            }
          ]
        },
        "model": {},
        "drawerToolbar:span": "Menu",
        "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1": "Home",
        "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_1:span_1": "Users",
        "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1": "Contact",
        "mainToolbar:div_2:div": "Polymer Starter Kit",
        "mainToolbar:div_3:div": "The future of the web today",
        "headerPanelMain:div_1:iron-pages:section:paper-material:p_1": "You now have:",
        "headerPanelMain:div_1:iron-pages:section:paper-material:p_3": [
          "Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.",
          "layouts",
          "preview"
        ],
        "headerPanelMain:div_1:iron-pages:section:paper-material_1:p": "This is another card.",
        "license": "License",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1": "Everything in this repo is BSD style license unless otherwise specified.",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2": "Copyright (c) 2015 The Polymer Authors. All rights reserved.",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_3": "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li": "Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_1": "Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_2": "Neither the name of Google Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_5": "THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.",
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:h1": "Users",
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:p_1": "This is the users section ",
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2": 1,
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4": true,
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6": 1,
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8": true,
        "headerPanelMain:div_1:iron-pages:section_2:paper-material:h1": [
          "User: {1}",
          "{{params.name}}"
        ],
        "headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1": [
          "This is {1}'s section",
          "{{params.name}}",
          "<a>"
        ],
        "headerPanelMain:div_1:iron-pages:section_3:paper-material:h1": "Contact",
        "headerPanelMain:div_1:iron-pages:section_3:paper-material:p_1": "This is the contact section",
        "toast:span": "Ok"
      },
      "my-greeting": {
        "meta": {
          "todo": []
        },
        "model": {},
        "label_2": "Update text to change the greeting.",
        "welcome": ""
      },
      "my-list": {
        "meta": {
          "todo": [
            {
              "op": "review",
              "path": "/items/0",
              "value": "Responsive Web App boilerplate"
            },
            {
              "op": "review",
              "path": "/items/1",
              "value": "Iron Elements and Paper Elements"
            },
            {
              "op": "review",
              "path": "/items/4",
              "value": "Routing with Page.js"
            },
            {
              "op": "replace",
              "path": "/items/8",
              "value": 2
            }
          ]
        },
        "model": {},
        "items": [
          "Responsive Web App boilerplate",
          "Iron Elements and Paper Elements",
          "End-to-end Build Tooling (including Vulcanize)",
          "Unit testing with Web Component Tester",
          "Routing with Page.js",
          "Offline support with the Platinum Service Worker Elements",
          1,
          true,
          3
        ]
      }
    };

    var bundle_de_expected = {
      "app": {
        "meta": {
          "todo": [
            {
              "op": "replace",
              "path": "/headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2",
              "value": "Copyright (c) 2015 The Polymer Authors. All rights reserved."
            },
            {
              "op": "replace",
              "path": "/headerPanelMain:div_1:iron-pages:section_1:paper-material:h1",
              "value": "no Users"
            },
            {
              "op": "replace",
              "path": "/headerPanelMain:div_1:iron-pages:section_2:paper-material:h1/1",
              "value": "X{{params.name}}"
            },
            {
              "op": "replace",
              "path": "/drawerToolbar:span",
              "value": "Menu"
            },
            {
              "op": "review",
              "path": "/paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1",
              "value": "Home"
            },
            {
              "op": "replace",
              "path": "/paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1",
              "value": "Contact"
            },
            {
              "op": "review",
              "path": "/headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1",
              "value": "Everything in this repo is BSD style license unless otherwise specified."
            },
            {
              "op": "replace",
              "path": "/headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2",
              "value": 1
            },
            {
              "op": "replace",
              "path": "/headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4",
              "value": true
            },
            {
              "op": "replace",
              "path": "/headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6",
              "value": 1
            },
            {
              "op": "replace",
              "path": "/headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8",
              "value": true
            }
          ]
        },
        "model": {},
        "drawerToolbar:span": "Menu",
        "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1": "de Home",
        "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_1:span_1": "de Users",
        "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1": "Contact",
        "mainToolbar:div_2:div": "de Polymer Starter Kit",
        "mainToolbar:div_3:div": "de The future of the web today",
        "headerPanelMain:div_1:iron-pages:section:paper-material:p_1": "de You now have:",
        "headerPanelMain:div_1:iron-pages:section:paper-material:p_3": [
          "de Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.",
          "de layouts",
          "de preview"
        ],
        "headerPanelMain:div_1:iron-pages:section:paper-material_1:p": "de This is another card.",
        "license": "de License",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1": "de Everything in this repo is BSD style license unless otherwise specified.",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2": "Copyright (c) 2015 The Polymer Authors. All rights reserved.",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_3": "de Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li": "de Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_1": "de Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_2": "de Neither the name of Google Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.",
        "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_5": "de THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.",
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:h1": "Users",
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:p_1": "de This is the users section ",
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2": 2,
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4": false,
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6": 2,
        "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8": false,
        "headerPanelMain:div_1:iron-pages:section_2:paper-material:h1": [
          "de User: {1}",
          "{{params.name}}"
        ],
        "headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1": [
          "de This is {1}'s section",
          "{{params.name}}",
          "<a>"
        ],
        "headerPanelMain:div_1:iron-pages:section_3:paper-material:h1": "de Contact",
        "headerPanelMain:div_1:iron-pages:section_3:paper-material:p_1": "de This is the contact section",
        "toast:span": "de Ok"
      },
      "my-greeting": {
        "meta": {
          "todo": []
        },
        "model": {},
        "label_2": "de Update text to change the greeting.",
        "welcome": "de Welcome!"
      },
      "my-list": {
        "meta": {
          "todo": [
            {
              "op": "review",
              "path": "/items/0",
              "value": "Responsive Web App boilerplate"
            },
            {
              "op": "review",
              "path": "/items/1",
              "value": "Iron Elements and Paper Elements"
            },
            {
              "op": "review",
              "path": "/items/4",
              "value": "Routing with Page.js"
            },
            {
              "op": "replace",
              "path": "/items/8",
              "value": 2
            },
            {
              "op": "replace",
              "path": "/items/2",
              "value": "End-to-end Build Tooling (including Vulcanize)"
            },
            {
              "op": "replace",
              "path": "/items/6",
              "value": 1
            },
            {
              "op": "replace",
              "path": "/items/7",
              "value": true
            }
          ]
        },
        "model": {},
        "items": [
          "Responsive Web App boilerplate",
          "Iron Elements and Paper Elements",
          "End-to-end Build Tooling (including Vulcanize)",
          "de Unit testing with Web Component Tester",
          "Routing with Page.js",
          "de Offline support with the Platinum Service Worker Elements",
          2,
          false,
          3
        ]
      }
    };

    var bundles = {
    	"de": {
    	  "app": {
    	    "meta": {
    	      "todo": [
    	        {
    	          "op": "replace",
    	          "path": "/headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2",
    	          "value": "Copyright (c) 2015 The Polymer Authors. All rights reserved."
    	        },
    	        {
    	          "op": "replace",
    	          "path": "/drawerToolbar:span",
    	          "value": "Menu"
    	        },
    	        {
    	          "op": "review",
    	          "path": "/paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1",
    	          "value": "Home"
    	        },
    	        {
    	          "op": "replace",
    	          "path": "/paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1",
    	          "value": "Contact"
    	        },
              {
                "op": "add",
                "path": "/mainToolbar:div_2:div",
                "value": "{{autotranslated}}"
              },
              {
                "op": "add",
                "path": "/mainToolbar:div_3:div",
                "value": "The future of the web today"
              },
    	        {
    	          "op": "replace",
    	          "path": "/headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2",
    	          "value": 1
    	        },
    	        {
    	          "op": "replace",
    	          "path": "/headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4",
    	          "value": true
    	        },
    	        {
    	          "op": "replace",
    	          "path": "/headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6",
    	          "value": 1
    	        },
    	        {
    	          "op": "replace",
    	          "path": "/headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8",
    	          "value": true
    	        }
    	      ]
    	    },
    	    "model": {},
    	    "drawerToolbar:span": "Menu",
    	    "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1": "de Home",
    	    "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_1:span_1": "de Users",
    	    "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1": "Contact",
    	    "mainToolbar:div_2:div": "{{autotranslated}}",
    	    "mainToolbar:div_3:div": "de The future of the web today",
    	    "headerPanelMain:div_1:iron-pages:section:paper-material:p_1": "de You now have:",
    	    "headerPanelMain:div_1:iron-pages:section:paper-material:p_3": [
    	      "de Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.",
    	      "de layouts",
    	      "de preview"
    	    ],
    	    "headerPanelMain:div_1:iron-pages:section:paper-material_1:p": "de This is another card.",
    	    "license": "de License",
    	    "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1": "de Everything in this repo is BSD style license unless otherwise specified.",
    	    "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2": "Copyright (c) 2015 The Polymer Authors. All rights reserved.",
    	    "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_3": "de Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:",
    	    "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li": "de Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.",
    	    "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_1": "de Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.",
    	    "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_2": "de Neither the name of Google Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.",
    	    "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_5": "de THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.",
    	    "headerPanelMain:div_1:iron-pages:section_1:paper-material:h1": "de Users",
    	    "headerPanelMain:div_1:iron-pages:section_1:paper-material:p_1": "de This is the users section ",
    	    "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2": 2,
    	    "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4": false,
    	    "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6": 2,
    	    "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8": false,
    	    "headerPanelMain:div_1:iron-pages:section_2:paper-material:h1": [
    	      "de User: {1}",
    	      "{{params.name}}"
    	    ],
    	    "headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1": [
    	      "de This is {1}'s section",
    	      "{{params.name}}",
            "<a>"
    	    ],
    	    "headerPanelMain:div_1:iron-pages:section_3:paper-material:h1": "de Contact",
    	    "headerPanelMain:div_1:iron-pages:section_3:paper-material:p_1": "de This is the contact section",
    	    "toast:span": "de Ok"
    	  },
    	  "my-greeting": {
    	    "meta": {
    	      "todo": []
    	    },
    	    "model": {},
    	    "label_2": "de Update text to change the greeting.",
    	    "welcome": "de Welcome!"
    	  },
    	  "my-list": {
    	    "meta": {
    	      "todo": [
    	        {
    	          "op": "review",
    	          "path": "/items/1",
    	          "value": "Iron Elements and Paper Elements",
    	        },
    	        {
    	          "op": "replace",
    	          "path": "/items/2",
    	          "value": "End-to-end Build Tooling (including Vulcanize)"
    	        },
              {
                "op": "invalid",
                "path": "/items/3",
                "value": "Unit testing with Web Component Tester"
              },
              {
                "op": "replace",
                "path": "/items/6",
                "value": 1
              },
              {
                "op": "replace",
                "path": "/items/7",
                "value": true
              },
              {
                "op": "replace",
                "path": "/items/8",
                "value": 2
              }
    	      ]
    	    },
    	    "model": {},
    	    "items": [
    	      "de Responsive Web App boilerplate",
    	      "de Iron Elements and Paper Elements",
    	      "End-to-end Build Tooling (including Vulcanize)",
    	      "de Unit testing with Web Component Tester",
    	      "de Routing with Page.js",
    	      "de Offline support with the Platinum Service Worker Elements",
            2,
            false,
            4
    	    ]
    	  }
    	},
      "": {
        "app": {
          "meta": {},
          "model": {},
          "drawerToolbar:span": "Menu",
          "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1": "Home",
          "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_1:span_1": "Users",
          "paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1": "Contact",
          "mainToolbar:div_2:div": "{{autotranslated}}",
          "mainToolbar:div_3:div": "The future of the web today",
          "headerPanelMain:div_1:iron-pages:section:paper-material:p_1": "You now have:",
          "headerPanelMain:div_1:iron-pages:section:paper-material:p_3": [
            "Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.",
            "layouts",
            "preview"
          ],
          "headerPanelMain:div_1:iron-pages:section:paper-material_1:p": "This is another card.",
          "license": "License",
          "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1": "Everything in this repo is BSD style license unless otherwise specified.",
          "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2": "Copyright (c) 2015 The Polymer Authors. All rights reserved.",
          "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_3": "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:",
          "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li": "Redistributions of source code must retain the above copyright\n                notice, this list of conditions and the following disclaimer.",
          "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_1": "Redistributions in binary form must reproduce the above\n                copyright notice, this list of conditions and the following disclaimer\n                in the documentation and/or other materials provided with the\n                distribution.",
          "headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_2": "Neither the name of Google Inc. nor the names of its\n                contributors may be used to endorse or promote products derived from\n                this software without specific prior written permission.",
          "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_5": "THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.",
          "headerPanelMain:div_1:iron-pages:section_1:paper-material:h1": "Users",
          "headerPanelMain:div_1:iron-pages:section_1:paper-material:p_1": "This is the users section",
          "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2": 1,
          "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4": true,
          "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6": 1,
          "headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8": true,
          "headerPanelMain:div_1:iron-pages:section_2:paper-material:h1": [
            "User: {1}",
            "{{params.name}}"
          ],
          "headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1": [
            "This is {1}'s section",
            "{{params.name}}",
            "<a>"
          ],
          "headerPanelMain:div_1:iron-pages:section_3:paper-material:h1": "Contact",
          "headerPanelMain:div_1:iron-pages:section_3:paper-material:p_1": "This is the contact section",
          "toast:span": "Ok"
        },
        "my-greeting": {
          "meta": {},
          "model": {},
          "label_2": "Update text to change the greeting.",
          "welcome": "Welcome!"
        },
        "my-list": {
          "meta": {},
          "model": {},
          "items": [
            "Responsive Web App boilerplate",
            "Iron Elements and Paper Elements",
            "End-to-end Build Tooling (including Vulcanize)",
            "Unit testing with Web Component Tester",
            "Routing with Page.js",
            "Offline support with the Platinum Service Worker Elements",
            1,
            true,
            3
          ]
        }
      }
    };

    var xliff_de_import =
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<!DOCTYPE xliff PUBLIC "-//XLIFF//DTD XLIFF//EN" "http://www.oasis-open.org/committees/xliff/documents/xliff.dtd">\n' +
      '<xliff version="1.0">\n' +
      '  <file xml:space="default" source-language="en" target-language="de" datatype="plaintext" original="messages" date="1970-01-01T00:00:00Z" product-name="messages">\n' +
      '    <header>\n' +
      '      <tool tool-id="xliff-conv" tool-name="xliff-conv" tool-version="0.0.5"/>\n' +
      '    </header>\n' +
      '    <body>\n' +
      '      <trans-unit id="app.drawerToolbar:span">\n' +
      '        <source>Menu</source>\n' +
      '        <target state="needs-translation">Menu</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1">\n' +
      '        <source>Home</source>\n' +
      '        <target state="needs-review-translation">de Home</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_1:span_1" approved="yes">\n' +
      '        <source>Users</source>\n' +
      '        <target state="translated">de Users</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1">\n' +
      '        <source>Contact</source>\n' +
      '        <target state="needs-translation">Contact</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.mainToolbar:div_2:div" approved="yes">\n' +
      '        <source>Polymer Starter Kit</source>\n' +
      '        <target state="translated">de Polymer Starter Kit</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.mainToolbar:div_3:div" approved="yes">\n' +
      '        <source>The future of the web today</source>\n' +
      '        <target state="translated">de The future of the web today</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_1" approved="yes">\n' +
      '        <source>You now have:</source>\n' +
      '        <target state="translated">de You now have:</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.0" approved="yes">\n' +
      '        <source>Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.</source>\n' +
      '        <target state="translated">de Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.1" approved="yes">\n' +
      '        <source>layouts</source>\n' +
      '        <target state="translated">de layouts</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.2" approved="yes">\n' +
      '        <source>preview</source>\n' +
      '        <target state="translated">de preview</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_1:p" approved="yes">\n' +
      '        <source>This is another card.</source>\n' +
      '        <target state="translated">de This is another card.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.license" approved="yes">\n' +
      '        <source>_$string$_License</source>\n' +
      '        <target state="translated">_$string$_de License</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1">\n' +
      '        <source>Everything in this repo is BSD style license unless otherwise specified.</source>\n' +
      '        <target>de Everything in this repo is BSD style license unless otherwise specified.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2">\n' +
      '        <source>Copyright (c) 2015 The Polymer Authors. All rights reserved.</source>\n' +
      '        <target state="invalid-state">Copyright (c) 2015 The Polymer Authors. All rights reserved.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_3" approved="yes">\n' +
      '        <source>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</source>\n' +
      '        <target state="translated">de Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li" approved="yes">\n' +
      '        <source>Redistributions of source code must retain the above copyright\n' +
      '                notice, this list of conditions and the following disclaimer.</source>\n' +
      '        <target state="translated">de Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_1" approved="yes">\n' +
      '        <source>Redistributions in binary form must reproduce the above\n' +
      '                copyright notice, this list of conditions and the following disclaimer\n' +
      '                in the documentation and/or other materials provided with the\n' +
      '                distribution.</source>\n' +
      '        <target state="translated">de Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_2" approved="yes">\n' +
      '        <source>Neither the name of Google Inc. nor the names of its\n' +
      '                contributors may be used to endorse or promote products derived from\n' +
      '                this software without specific prior written permission.</source>\n' +
      '        <target state="translated">de Neither the name of Google Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_5" approved="yes">\n' +
      '        <source>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</source>\n' +
      '        <target state="translated">de THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:h1">\n' +
      '        <source>_$undefined$_ABC</source>\n' +
      '        <target state="needs-l10n">_$undefined$_Users</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:p_1" approved="yes">\n' +
      '        <source>This is the users section</source>\n' +
      '        <target state="translated">de This is the users section </target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2" restype="x-json-number">\n' +
      '        <source>1</source>\n' +
      '        <target state="needs-translation">2</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4" restype="x-json-boolean">\n' +
      '        <source>true</source>\n' +
      '        <target state="needs-translation">false</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6">\n' +
      '        <source>_$number$_1</source>\n' +
      '        <target state="needs-translation">_$number$_2</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8">\n' +
      '        <source>_$boolean$_true</source>\n' +
      '        <target state="needs-translation">_$boolean$_false</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.0" approved="yes">\n' +
      '        <source>User: {1}</source>\n' +
      '        <target state="translated">de User: {1}</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.1" approved="yes">\n' +
      '        <source>{{params.name}}</source>\n' +
      '        <target state="final">{{params.name}}</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.0" approved="yes">\n' +
      '        <source>This is {1}\'s section</source>\n' +
      '        <target state="translated">de This is {1}\'s section</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.1">\n' +
      '        <source>{{params.name}}</source>\n' +
      '        <target state="new">{{params.name}}</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.2" approved="yes">\n' +
      '        <source>&lt;a&gt;</source>\n' +
      '        <target state="translated">&lt;a&gt;</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_3:paper-material:h1" approved="yes">\n' +
      '        <source>Contact</source>\n' +
      '        <target state="translated">de Contact</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_3:paper-material:p_1" approved="yes">\n' +
      '        <source>This is the contact section</source>\n' +
      '        <target state="translated">de This is the contact section</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.toast:span" approved="yes">\n' +
      '        <source>Ok</source>\n' +
      '        <target state="translated">de Ok</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-greeting.label_2" approved="yes">\n' +
      '        <source>Update text to change the greeting.</source>\n' +
      '        <target state="translated">de Update text to change the greeting.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-greeting.welcome" approved="yes">\n' +
      '        <source>Welcome!</source>\n' +
      '        <target state="translated">de Welcome!</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-greeting.inexstent" approved="yes">\n' +
      '        <source>inexistent string</source>\n' +
      '        <target state="translated">de inexistent string</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-greeting.inexstent-object.inexistent" approved="yes">\n' +
      '        <source>inexistent string</source>\n' +
      '        <target state="translated">de inexistent string</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.0" restype="x-json-object">\n' +
      '        <source>{"Responsive":"Web App boilerplate"}</source>\n' +
      '        <target state="needs-review-translation">{"Responsive":"de Web App boilerplate"}</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.1">\n' +
      '        <source>_$object$_{"Iron":"Elements and Paper Elements"}</source>\n' +
      '        <target state="needs-review-translation">_$object$_{"Iron":"de Elements and Paper Elements"}</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.2">\n' +
      '        <source>End-to-end Build Tooling (including Vulcanize)</source>\n' +
      '        <target>End-to-end Build Tooling (including Vulcanize)</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.3" approved="yes">\n' +
      '        <source>Unit testing with Web Component Tester</source>\n' +
      '        <target state="translated">de Unit testing with Web Component Tester</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.4" approved="yes" restype="x-json-undefined">\n' +
      '        <source>undefined</source>\n' +
      '        <target state="translated">undefined</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.5" approved="yes">\n' +
      '        <source>Offline support with the Platinum Service Worker Elements</source>\n' +
      '        <target>de Offline support with the Platinum Service Worker Elements</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.6" restype="x-json-number">\n' +
      '        <source>1</source>\n' +
      '        <target state="needs-translation">2</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.7" restype="x-json-boolean">\n' +
      '        <source>true</source>\n' +
      '        <target state="needs-translation">false</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.8" restype="x-json-number">\n' +
      '        <source>3</source>\n' +
      '        <target state="needs-translation">4</target>\n' +
      '      </trans-unit>\n' +
      '    </body>\n' +
      '  </file>\n' +
      '</xliff>';

    var xliff_de_expected =
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<!DOCTYPE xliff PUBLIC "-//XLIFF//DTD XLIFF//EN" "http://www.oasis-open.org/committees/xliff/documents/xliff.dtd">\n' +
      '<xliff version="1.0">\n' +
      '  <file xml:space="default" source-language="en" target-language="de" datatype="plaintext" original="messages" date="1970-01-01T00:00:00Z" product-name="messages">\n' +
      '    <header>\n' +
      '      <tool tool-id="xliff-conv" tool-name="xliff-conv" tool-version="0.0.5"/>\n' +
      '    </header>\n' +
      '    <body>\n' +
      '      <trans-unit id="app.drawerToolbar:span">\n' +
      '        <source>Menu</source>\n' +
      '        <target state="needs-translation">Menu</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1">\n' +
      '        <source>Home</source>\n' +
      '        <target state="needs-review-translation">de Home</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_1:span_1" approved="yes">\n' +
      '        <source>Users</source>\n' +
      '        <target state="translated">de Users</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1">\n' +
      '        <source>Contact</source>\n' +
      '        <target state="needs-translation">Contact</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.mainToolbar:div_2:div" approved="yes">\n' +
      '        <source>{{autotranslated}}</source>\n' +
      '        <target state="translated">{{autotranslated}}</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.mainToolbar:div_3:div">\n' +
      '        <source>The future of the web today</source>\n' +
      '        <target state="new">de The future of the web today</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_1" approved="yes">\n' +
      '        <source>You now have:</source>\n' +
      '        <target state="translated">de You now have:</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.0" approved="yes">\n' +
      '        <source>Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.</source>\n' +
      '        <target state="translated">de Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.1" approved="yes">\n' +
      '        <source>layouts</source>\n' +
      '        <target state="translated">de layouts</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.2" approved="yes">\n' +
      '        <source>preview</source>\n' +
      '        <target state="translated">de preview</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_1:p" approved="yes">\n' +
      '        <source>This is another card.</source>\n' +
      '        <target state="translated">de This is another card.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.license" approved="yes">\n' +
      '        <source>License</source>\n' +
      '        <target state="translated">de License</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1" approved="yes">\n' +
      '        <source>Everything in this repo is BSD style license unless otherwise specified.</source>\n' +
      '        <target state="translated">de Everything in this repo is BSD style license unless otherwise specified.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2">\n' +
      '        <source>Copyright (c) 2015 The Polymer Authors. All rights reserved.</source>\n' +
      '        <target state="needs-translation">Copyright (c) 2015 The Polymer Authors. All rights reserved.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_3" approved="yes">\n' +
      '        <source>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</source>\n' +
      '        <target state="translated">de Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li" approved="yes">\n' +
      '        <source>Redistributions of source code must retain the above copyright\n' +
      '                notice, this list of conditions and the following disclaimer.</source>\n' +
      '        <target state="translated">de Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_1" approved="yes">\n' +
      '        <source>Redistributions in binary form must reproduce the above\n' +
      '                copyright notice, this list of conditions and the following disclaimer\n' +
      '                in the documentation and/or other materials provided with the\n' +
      '                distribution.</source>\n' +
      '        <target state="translated">de Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_2" approved="yes">\n' +
      '        <source>Neither the name of Google Inc. nor the names of its\n' +
      '                contributors may be used to endorse or promote products derived from\n' +
      '                this software without specific prior written permission.</source>\n' +
      '        <target state="translated">de Neither the name of Google Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_5" approved="yes">\n' +
      '        <source>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</source>\n' +
      '        <target state="translated">de THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:h1" approved="yes">\n' +
      '        <source>Users</source>\n' +
      '        <target state="translated">de Users</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:p_1" approved="yes">\n' +
      '        <source>This is the users section</source>\n' +
      '        <target state="translated">de This is the users section </target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2" restype="x-json-number">\n' +
      '        <source>1</source>\n' +
      '        <target state="needs-translation">2</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4" restype="x-json-boolean">\n' +
      '        <source>true</source>\n' +
      '        <target state="needs-translation">false</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6" restype="x-json-number">\n' +
      '        <source>1</source>\n' +
      '        <target state="needs-translation">2</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8" restype="x-json-boolean">\n' +
      '        <source>true</source>\n' +
      '        <target state="needs-translation">false</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.0" approved="yes">\n' +
      '        <source>User: {1}</source>\n' +
      '        <target state="translated">de User: {1}</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.1" approved="yes">\n' +
      '        <source>{{params.name}}</source>\n' +
      '        <target state="translated">{{params.name}}</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.0" approved="yes">\n' +
      '        <source>This is {1}\'s section</source>\n' +
      '        <target state="translated">de This is {1}\'s section</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.1" approved="yes">\n' +
      '        <source>{{params.name}}</source>\n' +
      '        <target state="translated">{{params.name}}</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.2" translate="no" approved="yes">\n' +
      '        <source>&lt;a&gt;</source>\n' +
      '        <target>replaced value</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_3:paper-material:h1" approved="yes">\n' +
      '        <source>Contact</source>\n' +
      '        <target state="translated">de Contact</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_3:paper-material:p_1" approved="yes">\n' +
      '        <source>This is the contact section</source>\n' +
      '        <target state="translated">de This is the contact section</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="app.toast:span" approved="yes">\n' +
      '        <source>Ok</source>\n' +
      '        <target state="translated">de Ok</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-greeting.label_2" approved="yes">\n' +
      '        <source>Update text to change the greeting.</source>\n' +
      '        <target state="translated">de Update text to change the greeting.</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-greeting.welcome" approved="yes">\n' +
      '        <source>Welcome!</source>\n' +
      '        <target state="translated">de Welcome!</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.0" approved="yes">\n' +
      '        <source>Responsive Web App boilerplate</source>\n' +
      '        <target state="translated">de Responsive Web App boilerplate</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.1">\n' +
      '        <source>Iron Elements and Paper Elements</source>\n' +
      '        <target state="needs-review-translation">de Iron Elements and Paper Elements</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.2">\n' +
      '        <source>End-to-end Build Tooling (including Vulcanize)</source>\n' +
      '        <target state="needs-translation">End-to-end Build Tooling (including Vulcanize)</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.3" approved="yes">\n' +
      '        <source>Unit testing with Web Component Tester</source>\n' +
      '        <target state="translated">de Unit testing with Web Component Tester</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.4" approved="yes">\n' +
      '        <source>Routing with Page.js</source>\n' +
      '        <target state="translated">de Routing with Page.js</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.5" approved="yes">\n' +
      '        <source>Offline support with the Platinum Service Worker Elements</source>\n' +
      '        <target state="translated">de Offline support with the Platinum Service Worker Elements</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.6" restype="x-json-number">\n' +
      '        <source>1</source>\n' +
      '        <target state="needs-translation">2</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.7" restype="x-json-boolean">\n' +
      '        <source>true</source>\n' +
      '        <target state="needs-translation">false</target>\n' +
      '      </trans-unit>\n' +
      '      <trans-unit id="my-list.items.8" restype="x-json-number">\n' +
      '        <source>3</source>\n' +
      '        <target state="needs-translation">4</target>\n' +
      '      </trans-unit>\n' +
      '    </body>\n' +
      '  </file>\n' +
      '</xliff>';

    var srcLanguage = 'en';
    var destLanguage = 'de';
    var logs = [];
    var warnLogs = [];
    var errorLogs = [];
    var logs_expected = [];
    var warnLogs_expected = [
      'XliffConv: id = app.drawerToolbar:span effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.drawerToolbar:span effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_1:span_1 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_1:span_1 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.mainToolbar:div_2:div effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.mainToolbar:div_2:div effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.mainToolbar:div_3:div effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.mainToolbar:div_3:div effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material:p_1 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material:p_1 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.0 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.0 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.1 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.1 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.2 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.2 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_1:p effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_1:p effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.license effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.license effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_3 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_3 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_1 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_1 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_2 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_2 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_5 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_5 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:h1 discarding value "undefined" as source "undefined" does not match with todo.value "no Users"',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:p_1 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:p_1 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.0 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.0 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.1 discarding value "{{params.name}}" as source "{{params.name}}" does not match with todo.value "X{{params.name}}"',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.0 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.0 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.1 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.1 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.2 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.2 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_3:paper-material:h1 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_3:paper-material:h1 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_3:paper-material:p_1 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.headerPanelMain:div_1:iron-pages:section_3:paper-material:p_1 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.toast:span effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = app.toast:span effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-greeting.label_2 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-greeting.label_2 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-greeting.welcome effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-greeting.welcome effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-greeting.inexstent is missing',
      'XliffConv: id = my-greeting.inexstent-object.inexistent is missing',
      'XliffConv: id = my-list.items.0 discarding value "[object Object]" as source "[object Object]" does not match with todo.value "Responsive Web App boilerplate"',
      'XliffConv: id = my-list.items.1 discarding value "[object Object]" as source "[object Object]" does not match with todo.value "Iron Elements and Paper Elements"',
      'XliffConv: id = my-list.items.3 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-list.items.3 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-list.items.4 discarding value "undefined" as source "undefined" does not match with todo.value "Routing with Page.js"',
      'XliffConv: id = my-list.items.5 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-list.items.5 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-list.items.6 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-list.items.6 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-list.items.7 effect inexistent:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-list.items.7 effect inexistent.attr:=value is ignored due to inexistent tag inexistent',
      'XliffConv: id = my-list.items.8 discarding value "4" as source "3" does not match with todo.value "2"' 
    ];

    var errorLogs_expected = [];

    describe('xliff-conv basic-test', function () {

      var xliffConv = new XliffConv({
        logger: function (log) { logs.push(log); },
        warnLogger: function (log) { warnLogs.push(log); },
        errorLogger: function (log) { errorLogs.push(log); },
      	date: new Date(0),
      	xliffStates: {
          'add'    : [ 'new' ],
          'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n', '[invalid===expression]', '[!state&&!approved&&source==target]', '' ],
          'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n', '[!state&&!approved&&source!=target]' ],
          'empty'  : [ '""',
                       '[export&&source~=tags&&file.target-language~=de&&translate:=no&&target.state:=""&&trans-unit.approved:=yes&&target:=replaced value&&inexistent:=value&&inexistent.attr:=value]' ],
          'default': [ 'translated', 'signed-off', 'final', 
                       '[state==new&&source~=annotations]', '[approved]' ]
        }
      });

      it('parseXliff', function (callback) {
      	xliffConv.parseXliff(xliff_de_import, { bundle: bundle_de_prev }, function (output) {
    	    assert.deepEqual(output, bundle_de_expected, 'JSON output');
          assert.deepEqual(logs, logs_expected, 'log output');
          assert.deepEqual(warnLogs, warnLogs_expected, 'warning log output');
          assert.deepEqual(errorLogs, errorLogs_expected, 'error log output');
      		callback();
      	});
      });

      it('parseJSON', function (callback) {
      	xliffConv.parseJSON(bundles, {
          srcLanguage: srcLanguage,
          destLanguage: destLanguage
        }, function (output) {
          assert.equal(
            output
              // patch output without affecting XML semantics
              .replace('<file product-name="messages" date="1970-01-01T00:00:00Z" original="messages" datatype="plaintext" target-language="de" source-language="en" xmlns:xml="http://www.w3.org/XML/1998/namespace" xml:space="default">',
                       '<file xml:space="default" source-language="en" target-language="de" datatype="plaintext" original="messages" date="1970-01-01T00:00:00Z" product-name="messages">')
              .replace('<file xml:space="default" xmlns:xml="http://www.w3.org/XML/1998/namespace" source-language="en" target-language="de" datatype="plaintext" original="messages" date="1970-01-01T00:00:00Z" product-name="messages">',
                       '<file xml:space="default" source-language="en" target-language="de" datatype="plaintext" original="messages" date="1970-01-01T00:00:00Z" product-name="messages">')
              .replace('<tool tool-version="' + xliffConv.toolVersion + '" tool-name="xliff-conv" tool-id="xliff-conv" />',
                       '<tool tool-id="xliff-conv" tool-name="xliff-conv" tool-version="' + xliffConv.toolVersion + '"/>')
              .replace(/approved="yes" translate="no"/g, 'translate="no" approved="yes"')
              .replace(/&lt;a>/g, '&lt;a&gt;'),
            xliff_de_expected
              .replace(/tool-version="[.0-9]*"/g, 'tool-version="' + xliffConv.toolVersion + '"'),
            'XLIFF output');
          callback();
        });
      });

      it('_stringify', function () {
        var obj = { abc: "def" };
        assert.equal(xliffConv._stringify(obj), JSON.stringify(obj), 'object');
        assert.equal(xliffConv._stringify(undefined), '', 'undefined');
      });

      it('parseXliff invalid arguments', function () {
        assert.throws(function () { xliffConv.parseXliff(1, {}, function (output) {}); }, 'invalid argument');
        assert.throws(function () { xliffConv.parseXliff('str', 1, function (output) {}); }, 'invalid argument');
        assert.throws(function () { xliffConv.parseXliff('str', {}, 1); }, 'invalid argument');
        assert.throws(function () { xliffConv.parseXliff('str', {}, function (output) {}); }, 'invalid options.bundle');
      });

      it('parseJSON invalid arguments', function () {
        assert.throws(function () { xliffConv.parseJSON(1, {}, function (output) {}); }, 'invalid argument');
        assert.throws(function () { xliffConv.parseJSON({}, 1, function (output) {}); }, 'invalid argument');
        assert.throws(function () { xliffConv.parseJSON({}, {}, 1); }, 'invalid argument');
      });

    });

  };

  return XliffConvBasicTest;
}));