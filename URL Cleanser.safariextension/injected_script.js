if (location.search !== "") {

	query_params = location.search;
	base_url = location.hostname;

	// console.log ("location: [" + query_params + "]");
	// console.log ("url: [" + base_url + "]");

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
	nytimes_url = /(www)?\.nytimes\.com/;
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
							  ];

		for (var i = parameters_to_clean.length - 1; i >= 0; i--) {
			var regex = new RegExp ("([&?])" + parameters_to_clean[i] + "=[^&]*(?:&|$)");
			query_params = query_params.replace(regex, '$1');
		};
	}

	// Macworld:
	macworld_url_regex = /(www)?\.macworld\.com/;
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
	
	// If the href has changed, update it
	if (location.search != query_params) {
		if (query_params == "") query_params = location.href.replace(location.search, "");
		location.replace(query_params);
	}
}
