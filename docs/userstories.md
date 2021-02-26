---
id: userstories
title: User stories
---

## Overview

Overview of the User stories used as parameters for the MOTU functionalities applicable to the MOTU-API

To facilitate the definition of parameters and values that are required for full interoperability in MOTU, user stories have been defined from three different perspectives: the User, and MOTU Provider (MP) and MOTU Web services(frontend, apps, recommendation) perspectives.  

By using these three perspectives, the chances are increased that all necessary functionalities for MOTU are taken into account. These functionalities can then be related to the necessary interface specifications between MOTU services. This document does not set up any requirements for the human-machine-interface (HMI) between Users, MPs, and Services.

## Definitions within the User Stories

| **Definition** | **Meaning** |
| --- | --- |
| API | Application Programming Interface, using REST-APIs as architectural style |
| User | Customer wanting to make a journey |
| MOTU Provider | Provider of travel advice, information, booking and invoicing |
| Required for MOTU | Yes = mandatoryConditional = mandatory for some operators Optional = mandatory for no operators |
| User | Competence = is the user ableConditions = is the user compliantAuthentication = confirmation of identity/profile/token |

## From a USER perspective

| **Definition** | **Meaning** |
| --- | --- |
| Item | 1.1 |
| Who | As a USER |
| What | I want to depart from STARTLOCATION and arrive at DESTINATION |
| Why | To define my iternerary |
| Required for MOTU | STARTLOCATION = yes, DESTINATION = conditional |
| Comments | MOTU providers brought necessary information to calculate time of iternarary|
| | |
| Item | 1.2 |
| Who | As a USER |
| What | I want to know the PRICING of my iternarary |
| Why | To determine how expensive my iternarary will be |
| Required for MOTU | PRICING = yes |
| Comments ||
| | |
| Item | 1.3 |
| Who | As a USER |
| What | I want to receive a single INVOICE for my entire iternarary |
| Why | To simplify my cost overview |
| Required for MOTU | INVOICE = yes |
| Comments | |
| | |
| Item | 1.4 |
| Who | As a USER |
| What | I want to give a RATING and see other ratings of a providers activities |
| Why | To leave my feedback or determine if I want to use a certain activities |
| Required for MOTU | RATING = optional |
| Comments | |
| | |
| Item | 1.5 |
| Who | As a USER |
| What | I want to be able to REPORT an issue |
| Why | In case the asset I want to use has a problem/damage/issue |
| Required for MOTU | REPORT = yes |
| Existing API-description | |
| Comments | Maybe this doesn't have to be available in an API but needs to be covered by B2B arrangements.<br/> A User wants the MOTU Provider to solve any issues, as this is their travel interface.<br/> A booking should only be made if an asset has no known technical issues. |
| | |
| Item | 1.6 |
| Who | As a USER |
| What | I want to be able to select an asset-based on my preferences |
| Why | To fit with the criteria for my trip |
| Required for MOTU | preferences = yes |
| Comments | E.g., selection of the number of people, type of cousine, range, recommendation, etc. |

## From a MOTU Provider perspective

| **Definition** | **Meaning** |
| --- | --- |
| Item | 2.1 |
| Who | As a Provider |
| What | I want to know from when to when (TIME T1 to TIME T2) the USER wants to use my assets |
| Why | To define if this fits my offer of assets |
| Required for MOTU | TIME T1(START TIME/DAY) = conditional, TIME T2(END TIME/DAY) = conditional |
| Comments | This is optional, only required in case of usage restrictions of the Provider or to implement the option to book an asset beforehand (long-term). |
| | |
| Item | 2.2 |
| Who | As a Provider |
| What | I want to know if the USER has the right USER COMPETENCE |
| Why | To determine if the USER is allowed to use my assets |
| Required for MOTU | USER COMPETENCE = yes |
| Comments | E.g., the user should have a correct contact details, a membership , discounts, etc. |
| | |
| Item | 2.3 |
| Who | As a Provider |
| What | I want to know if the USER complies with my USER CONDITIONS before starting a trip |
| Why | To determine if the USER is allowed to use my assets |
| Required for MOTU | USER CONDITIONS = yes |
| Comments | E.g., the user is a registered member, loyalty level, etc. |
| | |
| Item | 2.4 |
| Who | As a Provider |
| What | I want to give a RATING and see other ratings of a USER |
| Why | To leave my feedback about and determine if USER can use my asset |
| Required for MOTU | RATING = optional |
| Comments | A Providerr might want to rate a user or determine if a user is allowed to use an asset-based on their rating |
| | |
| Item | 2.5 |
| Who | As a Provider |
| What | I want to be able to receive USER AUTHENTICATION |
| Why | To confirm the identity of the USER using my asset |
| Required for MOTU | USER AUTHENTICATION = yes |
| Existing API description | MOTU-API |
| Comments | Authentication provides the Provider with a confirmation of a user&#39;s identity, qr-code, profile or token. |
| | |
| Item | 2.6 |
| Who | As a Provider |
| What | I want to be able to notify the MOTU to CONTACT the USER |
| Why | In case of problems, emergencies or other issues |
| Required for MOTU | CONTACT = yes |
| Comments | A Provider can give specific support about the asset in case of issues.  A direct link between user and Provider is required, the MOTU Provider can facilitate this link through their service |
| | |
| Item | 2.7 |
| Who | As a Provider |
| What | I want to be able to know current transaction and booking |
| Why | To inform the MOTU about any changes |
| RequiredForMOTU  | CANCEL = yes, MODIFY = yes |
| Comments | Provider need to be able to cancel or modify transactions or bookings in case an asset is unavailable or delayed. |

## From a MOTU services perspective

| **Definition** | **Meaning** |
| --- | --- |
| Item | 3.1 |
| Who | As a MOTU service |
| What | I want to know which travel means are available around STARTLOCATION which allow reaching DESTINATION |
| Why | To give travel advice to the USER |
| RequiredForMOTU | STARTLOCATION = yes, DESTINATION = conditional |
| Comments | List avalable activities with predefined filters based on STARTLOCATION and DESTINATION |
| | |
| Item | 3.2 |
|ADD MORE STORIES|ADD MORE INFORMATION|
| | |

