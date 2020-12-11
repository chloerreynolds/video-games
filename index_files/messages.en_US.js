
/*!
 * Globalize Runtime v1.4.0 2018-07-17T20:38Z Released under the MIT license
 * http://git.io/TrdQbw
 */
"undefined"!=typeof process&&"node"===process.release.name?global.localizeGlobalNamespace=global:window.localizeGlobalNamespace=window,localizeGlobalNamespace.TabGlobalize=function(){var n=function(e,a){return e=e.replace(/{[0-9a-zA-Z-_. ]+}/g,function(e){return e=e.replace(/^{([^}]*)}$/,"$1"),"string"==typeof(r=a[e])?r:"number"==typeof r?""+r:JSON.stringify(r);var r})},o=function(e,r,a){var t;return r=e+(r?": "+n(r,a):""),(t=new Error(r)).code=e,function(){var a=arguments[0];[].slice.call(arguments,1).forEach(function(e){var r;for(r in e)a[r]=e[r]})}(t,a),t},l=function(e,r,a,t){if(!a)throw o(e,r,t)},r=function(e,r){l("E_MISSING_PARAMETER","Missing required parameter `{name}`.",void 0!==e,{name:r})},a=function(e,r,a,t){l("E_INVALID_PAR_TYPE","Invalid `{name}` parameter ({value}). {expected} expected.",a,{expected:t,name:r,value:e})},t=function(e,r){a(e,r,void 0===e||"string"==typeof e,"a string")};function i(e){if(!(this instanceof i))return new i(e);r(e,"locale"),t(e,"locale"),this._locale=e}return i.locale=function(e){return t(e,"locale"),arguments.length&&(this._locale=e),this._locale},i._createError=o,i._formatMessage=n,i._regexpEscape=function(e){return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},i._runtimeKey=function(e,r,a,t){var n,o,l;return t=t||(l=a,JSON.stringify(l,function(e,r){return r&&r.runtimeKey?r.runtimeKey:r})),0<(o=e+r+t,n=[].reduce.call(o,function(e,r){var a=r.charCodeAt(0);return 0|(e=(e<<5)-e+a)},0))?"a"+n:"b"+Math.abs(n)},i._stringPad=function(e,r,a){var t;for("string"!=typeof e&&(e=String(e)),t=e.length;t<r;t+=1)e=a?e+"0":"0"+e;return e},i._validateParameterPresence=r,i._validateParameterTypeString=t,i._validateParameterType=a,i}(),function(e,r){var a,t,n,o;a=e.TabGlobalize,t=a._runtimeKey,n=a._validateParameterType,o=function(e,r){var a;n(e,r,void 0===e||null!==(a=e)&&""+a=="[object Object]"||Array.isArray(e),"Array or Plain Object")},a._messageFormatterFn=function(r){return function(e){return"number"!=typeof e&&"string"!=typeof e||(e=[].slice.call(arguments,0)),o(e,"variables"),r(e)}},a._messageFormat={number:function(e,r){if(isNaN(e))throw new Error("'"+e+"' isn't a number.");return e-(r||0)},plural:function(e,r,a,t,n){if({}.hasOwnProperty.call(t,e))return t[e]();r&&(e-=r);var o=a(e,n);return o in t?t[o]():t.other()},select:function(e,r){return{}.hasOwnProperty.call(r,e)?r[e]():r.other()}},a._validateParameterTypeMessageVariables=o,a.messageFormatter=a.prototype.messageFormatter=function(){return a[t("messageFormatter",this._locale,[].slice.call(arguments,0))]},a.formatMessage=a.prototype.formatMessage=function(e){return this.messageFormatter(e).apply({},[].slice.call(arguments,1))}}(localizeGlobalNamespace),function(e,r){var a,t,n,o,l;a=e.TabGlobalize,t=a._runtimeKey,n=a._validateParameterPresence,o=a._validateParameterType,l=function(e,r){o(e,r,void 0===e||"number"==typeof e,"Number")},a._pluralGeneratorFn=function(r){return function(e){return n(e,"value"),l(e,"value"),r(e)}},a._validateParameterTypeNumber=l,a.plural=a.prototype.plural=function(e,r){return n(e,"value"),l(e,"value"),this.pluralGenerator(r)(e)},a.pluralGenerator=a.prototype.pluralGenerator=function(e){return e=e||{},a[t("pluralGenerator",this._locale,[e])]}}(localizeGlobalNamespace);

(function( root, factory ) {
  root.Localize = root.Localize || {};
  root.Localize.msg = new root.TabGlobalize('en');
  factory( root.TabGlobalize, root.Localize );
  if (root.Localize.initFormattersAndParsers) {
    root.Localize.initFormattersAndParsers();
  }
}(localizeGlobalNamespace, function( Globalize ) {
var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1662346136 = pluralGeneratorFn(function(n
) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
});
Globalize.a1093786856 = messageFormatterFn((function(  ) {
  return function(d) { return "Source Visualization Changed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1020264557 = messageFormatterFn((function(  ) {
  return function(d) { return "Improve performance. Choose where the join process happens when joining data from multiple sources."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1164214669 = messageFormatterFn((function(  ) {
  return function(d) { return "This workbook includes performance improvements for cross-database joins. Select an option to continue."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1213959207 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1669508057 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2133846203 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1959906570 = messageFormatterFn((function(  ) {
  return function(d) { return "Select one of the following to continue:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b817799712 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Tableau or existing databases"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1664131323 = messageFormatterFn((function(  ) {
  return function(d) { return "Data from your file connection may be moved to your live database connection. This option may be faster."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b564084659 = messageFormatterFn((function(  ) {
  return function(d) { return "Use this option only if the database is from a trusted source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1812583788 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Tableau only (default)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a871988918 = messageFormatterFn((function(  ) {
  return function(d) { return "Using the database connection for cross-database joins means that data from your file connection may be moved to your live database connection, which may be faster. Use this option only if the database is from a trusted source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1405732433 = messageFormatterFn((function(  ) {
  return function(d) { return "Show details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b515312374 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a229986360 = messageFormatterFn((function(  ) {
  return function(d) { return "Datasource"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1871492545 = messageFormatterFn((function(  ) {
  return function(d) { return "Database Connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2067226219 = messageFormatterFn((function(  ) {
  return function(d) { return "File Connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1019335495 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Tableau"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1542092929 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Database Connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a77549064 = messageFormatterFn((function(  ) {
  return function(d) { return "Animation"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b67870274 = messageFormatterFn((function(  ) {
  return function(d) { return "Change account settings"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1279425506 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a801045609 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a243949919 = messageFormatterFn((function(  ) {
  return function(d) { return "Default"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1683490262 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook Default"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a670725070 = messageFormatterFn((function(  ) {
  return function(d) { return "Mark Transitions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2069135199 = messageFormatterFn((function(  ) {
  return function(d) { return "Animations are currently disabled. You can enable them in the Help > Settings and Performance menu."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1993222959 = messageFormatterFn((function(  ) {
  return function(d) { return "Animations are disabled for your site. For more information, contact your Tableau administrator."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a422768827 = messageFormatterFn((function(  ) {
  return function(d) { return "Animations are disabled for your user account."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b657202522 = messageFormatterFn((function(  ) {
  return function(d) { return d["0"] + " seconds (" + d["1"] + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1350651614 = messageFormatterFn((function(  ) {
  return function(d) { return "Duration"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b856357143 = messageFormatterFn((function(  ) {
  return function(d) { return "Format Animations"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a889788793 = messageFormatterFn((function(  ) {
  return function(d) { return d["0"] + " (Default)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a138015997 = messageFormatterFn((function(  ) {
  return function(d) { return "Duration can't be negative"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2134238379 = messageFormatterFn((function(  ) {
  return function(d) { return "(None Selected)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b418740643 = messageFormatterFn((function(  ) {
  return function(d) { return "Must be a number"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1654805377 = messageFormatterFn((function(  ) {
  return function(d) { return "Off"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b152656053 = messageFormatterFn((function(  ) {
  return function(d) { return "On"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b42811684 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset All Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a928497181 = messageFormatterFn((function(  ) {
  return function(d) { return "sec"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1865087693 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected Sheet"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1861746697 = messageFormatterFn((function(  ) {
  return function(d) { return "Sequential"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1948867789 = messageFormatterFn((function(  ) {
  return function(d) { return "Simultaneous"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1896786501 = messageFormatterFn((function(  ) {
  return function(d) { return "Style"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1780016105 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a232749189 = messageFormatterFn((function(  ) {
  return function(d) { return "Some sheets might not animate when published."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1188444745 = messageFormatterFn((function(  ) {
  return function(d) { return "Some animations in this workbook play only in Tableau Desktop."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1579575489 = messageFormatterFn((function(  ) {
  return function(d) { return "All animations are compatible with Tableau Desktop, but some might not play when published to Tableau Server."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1900708532 = messageFormatterFn((function(  ) {
  return function(d) { return "Analyzing Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1027869399 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1375786028 = messageFormatterFn((function(  ) {
  return function(d) { return "Download diagnostics data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1644811721 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " " + d.measureValue + " is the median value."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1478447792 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b787883434 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1519097924 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a737448514 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b632191351 = messageFormatterFn((function(  ) {
  return function(d) { return "Distinct count of " + d.baseColumnCaption + " " + d.measureValue + " is the median value."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b389170704 = messageFormatterFn((function(  ) {
  return function(d) { return "Distinct count of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1230080790 = messageFormatterFn((function(  ) {
  return function(d) { return "Distinct count of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2010187516 = messageFormatterFn((function(  ) {
  return function(d) { return "Distinct count of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2147346046 = messageFormatterFn((function(  ) {
  return function(d) { return "Distinct count of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b130982469 = messageFormatterFn((function(  ) {
  return function(d) { return "Count of " + d.baseColumnCaption + " " + d.measureValue + " is the median value."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2031564546 = messageFormatterFn((function(  ) {
  return function(d) { return "Count of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1731289672 = messageFormatterFn((function(  ) {
  return function(d) { return "Count of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1189433526 = messageFormatterFn((function(  ) {
  return function(d) { return "Count of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2044132464 = messageFormatterFn((function(  ) {
  return function(d) { return "Count of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a576748926 = messageFormatterFn((function(  ) {
  return function(d) { return "Median of " + d.baseColumnCaption + " " + d.measureValue + " is the median value."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1566727781 = messageFormatterFn((function(  ) {
  return function(d) { return "Median of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1855946229 = messageFormatterFn((function(  ) {
  return function(d) { return "Median of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1993613113 = messageFormatterFn((function(  ) {
  return function(d) { return "Median of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2018191187 = messageFormatterFn((function(  ) {
  return function(d) { return "Median of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1510689289 = messageFormatterFn((function(  ) {
  return function(d) { return "Sum of " + d.baseColumnCaption + " " + d.measureValue + " is the median value."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1852803006 = messageFormatterFn((function(  ) {
  return function(d) { return "Sum of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a351582852 = messageFormatterFn((function(  ) {
  return function(d) { return "Sum of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1621389326 = messageFormatterFn((function(  ) {
  return function(d) { return "Sum of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1164972844 = messageFormatterFn((function(  ) {
  return function(d) { return "Sum of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b862747585 = messageFormatterFn((function(  ) {
  return function(d) { return "The aggregated value of " + d.baseColumnCaption + " " + d.measureValue + " is the median value."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1053520634 = messageFormatterFn((function(  ) {
  return function(d) { return "The aggregated value of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a999524556 = messageFormatterFn((function(  ) {
  return function(d) { return "The aggregated value of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected, but within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1364213702 = messageFormatterFn((function(  ) {
  return function(d) { return "The aggregated value of " + d.baseColumnCaption + " " + d.measureValue + " is higher than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1018129524 = messageFormatterFn((function(  ) {
  return function(d) { return "The aggregated value of " + d.baseColumnCaption + " " + d.measureValue + " is lower than expected."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1177002167 = messageFormatterFn((function(  ) {
  return function(d) { return " Possible explanations:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b233824935 = messageFormatterFn((function(  ) {
  return function(d) { return "Considering the distribution of values in the data, this value is expected to be between " + d.low + " and " + d.high + ". This takes into account the filters set on " + d.fieldCaptions + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1904875768 = messageFormatterFn((function(  ) {
  return function(d) { return "Considering the distribution of values in the data, this value is expected to be between " + d.low + " and " + d.high + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1141208204 = messageFormatterFn((function(  ) {
  return function(d) { return "Considering the distribution of values in the data, this value is expected to be between " + d.low + " and " + d.high + ". This takes into account the filter set on " + d.fieldCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2145553837 = messageFormatterFn((function(  ) {
  return function(d) { return "Expected Range"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a232041639 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a901125935 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to complete this operation"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1630683783 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau couldn't complete explanation analysis because the selected mark changed. Close the explanations window and try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b141584158 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau couldn't complete explanation analysis because the visualization changed. Close the explanations window and try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1817687766 = messageFormatterFn((function(  ) {
  return function(d) { return "Comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1817772077 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter your feedback here."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1177713919 = messageFormatterFn((function(  ) {
  return function(d) { return "Feedback Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1934447917 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b327463494 = messageFormatterFn((function(  ) {
  return function(d) { return "Submit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1104167116 = messageFormatterFn((function(  ) {
  return function(d) { return "Feedback"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1988040055 = messageFormatterFn((function(  ) {
  return function(d) { return "Submit feedback"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b713591563 = messageFormatterFn((function(  ) {
  return function(d) { return "Feature Request"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1896177656 = messageFormatterFn((function(  ) {
  return function(d) { return "Praise"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2014683527 = messageFormatterFn((function(  ) {
  return function(d) { return "Problem"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1462272094 = messageFormatterFn((function(  ) {
  return function(d) { return "Question"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1507632480 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose Fields for '" + d.datasourceCaption + "'..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2062835023 = messageFormatterFn((function(  ) {
  return function(d) { return d.consideredFieldsNum + " fields considered"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a986023513 = messageFormatterFn((function(  ) {
  return function(d) { return "In '" + d.datasourceCaption + "':"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b299653527 = messageFormatterFn((function(  ) {
  return function(d) { return "4 fields not included (" + d.ignoredField1 + ", " + d.ignoredField2 + ", " + d.ignoredField3 + ", " + d.ignoredField4 + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1079429736 = messageFormatterFn((function(  ) {
  return function(d) { return d.ignoredFieldsNum + " fields not included (" + d.ignoredField1 + ", " + d.ignoredField2 + ", " + d.ignoredField3 + ", " + d.ignoredField4 + ", and " + d.restOfIgnoredFieldsNum + " others)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1359944606 = messageFormatterFn((function(  ) {
  return function(d) { return "1 field not included (" + d.ignoredField1 + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a231311459 = messageFormatterFn((function(  ) {
  return function(d) { return "3 fields not included (" + d.ignoredField1 + ", " + d.ignoredField2 + ", " + d.ignoredField3 + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a445534033 = messageFormatterFn((function(  ) {
  return function(d) { return "2 fields not included (" + d.ignoredField1 + ", " + d.ignoredField2 + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a698450905 = messageFormatterFn((function(  ) {
  return function(d) { return "Based on the mark you selected, Tableau ran a statistical analysis on the data in the view and in your data source. This window shows possible explanations for the value of the selected mark."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1078432917 = messageFormatterFn((function(  ) {
  return function(d) { return d.skippedFieldsNum + " dimensions were not included to reduce the time required for analysis. Click Explain All to run a longer analysis that considers these additional dimensions."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a690919169 = messageFormatterFn((function(  ) {
  return function(d) { return d.skippedFieldsNum + " fields were not included to reduce the time required for analysis. Click Explain All to run a longer analysis that considers these additional fields."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b458278691 = messageFormatterFn((function(  ) {
  return function(d) { return d.skippedFieldsNum + " measures were not included to reduce the time required for analysis. Click Explain All to run a longer analysis that considers these additional measures."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b432064462 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn More"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1108667077 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1445953777 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an average " + d.baseColumnCaption + " of " + d.averageOfRecords + ". The higher than expected average of " + d.baseColumnCaption + " for this mark is increasing the sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b913329746 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an average " + d.baseColumnCaption + " of " + d.averageOfRecords + ", which is within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1436408297 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an average " + d.baseColumnCaption + " of " + d.averageOfRecords + ". The lower than expected average of " + d.baseColumnCaption + " for this mark is decreasing the sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1658001073 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has a higher than expected average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1103138670 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + "'s average " + d.baseColumnCaption + " is within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2135985193 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has a lower than expected average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a874816807 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1250570406 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows the average " + d.baseColumnCaption + " for the explained mark " + d.selectedMark + " compared to all marks in the source visualization."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1810359573 = messageFormatterFn((function(  ) {
  return function(d) { return "Based on the data included in the data source, no explanation could be found."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1272527773 = messageFormatterFn((function(  ) {
  return function(d) { return "No Explanation Found in Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1578985189 = messageFormatterFn((function(  ) {
  return function(d) { return "The fields " + d.consideredFields + " were considered in this analysis, but did not significantly explain the value of the explained mark " + d.selectedMark + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1989922783 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfFields + " fields were considered, such as " + d.fieldCaption1 + ", " + d.fieldCaption2 + " and " + d.fieldCaption3 + ", however analysis of this data did not significantly explain the value of the explained mark " + d.selectedMark + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1523939560 = messageFormatterFn((function(  ) {
  return function(d) { return "Additional fields were not available for consideration in this analysis."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1083505397 = messageFormatterFn((function(  ) {
  return function(d) { return "The field " + d.fieldCaption + " was considered in this analysis, but it did not significantly explain the value of the explained mark " + d.selectedMark + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a476138706 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numRows + " records. Its unexpected value is likely to be caused by random variation rather than a meaningful difference in the underlying records."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1022603105 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of a single record. Its unexpected value is likely to be caused by random variation rather than a meaningful difference in the underlying records."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a829246098 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numRows + " records."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1358375647 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of a single record."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1177659941 = messageFormatterFn((function(  ) {
  return function(d) { return "Random Variation"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1205973716 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of Records"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1205111426 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRecords + " records. The higher than expected number of records in this mark is increasing the sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2037151457 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRecords + " records. This is within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b458807864 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRecords + " records. The lower than expected number of records in this mark is decreasing the sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1417158722 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of a higher than expected number of records."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b20683041 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + "'s number of records is within the range of natural variation."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1158384760 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of a lower than expected number of records."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1129899480 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of Records"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a505493 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows the number of records for the explained mark " + d.selectedMark + " compared to all marks in the source visualization."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a605782851 = messageFormatterFn((function(  ) {
  return function(d) { return "Open as a new worksheet"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b267974839 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows the average of " + d.baseColumnCaption + " for all records with " + d.dimension + ": " + d.primaryDisplayValue + ", compared to the average of " + d.baseColumnCaption + " for all other records in the source visualization. The blue bar indicates the average of " + d.baseColumnCaption + " for the explained mark " + d.selectedMark + ". The grey bar shows the average of " + d.baseColumnCaption + " for all records in the source visualization."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b452283077 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " for " + d.dimension + ": " + d.primaryDisplayValue + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1014492301 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has a distinctive ratio of records with " + d.dimension + ": " + d.primaryDisplayValue + ", compared to other marks in the visualization."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1082998708 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows the percentage of records with " + d.dimension + ": " + d.primaryDisplayValue + " within the explained mark " + d.selectedMark + ", compared to the percentage of all records with " + d.dimension + ": " + d.primaryDisplayValue + " in the source visualization."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1124520702 = messageFormatterFn((function(  ) {
  return function(d) { return "Percent of records with " + d.dimension + ": " + d.primaryDisplayValue + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2052239667 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has a distinctive ratio of records with " + d.dimension + ": " + d.primaryDisplayValue + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1537268233 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldCaption + ":"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b752804945 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1904489094 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows how excluding the extreme value changes this value from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1864314870 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows the extreme value " + d.outlierValue + " in the range of values within the average of " + d.baseColumnCaption + " for the explained mark " + d.selectedMark + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b423721544 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows the extreme value " + d.outlierValue + " in the range of values within the sum of " + d.baseColumnCaption + " for the explained mark " + d.selectedMark + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1013250754 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows how excluding the extreme values changes this value from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1419770430 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows the extreme values in the range of values within the average of " + d.baseColumnCaption + " for the explained mark " + d.selectedMark + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1022187376 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows the extreme values in the range of values within the sum of " + d.baseColumnCaption + " for the explained mark " + d.selectedMark + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b359899267 = messageFormatterFn((function(  ) {
  return function(d) { return "Extreme Values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2114425040 = messageFormatterFn((function(  ) {
  return function(d) { return "One record with a value of " + d.outlierValue + " is increasing the average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1312856446 = messageFormatterFn((function(  ) {
  return function(d) { return "One record with a value of " + d.outlierValue + " is increasing the sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1126108884 = messageFormatterFn((function(  ) {
  return function(d) { return "One record with a value of " + d.outlierValue + " is decreasing the average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1112504358 = messageFormatterFn((function(  ) {
  return function(d) { return "One record with a value of " + d.outlierValue + " is decreasing the sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b93729044 = messageFormatterFn((function(  ) {
  return function(d) { return "One record with a value of " + d.outlierValue + " falls outside the expected range for the records in this mark."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1744888592 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. One record with a value of " + d.outlierValue + " is increasing the average of " + d.baseColumnCaption + ". If this extreme value is excluded, the average of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1279069118 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. One record with a value of " + d.outlierValue + " is increasing the sum of " + d.baseColumnCaption + ". If this extreme value is excluded, the sum of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1495645332 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. One record with a value of " + d.outlierValue + " is decreasing the average of " + d.baseColumnCaption + ". If this extreme value is excluded, the average of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1146291686 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. One record with a value of " + d.outlierValue + " is decreasing the sum of " + d.baseColumnCaption + ". If this extreme value is excluded, the sum of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1264029996 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. One record with a value of " + d.outlierValue + " falls outside the expected range for the records in this mark."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b379652897 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple records with a value of " + d.outlierValue + " are increasing the average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1716673805 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple records with a value of " + d.outlierValue + " are increasing the sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a674780475 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple records with a value of " + d.outlierValue + " are decreasing the average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b708686999 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple records with a value of " + d.outlierValue + " are decreasing the sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b310875333 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple records with a value of " + d.outlierValue + " fall outside the expected range for the records in this mark."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b749189345 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. " + d.numberOfOutlierRecords + " records with a value of " + d.outlierValue + " are increasing the average of " + d.baseColumnCaption + ". If the extreme values are excluded, the average of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1682886477 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. " + d.numberOfOutlierRecords + " records with a value of " + d.outlierValue + " are increasing the sum of " + d.baseColumnCaption + ". If the extreme values are excluded, the sum of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a305244027 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. " + d.numberOfOutlierRecords + " records with a value of " + d.outlierValue + " are decreasing the average of " + d.baseColumnCaption + ". If the extreme values are excluded, the average of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b742474327 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. " + d.numberOfOutlierRecords + " records with a value of " + d.outlierValue + " are decreasing the sum of " + d.baseColumnCaption + ". If the extreme values are excluded, the sum of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1046883707 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. " + d.numberOfOutlierRecords + " records with a value of " + d.outlierValue + " fall outside the expected range for the records in this mark."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1071678837 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple records with extreme values are increasing the average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b902846301 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple records with extreme values are increasing the sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2126112209 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple records with extreme values are decreasing the average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a966760191 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple records with extreme values are decreasing the sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1445450159 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple records with extreme values fall outside the expected range for the records in this mark."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a702142389 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. " + d.numberOfOutlierRecords + " records with extreme values are increasing the average of " + d.baseColumnCaption + ". If the extreme values are excluded, the average of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b936633629 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. " + d.numberOfOutlierRecords + " records with extreme values are increasing the sum of " + d.baseColumnCaption + ". If the extreme values are excluded, the sum of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1756575761 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. " + d.numberOfOutlierRecords + " records with extreme values are decreasing the average of " + d.baseColumnCaption + ". If the extreme values are excluded, the average of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a932972863 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. " + d.numberOfOutlierRecords + " records with extreme values are decreasing the sum of " + d.baseColumnCaption + ". If the extreme values are excluded, the sum of " + d.baseColumnCaption + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b87691119 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is made of " + d.numberOfRows + " records. " + d.numberOfOutlierRecords + " records with extreme values fall outside the expected range for the records in this mark."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1887084892 = messageFormatterFn((function(  ) {
  return function(d) { return "Distribution of row values within the average of " + d.baseColumnCaption; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b791252654 = messageFormatterFn((function(  ) {
  return function(d) { return "Distribution of row values within the sum of " + d.baseColumnCaption; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1259960636 = messageFormatterFn((function(  ) {
  return function(d) { return "Visualize the Difference"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2083455313 = messageFormatterFn((function(  ) {
  return function(d) { return "Record Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1415352534 = messageFormatterFn((function(  ) {
  return function(d) { return "Record Details (Only top " + d.numberOfTopDisplayedRows + " rows shown)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a115541037 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1593387835 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have higher average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1016939627 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have lower average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1415652357 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have higher distinct count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1565395553 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have lower distinct count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1696249783 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have higher count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1465011613 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have lower count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1699910596 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a238095280 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have higher median of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1520631466 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have lower median of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a78270029 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have higher sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1248692455 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have lower sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a787242575 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have higher aggregated value of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1364369705 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " is entirely made of records with the category " + d.dimension + ": " + d.primaryDisplayValue + ". This category tends to have lower aggregated value of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1058696313 = messageFormatterFn((function(  ) {
  return function(d) { return "The higher value is partially explained by " + d.dimension + ": " + d.singleValue + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b578588284 = messageFormatterFn((function(  ) {
  return function(d) { return "The value is partially explained by " + d.dimension + ": " + d.singleValue + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a584049517 = messageFormatterFn((function(  ) {
  return function(d) { return "The lower value is partially explained by " + d.dimension + ": " + d.singleValue + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1061946458 = messageFormatterFn((function(  ) {
  return function(d) { return "Cross-Database Join"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1348377207 = messageFormatterFn((function(  ) {
  return function(d) { return "The source visualization has changed or a different mark has been selected. Select a mark and run Explain Data again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b107616827 = messageFormatterFn((function(  ) {
  return function(d) { return "Stale Dialog"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1663233855 = messageFormatterFn((function(  ) {
  return function(d) { return "Consider " + d.skippedFieldsNum + " more fields?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a513293120 = messageFormatterFn((function(  ) {
  return function(d) { return d.consideredFieldsNum + " of " + d.totalFieldsNum + " fields considered"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1845115708 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows the average of " + d.baseColumnCaption + " for each category of " + d.dimension + ". The blue bar indicates the average of " + d.baseColumnCaption + " for the explained mark " + d.selectedMark + ". The grey bar shows the average of " + d.baseColumnCaption + " for all records in the source visualization."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1911535122 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " by " + d.dimension; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1302082702 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b304598272 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have higher average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a108952541 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have similar average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1953779706 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have lower average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1555066976 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have higher distinct count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b871619 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have similar distinct count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1855570074 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have lower distinct count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b822248114 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have higher count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1241676623 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have similar count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1970478088 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have lower count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1562343243 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have higher median of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2145402638 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have similar median of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b646629797 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have lower median of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1491468434 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have higher sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b47554421 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have similar sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a598009908 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have lower sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1646720170 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have higher aggregated value of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a470282099 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have similar aggregated value of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a48828700 = messageFormatterFn((function(  ) {
  return function(d) { return "The explained mark " + d.selectedMark + " has an interesting distribution of values for " + d.dimension + ". Marks with this distribution of values tend to have lower aggregated value of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1489957831 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows how the explained mark " + d.selectedMark + " has a different distribution of values within " + d.dimension + " compared to the distribution of values within " + d.dimension + " for all records in the source visualization."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a869348907 = messageFormatterFn((function(  ) {
  return function(d) { return "Distribution of records by " + d.dimension; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a581699902 = messageFormatterFn((function(  ) {
  return function(d) { return "The higher value is partially explained by the distribution of values for " + d.dimension + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1814392159 = messageFormatterFn((function(  ) {
  return function(d) { return "The value is partially explained by the distribution of values for " + d.dimension + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a568662536 = messageFormatterFn((function(  ) {
  return function(d) { return "The lower value is partially explained by the distribution of values for " + d.dimension + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1878320184 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have higher average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b940052059 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have similar average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1995962318 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have lower average of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1900292248 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have higher distinct count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2112920459 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have similar distinct count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1458429598 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have lower distinct count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1803215738 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have higher count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a896451351 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have similar count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1032290880 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have lower count of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1217117971 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have higher median of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a37515818 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have similar median of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1627597421 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have lower median of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2075921866 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have higher sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a890632787 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have similar sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a62673916 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have lower sum of " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1710059918 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have higher " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b510685525 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have similar " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a633282132 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks with similar values of " + d.measure + " tend to have lower " + d.baseColumnCaption + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a290026102 = messageFormatterFn((function(  ) {
  return function(d) { return "The higher value is partially explained by its correlation with " + d.measure + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1362438951 = messageFormatterFn((function(  ) {
  return function(d) { return "The value is partially explained by its correlation with " + d.measure + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a836348368 = messageFormatterFn((function(  ) {
  return function(d) { return "The lower value is partially explained by its correlation with " + d.measure + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1288739507 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows the correlation between " + d.baseColumnCaption + " and average of " + d.measure + " for all records in the source visualization."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1543846849 = messageFormatterFn((function(  ) {
  return function(d) { return d.baseColumnCaption + " and average of " + d.measure; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a4395675 = messageFormatterFn((function(  ) {
  return function(d) { return "View Full Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b391973989 = messageFormatterFn((function(  ) {
  return function(d) { return "A visualization for the selected mark cannot be plotted after the extreme value is excluded because all remaining values of the measure are null."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b416448553 = messageFormatterFn((function(  ) {
  return function(d) { return "The source visualization has changed or a different mark has been selected. To refresh explanations, select a mark and run Explain Data again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1445791945 = messageFormatterFn((function(  ) {
  return function(d) { return "This value is within the expected range based on all the values in the data source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a398661307 = messageFormatterFn((function(  ) {
  return function(d) { return "Expected Value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a671904401 = messageFormatterFn((function(  ) {
  return function(d) { return "Extend Date Range"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2039400223 = messageFormatterFn((function(  ) {
  return function(d) { return "Extend the date range to show values for forecasted and calculated fields."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b100791223 = messageFormatterFn((function(  ) {
  return function(d) { return "Length of additional time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b344725493 = messageFormatterFn((function(  ) {
  return function(d) { return "Length of time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a289988440 = messageFormatterFn((function(  ) {
  return function(d) { return "Unit of time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a414229403 = messageFormatterFn((function(  ) {
  return function(d) { return "YEAR"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a338109220 = messageFormatterFn((function(  ) {
  return function(d) { return "QUARTER"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1805477576 = messageFormatterFn((function(  ) {
  return function(d) { return "MONTH"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a357083538 = messageFormatterFn((function(  ) {
  return function(d) { return "WEEK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1945792876 = messageFormatterFn((function(  ) {
  return function(d) { return "DAY"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b62635134 = messageFormatterFn((function(  ) {
  return function(d) { return "HOUR"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1163941134 = messageFormatterFn((function(  ) {
  return function(d) { return "MINUTE"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1127297362 = messageFormatterFn((function(  ) {
  return function(d) { return "SECOND"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1131194227 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Button"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b375773432 = messageFormatterFn((function(  ) {
  return function(d) { return "Image"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2075137611 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b314353881 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose an image..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b35925874 = messageFormatterFn((function(  ) {
  return function(d) { return "Tooltip"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1167768531 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter optional tooltip text"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b825278119 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a124087047 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1483567957 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a456387273 = messageFormatterFn((function(  ) {
  return function(d) { return "Border"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a603730507 = messageFormatterFn((function(  ) {
  return function(d) { return "Background"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1243611932 = messageFormatterFn((function(  ) {
  return function(d) { return "Opacity"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1451639454 = messageFormatterFn((function(  ) {
  return function(d) { return "%"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b561677535 = messageFormatterFn((function(  ) {
  return function(d) { return "Error"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b605462971 = messageFormatterFn((function(  ) {
  return function(d) { return "characters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b393144260 = messageFormatterFn((function(  ) {
  return function(d) { return "Background Opacity Slider"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b45554625 = messageFormatterFn((function(  ) {
  return function(d) { return "Toggle Visual State Tabs"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1154111532 = messageFormatterFn((function(  ) {
  return function(d) { return "Format"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1484069256 = messageFormatterFn((function(  ) {
  return function(d) { return "Button Style"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a788314400 = messageFormatterFn((function(  ) {
  return function(d) { return "Image Button"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1531763702 = messageFormatterFn((function(  ) {
  return function(d) { return "Text Button"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b487156737 = messageFormatterFn((function(  ) {
  return function(d) { return "Title"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b53947005 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter optional title"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a7650843 = messageFormatterFn((function(  ) {
  return function(d) { return "Button Appearance"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b419230001 = messageFormatterFn((function(  ) {
  return function(d) { return "Item Shown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1882025923 = messageFormatterFn((function(  ) {
  return function(d) { return "Item Hidden"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1860084446 = messageFormatterFn((function(  ) {
  return function(d) { return "Font"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1495585111 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy formatting to Item Hidden"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a886105561 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy formatting to Item Shown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1279838854 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b979078727 = messageFormatterFn((function(  ) {
  return function(d) { return "Save Current Snapshot"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1102002006 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b788295243 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a29554857 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a96225643 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2113481070 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a valid data value."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2057769810 = messageFormatterFn((function(  ) {
  return function(d) { return "All Values in Context"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a781530958 = messageFormatterFn((function(  ) {
  return function(d) { return "All Values in Database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b378578930 = messageFormatterFn((function(  ) {
  return function(d) { return "Only Relevant Values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a442196372 = messageFormatterFn((function(  ) {
  return function(d) { return "All Values in Hierarchy"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b356380911 = messageFormatterFn((function(  ) {
  return function(d) { return "All Values in Hierarchy and Context"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a442052659 = messageFormatterFn((function(  ) {
  return function(d) { return "Select From List"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2024678533 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom Value List"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b158286647 = messageFormatterFn((function(  ) {
  return function(d) { return "Use All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2125848097 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1853745747 = messageFormatterFn((function(  ) {
  return function(d) { return "Selection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1240765687 = messageFormatterFn((function(  ) {
  return function(d) { return "Wildcard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1457635806 = messageFormatterFn((function(  ) {
  return function(d) { return "Condition"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a181041858 = messageFormatterFn((function(  ) {
  return function(d) { return "Limit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1111932856 = messageFormatterFn((function(  ) {
  return function(d) { return "Include all values when empty"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1938109027 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter to latest date value when workbook is opened"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1052229066 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading all values..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1426973947 = messageFormatterFn((function(  ) {
  return function(d) { return "Add custom values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1713097386 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1316758799 = messageFormatterFn((function(  ) {
  return function(d) { return "(All)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a458527806 = messageFormatterFn((function(  ) {
  return function(d) { return "(All in Search)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b166813294 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear List"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1379319164 = messageFormatterFn((function(  ) {
  return function(d) { return "No matches"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a726629807 = messageFormatterFn((function(  ) {
  return function(d) { return "General"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1953522925 = messageFormatterFn((function(  ) {
  return function(d) { return "Summary"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1081069490 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1800928374 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter Text to Search or Add"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2070440479 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter Text to Add"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b812691927 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b453084614 = messageFormatterFn((function(  ) {
  return function(d) { return "Add"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1785102427 = messageFormatterFn((function(  ) {
  return function(d) { return "Certification icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1244229286 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified by"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1344488684 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified Datasource"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b156444512 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified Datasource (Live)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1758048177 = messageFormatterFn((function(  ) {
  return function(d) { return "Data connection icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a882984915 = messageFormatterFn((function(  ) {
  return function(d) { return "External server connection icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b236621279 = messageFormatterFn((function(  ) {
  return function(d) { return "File icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2002208184 = messageFormatterFn((function(  ) {
  return function(d) { return "Live connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b217021229 = messageFormatterFn((function(  ) {
  return function(d) { return "Last extract:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a888757650 = messageFormatterFn((function(  ) {
  return function(d) { return "No data connections"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1764201384 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1801004092 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Server connection icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a470074019 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified Tableau Server connection icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1055494454 = messageFormatterFn((function(  ) {
  return function(d) { return "This workbook connects to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1718027933 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose an Extension"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1761576738 = messageFormatterFn((function(  ) {
  return function(d) { return "Recent Extensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a347847875 = messageFormatterFn((function(  ) {
  return function(d) { return "No recently used extensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1269404979 = messageFormatterFn((function(  ) {
  return function(d) { return "More..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b940322012 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more about Extensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1768779612 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1746867806 = messageFormatterFn((function(  ) {
  return function(d) { return "Click Browse... to select an extension manifest"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1590185954 = messageFormatterFn((function(  ) {
  return function(d) { return "What are Dashboard Extensions?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1024696899 = messageFormatterFn((function(  ) {
  return function(d) { return "Extensions are web applications that can interact with worksheets and data in Tableau. You can add custom extensions to your dashboard to add new capabilities to Tableau."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1168676373 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose an Extension..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1204236182 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1133050893 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a775047937 = messageFormatterFn((function(  ) {
  return function(d) { return "Extensions Gallery"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b285286090 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected file is too large. Select a file less than " + d.fileSize + "MB"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1124602512 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid Extension Manifest selected. Only .trex files are supported."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2012804157 = messageFormatterFn((function(  ) {
  return function(d) { return "Wrong number of files selected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a25492626 = messageFormatterFn((function(  ) {
  return function(d) { return "File reading aborted"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a498629474 = messageFormatterFn((function(  ) {
  return function(d) { return "Find and download new extensions from the " + d.GALLERY + ". Click " + d.EXTENSIONS + " to use an extension (.trex file) from your computer."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2123682970 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension Gallery"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1482451187 = messageFormatterFn((function(  ) {
  return function(d) { return "My Extensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1985695964 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1376679521 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1336442465 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1719281273 = messageFormatterFn((function(  ) {
  return function(d) { return "Connect"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2025330659 = messageFormatterFn((function(  ) {
  return function(d) { return "file"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1753726805 = messageFormatterFn((function(  ) {
  return function(d) { return "folder"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2126432261 = messageFormatterFn((function(  ) {
  return function(d) { return "Kind"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b290255707 = messageFormatterFn((function(  ) {
  return function(d) { return "Last Modified On"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2047961806 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1840312086 = messageFormatterFn((function(  ) {
  return function(d) { return "No files or folders matching the searched name were found"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1946705393 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1267830936 = messageFormatterFn((function(  ) {
  return function(d) { return "Search not supported for Business accounts"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a347448864 = messageFormatterFn((function(  ) {
  return function(d) { return "Search Results"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1607928550 = messageFormatterFn((function(  ) {
  return function(d) { return "signed in as " + d.user + " "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b939486176 = messageFormatterFn((function(  ) {
  return function(d) { return "sign out"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1023705213 = messageFormatterFn((function(  ) {
  return function(d) { return "The URL you entered is invalid or points to a file you don't have permission to view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1053674704 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a comment."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1111282783 = messageFormatterFn((function(  ) {
  return function(d) { return "@mention to notify someone"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a856642330 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a comment"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b849113558 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a comment. @mention to notify someone."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a586234441 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a snapshot of the view to your comment"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b417380523 = messageFormatterFn((function(  ) {
  return function(d) { return "Couldn't create a snapshot of the view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1465273848 = messageFormatterFn((function(  ) {
  return function(d) { return "Applying the snapshot's filters and selection to the view..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1885602008 = messageFormatterFn((function(  ) {
  return function(d) { return "Couldn't apply snapshot from " + d.user + " to the view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a937118726 = messageFormatterFn((function(  ) {
  return function(d) { return "Something went wrong"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a544430526 = messageFormatterFn((function(  ) {
  return function(d) { return "Close panel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a169003142 = messageFormatterFn((function(  ) {
  return function(d) { return "Comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a253711618 = messageFormatterFn((function(  ) {
  return function(d) { return "You no longer have add comment permission."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b127737520 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs.en, { one: function() { return "User";}, other: function() { return d.formattedItemCount + " users";} }) + " will not be notified about " + d.comment; }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.a1471531500 = messageFormatterFn((function(  ) {
  return function(d) { return "You no longer have permission to view the comments."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1406998927 = messageFormatterFn((function(  ) {
  return function(d) { return "Confirm delete of comment by " + d.user + " on " + d.date; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1524561682 = messageFormatterFn((function(  ) {
  return function(d) { return "Check your internet connection and retry."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b904005292 = messageFormatterFn((function(  ) {
  return function(d) { return "Check your internet connection and refresh to try again"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2069839777 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact your administrator."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a18627952 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b103099487 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1995720738 = messageFormatterFn((function(  ) {
  return function(d) { return "This message has already been deleted."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1713758616 = messageFormatterFn((function(  ) {
  return function(d) { return "You do not have permission to delete this comment."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1423669119 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a490842535 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to download image"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1117524006 = messageFormatterFn((function(  ) {
  return function(d) { return "An unknown error has occurred"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1513402832 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to get comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a333220967 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to get image"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1591409219 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1104549106 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to load comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2089505580 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading comments..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1250654285 = messageFormatterFn((function(  ) {
  return function(d) { return "Message is too long"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1015530127 = messageFormatterFn((function(  ) {
  return function(d) { return "No comments on this view."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b229925326 = messageFormatterFn((function(  ) {
  return function(d) { return "@mention someone in your comment to notify them"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1889096782 = messageFormatterFn((function(  ) {
  return function(d) { return "Post"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b163283605 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove snapshot"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1237763732 = messageFormatterFn((function(  ) {
  return function(d) { return "Retry"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1392247716 = messageFormatterFn((function(  ) {
  return function(d) { return "Couldn't send."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1430985120 = messageFormatterFn((function(  ) {
  return function(d) { return "Snapshot added."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1504116337 = messageFormatterFn((function(  ) {
  return function(d) { return "A snapshot of the view is attached to this comment."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2118798872 = messageFormatterFn((function(  ) {
  return function(d) { return "Snapshot preview"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b3792768 = messageFormatterFn((function(  ) {
  return function(d) { return "Snapshot removed."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1523397989 = messageFormatterFn((function(  ) {
  return function(d) { return "Tap to retry"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b274322310 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to load comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1861665231 = messageFormatterFn((function(  ) {
  return function(d) { return d.user + " doesn't have permissions to see this view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a221714838 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs.en, { one: function() { return d.formattedItemCount + " user";}, other: function() { return d.formattedItemCount + " users";} }) + " won't be notified"; }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b1318343138 = messageFormatterFn((function(  ) {
  return function(d) { return d.user + " lacks an email address in their Tableau account"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b481362245 = messageFormatterFn((function(  ) {
  return function(d) { return d.user + " doesn’t have permissions to see comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1797312956 = messageFormatterFn((function(  ) {
  return function(d) { return "User will not be notified"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a631426777 = messageFormatterFn((function(  ) {
  return function(d) { return "User Removed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2079754917 = messageFormatterFn((function(  ) {
  return function(d) { return "View"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1722489676 = messageFormatterFn((function(  ) {
  return function(d) { return "About"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1739864580 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a422593020 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1739267275 = messageFormatterFn((function(  ) {
  return function(d) { return "Connect"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1252908026 = messageFormatterFn((function(  ) {
  return function(d) { return "Content Type:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b6569367 = messageFormatterFn((function(  ) {
  return function(d) { return "Connecting to this data isn't supported."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a68256128 = messageFormatterFn((function(  ) {
  return function(d) { return "You don't have permissions to connect to this data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a914110279 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2117901833 = messageFormatterFn((function(  ) {
  return function(d) { return "All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1855111626 = messageFormatterFn((function(  ) {
  return function(d) { return "By " + d.displayName + " on " + d.updatedAt; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1388485478 = messageFormatterFn((function(  ) {
  return function(d) { return "All assets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2037871413 = messageFormatterFn((function(  ) {
  return function(d) { return "Assets without warnings"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1680830101 = messageFormatterFn((function(  ) {
  return function(d) { return "Assets with warnings"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b480891944 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Quality Warning"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1894752202 = messageFormatterFn((function(  ) {
  return function(d) { return "Database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2024230965 = messageFormatterFn((function(  ) {
  return function(d) { return "Database Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1392147777 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1763344831 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases and Files"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1098333888 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases and Files (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1034903788 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2017170251 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b302462198 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b235846557 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a430688819 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Published Data Sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1383117662 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Workbooks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b979970005 = messageFormatterFn((function(  ) {
  return function(d) { return "You've filtered out all the content."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1097744823 = messageFormatterFn((function(  ) {
  return function(d) { return "There is nothing here yet."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2006785937 = messageFormatterFn((function(  ) {
  return function(d) { return "Error"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b561207441 = messageFormatterFn((function(  ) {
  return function(d) { return "The server encountered an error. Try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b396703558 = messageFormatterFn((function(  ) {
  return function(d) { return "Your session timed out. Reopen the dialog to connect."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1042936452 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b110900600 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1846663542 = messageFormatterFn((function(  ) {
  return function(d) { return "File Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1904133264 = messageFormatterFn((function(  ) {
  return function(d) { return "File Path"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1382782690 = messageFormatterFn((function(  ) {
  return function(d) { return "Files"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1290357086 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters: " + d.count; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1642319643 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a856296991 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2556490 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a915315162 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2089945545 = messageFormatterFn((function(  ) {
  return function(d) { return "Connects To"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a710331988 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a555910143 = messageFormatterFn((function(  ) {
  return function(d) { return "Live/Last Extract"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a218062125 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a226630413 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1355667931 = messageFormatterFn((function(  ) {
  return function(d) { return "Server"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b78850707 = messageFormatterFn((function(  ) {
  return function(d) { return "Server / Path"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a412090908 = messageFormatterFn((function(  ) {
  return function(d) { return "Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b424643740 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden User"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b142599038 = messageFormatterFn((function(  ) {
  return function(d) { return "Hostname"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1215134599 = messageFormatterFn((function(  ) {
  return function(d) { return "Live"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b641258425 = messageFormatterFn((function(  ) {
  return function(d) { return "none"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1582529958 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a109155401 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner's Display Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b391697131 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner's Id"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a792464064 = messageFormatterFn((function(  ) {
  return function(d) { return "(" + d.ITEM + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1742593770 = messageFormatterFn((function(  ) {
  return function(d) { return "Permissions Required"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2048431019 = messageFormatterFn((function(  ) {
  return function(d) { return "Project Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b280182826 = messageFormatterFn((function(  ) {
  return function(d) { return "Published Connections"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b862622455 = messageFormatterFn((function(  ) {
  return function(d) { return "Published Connections (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a120416112 = messageFormatterFn((function(  ) {
  return function(d) { return "Schema"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1729945520 = messageFormatterFn((function(  ) {
  return function(d) { return "Search for data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a448816787 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b507348841 = messageFormatterFn((function(  ) {
  return function(d) { return "Send"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a177305603 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2080706379 = messageFormatterFn((function(  ) {
  return function(d) { return "Table"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1479889251 = messageFormatterFn((function(  ) {
  return function(d) { return "Table (" + d.name + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b77312204 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a596002667 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b482607896 = messageFormatterFn((function(  ) {
  return function(d) { return "Tags"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b255239222 = messageFormatterFn((function(  ) {
  return function(d) { return "To"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2000004703 = messageFormatterFn((function(  ) {
  return function(d) { return "Toggle filters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1694287390 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Data Connector"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a334761568 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1682182902 = messageFormatterFn((function(  ) {
  return function(d) { return "Remember Password"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b33920924 = messageFormatterFn((function(  ) {
  return function(d) { return "Authentication:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a125071357 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Azure HDInsight Service"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1323979673 = messageFormatterFn((function(  ) {
  return function(d) { return "Integrated Authentication"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2061365663 = messageFormatterFn((function(  ) {
  return function(d) { return "Kerberos"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b303434483 = messageFormatterFn((function(  ) {
  return function(d) { return "LDAP"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b205104002 = messageFormatterFn((function(  ) {
  return function(d) { return "No Authentication"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1809250311 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in using OAuth"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1757495000 = messageFormatterFn((function(  ) {
  return function(d) { return "SAML IdP"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b466720944 = messageFormatterFn((function(  ) {
  return function(d) { return "Teradata Database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a311133740 = messageFormatterFn((function(  ) {
  return function(d) { return "Username and Password"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b813803351 = messageFormatterFn((function(  ) {
  return function(d) { return "Active Directory Password"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1109256476 = messageFormatterFn((function(  ) {
  return function(d) { return "Username"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a218675035 = messageFormatterFn((function(  ) {
  return function(d) { return "Windows Authentication"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a54050209 = messageFormatterFn((function(  ) {
  return function(d) { return "Password"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2080762645 = messageFormatterFn((function(  ) {
  return function(d) { return "Direct"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1366923348 = messageFormatterFn((function(  ) {
  return function(d) { return "HiveServer2"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1399224630 = messageFormatterFn((function(  ) {
  return function(d) { return "Impala"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a489929650 = messageFormatterFn((function(  ) {
  return function(d) { return "SharkServer (Shark 0.8.1 and earlier)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1992036394 = messageFormatterFn((function(  ) {
  return function(d) { return "SharkServer2 (Shark 0.9.*)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1522591402 = messageFormatterFn((function(  ) {
  return function(d) { return "SparkThriftServer (Spark 1.1 and later)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1091946038 = messageFormatterFn((function(  ) {
  return function(d) { return "ZooKeeper"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2034559786 = messageFormatterFn((function(  ) {
  return function(d) { return "SingleNode"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a26827269 = messageFormatterFn((function(  ) {
  return function(d) { return "MultiNode"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a626249337 = messageFormatterFn((function(  ) {
  return function(d) { return "Add SQL statements to be run at connect time."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a9829008 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a339708011 = messageFormatterFn((function(  ) {
  return function(d) { return "Initial SQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b956419018 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1320678518 = messageFormatterFn((function(  ) {
  return function(d) { return "Show Initial SQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1707293669 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide Initial SQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a634131777 = messageFormatterFn((function(  ) {
  return function(d) { return "Binary"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1510905128 = messageFormatterFn((function(  ) {
  return function(d) { return "HTTP"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1708409848 = messageFormatterFn((function(  ) {
  return function(d) { return "No Transport Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1808245255 = messageFormatterFn((function(  ) {
  return function(d) { return "SASL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a313927897 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a DSN (data source name) for the database you want to connect to. To publish and run your flow on Tableau Server, the server must be configured with a matching DSN."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1083647901 = messageFormatterFn((function(  ) {
  return function(d) { return "DSN:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1091240746 = messageFormatterFn((function(  ) {
  return function(d) { return "Select DSN"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a824791310 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1358687201 = messageFormatterFn((function(  ) {
  return function(d) { return "Cut"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1946751056 = messageFormatterFn((function(  ) {
  return function(d) { return "Paste"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b637441164 = messageFormatterFn((function(  ) {
  return function(d) { return "Read uncommitted data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1930901595 = messageFormatterFn((function(  ) {
  return function(d) { return "Require Encryption"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b925271808 = messageFormatterFn((function(  ) {
  return function(d) { return "Require SSL (recommended)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1181860937 = messageFormatterFn((function(  ) {
  return function(d) { return "Keep your data safe by encrypting the data connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1361585235 = messageFormatterFn((function(  ) {
  return function(d) { return "SSL certificate file"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b87476619 = messageFormatterFn((function(  ) {
  return function(d) { return "Detailed Error Message"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b935903431 = messageFormatterFn((function(  ) {
  return function(d) { return "Optional"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1201480561 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign In"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b544606338 = messageFormatterFn((function(  ) {
  return function(d) { return "Signing In…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b384954460 = messageFormatterFn((function(  ) {
  return function(d) { return "Type:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b956035642 = messageFormatterFn((function(  ) {
  return function(d) { return "Username:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1283605601 = messageFormatterFn((function(  ) {
  return function(d) { return "Password:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1425838799 = messageFormatterFn((function(  ) {
  return function(d) { return "Access Key ID:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1704455350 = messageFormatterFn((function(  ) {
  return function(d) { return "Secret Access Key:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2053829712 = messageFormatterFn((function(  ) {
  return function(d) { return "SAML IdP(Okta):"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1079906130 = messageFormatterFn((function(  ) {
  return function(d) { return d.prompt + ":"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b709024273 = messageFormatterFn((function(  ) {
  return function(d) { return "HTTP:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b284692636 = messageFormatterFn((function(  ) {
  return function(d) { return "Realm:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1306109378 = messageFormatterFn((function(  ) {
  return function(d) { return "Service Name:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1564067161 = messageFormatterFn((function(  ) {
  return function(d) { return "Host FQDN:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a247014005 = messageFormatterFn((function(  ) {
  return function(d) { return "Transport:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a535954302 = messageFormatterFn((function(  ) {
  return function(d) { return "OAuth Service URL:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2117222343 = messageFormatterFn((function(  ) {
  return function(d) { return "Connect"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b968910689 = messageFormatterFn((function(  ) {
  return function(d) { return "To a File"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1294093658 = messageFormatterFn((function(  ) {
  return function(d) { return "To a Server"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1342160884 = messageFormatterFn((function(  ) {
  return function(d) { return "URL:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b267063805 = messageFormatterFn((function(  ) {
  return function(d) { return "Dialect:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b516367101 = messageFormatterFn((function(  ) {
  return function(d) { return "Properties File:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a629610943 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide connection details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1558801372 = messageFormatterFn((function(  ) {
  return function(d) { return "Show connection details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a897082197 = messageFormatterFn((function(  ) {
  return function(d) { return "Filename:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1707716302 = messageFormatterFn((function(  ) {
  return function(d) { return "Database password:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b173858064 = messageFormatterFn((function(  ) {
  return function(d) { return "Workgroup security"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b355575117 = messageFormatterFn((function(  ) {
  return function(d) { return "Workgroup file:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1783673374 = messageFormatterFn((function(  ) {
  return function(d) { return "Username:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a455967869 = messageFormatterFn((function(  ) {
  return function(d) { return "Password:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1052854429 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1422042490 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1551324537 = messageFormatterFn((function(  ) {
  return function(d) { return "Open"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1897872952 = messageFormatterFn((function(  ) {
  return function(d) { return "No file chosen"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a640388178 = messageFormatterFn((function(  ) {
  return function(d) { return "For support, contact vendor."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b929718168 = messageFormatterFn((function(  ) {
  return function(d) { return "Download and install the drivers,"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1059726964 = messageFormatterFn((function(  ) {
  return function(d) { return " and then connect."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1219655132 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Custom SQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1095711959 = messageFormatterFn((function(  ) {
  return function(d) { return "Convert to SQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a368823831 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b690235051 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1088246857 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter SQL query here. For example, 'SELECT * FROM table_name'"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1297433604 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert Parameter:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1668497494 = messageFormatterFn((function(  ) {
  return function(d) { return "Create a New Parameter..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1144743934 = messageFormatterFn((function(  ) {
  return function(d) { return "Preview Results..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a190745625 = messageFormatterFn((function(  ) {
  return function(d) { return "Original"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b503745984 = messageFormatterFn((function(  ) {
  return function(d) { return "Author:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1643141149 = messageFormatterFn((function(  ) {
  return function(d) { return "Name this view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b458854702 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2056860341 = messageFormatterFn((function(  ) {
  return function(d) { return "Please enter a name for the Custom View in the text field."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1898957137 = messageFormatterFn((function(  ) {
  return function(d) { return "Make it my default"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1126302854 = messageFormatterFn((function(  ) {
  return function(d) { return "Make visible to others"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a689237299 = messageFormatterFn((function(  ) {
  return function(d) { return "Anyone with access to the view can see this custom view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1936029142 = messageFormatterFn((function(  ) {
  return function(d) { return "Save Custom View"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b901055979 = messageFormatterFn((function(  ) {
  return function(d) { return "My Views"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1972842817 = messageFormatterFn((function(  ) {
  return function(d) { return "Other Views"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a690617898 = messageFormatterFn((function(  ) {
  return function(d) { return " (default)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a825625707 = messageFormatterFn((function(  ) {
  return function(d) { return "Nothing saved yet"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1990151377 = messageFormatterFn((function(  ) {
  return function(d) { return "Manage Views"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a723552517 = messageFormatterFn((function(  ) {
  return function(d) { return "Back"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a45172943 = messageFormatterFn((function(  ) {
  return function(d) { return "Manage Views"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b814606043 = messageFormatterFn((function(  ) {
  return function(d) { return "Set this view as your default"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b179230064 = messageFormatterFn((function(  ) {
  return function(d) { return "This is your current default"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b69032058 = messageFormatterFn((function(  ) {
  return function(d) { return "Rename this view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b365949794 = messageFormatterFn((function(  ) {
  return function(d) { return "Rename this view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1805206622 = messageFormatterFn((function(  ) {
  return function(d) { return "This view is private"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b98992704 = messageFormatterFn((function(  ) {
  return function(d) { return "This view is public"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b149089927 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete this view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b454275715 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a488610926 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1263412592 = messageFormatterFn((function(  ) {
  return function(d) { return "Are you sure?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b966084267 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b565965880 = messageFormatterFn((function(  ) {
  return function(d) { return "Max character limit is 255"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1671531062 = messageFormatterFn((function(  ) {
  return function(d) { return "Actions let you create interactive relationships between data, dashboard objects, other worksheets, and the web."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1490018517 = messageFormatterFn((function(  ) {
  return function(d) { return "Show actions for"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b29296405 = messageFormatterFn((function(  ) {
  return function(d) { return "This sheet"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2012977203 = messageFormatterFn((function(  ) {
  return function(d) { return "This workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1449181573 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Action"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1196822509 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1401089942 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Filter Action"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2122629041 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Filter Action"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1941730846 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Highlight Action"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1413218279 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Highlight Action"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b381567744 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1955895494 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b377686775 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to Sheet..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b409349644 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Go to Sheet Action"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a451097121 = messageFormatterFn((function(  ) {
  return function(d) { return "Highlight..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b661622855 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Go to Sheet Action"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a898807092 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2002274096 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1266171630 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a126964085 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1901411760 = messageFormatterFn((function(  ) {
  return function(d) { return "Run On"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2068327239 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a677843237 = messageFormatterFn((function(  ) {
  return function(d) { return "Source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1913449321 = messageFormatterFn((function(  ) {
  return function(d) { return "In a browser, you can't edit this action; use Tableau Desktop instead."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b466493499 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1360441177 = messageFormatterFn((function(  ) {
  return function(d) { return "An empty name is not allowed."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1516295021 = messageFormatterFn((function(  ) {
  return function(d) { return "Select"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2104388115 = messageFormatterFn((function(  ) {
  return function(d) { return "Hover"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2113498832 = messageFormatterFn((function(  ) {
  return function(d) { return "Menu"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b772106921 = messageFormatterFn((function(  ) {
  return function(d) { return "Select"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a173346239 = messageFormatterFn((function(  ) {
  return function(d) { return "Single-select only"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1040521257 = messageFormatterFn((function(  ) {
  return function(d) { return "Hover"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1146806022 = messageFormatterFn((function(  ) {
  return function(d) { return "Menu"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1788789549 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b490068896 = messageFormatterFn((function(  ) {
  return function(d) { return "Datetime"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b422556882 = messageFormatterFn((function(  ) {
  return function(d) { return "Number"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1006751428 = messageFormatterFn((function(  ) {
  return function(d) { return "Run action on"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b685759861 = messageFormatterFn((function(  ) {
  return function(d) { return "Clearing the selection will"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b692697860 = messageFormatterFn((function(  ) {
  return function(d) { return "Keep filtered values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1806630004 = messageFormatterFn((function(  ) {
  return function(d) { return "Show all values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1491156381 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude all values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b470652648 = messageFormatterFn((function(  ) {
  return function(d) { return "Source Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1276147676 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected source sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2071982478 = messageFormatterFn((function(  ) {
  return function(d) { return "Target Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2129259482 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected target sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a951577721 = messageFormatterFn((function(  ) {
  return function(d) { return "Select sheets from:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1556893713 = messageFormatterFn((function(  ) {
  return function(d) { return "Click to add"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b226079052 = messageFormatterFn((function(  ) {
  return function(d) { return "Select all"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a442603951 = messageFormatterFn((function(  ) {
  return function(d) { return "Row " + d.rowIndex; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1574266656 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a15697132 = messageFormatterFn((function(  ) {
  return function(d) { return "All fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1304293416 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a626911026 = messageFormatterFn((function(  ) {
  return function(d) { return "Source Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a916679161 = messageFormatterFn((function(  ) {
  return function(d) { return "Target Data Source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1458672388 = messageFormatterFn((function(  ) {
  return function(d) { return "Target Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a908165834 = messageFormatterFn((function(  ) {
  return function(d) { return "Please specify target field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1581272462 = messageFormatterFn((function(  ) {
  return function(d) { return "Actions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a321292330 = messageFormatterFn((function(  ) {
  return function(d) { return "Actions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1017299300 = messageFormatterFn((function(  ) {
  return function(d) { return "No matches."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1585840870 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2111767245 = messageFormatterFn((function(  ) {
  return function(d) { return "All Fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a184062439 = messageFormatterFn((function(  ) {
  return function(d) { return "Dates and Times"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1066723689 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected Fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a521479521 = messageFormatterFn((function(  ) {
  return function(d) { return "Target Highlighting"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b131605005 = messageFormatterFn((function(  ) {
  return function(d) { return "Please select one or more fields to highlight on the target."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a882157157 = messageFormatterFn((function(  ) {
  return function(d) { return "Above"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1842802659 = messageFormatterFn((function(  ) {
  return function(d) { return "Above or equal to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b266175882 = messageFormatterFn((function(  ) {
  return function(d) { return "Actions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1988497984 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Me"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b957523831 = messageFormatterFn((function(  ) {
  return function(d) { return "Alert Invalid"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a799666605 = messageFormatterFn((function(  ) {
  return function(d) { return "Alert Suspended"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b900482457 = messageFormatterFn((function(  ) {
  return function(d) { return "This alert is visible only to recipients."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1170834069 = messageFormatterFn((function(  ) {
  return function(d) { return "This alert is visible to everyone."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a272368871 = messageFormatterFn((function(  ) {
  return function(d) { return "Back"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1852586489 = messageFormatterFn((function(  ) {
  return function(d) { return "Below"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b526630135 = messageFormatterFn((function(  ) {
  return function(d) { return "Below or equal to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a85533770 = messageFormatterFn((function(  ) {
  return function(d) { return "Change owner"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1987145295 = messageFormatterFn((function(  ) {
  return function(d) { return "Change owner"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1851666224 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose an owner for the alert \"" + d.alertSubject + "\""; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1998425724 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a33435572 = messageFormatterFn((function(  ) {
  return function(d) { return "True"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1714687687 = messageFormatterFn((function(  ) {
  return function(d) { return "False"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1330692492 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1266007411 = messageFormatterFn((function(  ) {
  return function(d) { return "—"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1924727078 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom (" + d.viewName + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b605524899 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a997798026 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1499363825 = messageFormatterFn((function(  ) {
  return function(d) { return "Activity"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b976535522 = messageFormatterFn((function(  ) {
  return function(d) { return "Condition"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1937685151 = messageFormatterFn((function(  ) {
  return function(d) { return "Current status"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b745794774 = messageFormatterFn((function(  ) {
  return function(d) { return "Email sent"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1186704078 = messageFormatterFn((function(  ) {
  return function(d) { return "Frequency"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b189848569 = messageFormatterFn((function(  ) {
  return function(d) { return "Last checked"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a291891063 = messageFormatterFn((function(  ) {
  return function(d) { return "Last triggered"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b469411980 = messageFormatterFn((function(  ) {
  return function(d) { return "Measure"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b497849749 = messageFormatterFn((function(  ) {
  return function(d) { return "Notification"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a751348324 = messageFormatterFn((function(  ) {
  return function(d) { return "Operator"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1372311991 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1857550458 = messageFormatterFn((function(  ) {
  return function(d) { return "Recipients"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1757991807 = messageFormatterFn((function(  ) {
  return function(d) { return "Threshold"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b134141275 = messageFormatterFn((function(  ) {
  return function(d) { return "View"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1279823364 = messageFormatterFn((function(  ) {
  return function(d) { return "Alert Overview"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a800557884 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b481213481 = messageFormatterFn((function(  ) {
  return function(d) { return "Equal to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b938507955 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom (autosaved)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1593938012 = messageFormatterFn((function(  ) {
  return function(d) { return "Daily at most"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1819372658 = messageFormatterFn((function(  ) {
  return function(d) { return "As frequently as possible"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a437680036 = messageFormatterFn((function(  ) {
  return function(d) { return "Hourly at most"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1209439668 = messageFormatterFn((function(  ) {
  return function(d) { return "Once, the first time it's true"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b985608301 = messageFormatterFn((function(  ) {
  return function(d) { return d.interval + " minutes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a60398004 = messageFormatterFn((function(  ) {
  return function(d) { return "Weekly at most"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b286260071 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid on "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1547226892 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a315223849 = messageFormatterFn((function(  ) {
  return function(d) { return "Last triggered " + d.lastTriggeredTime; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1358107998 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1898984149 = messageFormatterFn((function(  ) {
  return function(d) { return "Alerts"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1796187200 = messageFormatterFn((function(  ) {
  return function(d) { return "Retry"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b668102034 = messageFormatterFn((function(  ) {
  return function(d) { return "Check your internet connection and retry"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a874320269 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to load alerts"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1093110127 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading alerts..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1533386505 = messageFormatterFn((function(  ) {
  return function(d) { return "Never"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1536579079 = messageFormatterFn((function(  ) {
  return function(d) { return "Never triggered"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1815470685 = messageFormatterFn((function(  ) {
  return function(d) { return "alert bell symbol"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1877719681 = messageFormatterFn((function(  ) {
  return function(d) { return "Create"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1742953853 = messageFormatterFn((function(  ) {
  return function(d) { return "Create an alert and we'll email you when your data meets those conditions."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1153162538 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1134737951 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a numeric axis of a chart. Then click Create."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2012711288 = messageFormatterFn((function(  ) {
  return function(d) { return "No alerts on this view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a836390241 = messageFormatterFn((function(  ) {
  return function(d) { return d.recipientCount + " recipients"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1237097652 = messageFormatterFn((function(  ) {
  return function(d) { return d.recipientCount + " recipient"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1086072710 = messageFormatterFn((function(  ) {
  return function(d) { return "Original"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1025518958 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove me"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b966778017 = messageFormatterFn((function(  ) {
  return function(d) { return "Resume"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2119178368 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1332896963 = messageFormatterFn((function(  ) {
  return function(d) { return "Suspended on "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1360711504 = messageFormatterFn((function(  ) {
  return function(d) { return "Suspended"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1622065521 = messageFormatterFn((function(  ) {
  return function(d) { return "About"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a515915422 = messageFormatterFn((function(  ) {
  return function(d) { return "Author"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b281781895 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to external assets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b640618319 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a677521711 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1408409902 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to table"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b486903922 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1851139808 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified by"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1883860072 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1570399207 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear filter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a437498370 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a476457550 = messageFormatterFn((function(  ) {
  return function(d) { return "Column Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b536770273 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1188821536 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1590869298 = messageFormatterFn((function(  ) {
  return function(d) { return "Combined fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a523017175 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b525235516 = messageFormatterFn((function(  ) {
  return function(d) { return "Connecting to this data isn't supported."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a406276072 = messageFormatterFn((function(  ) {
  return function(d) { return "Connected columns"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b970329659 = messageFormatterFn((function(  ) {
  return function(d) { return "Connected field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1356348468 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2141548621 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashboards"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1611081164 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashboards (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b960674073 = messageFormatterFn((function(  ) {
  return function(d) { return "Try again later.\n\nIf the information still hasn't loaded and you are the content owner, try republishing.\n\nIf republishing doesn't fix the problem, contact the Tableau administrator."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b805262875 = messageFormatterFn((function(  ) {
  return function(d) { return "Still loading lineage information…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b852026939 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculation"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1558467960 = messageFormatterFn((function(  ) {
  return function(d) { return "✔ Copied to clipboard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b959032574 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a364713957 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand Calculation"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a476309167 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified data source (extract)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b674658988 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified data source (live)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1263574536 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source (extract)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a415495851 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source (live)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1830139251 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2052594853 = messageFormatterFn((function(  ) {
  return function(d) { return "Data couldn’t be loaded.\n\nIf you are the content owner, try republishing.\n\nIf republishing doesn’t fix the problem contact the Tableau administrator."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2051230388 = messageFormatterFn((function(  ) {
  return function(d) { return "The server encountered an error. Try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1585777872 = messageFormatterFn((function(  ) {
  return function(d) { return "The request was for too many results."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1291355836 = messageFormatterFn((function(  ) {
  return function(d) { return "Request size limit exceeded"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a735314252 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a978696309 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b519345429 = messageFormatterFn((function(  ) {
  return function(d) { return "Try again later."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b8976799 = messageFormatterFn((function(  ) {
  return function(d) { return "The server is busy."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1870601659 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t show all results from the query.\n\nTry again later."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1064938897 = messageFormatterFn((function(  ) {
  return function(d) { return "Timeout limit exceeded"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2026176571 = messageFormatterFn((function(  ) {
  return function(d) { return "By " + d.displayName + " on " + d.updatedAt; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a252699891 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Quality Warning"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1210352188 = messageFormatterFn((function(  ) {
  return function(d) { return "Warnings"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a38548495 = messageFormatterFn((function(  ) {
  return function(d) { return "Database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a39236013 = messageFormatterFn((function(  ) {
  return function(d) { return "Category"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1378093474 = messageFormatterFn((function(  ) {
  return function(d) { return "Grouped database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a627456506 = messageFormatterFn((function(  ) {
  return function(d) { return "Database Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b741397752 = messageFormatterFn((function(  ) {
  return function(d) { return d.databaseName + " (" + d.databaseHostName + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1195079450 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b328209638 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases and Files"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b473521595 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1859728921 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1529563085 = messageFormatterFn((function(  ) {
  return function(d) { return "Connects to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1425829472 = messageFormatterFn((function(  ) {
  return function(d) { return "Last Refreshed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a475551401 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a867085090 = messageFormatterFn((function(  ) {
  return function(d) { return "Live Connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1721240371 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Source Place Page"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1817097808 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1583882191 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1763055845 = messageFormatterFn((function(  ) {
  return function(d) { return "Modified"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b696545794 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1905659517 = messageFormatterFn((function(  ) {
  return function(d) { return "Description (Data Source)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1255093500 = messageFormatterFn((function(  ) {
  return function(d) { return "This description was inherited from the column " + d.column + " from the database table " + d.table + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1402096241 = messageFormatterFn((function(  ) {
  return function(d) { return "This description was inherited from the column " + d.column + " from the database table " + d.table + ", through the published data source field " + d.field + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1473674210 = messageFormatterFn((function(  ) {
  return function(d) { return "This description was inherited from the published data source field " + d.field + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a76861976 = messageFormatterFn((function(  ) {
  return function(d) { return "Description (Workbook)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b715569099 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Dashboards"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1620910198 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Dashboards (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b282941864 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Databases"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b716326713 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Databases (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1222177266 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Published Data Sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a176397777 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Published Data Sources (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1065219907 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Metrics"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b300466116 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Metrics (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1009893307 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Flows"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a496761210 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Flows (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1609097930 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Owners"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1464984663 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Owners (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a381920010 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1746461781 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Sheets (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a127302203 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Tables"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1281977276 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Tables (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1443967481 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Workbooks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b591678906 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Workbooks (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a660362388 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit description"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a300110295 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit tags"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1013682104 = messageFormatterFn((function(  ) {
  return function(d) { return "Embedded Asset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a88433654 = messageFormatterFn((function(  ) {
  return function(d) { return "This table or file is embedded in the published asset on the server, and you can't create a new workbook from it. Files embedded in workbooks aren't shared with other Tableau site users."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b868072218 = messageFormatterFn((function(  ) {
  return function(d) { return "Embedded Data Sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a530356729 = messageFormatterFn((function(  ) {
  return function(d) { return "Embedded Data Sources (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1787170779 = messageFormatterFn((function(  ) {
  return function(d) { return "This column is not used by any fields."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1028897643 = messageFormatterFn((function(  ) {
  return function(d) { return "This column is not used by any flows."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1908748093 = messageFormatterFn((function(  ) {
  return function(d) { return "There is nothing here yet."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2123245946 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream dashboards."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1501206829 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream databases."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a246738889 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream data sources."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1454908541 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream dashboards."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1523711484 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream databases."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b499621710 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream data sources."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b896139863 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream flows."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1852854873 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream metrics."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b561392578 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream owners."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1477971218 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream sheets."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b299902461 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream tables."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b42253475 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream workbooks."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1997892096 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream flows."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a468017214 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream metrics."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1040715065 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream owners."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a998648731 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream sheets."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b779224948 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream tables."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1227795508 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream workbooks."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a413571449 = messageFormatterFn((function(  ) {
  return function(d) { return "This field is not used by any columns."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1287703583 = messageFormatterFn((function(  ) {
  return function(d) { return "This field does not reference any fields."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1433959706 = messageFormatterFn((function(  ) {
  return function(d) { return "Lineage isn't available for flows that have failed to run."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2105514694 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream databases."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b672534416 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream data sources."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a712484195 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream databases."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1595001433 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream data sources."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a445477008 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream flows."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1659452420 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream tables."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a161854439 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream flows."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1861817467 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream tables."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b996347643 = messageFormatterFn((function(  ) {
  return function(d) { return "Lineage isn't available for workbooks with no embedded datasources."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1906361782 = messageFormatterFn((function(  ) {
  return function(d) { return "Error"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1422917054 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Catalog isn't fully configured. Ask your Tableau administrator to run the “tsm maintenance metadata-services enable” command."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b480965620 = messageFormatterFn((function(  ) {
  return function(d) { return "Information for this page not found. It may still be loading, or you don't have permissions to view it."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1953277579 = messageFormatterFn((function(  ) {
  return function(d) { return "Information for this page could not be loaded."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2057583170 = messageFormatterFn((function(  ) {
  return function(d) { return "External Assets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a246227142 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b155309957 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b510221207 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1310168925 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b852039632 = messageFormatterFn((function(  ) {
  return function(d) { return "Datetime"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2076193793 = messageFormatterFn((function(  ) {
  return function(d) { return "Integer"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b906226029 = messageFormatterFn((function(  ) {
  return function(d) { return "Real"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1263210053 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b643156538 = messageFormatterFn((function(  ) {
  return function(d) { return "String"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b661726193 = messageFormatterFn((function(  ) {
  return function(d) { return "Table"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b76213879 = messageFormatterFn((function(  ) {
  return function(d) { return "Tuple"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1422826485 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1510175918 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Date Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1507930344 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Date Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1755722439 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Date Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1706544739 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Date Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a216678939 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Date & Time Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1924918331 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Date & Time Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b495822554 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Date & Time Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1265398160 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Date & Time Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b125771076 = messageFormatterFn((function(  ) {
  return function(d) { return "Field details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1292893825 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1085912284 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation param"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1915819171 = messageFormatterFn((function(  ) {
  return function(d) { return "Autogenerated?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1089755077 = messageFormatterFn((function(  ) {
  return function(d) { return "Bin size"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1037524346 = messageFormatterFn((function(  ) {
  return function(d) { return "Combination type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b404519199 = messageFormatterFn((function(  ) {
  return function(d) { return "Data category"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1409707549 = messageFormatterFn((function(  ) {
  return function(d) { return "Data type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1013492277 = messageFormatterFn((function(  ) {
  return function(d) { return "Default format"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1438987292 = messageFormatterFn((function(  ) {
  return function(d) { return "Delimiter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a928848263 = messageFormatterFn((function(  ) {
  return function(d) { return "Folder"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a31898627 = messageFormatterFn((function(  ) {
  return function(d) { return "Formula"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a985763887 = messageFormatterFn((function(  ) {
  return function(d) { return "Has 'Other'?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a948062431 = messageFormatterFn((function(  ) {
  return function(d) { return "Has user reference?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1139590205 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1578647270 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b839841009 = messageFormatterFn((function(  ) {
  return function(d) { return "Role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1389692299 = messageFormatterFn((function(  ) {
  return function(d) { return "Semantic role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1683488188 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a110787055 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Geographic Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a126365849 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Geographic Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1258265338 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Geographic Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2085099620 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Geographic Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b728113287 = messageFormatterFn((function(  ) {
  return function(d) { return "Group Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1603571794 = messageFormatterFn((function(  ) {
  return function(d) { return "Geographic Group Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1731776977 = messageFormatterFn((function(  ) {
  return function(d) { return "Hierarchy Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1371634648 = messageFormatterFn((function(  ) {
  return function(d) { return d.FieldName + " (Count)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b18627063 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Number Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1710638285 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Number Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1380514796 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Number Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2011496450 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Number Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2013553029 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Numeric Bin Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2142042705 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Numeric Bin Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1059624237 = messageFormatterFn((function(  ) {
  return function(d) { return "Nominal"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a788034946 = messageFormatterFn((function(  ) {
  return function(d) { return "Ordinal"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a508704892 = messageFormatterFn((function(  ) {
  return function(d) { return "Quantitative"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2080746213 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a651527321 = messageFormatterFn((function(  ) {
  return function(d) { return "Dimension"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a70339729 = messageFormatterFn((function(  ) {
  return function(d) { return "Measure"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1432569981 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1085031332 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b687477715 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Text Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b66643369 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Text Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1727407048 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Text Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a365793570 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Text Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1301857596 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1292719091 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2103423310 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b131068155 = messageFormatterFn((function(  ) {
  return function(d) { return "This file type can contain multiple tables."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b9540165 = messageFormatterFn((function(  ) {
  return function(d) { return "File Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a47929557 = messageFormatterFn((function(  ) {
  return function(d) { return "File Path"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1351142324 = messageFormatterFn((function(  ) {
  return function(d) { return "This file type can only contain a single table."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a184488618 = messageFormatterFn((function(  ) {
  return function(d) { return "File Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1282358535 = messageFormatterFn((function(  ) {
  return function(d) { return "Files"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1092044203 = messageFormatterFn((function(  ) {
  return function(d) { return "Filtered"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a727975357 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters: " + d.count; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b206942140 = messageFormatterFn((function(  ) {
  return function(d) { return "Output column information is not available."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b268038942 = messageFormatterFn((function(  ) {
  return function(d) { return "Output field information is not available."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a329224462 = messageFormatterFn((function(  ) {
  return function(d) { return "Outputs to column"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a416402584 = messageFormatterFn((function(  ) {
  return function(d) { return "Outputs to field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1193164281 = messageFormatterFn((function(  ) {
  return function(d) { return "Flows"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1334923768 = messageFormatterFn((function(  ) {
  return function(d) { return "Flows (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1178775596 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1492379057 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2113141729 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1381222481 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a586445581 = messageFormatterFn((function(  ) {
  return function(d) { return "Database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a757576978 = messageFormatterFn((function(  ) {
  return function(d) { return "Database name / path"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b262435107 = messageFormatterFn((function(  ) {
  return function(d) { return "Data sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1518888587 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1096955942 = messageFormatterFn((function(  ) {
  return function(d) { return "Live / Last extract"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2052396622 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2141703536 = messageFormatterFn((function(  ) {
  return function(d) { return "Owned data sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2020191429 = messageFormatterFn((function(  ) {
  return function(d) { return "Owned metrics"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a48598779 = messageFormatterFn((function(  ) {
  return function(d) { return "Owned workbooks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1976409470 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1864924056 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1423137430 = messageFormatterFn((function(  ) {
  return function(d) { return "Server"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a221908210 = messageFormatterFn((function(  ) {
  return function(d) { return "Server / Path"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a851942619 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1880787008 = messageFormatterFn((function(  ) {
  return function(d) { return "Tags"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1858367839 = messageFormatterFn((function(  ) {
  return function(d) { return "Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1816196276 = messageFormatterFn((function(  ) {
  return function(d) { return "View"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b480187679 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2000840056 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b622531853 = messageFormatterFn((function(  ) {
  return function(d) { return d.name + " (grouped)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2084945274 = messageFormatterFn((function(  ) {
  return function(d) { return "Grouped asset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b764523207 = messageFormatterFn((function(  ) {
  return function(d) { return "Grouped fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1824978327 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden User"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1998802745 = messageFormatterFn((function(  ) {
  return function(d) { return "Hostname"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1748043687 = messageFormatterFn((function(  ) {
  return function(d) { return "Lineage"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b713251479 = messageFormatterFn((function(  ) {
  return function(d) { return d.name + " (" + d.parentName + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a809373950 = messageFormatterFn((function(  ) {
  return function(d) { return "Live"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1286998338 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b715988112 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading data details…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b96840326 = messageFormatterFn((function(  ) {
  return function(d) { return "Retry"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1035473029 = messageFormatterFn((function(  ) {
  return function(d) { return "Metrics"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2014867770 = messageFormatterFn((function(  ) {
  return function(d) { return "Metrics (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a12944334 = messageFormatterFn((function(  ) {
  return function(d) { return "New Workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1783286878 = messageFormatterFn((function(  ) {
  return function(d) { return "No description available."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b985603162 = messageFormatterFn((function(  ) {
  return function(d) { return "No description"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b744954831 = messageFormatterFn((function(  ) {
  return function(d) { return "No tags available."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b499471604 = messageFormatterFn((function(  ) {
  return function(d) { return "none"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1023129048 = messageFormatterFn((function(  ) {
  return function(d) { return "Output Steps"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a222256887 = messageFormatterFn((function(  ) {
  return function(d) { return "Output Steps (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1482105803 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1626635312 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner's Id"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1299436468 = messageFormatterFn((function(  ) {
  return function(d) { return "Owners"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1251749141 = messageFormatterFn((function(  ) {
  return function(d) { return "Owners (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1803443589 = messageFormatterFn((function(  ) {
  return function(d) { return "Permissions Required"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b777081437 = messageFormatterFn((function(  ) {
  return function(d) { return "+ " + d.count; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b885560721 = messageFormatterFn((function(  ) {
  return function(d) { return "Query metadata (GraphiQL)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b232135066 = messageFormatterFn((function(  ) {
  return function(d) { return "Referenced fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b369016815 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1061402379 = messageFormatterFn((function(  ) {
  return function(d) { return "Schema"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a566082695 = messageFormatterFn((function(  ) {
  return function(d) { return "Select All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b365562020 = messageFormatterFn((function(  ) {
  return function(d) { return "Send"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1633629183 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields in Use (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1004512888 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1959697303 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1373627241 = messageFormatterFn((function(  ) {
  return function(d) { return "Views over last 12 weeks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1980282224 = messageFormatterFn((function(  ) {
  return function(d) { return "Table"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1259130695 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1068741754 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b340821075 = messageFormatterFn((function(  ) {
  return function(d) { return "Tags"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a388483023 = messageFormatterFn((function(  ) {
  return function(d) { return "To"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a363680895 = messageFormatterFn((function(  ) {
  return function(d) { return "(" + d.count + " total)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b287046782 = messageFormatterFn((function(  ) {
  return function(d) { return "The URL is not recognized."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1426948927 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Databases"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a35614656 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Databases (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1305365813 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Published Data Sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1237547658 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Published Data Sources (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1140741972 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Flows"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b834005773 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Flows (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a365960884 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Tables"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a413919211 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Tables (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1270046305 = messageFormatterFn((function(  ) {
  return function(d) { return "Used by fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b556305101 = messageFormatterFn((function(  ) {
  return function(d) { return "Used by flows"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a606086766 = messageFormatterFn((function(  ) {
  return function(d) { return "View More"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1631425173 = messageFormatterFn((function(  ) {
  return function(d) { return "Views of this dashboard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b961321098 = messageFormatterFn((function(  ) {
  return function(d) { return "Views of this sheet"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1626817891 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Data Connector"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a168652834 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Data Connector URL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b493406897 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a386149897 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook Id"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1372978501 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b348873788 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks (" + d.count + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a567051755 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs.en, { one: function() { return d.COUNT_LOC + " column selected";}, other: function() { return d.COUNT_LOC + " columns selected";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.a30624625 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs.en, { one: function() { return d.COUNT_LOC + " field selected";}, other: function() { return d.COUNT_LOC + " fields selected";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b2063248713 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs.en, { one: function() { return d.COUNT_LOC + " item selected";}, other: function() { return d.COUNT_LOC + " items selected";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b1505727163 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs.en, { one: function() { return d.COUNT_LOC + " table selected";}, other: function() { return d.COUNT_LOC + " tables selected";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b213440525 = messageFormatterFn((function(  ) {
  return function(d) { return d.countX + " of " + d.countN; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2136654723 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b69945194 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "is made of " + plural(d.tableCount, 0, pluralFuncs.en, { one: function() { return "1 table";}, other: function() { return d.formattedTableCount + " tables";} }) + "."; }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.a1013902916 = messageFormatterFn((function(  ) {
  return function(d) { return "is made of multiple tables."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a56927856 = messageFormatterFn((function(  ) {
  return function(d) { return "Logical Table: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a874779015 = messageFormatterFn((function(  ) {
  return function(d) { return "Physical Tables: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1343236990 = messageFormatterFn((function(  ) {
  return function(d) { return "Unioned Tables: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1904123450 = messageFormatterFn((function(  ) {
  return function(d) { return "(" + d.truncatedAmount + " More)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1205499675 = messageFormatterFn((function(  ) {
  return function(d) { return "Many"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b272305029 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Double-click this logical table to see its physical " + plural(d.tableCount, 0, pluralFuncs.en, { one: function() { return "table";}, other: function() { return "tables";} }) + "."; }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b1358866793 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.tableCount, 0, pluralFuncs.en, { one: function() { return "1 physical table defines";}, other: function() { return d.formattedTableCount + " physical tables define";} }) + " the logical table "; }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.a498753408 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a724399091 = messageFormatterFn((function(  ) {
  return function(d) { return " about the difference between physical and logical tables."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a232775331 = messageFormatterFn((function(  ) {
  return function(d) { return "Relationship: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1454772345 = messageFormatterFn((function(  ) {
  return function(d) { return d.name1 + " to " + d.name2; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b656820583 = messageFormatterFn((function(  ) {
  return function(d) { return "Cardinality: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a294635148 = messageFormatterFn((function(  ) {
  return function(d) { return "(default)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2079978387 = messageFormatterFn((function(  ) {
  return function(d) { return "(detected)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a752847439 = messageFormatterFn((function(  ) {
  return function(d) { return "Related Fields: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1285708238 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables here"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2112857007 = messageFormatterFn((function(  ) {
  return function(d) { return "Need more data?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a523056616 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables here to relate them."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a550996757 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a666721833 = messageFormatterFn((function(  ) {
  return function(d) { return "One to One"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a133677070 = messageFormatterFn((function(  ) {
  return function(d) { return "One to Many"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1949106110 = messageFormatterFn((function(  ) {
  return function(d) { return "Many to One"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a647389461 = messageFormatterFn((function(  ) {
  return function(d) { return "Many to Many"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a172052352 = messageFormatterFn((function(  ) {
  return function(d) { return "Union"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1866152529 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Monitoring Panel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b934184823 = messageFormatterFn((function(  ) {
  return function(d) { return "Close panel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1899710538 = messageFormatterFn((function(  ) {
  return function(d) { return "Share..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1935278694 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b933979678 = messageFormatterFn((function(  ) {
  return function(d) { return "Live"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1699798881 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1936658290 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b947838063 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1894055211 = messageFormatterFn((function(  ) {
  return function(d) { return "Add"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b872591436 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a659760402 = messageFormatterFn((function(  ) {
  return function(d) { return "Cross-database join"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2128579395 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a438503872 = messageFormatterFn((function(  ) {
  return function(d) { return "Using your database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a674040967 = messageFormatterFn((function(  ) {
  return function(d) { return "Using Tableau"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1307573579 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Tableau or your live database connection to perform the cross-database join. If the live database connection is used, data from the file connection may be temporarily moved to that database."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1845398108 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Tableau to perform the cross-database join"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1953899241 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Extract"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b493160402 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1594814515 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1525825699 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract includes subset of data. "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b674007575 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract will include subset of data. "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1385021981 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract will be created automatically when you switch to a different data source or when you switch tabs."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b919474122 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract includes all data. "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1480938160 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract will include all data. "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a411004451 = messageFormatterFn((function(  ) {
  return function(d) { return "Comma"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b368659549 = messageFormatterFn((function(  ) {
  return function(d) { return "Tab"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b483997825 = messageFormatterFn((function(  ) {
  return function(d) { return "Semicolon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1743414292 = messageFormatterFn((function(  ) {
  return function(d) { return "Space"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a896903115 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertical Bar"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1685547106 = messageFormatterFn((function(  ) {
  return function(d) { return "Other"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b235093100 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a773932357 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b739467495 = messageFormatterFn((function(  ) {
  return function(d) { return "Field separator:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b516599906 = messageFormatterFn((function(  ) {
  return function(d) { return "Text qualifier:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1272973824 = messageFormatterFn((function(  ) {
  return function(d) { return "Character set:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a782488060 = messageFormatterFn((function(  ) {
  return function(d) { return "Locale:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1868788079 = messageFormatterFn((function(  ) {
  return function(d) { return "No matches."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b269370960 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag table to union"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2077382616 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b968309828 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b137806641 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b593092693 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables here"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b8866189 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables in union: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a600859031 = messageFormatterFn((function(  ) {
  return function(d) { return "You can only union data from the same connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2082057339 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau can't find or recognize this table. Remove or replace the table"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a655081587 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1284325273 = messageFormatterFn((function(  ) {
  return function(d) { return "Only the first table in your selection will be added because union is not available for this database."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1722519201 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1130812454 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Data Source Filters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b315487901 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a65829648 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Filter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b58863481 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1944391173 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a131217698 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1003309247 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a44020938 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1395604282 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy link address"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b251899894 = messageFormatterFn((function(  ) {
  return function(d) { return "Dismiss"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1827707147 = messageFormatterFn((function(  ) {
  return function(d) { return "Error Code: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b699475681 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to complete action"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a961972272 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy Error Message"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b815372396 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to Support"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b255654840 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1809682794 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b793588198 = messageFormatterFn((function(  ) {
  return function(d) { return "Error copied to clipboard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a652087801 = messageFormatterFn((function(  ) {
  return function(d) { return "Add " + d.device + " Layout"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1853847311 = messageFormatterFn((function(  ) {
  return function(d) { return "Device Preview"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a334276526 = messageFormatterFn((function(  ) {
  return function(d) { return "Device Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b610940159 = messageFormatterFn((function(  ) {
  return function(d) { return "Model"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b591160366 = messageFormatterFn((function(  ) {
  return function(d) { return "Switch to Landscape Mode"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1138657842 = messageFormatterFn((function(  ) {
  return function(d) { return "Switch to Portrait Mode"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1693876027 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Mobile App"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b765989666 = messageFormatterFn((function(  ) {
  return function(d) { return "Adjusts the preview frame to show available screen size for devices running Tableau Mobile"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a733957981 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b168589764 = messageFormatterFn((function(  ) {
  return function(d) { return "Axis Editing Properties"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a116826502 = messageFormatterFn((function(  ) {
  return function(d) { return "Axis Range Options"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1596155136 = messageFormatterFn((function(  ) {
  return function(d) { return "Axis Titles"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1231669957 = messageFormatterFn((function(  ) {
  return function(d) { return "Days"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1607536880 = messageFormatterFn((function(  ) {
  return function(d) { return "Fixed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1278768609 = messageFormatterFn((function(  ) {
  return function(d) { return "Fixed end"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a247547112 = messageFormatterFn((function(  ) {
  return function(d) { return "Fixed start"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b970394972 = messageFormatterFn((function(  ) {
  return function(d) { return "General"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a125144769 = messageFormatterFn((function(  ) {
  return function(d) { return "Hours"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1581978018 = messageFormatterFn((function(  ) {
  return function(d) { return "Include zero"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1260422356 = messageFormatterFn((function(  ) {
  return function(d) { return "Independent"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1511552441 = messageFormatterFn((function(  ) {
  return function(d) { return "Independent axis ranges for each row or column"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a370610397 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1420855721 = messageFormatterFn((function(  ) {
  return function(d) { return "Interval"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a517883563 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a valid number."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2101016678 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a valid date."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b849525218 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Quarters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1418024994 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Weekdays"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1304678114 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Weeks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a466843701 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Years"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2046264182 = messageFormatterFn((function(  ) {
  return function(d) { return "Positive"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2108222031 = messageFormatterFn((function(  ) {
  return function(d) { return "Logarithmic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1973292878 = messageFormatterFn((function(  ) {
  return function(d) { return "Logarithm base must be greater than one."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1209983741 = messageFormatterFn((function(  ) {
  return function(d) { return "Log axis origin must be greater than zero."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1229928788 = messageFormatterFn((function(  ) {
  return function(d) { return "Major Tick Marks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1770199800 = messageFormatterFn((function(  ) {
  return function(d) { return "Major tick interval must be greater than zero."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1616793128 = messageFormatterFn((function(  ) {
  return function(d) { return "Minor Tick Marks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a732038404 = messageFormatterFn((function(  ) {
  return function(d) { return "Minor tick interval must be greater than zero."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a157011665 = messageFormatterFn((function(  ) {
  return function(d) { return "Minutes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b490170985 = messageFormatterFn((function(  ) {
  return function(d) { return "Months"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b932790308 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a22527915 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b403943712 = messageFormatterFn((function(  ) {
  return function(d) { return "Range"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a121722113 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2072550554 = messageFormatterFn((function(  ) {
  return function(d) { return "Reversed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1761425869 = messageFormatterFn((function(  ) {
  return function(d) { return "Scale"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1829038991 = messageFormatterFn((function(  ) {
  return function(d) { return "Seconds"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a878507177 = messageFormatterFn((function(  ) {
  return function(d) { return "Show times"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1448908740 = messageFormatterFn((function(  ) {
  return function(d) { return "Subtitle"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1596485665 = messageFormatterFn((function(  ) {
  return function(d) { return "Symmetric"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2012938208 = messageFormatterFn((function(  ) {
  return function(d) { return "Synchronize dual axes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1494018867 = messageFormatterFn((function(  ) {
  return function(d) { return "Tick interval"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a739891352 = messageFormatterFn((function(  ) {
  return function(d) { return "Tick interval (powers of)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1431600146 = messageFormatterFn((function(  ) {
  return function(d) { return "Tick Marks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b298200556 = messageFormatterFn((function(  ) {
  return function(d) { return "Tick origin"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2012363722 = messageFormatterFn((function(  ) {
  return function(d) { return "Title"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a495382896 = messageFormatterFn((function(  ) {
  return function(d) { return "Uniform"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1525100723 = messageFormatterFn((function(  ) {
  return function(d) { return "Uniform axis range for all rows or columns"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b733444312 = messageFormatterFn((function(  ) {
  return function(d) { return "Unit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a251521713 = messageFormatterFn((function(  ) {
  return function(d) { return "Weeks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2023043528 = messageFormatterFn((function(  ) {
  return function(d) { return "Years"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1924410198 = messageFormatterFn((function(  ) {
  return function(d) { return "Top-left cell: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a392900639 = messageFormatterFn((function(  ) {
  return function(d) { return "Bottom-right cell: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b632638037 = messageFormatterFn((function(  ) {
  return function(d) { return ":"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b448990971 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1580369159 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a463990052 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a760485858 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a905432854 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because the required aggregation (AVG) can't be used with this measure."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1168501500 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because it's being automatically hidden."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a923280706 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because it isn't a discrete dimension."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b499768624 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because it isn't a continuous measure."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a501847795 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because its domain information isn't available."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a937701117 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because geometry, latitude and longitude aren't supported."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a583980919 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because it has more than 500 members."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a657312802 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields that aren't valid can't be selected for consideration."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a136238613 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because its field type isn't supported. Supported field types for dimensions: calculated fields and physical columns defined in the database for the data source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1856451315 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because its field type isn't supported. Supported field types for measures: calculated fields and physical columns defined in the database for the data source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a570251009 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because its data type isn't supported. Supported data types for dimensions: String, Integer, Real and Boolean."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b327509767 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because its data type isn't supported. Supported data types for measures: Integer and Real."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b45329311 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a810124680 = messageFormatterFn((function(  ) {
  return function(d) { return "Explanation Types"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a599418447 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregated dimensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1720406386 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain the average"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a303258684 = messageFormatterFn((function(  ) {
  return function(d) { return "Average value of records"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a631106785 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of records"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b621613082 = messageFormatterFn((function(  ) {
  return function(d) { return "Extreme values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1603986060 = messageFormatterFn((function(  ) {
  return function(d) { return "Distribution of records among dimensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b518862365 = messageFormatterFn((function(  ) {
  return function(d) { return "Value of aggregated measures not in the view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a691607941 = messageFormatterFn((function(  ) {
  return function(d) { return "Extreme values are aggregated marks that are outliers, based on a model of the visualized marks. The selected mark is considered to contain an extreme value if a record value is in the tails of the distribution of the expected values for the data. The score of an extreme value is determined by looking at the minimum and maximum values that make up the aggregate mark. If the mark becomes less surprising by removing a value, then it receives a higher score. When a mark has an extreme value, it doesn't automatically mean it's an outlier, or that you should exclude it from the view. That choice is up to you depending on your analysis. The explanation is simply pointing out an interesting extreme value in the mark. For example, it could reveal a mistyped value in a record where a banana cost 10 dollars instead of 10 cents. Or, it could reveal that a particular sales person had a great quarter."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a978043495 = messageFormatterFn((function(  ) {
  return function(d) { return "An unvisualized dimension is a dimension that exists in the data source, but isn't currently being used in the view. This type of explanation is used for sums and averages. Aggregated explanations also work on counts. The model for unvisualized dimensions is created by splitting out marks according to the categorical values of the explaining column, and then building a model with the value that includes all of the data points in the source visualization. For each row, the model attempts to recover each of the individual components that made each mark. The score indicates whether the model predicts the mark better when components corresponding to the unvisualized dimension are modeled and then added up, versus using a model where the values of the unvisualized dimension are not known. Aggregate dimension explanations explore how well mark values can be explained without any conditioning. Then, the model conditions on values of each column that is a potential explanation. Conditioning on the distribution of an explanatory column should result in a better prediction. The score is basically how much better the prediction becomes."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1786451274 = messageFormatterFn((function(  ) {
  return function(d) { return "This type of explanation is used for aggregate marks that are sums. It explains whether the mark differs from the distribution overall because: the number of records that make up the mark is higher or lower than the number of records expected for the mark, or the average value for this mark is higher or lower than expected. Because SUM marks are by definition equal to COUNT(X) * AVG(X), the mark can be broken down into a count of values and multiplied by the average value for the mark. This yields two new distributions: a distribution of counts and a distribution of averages. If the selected mark is an outlier, it will either have a count that is an outlier in the count distribution, an average value that is an outlier in the distribution of averages, or both. This explanation describes whether the sum is interesting because the count is high or low, or because the average is high or low."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1168044783 = messageFormatterFn((function(  ) {
  return function(d) { return "Unvisualized Measures"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1852832412 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain the Average"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1497973683 = messageFormatterFn((function(  ) {
  return function(d) { return "Select All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b432384324 = messageFormatterFn((function(  ) {
  return function(d) { return "Select None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1720296295 = messageFormatterFn((function(  ) {
  return function(d) { return d.cardinality + " members"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1694387258 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain Data Settings"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1508875605 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a463994857 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b904238759 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b90845212 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic (Yes)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1388724358 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic (No)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a245632747 = messageFormatterFn((function(  ) {
  return function(d) { return "Cannot be used"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a570691773 = messageFormatterFn((function(  ) {
  return function(d) { return "Count"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1329021561 = messageFormatterFn((function(  ) {
  return function(d) { return "Members"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1612759871 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a535843071 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1006886759 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because the required aggregation (AVG) can't be used with this measure."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b358452191 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because it's being automatically hidden."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b989038907 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because it isn't a discrete dimension."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b322064941 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because it isn't a continuous measure."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b965528944 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because its domain information isn't available."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1912844634 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because geometry, latitude and longitude aren't supported."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a761684602 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because it has more than 500 members."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1242958373 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields that aren't valid can't be selected for consideration."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b965546446 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because its field type isn't supported. Supported field types for dimensions: calculated fields and physical columns defined in the database for the data source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1424078742 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because its field type isn't supported. Supported field types for measures: calculated fields and physical columns defined in the database for the data source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1276935172 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because its data type isn't supported. Supported data types for dimensions: String, Integer, Real and Boolean."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1393894076 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can't be used in explanations because its data type isn't supported. Supported data types for measures: Integer and Real."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a859909295 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose the fields to be considered by Explain Data in '" + d.dataSourceName + "'."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b214238175 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose Fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1812462446 = messageFormatterFn((function(  ) {
  return function(d) { return "Dimensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1319180615 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to complete this operation"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b456817638 = messageFormatterFn((function(  ) {
  return function(d) { return "Measures"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a723753334 = messageFormatterFn((function(  ) {
  return function(d) { return "Select All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1336588633 = messageFormatterFn((function(  ) {
  return function(d) { return "Select None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1349504637 = messageFormatterFn((function(  ) {
  return function(d) { return "Getting field details..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b505929956 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1039245270 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1604268642 = messageFormatterFn((function(  ) {
  return function(d) { return "Higher than expected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1181520942 = messageFormatterFn((function(  ) {
  return function(d) { return "Slightly higher than expected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1494264606 = messageFormatterFn((function(  ) {
  return function(d) { return "As expected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a234689780 = messageFormatterFn((function(  ) {
  return function(d) { return "Slightly lower than expected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a186006628 = messageFormatterFn((function(  ) {
  return function(d) { return "Lower than expected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a273976791 = messageFormatterFn((function(  ) {
  return function(d) { return "Export As Version"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1519139174 = messageFormatterFn((function(  ) {
  return function(d) { return "This action will save a new workbook and will not overwrite your existing workbook."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b189887043 = messageFormatterFn((function(  ) {
  return function(d) { return "Export"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1966591561 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a925018336 = messageFormatterFn((function(  ) {
  return function(d) { return "Export As"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b679322458 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn More"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1064003278 = messageFormatterFn((function(  ) {
  return function(d) { return "You are currently running Tableau version " + d.VERSION + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1554450613 = messageFormatterFn((function(  ) {
  return function(d) { return "The following functionality is not available in Tableau version " + d.VERSION + ":"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1456216479 = messageFormatterFn((function(  ) {
  return function(d) { return "When you export your workbook as Tableau version " + d.VERSION + ", some functionality and visual features may be lost or degraded."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1283118476 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook functionality and features will not change when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1283119437 = messageFormatterFn((function(  ) {
  return function(d) { return "The new workbook has slight underlying changes but looks the same when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1283120398 = messageFormatterFn((function(  ) {
  return function(d) { return "The new workbook has slight underlying changes but looks the same when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1283121359 = messageFormatterFn((function(  ) {
  return function(d) { return "The new workbook has some feature and functionality loss when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1283122320 = messageFormatterFn((function(  ) {
  return function(d) { return "The new workbook has major feature and functionality loss when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1283123281 = messageFormatterFn((function(  ) {
  return function(d) { return "The new workbook has critical feature and functionality loss when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1480606447 = messageFormatterFn((function(  ) {
  return function(d) { return "CSV"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b286192475 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a sheet from this dashboard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b748361726 = messageFormatterFn((function(  ) {
  return function(d) { return "Excel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1318823946 = messageFormatterFn((function(  ) {
  return function(d) { return "Single Sheet Selection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1342511219 = messageFormatterFn((function(  ) {
  return function(d) { return "Select Format"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b456897196 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a sheet from this storypoint"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1822007378 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid export command was found."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a217655974 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred while generating the document. The error is 'InvalidSheetSelection'"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1607667072 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred while rendering the export crosstab dialog. The error is 'InvalidSheetType'"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2017491017 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred while rendering the export crosstab dialog. The error is 'InvalidFileType'"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a970374145 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred while generating the document. More information: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b708589060 = messageFormatterFn((function(  ) {
  return function(d) { return "No sheets to select. Try a different view."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1327931246 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1288316526 = messageFormatterFn((function(  ) {
  return function(d) { return "Specific sheets from this dashboard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1030980112 = messageFormatterFn((function(  ) {
  return function(d) { return "Specific sheets from this workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1474662360 = messageFormatterFn((function(  ) {
  return function(d) { return "Include"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b956442154 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheet Selection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1798555195 = messageFormatterFn((function(  ) {
  return function(d) { return "Select All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1788922267 = messageFormatterFn((function(  ) {
  return function(d) { return "This Story"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a51763151 = messageFormatterFn((function(  ) {
  return function(d) { return "This View"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1827954334 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets Selected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b589710103 = messageFormatterFn((function(  ) {
  return function(d) { return d.x + " of " + d.y; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b985017775 = messageFormatterFn((function(  ) {
  return function(d) { return "About Extension"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b979122863 = messageFormatterFn((function(  ) {
  return function(d) { return "Version: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a577736630 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1970412755 = messageFormatterFn((function(  ) {
  return function(d) { return "by " + d["0"]; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2012242316 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension URL: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b884917292 = messageFormatterFn((function(  ) {
  return function(d) { return "Instance ID: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1427276885 = messageFormatterFn((function(  ) {
  return function(d) { return "Support: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b998334643 = messageFormatterFn((function(  ) {
  return function(d) { return "View in Gallery"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2056305683 = messageFormatterFn((function(  ) {
  return function(d) { return "Developer Website"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1710876186 = messageFormatterFn((function(  ) {
  return function(d) { return "Sandboxed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a360131896 = messageFormatterFn((function(  ) {
  return function(d) { return "Network Enabled"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1947550741 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow Extensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1784823148 = messageFormatterFn((function(  ) {
  return function(d) { return "This dashboard contains the following network-enabled extensions, which are web applications that expand the capabilities of Tableau. To allow these extensions to run in the dashboard, click OK. "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a86263706 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more about how extensions access your data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a784999736 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1069438952 = messageFormatterFn((function(  ) {
  return function(d) { return "Created By"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1358976106 = messageFormatterFn((function(  ) {
  return function(d) { return "Full Data Access"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2051943848 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1757104658 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow Extension"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1166870441 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1569575361 = messageFormatterFn((function(  ) {
  return function(d) { return "This dashboard contains the following network-enabled extension, which is a web application that expands the capabilities of Tableau. To allow this extension to run in the dashboard, click OK."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a26978240 = messageFormatterFn((function(  ) {
  return function(d) { return "Created by:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b393760315 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension URL:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a462320651 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension Name:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1617238258 = messageFormatterFn((function(  ) {
  return function(d) { return "Full Data Access:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b141622681 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b250538867 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1442095093 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2106885620 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1599896339 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a990879896 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1371172371 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Extract"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a872134570 = messageFormatterFn((function(  ) {
  return function(d) { return "Data extracts might take some time to create. You can either create the extract now or wait until you select another data source or sheet, which will cause the extract to be created automatically."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b507377406 = messageFormatterFn((function(  ) {
  return function(d) { return "Importing data from:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1517124035 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b156930885 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Extract"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b513806996 = messageFormatterFn((function(  ) {
  return function(d) { return "Creating Extract..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a892863894 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b883824897 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1048744401 = messageFormatterFn((function(  ) {
  return function(d) { return "Save As..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1190865679 = messageFormatterFn((function(  ) {
  return function(d) { return "or"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1659977996 = messageFormatterFn((function(  ) {
  return function(d) { return "and close."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a792114573 = messageFormatterFn((function(  ) {
  return function(d) { return "Elapsed Time (hh:mm:ss):"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1978957353 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh Now"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a837950016 = messageFormatterFn((function(  ) {
  return function(d) { return "Refreshing the extract may take a while. Are you sure you want to continue?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1150879791 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b433526478 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Save Location"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2126215136 = messageFormatterFn((function(  ) {
  return function(d) { return "When the extract finishes, the workbook will be saved at this location and you'll receive an email notification."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a477038424 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Save Location"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1192464374 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a444695101 = messageFormatterFn((function(  ) {
  return function(d) { return "Notify Me When Complete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1967523479 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2107347927 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1519592082 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed password for data source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b836542791 = messageFormatterFn((function(  ) {
  return function(d) { return "Notify When Extract is Complete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a971410202 = messageFormatterFn((function(  ) {
  return function(d) { return "You can now close the editor. When the extract finishes. the workbook '" + d.WORKBOOK_NAME + "' will be saved to the '" + d.PROJECT_NAME + "' project and you'll receive an email notification."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1337242201 = messageFormatterFn((function(  ) {
  return function(d) { return "Close Editor"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1611481766 = messageFormatterFn((function(  ) {
  return function(d) { return "Format"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2112344903 = messageFormatterFn((function(  ) {
  return function(d) { return "Uh-oh something went wrong! Please close the formatting pane and try that again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2112343942 = messageFormatterFn((function(  ) {
  return function(d) { return "We've sent an error report to our engineers."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1035049639 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b702999964 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2069928378 = messageFormatterFn((function(  ) {
  return function(d) { return "Type here to filter list"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1391068136 = messageFormatterFn((function(  ) {
  return function(d) { return "Please click on an item in the list to jump directly to it"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a364363623 = messageFormatterFn((function(  ) {
  return function(d) { return "that localize/widgets now requires to exist"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1193270721 = messageFormatterFn((function(  ) {
  return function(d) { return "Center Image"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a308514941 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Image Object"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1804510315 = messageFormatterFn((function(  ) {
  return function(d) { return "Fit Image"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1462883740 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose an image..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b129089618 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b424171433 = messageFormatterFn((function(  ) {
  return function(d) { return "Image"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b521992972 = messageFormatterFn((function(  ) {
  return function(d) { return "Options"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b825731590 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a365438392 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b500365626 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a844604035 = messageFormatterFn((function(  ) {
  return function(d) { return "Target URL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1034048028 = messageFormatterFn((function(  ) {
  return function(d) { return "Alt Text"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1174671865 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a793025719 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a44325061 = messageFormatterFn((function(  ) {
  return function(d) { return "Duplicate Map Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1803254730 = messageFormatterFn((function(  ) {
  return function(d) { return "This workbook already uses a map named \"" + d.mapName + "\""; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1872989789 = messageFormatterFn((function(  ) {
  return function(d) { return "This name is already in use."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1882367398 = messageFormatterFn((function(  ) {
  return function(d) { return "Discard new map"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1603540448 = messageFormatterFn((function(  ) {
  return function(d) { return "Replace existing map with new map"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a334661023 = messageFormatterFn((function(  ) {
  return function(d) { return "Rename new map"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b905027829 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.mapName + "\" is a reserved name for Tableau maps"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a221471585 = messageFormatterFn((function(  ) {
  return function(d) { return "Initial SQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1954425344 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1939735710 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b844015617 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter SQL query here. For example, 'CREATE TABLE " + "#" + "TempTable(x varchar(25));'"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a230538473 = messageFormatterFn((function(  ) {
  return function(d) { return "SQL statements to be executed at connect time:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b206540180 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2008613952 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn More"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1051889257 = messageFormatterFn((function(  ) {
  return function(d) { return "⌃"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b789717448 = messageFormatterFn((function(  ) {
  return function(d) { return "Ctrl+"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b32342593 = messageFormatterFn((function(  ) {
  return function(d) { return "⌥"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1663098756 = messageFormatterFn((function(  ) {
  return function(d) { return "Alt+"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1647124622 = messageFormatterFn((function(  ) {
  return function(d) { return "⇧"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b817358819 = messageFormatterFn((function(  ) {
  return function(d) { return "Shift+"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b611620386 = messageFormatterFn((function(  ) {
  return function(d) { return "Win+"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1893362522 = messageFormatterFn((function(  ) {
  return function(d) { return "⌘"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210531364 = messageFormatterFn((function(  ) {
  return function(d) { return "A"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210530403 = messageFormatterFn((function(  ) {
  return function(d) { return "B"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210529442 = messageFormatterFn((function(  ) {
  return function(d) { return "C"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210528481 = messageFormatterFn((function(  ) {
  return function(d) { return "D"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210527520 = messageFormatterFn((function(  ) {
  return function(d) { return "E"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210526559 = messageFormatterFn((function(  ) {
  return function(d) { return "F"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210525598 = messageFormatterFn((function(  ) {
  return function(d) { return "G"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210524637 = messageFormatterFn((function(  ) {
  return function(d) { return "H"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210523676 = messageFormatterFn((function(  ) {
  return function(d) { return "I"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210522715 = messageFormatterFn((function(  ) {
  return function(d) { return "J"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210521754 = messageFormatterFn((function(  ) {
  return function(d) { return "K"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210520793 = messageFormatterFn((function(  ) {
  return function(d) { return "L"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210519832 = messageFormatterFn((function(  ) {
  return function(d) { return "M"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210518871 = messageFormatterFn((function(  ) {
  return function(d) { return "N"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210517910 = messageFormatterFn((function(  ) {
  return function(d) { return "O"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210516949 = messageFormatterFn((function(  ) {
  return function(d) { return "P"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210515988 = messageFormatterFn((function(  ) {
  return function(d) { return "Q"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210515027 = messageFormatterFn((function(  ) {
  return function(d) { return "R"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210514066 = messageFormatterFn((function(  ) {
  return function(d) { return "S"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210513105 = messageFormatterFn((function(  ) {
  return function(d) { return "T"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210512144 = messageFormatterFn((function(  ) {
  return function(d) { return "U"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210511183 = messageFormatterFn((function(  ) {
  return function(d) { return "V"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210510222 = messageFormatterFn((function(  ) {
  return function(d) { return "W"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210509261 = messageFormatterFn((function(  ) {
  return function(d) { return "X"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210508300 = messageFormatterFn((function(  ) {
  return function(d) { return "Y"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210507339 = messageFormatterFn((function(  ) {
  return function(d) { return "Z"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1151432803 = messageFormatterFn((function(  ) {
  return function(d) { return "0"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a645688231 = messageFormatterFn((function(  ) {
  return function(d) { return "1"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a650583565 = messageFormatterFn((function(  ) {
  return function(d) { return "2"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2015886175 = messageFormatterFn((function(  ) {
  return function(d) { return "3"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1714688357 = messageFormatterFn((function(  ) {
  return function(d) { return "4"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1720212185 = messageFormatterFn((function(  ) {
  return function(d) { return "5"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a649251619 = messageFormatterFn((function(  ) {
  return function(d) { return "6"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1046197774 = messageFormatterFn((function(  ) {
  return function(d) { return "7"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1606807056 = messageFormatterFn((function(  ) {
  return function(d) { return "8"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1491417305 = messageFormatterFn((function(  ) {
  return function(d) { return "9"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a436141888 = messageFormatterFn((function(  ) {
  return function(d) { return "F1"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a436142849 = messageFormatterFn((function(  ) {
  return function(d) { return "F2"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a436143810 = messageFormatterFn((function(  ) {
  return function(d) { return "F3"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a436144771 = messageFormatterFn((function(  ) {
  return function(d) { return "F4"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a436145732 = messageFormatterFn((function(  ) {
  return function(d) { return "F5"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a436146693 = messageFormatterFn((function(  ) {
  return function(d) { return "F6"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a436147654 = messageFormatterFn((function(  ) {
  return function(d) { return "F7"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a436148615 = messageFormatterFn((function(  ) {
  return function(d) { return "F8"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a436149576 = messageFormatterFn((function(  ) {
  return function(d) { return "F9"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a635508358 = messageFormatterFn((function(  ) {
  return function(d) { return "F10"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a635509319 = messageFormatterFn((function(  ) {
  return function(d) { return "F11"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a635510280 = messageFormatterFn((function(  ) {
  return function(d) { return "F12"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1761867289 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1506255486 = messageFormatterFn((function(  ) {
  return function(d) { return "↵"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1796047699 = messageFormatterFn((function(  ) {
  return function(d) { return "/"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1213899343 = messageFormatterFn((function(  ) {
  return function(d) { return "↓"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1661496268 = messageFormatterFn((function(  ) {
  return function(d) { return "Down arrow"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b994602026 = messageFormatterFn((function(  ) {
  return function(d) { return "←"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1880793585 = messageFormatterFn((function(  ) {
  return function(d) { return "Left arrow"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a377322755 = messageFormatterFn((function(  ) {
  return function(d) { return "→"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b679726520 = messageFormatterFn((function(  ) {
  return function(d) { return "Right arrow"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b58858902 = messageFormatterFn((function(  ) {
  return function(d) { return "↑"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a770947909 = messageFormatterFn((function(  ) {
  return function(d) { return "Up arrow"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b432852224 = messageFormatterFn((function(  ) {
  return function(d) { return "Backspace"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1550509729 = messageFormatterFn((function(  ) {
  return function(d) { return "Caps lock"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a9246422 = messageFormatterFn((function(  ) {
  return function(d) { return "Comma"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b246365381 = messageFormatterFn((function(  ) {
  return function(d) { return ","; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1523725164 = messageFormatterFn((function(  ) {
  return function(d) { return "Menu"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1708958560 = messageFormatterFn((function(  ) {
  return function(d) { return "Del"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a636452060 = messageFormatterFn((function(  ) {
  return function(d) { return "End"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1470654580 = messageFormatterFn((function(  ) {
  return function(d) { return "="; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1431166449 = messageFormatterFn((function(  ) {
  return function(d) { return "Plus sign"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b331033334 = messageFormatterFn((function(  ) {
  return function(d) { return "+"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1564524362 = messageFormatterFn((function(  ) {
  return function(d) { return "Esc"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b898555663 = messageFormatterFn((function(  ) {
  return function(d) { return "⎋"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1657680876 = messageFormatterFn((function(  ) {
  return function(d) { return "Home"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1431033070 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1227619198 = messageFormatterFn((function(  ) {
  return function(d) { return "/"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b601872153 = messageFormatterFn((function(  ) {
  return function(d) { return "*"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1784945145 = messageFormatterFn((function(  ) {
  return function(d) { return "Minus sign"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b684812030 = messageFormatterFn((function(  ) {
  return function(d) { return "-"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a721826182 = messageFormatterFn((function(  ) {
  return function(d) { return "Page down"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1748739967 = messageFormatterFn((function(  ) {
  return function(d) { return "Page up"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1323165174 = messageFormatterFn((function(  ) {
  return function(d) { return "Period"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1989133873 = messageFormatterFn((function(  ) {
  return function(d) { return "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1341656263 = messageFormatterFn((function(  ) {
  return function(d) { return "Spacebar"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1086044460 = messageFormatterFn((function(  ) {
  return function(d) { return "␣"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a649915670 = messageFormatterFn((function(  ) {
  return function(d) { return "Tab"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2038944409 = messageFormatterFn((function(  ) {
  return function(d) { return "~"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1100111879 = messageFormatterFn((function(  ) {
  return function(d) { return "`"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a575931931 = messageFormatterFn((function(  ) {
  return function(d) { return "!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a490734853 = messageFormatterFn((function(  ) {
  return function(d) { return "@"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1330686771 = messageFormatterFn((function(  ) {
  return function(d) { return "#"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1130080718 = messageFormatterFn((function(  ) {
  return function(d) { return "$"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1306444771 = messageFormatterFn((function(  ) {
  return function(d) { return "%"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b387164156 = messageFormatterFn((function(  ) {
  return function(d) { return "^"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1389384074 = messageFormatterFn((function(  ) {
  return function(d) { return "&"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b319168915 = messageFormatterFn((function(  ) {
  return function(d) { return "("; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b591022157 = messageFormatterFn((function(  ) {
  return function(d) { return ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1214674001 = messageFormatterFn((function(  ) {
  return function(d) { return "_"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a161654282 = messageFormatterFn((function(  ) {
  return function(d) { return "Open brace"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1350855632 = messageFormatterFn((function(  ) {
  return function(d) { return "Close brace"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b218490206 = messageFormatterFn((function(  ) {
  return function(d) { return "["; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a523549288 = messageFormatterFn((function(  ) {
  return function(d) { return "]"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b460137484 = messageFormatterFn((function(  ) {
  return function(d) { return "<"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b297653394 = messageFormatterFn((function(  ) {
  return function(d) { return ">"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b368172024 = messageFormatterFn((function(  ) {
  return function(d) { return "?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a463133397 = messageFormatterFn((function(  ) {
  return function(d) { return "'"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1662449876 = messageFormatterFn((function(  ) {
  return function(d) { return "\""; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a8394976 = messageFormatterFn((function(  ) {
  return function(d) { return ":"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1174068914 = messageFormatterFn((function(  ) {
  return function(d) { return ";"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a866172478 = messageFormatterFn((function(  ) {
  return function(d) { return "|"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b546889289 = messageFormatterFn((function(  ) {
  return function(d) { return "Backslash"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1311812130 = messageFormatterFn((function(  ) {
  return function(d) { return "Background"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a141862873 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1015908962 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Layer"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a468102643 = messageFormatterFn((function(  ) {
  return function(d) { return "Layer"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1875009747 = messageFormatterFn((function(  ) {
  return function(d) { return "Detail"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2291785 = messageFormatterFn((function(  ) {
  return function(d) { return "Palette"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b541350664 = messageFormatterFn((function(  ) {
  return function(d) { return "Zoom in to see this layer."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1015499361 = messageFormatterFn((function(  ) {
  return function(d) { return "Category " + d.category; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1948960405 = messageFormatterFn((function(  ) {
  return function(d) { return "Background Map Layers"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1724464780 = messageFormatterFn((function(  ) {
  return function(d) { return "Make Default"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b836153298 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred loading the Map Layers pane. Reopen the pane and try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1611602780 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when changing the map style. Please try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1559148941 = messageFormatterFn((function(  ) {
  return function(d) { return "No layers are available."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a42425948 = messageFormatterFn((function(  ) {
  return function(d) { return "Map Layers"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a671684513 = messageFormatterFn((function(  ) {
  return function(d) { return "Repeat Background"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a806400744 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset to defaults"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a542242575 = messageFormatterFn((function(  ) {
  return function(d) { return "Style"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1550644411 = messageFormatterFn((function(  ) {
  return function(d) { return "Washout (%)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1458174053 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Mapbox Map"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1575972907 = messageFormatterFn((function(  ) {
  return function(d) { return "Add WMS Map"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1859793129 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1083526173 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1774172008 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Mapbox Map"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1812489346 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit WMS Map"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a78028830 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Map"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2032169173 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b598900998 = messageFormatterFn((function(  ) {
  return function(d) { return "Map Service Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1863983692 = messageFormatterFn((function(  ) {
  return function(d) { return "Mapbox"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a173315285 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when adding a new Mapbox connection. Verify that the Mapbox URL is correct and try again"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b43436726 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when editing the Mapbox connection. Verify that the Mapbox URL is correct and try again"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1015133411 = messageFormatterFn((function(  ) {
  return function(d) { return "A problem was encountered while connecting to the Mapbox server. Please verify your API token and Mapbox map IDs."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1155805900 = messageFormatterFn((function(  ) {
  return function(d) { return "https://onlinehelp.tableau.com/current/pro/desktop/en-us/help.htm" + "#" + "maps_mapsources_mapbox.html"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1464165057 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn More"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1591782159 = messageFormatterFn((function(  ) {
  return function(d) { return "The URL entered is not in a valid format."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1487694666 = messageFormatterFn((function(  ) {
  return function(d) { return "This style name is already in use."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a167142293 = messageFormatterFn((function(  ) {
  return function(d) { return "Style Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1836503508 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter Style Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1024117726 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a585647265 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter URL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1718916554 = messageFormatterFn((function(  ) {
  return function(d) { return "WMS"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a425686591 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when adding a new WMS connection. Verify that the WMS URL is correct and try again"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1915722545 = messageFormatterFn((function(  ) {
  return function(d) { return "Use tiled maps (recommended)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b809860832 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when editing the WMS connection. Verify that the WMS URL is correct and try again"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1646482000 = messageFormatterFn((function(  ) {
  return function(d) { return "Add..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b497101788 = messageFormatterFn((function(  ) {
  return function(d) { return "Are you sure you want to delete this map?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b74110617 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b25146075 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b146873514 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1589337786 = messageFormatterFn((function(  ) {
  return function(d) { return "URL / Description"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a7281075 = messageFormatterFn((function(  ) {
  return function(d) { return "Download"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1059896373 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1140545631 = messageFormatterFn((function(  ) {
  return function(d) { return "Export"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1949223088 = messageFormatterFn((function(  ) {
  return function(d) { return "Import..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b58022066 = messageFormatterFn((function(  ) {
  return function(d) { return "There was a problem importing the map. Try again, or try connecting to a different file."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b428734383 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1828917021 = messageFormatterFn((function(  ) {
  return function(d) { return "Map: " + d.mapSourceName + " is being used by these worksheets:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1652403847 = messageFormatterFn((function(  ) {
  return function(d) { return "Manage Maps"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b762556483 = messageFormatterFn((function(  ) {
  return function(d) { return "Give your Metric a name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1298498858 = messageFormatterFn((function(  ) {
  return function(d) { return "Metric Title"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2076100336 = messageFormatterFn((function(  ) {
  return function(d) { return "No Field Selected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1076269091 = messageFormatterFn((function(  ) {
  return function(d) { return "Metric \"" + d.metricName + "\" created in project \"" + d.projectName + "\"."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1898894520 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to metric"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b23501188 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to create metric \"" + d.metricName + "\""; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a493187554 = messageFormatterFn((function(  ) {
  return function(d) { return "A metric named \"" + d.metricName + "\" already exists in project \"" + d.projectName + "\". You don't have permission to overwrite this metric. Rename your metric or choose a different project."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1262267009 = messageFormatterFn((function(  ) {
  return function(d) { return "A metric named \"" + d.metricName + "\" already exists in project \"" + d.projectName + "\". Do you want to overwrite it?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1035336516 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred while overwriting the metric \"" + d.metricName + "\", and the metric was only partially overwritten. Try overwriting the metric again. If this error persists, contact your Tableau administrator."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b184623111 = messageFormatterFn((function(  ) {
  return function(d) { return "_New Metric"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1259011671 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: Can't save Metric with no selected field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a292632914 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: No datasource id provided"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b687874403 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: Unknown Action Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2051952890 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: Tableau Server could not find that Data Source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1574804099 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: Fetch request failed. This is probably due to a missing API key, or CORS misconfiguration"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1533389822 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: Failed to fetch information for that datasource"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2027741962 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: API Key Cookie Not Found"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1011105636 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: Failed to fetch field list"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a882033088 = messageFormatterFn((function(  ) {
  return function(d) { return "Placeholder for Reference Link"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b860219744 = messageFormatterFn((function(  ) {
  return function(d) { return "PERIOD"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1620735268 = messageFormatterFn((function(  ) {
  return function(d) { return "HOUR"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1295098034 = messageFormatterFn((function(  ) {
  return function(d) { return "DAY"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2040453940 = messageFormatterFn((function(  ) {
  return function(d) { return "WEEK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1160602666 = messageFormatterFn((function(  ) {
  return function(d) { return "MONTH"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2097599805 = messageFormatterFn((function(  ) {
  return function(d) { return "YEAR"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b828586484 = messageFormatterFn((function(  ) {
  return function(d) { return "Transport Error: Please try again in a moment"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1536650015 = messageFormatterFn((function(  ) {
  return function(d) { return "Updated " + d.lastUpdated; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1888031461 = messageFormatterFn((function(  ) {
  return function(d) { return "PAST"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2091690144 = messageFormatterFn((function(  ) {
  return function(d) { return "AQL Query Failed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b677299900 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to make HTTPS request for metric value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b484411812 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: Unable to query type of column " + d.columnName; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1970167468 = messageFormatterFn((function(  ) {
  return function(d) { return "No Value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a426544938 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: No metric value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1394709664 = messageFormatterFn((function(  ) {
  return function(d) { return "loading ..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b709462918 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading Projects..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2052514566 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1285205762 = messageFormatterFn((function(  ) {
  return function(d) { return "Measure: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b278094661 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a mark to create a new metric."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b454216642 = messageFormatterFn((function(  ) {
  return function(d) { return "Metrics"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a541649280 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a mark to create a metric."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b388727864 = messageFormatterFn((function(  ) {
  return function(d) { return "Metrics are the fastest way to track your data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b483945379 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b514719704 = messageFormatterFn((function(  ) {
  return function(d) { return "Measure"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a587786571 = messageFormatterFn((function(  ) {
  return function(d) { return "Date dimension"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b739142018 = messageFormatterFn((function(  ) {
  return function(d) { return "Preview"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a20243429 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter selected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a56700877 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a955618316 = messageFormatterFn((function(  ) {
  return function(d) { return "Name the metric"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1878573130 = messageFormatterFn((function(  ) {
  return function(d) { return "Description (optional)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b301198647 = messageFormatterFn((function(  ) {
  return function(d) { return "Describe the metric"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a966857029 = messageFormatterFn((function(  ) {
  return function(d) { return "Definition"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b187203059 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1616992018 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a18295501 = messageFormatterFn((function(  ) {
  return function(d) { return "No metrics are connected to this view."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1593295602 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to Connected Metrics"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1454532409 = messageFormatterFn((function(  ) {
  return function(d) { return "Connected metrics for this view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a116802713 = messageFormatterFn((function(  ) {
  return function(d) { return "Create a new metric"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1871923026 = messageFormatterFn((function(  ) {
  return function(d) { return "Create"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b499499172 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a550773375 = messageFormatterFn((function(  ) {
  return function(d) { return "Overwrite Metric"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1177394644 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to Create Metric"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b508326686 = messageFormatterFn((function(  ) {
  return function(d) { return "Error Overwriting Metric"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a698788664 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to close panel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1379962658 = messageFormatterFn((function(  ) {
  return function(d) { return "Error"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a606786045 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1260207731 = messageFormatterFn((function(  ) {
  return function(d) { return "You don’t have save permission to the project \"" + d.PROJECT_NAME + "\". Select a different project."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1960593006 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose Project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1244602975 = messageFormatterFn((function(  ) {
  return function(d) { return "Add this metric to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a211771432 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose Project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a529688806 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1178124491 = messageFormatterFn((function(  ) {
  return function(d) { return "Overwrite"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a152039889 = messageFormatterFn((function(  ) {
  return function(d) { return "Try Again"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1287184053 = messageFormatterFn((function(  ) {
  return function(d) { return "No Projects Found"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b595216991 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose a project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a845391774 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose location"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1922311689 = messageFormatterFn((function(  ) {
  return function(d) { return "Change location"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1769103615 = messageFormatterFn((function(  ) {
  return function(d) { return "You must choose a project."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1555275073 = messageFormatterFn((function(  ) {
  return function(d) { return "You can't create a metric on this view because it has user filters or row-level security."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b367186990 = messageFormatterFn((function(  ) {
  return function(d) { return "You can’t create a metric because you don’t have permission to download the full data for this view."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a583171294 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact the owner of this view for help with permissions."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1458631624 = messageFormatterFn((function(  ) {
  return function(d) { return "You can't create a metric on this view either because the password for the data source isn't embedded or because the authentication method isn't supported."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a402363844 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact the owner of this view for help with embedded credentials."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1351921088 = messageFormatterFn((function(  ) {
  return function(d) { return "A mark selected on a line chart."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b198335849 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Measure exceeds size limit. The metric will store the most recent " + plural(d.dataPointsCount, 0, pluralFuncs.en, { one: function() { return "value";}, other: function() { return d.dataPointsCountLoc + " values";} }) + "."; }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b311061523 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a99216977 = messageFormatterFn((function(  ) {
  return function(d) { return "A warning icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1671905343 = messageFormatterFn((function(  ) {
  return function(d) { return "An information icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b706003904 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a name."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1707643586 = messageFormatterFn((function(  ) {
  return function(d) { return d.characters + " characters remaining"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1433528307 = messageFormatterFn((function(  ) {
  return function(d) { return "The preview shows the most recent value for the metric."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1362227006 = messageFormatterFn((function(  ) {
  return function(d) { return "A table calculation applies to this measure."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1716868077 = messageFormatterFn((function(  ) {
  return function(d) { return "Advanced"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b557455757 = messageFormatterFn((function(  ) {
  return function(d) { return "The username or password is not valid.  Check the database name and credentials and try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2019210155 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b372809876 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1801191185 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t connect to " + d.dataSourceCaption; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a32281146 = messageFormatterFn((function(  ) {
  return function(d) { return "Detailed Error Message"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1677857790 = messageFormatterFn((function(  ) {
  return function(d) { return "Download the driver first.  Then you can use this connector."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1485987045 = messageFormatterFn((function(  ) {
  return function(d) { return "Download Driver"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1203842669 = messageFormatterFn((function(  ) {
  return function(d) { return "General"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1745541557 = messageFormatterFn((function(  ) {
  return function(d) { return "Initial SQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1861609276 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1439877156 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn More"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1934862022 = messageFormatterFn((function(  ) {
  return function(d) { return "No file chosen"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1890820181 = messageFormatterFn((function(  ) {
  return function(d) { return "Optional"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2092391539 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign In"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1897032125 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1288015682 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b373285598 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data lets you ask questions in a conversational style and instantly see data visualizations."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b373284637 = messageFormatterFn((function(  ) {
  return function(d) { return "To begin, select a data source from this workbook:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b417106477 = messageFormatterFn((function(  ) {
  return function(d) { return "Open in Ask Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1014920911 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b307721953 = messageFormatterFn((function(  ) {
  return function(d) { return "Open"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b417186555 = messageFormatterFn((function(  ) {
  return function(d) { return "Currency"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1196659487 = messageFormatterFn((function(  ) {
  return function(d) { return "Location"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b498014892 = messageFormatterFn((function(  ) {
  return function(d) { return "Please publish a data role before applying."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b40675893 = messageFormatterFn((function(  ) {
  return function(d) { return "No existing data roles"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b187702700 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherit synonyms from a published data role. In the list below, you can choose from all data roles you have permission to access."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b168950585 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply Data Role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2027668013 = messageFormatterFn((function(  ) {
  return function(d) { return ","; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1996121455 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1365461479 = messageFormatterFn((function(  ) {
  return function(d) { return "Collapse"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a41215258 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2005619370 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherit synonyms from a published data role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a354086902 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Role could not be applied."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1852162611 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms could not be inherited because the data role does not exist"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a479618498 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms could not be inherited because the user who associated the data role to this field can no longer view it"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a347549703 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply Data Role..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1794596129 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply a Different Data Role..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1849038214 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a32733882 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a481521312 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a709840417 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1637700350 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited from geographic role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b351679082 = messageFormatterFn((function(  ) {
  return function(d) { return "No data role applied"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1754264445 = messageFormatterFn((function(  ) {
  return function(d) { return "applied this data role. Their permissions are used to inherit synonyms."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a14335517 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to list all data roles."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2128751642 = messageFormatterFn((function(  ) {
  return function(d) { return "Retry"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b11733621 = messageFormatterFn((function(  ) {
  return function(d) { return "Make this field's synonyms inheritable by other data sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1849333830 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish Data Role..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1766293127 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove Data Role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1165687202 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to remove current data role."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1137135928 = messageFormatterFn((function(  ) {
  return function(d) { return "View Data Role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1862988796 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1052631169 = messageFormatterFn((function(  ) {
  return function(d) { return "Date-time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1269385486 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1125961170 = messageFormatterFn((function(  ) {
  return function(d) { return "Number (Whole)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a392483102 = messageFormatterFn((function(  ) {
  return function(d) { return "Number"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1140560984 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2113374539 = messageFormatterFn((function(  ) {
  return function(d) { return "String"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a926655243 = messageFormatterFn((function(  ) {
  return function(d) { return "Dimensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a581116592 = messageFormatterFn((function(  ) {
  return function(d) { return "Could not save changes."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b376246326 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Field Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1697870004 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1306274044 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1759342009 = messageFormatterFn((function(  ) {
  return function(d) { return "Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b519006871 = messageFormatterFn((function(  ) {
  return function(d) { return "Bin Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a287877302 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculated Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b897090226 = messageFormatterFn((function(  ) {
  return function(d) { return "Column Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1690816253 = messageFormatterFn((function(  ) {
  return function(d) { return "Combined Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a687823871 = messageFormatterFn((function(  ) {
  return function(d) { return "Combined Set Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2117421153 = messageFormatterFn((function(  ) {
  return function(d) { return "Group Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a647212673 = messageFormatterFn((function(  ) {
  return function(d) { return "Hierarchical Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b357575676 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a928312927 = messageFormatterFn((function(  ) {
  return function(d) { return "Field Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2070104393 = messageFormatterFn((function(  ) {
  return function(d) { return "Value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1723499716 = messageFormatterFn((function(  ) {
  return function(d) { return "For immediate effect, click here to Reindex the Data Source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b510823698 = messageFormatterFn((function(  ) {
  return function(d) { return "Value Indexing"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b868980012 = messageFormatterFn((function(  ) {
  return function(d) { return "Index field values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1476269456 = messageFormatterFn((function(  ) {
  return function(d) { return "There was an error retrieving indexing settings for field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1600944121 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data couldn't index this field so some analytical features are disabled. Republish the data source to retry indexing."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b221918900 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data will recognize field values only if you surround them with quotation marks. Republish the data source to retry indexing."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1016506861 = messageFormatterFn((function(  ) {
  return function(d) { return "Lost connection to the data source during indexing."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2061094365 = messageFormatterFn((function(  ) {
  return function(d) { return "This field has no values."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b991797154 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data couldn't index this field so some analytical features are disabled."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2024162055 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data will recognize field values only if you surround them with quotation marks."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1087277240 = messageFormatterFn((function(  ) {
  return function(d) { return "Field indexing disabled due to user filters."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1394061888 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data couldn't index this field so some analytical features are disabled."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1118035739 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data will recognize values only if you surround them with quotation marks."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1682347878 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to index field."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2084008367 = messageFormatterFn((function(  ) {
  return function(d) { return "This field won't be available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a712690088 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t index field due to a system error."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1281751069 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask the data source owner to fix and republish. This field won’t be available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1641897948 = messageFormatterFn((function(  ) {
  return function(d) { return "Formula is invalid."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1952072053 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data doesn’t support indexing this field and won’t be able to recognize unquoted values at this time."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a971576964 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing isn't supported."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b513090757 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields of type Latitude or Longitude aren’t available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a60263089 = messageFormatterFn((function(  ) {
  return function(d) { return "This field is unsupported by Ask Data because it contains a constant formula that references parameters."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1060619074 = messageFormatterFn((function(  ) {
  return function(d) { return "This field’s default aggregation type is unsupported and won’t be available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a793580197 = messageFormatterFn((function(  ) {
  return function(d) { return "This field’s name contains an invalid character and won’t be available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2030009374 = messageFormatterFn((function(  ) {
  return function(d) { return "The field name can’t be a number, value, or date and won’t be available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b308339178 = messageFormatterFn((function(  ) {
  return function(d) { return "This field’s name is longer than the 50 character limit. This field won’t be available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b993050558 = messageFormatterFn((function(  ) {
  return function(d) { return "The field name is a reserved term and won’t be available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a749902776 = messageFormatterFn((function(  ) {
  return function(d) { return "Field names must be at least 1 character long. This field won’t be available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1935218087 = messageFormatterFn((function(  ) {
  return function(d) { return "Cluster fields aren't available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b537386290 = messageFormatterFn((function(  ) {
  return function(d) { return "Combined fields aren't available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1886249718 = messageFormatterFn((function(  ) {
  return function(d) { return "Combined set fields aren't available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1992110430 = messageFormatterFn((function(  ) {
  return function(d) { return "Hierarchy fields aren't available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1688113393 = messageFormatterFn((function(  ) {
  return function(d) { return "Set fields aren't available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1775870985 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data doesn’t support fields of this type."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b198478212 = messageFormatterFn((function(  ) {
  return function(d) { return "Table calculations aren’t available in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1568142134 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1040293756 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a619566114 = messageFormatterFn((function(  ) {
  return function(d) { return "Domain Values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1095843010 = messageFormatterFn((function(  ) {
  return function(d) { return "Field Info"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a548193696 = messageFormatterFn((function(  ) {
  return function(d) { return "Formula"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b429479692 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a990196815 = messageFormatterFn((function(  ) {
  return function(d) { return "Value Distribution"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1765333779 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.rowCount + " " + plural(d.rowCounter, 0, pluralFuncs.en, { one: function() { return "row";}, other: function() { return "rows";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.a1109258637 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.valueCount + " " + plural(d.valueCounter, 0, pluralFuncs.en, { one: function() { return "unique value";}, other: function() { return "unique values";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.a1465657229 = messageFormatterFn((function(  ) {
  return function(d) { return "End"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b655644378 = messageFormatterFn((function(  ) {
  return function(d) { return "Start"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1923832793 = messageFormatterFn((function(  ) {
  return function(d) { return "Null"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2049386416 = messageFormatterFn((function(  ) {
  return function(d) { return "Average"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1344502035 = messageFormatterFn((function(  ) {
  return function(d) { return "Maximum"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1405605002 = messageFormatterFn((function(  ) {
  return function(d) { return "Min, Max"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b687585985 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1562805369 = messageFormatterFn((function(  ) {
  return function(d) { return "The first 10,000 values are recognized in Ask Data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1623464274 = messageFormatterFn((function(  ) {
  return function(d) { return d.role + " (" + d.dataType + ") "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a962561399 = messageFormatterFn((function(  ) {
  return function(d) { return "Find Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1026279704 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1241971158 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a817285257 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b285270079 = messageFormatterFn((function(  ) {
  return function(d) { return "A generated field that counts the number of rows."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b705499083 = messageFormatterFn((function(  ) {
  return function(d) { return "A generated field that counts the number of rows in the \"" + d.objectName + "\" table."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1532624323 = messageFormatterFn((function(  ) {
  return function(d) { return "A generated field that counts the number of rows in the table."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1534761570 = messageFormatterFn((function(  ) {
  return function(d) { return "Republish it to finish indexing all fields, or try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1971150847 = messageFormatterFn((function(  ) {
  return function(d) { return "Lost connection to the data source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1908834813 = messageFormatterFn((function(  ) {
  return function(d) { return "Republish it to load fields, or try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1984541276 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to find the data source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2000930608 = messageFormatterFn((function(  ) {
  return function(d) { return "Enable indexing so Ask Data can answer more questions and recognize unquoted values."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2001950641 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing has been disabled by the data source owner."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2019274323 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data will recognize field values only if you surround them with quotation marks."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b607519694 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t index data due to a system error."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b390443711 = messageFormatterFn((function(  ) {
  return function(d) { return "Republish with fewer fields so Ask Data can answer more questions and recognize unquoted values."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1669299872 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source has too many fields to index."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1822863571 = messageFormatterFn((function(  ) {
  return function(d) { return "Rename fields with unique names and republish."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b678556788 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to process data source due to duplicate field names."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2033285784 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove them from the data source to enable Ask Data to answer more questions and recognize field values."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1983802233 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing disabled due to user filters."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a183232298 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data won't be able to recognize unquoted field values. Create an extract and republish to improve performance, or try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1576042185 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source is too slow to index."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a658154965 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data can then answer more questions and recognize unquoted field values."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1784353740 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed credentials to enable index."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2056770807 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing Data Source..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1291612035 = messageFormatterFn((function(  ) {
  return function(d) { return "Encountered the following error and now waiting to retry indexing: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2110541419 = messageFormatterFn((function(  ) {
  return function(d) { return "Reindex Data Source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b436127801 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh Data Source Fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b949490748 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Indexed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b724607994 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.fieldCountLoc + " eligible " + plural(d.fieldCount, 0, pluralFuncs.en, { one: function() { return "field";}, other: function() { return "fields";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b2000252548 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.fieldCountLoc + " unsupported " + plural(d.fieldCount, 0, pluralFuncs.en, { one: function() { return "field";}, other: function() { return "fields";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b1938488831 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexed:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a978422912 = messageFormatterFn((function(  ) {
  return function(d) { return "Skipped:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1662964244 = messageFormatterFn((function(  ) {
  return function(d) { return "Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a623232638 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1891411081 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1693190484 = messageFormatterFn((function(  ) {
  return function(d) { return "No dimensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1354079384 = messageFormatterFn((function(  ) {
  return function(d) { return "No fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1894511941 = messageFormatterFn((function(  ) {
  return function(d) { return "No measures"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1957601813 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.formattedItemCount + " Field " + plural(d.itemCount, 0, pluralFuncs.en, { one: function() { return "Synonym";}, other: function() { return "Synonyms";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b823420404 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.formattedItemCount + " Value " + plural(d.itemCount, 0, pluralFuncs.en, { one: function() { return "Synonym";}, other: function() { return "Synonyms";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b1057828416 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Role Contents"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b438472152 = messageFormatterFn((function(  ) {
  return function(d) { return "Data role published but could not be applied"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1243453520 = messageFormatterFn((function(  ) {
  return function(d) { return "Data role could not be published"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1795586901 = messageFormatterFn((function(  ) {
  return function(d) { return "Data role could not be published - Permission was denied"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b339792981 = messageFormatterFn((function(  ) {
  return function(d) { return "Data role published and applied"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1772326611 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish data role to make this field's synonyms inheritable by other data sources."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1525055444 = messageFormatterFn((function(  ) {
  return function(d) { return "The data role will be created with default permissions for the project."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1002654824 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish Data Role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1947870214 = messageFormatterFn((function(  ) {
  return function(d) { return "Only values with synonyms will be copied from this field to the data role."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1876821868 = messageFormatterFn((function(  ) {
  return function(d) { return "A data role with this name already exists. Publishing will overwrite the existing data role."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b430022962 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1953873633 = messageFormatterFn((function(  ) {
  return function(d) { return "Contains an invalid character."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1383754140 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms must not be numbers, booleans, or dates."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2068718337 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms must be less than " + d.max + " characters."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2118104953 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms can't contain reserved terms."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b502332396 = messageFormatterFn((function(  ) {
  return function(d) { return "The maximum number of synonyms is 25"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1935166221 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms must be at least 1 character."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b596157988 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms for  \"" + d.value + "\""; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1859594973 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1341924804 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonym could not be published."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1242544069 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonym could not be published."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b963244967 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b104083701 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a296950726 = messageFormatterFn((function(  ) {
  return function(d) { return "This field already has a filter. Edit or remove the existing one."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1067487979 = messageFormatterFn((function(  ) {
  return function(d) { return "Can't use this field since there are no more aggregation types available."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1031269282 = messageFormatterFn((function(  ) {
  return function(d) { return d.baseTitle + " - Ask Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1356167335 = messageFormatterFn((function(  ) {
  return function(d) { return "New"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1361181569 = messageFormatterFn((function(  ) {
  return function(d) { return "Basic Data Analysis"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2206573 = messageFormatterFn((function(  ) {
  return function(d) { return "Simple Calculations"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b679821511 = messageFormatterFn((function(  ) {
  return function(d) { return "Date and Time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1050225138 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b354914539 = messageFormatterFn((function(  ) {
  return function(d) { return "Viz Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1762385778 = messageFormatterFn((function(  ) {
  return function(d) { return "All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1153447684 = messageFormatterFn((function(  ) {
  return function(d) { return "Contains"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1146013955 = messageFormatterFn((function(  ) {
  return function(d) { return "Ends with"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b587916893 = messageFormatterFn((function(  ) {
  return function(d) { return "Does not contain"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b595350622 = messageFormatterFn((function(  ) {
  return function(d) { return "Does not end with"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b428790789 = messageFormatterFn((function(  ) {
  return function(d) { return "Does not start with"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b872915687 = messageFormatterFn((function(  ) {
  return function(d) { return "Specific Values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2014677732 = messageFormatterFn((function(  ) {
  return function(d) { return "Starts with"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b410206420 = messageFormatterFn((function(  ) {
  return function(d) { return "Categorical filter tabs"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b977865729 = messageFormatterFn((function(  ) {
  return function(d) { return "Wildcard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2048520695 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid Result"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a677541699 = messageFormatterFn((function(  ) {
  return function(d) { return "Matching Result"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1357188143 = messageFormatterFn((function(  ) {
  return function(d) { return "Question"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1315248232 = messageFormatterFn((function(  ) {
  return function(d) { return "Duplicate questions aren't allowed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1259829475 = messageFormatterFn((function(  ) {
  return function(d) { return "What's the average...?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1872980157 = messageFormatterFn((function(  ) {
  return function(d) { return "Text to Display"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b413370811 = messageFormatterFn((function(  ) {
  return function(d) { return "Suggested Question"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1795671093 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b148202613 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy link"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1586602754 = messageFormatterFn((function(  ) {
  return function(d) { return "add a question"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1007689746 = messageFormatterFn((function(  ) {
  return function(d) { return "Duplicate suggestions aren’t allowed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b128730966 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1733216739 = messageFormatterFn((function(  ) {
  return function(d) { return "This group is empty and hidden from others until you " + d.addAQuestion + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1997823025 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Question"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1742652515 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Title"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b428126453 = messageFormatterFn((function(  ) {
  return function(d) { return "Group Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1872198867 = messageFormatterFn((function(  ) {
  return function(d) { return "Suggested Questions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1733465085 = messageFormatterFn((function(  ) {
  return function(d) { return "Some suggestions are invalid"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b586221974 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a955172586 = messageFormatterFn((function(  ) {
  return function(d) { return "We couldn't save your changes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1355897810 = messageFormatterFn((function(  ) {
  return function(d) { return "Try Again"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1604683719 = messageFormatterFn((function(  ) {
  return function(d) { return "AM"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1605130584 = messageFormatterFn((function(  ) {
  return function(d) { return "PM"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1859446206 = messageFormatterFn((function(  ) {
  return function(d) { return "Day"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1680855660 = messageFormatterFn((function(  ) {
  return function(d) { return "Hour"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1495705468 = messageFormatterFn((function(  ) {
  return function(d) { return "Minute"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b430706330 = messageFormatterFn((function(  ) {
  return function(d) { return "Month"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1356650542 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a795533028 = messageFormatterFn((function(  ) {
  return function(d) { return "Second"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1261136988 = messageFormatterFn((function(  ) {
  return function(d) { return "Week"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b348234639 = messageFormatterFn((function(  ) {
  return function(d) { return "Week " + d.weekNumber; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1203991123 = messageFormatterFn((function(  ) {
  return function(d) { return "Year"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a663590393 = messageFormatterFn((function(  ) {
  return function(d) { return "day"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b776132419 = messageFormatterFn((function(  ) {
  return function(d) { return "hour"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a359935341 = messageFormatterFn((function(  ) {
  return function(d) { return "minute"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1845910365 = messageFormatterFn((function(  ) {
  return function(d) { return "month"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1213937963 = messageFormatterFn((function(  ) {
  return function(d) { return "Month and Day"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1917204094 = messageFormatterFn((function(  ) {
  return function(d) { return "Month, Day, and Time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a491350404 = messageFormatterFn((function(  ) {
  return function(d) { return "April"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2109008357 = messageFormatterFn((function(  ) {
  return function(d) { return "August"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1150352259 = messageFormatterFn((function(  ) {
  return function(d) { return "December"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b110072646 = messageFormatterFn((function(  ) {
  return function(d) { return "February"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1362518440 = messageFormatterFn((function(  ) {
  return function(d) { return "January"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b830414288 = messageFormatterFn((function(  ) {
  return function(d) { return "July"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b830373926 = messageFormatterFn((function(  ) {
  return function(d) { return "June"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2121840129 = messageFormatterFn((function(  ) {
  return function(d) { return "March"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1776512355 = messageFormatterFn((function(  ) {
  return function(d) { return "May"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b961537462 = messageFormatterFn((function(  ) {
  return function(d) { return "November"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a964643486 = messageFormatterFn((function(  ) {
  return function(d) { return "October"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1961341839 = messageFormatterFn((function(  ) {
  return function(d) { return "September"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a333639689 = messageFormatterFn((function(  ) {
  return function(d) { return "quarter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1643793459 = messageFormatterFn((function(  ) {
  return function(d) { return "second"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b356413747 = messageFormatterFn((function(  ) {
  return function(d) { return "week"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b299267882 = messageFormatterFn((function(  ) {
  return function(d) { return "year"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a171242461 = messageFormatterFn((function(  ) {
  return function(d) { return "Date Detail"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1827882127 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid year"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b627857349 = messageFormatterFn((function(  ) {
  return function(d) { return "Date Value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2069691612 = messageFormatterFn((function(  ) {
  return function(d) { return "End Date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b692964614 = messageFormatterFn((function(  ) {
  return function(d) { return "Following " + d.timeUnit; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a31396502 = messageFormatterFn((function(  ) {
  return function(d) { return "Includes this " + d.timeUnit; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a319885445 = messageFormatterFn((function(  ) {
  return function(d) { return "Includes today"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a443342787 = messageFormatterFn((function(  ) {
  return function(d) { return d.dateValue + " (No data)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1984969298 = messageFormatterFn((function(  ) {
  return function(d) { return "Day Numbers"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1522202217 = messageFormatterFn((function(  ) {
  return function(d) { return "Months"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1512245227 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a780732138 = messageFormatterFn((function(  ) {
  return function(d) { return "Week Numbers"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1747490193 = messageFormatterFn((function(  ) {
  return function(d) { return "Weekdays"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1852011196 = messageFormatterFn((function(  ) {
  return function(d) { return "days"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1705174106 = messageFormatterFn((function(  ) {
  return function(d) { return "hours"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1188656586 = messageFormatterFn((function(  ) {
  return function(d) { return "minutes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1457001312 = messageFormatterFn((function(  ) {
  return function(d) { return "months"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a254194508 = messageFormatterFn((function(  ) {
  return function(d) { return "quarters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2124892778 = messageFormatterFn((function(  ) {
  return function(d) { return "weeks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2112928653 = messageFormatterFn((function(  ) {
  return function(d) { return "years"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b892964268 = messageFormatterFn((function(  ) {
  return function(d) { return "Previous " + d.timeUnit; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b603417293 = messageFormatterFn((function(  ) {
  return function(d) { return "Last"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b542315952 = messageFormatterFn((function(  ) {
  return function(d) { return "Next"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1810721556 = messageFormatterFn((function(  ) {
  return function(d) { return "Relative Dates"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a268761663 = messageFormatterFn((function(  ) {
  return function(d) { return d.firstPeriod + " to " + d.lastPeriod; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1507450607 = messageFormatterFn((function(  ) {
  return function(d) { return "Day 8"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a465747250 = messageFormatterFn((function(  ) {
  return function(d) { return "May"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1931372320 = messageFormatterFn((function(  ) {
  return function(d) { return "May 8"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b187130355 = messageFormatterFn((function(  ) {
  return function(d) { return "May 8, 10:32pm"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a280931600 = messageFormatterFn((function(  ) {
  return function(d) { return "Q1"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a285826934 = messageFormatterFn((function(  ) {
  return function(d) { return "Q2"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b622885240 = messageFormatterFn((function(  ) {
  return function(d) { return "Q3"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b137242030 = messageFormatterFn((function(  ) {
  return function(d) { return "Q4"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a76996090 = messageFormatterFn((function(  ) {
  return function(d) { return "Friday"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a812324289 = messageFormatterFn((function(  ) {
  return function(d) { return "Week 24"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1595873377 = messageFormatterFn((function(  ) {
  return function(d) { return "2020"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a354269601 = messageFormatterFn((function(  ) {
  return function(d) { return "May 8, 2020"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1775142379 = messageFormatterFn((function(  ) {
  return function(d) { return "May 8, 2020 at 10 AM"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1910929211 = messageFormatterFn((function(  ) {
  return function(d) { return "May 8, 2020 at 10:32 AM"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a941372677 = messageFormatterFn((function(  ) {
  return function(d) { return "May 2020"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1343684687 = messageFormatterFn((function(  ) {
  return function(d) { return "Q1 2020"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a380309285 = messageFormatterFn((function(  ) {
  return function(d) { return "May 8, 2020 at 10:32:12 AM"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1355423707 = messageFormatterFn((function(  ) {
  return function(d) { return "Week 5, 2020"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1781702126 = messageFormatterFn((function(  ) {
  return function(d) { return "Specific Dates"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1324141931 = messageFormatterFn((function(  ) {
  return function(d) { return "Start Date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1822128131 = messageFormatterFn((function(  ) {
  return function(d) { return "Range of Dates"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b655422354 = messageFormatterFn((function(  ) {
  return function(d) { return "MM/DD/YYYY"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1129252229 = messageFormatterFn((function(  ) {
  return function(d) { return "Time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b352323369 = messageFormatterFn((function(  ) {
  return function(d) { return "Range Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1539145408 = messageFormatterFn((function(  ) {
  return function(d) { return "Between"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b327862907 = messageFormatterFn((function(  ) {
  return function(d) { return "Ending"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a680343966 = messageFormatterFn((function(  ) {
  return function(d) { return "Starting"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a772147897 = messageFormatterFn((function(  ) {
  return function(d) { return "Date filter tabs"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1210466227 = messageFormatterFn((function(  ) {
  return function(d) { return "This " + d.timeUnit; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1431018180 = messageFormatterFn((function(  ) {
  return function(d) { return "Today"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1697517440 = messageFormatterFn((function(  ) {
  return function(d) { return "Tomorrow"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b307173571 = messageFormatterFn((function(  ) {
  return function(d) { return "Yesterday"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a441850909 = messageFormatterFn((function(  ) {
  return function(d) { return "Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a812552396 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b410421642 = messageFormatterFn((function(  ) {
  return function(d) { return "Time Period"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1098369145 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b829446534 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data embed code has been copied to your clipboard."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1609538196 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed Ask Data for this data source in your HTML page. No sheets or vizzes will get embeded."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a455383682 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy and paste this into any HTML page."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1288917692 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed Code for Ask Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a304276696 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1779617938 = messageFormatterFn((function(  ) {
  return function(d) { return "Help Improve Ask Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a81024025 = messageFormatterFn((function(  ) {
  return function(d) { return "Feedback"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b408285407 = messageFormatterFn((function(  ) {
  return function(d) { return "Build Version Info"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a180991980 = messageFormatterFn((function(  ) {
  return function(d) { return "Comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1489455701 = messageFormatterFn((function(  ) {
  return function(d) { return "Company (optional)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b89277053 = messageFormatterFn((function(  ) {
  return function(d) { return "Send feedback directly to Tableau's Ask Data team. We'll see the last question you asked using the feature, comments you add here, and your basic system setup."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a928681249 = messageFormatterFn((function(  ) {
  return function(d) { return "Feedback Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2073489949 = messageFormatterFn((function(  ) {
  return function(d) { return "Submit Feedback"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1441629835 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b799603199 = messageFormatterFn((function(  ) {
  return function(d) { return "How can we help you?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a628644567 = messageFormatterFn((function(  ) {
  return function(d) { return "What do you like about this experience?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1641463674 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain what's happening and walk us through the problem."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2062365695 = messageFormatterFn((function(  ) {
  return function(d) { return "Attempted to connect to " + d.URL; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a241244148 = messageFormatterFn((function(  ) {
  return function(d) { return "Feedback connection issue. Please contact your Tableau Server administrator or IT department to diagnose."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b752217350 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to submit feedback."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b918400707 = messageFormatterFn((function(  ) {
  return function(d) { return "Thanks for your feedback!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b265514095 = messageFormatterFn((function(  ) {
  return function(d) { return "Submitting, Please Wait"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1600887495 = messageFormatterFn((function(  ) {
  return function(d) { return " was created to track your input."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1316827782 = messageFormatterFn((function(  ) {
  return function(d) { return "Feature Request"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b62152271 = messageFormatterFn((function(  ) {
  return function(d) { return "Praise"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b613113037 = messageFormatterFn((function(  ) {
  return function(d) { return "Problem"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1158513739 = messageFormatterFn((function(  ) {
  return function(d) { return "If Ask Data isn't producing the results you expect, email your question to the owner of this data source. They will see your email address and content you provide below."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2056487185 = messageFormatterFn((function(  ) {
  return function(d) { return "Message"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2041197407 = messageFormatterFn((function(  ) {
  return function(d) { return "Send me a copy"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1699704603 = messageFormatterFn((function(  ) {
  return function(d) { return "Send Email"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a204390844 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to send your message due to an unexpected error."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1565066324 = messageFormatterFn((function(  ) {
  return function(d) { return "This request cannot be completed due to missing email information. Please ensure that both your and the datasource owner's email information are available before trying again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a288297787 = messageFormatterFn((function(  ) {
  return function(d) { return "Your message has been sent!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a691094099 = messageFormatterFn((function(  ) {
  return function(d) { return "Sending message, please wait..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1519847023 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact the Data Source Owner"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b804089992 = messageFormatterFn((function(  ) {
  return function(d) { return "All Types"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a302909488 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2071043170 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1682725942 = messageFormatterFn((function(  ) {
  return function(d) { return "Geographic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b437891737 = messageFormatterFn((function(  ) {
  return function(d) { return "Number"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a36039171 = messageFormatterFn((function(  ) {
  return function(d) { return "Text"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a176335527 = messageFormatterFn((function(  ) {
  return function(d) { return "selected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1907883453 = messageFormatterFn((function(  ) {
  return function(d) { return "At Least"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b454245627 = messageFormatterFn((function(  ) {
  return function(d) { return "At Most"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1387082575 = messageFormatterFn((function(  ) {
  return function(d) { return "Between"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a441275406 = messageFormatterFn((function(  ) {
  return function(d) { return "Accept"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1830340352 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a219528707 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2039703251 = messageFormatterFn((function(  ) {
  return function(d) { return "Go back?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b911724613 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b389790957 = messageFormatterFn((function(  ) {
  return function(d) { return "Bottom"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a368700887 = messageFormatterFn((function(  ) {
  return function(d) { return "Top"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b248259495 = messageFormatterFn((function(  ) {
  return function(d) { return "Link has been copied to clipboard."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b789102488 = messageFormatterFn((function(  ) {
  return function(d) { return "To share the current sheet, send this link to people who can access this data source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b54499480 = messageFormatterFn((function(  ) {
  return function(d) { return "Share Ask Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a527005327 = messageFormatterFn((function(  ) {
  return function(d) { return "en_US"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b394891931 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1092539973 = messageFormatterFn((function(  ) {
  return function(d) { return "Duplicate"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a778003354 = messageFormatterFn((function(  ) {
  return function(d) { return "New Sheet"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a956276930 = messageFormatterFn((function(  ) {
  return function(d) { return "Adjust your question or clear all to start over"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a981141429 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data took too long to respond. If the issue persists, contact your administrator or Tableau support."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1901127648 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data doesn't understand. Keep typing or choose a suggestion below."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b125797485 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data encountered an error. If the issue persists, contact your administrator or Tableau support."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b382834145 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1771395091 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data... (English only)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a67926031 = messageFormatterFn((function(  ) {
  return function(d) { return "To enable it, contact the data source owner or your Tableau administrator."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a743580833 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data is disabled for this datasource"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b716430938 = messageFormatterFn((function(  ) {
  return function(d) { return "No data matches the filters for your question. "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b938872436 = messageFormatterFn((function(  ) {
  return function(d) { return "No records"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b126534320 = messageFormatterFn((function(  ) {
  return function(d) { return "Not sure what questions to ask of your data? Learn the basics in our how-to guide."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1671370973 = messageFormatterFn((function(  ) {
  return function(d) { return "Get Started"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b989722752 = messageFormatterFn((function(  ) {
  return function(d) { return "Get Started with Ask Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1608942774 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn how to structure and roll out Ask Data so users in your organization can find answers fast."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1257108061 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Up Ask Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a175659444 = messageFormatterFn((function(  ) {
  return function(d) { return "Got it"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b587763943 = messageFormatterFn((function(  ) {
  return function(d) { return "Hover over dimensions and measures to see the data available to you. Use keywords you find here when framing your questions."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1003173496 = messageFormatterFn((function(  ) {
  return function(d) { return "Get to know your data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1590007845 = messageFormatterFn((function(  ) {
  return function(d) { return "When you like the resulting viz, add phrases to further expand it."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1537399431 = messageFormatterFn((function(  ) {
  return function(d) { return "When you like the resulting viz, add phrases to further expand it.<br />Ask Data requires English analytical phrases but works great with non-English data sources."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2056878010 = messageFormatterFn((function(  ) {
  return function(d) { return "Start with simple questions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1113504757 = messageFormatterFn((function(  ) {
  return function(d) { return "Hover over phrases, and click underlined elements to quickly change fields and calculations."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1055389100 = messageFormatterFn((function(  ) {
  return function(d) { return "Refine questions with a click"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2018711760 = messageFormatterFn((function(  ) {
  return function(d) { return "Quantitative filter tabs"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a24389516 = messageFormatterFn((function(  ) {
  return function(d) { return "Restore " + d.numberOfSheets + " sheets from your previous session?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1750677774 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a280863773 = messageFormatterFn((function(  ) {
  return function(d) { return "Restore Session"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1573500780 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b205768887 = messageFormatterFn((function(  ) {
  return function(d) { return "We’ve restored your previous session"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b204710269 = messageFormatterFn((function(  ) {
  return function(d) { return "Save as..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1238331611 = messageFormatterFn((function(  ) {
  return function(d) { return "Save (overwrites)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1169286255 = messageFormatterFn((function(  ) {
  return function(d) { return "Saved viz to workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b479151311 = messageFormatterFn((function(  ) {
  return function(d) { return "Save..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b826485424 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data is unavailable at this time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1491860036 = messageFormatterFn((function(  ) {
  return function(d) { return "Try and refresh your network connection."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1840830558 = messageFormatterFn((function(  ) {
  return function(d) { return "Reload this page."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1522644355 = messageFormatterFn((function(  ) {
  return function(d) { return "Either it doesn't exist, or you don't have permission to access it. Go to the " + d.datasourceName + " data source to ask more questions."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a155938350 = messageFormatterFn((function(  ) {
  return function(d) { return "We can't display that page."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1751564607 = messageFormatterFn((function(  ) {
  return function(d) { return "Alphabetical"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1906921349 = messageFormatterFn((function(  ) {
  return function(d) { return "Ascending"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a862664065 = messageFormatterFn((function(  ) {
  return function(d) { return "Descending"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b480018848 = messageFormatterFn((function(  ) {
  return function(d) { return "Error"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1507384193 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1543066436 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed Code"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1490450828 = messageFormatterFn((function(  ) {
  return function(d) { return "Feedback to Curator"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1456520906 = messageFormatterFn((function(  ) {
  return function(d) { return "Redo"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1431059211 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1322734953 = messageFormatterFn((function(  ) {
  return function(d) { return "Share Link"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1517421168 = messageFormatterFn((function(  ) {
  return function(d) { return "Swap Axes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b755331335 = messageFormatterFn((function(  ) {
  return function(d) { return "Please try again later."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a381839228 = messageFormatterFn((function(  ) {
  return function(d) { return "Undo"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b58266439 = messageFormatterFn((function(  ) {
  return function(d) { return "Usage Analytics"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1182418277 = messageFormatterFn((function(  ) {
  return function(d) { return "View"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a168250261 = messageFormatterFn((function(  ) {
  return function(d) { return "No marks appear on this viz because a numeric field has null values."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1183221257 = messageFormatterFn((function(  ) {
  return function(d) { return "Bar Chart"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1232028600 = messageFormatterFn((function(  ) {
  return function(d) { return "Gantt Chart"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a750563440 = messageFormatterFn((function(  ) {
  return function(d) { return "Heat Map"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1062333512 = messageFormatterFn((function(  ) {
  return function(d) { return "Histogram"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a506389577 = messageFormatterFn((function(  ) {
  return function(d) { return "Line Chart"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1593632273 = messageFormatterFn((function(  ) {
  return function(d) { return "Map"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1170066128 = messageFormatterFn((function(  ) {
  return function(d) { return "Pie Chart"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a871133901 = messageFormatterFn((function(  ) {
  return function(d) { return "Scatter Plot"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1019078814 = messageFormatterFn((function(  ) {
  return function(d) { return "Stacked Bar"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b720589584 = messageFormatterFn((function(  ) {
  return function(d) { return "Text Table"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a572807074 = messageFormatterFn((function(  ) {
  return function(d) { return "Treemap"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a269362315 = messageFormatterFn((function(  ) {
  return function(d) { return "No marks appear on this map because geographic data is either missing or incorrectly structured."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b682748403 = messageFormatterFn((function(  ) {
  return function(d) { return "As Percentage"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b885045963 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculate the difference of"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1118948133 = messageFormatterFn((function(  ) {
  return function(d) { return "Over the"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1942727245 = messageFormatterFn((function(  ) {
  return function(d) { return d.PROJECT_NAME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a322493263 = messageFormatterFn((function(  ) {
  return function(d) { return "You do not have permission to move to “" + d.PROJECT_NAME + "”"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a849829004 = messageFormatterFn((function(  ) {
  return function(d) { return "Content cannot be moved to “" + d.PROJECT_NAME + "”"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b707568333 = messageFormatterFn((function(  ) {
  return function(d) { return d.SITE_NAME + " (site root)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b109939126 = messageFormatterFn((function(  ) {
  return function(d) { return "Permissions Required"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b256468981 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1133392248 = messageFormatterFn((function(  ) {
  return function(d) { return "Continue"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b290167621 = messageFormatterFn((function(  ) {
  return function(d) { return "Continue without signing in"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2021629502 = messageFormatterFn((function(  ) {
  return function(d) { return "Connect to " + d.DATA_SOURCE; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1323884826 = messageFormatterFn((function(  ) {
  return function(d) { return "Before you connect"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1942925832 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in with your " + d.DATA_SOURCE + " account to see the dashboard with your data, or continue without signing in to quickly see it with sample data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1237574269 = messageFormatterFn((function(  ) {
  return function(d) { return "Make sure you’re using the cloud-based version of ServiceNow and have permission to access the necessary data. When you sign in, use your ServiceNow credentials, which may differ from those you use for single sign-on."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1673713816 = messageFormatterFn((function(  ) {
  return function(d) { return "You must be a company Administrator"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1663350618 = messageFormatterFn((function(  ) {
  return function(d) { return " on your QuickBooks Online account to use Tableau to connect to QuickBooks Online."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a69096519 = messageFormatterFn((function(  ) {
  return function(d) { return "Only one Company Administrator per company"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1663349657 = messageFormatterFn((function(  ) {
  return function(d) { return " can use Tableau to connect to QuickBooks Online. If another Company Administrator has used Tableau, that administrator must give up the Tableau Online application privilege so that you can use them."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b245754859 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in to " + d.DATA_SOURCE + " to see your data in the dashboard. Or continue without signing in to see sample data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a572292111 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Parameter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b796057599 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Parameter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b380121008 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b965396537 = messageFormatterFn((function(  ) {
  return function(d) { return "Properties"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2028960704 = messageFormatterFn((function(  ) {
  return function(d) { return "Aliases"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1707846296 = messageFormatterFn((function(  ) {
  return function(d) { return "Data type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1946800442 = messageFormatterFn((function(  ) {
  return function(d) { return "Float"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b762084937 = messageFormatterFn((function(  ) {
  return function(d) { return "Integer"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b663290207 = messageFormatterFn((function(  ) {
  return function(d) { return "String"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a803887649 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1561467876 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b147498921 = messageFormatterFn((function(  ) {
  return function(d) { return "DateTime"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1290945164 = messageFormatterFn((function(  ) {
  return function(d) { return "Current value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a589969604 = messageFormatterFn((function(  ) {
  return function(d) { return "Value when workbook opens"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1032591143 = messageFormatterFn((function(  ) {
  return function(d) { return "Allowable values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a814593976 = messageFormatterFn((function(  ) {
  return function(d) { return "Range of values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1793284123 = messageFormatterFn((function(  ) {
  return function(d) { return "All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1156900099 = messageFormatterFn((function(  ) {
  return function(d) { return "List"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1704690096 = messageFormatterFn((function(  ) {
  return function(d) { return "Range"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1406788334 = messageFormatterFn((function(  ) {
  return function(d) { return "Add From Parameter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1825521373 = messageFormatterFn((function(  ) {
  return function(d) { return "Add From Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b579381939 = messageFormatterFn((function(  ) {
  return function(d) { return "Paste From Clipboard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b373888509 = messageFormatterFn((function(  ) {
  return function(d) { return "Set From Parameter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1907494638 = messageFormatterFn((function(  ) {
  return function(d) { return "Set From Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b390040480 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a896017954 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a207983348 = messageFormatterFn((function(  ) {
  return function(d) { return "Years"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1202962175 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b922461717 = messageFormatterFn((function(  ) {
  return function(d) { return "Months"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1563538467 = messageFormatterFn((function(  ) {
  return function(d) { return "Weeks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b874578289 = messageFormatterFn((function(  ) {
  return function(d) { return "Days"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1689915411 = messageFormatterFn((function(  ) {
  return function(d) { return "Hours"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b359099139 = messageFormatterFn((function(  ) {
  return function(d) { return "Minutes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1949817501 = messageFormatterFn((function(  ) {
  return function(d) { return "Seconds"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2102111346 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Weeks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1777308961 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Quarters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b421334135 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Years"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1044892251 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a65546679 = messageFormatterFn((function(  ) {
  return function(d) { return "Maximum"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b300612582 = messageFormatterFn((function(  ) {
  return function(d) { return "Fixed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1211901814 = messageFormatterFn((function(  ) {
  return function(d) { return "Step size"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1503408096 = messageFormatterFn((function(  ) {
  return function(d) { return "Value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a503325244 = messageFormatterFn((function(  ) {
  return function(d) { return "Display As"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a433636253 = messageFormatterFn((function(  ) {
  return function(d) { return "Duplicate values found"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a332623435 = messageFormatterFn((function(  ) {
  return function(d) { return "Every value in the list must have a unique display name. Double-click the highlighted fields to update. Duplicate values will automatically be removed when you select OK."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b299983967 = messageFormatterFn((function(  ) {
  return function(d) { return d.alias + " is a duplicate"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1904455414 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove Selected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1188600784 = messageFormatterFn((function(  ) {
  return function(d) { return "Click to add"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b399982281 = messageFormatterFn((function(  ) {
  return function(d) { return "Your current browser doesn’t support this feature."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a192150811 = messageFormatterFn((function(  ) {
  return function(d) { return "When workbook opens"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1596972241 = messageFormatterFn((function(  ) {
  return function(d) { return "Add values from"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a114508620 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1622861122 = messageFormatterFn((function(  ) {
  return function(d) { return "Parameters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2044699256 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter [" + d.fieldName + "]"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1234750006 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a443629738 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1680551864 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1169920041 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a470981337 = messageFormatterFn((function(  ) {
  return function(d) { return "Include null values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1280907743 = messageFormatterFn((function(  ) {
  return function(d) { return "Relative dates"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a620028471 = messageFormatterFn((function(  ) {
  return function(d) { return "Range of dates"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a629155841 = messageFormatterFn((function(  ) {
  return function(d) { return "Starting date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1353233606 = messageFormatterFn((function(  ) {
  return function(d) { return "Ending date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1200566334 = messageFormatterFn((function(  ) {
  return function(d) { return "Range of values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b95937618 = messageFormatterFn((function(  ) {
  return function(d) { return "At least"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b103243020 = messageFormatterFn((function(  ) {
  return function(d) { return "At most"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1566187905 = messageFormatterFn((function(  ) {
  return function(d) { return "Special"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1732872706 = messageFormatterFn((function(  ) {
  return function(d) { return "Set [" + d.fieldName + "] to show"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1507310459 = messageFormatterFn((function(  ) {
  return function(d) { return "Not a valid date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b693635760 = messageFormatterFn((function(  ) {
  return function(d) { return "Not a valid value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a877411657 = messageFormatterFn((function(  ) {
  return function(d) { return "Today"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2037899126 = messageFormatterFn((function(  ) {
  return function(d) { return "Anchor relative to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1816190929 = messageFormatterFn((function(  ) {
  return function(d) { return "Show times"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b215093354 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b987571928 = messageFormatterFn((function(  ) {
  return function(d) { return "Maximum"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a180614506 = messageFormatterFn((function(  ) {
  return function(d) { return "Only null values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1936770101 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude null values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a757620600 = messageFormatterFn((function(  ) {
  return function(d) { return "All values"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a801909715 = messageFormatterFn((function(  ) {
  return function(d) { return "Only null dates"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1010701650 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude null dates"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1119139835 = messageFormatterFn((function(  ) {
  return function(d) { return "All dates"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a328416691 = messageFormatterFn((function(  ) {
  return function(d) { return "Related Views"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1823046635 = messageFormatterFn((function(  ) {
  return function(d) { return "Close panel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a238422273 = messageFormatterFn((function(  ) {
  return function(d) { return "Finding related views based on the current view..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1530802781 = messageFormatterFn((function(  ) {
  return function(d) { return "Could not find any views or dashboards that are similar to this view."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1780022265 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a147648592 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b253646742 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b845687416 = messageFormatterFn((function(  ) {
  return function(d) { return "Modified"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1442047068 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Relationship"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b80979025 = messageFormatterFn((function(  ) {
  return function(d) { return "Add more fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1879437634 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1349610576 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1913637866 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Relationship Calculation..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1802155016 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Calculation..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1674406756 = messageFormatterFn((function(  ) {
  return function(d) { return "Foreign keys"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2062219446 = messageFormatterFn((function(  ) {
  return function(d) { return "Primary keys"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1160986259 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1938393797 = messageFormatterFn((function(  ) {
  return function(d) { return "Select matching fields to create this relationship."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b815206928 = messageFormatterFn((function(  ) {
  return function(d) { return "Performance Options"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a832772190 = messageFormatterFn((function(  ) {
  return function(d) { return "Each value of " + d.linkedField + " in " + d.thisTable + " is unique"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1769484679 = messageFormatterFn((function(  ) {
  return function(d) { return "The combination of matching fields is unique"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b500337156 = messageFormatterFn((function(  ) {
  return function(d) { return "Every record in " + d.thisTable + " matches a record in " + d.otherTable; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2034748449 = messageFormatterFn((function(  ) {
  return function(d) { return "How do relationships differ from joins?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a60547524 = messageFormatterFn((function(  ) {
  return function(d) { return "These settings help Tableau optimize queries during analysis. The default settings are recommended, if you aren't sure what to choose."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2122414537 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregations will be inaccurate if these settings are inaccurate."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b667202449 = messageFormatterFn((function(  ) {
  return function(d) { return "Revert to Default"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a671342908 = messageFormatterFn((function(  ) {
  return function(d) { return "Change the setting if you know the cardinality."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1008027581 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected the cardinality for " + d.tableName + " from the database."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1434440265 = messageFormatterFn((function(  ) {
  return function(d) { return "Change the setting if you know the referential integrity."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a153258658 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected the referential integrity for " + d.tableName + " from the database."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b794404926 = messageFormatterFn((function(  ) {
  return function(d) { return "Cardinality"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a132607398 = messageFormatterFn((function(  ) {
  return function(d) { return "Referential Integrity"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b55035095 = messageFormatterFn((function(  ) {
  return function(d) { return d.first + " to " + d.second; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a595103058 = messageFormatterFn((function(  ) {
  return function(d) { return "Many"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1268345897 = messageFormatterFn((function(  ) {
  return function(d) { return "One"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1653180094 = messageFormatterFn((function(  ) {
  return function(d) { return "Some records match"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b101934675 = messageFormatterFn((function(  ) {
  return function(d) { return "All records match"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1586809721 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in the selected fields are unique."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1628001039 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in " + d.fieldName + " are unique."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1434976517 = messageFormatterFn((function(  ) {
  return function(d) { return "This will join data before aggregation during analysis, optimizing queries. You might see duplicate aggregates if field values aren't unique."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1780933964 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected that values in the selected fields are unique."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1072402156 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected that values in " + d.fieldName + " are unique."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b965886608 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in the selected fields aren't unique, or you don't know."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1807417912 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in " + d.fieldName + " aren't unique, or you don't know."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b724493326 = messageFormatterFn((function(  ) {
  return function(d) { return "This will aggregate data before joins during analysis, preventing duplication of aggregates."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1629352743 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in the selected fields in " + d.firstTable + " have a match in " + d.secondTable + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b258074655 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in " + d.fieldName + " in " + d.firstTable + " have a match in " + d.secondTable + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b605609367 = messageFormatterFn((function(  ) {
  return function(d) { return "This will generate fewer and simpler joins to optimize queries. You might see inconsistent results during analysis if there are unmatched values in " + d.firstTable + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1751730490 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected that values in the selected fields in " + d.firstTable + " have a match in " + d.secondTable + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a366672002 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected that values in " + d.fieldName + " in " + d.firstTable + " have a match in " + d.secondTable + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1695962674 = messageFormatterFn((function(  ) {
  return function(d) { return "Some values in the selected fields in " + d.firstTable + " don't have a match in " + d.secondTable + ", or you don't know."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b865964522 = messageFormatterFn((function(  ) {
  return function(d) { return "Some values in " + d.fieldName + " in " + d.firstTable + " don't have a match in " + d.secondTable + ", or you don't know."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b431084076 = messageFormatterFn((function(  ) {
  return function(d) { return "This will keep all measure values, even unmatched ones."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b412522110 = messageFormatterFn((function(  ) {
  return function(d) { return "Assume some records in " + d.hoveredTable + " match records in " + d.otherTable + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1484907151 = messageFormatterFn((function(  ) {
  return function(d) { return "Assume all records in " + d.hoveredTable + " match records in " + d.otherTable + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1796281926 = messageFormatterFn((function(  ) {
  return function(d) { return "(detected)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1591409865 = messageFormatterFn((function(  ) {
  return function(d) { return "(default)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a168723598 = messageFormatterFn((function(  ) {
  return function(d) { return "One to One"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a866550157 = messageFormatterFn((function(  ) {
  return function(d) { return "One to Many"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a321418053 = messageFormatterFn((function(  ) {
  return function(d) { return "Many to One"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1305110966 = messageFormatterFn((function(  ) {
  return function(d) { return "Many to Many"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1301965070 = messageFormatterFn((function(  ) {
  return function(d) { return "One record in " + d.table + " can match "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b560997017 = messageFormatterFn((function(  ) {
  return function(d) { return "one record in " + d.table + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1066702910 = messageFormatterFn((function(  ) {
  return function(d) { return "Many records in " + d.table + " can match "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b146733669 = messageFormatterFn((function(  ) {
  return function(d) { return "many records in " + d.table + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1465044025 = messageFormatterFn((function(  ) {
  return function(d) { return "One record in " + d.leftTable + " matches one record in " + d.rightTable + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a164833734 = messageFormatterFn((function(  ) {
  return function(d) { return "A record in " + d.table + " can match"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b941834752 = messageFormatterFn((function(  ) {
  return function(d) { return "Every record in " + d.table + " matches"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a10195532 = messageFormatterFn((function(  ) {
  return function(d) { return "a record in " + d.table; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a95294340 = messageFormatterFn((function(  ) {
  return function(d) { return "one or more records in " + d.table; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1517320737 = messageFormatterFn((function(  ) {
  return function(d) { return "one or zero records in " + d.table; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b263582256 = messageFormatterFn((function(  ) {
  return function(d) { return "any number of records in " + d.table + " (even none)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a196229060 = messageFormatterFn((function(  ) {
  return function(d) { return "Number (decimal)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1843417390 = messageFormatterFn((function(  ) {
  return function(d) { return "Number (whole)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b519310079 = messageFormatterFn((function(  ) {
  return function(d) { return "Date & Time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b207713836 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2040738121 = messageFormatterFn((function(  ) {
  return function(d) { return "String"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b885577320 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b259844488 = messageFormatterFn((function(  ) {
  return function(d) { return "Set"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a887853940 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1798182598 = messageFormatterFn((function(  ) {
  return function(d) { return "unknown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1032192403 = messageFormatterFn((function(  ) {
  return function(d) { return "Font family"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1290261712 = messageFormatterFn((function(  ) {
  return function(d) { return "Font size"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1140385221 = messageFormatterFn((function(  ) {
  return function(d) { return "Bold"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a127906416 = messageFormatterFn((function(  ) {
  return function(d) { return "Italic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b701353968 = messageFormatterFn((function(  ) {
  return function(d) { return "Underline"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2039644186 = messageFormatterFn((function(  ) {
  return function(d) { return "Text Color"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1727521758 = messageFormatterFn((function(  ) {
  return function(d) { return "Left Align"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1033369644 = messageFormatterFn((function(  ) {
  return function(d) { return "Center Align"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1759424137 = messageFormatterFn((function(  ) {
  return function(d) { return "Right Align"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a760382358 = messageFormatterFn((function(  ) {
  return function(d) { return "is On"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2096841902 = messageFormatterFn((function(  ) {
  return function(d) { return "is Off"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1411453506 = messageFormatterFn((function(  ) {
  return function(d) { return "Link"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1409474530 = messageFormatterFn((function(  ) {
  return function(d) { return "Text"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1486940408 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1062030329 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a495437576 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b60826821 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear Formatting"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1887314314 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear Formatting"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b269137057 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b730326866 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b973344233 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1131409766 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1143501173 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b394653372 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b729480610 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b738849811 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b988082435 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1944966956 = messageFormatterFn((function(  ) {
  return function(d) { return "Unlink"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1256927315 = messageFormatterFn((function(  ) {
  return function(d) { return "Show tooltips"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1761840228 = messageFormatterFn((function(  ) {
  return function(d) { return "Include command buttons"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a905549426 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow selection by category"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1063251932 = messageFormatterFn((function(  ) {
  return function(d) { return "Responsive - Show tooltips instantly"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a872024897 = messageFormatterFn((function(  ) {
  return function(d) { return "On Hover - Show tooltips on hover"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a509739462 = messageFormatterFn((function(  ) {
  return function(d) { return "On Data Refresh"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a347068190 = messageFormatterFn((function(  ) {
  return function(d) { return "Specified Time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1954838669 = messageFormatterFn((function(  ) {
  return function(d) { return "Hourly"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1239665325 = messageFormatterFn((function(  ) {
  return function(d) { return "Daily"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1962846595 = messageFormatterFn((function(  ) {
  return function(d) { return "Weekly"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1512873313 = messageFormatterFn((function(  ) {
  return function(d) { return "Monthly"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a397210014 = messageFormatterFn((function(  ) {
  return function(d) { return "from " + d.START_TIME + " to " + d.END_TIME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1492433292 = messageFormatterFn((function(  ) {
  return function(d) { return "at " + d.START_TIME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a850303978 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + " " + d.AT_OR_FROM_TO; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b912413145 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + " every " + d.LOC_MIN_NUM + " " + d.AT_OR_FROM_TO; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b455527767 = messageFormatterFn((function(  ) {
  return function(d) { return d["1"] + " at " + d["2"]; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a965394059 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + " every " + d.LOC_MIN_NUM + " from " + d.START_TIME + " to " + d.END_TIME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1288108565 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + " every " + d.LOC_MIN_NUM + " starting at " + d.START_TIME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1527914641 = messageFormatterFn((function(  ) {
  return function(d) { return "days a week,"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1384732830 = messageFormatterFn((function(  ) {
  return function(d) { return "day a week,"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2076107680 = messageFormatterFn((function(  ) {
  return function(d) { return "to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2035136165 = messageFormatterFn((function(  ) {
  return function(d) { return "Time zone"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1232555827 = messageFormatterFn((function(  ) {
  return function(d) { return "At"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1068433092 = messageFormatterFn((function(  ) {
  return function(d) { return "From"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1231994603 = messageFormatterFn((function(  ) {
  return function(d) { return "To"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2020303977 = messageFormatterFn((function(  ) {
  return function(d) { return "Every"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1232144519 = messageFormatterFn((function(  ) {
  return function(d) { return "On"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1545015087 = messageFormatterFn((function(  ) {
  return function(d) { return "Day"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1506980252 = messageFormatterFn((function(  ) {
  return function(d) { return "Day of week"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1779887559 = messageFormatterFn((function(  ) {
  return function(d) { return "Days of month"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1211906938 = messageFormatterFn((function(  ) {
  return function(d) { return "First"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1715974668 = messageFormatterFn((function(  ) {
  return function(d) { return "Second"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1708743299 = messageFormatterFn((function(  ) {
  return function(d) { return "Third"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2094292454 = messageFormatterFn((function(  ) {
  return function(d) { return "Fourth"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1222970931 = messageFormatterFn((function(  ) {
  return function(d) { return "Fifth"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1814341418 = messageFormatterFn((function(  ) {
  return function(d) { return "Last"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1451041813 = messageFormatterFn((function(  ) {
  return function(d) { return "Fifteen minutes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1552946998 = messageFormatterFn((function(  ) {
  return function(d) { return "Half hour"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b188687689 = messageFormatterFn((function(  ) {
  return function(d) { return "Hour"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b400331149 = messageFormatterFn((function(  ) {
  return function(d) { return "Two hours"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b128945283 = messageFormatterFn((function(  ) {
  return function(d) { return "Four hours"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2119786359 = messageFormatterFn((function(  ) {
  return function(d) { return "Six hours"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1833563254 = messageFormatterFn((function(  ) {
  return function(d) { return "Eight hours"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b950669136 = messageFormatterFn((function(  ) {
  return function(d) { return "Twelve hours"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a649660331 = messageFormatterFn((function(  ) {
  return function(d) { return "Sunday"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2047645419 = messageFormatterFn((function(  ) {
  return function(d) { return "Monday"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2108844504 = messageFormatterFn((function(  ) {
  return function(d) { return "Tuesday"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1447034097 = messageFormatterFn((function(  ) {
  return function(d) { return "Wednesday"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1563333323 = messageFormatterFn((function(  ) {
  return function(d) { return "Thursday"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a957272954 = messageFormatterFn((function(  ) {
  return function(d) { return "Friday"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b708468908 = messageFormatterFn((function(  ) {
  return function(d) { return "Saturday"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1942514855 = messageFormatterFn((function(  ) {
  return function(d) { return "Su"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1366530713 = messageFormatterFn((function(  ) {
  return function(d) { return "M"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1512727626 = messageFormatterFn((function(  ) {
  return function(d) { return "T"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1832529119 = messageFormatterFn((function(  ) {
  return function(d) { return "W"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a195292509 = messageFormatterFn((function(  ) {
  return function(d) { return "Th"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1469360696 = messageFormatterFn((function(  ) {
  return function(d) { return "F"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a409286302 = messageFormatterFn((function(  ) {
  return function(d) { return "Sa"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b936157242 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS_LOC + " " + d.DAYS + " at " + d.START_TIME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b656595800 = messageFormatterFn((function(  ) {
  return function(d) { return d.WHICH + d.WHAT + " " + d.OF_THE_MONTH + " at " + d.WHEN; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1245593293 = messageFormatterFn((function(  ) {
  return function(d) { return "time a month"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a254545914 = messageFormatterFn((function(  ) {
  return function(d) { return "times a month"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b496796665 = messageFormatterFn((function(  ) {
  return function(d) { return "of the month"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b991252684 = messageFormatterFn((function(  ) {
  return function(d) { return "Repeats"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1008366748 = messageFormatterFn((function(  ) {
  return function(d) { return "Done"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b479045902 = messageFormatterFn((function(  ) {
  return function(d) { return d.CURRENT_LENGTH + "/" + d.MAX_LENGTH; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a352825700 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b861571267 = messageFormatterFn((function(  ) {
  return function(d) { return "collection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b384955895 = messageFormatterFn((function(  ) {
  return function(d) { return "content type: " + d.CONTENT_TYPE; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a912628334 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy Link"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a670480718 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy Link"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1016020897 = messageFormatterFn((function(  ) {
  return function(d) { return "data role"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a511273764 = messageFormatterFn((function(  ) {
  return function(d) { return "data source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1831354759 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.CONTENT_NAME + "\" embed code copied to the clipboard."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b294899597 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed Code"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1538946345 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy Embed Code"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2037248205 = messageFormatterFn((function(  ) {
  return function(d) { return "flow"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b707595035 = messageFormatterFn((function(  ) {
  return function(d) { return "Can't share because the list of users contains errors. Correct the errors, then try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a468534997 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.CONTENT_NAME + "\" link copied to the clipboard."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b363498191 = messageFormatterFn((function(  ) {
  return function(d) { return "Share using a link"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a147001133 = messageFormatterFn((function(  ) {
  return function(d) { return "Getting link…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1123267535 = messageFormatterFn((function(  ) {
  return function(d) { return "metric"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b575829006 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter at least one username before sharing."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1126154479 = messageFormatterFn((function(  ) {
  return function(d) { return d.NAME + " doesn't have an email address set to receive notifications."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1746986670 = messageFormatterFn((function(  ) {
  return function(d) { return d.NAME + " isn't a user on this site."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b771271794 = messageFormatterFn((function(  ) {
  return function(d) { return "Share with people"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1321739021 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a username."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a638096484 = messageFormatterFn((function(  ) {
  return function(d) { return d.FULL_NAME + " (" + d.USER_NAME + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a140655664 = messageFormatterFn((function(  ) {
  return function(d) { return "project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a107260355 = messageFormatterFn((function(  ) {
  return function(d) { return "published connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1550265974 = messageFormatterFn((function(  ) {
  return function(d) { return "Share"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1758419554 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to share \"" + d.CONTENT_NAME + "\"."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1012149183 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.CONTENT_NAME + "\" shared."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1192907857 = messageFormatterFn((function(  ) {
  return function(d) { return "Only people with permission can see this " + d.CONTENT_TYPE + "."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2030374381 = messageFormatterFn((function(  ) {
  return function(d) { return "In a collection, people see only the items they have permission to access."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1535026880 = messageFormatterFn((function(  ) {
  return function(d) { return "Message (optional)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1802721148 = messageFormatterFn((function(  ) {
  return function(d) { return "view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1563241497 = messageFormatterFn((function(  ) {
  return function(d) { return "workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2062073146 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply Filter to Worksheets " + d.fieldCaption; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b106205028 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b240011462 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a989781303 = messageFormatterFn((function(  ) {
  return function(d) { return "All"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1912111949 = messageFormatterFn((function(  ) {
  return function(d) { return "Select all on dashboard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a993521080 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1183767749 = messageFormatterFn((function(  ) {
  return function(d) { return "Worksheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1778311240 = messageFormatterFn((function(  ) {
  return function(d) { return "Relationship"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1300001768 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a691596856 = messageFormatterFn((function(  ) {
  return function(d) { return "Show only selected worksheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b151413729 = messageFormatterFn((function(  ) {
  return function(d) { return "Show all worksheets in workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a901628261 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter will be applied to 1 worksheet."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b765693779 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter will be applied to " + d.count + " worksheets."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b467862399 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter search text"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a858861844 = messageFormatterFn((function(  ) {
  return function(d) { return "Select all worksheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a740207144 = messageFormatterFn((function(  ) {
  return function(d) { return "Select " + d.worksheetName; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1077852668 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter By"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b443006251 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort By"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a434622246 = messageFormatterFn((function(  ) {
  return function(d) { return "Alphabetic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2118864080 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source order"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b952501343 = messageFormatterFn((function(  ) {
  return function(d) { return "Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a603830175 = messageFormatterFn((function(  ) {
  return function(d) { return "Manual"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2139263024 = messageFormatterFn((function(  ) {
  return function(d) { return "Nested"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1476047259 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort Order"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1088821292 = messageFormatterFn((function(  ) {
  return function(d) { return "Ascending"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1383025708 = messageFormatterFn((function(  ) {
  return function(d) { return "Descending"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1590542138 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1655818490 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1410814403 = messageFormatterFn((function(  ) {
  return function(d) { return "Field Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a787778813 = messageFormatterFn((function(  ) {
  return function(d) { return "Move up"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b599368426 = messageFormatterFn((function(  ) {
  return function(d) { return "Move down"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b955194377 = messageFormatterFn((function(  ) {
  return function(d) { return "Move to top"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b727685727 = messageFormatterFn((function(  ) {
  return function(d) { return "Move to bottom"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a131510542 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1261262676 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b202826446 = messageFormatterFn((function(  ) {
  return function(d) { return "True"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2027329707 = messageFormatterFn((function(  ) {
  return function(d) { return "False"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b595442054 = messageFormatterFn((function(  ) {
  return function(d) { return ","; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1278458837 = messageFormatterFn((function(  ) {
  return function(d) { return "Parameter"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1300056718 = messageFormatterFn((function(  ) {
  return function(d) { return "Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1563161741 = messageFormatterFn((function(  ) {
  return function(d) { return "Value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2085797674 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in to reconnect"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1439999088 = messageFormatterFn((function(  ) {
  return function(d) { return "The username or password is not valid.  Check the database name and credentials and try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a571643587 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b37372856 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1432712825 = messageFormatterFn((function(  ) {
  return function(d) { return "Field separator"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1852282661 = messageFormatterFn((function(  ) {
  return function(d) { return "Text qualifier"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a576444500 = messageFormatterFn((function(  ) {
  return function(d) { return "Character set"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a622425352 = messageFormatterFn((function(  ) {
  return function(d) { return "Locale"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1524115027 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a156559142 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a717543662 = messageFormatterFn((function(  ) {
  return function(d) { return "Space"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a457557420 = messageFormatterFn((function(  ) {
  return function(d) { return "No match"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1583549560 = messageFormatterFn((function(  ) {
  return function(d) { return "Other"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1444330029 = messageFormatterFn((function(  ) {
  return function(d) { return "search"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b614866179 = messageFormatterFn((function(  ) {
  return function(d) { return "Comma"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b959670531 = messageFormatterFn((function(  ) {
  return function(d) { return "Tab"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a396836697 = messageFormatterFn((function(  ) {
  return function(d) { return "Semicolon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1270321445 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertical Bar"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1579049296 = messageFormatterFn((function(  ) {
  return function(d) { return "Trend Lines Options"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1868379190 = messageFormatterFn((function(  ) {
  return function(d) { return "Build separate trend lines based on the following dimensions:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1947347274 = messageFormatterFn((function(  ) {
  return function(d) { return "Model Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a819849079 = messageFormatterFn((function(  ) {
  return function(d) { return "Factors"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b302367087 = messageFormatterFn((function(  ) {
  return function(d) { return "Options"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b687987560 = messageFormatterFn((function(  ) {
  return function(d) { return "Exponential"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a76528456 = messageFormatterFn((function(  ) {
  return function(d) { return "Linear"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1727818734 = messageFormatterFn((function(  ) {
  return function(d) { return "Logarithmic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b423836072 = messageFormatterFn((function(  ) {
  return function(d) { return "Power"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b441958601 = messageFormatterFn((function(  ) {
  return function(d) { return "Polynomial"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a923177507 = messageFormatterFn((function(  ) {
  return function(d) { return "Degree:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1370509998 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1524134610 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow a trend line per color"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b198180353 = messageFormatterFn((function(  ) {
  return function(d) { return "Show confidence bands"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b253066800 = messageFormatterFn((function(  ) {
  return function(d) { return "Show recalculated line for highlighted or selected data points"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a248783163 = messageFormatterFn((function(  ) {
  return function(d) { return "Show tooltips"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a331772532 = messageFormatterFn((function(  ) {
  return function(d) { return "Force y-intercept to zero"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b799949357 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag table to union"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1997338155 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b485188897 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b495683726 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b372846168 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables here"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1771158506 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables in union: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a458193300 = messageFormatterFn((function(  ) {
  return function(d) { return "You can only union data from the same connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1231534210 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau can't find or recognize this table. Remove or replace the table"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a836152981 = messageFormatterFn((function(  ) {
  return function(d) { return "Only the first table in your selection will be added because union is not available for this database."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b603815914 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1212669750 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a395161007 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1799562621 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1830185684 = messageFormatterFn((function(  ) {
  return function(d) { return "Do you want to turn off the auto-generated layout and create a custom one?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1195625754 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Layout"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a835513770 = messageFormatterFn((function(  ) {
  return function(d) { return "Don't show this again"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a676088830 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1586131674 = messageFormatterFn((function(  ) {
  return function(d) { return "Close dialog"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b637250120 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom color"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1570128473 = messageFormatterFn((function(  ) {
  return function(d) { return "Decrement"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b426049886 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a valid date."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a880979299 = messageFormatterFn((function(  ) {
  return function(d) { return "Error icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b295924671 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b593315275 = messageFormatterFn((function(  ) {
  return function(d) { return "Increment"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b824369485 = messageFormatterFn((function(  ) {
  return function(d) { return "Info icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1541400977 = messageFormatterFn((function(  ) {
  return function(d) { return "Info: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a909784723 = messageFormatterFn((function(  ) {
  return function(d) { return "Next Month"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a505500216 = messageFormatterFn((function(  ) {
  return function(d) { return "No matches."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1458356336 = messageFormatterFn((function(  ) {
  return function(d) { return "(Optional)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b248595313 = messageFormatterFn((function(  ) {
  return function(d) { return "Previous Month"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2121673260 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a234654959 = messageFormatterFn((function(  ) {
  return function(d) { return "(Required)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b424975544 = messageFormatterFn((function(  ) {
  return function(d) { return "Success icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1188078362 = messageFormatterFn((function(  ) {
  return function(d) { return "Success: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1041600694 = messageFormatterFn((function(  ) {
  return function(d) { return "Wait indicator"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1111190031 = messageFormatterFn((function(  ) {
  return function(d) { return "Warning icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1893256685 = messageFormatterFn((function(  ) {
  return function(d) { return "Warning: "; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a553908461 = messageFormatterFn((function(  ) {
  return function(d) { return "Week " + d.weekNum; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a347884167 = messageFormatterFn((function(  ) {
  return function(d) { return "All data sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b686112079 = messageFormatterFn((function(  ) {
  return function(d) { return "Laptop"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1953268723 = messageFormatterFn((function(  ) {
  return function(d) { return "Phone"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b37021635 = messageFormatterFn((function(  ) {
  return function(d) { return "Tablet"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1016822261 = messageFormatterFn((function(  ) {
  return function(d) { return "Building an extract with your data..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1456136672 = messageFormatterFn((function(  ) {
  return function(d) { return "For sensitive data, change permissions on the published workbook to adjust access."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1389107356 = messageFormatterFn((function(  ) {
  return function(d) { return "If you're connecting to a lot of data, this could take some time. You'll receive an email when the dashboard is ready for you."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1279467625 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a354889190 = messageFormatterFn((function(  ) {
  return function(d) { return "Creating workbook..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1851628779 = messageFormatterFn((function(  ) {
  return function(d) { return "If you're connecting to a lot of data, this could take some time. You'll receive an email when the dashboard is ready for you."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1989638466 = messageFormatterFn((function(  ) {
  return function(d) { return "For use with"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1575499934 = messageFormatterFn((function(  ) {
  return function(d) { return "Available layouts"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2106951433 = messageFormatterFn((function(  ) {
  return function(d) { return "More like this"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1379445792 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1734214183 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1676883838 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1254004607 = messageFormatterFn((function(  ) {
  return function(d) { return "Select project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1120231480 = messageFormatterFn((function(  ) {
  return function(d) { return "Create workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1537425502 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Dashboard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a526459905 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in to " + d.CONNECTION_TYPE; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1384554378 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Sample Data for " + d.TEMPLATE_NAME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1385784428 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in to " + d.CONNECTION_TYPE + " for " + d.TEMPLATE_NAME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b88805786 = messageFormatterFn((function(  ) {
  return function(d) { return "Preview " + d.TEMPLATE_NAME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b962698757 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b737053074 = messageFormatterFn((function(  ) {
  return function(d) { return "Start from one of our pre-built dashboards. All you have to do is sign in to your data source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a738810947 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Sample Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b794508294 = messageFormatterFn((function(  ) {
  return function(d) { return "Got it"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1371265143 = messageFormatterFn((function(  ) {
  return function(d) { return "Rename Dashboard Item"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1261588545 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1649480957 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b297062076 = messageFormatterFn((function(  ) {
  return function(d) { return "Default Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b178675496 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b787691939 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a526233888 = messageFormatterFn((function(  ) {
  return function(d) { return "About"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1685868317 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a529667889 = messageFormatterFn((function(  ) {
  return function(d) { return "Alibaba AnalyticDB for MySQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a36135786 = messageFormatterFn((function(  ) {
  return function(d) { return "Aster Database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b878379990 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon Athena"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a304769575 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon Aurora"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1394799617 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon EMR Hadoop Hive"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1514513691 = messageFormatterFn((function(  ) {
  return function(d) { return "Azure SQL Data Warehouse"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a719844751 = messageFormatterFn((function(  ) {
  return function(d) { return "Google BigQuery"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b323775467 = messageFormatterFn((function(  ) {
  return function(d) { return "IBM BigInsights"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1491544902 = messageFormatterFn((function(  ) {
  return function(d) { return "Box"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a179360186 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel (Box)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b360966024 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON file (Box)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2097327821 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file (Box)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b251976215 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel (Dropbox)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a376227881 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON file (Dropbox)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a742331618 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file (Dropbox)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a812068308 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel (Google Drive)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1952828514 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON file (Google Drive)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1948895821 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file (Google Drive)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a400755597 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel (OneDrive)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a656432901 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON file (OneDrive)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a304311430 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file (OneDrive)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1819005814 = messageFormatterFn((function(  ) {
  return function(d) { return "TIBCO Data Virtualization"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1490504139 = messageFormatterFn((function(  ) {
  return function(d) { return "Text File (legacy)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2047024573 = messageFormatterFn((function(  ) {
  return function(d) { return "Databricks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b420249549 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Data Engine"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1490152413 = messageFormatterFn((function(  ) {
  return function(d) { return "IBM DB2"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b191843948 = messageFormatterFn((function(  ) {
  return function(d) { return "Denodo"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a69659019 = messageFormatterFn((function(  ) {
  return function(d) { return "Denormalized Cube"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1635899069 = messageFormatterFn((function(  ) {
  return function(d) { return "Alibaba Data Lake Analytics"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1301279158 = messageFormatterFn((function(  ) {
  return function(d) { return "Apache Drill"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a443869483 = messageFormatterFn((function(  ) {
  return function(d) { return "Dropbox"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b767357947 = messageFormatterFn((function(  ) {
  return function(d) { return "Oracle Essbase"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1456747146 = messageFormatterFn((function(  ) {
  return function(d) { return "Exasol"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b247750234 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel (legacy)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b439629832 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1552697774 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel Reader"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1941327795 = messageFormatterFn((function(  ) {
  return function(d) { return "Federated"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b675554314 = messageFormatterFn((function(  ) {
  return function(d) { return "Firebird"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b482863487 = messageFormatterFn((function(  ) {
  return function(d) { return "Other Databases (JDBC)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b339717732 = messageFormatterFn((function(  ) {
  return function(d) { return "Other Databases (ODBC)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b413466425 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Analytics"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1502817815 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a238897913 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Cloud SQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b681744288 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Drive"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1244700678 = messageFormatterFn((function(  ) {
  return function(d) { return "Pivotal Greenplum Database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1462880412 = messageFormatterFn((function(  ) {
  return function(d) { return "Cloudera Hadoop"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1172985143 = messageFormatterFn((function(  ) {
  return function(d) { return "Apache Hive"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a761770206 = messageFormatterFn((function(  ) {
  return function(d) { return "Hortonworks Hadoop Hive"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1839565797 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Data Engine"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1513078127 = messageFormatterFn((function(  ) {
  return function(d) { return "Impala"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b542013924 = messageFormatterFn((function(  ) {
  return function(d) { return "In-memory Federating"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1225028098 = messageFormatterFn((function(  ) {
  return function(d) { return "unknown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2001087453 = messageFormatterFn((function(  ) {
  return function(d) { return "Kognitio"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a828785243 = messageFormatterFn((function(  ) {
  return function(d) { return "Kyvos"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b877750222 = messageFormatterFn((function(  ) {
  return function(d) { return "MapR Hadoop Hive"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b40488797 = messageFormatterFn((function(  ) {
  return function(d) { return "MariaDB"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a429891360 = messageFormatterFn((function(  ) {
  return function(d) { return "MarkLogic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1721945942 = messageFormatterFn((function(  ) {
  return function(d) { return "Alibaba MaxCompute"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1710970784 = messageFormatterFn((function(  ) {
  return function(d) { return "MemSQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b762965016 = messageFormatterFn((function(  ) {
  return function(d) { return "MonetDB"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b710324319 = messageFormatterFn((function(  ) {
  return function(d) { return "MongoDB BI Connector"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a36110289 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Access"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2120500295 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Analysis Services"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1693892399 = messageFormatterFn((function(  ) {
  return function(d) { return "MySQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1017521754 = messageFormatterFn((function(  ) {
  return function(d) { return "unknown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1782403288 = messageFormatterFn((function(  ) {
  return function(d) { return "IBM PDA (Netezza)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b536641784 = messageFormatterFn((function(  ) {
  return function(d) { return "OData"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1368173853 = messageFormatterFn((function(  ) {
  return function(d) { return "unknown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1479783223 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial File"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1941528590 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial file"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b207561301 = messageFormatterFn((function(  ) {
  return function(d) { return "OneDrive"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a68814021 = messageFormatterFn((function(  ) {
  return function(d) { return "Oracle"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b298294546 = messageFormatterFn((function(  ) {
  return function(d) { return "Actian Matrix"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1478960607 = messageFormatterFn((function(  ) {
  return function(d) { return "PDF file"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b583529097 = messageFormatterFn((function(  ) {
  return function(d) { return "PDF Reader"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1721033984 = messageFormatterFn((function(  ) {
  return function(d) { return "PostgreSQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1242850276 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft PowerPivot"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1941165234 = messageFormatterFn((function(  ) {
  return function(d) { return "Presto"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1929156869 = messageFormatterFn((function(  ) {
  return function(d) { return "Progress OpenEdge"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1533458490 = messageFormatterFn((function(  ) {
  return function(d) { return "QuBole Presto"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a983175704 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon Redshift"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a559974476 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Server"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a509711974 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1354144090 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP NetWeaver Business Warehouse"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a196346749 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP HANA"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b3169820 = messageFormatterFn((function(  ) {
  return function(d) { return ""; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a826320378 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON file"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1691844200 = messageFormatterFn((function(  ) {
  return function(d) { return "SharePoint Lists"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b576728703 = messageFormatterFn((function(  ) {
  return function(d) { return "Snowflake"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b938094516 = messageFormatterFn((function(  ) {
  return function(d) { return "Spark SQL"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1301690090 = messageFormatterFn((function(  ) {
  return function(d) { return "Splunk"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b740511449 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Server"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a883319040 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft SQL Server"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1497453339 = messageFormatterFn((function(  ) {
  return function(d) { return "Statistical File"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2011793181 = messageFormatterFn((function(  ) {
  return function(d) { return "Statistical file"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1950947189 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP Sybase ASE"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1322773926 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP Sybase IQ"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1509692635 = messageFormatterFn((function(  ) {
  return function(d) { return "Teradata OLAP Connector"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a302986577 = messageFormatterFn((function(  ) {
  return function(d) { return "Teradata"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1010117867 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2011621775 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1910134567 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file reader"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1964235922 = messageFormatterFn((function(  ) {
  return function(d) { return "Actian Vector"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b424124955 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertica"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2028598888 = messageFormatterFn((function(  ) {
  return function(d) { return "VizEngine"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a283282733 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Data Connector"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2069178001 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Data Connector"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a622939505 = messageFormatterFn((function(  ) {
  return function(d) { return "ServiceNow ITSM"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b938905331 = messageFormatterFn((function(  ) {
  return function(d) { return "Anaplan"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b438320722 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Ads"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a143924061 = messageFormatterFn((function(  ) {
  return function(d) { return "Intuit QuickBooks Online (9.3-2018.1)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1321469557 = messageFormatterFn((function(  ) {
  return function(d) { return "Intuit QuickBooks Online"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1584018813 = messageFormatterFn((function(  ) {
  return function(d) { return "LinkedIn Sales Navigator"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1921065337 = messageFormatterFn((function(  ) {
  return function(d) { return "Marketo"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1083718472 = messageFormatterFn((function(  ) {
  return function(d) { return "Oracle Eloqua"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a861949686 = messageFormatterFn((function(  ) {
  return function(d) { return d.characters + " characters remaining"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a326308200 = messageFormatterFn((function(  ) {
  return function(d) { return "Character limit exceeded " + d.total + "/" + d.maximum; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1151564767 = messageFormatterFn((function(  ) {
  return function(d) { return "Column Details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1900307600 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1902861221 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection Type"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1481371710 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashboards"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1436851271 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source (extract)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1522955964 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source (live)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a397367475 = messageFormatterFn((function(  ) {
  return function(d) { return "Set by " + d.name; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1590518115 = messageFormatterFn((function(  ) {
  return function(d) { return "On this asset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1705618582 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream of this asset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1692101884 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.MESSAGE_COUNT, 0, pluralFuncs.en, { one: function() { return d.MESSAGE_COUNT_LOC + " data quality warning";}, other: function() { return d.MESSAGE_COUNT_LOC + " data quality warnings";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b680308171 = messageFormatterFn((function(  ) {
  return function(d) { return "Deprecated"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b575237532 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract refresh failure"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2031218969 = messageFormatterFn((function(  ) {
  return function(d) { return "Under maintenance"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b781706067 = messageFormatterFn((function(  ) {
  return function(d) { return "Stale data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1859391924 = messageFormatterFn((function(  ) {
  return function(d) { return "Sensitive data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a977125808 = messageFormatterFn((function(  ) {
  return function(d) { return "Warning"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a513868106 = messageFormatterFn((function(  ) {
  return function(d) { return "By " + d.displayName + " on " + d.updatedAt; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a718564318 = messageFormatterFn((function(  ) {
  return function(d) { return "Database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b597691831 = messageFormatterFn((function(  ) {
  return function(d) { return "Database Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1924080727 = messageFormatterFn((function(  ) {
  return function(d) { return d.databaseName + " (" + d.databaseHostName + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b255832546 = messageFormatterFn((function(  ) {
  return function(d) { return "Database (" + d.type + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a800733483 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1775061464 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Source"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a807745569 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1705898033 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1949909380 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Dashboards"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a80135977 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Databases"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b196723041 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Published Data Sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b771919466 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Flows"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1473123845 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Owners"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b830825511 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1085443318 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Tables"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b153246247 = messageFormatterFn((function(  ) {
  return function(d) { return "Users"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1807045322 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Workbooks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b94253865 = messageFormatterFn((function(  ) {
  return function(d) { return "New Message"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1875283076 = messageFormatterFn((function(  ) {
  return function(d) { return "Message"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1693713737 = messageFormatterFn((function(  ) {
  return function(d) { return "Subject"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2023141362 = messageFormatterFn((function(  ) {
  return function(d) { return "There is nothing here yet."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a241937627 = messageFormatterFn((function(  ) {
  return function(d) { return "Error"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a773556784 = messageFormatterFn((function(  ) {
  return function(d) { return "Still loading lineage information. Try again later."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1297151955 = messageFormatterFn((function(  ) {
  return function(d) { return "Showing partial results. Still loading lineage information. Try again later."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b206571763 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Catalog isn't fully configured. Ask your Tableau administrator to run the “tsm maintenance metadata-services enable” command."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b269662148 = messageFormatterFn((function(  ) {
  return function(d) { return "Information for this page not available. If you are the content owner, try republishing."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b90256509 = messageFormatterFn((function(  ) {
  return function(d) { return "The server encountered an error. Try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1332337478 = messageFormatterFn((function(  ) {
  return function(d) { return "Information for this page could not be loaded."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1588176313 = messageFormatterFn((function(  ) {
  return function(d) { return "Request size limit exceeded."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1257614966 = messageFormatterFn((function(  ) {
  return function(d) { return "Showing partial results. Request size limit exceeded."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a999220366 = messageFormatterFn((function(  ) {
  return function(d) { return "Request rate limit exceeded. Try again later."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1235974287 = messageFormatterFn((function(  ) {
  return function(d) { return "Showing partial results. Request rate limit exceeded. Try again later."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1377688036 = messageFormatterFn((function(  ) {
  return function(d) { return "Request time limit exceeded. Try again later."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a814284737 = messageFormatterFn((function(  ) {
  return function(d) { return "Showing partial results. Request time limit exceeded. Try again later."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1670348312 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1350919413 = messageFormatterFn((function(  ) {
  return function(d) { return "Field details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a880053148 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1599699167 = messageFormatterFn((function(  ) {
  return function(d) { return "File (" + d.type + ")"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1772060026 = messageFormatterFn((function(  ) {
  return function(d) { return "Filtered"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a955135128 = messageFormatterFn((function(  ) {
  return function(d) { return "Flows"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1164801416 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden User"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1318786922 = messageFormatterFn((function(  ) {
  return function(d) { return "Hostname"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1644431631 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1786585691 = messageFormatterFn((function(  ) {
  return function(d) { return "none"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1967358269 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.USER_COUNT, 0, pluralFuncs.en, { one: function() { return d.USER_COUNT_LOC + " recipient";}, other: function() { return d.USER_COUNT_LOC + " recipients";} }); }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b2032481287 = messageFormatterFn((function(  ) {
  return function(d) { return "Output Steps"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a666193606 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a263097985 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner's Id"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b822758589 = messageFormatterFn((function(  ) {
  return function(d) { return "Owners"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1580480975 = messageFormatterFn((function(  ) {
  return function(d) { return "Permission required"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1839446996 = messageFormatterFn((function(  ) {
  return function(d) { return "This warning is on an asset you do not have permissions to see."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2128445866 = messageFormatterFn((function(  ) {
  return function(d) { return "Permissions Required"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1133962811 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a397002769 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1956891838 = messageFormatterFn((function(  ) {
  return function(d) { return "Date & Time"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b432009775 = messageFormatterFn((function(  ) {
  return function(d) { return "Integer"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a800945665 = messageFormatterFn((function(  ) {
  return function(d) { return "Real"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b728665676 = messageFormatterFn((function(  ) {
  return function(d) { return "String"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a221357533 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1917040480 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1920495275 = messageFormatterFn((function(  ) {
  return function(d) { return "Send"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1917262649 = messageFormatterFn((function(  ) {
  return function(d) { return "Send Email"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a926697024 = messageFormatterFn((function(  ) {
  return function(d) { return "You don't have permissions to send email from here."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1337246328 = messageFormatterFn((function(  ) {
  return function(d) { return "Select users to send an email."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1168259351 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a168017185 = messageFormatterFn((function(  ) {
  return function(d) { return "Table"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a913641544 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1945236220 = messageFormatterFn((function(  ) {
  return function(d) { return "Tags"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b118634786 = messageFormatterFn((function(  ) {
  return function(d) { return "To"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1808423856 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Databases"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1668443654 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Published Data Sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b465634755 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Flows"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b180551869 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Tables"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a414072370 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Data Connector"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1767324468 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1796511660 = messageFormatterFn((function(  ) {
  return function(d) { return d.countX + "/" + d.countN; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2052355194 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a tag"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1773237779 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a930426128 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b790432351 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort Fields:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1203608173 = messageFormatterFn((function(  ) {
  return function(d) { return "Show aliases"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b605992246 = messageFormatterFn((function(  ) {
  return function(d) { return "Show hidden fields"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2123238333 = messageFormatterFn((function(  ) {
  return function(d) { return "rows"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1568205289 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source order"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1342062568 = messageFormatterFn((function(  ) {
  return function(d) { return "A to Z ascending"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b601400916 = messageFormatterFn((function(  ) {
  return function(d) { return "Z to A descending"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2006498169 = messageFormatterFn((function(  ) {
  return function(d) { return "A to Z ascending per table"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b33697475 = messageFormatterFn((function(  ) {
  return function(d) { return "Z to A descending per table"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1207975537 = messageFormatterFn((function(  ) {
  return function(d) { return "Modified"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b905187885 = messageFormatterFn((function(  ) {
  return function(d) { return "Bold"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1144714750 = messageFormatterFn((function(  ) {
  return function(d) { return "Italic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a526557204 = messageFormatterFn((function(  ) {
  return function(d) { return "Underline"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b211251926 = messageFormatterFn((function(  ) {
  return function(d) { return "No Color"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a233245907 = messageFormatterFn((function(  ) {
  return function(d) { return "Opacity"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2112852574 = messageFormatterFn((function(  ) {
  return function(d) { return "Light"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b860673404 = messageFormatterFn((function(  ) {
  return function(d) { return "Dark"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1802074118 = messageFormatterFn((function(  ) {
  return function(d) { return "Left Align"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2000373576 = messageFormatterFn((function(  ) {
  return function(d) { return "Center Align"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1493110359 = messageFormatterFn((function(  ) {
  return function(d) { return "Right Align"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b701944073 = messageFormatterFn((function(  ) {
  return function(d) { return "is On"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b285604499 = messageFormatterFn((function(  ) {
  return function(d) { return "is Off"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b88149325 = messageFormatterFn((function(  ) {
  return function(d) { return "Solid"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1429270392 = messageFormatterFn((function(  ) {
  return function(d) { return "Dotted"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1849409343 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b561577530 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1294059831 = messageFormatterFn((function(  ) {
  return function(d) { return "Not Refreshed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b44037609 = messageFormatterFn((function(  ) {
  return function(d) { return "Synced " + d.date; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1531427831 = messageFormatterFn((function(  ) {
  return function(d) { return "Refreshed " + d.day + " at " + d.time; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1440649608 = messageFormatterFn((function(  ) {
  return function(d) { return "On " + d.date; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1586697498 = messageFormatterFn((function(  ) {
  return function(d) { return "No Data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2006492817 = messageFormatterFn((function(  ) {
  return function(d) { return "Refreshed " + d.fromDate; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1664514831 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh Suspended"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a759918842 = messageFormatterFn((function(  ) {
  return function(d) { return "Week of " + d.date; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1209302986 = messageFormatterFn((function(  ) {
  return function(d) { return "There is no timeline for this metric."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2015117878 = messageFormatterFn((function(  ) {
  return function(d) { return "A timeline for this metric."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a638137238 = messageFormatterFn((function(  ) {
  return function(d) { return "An interactive timeline for this metric."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a51763021 = messageFormatterFn((function(  ) {
  return function(d) { return "Metric name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b811926022 = messageFormatterFn((function(  ) {
  return function(d) { return "Metric value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b76048902 = messageFormatterFn((function(  ) {
  return function(d) { return "Date for metric value"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a903125065 = messageFormatterFn((function(  ) {
  return function(d) { return "Time metric last refreshed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b149766006 = messageFormatterFn((function(  ) {
  return function(d) { return "No change"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1395647798 = messageFormatterFn((function(  ) {
  return function(d) { return "—"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1935868845 = messageFormatterFn((function(  ) {
  return function(d) { return d.first + " vs. " + d.last; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b574426170 = messageFormatterFn((function(  ) {
  return function(d) { return d.first + " vs.\n" + d.last; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1849797795 = messageFormatterFn((function(  ) {
  return function(d) { return d.start + " - " + d.end; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1045012688 = messageFormatterFn((function(  ) {
  return function(d) { return d.start + " -\n" + d.end; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a88607931 = messageFormatterFn((function(  ) {
  return function(d) { return "Week of " + d.week; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b30729170 = messageFormatterFn((function(  ) {
  return function(d) { return "Week of\n" + d.week; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1131814147 = messageFormatterFn((function(  ) {
  return function(d) { return "FY " + d.year; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1887008129 = messageFormatterFn((function(  ) {
  return function(d) { return d.fy + " " + d.qN; }
})(), Globalize("en").pluralGenerator({}));
}));
