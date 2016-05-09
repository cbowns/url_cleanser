# URL Cleanser

URL Cleanser is a Safari extension which removes many common tracking variables which web publishers append to URLs. For example, Google Analytics tacks `utm_source` and `utm_campaign` onto the end of URLs, especially from RSS and Twitter feeds. URL Cleanser will get rid of those on page load, without leaving an additional history entry in your browser.

While sites may have legitimate uses for these variables, they're really obnoxious when sharing a link, saving a URL for later, or running an extension such as [Sessions](https://sessions-extension.github.io/Sessions/), which does basic de-duping of URLs, but is defeated by the appending of random request parameters.

This extension allows these requests to go through to the server, but it redirects the browser to a clean URL after the page loads.Many sites do this server-side–this simply cleans up the ones which don't.

## Using Chrome?

[chrome-utm-stripper](https://github.com/jparise/chrome-utm-stripper) does some of this for Chrome, though only for Google's `utm_*` parameters.

# Installation

[Here's a direct link for 1.0](https://github.com/cbowns/url_cleanser/releases/download/1.0.0/URL.Cleanser.safariextz). More info is available on [its release page](https://github.com/cbowns/url_cleanser/releases/tag/1.0.0).

It will be available on Apple's Safari Extensions page once their review is complete.

# URL Examples

Before:

> http://www.nytimes.com/2015/08/19/opinion/stop-universities-from-hoarding-money.html?ribbon-ad-idx=4&src=me&module=Ribbon&version=origin&region=Header&action=click&contentCollection=Most%20Emailed&pgtype=article&_r=1

After:

> http://www.nytimes.com/2015/08/19/opinion/stop-universities-from-hoarding-money.html

# Found a bug?

If you've found a site that has tracking variables that this extension doesn't catch, or you've found that this extension breaks a page, please [open an issue](https://github.com/cbowns/url_cleanser/issues).

# Version History

## 1.0.0 (2016-05-09)

New fork by [cbowns](http://cbowns.com):

- Add a few new variables from the New York Times.
- Defeat (most) of Medium's #.hashtracking variables.

## 0.1.3 (10/06/23)

* SAFARI: Redrew icon at 100x100 for Safari Extension Gallery submission.

## 0.1.2 (10/06/23)

* SAFARI: Fixed typo in server-side updates file that was preventing Safari from downloading new updates. No need to manually install the new version--it should kick in on its own.

## 0.1.1 (10/06/22)

* SAFARI: Bumped version to test auto-updating.

## 0.1.0 (10/06/22)

* CORE: First release.
* SAFARI: First version.
