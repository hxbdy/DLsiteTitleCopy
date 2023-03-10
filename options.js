function Save(){
    var message = document.getElementById('auto_copy').checked;
    chrome.storage.local.set({'auto_copy': message}, function () {});
}

function Load() {
    chrome.storage.local.get('auto_copy', function (items) {
        document.getElementById('auto_copy').value = items.auto_copy;
    });
}

document.addEventListener('DOMContentLoaded', Load);
document.getElementById('save_button').addEventListener('click', Save);
