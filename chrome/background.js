function changementAdresse(tabId, changeInfo, tab)
{
  if (changeInfo.url) {
    //window.alert(changeInfo.url);
  }
}
function changementOnglet(activeInfo)
{
  chrome.tabs.get(activeInfo.tabId, alertUrl);
}

function alertUrl(tab)
{
  //window.alert(tab.url);
}
chrome.tabs.onUpdated.addListener(changementAdresse);
chrome.tabs.onActivated.addListener(changementOnglet);

