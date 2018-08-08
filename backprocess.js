// © 2018 protected by the MIT license

(function() {
  // user bookmark folders
  const rootFolderName = [];

  const EXTRACT_ACTIONS = {
    extractPage: 'extractPageSource'
  }

  /**
   * 
   * @param {{}} bookmarkFolders 
   * Get all users bookmark folders
   */
  function getFolderNames(bookmarkFolders) {
    bookmarkFolders.map(bookmarkFolder => {
      if (bookmarkFolder.children) {
        rootFolderName.push(bookmarkFolder.title);
        getFolderNames(bookmarkFolder.children);
      }
    });
  }

  /**
   * Get a 'message' sent from an external js file.
   */
  chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.action === EXTRACT_ACTIONS.extractPage) {
      console.log(request.source);
    }
  })

  /**
   * TODO FIRST AND FOREMOST PLACE THE FIRST TAB INTO ONE OF THE FOLDERS LISTED IN `rootFolderName`
   * JUST AS A TEST TO GET IT WORKING.
   */
  chrome.browserAction.onClicked.addListener(tab => { 
    /**
     * Get all user's open tabs titles these will have more weight when we do the machine learning.
     */
    chrome.bookmarks.getTree((bookmarks) => {
      // bookmarks[0] - root folder
      getFolderNames(bookmarks[0].children);
      // TODO Get User All Tabs, then use machine learning algorithms to dictate
      // what folders to place the the bookmarks in.
      const titles = [];
      chrome.tabs.getAllInWindow(null, (tabs) => {
        tabs.map(tab => {
          /**
           * Get all the open tabs to retrieve important title information
           */
          if (tab.title) {
            titles.push(tab.title);
          }
          /**
           * Extract page content
           */
          if (tab.id && (tab.url !== (tab.url.indexOf('chrome-extension://') >= -1))) {
            chrome.tabs.executeScript(tab.id, {
              file: 'extractPageContent.js'
            });
          }

          // chrome.bookmarks.create({'title': '*Bookmark Extension*'});
          // Do machine learning against the tabs and place them into the apporiate folder.				
        });
      });
    });
  });
})();
