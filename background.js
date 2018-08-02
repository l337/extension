// © 2018 protected by the MIT license

const rootFolderName = [];

function getFolderNames(bookmarkFolders) {
	bookmarkFolders.map(bookmarkFolder => {
		if (bookmarkFolder.children) {
			rootFolderName.push(bookmarkFolder.title);
			getFolderNames(bookmarkFolder.children);
		}
	});
}


chrome.browserAction.onClicked.addListener(tab => { 
	chrome.bookmarks.getTree((bookmarks) => {
		// bookmarks[0] - root folder
		getFolderNames(bookmarks[0].children);
		// TODO Get User All Tabs, then use machine learning algorithms to dictate
		// what folders to place the the bookmarks in.
		chrome.tabs.getAllInWindow(null, (tabs) => {
			tabs.map(tab => {
				// TODO FIRST AND FOREMOST PLACE THE FIRST TAB INTO ONE OF THE FOLDERS LISTED IN `rootFolderName`
				// JUST AS A TEST TO GET IT WORKING.

				// chrome.bookmarks.create({'title': '*Bookmark Extension*'});



				// Do machine learning against the tabs and place them into the apporiate folder.				
			});
		});
	});
});