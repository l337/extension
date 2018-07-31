chrome.browserAction.onClicked.addListener((tab) => { 
	chrome.tabs.getAllInWindow(null, (tabs) => {
		const dateObj = new Date();
		const month = dateObj.getUTCMonth() + 1; //months from 1-12
		const day = dateObj.getUTCDate();
		const year = dateObj.getUTCFullYear();

		const newdate = [month, day, year].join('/');
		// All users current window chrome tabs
		tabs.map(tab => {
			const {title, url, id} = tab;
			chrome.bookmarks.create({'title': newdate});
			console.log(tab);
		})
	});
});