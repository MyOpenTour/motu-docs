---
id: doc1
title: MyOpenTour
sidebar_label: Overview
slug: /
---


With MOTU travellers can plan, book, execute their trips using any available pay for all of them via integrated apps. For MOTU to be successful, providers are required to share their services and availability of their assets in a digital form. To facilitate MOTU providers and thus enable the deployment of MOTU services, providers are also required to standardize the digital form to facilitate access to their information. The MOTU-API (MyOpenTour - Application Programming Interface) is a standardized and technical interface between MOTU, users, providers and other MOTU services.

Concept of having a standard-based Application Programming Interface (API) from MOTU to or from services and applications. It allows all participating companies to communicate about planning, booking, execution, support, general information and payments of end-user specific iternerary. Using the MOTU-API enhances the interoperability between parties in the MOTU ecosystem.

In this Blueprint for an API for the MOTU-API we look into the necessary functional requirements for the interoperability between involved roles and MOTU. The goal of this document is to:

- Define the necessary scope for full interoperability between roles for the deployment of MOTU services, always keeping the customer journey in mind to determine which API calls are needed between MOTU services and other involved roles.
- Define the necessary parameters and values to fulfil this scope.
- Define the available parameters in various already available APIs and propose amendments where applicable.

## Who is involved?

This document has been written to consolidate the work of the MOTU web services. The MOTU is a company started in the Russian Federation in 2020. The goal of envolved persons is to provide standardised APIs to facilitate the development of the MOTU ecosystem. MOTU-API will be used as standard for the several MOTU pilots in The Russian Federation. Since 2021 the MOTU has been moved to become a company with an international scope. A list with all collaborators, companies and stakeholders involved in the current design and development of the MOTU-API has to be provided in Appendix

## What is in this version?

The first implementations of the MOTU-API will took place in a couple of months. The API is now capable of describing a full MOTU journey.

These results are especially reflected in a simplified object model in the planning phase and a new endpoint with self-describing facilities was created. This last one is needed for (inter)national scale-up, to be informed of what the addressed providers is capable of.

## Versioning and releases

Changes in the API are inevitable since we are exploring a new field and knowledge and experience improves. These changes are controlled using milestones and semantic versioning. First, the product owners defines functional milestones for the API. The milestones refer to new capabilities of the API at a point in time. The most recent version of this document contains all functional aspects of a MOTU journey, (provider information, planning, booking, iternarary, payment, support). Milestones have simple enumerated number names. Secondly, for developers and implementors of MOTU services, semantic versioning is used. Semantic versioning means that by looking at our version number, you can quickly identify what has changed and how much work goes into changing your own implementation.