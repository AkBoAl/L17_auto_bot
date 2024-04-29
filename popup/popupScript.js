document.getElementById('start_bot_toggle').addEventListener('change', start_bot_fun);
document.getElementById('sound_toggle').addEventListener('change', sound_fun);
document.getElementById('vs_or_ut_toggle').addEventListener('change', vs_or_ut_fun);
document.getElementById('heal_or_no_toggle').addEventListener('change', heal_or_no_fun);
document.getElementById('sand_s_toggle').addEventListener('change', sand_s_fun);
document.getElementById('hail_toggle').addEventListener('change', hail_fun);
document.getElementById('craft_toggle').addEventListener('change', craft_fun);
document.getElementById('test_toggle').addEventListener('change', test_fun);

chrome.storage.local.get(['start_bot_ctrg'], function(result) {
    document.getElementById('start_bot_toggle').checked = result.start_bot_ctrg;
})
chrome.storage.local.get(['sound_ctrg'], function(result) {
    document.getElementById('sound_toggle').checked = result.sound_ctrg;
})
chrome.storage.local.get(['vs_or_ut_ctrg'], function(result) {
    document.getElementById('vs_or_ut_toggle').checked = result.vs_or_ut_ctrg;
})
 chrome.storage.local.get(['heal_or_no_ctrg'], function(result) {
    document.getElementById('heal_or_no_toggle').checked = result.heal_or_no_ctrg;
})
chrome.storage.local.get(['sand_s_ctrg'], function(result) {
    document.getElementById('sand_s_toggle').checked = result.sand_s_ctrg;
})
chrome.storage.local.get(['hail_ctrg'], function(result) {
    document.getElementById('hail_toggle').checked = result.hail_ctrg;
})
chrome.storage.local.get(['craft_ctrg'], function(result) {
    document.getElementById('craft_toggle').checked = result.craft_ctrg;
})
chrome.storage.local.get(['test_ctrg'], function(result) {
    document.getElementById('test_toggle').checked = result.test_ctrg;
})

function start_bot_fun() {
    chrome.storage.local.set({'start_bot_ctrg': document.getElementById('start_bot_toggle').checked})
}

function sound_fun() {
    chrome.storage.local.set({'sound_ctrg': document.getElementById('sound_toggle').checked})
}

function vs_or_ut_fun() {
    chrome.storage.local.set({'vs_or_ut_ctrg': document.getElementById('vs_or_ut_toggle').checked})
}

function heal_or_no_fun() {
    chrome.storage.local.set({'heal_or_no_ctrg': document.getElementById('heal_or_no_toggle').checked})
}

function sand_s_fun() {
    chrome.storage.local.set({'sand_s_ctrg': document.getElementById('sand_s_toggle').checked})
}

function hail_fun() {
    chrome.storage.local.set({'hail_ctrg': document.getElementById('hail_toggle').checked})
}

function craft_fun() {
    chrome.storage.local.set({'craft_ctrg': document.getElementById('craft_toggle').checked})
}

function test_fun() {
    chrome.storage.local.set({'test_ctrg' : document.getElementById('test_toggle').checked})
}

chrome.storage.onChanged.addListener(() => {
    chrome.storage.local.get(['start_bot_ctrg'], function(result) {
        document.getElementById('start_bot_toggle').checked = result.start_bot_ctrg;
    })
    chrome.storage.local.get(['sound_ctrg'], function(result) {
        document.getElementById('sound_toggle').checked = result.sound_ctrg;
    })
    chrome.storage.local.get(['vs_or_ut_ctrg'], function(result) {
        document.getElementById('vs_or_ut_toggle').checked = result.vs_or_ut_ctrg;
    })
    chrome.storage.local.get(['heal_or_no_ctrg'], function(result) {
        document.getElementById('heal_or_no_toggle').checked = result.heal_or_no_ctrg;
    })
    chrome.storage.local.get(['sand_s_ctrg'], function(result) {
        document.getElementById('sand_s_toggle').checked = result.sand_s_ctrg;
    })
    chrome.storage.local.get(['hail_ctrg'], function(result) {
        document.getElementById('hail_toggle').checked = result.hail_ctrg;
    })
    chrome.storage.local.get(['craft_ctrg'], function(result) {
        document.getElementById('craft_toggle').checked = result.craft_ctrg;
    })
    chrome.storage.local.get(['test_ctrg'], function(result) {
        document.getElementById('test_toggle').checked = result.test_ctrg;
    })
})