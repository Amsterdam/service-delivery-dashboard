# Service-Delivery-Dashboard
A small collection of monitoring dashboards

This dashboard is meant for internal use to monitor the usage and health of applications that are run by Datapunt.
There are a couple of dashboards scraped together in an overview for Service Delivery. These include:
  - A Matomo dashboard for user statistics
  - A Kibana dashboard for API usage and error monitoring
  - An Up-time-robot dashboard to monitor downtime of applications
  - A Grafana dashbboard to monitor server health and availability
  - Some external links that are protected from embedded viewing including:
    - Sentry, an error tracking service
    - TopdeskC, a dashboards for front office questions and actions
    - The link to the Amsterdam logging guidelines
    
# Limitations
This dashboard is not meant to be any kind of exhaustive application.
It is merely a functional tool meant to give an overview of all the monitoring tools in use at Datapunt.
Kibana can not be accessed from an ADW workspot.
TopdeskC can only be accessed from an ADW workspot.

# Instructions
A general login functionality has not been build. Log into one of the widgets at the Matomo or Kibana dashboard and hit refresh to load the rest.
You need a connection to the shared services vpn at datapunt to access most of the content. 
Login credentials can be requested at Service Delivery/front office at Datapunt.
