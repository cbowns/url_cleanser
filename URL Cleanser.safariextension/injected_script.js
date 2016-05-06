function logURLs() {
	new_url_href = location.href;
	new_query_params = location.search;
	new_base_url = location.hostname;
	console.log ("logURLs: full url: [" + new_url_href + "]");
	console.log ("logURLs: query params: [" + new_query_params + "]");
	console.log ("logURLs: base url: [" + new_base_url + "]");

	logHash()
}

function logHash() {
	new_hash_url = location.hash;
	console.log ("logHash: url hash: [" + new_hash_url + "]");
}

logURLs();

// Capture our location variables:
url_href = location.href;
query_params = location.search;
base_url = location.hostname;

// Code for query params.
if (location.search !== "") {
	// Remove tracking crap from Google Analytics:
	google_parameters_to_clean = [
		, "utm_source"
		, "utm_medium"
		, "utm_campaign"
		, "utm_content"
		, "utm_term"
	];
	for (var i = google_parameters_to_clean.length - 1; i >= 0; i--) {
		var regex = new RegExp ("([&?])" + google_parameters_to_clean[i] + "=[^&]*(?:&|$)");
		query_params = query_params.replace(regex, '$1');
	};

	// NYTimes:
	nytimes_url = /(www\.)?nytimes\.com/;
	if (nytimes_url.test(base_url)) {
		// Parameters to remove:
		parameters_to_clean = [
			, "partner"
			, "emc"
			, "ribbon-ad-idx"
			, "src"
			, "module"
			, "version"
			, "region"
			, "action"
			, "contentCollection"
			, "pgtype"
			, "_r"
			, "referrer"
			, "moduleDetail"
			, "contentID"
		];

		for (var i = parameters_to_clean.length - 1; i >= 0; i--) {
			var regex = new RegExp ("([&?])" + parameters_to_clean[i] + "=[^&]*(?:&|$)");
			query_params = query_params.replace(regex, '$1');
		};
	}

	// Macworld:
	macworld_url_regex = /(www\.)?macworld\.com/;
	if (macworld_url_regex.test(base_url)) {
		// Parameters to remove:
		parameters_to_clean = [
			, "lsrc"
		];

		for (var i = parameters_to_clean.length - 1; i >= 0; i--) {
			var regex = new RegExp ("([&?])" + parameters_to_clean[i] + "=[^&]*(?:&|$)");
			query_params = query_params.replace(regex, '$1');
		};
	}

	// Other sites:
	query_params = query_params.replace(/([&?])eref=[^&]*(?:&|$)/, '$1'); // From cnn.com feeds
	query_params = query_params.replace(/([&?])ref=[^&]*(?:&|$)/, '$1'); // From cbc.ca/news feeds
	query_params = query_params.replace(/([&?])bn=[^&]*(?:&|$)/, '$1'); // From thestar.com links
	query_params = query_params.replace(/([&?])cmpid=[^&]*(?:&|$)/, '$1'); // From theglobeandmail.com links
	query_params = query_params.replace(/([&?])feature=[^&]*/, '$1'); // For YouTube


	// Cleanup outro:

	// If the string ends with the '?' character (no more GET variables left), remove it
	query_params = query_params.replace(/[&?]$/, '');

	// If we've updated the query params, modify them.
	if (location.search != query_params) {
		if (query_params == "") query_params = location.href.replace(location.search, "");
		location.replace(query_params);
	}
}

/*
hi, Medium Dot Com:

They set a tracking value to location.hash by pushing a history state after
the page loads.

It ends up with these nasty #.13b9e3c8u things on the end of otherwise fine URLs.

We can defeat them by listening to window.onpopstate, and rewriting the history
state object they pushed.
*/

medium_url = /(www\.)?medium\.com/;
if (medium_url.test(base_url)) {
	console.log("looks like medium. cleaning the URL now, .onload, and .onpopstate.");
	logAndCleanHash();

	window.onload=function(){
		console.log("onload callback. cleaning the URL.");
		logAndCleanHash();
	}

	window.onpopstate = function(e) {
		console.log("history state event. cleaning the URL.");
		logAndCleanHash()
	};
}

function logAndCleanHash() {
	logHash();
	cleanHash();
	logHash();
}

function cleanHash() {
	// Here's what we'll strip:
	var regex = new RegExp("\#\.[a-zA-Z0-9]+");
	current_hash = location.hash
	new_hash = current_hash.replace(regex, '');
	location.hash = new_hash;
}
