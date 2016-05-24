/*
@license https://github.com/t2ym/xliff-conv/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
*/
'use strict';

var chai = require('chai');
var assert = chai.assert;

var XliffConv = require('../xliff-conv');

var bundle_de_prev = {
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
    "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1": "Everything in this repo is <b>\"BSD\"</b> style license unless otherwise specified.",
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
      "{{params.name}}"
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
    "welcome": "Welcome!"
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
    "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1": "de Everything in this repo is <b>\"BSD\"</b> style license unless otherwise specified.",
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
      "{{params.name}}"
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
	    "headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1": "de Everything in this repo is <b>\"BSD\"</b> style license unless otherwise specified.",
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
	      "{{params.name}}"
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
        "{{params.name}}"
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

var xliff_de_import = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xliff PUBLIC "-//XLIFF//DTD XLIFF//EN" "http://www.oasis-open.org/committees/xliff/documents/xliff.dtd">
<xliff version="1.0">
  <file xml:space="default" source-language="en" target-language="de" datatype="plaintext" original="messages" date="1970-01-01T00:00:00Z" product-name="messages">
    <header>
      <tool tool-id="xliff-conv" tool-name="xliff-conv" tool-version="0.0.5"/>
    </header>
    <body>
      <trans-unit id="app.drawerToolbar:span">
        <source>Menu</source>
        <target state="needs-translation">Menu</target>
      </trans-unit>
      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1">
        <source>Home</source>
        <target state="needs-review-translation">de Home</target>
      </trans-unit>
      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_1:span_1" approved="yes">
        <source>Users</source>
        <target state="translated">de Users</target>
      </trans-unit>
      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1">
        <source>Contact</source>
        <target state="needs-translation">Contact</target>
      </trans-unit>
      <trans-unit id="app.mainToolbar:div_2:div" approved="yes">
        <source>Polymer Starter Kit</source>
        <target state="translated">de Polymer Starter Kit</target>
      </trans-unit>
      <trans-unit id="app.mainToolbar:div_3:div" approved="yes">
        <source>The future of the web today</source>
        <target state="translated">de The future of the web today</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_1" approved="yes">
        <source>You now have:</source>
        <target state="translated">de You now have:</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.0" approved="yes">
        <source>Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.</source>
        <target state="translated">de Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.1" approved="yes">
        <source>layouts</source>
        <target state="translated">de layouts</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.2" approved="yes">
        <source>preview</source>
        <target state="translated">de preview</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_1:p" approved="yes">
        <source>This is another card.</source>
        <target state="translated">de This is another card.</target>
      </trans-unit>
      <trans-unit id="app.license" approved="yes">
        <source>_$string$_License</source>
        <target state="translated">_$string$_de License</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1">
        <source>Everything in this repo is BSD style license unless otherwise specified.</source>
        <target>de Everything in this repo is &lt;b>"BSD"&lt;/b> style license unless otherwise specified.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2">
        <source>Copyright (c) 2015 The Polymer Authors. All rights reserved.</source>
        <target state="needs-translation">Copyright (c) 2015 The Polymer Authors. All rights reserved.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_3" approved="yes">
        <source>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</source>
        <target state="translated">de Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li" approved="yes">
        <source>Redistributions of source code must retain the above copyright
                notice, this list of conditions and the following disclaimer.</source>
        <target state="translated">de Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_1" approved="yes">
        <source>Redistributions in binary form must reproduce the above
                copyright notice, this list of conditions and the following disclaimer
                in the documentation and/or other materials provided with the
                distribution.</source>
        <target state="translated">de Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_2" approved="yes">
        <source>Neither the name of Google Inc. nor the names of its
                contributors may be used to endorse or promote products derived from
                this software without specific prior written permission.</source>
        <target state="translated">de Neither the name of Google Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_5" approved="yes">
        <source>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</source>
        <target state="translated">de THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:h1">
        <source>_$undefined$_ABC</source>
        <target state="needs-l10n">_$undefined$_Users</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:p_1" approved="yes">
        <source>This is the users section</source>
        <target state="translated">de This is the users section </target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2" restype="x-json-number">
        <source>1</source>
        <target state="needs-translation">2</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4" restype="x-json-boolean">
        <source>true</source>
        <target state="needs-translation">false</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6">
        <source>_$number$_1</source>
        <target state="needs-translation">_$number$_2</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8">
        <source>_$boolean$_true</source>
        <target state="needs-translation">_$boolean$_false</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.0" approved="yes">
        <source>User: {1}</source>
        <target state="translated">de User: {1}</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.1" approved="yes">
        <source>{{params.name}}</source>
        <target state="final">{{params.name}}</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.0" approved="yes">
        <source>This is {1}'s section</source>
        <target state="translated">de This is {1}'s section</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.1" approved="yes">
        <source>{{params.name}}</source>
        <target state="translated">{{params.name}}</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_3:paper-material:h1" approved="yes">
        <source>Contact</source>
        <target state="translated">de Contact</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_3:paper-material:p_1" approved="yes">
        <source>This is the contact section</source>
        <target state="translated">de This is the contact section</target>
      </trans-unit>
      <trans-unit id="app.toast:span" approved="yes">
        <source>Ok</source>
        <target state="translated">de Ok</target>
      </trans-unit>
      <trans-unit id="my-greeting.label_2" approved="yes">
        <source>Update text to change the greeting.</source>
        <target state="translated">de Update text to change the greeting.</target>
      </trans-unit>
      <trans-unit id="my-greeting.welcome" approved="yes">
        <source>Welcome!</source>
        <target state="translated">de Welcome!</target>
      </trans-unit>
      <trans-unit id="my-greeting.inexstent" approved="yes">
        <source>inexistent string</source>
        <target state="translated">de inexistent string</target>
      </trans-unit>
      <trans-unit id="my-greeting.inexstent-object.inexistent" approved="yes">
        <source>inexistent string</source>
        <target state="translated">de inexistent string</target>
      </trans-unit>
      <trans-unit id="my-list.items.0" restype="x-json-object">
        <source>{"Responsive":"Web App boilerplate"}</source>
        <target state="needs-review-translation">{"Responsive":"de Web App boilerplate"}</target>
      </trans-unit>
      <trans-unit id="my-list.items.1">
        <source>_$object$_{"Iron":"Elements and Paper Elements"}</source>
        <target state="needs-review-translation">_$object$_{"Iron":"de Elements and Paper Elements"}</target>
      </trans-unit>
      <trans-unit id="my-list.items.2">
        <source>End-to-end Build Tooling (including Vulcanize)</source>
        <target>End-to-end Build Tooling (including Vulcanize)</target>
      </trans-unit>
      <trans-unit id="my-list.items.3" approved="yes">
        <source>Unit testing with Web Component Tester</source>
        <target state="translated">de Unit testing with Web Component Tester</target>
      </trans-unit>
      <trans-unit id="my-list.items.4" approved="yes" restype="x-json-undefined">
        <source>undefined</source>
        <target state="translated">undefined</target>
      </trans-unit>
      <trans-unit id="my-list.items.5" approved="yes">
        <source>Offline support with the Platinum Service Worker Elements</source>
        <target>de Offline support with the Platinum Service Worker Elements</target>
      </trans-unit>
      <trans-unit id="my-list.items.6" restype="x-json-number">
        <source>1</source>
        <target state="needs-translation">2</target>
      </trans-unit>
      <trans-unit id="my-list.items.7" restype="x-json-boolean">
        <source>true</source>
        <target state="needs-translation">false</target>
      </trans-unit>
      <trans-unit id="my-list.items.8" restype="x-json-number">
        <source>3</source>
        <target state="needs-translation">4</target>
      </trans-unit>
    </body>
  </file>
</xliff>`;

var xliff_de_expected = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xliff PUBLIC "-//XLIFF//DTD XLIFF//EN" "http://www.oasis-open.org/committees/xliff/documents/xliff.dtd">
<xliff version="1.0">
  <file xml:space="default" source-language="en" target-language="de" datatype="plaintext" original="messages" date="1970-01-01T00:00:00Z" product-name="messages">
    <header>
      <tool tool-id="xliff-conv" tool-name="xliff-conv" tool-version="0.0.5"/>
    </header>
    <body>
      <trans-unit id="app.drawerToolbar:span">
        <source>Menu</source>
        <target state="needs-translation">Menu</target>
      </trans-unit>
      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a:span_1">
        <source>Home</source>
        <target state="needs-review-translation">de Home</target>
      </trans-unit>
      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_1:span_1" approved="yes">
        <source>Users</source>
        <target state="translated">de Users</target>
      </trans-unit>
      <trans-unit id="app.paperDrawerPanel:paper-scroll-header-panel:paper-menu_1:a_2:span_1">
        <source>Contact</source>
        <target state="needs-translation">Contact</target>
      </trans-unit>
      <trans-unit id="app.mainToolbar:div_2:div" approved="yes">
        <source>Polymer Starter Kit</source>
        <target state="translated">de Polymer Starter Kit</target>
      </trans-unit>
      <trans-unit id="app.mainToolbar:div_3:div" approved="yes">
        <source>The future of the web today</source>
        <target state="translated">de The future of the web today</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_1" approved="yes">
        <source>You now have:</source>
        <target state="translated">de You now have:</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.0" approved="yes">
        <source>Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.</source>
        <target state="translated">de Looking for more Web App layouts? Check out our {1} collection. You can also {2} them live.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.1" approved="yes">
        <source>layouts</source>
        <target state="translated">de layouts</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material:p_3.2" approved="yes">
        <source>preview</source>
        <target state="translated">de preview</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_1:p" approved="yes">
        <source>This is another card.</source>
        <target state="translated">de This is another card.</target>
      </trans-unit>
      <trans-unit id="app.license" approved="yes">
        <source>License</source>
        <target state="translated">de License</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_1" approved="yes">
        <source>Everything in this repo is BSD style license unless otherwise specified.</source>
        <target state="translated">de Everything in this repo is &lt;b>"BSD"&lt;/b> style license unless otherwise specified.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_2">
        <source>Copyright (c) 2015 The Polymer Authors. All rights reserved.</source>
        <target state="needs-translation">Copyright (c) 2015 The Polymer Authors. All rights reserved.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_3" approved="yes">
        <source>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</source>
        <target state="translated">de Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li" approved="yes">
        <source>Redistributions of source code must retain the above copyright
                notice, this list of conditions and the following disclaimer.</source>
        <target state="translated">de Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_1" approved="yes">
        <source>Redistributions in binary form must reproduce the above
                copyright notice, this list of conditions and the following disclaimer
                in the documentation and/or other materials provided with the
                distribution.</source>
        <target state="translated">de Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:ul_4:li_2" approved="yes">
        <source>Neither the name of Google Inc. nor the names of its
                contributors may be used to endorse or promote products derived from
                this software without specific prior written permission.</source>
        <target state="translated">de Neither the name of Google Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section:paper-material_2:p_5" approved="yes">
        <source>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</source>
        <target state="translated">de THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:h1" approved="yes">
        <source>Users</source>
        <target state="translated">de Users</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:p_1" approved="yes">
        <source>This is the users section</source>
        <target state="translated">de This is the users section </target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_2" restype="x-json-number">
        <source>1</source>
        <target state="needs-translation">2</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_4" restype="x-json-boolean">
        <source>true</source>
        <target state="needs-translation">false</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_6" restype="x-json-number">
        <source>1</source>
        <target state="needs-translation">2</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_1:paper-material:a_8" restype="x-json-boolean">
        <source>true</source>
        <target state="needs-translation">false</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.0" approved="yes">
        <source>User: {1}</source>
        <target state="translated">de User: {1}</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:h1.1" approved="yes">
        <source>{{params.name}}</source>
        <target state="translated">{{params.name}}</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.0" approved="yes">
        <source>This is {1}'s section</source>
        <target state="translated">de This is {1}'s section</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_2:paper-material:div_1.1" approved="yes">
        <source>{{params.name}}</source>
        <target state="translated">{{params.name}}</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_3:paper-material:h1" approved="yes">
        <source>Contact</source>
        <target state="translated">de Contact</target>
      </trans-unit>
      <trans-unit id="app.headerPanelMain:div_1:iron-pages:section_3:paper-material:p_1" approved="yes">
        <source>This is the contact section</source>
        <target state="translated">de This is the contact section</target>
      </trans-unit>
      <trans-unit id="app.toast:span" approved="yes">
        <source>Ok</source>
        <target state="translated">de Ok</target>
      </trans-unit>
      <trans-unit id="my-greeting.label_2" approved="yes">
        <source>Update text to change the greeting.</source>
        <target state="translated">de Update text to change the greeting.</target>
      </trans-unit>
      <trans-unit id="my-greeting.welcome" approved="yes">
        <source>Welcome!</source>
        <target state="translated">de Welcome!</target>
      </trans-unit>
      <trans-unit id="my-list.items.0" approved="yes">
        <source>Responsive Web App boilerplate</source>
        <target state="translated">de Responsive Web App boilerplate</target>
      </trans-unit>
      <trans-unit id="my-list.items.1">
        <source>Iron Elements and Paper Elements</source>
        <target state="needs-review-translation">de Iron Elements and Paper Elements</target>
      </trans-unit>
      <trans-unit id="my-list.items.2">
        <source>End-to-end Build Tooling (including Vulcanize)</source>
        <target state="needs-translation">End-to-end Build Tooling (including Vulcanize)</target>
      </trans-unit>
      <trans-unit id="my-list.items.3" approved="yes">
        <source>Unit testing with Web Component Tester</source>
        <target state="translated">de Unit testing with Web Component Tester</target>
      </trans-unit>
      <trans-unit id="my-list.items.4" approved="yes">
        <source>Routing with Page.js</source>
        <target state="translated">de Routing with Page.js</target>
      </trans-unit>
      <trans-unit id="my-list.items.5" approved="yes">
        <source>Offline support with the Platinum Service Worker Elements</source>
        <target state="translated">de Offline support with the Platinum Service Worker Elements</target>
      </trans-unit>
      <trans-unit id="my-list.items.6" restype="x-json-number">
        <source>1</source>
        <target state="needs-translation">2</target>
      </trans-unit>
      <trans-unit id="my-list.items.7" restype="x-json-boolean">
        <source>true</source>
        <target state="needs-translation">false</target>
      </trans-unit>
      <trans-unit id="my-list.items.8" restype="x-json-number">
        <source>3</source>
        <target state="needs-translation">4</target>
      </trans-unit>
    </body>
  </file>
</xliff>`;

var srcLanguage = 'en';
var destLanguage = 'de';

describe('xliff-conv basic-test', function () {

  var xliffConv = new XliffConv({
  	date: new Date(0),
  	xliffStates: {
      'add'    : [ 'new' ],
      'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n', '[invalid===expression]', '[!state&&!approved&&source==target]', '' ],
      'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n', '[!state&&!approved&&source!=target]' ],
      'default': [ 'translated', 'signed-off', 'final', '[approved]' ]
    }
  });

  it('parseXliff', function (callback) {
  	xliffConv.parseXliff(xliff_de_import, { bundle: bundle_de_prev }, function (output) {
	    assert.deepEqual(output, bundle_de_expected, 'JSON output');
  		callback();
  	});
  });

  it('parseJSON', function (callback) {
  	xliffConv.parseJSON(bundles, {
      srcLanguage: srcLanguage,
      destLanguage: destLanguage
    }, function (output) {
      assert.equal(output,
        xliff_de_expected.replace(/tool-version="[.0-9]*"/g, 'tool-version="' + xliffConv.toolVersion + '"'),
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