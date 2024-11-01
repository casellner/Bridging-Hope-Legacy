CREATE TABLE tblAddress(
    addressID VARCHAR(50) NOT NULL PRIMARY KEY,
    addressLine1 VARCHAR(50),
    addressLine2 VARCHAR(50),
    city VARCHAR(20),
    state CHAR(2),
    zip INTEGER
);

CREATE TABLE tblPhone(
    phoneID VARCHAR(50) NOT NULL PRIMARY KEY,
    areaCode INTEGER,
    number INTEGER,
    isActive BOOLEAN,
    isSafe BOOLEAN
);

CREATE TABLE tblSession(
    sessionID VARCHAR(50) NOT NULL PRIMARY KEY,
    startDatetime DATETIME,
    lastActivityDatetime DATETIME,
    userAgent VARCHAR(250)
);

CREATE TABLE tblHouseholdMembers( 
    familyID VARCHAR(50) NOT NULL PRIMARY KEY, 
    familyName VARCHAR(60), 
    familySize INTEGER
    );

CREATE TABLE tblUser(
    userID VARCHAR(50) NOT NULL PRIMARY KEY,
    email VARCHAR(75),
    username VARCHAR(50),
    password VARCHAR(250),
    sessionID VARCHAR(50),
    FOREIGN KEY (sessionID) REFERENCES tblSession(sessionID)
    );

CREATE TABLE tblPrivileges (
    privilegeID VARCHAR(50) NOT NULL PRIMARY KEY,
    privilege VARCHAR(50),
    description VARCHAR(400)
    );

CREATE TABLE tblRole(
    roleID VARCHAR(50) NOT NULL PRIMARY KEY,
    roleName VARCHAR(50),
    privilegeID VARCHAR(50),
    FOREIGN KEY (privilegeID) REFERENCES tblPrivileges(privilegeID)
    );

CREATE TABLE tblDay(
    dayID VARCHAR(50) NOT NULL PRIMARY KEY,
    dayName VARCHAR(9),
    startTime TIME,
    endTime TIME
    );

CREATE TABLE tblAvailability (
    availabilityID VARCHAR(50) NOT NULL PRIMARY KEY,
    dayID VARCHAR(50),
    FOREIGN KEY (dayID) REFERENCES tblDay(dayID)
    );

CREATE TABLE tblVolunteer(
    volunteerID VARCHAR(50) NOT NULL PRIMARY KEY,
    userID VARCHAR(50),
    firstName VARCHAR(50),
    lastName VARCHAR(60),
    FOREIGN KEY (userId) REFERENCES tblUser(userID)
    );

CREATE TABLE tblOrgType(
    orgTypeID VARCHAR(50) NOT NULL PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(200)
    );

CREATE TABLE tblOrganization(
    orgID VARCHAR(50) NOT NULL PRIMARY KEY,
    orgName VARCHAR(20),
    addressID VARCHAR(50),
    orgTypeID VARCHAR(50),
    phoneID VARCHAR(50),
    email VARCHAR(75),
    orgLogo BLOB,
    FOREIGN KEY (addressID) REFERENCES tblAddress(addressID),
    FOREIGN KEY (orgTypeID) REFERENCES tblOrgType(orgTypeID),
    FOREIGN KEY (phoneID) REFERENCES tblPhone(phoneID)
    );

CREATE TABLE tblClientBackup( 
    clientBackupID VARCHAR(50) NOT NULL PRIMARY KEY, 
    firstName VARCHAR(50), 
    lastName VARCHAR(60), 
    DOB DATE, 
    photo BLOB, 
    addressID VARCHAR(50), 
    userID VARCHAR(50),
    dateChanged DATE
    );

CREATE TABLE tblClient( 
    clientID VARCHAR(50) NOT NULL PRIMARY KEY, 
    firstName VARCHAR(50), 
    lastName VARCHAR(60), 
    DOB DATE, 
    photo BLOB, 
    addressID VARCHAR(50), 
    email VARCHAR(75),
    userID VARCHAR(50),
    clientBackupID VARCHAR(50),
    orgID VARCHAR(50),
    FOREIGN KEY (addressID) REFERENCES tblAddress(addressID),
    FOREIGN KEY (userID) REFERENCES tblUser(userID),
    FOREIGN KEY (orgID) REFERENCES tblOrganization(orgID),
    FOREIGN KEY (clientBackupID) REFERENCES tblClientBackup(clientBackupID)
    );

CREATE TABLE tblHouseholds( 
    clientID VARCHAR(50),
    familyID VARCHAR(50),
    FOREIGN KEY (clientID) REFERENCES tblClient(clientID),
    FOREIGN KEY (familyID) REFERENCES tblHouseholdMembers(familyID)
    );

CREATE TABLE tblVolunteerOrgList(
    orgID VARCHAR(50),
    volunteerID VARCHAR(50),
    isActive BOOLEAN,
    FOREIGN KEY (orgID) REFERENCES tblOrganization(orgID),
    FOREIGN KEY (volunteerID) REFERENCES tblVolunteer(volunteerID)
);

CREATE TABLE tblClientOrgList(
    orgID VARCHAR(50),
    clientID VARCHAR(50),
    isActive BOOLEAN,
    FOREIGN KEY (orgID) REFERENCES tblOrganization(orgID),
    FOREIGN KEY (clientID) REFERENCES tblClient(clientID)
);

CREATE TABLE tblServiceType(
    serviceTypeID VARCHAR(50) NOT NULL PRIMARY KEY,
    name VARCHAR(30),
    description VARCHAR(200)
);

CREATE TABLE tblService(
    serviceID VARCHAR(50) NOT NULL PRIMARY KEY,
    serviceName VARCHAR(30),
    serviceTypeID VARCHAR(50),
    orgID VARCHAR(50),
    description VARCHAR(200),
    availabilityID VARCHAR(50),
    FOREIGN KEY (serviceTypeID) REFERENCES tblServiceType(serviceTypeID),
    FOREIGN KEY (orgID) REFERENCES tblOrganization(orgID),
    FOREIGN KEY (availabilityID) REFERENCES tblAvailability(availabilityID)
);

CREATE TABLE tblVisit(
    visitID VARCHAR(50) NOT NULL PRIMARY KEY,
    date DATE,
    clientID VARCHAR(50),
    serviceID VARCHAR(50),
    notes VARCHAR(500),
    FOREIGN KEY (clientID) REFERENCES tblClient(clientID),
    FOREIGN KEY (serviceID) REFERENCES tblService(serviceID)
);

CREATE TABLE tblOrgRoles(
    orgRoleID VARCHAR(50) NOT NULL PRIMARY KEY,
    orgID VARCHAR(50),
    roleID VARCHAR(50),
    userID VARCHAR(50),
    FOREIGN KEY (orgID) REFERENCES tblOrganization(orgID),
    FOREIGN KEY (roleID) REFERENCES tblRole(roleID),
    FOREIGN KEY (userID) REFERENCES tblUser(userID)
);
