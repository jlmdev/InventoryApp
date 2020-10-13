TRUNCATE TABLE "Workstations", "Servers", "NetworkDevices", "Locations" RESTART IDENTITY;

INSERT INTO "Workstations" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "Type") VALUES ('Desktop 1', '12345', '2015-06-30', 'Conference Room Desktop', 'i7', 'Windows 10', '2020-09-15', 'Desktop');
INSERT INTO "Workstations" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "Type") VALUES ('Desktop 2', '23456ERTY', '2018-07-15', 'James Desktop', 'i5', 'Windows 10', '2020-09-15', 'Desktop');
INSERT INTO "Workstations" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "Type") VALUES ('Desktop 3', '3457rtydfh', '2019-09-10', 'Alice Desktop', 'i3', 'Windows 10', '2019-08-15', 'Desktop');
INSERT INTO "Workstations" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "Type") VALUES ('Laptop 1', '224356734', '2020-07-13', 'Nathan Laptop', 'i7', 'Windows 10', '2020-09-15', 'Laptop');
INSERT INTO "Workstations" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "Type") VALUES ('Laptop 2', '45i825gsd', '2017-12-10', 'Josh Mac', 'i7', 'MacOS', '2020-09-15', 'Laptop');
INSERT INTO "Workstations" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "Type") VALUES ('Laptop 3', '347sdh', '2019-05-16', 'Samantha Laptop', 'i3', 'Windows 10', '2020-03-15', 'Laptop');
INSERT INTO "Workstations" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "Type") VALUES ('Desktop 4', '2457xcvn', '2018-01-20', 'Jennifer Desktop', 'i7', 'Windows 10', '2020-09-15', 'Desktop');
INSERT INTO "Workstations" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "Type") VALUES ('Desktop 5', '87645hjkl', '2020-10-11', 'Lauren Desktop', 'i5', 'Windows 10', '2020-09-15', 'Desktop');

INSERT INTO "Servers" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "IP", "Subnet", "Gateway") VALUES ('Server 1', '62626', '2018-11-24', 'Primary DC', 'Xeon', 'Windows Server 2012 R2', '2020-09-15', '10.72.0.30', '10.72.0.0', '10.72.0.10');
INSERT INTO "Servers" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "IP", "Subnet", "Gateway") VALUES ('Server 2', '62626', '2018-11-24', 'Backup DC', 'Xeon', 'Windows Server 2012 R2', '2020-09-15', '10.72.0.31', '10.72.0.0', '10.72.0.10');
INSERT INTO "Servers" ("Name", "Serial", "DateAcquired", "Description", "Processor", "OS", "LastUpdate", "IP", "Subnet", "Gateway") VALUES ('Server 3', '62626', '2019-11-30', 'File Server', 'Xeon', 'Windows Server 2012 R2', '2020-09-15', '10.72.0.32', '10.72.0.0', '10.72.0.10');

INSERT INTO "NetworkDevices" ("Name", "Serial", "Type", "Description", "DateAcquired", "LastUpdated", "IP", "Subnet", "Gateway") VALUES ('Primary Router', '161616', 'Router', 'SonicWall TZ500', '2017-02-27', '2020-05-15', '10.0.0.10', '10.0.0.0', '10.0.0.10');
INSERT INTO "NetworkDevices" ("Name", "Serial", "Type", "Description", "DateAcquired", "LastUpdated", "IP", "Subnet", "Gateway") VALUES ('Switch 1', '161616', 'Switch', 'HP', '2017-05-13', '2020-05-15', '10.0.0.20', '10.0.0.0', '10.0.0.10');
INSERT INTO "NetworkDevices" ("Name", "Serial", "Type", "Description", "DateAcquired", "LastUpdated", "IP", "Subnet", "Gateway") VALUES ('Switch 2', '257227', 'Switch', 'HP', '2017-05-13', '2020-05-15', '10.0.0.21', '10.0.0.0', '10.0.0.10');
INSERT INTO "NetworkDevices" ("Name", "Serial", "Type", "Description", "DateAcquired", "LastUpdated", "IP", "Subnet", "Gateway") VALUES ('Switch 3', '3837447', 'Switch', 'HP', '2017-05-13', '2020-05-15', '10.0.0.22', '10.0.0.0', '10.0.0.10');

INSERT INTO "Locations" ("Name", "Street1", "Street2", "City", "State", "ZIP") VALUES ('Main Office', '704 Westshore Ave.', '', 'Tampa', 'FL', '33609');
INSERT INTO "Locations" ("Name", "Street1", "Street2", "City", "State", "ZIP") VALUES ('St Petersburg Office', '2020 Central Ave.', '', 'St. Petersburg', 'FL', '33712');
INSERT INTO "Locations" ("Name", "Street1", "Street2", "City", "State", "ZIP") VALUES ('Branch Office', '6918 Gunn Hwy', '', 'Tampa', 'FL', '33625');