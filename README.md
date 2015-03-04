# chicagoelections.com data scraper
Scrape Tables from chicagoelections.com to CSV

## The Problem
The Chicago Board of Elections quite wonderfully and quickly post election data down to the precinct level. However, this is in a web table and not in a very usable data format. It would be best to get this data in a .csv or other machine-readable format. 

## Sitemapping chicagoelections.com
### Main selection page
![Main Selection](http://i.imgur.com/OOjeJJo.png)

http://www.chicagoelections.com/en/election3.asp

The main website gives a dropdown select element named *D3* that contains a list of all the elections for which there is data available. When submitted with a valid selection, you are taking to the election contenst listing.

### Election Contest Listing
![Election Listing](http://i.imgur.com/NSE7UWl.png)

http://www.chicagoelections.com/en/wdlevel3.asp?elec_code=##

The election contest listing present you with a select element named *D3* that contains a list of all the contests that were tracked in the selected election. Selecting one of these elements brings you to the contest detail page. This page does not change URLs.

### Contest Detail Page
#### Ward Level
![Ward Level](http://i.imgur.com/iQGT5j1.png)

The first listing presented shows a listing by wards. The ward includes a link to drill down into the precinct level data. It appears you must submit the form at the election contest listing to get to this data.
#### Precinct Level
![Precinct Level](http://i.imgur.com/mJeDmbN.png)

http://www.chicagoelections.com/en/pctlevel3.asp?Ward=##&elec_code=##&race_number=##

The drilled down listing presented shows a listing of the contest by precinct. This is the final most detailed data. You can navigate to this data directly by URL.
