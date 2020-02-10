chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  var github_expression = /^(https:\/\/github\.com\/pixta-dev\/)\b(\S)+(\/pull)\/([0-9]*)$/gi;
  var github_regex = new RegExp(github_expression);
  var gitlab_vn_expression = /^(https:\/\/git\.pixtavietnam\.com\/pixta-dev\/)\b(\S)+(\/merge_requests)\/([0-9]*)$/gi;
  var gitlab_vn_regex = new RegExp(gitlab_vn_expression);
  var gitlab_vn_old_expression = /^(https:\/\/gitlab\.pixtavietnam\.com\/pixta-dev\/)\b(\S)+(\/merge_requests)\/([0-9]*)$/gi;
  var gitlab_vn_old_regex = new RegExp(gitlab_vn_old_expression);	
  if (changeInfo.status == 'complete' && tab.url.match(github_regex)) {
    chrome.tabs.sendMessage(tab.id, {"message": "github_load"});
  } else if (changeInfo.status == 'complete' && tab.url.match(gitlab_vn_regex)) {
    chrome.tabs.sendMessage(tab.id, {"message": "gitlab_vn_load"});
  } else if (changeInfo.status == 'complete' && tab.url.match(gitlab_vn_old_regex)) {
    chrome.tabs.sendMessage(tab.id, {"message": "gitlab_vn_old_load"});
  }
});