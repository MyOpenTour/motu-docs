---
id: versioning
title: Versioning and releases
---

Changes in the API are inevitable since we are exploring a new field and knowledge and experience improves. 
These changes are controlled using milestones and semantic versioning.
Version refer to new capabilities of the API at a point in time. The most recent version contains all functional aspects of a MOTU journey, (operator information, planning, booking, travel, payment, support).
For developers and implementors of MOTU API, semantic versioning is used. Semantic versioning means that by looking at our version number, you can quickly identify what has changed and how much work goes into changing your own implementation.

[Github docs about releases](https://docs.github.com/en/github/administering-a-repository/about-releases)

[Official page of Semantic Versioning 2.0.0](https://semver.org/#semantic-versioning-200)

[NPM about semantic versioning](https://docs.npmjs.com/about-semantic-versioning)


Code status | Stage | Rule | Example version
-- | -- | -- | --
First release | New product | Start with 1.0.0 | 1.0.0
Backward compatible bug fixes | Patch release | Increment the third digit | 1.0.1
Backward compatible new features | Minor release | Increment the middle digit and reset last digit to zero | 1.1.0
Changes that break backward compatibility | Major release | Increment the first digit and reset middle and last digits to zero | 2.0.0
