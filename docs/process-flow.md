---
id: process-flow
title: Process Flows
---

Together with the MOTU project team, process flows for the customer journey have been defined. This helps to scope the necessary functions required in the API building blocks. The goal is to accommodate different business models and variations of transportation within these functional flows.

## MOTU-API-Architecture

![MOTU_Architecture](../static/img/MOTU_Architecture.png)

## MOTU-Model-Data-Class-Diagram

![MOTU-Data-Model-Class](../static/img/Data_Model_Class_Diagram.png)

The different functions for the interface between MPs and TOs are described as follows:

- Operator Information / General Information: Gives static information on the operator according to the General Bikeshare Feed Specification+ (GBFS+) standard.
- Privacy and Registration
- Planning: Gives information about availability, estimated travel time and costs.
- Booking: Allows reservation of specific assets for a specific place, time and date.
- Trip Execution: Allows access to the asset(s) and travel during the booked period.
- Payment: Allows settlement between TOs and MPs. Supports different business models (i.e., pay-as-you-go or subscription-based).
- Support: Assists users in the solution of operational troubles encountered during any part of the process. Connects with optional support modules.
- Asset Information: Is defined as a separate module that can be used by other modules to supplement API calls with specific asset information where applicable. Assets can be vehicles or for example infrastructural assets.
- Optional modules: The more dynamic functional blocks have additional optional modules which are used for the execution of sub-processes derived from the main functions which might not be desired or required depending on the scope of the Business Models.