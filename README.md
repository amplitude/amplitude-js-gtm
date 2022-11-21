# Amplitude JavaScript SDK wrapper V2 for Google Tag Manager
The purpose of this wrapper is to provide a JavaScript interface for interacting with the `window.amplitude` client.

The wrapper has been designed with [Google Tag Manager](https://tagmanager.google.com) in mind. GTM's [custom templates](https://developers.google.com/tag-manager/templates) offer a way to deploy custom JavaScript without having to resort to Custom HTML tags, and with the ability to craft a user interface for the scripts within Google Tag Manager.

However, one of the defining features of custom templates is their [sandboxed JavaScript API](https://developers.google.com/tag-manager/templates/sandboxed-javascript) inventory, which severely restricts what type of browser JavaScript can be executed in the template code.

Amplitude's [Browser SDK](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/) makes use of JavaScript features which are not permitted by the sandbox of GTM's custom templates (e.g. object instances initiated with the `new` keyword, `this` and `prototype`, custom parameters on the `<script>` element, etc.).

Thus, in order to interact with Amplitude's JavaScript SDK via Google Tag Manager's custom templates (or any other context where the aforementioned JavaScript features cannot be used), this wrapper is required.

# Breaking changes in V2
This wrapper abandonds the [legacy SDK](https://www.docs.developers.amplitude.com/data/sdks/javascript/) and instead loads the [Marketing Analytics Browser SDK](https://www.docs.developers.amplitude.com/data/sdks/javascript/).

In addition to the [changes in the general usage of the SDK](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/migration/), there are some **breaking changes** in this wrapper itself.

## Instance names are no longer used
It is no longer possible to create unique instances of the `amplitude` tracking interface. 

Commands need to provided as-is, without the instance prefix.

V1:
```
window._amplitude(
  'myInstance.setOptOut',
  true
);
```

V2:
```
window._amplitude(
  'setOptOut',
  true
);
```

## Deprecated event names
The following event names have been either completely removed or they have a new name in this wrapper.

| Event in V1 | Event in V2 |
|-|-|
| `isNewSession` | N/A |
| `setUserProperties` | `identify` |
| `clearUserProperties` | `identify` |
| `regenerateDeviceId` | `reset` |
| `setVersionName` | N/A |
| `logEvent` | `track` |
| `logEventWithTimestamp` | `track` |
| `logEventWithGroups` | `track` |

## Change to `productId` in the `revenue` call
The syntax of the `revenue` wrapper call has changed slightly, and the product ID is now passed with the `productId` key rather than `id`.

V1:
```
window._amplitude(
  'revenue',
  {
    id: 'product_id',
    ...
  }
);
```

V2:
```
window._amplitude(
  'revenue',
  {
    productId: 'product_id',
    ...
  }
);
```

# How it works
When the wrapper JavaScript is loaded in the browser, the global method `window._amplitude()` is created for interacting with the wrapper.

This namespace includes the following methods. Each method can be invoked by passing the command name as the first argument of the call to `window._amplitude()`. 

For example, to initialize a tracker with an API key, a user ID, and some custom options, you can use this wrapper command:

```
window._amplitude(
  'init', // Run the init command
  'abcd1234', // The API key
  'user123', // (optional) User ID
  {trackingOptions: {ipAddress: false}, appVersion: '2.0.1'} // (optional) Additional options
);
```

## `init`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#initialize-the-sdk)

Use this command to initialize a tracker instance. 

See [this specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#configuration) for what you can pass in the `configOptions` object.

Example:
```
// Initialize a new Amplitude tracker with API key "abcd1234"
window._amplitude(
  'init',
  'abcd1234',
  null,
  configOptions
);
```

## `track`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#track-an-event)

Use this command to track an event. 

Example:
```
// Track an event named 'custom_scroll' with some event properties, options, and a group
window._amplitude(
  'track',
  'custom_scroll',
  {
    scroll_depth: 90  // Event property
  },
  {
    time: Date.now() - 50000, // Set event timestamp to 50 seconds in the past
    plan: 'enterprise' // Set event-level group type to "plan" and group name to "enterprise"
  }
);
```

## `identify`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#user-properties)

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

Supported `identifyCommand` values are: `add`, `append`, `prepend`, `set`, `setOnce`, `unset`, `preInsert`, `postInsert`, `clearAll`. The last one takes no parameters and can be used to remove all user properties from the user.

Example:
```
window._amplitude(
  'identify',
  [
    ['set', 'user_status', 'customer'],
    ['add', 'purchases', 1],
    ['append', 'purchased_products', 'product_123']
  ]
);
```

Example with `clearAll`:
```
window._amplitude(
  'identify',
  [
    ['clearAll']
  ]
);
```

## `setGroup`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#user-groups)

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

## `groupIdentify`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#group-properties)

Set or update properties of particular groups.

The method takes three parameters: a group type, a group name, and an array of property operations (see `identify` above).

Example:
```
// Sets the property "plan" to "enterprise" for the given group.
window._amplitude(
  'groupIdentify',
  'myOrganization', // Group type
  'myGroup', // Group name
  [
    ['set', 'plan', 'enterprise']
  ]
);
```

## `revenue`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#revenue-tracking)

Log a Revenue event with details about the product. The product details are passed as an object with `productId` and `price` being required keys, and `quantity`, `revenueType`, and `eventProperties` as optional.

Example:
```
window._amplitude(
  'revenue',
  {
    productId: 'cool_t_shirt', // required
    price: 10.88, // required
    quantity: 1,
    revenueType: 'purchase',
    eventProperties: {'coupon_used': true}
  }
);
```

## `flush`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#flush-the-event-buffer)

Trigger the client to send the buffered events immediately.

Example:
```
window._amplitude('flush');
```

## `getUserId`
Returns the current user ID.

Example:
```
window._amplitude('getUserId');
```

## `setUserId`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#custom-user-id)

Set the current user ID. The user ID should be a string or `null`. Use the latter to reset the User ID.

Example:
```
window._amplitude(
  'setUserId',
  'user_12345'
);
```

## `getSessionId`
Returns the current session ID.

Example:
```
window._amplitude('getSessionId');
```

## `setSessionId`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#custom-session-id)

Set a new session ID. Format must be in **milliseconds** since epoch (UNIX time).

Example:
```
window._amplitude(
  'setSessionId',
  1634547544137
);
```

## `getDeviceId`
Returns the current device ID.

Example:
```
window._amplitude('getDeviceId');
```

## `setDeviceId`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#custom-device-id)

Manually override the user's device ID. **Must not have the "." character**. Recommended format is [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

Example:
```
window._amplitude(
  'setDeviceId',
  'abcd1234-defg-hij1-klm2-yt4t112dabdd'
);
```

## `reset`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#reset-when-user-logs-out)

Anonymize the user by setting the `userId` to `undefined` and setting the `deviceId` to a new UUID value.

Example:
```
window._amplitude('reset');
```

## `setOptOut`
[Link to specification](https://www.docs.developers.amplitude.com/data/sdks/typescript-browser/#opt-users-out-of-tracking)

Opt current user out of tracking.

Example:
```
window._amplitude(
  'setOptOut',
  true // Set to true to opt user out of tracking
);
```

## `setTransport`
Set the transport type to one of `xhr`, `sendBeacon`, or `fetch`.

Example:
```
window._amplitude(
  'setTransportType',
  'sendBeacon'
);
```