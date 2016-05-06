url_href = location.href;
query_params = location.search;
base_url = location.hostname;
hash_url = location.hash;

console.log ("full url: [" + url_href + "]");
console.log ("query params: [" + query_params + "]");
console.log ("base url: [" + base_url + "]");
console.log ("url hash: [" + hash_url + "]");

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
	console.log("looks like medium. installing an onpopstate handler.");

	window.onpopstate = function(e) {
		current_hash = window.location.hash;
		console.log("history state event. current hash: " + current_hash);

		// Here's what we'll strip:
		var regex = new RegExp ( "\#\.[a-zA-Z0-9]+");
		console.log("regex: "+ regex);
		new_hash = current_hash.replace(regex, '');
		console.log ("new hash value: [" + new_hash + "]");
		location.hash = new_hash;
		console.log("removed. now:" + location.hash);

		// Remove their pushed history state.
		new_location_href = location.href
		console.log("location href: " + new_location_href);
		history.replaceState(null,null,location.href.substring(0,location.href.indexOf('#')));

		// Verify it worked:
		new_url_href = location.href;
		new_query_params = location.search;
		new_base_url = location.hostname;
		new_hash_url = location.hash;

		console.log ("new: full url: [" + new_url_href + "]");
		console.log ("query params: [" + new_query_params + "]");
		console.log ("base url: [" + new_base_url + "]");
		console.log ("url hash: [" + new_hash_url + "]");
	};
}
