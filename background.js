// © 2018 protected by the MIT license

const rootFolderName = [];

function getFolderNames(bookmarkFolders) {
	bookmarkFolders.map((bookmarkFolder) => {
		if (bookmarkFolder.children) {
			rootFolderName.push(bookmarkFolder.title);
			getFolderNames(bookmarkFolder.children);
		}
	});
}


chrome.browserAction.onClicked.addListener((tab) => { 
	chrome.bookmarks.getTree((bookmarks) => {
		// bookmarks[0] - root folder
		getFolderNames(bookmarks[0].children);

		// TODO Get User All Tabs, then use machine learning algorithms to dictate
		// what folders to place the the bookmarks in.
	});
});