# URL Cleanser

URL Cleanser is a Safari extension that removes many of the common tracking variables that web publishers append to URLs. For example, you've probably seen stuff like <code>utm\_source</code> and <code>utm\_campaign</code> tacked onto the end of URLs, especially from RSS and Twitter feeds—URL Cleanser will get rid of those. No more manually cleaning up URLs before you paste them into an email or Twitter message.

While sites may have legitimate uses for these variables, they're really obnoxious. The URL is part of the user experience, and while sticking <code>?utm\_source=rss&utm\_medium=rss&utm\_campaign=rss</code> on the end of the URL isn't quite as awful as a Flash ad that animates over content, it's not fundamentally different. Both demonstrate a certain level of disrespect for your users, and both make it blatantly clear that you see your users as little more than sources of revenue.

This extension still allows the bullshit-filled request to go through--it simply issues a redirect as soon as the HTML document has been loaded and parsed by Safari. Many sites do this server-side--I'm just cleaning up after the ones that don't.

**Note: This hasn't been tested too extensively, and definitely has the capability to break some sites rather spectacularly. Use at your own risk.**

## Installation

<b> WIP. The content below is from the old fork.</b>

Go to the [downloads page](http://github.com/grantheaslip/url_cleanser/downloads) and grab the most recent version (it will be called <code>url\_cleanser\_*.safariextz</code>). After you've installed it, Safari will automatically download updates or notify you of new releases, depending on how you've set it up. As of 10/06/22, you'll need to [manually enable extensions](http://safariextensions.tumblr.com/post/680219521/post-how-to-enable-extensions-06-09-10) to install it (this will likely no longer be necessary in later releases).

## Examples (before and after)

Before:

> http://www.nytimes.com/2015/08/19/opinion/stop-universities-from-hoarding-money.html?ribbon-ad-idx=4&src=me&module=Ribbon&version=origin&region=Header&action=click&contentCollection=Most%20Emailed&pgtype=article&_r=1

After:

> http://www.nytimes.com/2015/08/19/opinion/stop-universities-from-hoarding-money.html

## Contribute

If you've found a site that has tracking variables that this extension doesn't catch, or you've found that this extension breaks a page, open up an issue, send me an email, or add/fix it yourself.

## Version History

### 1.0 (2015-09-22)

* Forked by [cbowns](http://cbowns.com).

### 0.1.3 (10/06/23)

* SAFARI: Redrew icon at 100x100 for Safari Extension Gallery submission.

### 0.1.2 (10/06/23)

* SAFARI: Fixed typo in server-side updates file that was preventing Safari from downloading new updates. No need to manually install the new version--it should kick in on its own.

### 0.1.1 (10/06/22)

* SAFARI: Bumped version to test auto-updating.

### 0.1.0 (10/06/22)

* CORE: First release.
* SAFARI: First version.
