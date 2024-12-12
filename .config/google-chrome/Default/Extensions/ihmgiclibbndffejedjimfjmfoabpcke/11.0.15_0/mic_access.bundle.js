/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/pages/mic_access/mic_access.js ***!
  \********************************************/
/**
 * Created by chernikovalexey on 8/14/16.
 *
 * =========================
 * To the AMO Reviewer Team:
 *
 * This file is not even used in Firefox, because your browser
 * does not support speech recognition out of the box. Hence, this file is only
 * executed on Google Chrome.
 */

window.addEventListener(
  "DOMContentLoaded",
  function () {
    window.speechRecognition =
      window.SpeechRecognition ||
      window.mozSpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.msSpeechRecognition;

    const body_el = document.getElementsByTagName("body")[0];
    const head_el = document.getElementsByClassName("head")[0];
    const note_el = document.getElementsByClassName("note")[0];
    const button_el = document.getElementsByTagName("button")[0];
    const subnote_el = document.getElementsByClassName("subnote")[0];

    document.title = chrome.i18n.getMessage("MicAccess_PageTitle");
    head_el.innerHTML = chrome.i18n.getMessage("MicAccess_Title");
    note_el.innerHTML = chrome.i18n.getMessage("MicAccess_Note");
    button_el.innerHTML = chrome.i18n.getMessage("MicAccess_UnlockButton");
    subnote_el.innerHTML = chrome.i18n.getMessage(
      "MicAccess_HowToUnlock",
      chrome.runtime.getURL("/")
    );

    const r = new window.speechRecognition();
    r.lang = "en-US";
    r.interimResults = true;
    r.continuous = true;

    r.onstart = function (e) {
      r.stop();
      window.close();
    };

    r.onerror = function (e) {
      if (e.error === "not-allowed") {
        body_el.style.marginTop = "60px";
        button_el.style.display = "inline-block";
        subnote_el.style.display = "block";

        button_el.onclick = async function () {
          await chrome.tabs.create({
            url: "chrome://settings/content/microphone",
          });
        };
      }
    };

    r.start();
  },
  false
);

/******/ })()
;
//# sourceMappingURL=mic_access.bundle.js.map