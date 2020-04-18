/**
 *   _ | _  )  _ ) \ \  / __ __| __|   __|      _ \  _ \   __|
 *     |   /   _ \  \  /     |   _|  \__ \     (   |   /  (_ |
 *    _| ___| ___/   _|     _|  ___| ____/ _) \___/ _|_\ \___|
 *
 *    U S E R-O V E R R I D E S.J S    F O R    F I R E F O X
 */

user_pref("_user.js.parrot", "syntax error @ README"); // troubleshooting pref - do not edit
/**
 * === README ===
 */

/**
 * name     : labwrat's user-overrides.js for Firefox
 * version  : 72r1 (based on Firefox v72)
 * author   : labwrat - 12bytes.org
 * credit   : the 'ghacks' crew (https://github.com/ghacksuserjs/ghacks-user.js)
 * website  : The Firefox Privacy Guide For Dummies!
 *          : https://12bytes.org/articles/tech/firefox/the-firefox-privacy-guide-for-dummies
 * website  : Firefox Configuration Guide for Privacy Freaks and Performance Buffs
 *          : http://12bytes.org/articles/tech/firefox-gecko-config-for-privacy-freaks-and-and-performance-buffs
 * code     : https://codeberg.org/12bytes.org/Firefox-user.js-supplement/src/branch/master
 *
 * NOTE TO SELF: search for *TODO*
 */

/**
 * !!! IMPORTANT !!!        HOW TO WORK WITH THIS FILE         !!! IMPORTANT !!!
 * =============================================================================
 *
 * this file is an optional supplement that may be apended to the 'ghacks'
 * user.js and used in conjunction with the 'Firefox Configuration Guide for
 * Privacy Freaks and Performance Buffs' or 'The Firefox Privacy Guide For
 * Dummies!' (https://12bytes.org/articles/tech/firefox)
 *
 * the versioning scheme for this file is 'NrN' where the first 'N' is a
 * number corresponding to the major version of Firefox for which this file is
 * intended, the 'r' stands for 'revision' and the last 'N' is the revision
 * number, so '12r3' would indicate this file is for Firefox 12.x and it is the
 * 3rd revision of the file
 *
 * preferences may be tagged with one or more of the following:
 *
 * [SET]..............the value must be checked!!!
 * [UNBREAK=(value)]..least likely to cause web breakage but more likely to compromise privacy
 * [SAFE=(value)].....a safe value
 * [PRIV=(value)].....a value which is more protective of privacy but may cause web breakage
 *
 * suggested values are marked with an asterik (ex: [*PRIV=(value)] )
 *
 * THIS FILE CONTAINS MY PERSONAL SETTINGS, SOME OF WHICH MAY NOT WORK FOR YOU
 * AND THEREFORE IT IS IMPORTANT TO GO THROUGH IT AND MAKE THE REQUIRED CHANGES
 * - AT A MINIMUM YOU SHOULD EVALUATE ALL SECTIONS AND PREFERENCES TAGGED WITH
 * [SET]
 *
 * TO MAKE UPDATING THIS FILE EASIER, DO NOT EDIT ANY EXISTING PREFERENCES
 * EXCEPT THOSE IN THE USER CUSTOMIZATION SECTION - instead, copy the entire
 * line you want to change in this file or the 'ghacks' user.js file to the USER
 * CUSTOMIZATION section and change the preference value there, then when you
 * update this file you can replace everything except your custom preferences -
 * to make checking for updates easy, subscribe to the 'Thunderbird' category at:
 * https://12bytes.org/subscribe
 *
 * CUSTOM PREFERENCES THAT YOU ADD AND LATER REMOVE WILL REMAIN ACTIVE IN
 * prefs.js unless they are duplicated elsewhere in this file or the 'ghacks'
 * user.js - to reset/remove a custom preference, the suggested method is to
 * comment it out by preceeding it with 2 forward slaches ( // ) and then run
 * the prefsCleaner.sh (Linux) or prefsCleaner.bat (Windows) script - make sure
 * Firefox is closed when you run the prefsCleaner script - see:
 * https://github.com/ghacksuserjs/ghacks-user.js/wiki/3.1-Resetting-Inactive-Prefs-[Scripts]
 *
 * WHEN YOU ARE FINISHED EDITING, append this file to the 'ghacks' user.js using
 * their updater.sh (linux) or updater.bat (windows) script and then run the
 * prefsCleaner script
 *
 * YOU MUST PERFORM THE FOLLOWING INTEGRITY CHECKS IF YOU MAKE ANY CHANGES TO
 * THIS FILE (you may want to disable your network connection):
 *
 * Firefox reads the user.js file, to which this file will be appended, from top
 * to bottom and if there is a syntax error in the file, no preferences beyond
 * that point are read, thus preforming these integrity checks is crucial
 *
 * INTEGRITY CHECK 1: start Firefox and open the Browser Console from the
 * Firefox Web Developer toolbox (Ctrl+Shift+J might work) and check for any
 * error messages related to preferences - to make these errors easy to
 * find, filter the output using "user.js" - following is a sample error:
 *
 * /home/[user]/.mozilla/[profile name]/user.js:[line no.]: prefs parse error: [error description]
 *
 * [line no.] will be a line number corrasponding to the line in user.js where
 * the error lies - if you have not edited user.js, then search this file for
 * the same preference and correct the error here, then run the 'ghacks' updater
 * script and restart Firefox
 *
 * INTEGRITY CHECK 2: load about:config in the address bar and find the
 * "_user.js.parrot" troubleshooting preference and check that its value is
 * "USER SETTINGS LOADED" - if it is not then there is a syntax error in which
 * case you need to search this file for the value of the "_user.js.parrot"
 * troubleshooting preference - the error will be between that point and the
 * very next "_user.js.parrot" troubleshooting preference - if you're
 * comfortable with regular expressions the following may help locate the error
 * - this expression should highlight all lines except those containing with
 * errors:
 *
 * ^user_pref\("[a-zA-Z0-9._-]*", (?:true|false|""|\d*|"[!a-zA-Z0-9]*[ \w:/.%-@]*[a-zA-Z0-9]*"|"#[A-Z0-9]+")\);
 */

/**
 * === NEW PREFS *TODO* ===
 */
// v72
// pref("signon.management.page.showPasswordSyncNotification", true);
// pref("signon.storeSignons", true);

/**
 * === TESTING *TODO* ===
 *
 * [SET] these are preferences i'm testing or which will probably appear in the
 * 'ghacks' user.js in the future
 *
 * if the value of the "_user.js.parrot" pref in about:config is
 * "syntax error @ TESTING" then there is a syntax
 * error between this point and the very next "_user.js.parrot" pref
 */
user_pref("_user.js.parrot", "syntax error @ TESTING"); // troubleshooting pref - do not edit
/**/
// CSP for add-ons - see: https://blog.mozilla.org/addons/2019/12/12/test-the-new-csp-for-content-scripts/
user_pref("extensions.content_script_csp.enabled", false);
user_pref("extensions.content_script_csp.report_only", true);
// dynamically colored scroll bars
user_pref("widget.disable-dark-scrollbar", true);
// spoof english for increased privacy
user_pref("privacy.spoof_english", 2);


/**
 * === GHACKS DIFFS ===
 *
 * [SET] ALL OF THE PREFS IN THIS SECTION NEED TO BE CHECKED!
 *
 * these prefs are duplicates of *active* 'ghacks' user.js prefs, some of which
 * may have the same value but are repeated here for convenience so you don't
 * have to sift through the 'ghacks' user.js, and also because some are
 * important prefs that are likely to affect web functionality
 *
 * if the value of the "_user.js.parrot" pref in about:config is
 * "syntax error @ GHACKS DIFFS" then there is a syntax error
 * between this point and the very next "_user.js.parrot" pref
 */
user_pref("_user.js.parrot", "syntax error @ GHACKS DIFFS"); // troubleshooting pref - do not edit
/**/
user_pref("browser.display.use_document_fonts", 0);                 // [UNBREAK=1] [*PRIV=0] whether to allow websites to use fonts they specify - 0=no, 1=yes - setting this to '0' will uglify many websites - value can be easily flipped with the Toggle Fonts add-on
user_pref("browser.link.open_newwindow", 1);                        // controls when new window/tab should be opened - 1=open links that open new windows in current tab, 2=open links that open new windows in new window, 3=open links that open new windows in new tab
user_pref("browser.sessionstore.interval", 9999999);                // [UNBREAK=(default value)] interval in seconds at which session data is stored (restore session after browser crash) - '9999999' essentially disables session store to reduce disk writes - previous opened tabs will still be restored on startup
user_pref("browser.startup.page", 3);                               // what to load when Firefox starts - 0=a blank page, 1=your home page, 2=the last visited page, 3=resume the previous session
user_pref("dom.allow_cut_copy", true);                              // [UNBREAK=true] [*PRIV=false] whether to allow JavaScript to manipullate the clipboard (cut/copy) - 'false' can break some sites (d.tube copy embed code)
user_pref("dom.event.clipboardevents.enabled", true);               // [UNBREAK=true] [*PRIV=false] whether to allow JS pasting - 'false' breaks TinyMCE editor keyboard paste (Ctrl+V) such as is used by WordPress, possibly others
user_pref("dom.popup_allowed_events", "click dblclick");            // [UNBREAK=("click dblclick" or default value)] [PRIV=""] allow detection of most default mouse events for JS pop-ups - events are: change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu
user_pref("dom.push.enabled", false);                               // [UNBREAK=true] [*PRIV=false] whether to enable push notifications so that a website you subscribed to that uses this feature can notify you when it posts new content, even when its tab is closed
user_pref("dom.serviceWorkers.enabled", true);                      // [UNBREAK=true] [*PRIV=false] Service Workers are scripts that run in the background - disabling this will disable some/most crypto-currency miners and potentially prevent other baddies, however this may also break the occasional website - can set to 'true' and control workers per-domain with uMatrix
user_pref("gfx.font_rendering.opentype_svg.enabled", false);        // [UNBREAK=true] [*PRIV=false] whether to enable rendering of SVG OpenType fonts
user_pref("javascript.options.wasm", false);                        // [UNBREAK=true] [*PRIV=false] whether to enable WebAssembly - not yet widely used and opens the door to many vulnerabilities
user_pref("layout.css.visited_links_enabled", true);                // [*PRIV=false] whether to color visited links differently than non-visited links
user_pref("media.getusermedia.audiocapture.enabled", false);        // [UNBREAK=true] [*PRIV=false] whether to allow sharing of browser sound
user_pref("media.getusermedia.browser.enabled", false);             // [UNBREAK=true] [*PRIV=false] whether to allow sharing browser content
user_pref("media.getusermedia.screensharing.enabled", false);       // [UNBREAK=true] [*PRIV=false] whether to allow screen sharing
user_pref("media.peerconnection.enabled", false);                   // [UNBREAK=true] [*PRIV=false] whether to enable WebRTC (Web Real-Time Communication) - IP leakage can be controlled with uBlock
user_pref("network.http.referer.XOriginPolicy", 0);                 // [UNBREAK=0] [*PRIV=1] when to send the referring page address to the server - 0=always, 1=if base domains match, 2=if hosts match - can set to '0' and control with uMatrix - '1' may(?) break embedded Vimeo videos on 3rd party websites
user_pref("privacy.clearOnShutdown.cookies", false);                // [PRIV=true] whether to clear cookies on shutdown - set to 'true' if sharing Firefox with another user - can set this to 'false' and use an add-on like Site Bleacher
user_pref("privacy.clearOnShutdown.formdata", false);               // [PRIV=true] whether to clear Form & Search History data on shutdown - set to 'true' if sharing Firefox with another user
user_pref("privacy.clearOnShutdown.history", false);                // [PRIV=true] whether to clear history on shutdown - set to 'true' if sharing Firefox with another user
user_pref("privacy.clearOnShutdown.sessions", false);               // [PRIV=true] whether to clear Active Logins on shutdown - set to 'true' if sharing Firefox with another user
user_pref("privacy.firstparty.isolate", true);                      // [UNBREAK=false] [*PRIV=true] whether to enable First Party Isolation (FPI) - HIGHLY SUGGESTED TO ENABLE THIS - IF DISABLING FPI, READ RELEVANT SECTIONS OF 'ghecks' USER.JS - only reason i duplicated this pref here is to make people aware of it because it affects a lot of things
user_pref("privacy.resistFingerprinting.letterboxing", false);      // [*PRIV=true] whether to use a generic viewport size to reduce fingerprinting entropy - the result will be that webpage content will/may not fill the entire viewport (the part of the browser that displayes web content) - WARNING: setting to 'false' is likely to greatly increase ability of websites to fingerprint the browser
user_pref("privacy.userContext.enabled", false);                    // [SET] whether to enable Container tabs - personally i disble this in favor of FPI (privacy.firstparty.isolate)
user_pref("privacy.userContext.ui.enabled", false);                 // [SET] whether to enable the UI for Container tabs
user_pref("security.OCSP.enabled", 0);                              // [*SAFE=1] when to use OCSP fetching to confirm validity of certificates - 0=disabled, 1=enabled, 2=enabled for EV certificates only - you should typically NOT disable this
user_pref("security.ask_for_password", 0);                          // [PRIV=1] when to ask for the master password - 0=the first time it's needed, 1=every time it's needed, 2=every n minutes where n is the value of security.password_lifetime.
user_pref("security.cert_pinning.enforcement_level", 0);            // [*SAFE=(1 or 2)] whether Firefox can check which certificate authorities issued SSL certificates for the site - 0=disabled 1=allow user MiTM (such as your antivirus), 2=strict - 2 may cause key pinning (HPKP) errors; MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
user_pref("security.mixed_content.block_display_content", false);   // [UNBREAK=false] [PRIV=true] whether to allow insecure (http) static content, such as images, on secure pages (https)
user_pref("signon.formlessCapture.enabled", true);                  // [SAFE=false] whether password manager can capture login credentials when a proper login form is not detected
user_pref("webgl.disable-extensions", false);                       // [UNBREAK=false] [*PRIV=true] whether to enable WebGL extensions - 'true' may break Google Earth Street View on Google Maps
user_pref("webgl.disabled", false);                                 // [UNBREAK=false] [*PRIV=true] whether to enable WebGL - `true` may break some sites (Google Earth Street View on Google Maps?) - WebGL appears to be dependent upon JS being enabled - can set to 'false' and control fingerprinting with CanvasBlocker
user_pref("webgl.enable-webgl2", true);                             // [UNBREAK=true] [*PRIV=false] whether to enable WebGL 2
user_pref("webgl.min_capability_mode", false);                      // [UNBREAK=false] [*PRIV=true] whether to restrict WebGL capabilities - 'true' breaks Google Earth Street View on Google Maps

/**
 * -----------------------
 * USER CUSTOM PREFERENCES
 * -----------------------
 */

/**
 *  !!! IMPORTANT !!!  !!! IMPORTANT !!!  !!! IMPORTANT !!!  !!! IMPORTANT !!!
 *  ==========================================================================
 *
 * TO CHANGE THE VALUE OF A PREFERENCE IN THE 'GHACKS' USER.JS OR THE 'GHACKS
 * --------------------------------------------------------------------------
 * DIFFS' SECTION ABOVE:
 * ---------------------
 * 1. exit Firefox
 * 2. copy the entire preference line to the CUSTOM CODE section below
 * 3. change the preference value and save your changes
 * 4. run the 'ghacks' updater script
 *
 * TO RESET/REMOVE/DELETE A CUSTOM PREFERENCE:
 * -------------------------------------------
 * 1. exit Firefox
 * 2. comment out the preference(s) by prefixing it with 2 forward slashes (//)
 *    and save your changes (do not move it to the DEPRECIATED/REMOVED PREFS
 *    section below)
 * 3. run the 'ghacks' updater script
 * 4. run the 'ghacks' prefsCleaner script
 *
 * TO FIND THE DEFAULT VALUE OF A PREFERENCE:
 * ------------------------------------------
 * 1. find the preference in about:config
 * 2. reset the preference
 * note that not all preferences are listed in the Config Editor
 */

/**
 * if the value of the "_user.js.parrot" pref in about:config is
 * "syntax error @ USER CUSTOM PREFERENCES" then there is a syntax
 * error between this point and the very next "_user.js.parrot" pref
 */
user_pref("_user.js.parrot", "syntax error @ USER CUSTOM PREFERENCES");
/**/
/**
 * YOUR CUSTOM CODE GOES BELOW THIS LINE
 * -------------------------------------
 */

/**
 * [SET] the following preferences adjusts the smooth scrolling feature of
 * Firefox when using a mouse wheel or keyboard keys to scroll
 */
user_pref("general.smoothScroll.lines.durationMaxMS", 400);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMinMS", 200);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600);    // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 300);    // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.other.durationMaxMS", 400);         // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.other.durationMinMS", 200);         // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.pages.durationMaxMS", 400);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMinMS", 200);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("mousewheel.acceleration.factor", 10);                    // sets acceleration factor if mouse wheel.acceleration.start > -1
user_pref("mousewheel.acceleration.start", 0);                      // when to apply mouse wheel.acceleration.factor (after how many scroll clicks of mouse wheel) - value must be greater than -1
user_pref("mousewheel.default.delta_multiplier_x", 85);             // sets the x-axis step size
user_pref("mousewheel.default.delta_multiplier_y", 85);             // sets the y-axis step size
user_pref("mousewheel.default.delta_multiplier_z", 85);             // sets the z-axis step size
user_pref("mousewheel.min_line_scroll_amount", 10);                 // if the CSS line height is smaller than this value in pixels, each scroll click will scroll this amount

/**
 * misc. personal preferences
 */
user_pref("accessibility.tabfocus", 3);                             // which elements can be focused using the Tab key - 1=text fields, 2=all form fields except text, 4=links ony (values can be added together)
user_pref("app.update.service.enabled", true);                     // [SET] [UNBREAK=true] whether to enable Firefox update service (Windows only)
user_pref("app.update.staging.enabled", true);                     // [SET] [UNBREAK=true] whether to enable Firefox update staging - *TODO* - better description
user_pref("app.update.silent", false);                              // [SET] whether to show notifications when updates are applied
user_pref("browser.backspace_action", 2);                           // what action to take when the backspace key is pressed - 0=previous page, 1=scroll up, 2=do nothing
user_pref("browser.bookmarks.editDialog.maxRecentFolders", 12);     // how many recent folders to display when adding a bookmark
user_pref("browser.bookmarks.max_backups", 5);                      // how many backups of bookmark to keep
user_pref("browser.contentblocking.report.lockwise.enabled", false);    // [SET] [SAFE=true] [*PRIV=false] whether to enable Lockwise reporting of sites visited to check if they've been breached
user_pref("browser.contentblocking.report.monitor.enabled", false);     // [SET] [UNBREAK=true] *TODO* unsure - assumend to affect reporting of blocked content
user_pref("browser.download.autohideButton", false);                // whether to auto-hide the Downloads button
user_pref("browser.download.folderList", 2);                        // where to save downloaded files - 0=desktop 1=downloads 2=last used
user_pref("browser.download.forbid_open_with", false);              // whether to allow the `open with` option when downloading a file
user_pref("browser.library.activity-stream.enabled", false);        // whether to enable Activity Stream recent Highlights in the Library
user_pref("browser.link.open_newwindow.override.external", 3);      // open links from external programs in: 1=the current tab, 2=a new window, 3=a new tab
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);   // disable recommended add-ons
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable recommended features
user_pref("browser.safebrowsing.blockedURIs.enabled", true);       // [SET] [SAFE=true] whether to use Mozilla's blocklist for known Flash tracking/fingerprinting - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.downloads.enabled", true);         // [SET] [SAFE=true] whether to enable 'Safe Browsing', downloads (list of sites provided by Google) - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", true);              // [SET] [SAFE=true] whether to block dangerous downloads - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", true);         // [SET] [SAFE=true] whether to block dangerous websites - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);   // [SET] [SAFE=true] whether to block potentially unwanted downloads - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", true);               // [SET] [SAFE=true] whether to block uncommon downloads - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.malware.enabled", true);           // [SET] [SAFE=true] whether to enable 'Safe Browsing', malware (list of sites provided by Google) - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.phishing.enabled", true);          // [SET] [SAFE=true] whether to enable 'Safe Browsing', phishing (list of sites provided by Google) - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.provider.google.gethashURL", "");   // [SET] [SAFE=(default value)] [PRIV=""] URL used to check integrity of safe browsing lists
user_pref("browser.safebrowsing.provider.google.reportURL", "");    // [SAFE=(default value)] [PRIV=""] URL where safe browsing reports are sent
user_pref("browser.safebrowsing.provider.google.updateURL", "");    // [SET] [SAFE=(default value)] [PRIV=""] URL where safe browsing lists are located
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");  // [SET] [SAFE=(default value)] [PRIV=""] URL used to check integrity of safe browsing lists
user_pref("browser.safebrowsing.provider.google4.reportURL", "");   // [PRIV=""] URL where safe browsing reports are sent
user_pref("browser.safebrowsing.provider.google4.updateURL", "");   // [SET] [SAFE=(default value)] [PRIV=""] URL where safe browsing lists are located
user_pref("browser.safebrowsing.reportPhishURL", "");               // [PRIV=""] URL where safe browsing reports are sent
user_pref("browser.search.widget.inNavBar", false);                  // [SET] whether to show the search bar on the navigation bar
user_pref("browser.sessionstore.interval.idle", 9999999);           // [UNBREAK=(default value)] interval in seconds at which session data is stored when browser is idle (restore session after browser crash) - '9999999' essentially disables session store to reduce disk writes - previous opened tabs will still be restored on startup
user_pref("browser.startup.homepage_override.mstone", "ignore");    // [SAFE=(default value)] whether to open a special page after a major browser update
user_pref("browser.tabs.closeWindowWithLastTab", false);            // whether to close the browser when the last tab is closed
user_pref("browser.tabs.loadDivertedInBackground", true);           // whether to keep Firefox in the background when loading a link from an external application
user_pref("browser.tabs.loadInBackground", false);                  // whether to focus new tabs opened from a link
user_pref("browser.tabs.warnOnClose", false);                       // whether you want to be bugged when you close multiple tabs
user_pref("browser.tabs.warnOnCloseOtherTabs", false);              // whether you want to be bugged when you close multiple tabs other than the one from which the option was invoked
user_pref("browser.tabs.warnOnOpen", false);                        // whether to warn when too many tabs are opened
user_pref("browser.triple_click_selects_paragraph", false);         // whether to select paragraphs on triple click
user_pref("browser.urlbar.autoFill", true);                         // whether to allow auto-complete of text entered in the location bar
user_pref("browser.urlbar.clickSelectsAll", true);                  // whether a single click selects everything in the address bar
user_pref("browser.urlbar.doubleClickSelectsAll", false);           // whether a double click selects a string segment or everything in address bar
user_pref("browser.urlbar.oneOffSearches", false);                  // [SET] whether to allow searching from the address bar
user_pref("browser.urlbar.suggest.openpage", false);                // whether to suggest currently open pages when entering text in the address bar
user_pref("devtools.aboutdebugging.showSystemAddons", true);        // whether to show system add-ons in about:debugging
user_pref("dom.push.connection.enabled", false);                    // [UNBREAK=true] [*PRIV=false] *TODO* unknown - assumed to be related to push notifications
user_pref("dom.push.userAgentID", "");                              // user-agent ID for push services
user_pref("dom.webnotifications.enabled", true);                   // [UNBREAK=true] [*PRIV=false] whether to enable web notifications
user_pref("dom.webnotifications.serviceworker.enabled", true);     // [UNBREAK=true] [*PRIV=false] whether to enable background web notifications
user_pref("extensions.screenshots.disabled", true);                 // [SET] [PRIV=true] disable the screenshots system add-on
user_pref("extensions.screenshots.upload-disabled", true);          // [SET] [*PRIV=true] disable screenshots uploading
user_pref("extensions.update.autoUpdateDefault", false);            // [SET] [*PRIV=false] whether to allow automatic installation of updated add-ons - i HIGHLY recommend setting this to 'false' and reading all change logs, etc., before installing add-on updates
user_pref("extensions.update.enabled", true);                      // [SET] [*SAFE=true] [UNBREAK=true] whether to enable automatic checking (not installation) for extension updates
user_pref("extensions.pocket.enabled", false);                      // [SET] [*PRIV=false] set to 'true' if you use the Pocket service, a "save for later" cloud service
user_pref("extensions.webextensions.restrictedDomains", "");        // [*UNBREAK=(default value)] [PRIV=""] a list of domains where WebExtensions (add-ons) are not allowed to run
user_pref("extensions.webextensions.userScripts.enabled", true);    // whether to enable the WebExtension API for user scripts (see: https://wiki.mozilla.org/WebExtensions/UserScripts)
user_pref("findbar.highlightAll", true);                            // whether to highlight all instances of search terms entered in the Find Bar
user_pref("font.name.serif.x-unicode", "Bitstream Vera Sans");      // font preference
user_pref("font.name.serif.x-western", "Bitstream Vera Sans");      // font preference
user_pref("full-screen-api.warning.delay", 0);                      // how long wait before displaying full screen warning
user_pref("full-screen-api.warning.timeout", 0);                    // how long to display a warning when a page enters full-screen mode
user_pref("general.autoScroll", false);                             // whether to enable auto-scrolling - WARNING: see note in 'ghacks' user.js about this pref
user_pref("identity.fxaccounts.enabled", true);                    // [SET] [UNBREAK=true] [*PRIV=false] whether to enable Firefox Accounts and Sync - if you want to sync browser data between devices, consider using a self-hosted solution like NextCloud
user_pref("image.animation_mode", "once");                          // [SET] how to display animated GIF images - none=do not animate, once=play animation once, normal=play the animation normally
user_pref("layout.css.font-loading-api.enabled", true);             // [UNBREAK=true] [*PRIV=false] whether to enable CSS Font Loading API
user_pref("layout.spellcheckDefault", 2);                           // what to spell-check - 0=disabled, 1=enable for multi-line text controls, 2=enable for single and multi-line text controls
user_pref("mathml.disabled", true);                                 // [UNBREAK=false] [*PRIV=true] mathematical markup language - suggested to disable because of security concerns
user_pref("media.autoplay.default", 1);                             // [SET] media playback - 0=allow all, 1=block non-muted, 2=prompt (removed in FF66), 5=block all (FF69+)
user_pref("middlemouse.paste", true);                               // whether to allow pasting with middle mouse button (Linux) - WARNING: do NOT set to 'true' if 'general.autoScroll' is enabled
user_pref("mousewheel.with_shift.action", 0);                       // what to do when Shift key is used with the mouse wheel - 0=do nothing, 1=scroll contents, 2=go back or forward in history, 3=zoom contents in or out
user_pref("network.manage-offline-status", false);                  // whether to auto-enter work off-line mode if network drops
user_pref("network.trr.mode", 0);                                   // [SET] [UNBREAK=(default value)] [PRIV=3] whether to enable Trusted Recursive Resolver (DNS over HTTPS) - 0=standard moded, 1=let Firefox choose fastest method, 2=encrypted DNS with unencrypted fallback, 3=encrypted DNS only, 4=for testing, 5=essentially same as '0' - it is strongly suggested to encrypt DNS lookups by setting this to 2 or 3 unless you are encrypting DNS another way or using an encrypted VPN which also offers DNS - IMPORTANT! enabling this alone does not provide DNS encryption, see: https://tinyurl.com/ycp3cbbp
user_pref("nglayout.enable_drag_images", false);                    // whether to allow image dragging - also seems to have an effect on highlighting and dragging text - this feature can be very annoying
user_pref("privacy.trackingprotection.cryptomining.enabled", true);    // [SET] [*SAFE=true] whether to enable cryptomining protection - this is probably better handled by uBlock and appropiate filter lists
user_pref("privacy.trackingprotection.enabled", true);             // [SET] [*SAFE=true] whether to enable tracking protection - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("privacy.trackingprotection.pbmode.enabled", true);      // [SET] [*SAFW=true] whether to enable tracking protection in Private Browsing mode - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("reader.parse-on-load.enabled", true);                   // whether to create the Reader View version of page when page is first loaded
user_pref("signon.management.page.breach-alerts.enabled", true);   // [SET] [*SAFE=true] [PRIV=false] whether to display an alert when you visit a website for which log-on credentials are stored which has been previously breached
user_pref("startup.homepage_override_url", "");                     // [PRIV=""] 'What's New' page after browser update
user_pref("startup.homepage_welcome_url", "");                      // [PRIV=""] 'Welcome' URL
user_pref("startup.homepage_welcome_url.additional", "");           // [PRIV=""] 'Welcome' URL, additional
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // (ff 69+) whether to allow styling chrome with userChrome.css
user_pref("ui.caretWidth", 2);                                      // width of the blinking caret in edit controls
user_pref("ui.popup.disable_autohide", false);                      // (for developers) useful if you forget to disable 'Disable Popup Auto-Hide' option in Browser Toolbox
user_pref("view_source.wrap_long_lines", true);                     // whether to wrap long lines when viewing page source
user_pref("signon.generation.enabled", false);                      // [*SAFE=true] whether to suggest and generate strong passwords

/*
 * -------------------------------------
 * YOUR CUSTOM CODE GOES ABOVE THIS LINE
 */

/**
 * === DEPRECIATED/REMOVED PREFS ===
 *
 * DO NOT EDIT THIS SECTION
 */
// user_pref("clipboard.autocopy", );
// user_pref("clipboard.plainTextOnly", );
// user_pref("dom.forms.datetime", );
// user_pref("dom.push.serverURL", "");
// user_pref("dom.storage.next_gen", );
// user_pref("intl.locale.requested", );
// user_pref("network.connectivity-service.DNSv4.domain", );
// user_pref("network.connectivity-service.DNSv6.domain", );
// user_pref("network.connectivity-service.IPv4.url", );
// user_pref("network.connectivity-service.IPv6.url", );
// user_pref("network.dnsCacheExpiration", );
// user_pref("network.dnsCacheExpirationGracePeriod", );
// user_pref("signon.showAutoCompleteFooter", );
// user_pref("webgl.dxgl.enabled", );
// user_pref("widget.content.gtk-theme-override", );

/**
 *  !!! IMPORTANT !!!  !!! IMPORTANT !!!  !!! IMPORTANT !!!  !!! IMPORTANT !!!
 *  ==========================================================================
 *
 * below is the "_user.js.parrot" preference you must check in about:config -
 * if the value is "SUCCESS! USER SETTINGS LOADED" then there was no syntax
 * error above this point
 */
user_pref("_user.js.parrot", "SUCCESS! USER SETTINGS LOADED"); // troubleshooting pref - do not edit
