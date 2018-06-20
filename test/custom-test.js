/*
 @license https://github.com/t2ym/xliff-conv/blob/master/LICENSE.md
 Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
 */
(function (root, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.XliffConvCustomTest = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.XliffConvCustomTest = factory();
  }

}(this, function () {
// UMD Definition above, do not remove this line
  'use strict';

  var XliffConvCustomTest = function () {};

  XliffConvCustomTest.prototype.run = function (XliffConv, chai) {
    var assert = chai.assert;

    var bundles = {
      '': {
        'app': {
          "Factory_audit_address": "Address",
          "alert_info_when_update_config_preferences": "Please use the arrow buttons above the columns to reposition the columns in the table. Click the Save button to save your changes.",
          "application_title": "Pivot88",
          "back": "Back",
          "barcode_section": "Barcode Section",
          "cancel_title": "Cancel",
          "close_preference": "Close Preferences",
          "completed": "Completed",
          "currentTranslationAtLoading": "Current Translation",
          "currentTranslationTag": "Translation Tag",
          "docview": "Document View",
          "edit_section": "Edit",
          "editio_of_doc_create_new_form": "Create New Form"
        }
      },
      'en_US': {
        'app': {
          "Factory_audit_address": "Address",
          "alert_info_when_update_config_preferences": "Please use the arrow buttons above the columns to reposition the columns in the table. Click the Save button to save your changes.",
          "application_title": "Pivot88",
          "back": "Back",
          "barcode_section": "Barcode Section",
          "cancel_title": "Cancel",
          "close_preference": "Close Preferences",
          "completed": "Completed",
          "currentTranslationAtLoading": "Current Translation",
          "currentTranslationTag": "Translation Tag",
          "docview": "Document View",
          "edit_section": "Edit",
          "editio_of_doc_create_new_form": "Create New Form"
        }
      },
      'es_ES': {
        'app': {
          "Factory_audit_address": "Address",
          "alert_info_when_update_config_preferences": "Please use the arrow buttons above the columns to reposition the columns in the table. Click the Save button to save your changes.",
          "application_title": "Pivot88",
          "back": "Back",
          "barcode_section": "Barcode Section",
          "cancel_title": "Cancel",
          "close_preference": "Close Preferences",
          "completed": "Completed",
          "currentTranslationAtLoading": "Current Translation",
          "currentTranslationTag": "Translation Tag",
          "docview": "Document View",
          "edit_section": "Edit",
          "editio_of_doc_create_new_form": "Create New Form"
        }
      },
      'fr_CA': {
        'app': {
          "Factory_audit_address": "Adresse",
          "alert_info_when_update_config_preferences": "Utilisez les boutons fléchés situés au-dessus des colonnes pour repositionner les colonnes de la table. Cliquez sur le bouton Enregistrer pour enregistrer vos modifications.",
          "application_title": "Pivot88",
          "back": "Arrière",
          "barcode_section": "Section des codes à barres",
          "cancel_title": "Annuler",
          "close_preference": "Fermer les préférences",
          "completed": "Complété",
          "currentTranslationAtLoading": "Traduction en cours",
          "currentTranslationTag": "Tag de traduction",
          "docview": "Vue du document",
          "edit_section": "Modifier",
          "editio_of_doc_create_new_form": "Créer un Nouveau formulaire"
        }
      },
      'zh_CN': {
        'app': {
          "Factory_audit_address": "地址",
          "alert_info_when_update_config_preferences": "请使用列上方的箭头按钮重新定位表中的列。单击保存按钮保存更改。",
          "application_title": "Pivot88",
          "back": "背部",
          "barcode_section": "条码部分",
          "cancel_title": "取消",
          "close_preference": "CN_Close Preferences",
          "completed": "CN_Completed",
          "currentTranslationAtLoading": "当前翻译",
          "currentTranslationTag": "翻译标签",
          "docview": "文档视图",
          "edit_section": "编辑",
          "editio_of_doc_create_new_form": "Create New Form"
        }
      },
      'ja_JP': {
        'app': {
          "Factory_audit_address": "Address",
          "alert_info_when_update_config_preferences": "Please use the arrow buttons above the columns to reposition the columns in the table. Click the Save button to save your changes.",
          "application_title": "Pivot88",
          "back": "Back",
          "barcode_section": "Barcode Section",
          "cancel_title": "Cancel",
          "close_preference": "Close Preferences",
          "completed": "Completed",
          "currentTranslationAtLoading": "Current Translation",
          "currentTranslationTag": "Translation Tag",
          "docview": "Document View",
          "edit_section": "Edit",
          "editio_of_doc_create_new_form": "Create New Form"
        }
      },
      'vi_VN': {
        'app': {
          "Factory_audit_address": "Địa chỉ",
          "alert_info_when_update_config_preferences": "Please use the arrow buttons above the columns to reposition the columns in the table. Click the Save button to save your changes.",
          "application_title": "Pivot88",
          "back": "Quay lại",
          "barcode_section": "Barcode Section",
          "cancel_title": "Hủy bỏ",
          "close_preference": "Close Preferences",
          "completed": "Hoàn thành",
          "currentTranslationAtLoading": "Phiên dịch",
          "currentTranslationTag": "Thẻ phiên dịch",
          "docview": "Xem bản ghi",
          "edit_section": "Chỉnh sửa",
          "editio_of_doc_create_new_form": "Tạo bản mới"
        }
      },
      'km_KH': {
        'app': {
          "Factory_audit_address": "Address",
          "alert_info_when_update_config_preferences": "Please use the arrow buttons above the columns to reposition the columns in the table. Click the Save button to save your changes.",
          "application_title": "Pivot88",
          "back": "Back",
          "barcode_section": "Barcode Section",
          "cancel_title": "Cancel",
          "close_preference": "Close Preferences",
          "completed": "Completed",
          "currentTranslationAtLoading": "Current Translation",
          "currentTranslationTag": "Translation Tag",
          "docview": "Document View",
          "edit_section": "Edit",
          "editio_of_doc_create_new_form": "Create New Form"
        }
      },
      'ar_SA': {
        'app': {
          "Factory_audit_address": "Address",
          "alert_info_when_update_config_preferences": "Please use the arrow buttons above the columns to reposition the columns in the table. Click the Save button to save your changes.",
          "application_title": "Pivot88",
          "back": "Back",
          "barcode_section": "Barcode Section",
          "cancel_title": "Cancel",
          "close_preference": "Close Preferences",
          "completed": "Completed",
          "currentTranslationAtLoading": "Current Translation",
          "currentTranslationTag": "Translation Tag",
          "docview": "Document View",
          "edit_section": "Edit",
          "editio_of_doc_create_new_form": "Create New Form"
        }
      }
    };

    var labelArrayWithUniqueId = {
      "Factory_audit_address": "ckv7ymf07ahqog4lur12bwobg1z3dsxzkqkdwxan",
      "alert_info_when_update_config_preferences": "ybsqyempsolypcf4poq1wdxxl8c04oam03ei27bc",
      "application_title": "rj7rtcdbefchcbrq9itw6sewjifd2v3c5dn99969",
      "back": "48gtruuew3ndd7pnj26lttt0kbgnlv2iyhtti99v",
      "barcode_section": "i2d0t2y11b5zlrlhbn5it8qkbxbp7ub0bdgxy7tr",
      "cancel_title": "bbzgu18z7wl6thj0eh9p83nlcrz4znyfox4khjuq",
      "close_preference": "6cq3j5vhf8cxuabhkk00vfy75yyfuuirrfdaz2p2",
      "completed": "ao6els6irzw86l0vkb0p4xy1prn4kx31hbhmhlkf",
      "currentTranslationAtLoading": "65bwg3bhawcu41lrkdqb4hcgitonsjsozrp9tlbb",
      "currentTranslationTag": "eao45l68agv6ci72et2ok9ojgx9y0zrez1bw1xdb",
      "docview": "40wdqmuqbzozk4qgp6cdcxugpn9h5vwqlvapnari",
      "edit_section": "8opyi6bhov3muf1obbr1szgq0rc5jcrdtyfsztxq",
      "editio_of_doc_create_new_form": "l5w3jfx0kgmjonxpaw4srjwjtbheve4xu69eulbr"
    };

    var xliff_expected =
      '<?xml version="1.0" encoding="UTF-8"?>\n'  +
      '<!DOCTYPE xliff PUBLIC "-//XLIFF//DTD XLIFF//EN" "http://www.oasis-open.org/committees/xliff/documents/xliff.dtd">\n'  +
      '<xliff version="1.0">\n'  +
      '  <file xml:space="default" source-language="en_US" target-language="fr_CA" datatype="plaintext" original="messages" date="1970-01-01T00:00:00Z" product-name="messages">\n'  +
      '    <header>\n'  +
      '      <tool tool-id="xliff-conv" tool-name="xliff-conv" tool-version="1.0.10"/>\n'  +
      '    </header>\n'  +
      '    <body>\n'  +
      '      <trans-unit id="ckv7ymf07ahqog4lur12bwobg1z3dsxzkqkdwxan" resname="Factory_audit_address" approved="yes">\n'  +
      '        <source>Address</source>\n'  +
      '        <target state="translated">Adresse</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="ybsqyempsolypcf4poq1wdxxl8c04oam03ei27bc" resname="alert_info_when_update_config_preferences" approved="yes">\n'  +
      '        <source>Please use the arrow buttons above the columns to reposition the columns in the table. Click the Save button to save your changes.</source>\n'  +
      '        <target state="translated">Utilisez les boutons fléchés situés au-dessus des colonnes pour repositionner les colonnes de la table. Cliquez sur le bouton Enregistrer pour enregistrer vos modifications.</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="rj7rtcdbefchcbrq9itw6sewjifd2v3c5dn99969" resname="application_title" approved="yes">\n'  +
      '        <source>Pivot88</source>\n'  +
      '        <target state="translated">Pivot88</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="48gtruuew3ndd7pnj26lttt0kbgnlv2iyhtti99v" resname="back" approved="yes">\n'  +
      '        <source>Back</source>\n'  +
      '        <target state="translated">Arrière</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="i2d0t2y11b5zlrlhbn5it8qkbxbp7ub0bdgxy7tr" resname="barcode_section" approved="yes">\n'  +
      '        <source>Barcode Section</source>\n'  +
      '        <target state="translated">Section des codes à barres</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="bbzgu18z7wl6thj0eh9p83nlcrz4znyfox4khjuq" resname="cancel_title" approved="yes">\n'  +
      '        <source>Cancel</source>\n'  +
      '        <target state="translated">Annuler</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="6cq3j5vhf8cxuabhkk00vfy75yyfuuirrfdaz2p2" resname="close_preference" approved="yes">\n'  +
      '        <source>Close Preferences</source>\n'  +
      '        <target state="translated">Fermer les préférences</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="ao6els6irzw86l0vkb0p4xy1prn4kx31hbhmhlkf" resname="completed" approved="yes">\n'  +
      '        <source>Completed</source>\n'  +
      '        <target state="translated">Complété</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="65bwg3bhawcu41lrkdqb4hcgitonsjsozrp9tlbb" resname="currentTranslationAtLoading" approved="yes">\n'  +
      '        <source>Current Translation</source>\n'  +
      '        <target state="translated">Traduction en cours</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="eao45l68agv6ci72et2ok9ojgx9y0zrez1bw1xdb" resname="currentTranslationTag" approved="yes">\n'  +
      '        <source>Translation Tag</source>\n'  +
      '        <target state="translated">Tag de traduction</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="40wdqmuqbzozk4qgp6cdcxugpn9h5vwqlvapnari" resname="docview" approved="yes">\n'  +
      '        <source>Document View</source>\n'  +
      '        <target state="translated">Vue du document</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="8opyi6bhov3muf1obbr1szgq0rc5jcrdtyfsztxq" resname="edit_section" approved="yes">\n'  +
      '        <source>Edit</source>\n'  +
      '        <target state="translated">Modifier</target>\n'  +
      '      </trans-unit>\n'  +
      '      <trans-unit id="l5w3jfx0kgmjonxpaw4srjwjtbheve4xu69eulbr" resname="editio_of_doc_create_new_form" approved="yes">\n'  +
      '        <source>Create New Form</source>\n'  +
      '        <target state="translated">Créer un Nouveau formulaire</target>\n'  +
      '      </trans-unit>\n'  +
      '    </body>\n'  +
      '  </file>\n'  +
      '</xliff>';

    var srcLanguage = 'en_US';
    var destLanguage = 'fr_CA';
    var logs = [];
    var warnLogs = [];
    var errorLogs = [];

    describe('xliff-conv with customise id and add new attribute', function () {

      var xliffConv = new XliffConv({
        logger: function (log) { logs.push(log); },
        warnLogger: function (log) { warnLogs.push(log); },
        errorLogger: function (log) { errorLogs.push(log); },
        date: new Date(0),
        xliffStates: {
          'add': [ 'new' ],
          'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n', '[invalid===expression]', '[!state&&!approved&&source==target]', '' ],
          'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n', '[!state&&!approved&&source!=target]' ],
          'empty'  : [ '""',
            '[export&&source~=tags&&file.target-language~=de&&translate:=no&&target.state:=""&&trans-unit.approved:=yes&&target:=replaced value&&inexistent:=value&&inexistent.attr:=value]' ],
          'default': [ 'translated', 'signed-off', 'final',
            '[state==new&&source~=annotations]', '[approved]' ]
        }
      });

      it('parseJSON with customise id and add new attribute SUCCESSFUL', function (callback) {
        xliffConv.parseJSON(bundles, {
          srcLanguage: srcLanguage,
          destLanguage: destLanguage,
          addNewAttr: {
            resname: labelArrayWithUniqueId
          }
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
            xliff_expected
            .replace(/tool-version="[.0-9]*"/g, 'tool-version="' + xliffConv.toolVersion + '"'));
          callback();
        })
      });

      it('parseJSON with invalid arguments', function () {
        assert.throws(function () { xliffConv.parseJSON(1, {}, function (output) {}); }, 'invalid argument');
        assert.throws(function () { xliffConv.parseJSON({}, 1, function (output) {}); }, 'invalid argument');
        assert.throws(function () { xliffConv.parseJSON({}, {}, 1); }, 'invalid argument');
      });

    });

  };

  return XliffConvCustomTest;
}));
