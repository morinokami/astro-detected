function setIconAndPopup(detected, tabId) {
  const mode = detected ? 'detected' : 'default';
  chrome.action.setIcon({
    tabId: tabId,
    path: {
      '16': chrome.runtime.getURL(`icons/16-${mode}.png`),
      '32': chrome.runtime.getURL(`icons/32-${mode}.png`),
      '48': chrome.runtime.getURL(`icons/48-${mode}.png`),
      '128': chrome.runtime.getURL(`icons/128-${mode}.png`),
    },
  });
  chrome.action.setPopup({
    tabId: tabId,
    popup: chrome.runtime.getURL(`popups/${mode}.html`),
  });
}

chrome.runtime.onMessage.addListener((request, sender) => {
  const tab = sender.tab;
  if (tab) {
    setIconAndPopup(request.detected, tab.id);
  }
});
