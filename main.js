
function getTitle(){
  let title = document.getElementById("work_name");
  if(title!=null){
    chrome.storage.local.get('auto_copy', function (items) {
      if(items.auto_copy){
        // クリップボードに貼り付け
        navigator.clipboard.writeText(title.textContent);
      }
    });
    // ラップされているID差し替え
    title.id = "dummy";
  }
};

getTitle();
