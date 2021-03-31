---
slug: motu-graphql
title: Announcing General Availability of our GraphQL API
author: Nekrasov Pavel
author_title: Developer of MOTU
author_url: https://github.com/nekrasovp
author_image_url: https://avatars.githubusercontent.com/u/7581719?s=460&u=7d6af1e802629cc240227372b7cf819013153718&v=4
tags: [graphql, motu]
---

MOTU GraphQL API can be used as an optional alternative to our server-side SDKs. This API is straightforward to integrate and offers great control, flexibility, and extensibility of MOTU platform.

<!--truncate-->

## What is GraphQL?

GraphQL is a query language for APIs developed by Facebook in 2012 and has been adopted by companies such as Airbnb, GitHub, Yelp and PayPal. GraphQL gives clients the flexibility to request exactly what is needed and nothing more. Construct a request by defining the resources you want via a POST request to a server and receive a response that matches the format of your request. Please check out our About GraphQL guide to learn more about the basic concepts of GraphQL.

## Why use GraphQL?

In comparison to our SDKs, GraphQL offers a potentially more efficient, flexible integration. Specify exactly what data you care about and retrieve as much or as little as needed, all through a single endpoint. You have the freedom to use any programming language you want. Without SDKs to manage and update on your server, your payment integration is simpler, more maintainable, and portable. With the API, you can integrate once and take advantage of new features as they are released, without having to update an SDK.
We make it easy for you to test API calls in our Sandbox environment by using our [API Explorer](/v1/schema), directly in your browser. We also have a fully searchable [reference](/v1/schema) page to browse our [schema](/v1/schema).

## What’s an example of a GraphQL API call?

This is an example of creating a transaction using the Braintree GraphQL API. The API accepts a request body with query and variables combined into a JSON string like this:

```js
query {
  coupon(id: "$input")
  {
    valid
    duration
    currency{
      name
    }
    percent_off
    max_redemptions
    times_redeemed
  }
}
```

Put it all together into a curl request with the necessary headers:

```sh
curl \
 -H 'Content-Type: application/json' \
 -H 'Authorization: Bearer PRIVATEKEY_BASE64ENCODED' \
 -X POST https://beta.motu.world/graphql \
 -d 'query { coupon(id: "$input") { valid duration currency{ name } percent_off max_redemptions times_redeemed }'
 ```

The JSON response will look like this:

```json
{
  "data": {
    "coupon": {
      "valid": true,
      "duration": "forever",
      "currency": {
        "name": "Rubles"
      },
      "percent_off": 5,
      "max_redemptions": 100,
      "times_redeemed": 0
    }
  }
}
```

## What does GraphQL API support?

Check out the [schema](/v1/schema) for a in-depth view.

## Future plans

We will continue to expand the feature set of our GraphQL API, so stay tuned! Check out our [changelog](https://github.com/myopentour) for a full list for recent updates and watch it for new capabilities. If you’d like to request a feature, feel free to open a [Github issue](https://github.com/myopentour).
If you’d like to get started and learn more about our GraphQL API, check out our [developer documentation](/v1/schema).
