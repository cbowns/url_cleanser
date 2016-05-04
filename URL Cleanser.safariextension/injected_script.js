url_href = location.href;
query_params = location.search;
base_url = location.hostname;

console.log ("full url: [" + url_href + "]");
console.log ("query params: [" + query_params + "]");
console.log ("base url: [" + base_url + "]");

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

// For Medium Dot Com:

// Note: this event doesn't get loaded in time to catch their redirect.
// window.onhashchange = function(e) {
// 		console.log("redirecting? current hash: " + window.location.hash)
// };

/*
medium_url = /(www\.)?medium\.com/;
if (medium_url.test(base_url)) {
	console.log("looks like medium.")
	// URL garbage to remove.
	var regex = new RegExp ( "\#\.[a-zA-Z0-9]+");
	console.log("regex: "+ regex)
	url_href = url_href.replace(regex, '');
	console.log ("new url: [" + url_href + "]");
}

// If the href has changed, update it.
// Note: I don't think anything is doing this right now.
if (location.href != url_href) {
	console.log("loading new url: " + url_href)
	location.href = url_href
}
*/
