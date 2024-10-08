---
title: Sample Page for Formatting checks
sidebar_position: 4
---

# User-Specific Views

User-Specific Views in vuSmartMaps ensure that users accessing the same dashboards can view data according to the policies configured for their respective roles.

## Tenant-Specific Data Isolation

To enhance data security, users from different tenants are isolated from each other.

### Data Access Policies

To achieve this, User-Specific Views operate on two main data access policies:

#### Data Set Policy

There are four options under Data Set Policy, allowing administrators to finely control data access:

1. Deny Access to All Observability Data
2. Allow Access to All Observability Data
	1. Users can access the entire observability data set.

##### Data Set Categories

User-Specific Views support seven distinct data set categories, enabling users to choose and configure their preferred data sets:

1. Traces
2. RUM
3. Logs
4. Metrics
5. Events
6. Transactions
7. Custom

:::note
It is to be noted that the policies will apply to tables with specific prefixes as outlined below:
| Category | Table Name Prefix |
|---|---|
| Traces | `vtraces` |
| RUM | `vrum` |
| Logs | `vlogs` |
| Metrics | `vmetrics` |
| Events | `vevents` |
| Transactions | `vtrans` |
:::

<iframe 
  src="https://vunetsystems.com/docs/" 
  width="100%" 
  height="500px" 
  style={{border: '2px solid #ccc'}} 
/>