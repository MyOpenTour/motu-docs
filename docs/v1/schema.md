---
id: schema
title: MyOpenTour GraphQL Schema
sidebar_label: Overview
---

## Overview

A GraphQL schema is at the core of any GraphQL server implementation.
It describes the functionality available to the client applications that connect to it.

The GraphQL runtime defines a generic graph-based schema to publish the capabilities of the data service it represents.
Client applications can query the schema within its capabilities.
This approach decouples clients from servers and allows both to evolve and scale independently.

## GraphQL IDE

[GraphQL IDE](https://beta.motu.world/graphql)

## Example

For example you try next query to get all theathers

```json
{
  providers(where: {category: {name_en: ["theatres"]}}) 
  {
    id
    name
    location{
      city
      district
      formattedAddress
      lat
      lng
    }
  }
}
```
