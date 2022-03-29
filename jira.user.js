// ==UserScript==
// @name         Jira
// @version      1.0.1
// @author       Donnie Ian
// @downloadURL  https://github.com/debbbbie/MyBrowserJS/raw/main/jira.user.js
// @updateURL    https://github.com/debbbbie/MyBrowserJS/raw/main/jira.user.js

// @match        https://*.atlassian.net/*

// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.ghx-stat-fields {position: absolute; bottom: 10px; right: 0px;}
.ghx-stat-fields .ghx-stat-1{ display: none !important;}
.ghx-stat-fields .ghx-key { display: none !important;}

div[data-testid="rapidboard-breadcrumbs"]{ display: none !important;}
#ghx-quick-filters{margin-bottom: 0 !important; position: absolute; top: -38px; left: 100px;}
#ghx-operations{height: 0 !important;}

.contains-breadcrumbs{margin-bottom: 0 !important;padding-bottom: 0 !important;}
header[role=banner]{height:32px !important;}
#content{margin: 0 10px !important;}
.css-pdqff4{display: none;}
div[data-layout-container=true]{grid-template-rows: initial}
`);

// issues
GM_addStyle(`
#ak-main-content>div>div[class*=css-]{margin: initial;}
.akEditor {min-height: 80px !important;}
div[data-testid="ak-editor-main-toolbar"]{padding: initial !important;}
.ProseMirror{min-height: 60px !important;margin: 0 14px !important;}
.ak-editor-content-area{padding: initial !important;}

div[id="issue-create.ui.modal.create-form.project-picker.project-select"]{
  display: inline-block !important;
  width: 200px !important; height: 20px !important;
  margin-left: 37px !important;
}
div[id="issue-create.ui.modal.create-form.type-picker.issue-type-select"] {
  display: inline-block !important;
  width: 200px !important; height: 20px !important;
  margin-left: 20px !important;
}

/*divider*/
.fSCZnt{display: none;}
`);
