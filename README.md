# DEPRECATED

This repository has been deprecated in favor of bundling from the Amplitude Typescript monorepo under the "gtm-snippet" package: https://github.com/amplitude/Amplitude-TypeScript/tree/main/packages/gtm-snippet

# Amplitude JavaScript SDK wrapper for Google Tag Manager
The purpose of this wrapper is to provide a JavaScript interface for interacting with the `window.amplitude` client.

The wrapper has been designed with [Google Tag Manager](https://tagmanager.google.com) in mind. GTM's [custom templates](https://developers.google.com/tag-manager/templates) offer a way to deploy custom JavaScript without having to resort to Custom HTML tags, and with the ability to craft a user interface for the scripts within Google Tag Manager.

However, one of the defining features of custom templates is their [sandboxed JavaScript API](https://developers.google.com/tag-manager/templates/sandboxed-javascript) inventory, which severely restricts what type of browser JavaScript can be executed in the template code.

Amplitude's [JavaScript SDK](https://developers.amplitude.com/docs/javascript) makes use of JavaScript features which are not permitted by the sandbox of GTM's custom templates (e.g. object instances initiated with the `new` keyword, `this` and `prototype`, custom parameters on the `<script>` element, etc.).

Thus, in order to interact with Amplitude's JavaScript SDK via Google Tag Manager's custom templates (or any other context where the aforementioned JavaScript features cannot be used), this wrapper is required.

# How it works
When the wrapper JavaScript is loaded in the browser, the global method `window._amplitude()` is created for interacting with the wrapper.

This namespace includes the following methods. Each method can be invoked by passing the command name as the first argument of the call to `window._amplitude()`. 

If this command name is prefixed with `<string>.`, then `<string>` will be used as the [instance name](https://developers.amplitude.com/docs/javascript#initialization). After the command, all additional arguments are processed as arguments to the command method itself.

For example, to initialize a tracker with an API key, a user ID, and some custom options, you can use this wrapper command:

```
window._amplitude(
    'myTracker.init', // Run the init command and create a named instance "myTracker"
    'abcd1234', // The API key
    'user123', // (optional) User ID
    {includeGclid: true, cookieName: 'amplitude_custom_cookie'} // (optional) Additional options
);
```

## `init`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientinit)

Use this command to initialize a tracker instance. 

Example:
```
// Initialize a new Amplitude tracker with API key "abcd1234"
window._amplitude(
    'init',
    'abcd1234'
);
```

## `setOptOut`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientsetoptout)

Opt current user out of tracking.

Example:
```
window._amplitude(
    'setOptOut',
    true // Set to true to opt user out of tracking
);
```

## `isNewSession`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientisnewsession)

Returns `true` if this is a new session. `false` otherwise.

Example:
```
window._amplitude('isNewSession');
```

## `getSessionId`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientgetsessionid)

Returns the current session ID.

Example:
```
window._amplitude('getSessionId');
```

## `setSessionId`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientsetsessionid)

Set a new session ID. Format must be in **milliseconds** since epoch (UNIX time).

Example:
```
window._amplitude(
    'setSessionId',
    1634547544137
);
```

## `setUserId`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientsetuserid)

Set the current user ID. The user ID should be a string or `null`. Use the latter to reset the User ID.

Example:
```
window._amplitude(
    'setUserId',
    'user_12345'
);
```

## `setUserProperties`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientsetuserproperties)

Set user properties.

Example:
```
window._amplitude(
    'setUserProperties',
    {
        user_type: 'customer',
        loyalty_level: 'platinum'
    }
);
```

## `clearUserProperties`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientclearuserproperties)

Clear all the user properties for the current user.

Example:
```
window._amplitude('clearUserProperties');
```

## `setGroup`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientsetgroup)

Add user to a group or groups.

Example:
```
// Adds the user to groups "org_1" and "org_2" in orgId.
window._amplitude(
    'setGroup',
    'orgId',
    ['org_1', 'org_2']
);
```

## `regenerateDeviceId`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientregeneratedeviceid)

Reset the user's device ID. This is particularly useful in conjunction with `_amplitude('setUserId', null)`, in case you want to reset a user's identifiers completely.

Example:
```
window._amplitude('regenerateDeviceId');
```

## `setDeviceId`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientsetdeviceid)

Manually override the user's device ID. **Must not have the "." character**. Recommended format is [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

Example:
```
window._amplitude(
    'setDeviceId',
    'abcd1234-defg-hij1-klm2-yt4t112dabdd'
);
```

## `setVersionName`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientsetversionname)

Set the application version name.

Example:
```
window._amplitude(
    'setVersionName',
    '1.1.0'
);
```

## `logEvent`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientlogevent)

Log an event with optional parameters and callback functions.

Example:
```
window._amplitude(
    'logEvent',
    'Scroll To Content',
    {content_id: 'home_hero_copy'}    
);
```

## `logEventWithTimestamp`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientlogeventwithtimestamp)

Log an event with a custom timestamp. Timestamp should be **milliseconds** since epoch (UNIX time).

Example:
```
window._amplitude(
    'logEvent',
    'Scroll To Content',
    {content_id: 'home_hero_copy'},
    1634547544137
);
```

## `logEventWithGroups`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/#amplitudeclientlogeventwithgroups)

Log an event with specific groups.

Example:
```
window._amplitude(
    'logEventWithGroups',
    'Scroll To Content',
    {content_id: 'home_hero_copy'},
    {orgId: 'org_2'}
);
```

## `revenue`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/Revenue/)

Log a Revenue event with details about the product. The product details are passed as an object with `id` and `price` being required keys, and `quantity`, `revenueType`, and `eventProperties` as optional.

Example:
```
window._amplitude(
    'revenue',
    {
        id: 'cool_t_shirt', // required
        price: 10.88, // required
        quantity: 1,
        revenueType: 'purchase',
        eventProperties: {'coupon_used': true}
    }
);
```

## `identify`
[Link to specification](https://amplitude.github.io/Amplitude-JavaScript/Identify)

Run user property operations for the current user. The 'identify' method utilizes a single parameter, which is an array of individual user property operations. Each operation is its own array, following this format:

```
// Wrapper array
[
  // First command
  ['identifyCommand', 'userProperty', 'value'],
  // Second command
  ['identifyCommand', 'userProperty', 'value'],
  // etc.
  [...]
]
```

The `identify` API processes the commands in the order they are in the argument array.

Supported `identifyCommand` values are: `add`, `append`, `prepend`, `set`, `setOnce`, `unset`, `preInsert`.

Example:
```
window._amplitude([
    'identify',
    ['set', 'user_status', 'customer'],
    ['add', 'purchases', 1],
    ['append', 'purchased_products', 'product_123']
]);
```
