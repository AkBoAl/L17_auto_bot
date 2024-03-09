var int_toggle1 = document.getElementById("cbx");
var int_toggle2 = document.getElementById("cbx2");

document.getElementById("cbx").addEventListener('click', toggle1_fun);

document.getElementById("cbx2").addEventListener('click', toggle2_fun);

chrome.storage.local.get(['key'], function(result) {
	document.getElementById("cbx").checked = result.key;
});

chrome.storage.local.get(['key2'], function(result) {
	document.getElementById("cbx2").checked = result.key2;
});


setInterval(function() {
	chrome.storage.local.get(['key'], function(result) {
		document.getElementById("cbx").checked = result.key;
    })
}, 1200);

function toggle1_fun() {
	chrome.storage.local.set({"key": int_toggle1.checked});
}

function toggle2_fun() {
	chrome.storage.local.set({"key2": int_toggle2.checked});
}
