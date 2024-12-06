# Database Documentation

The database schema can be found at [this link.](https://lucid.app/lucidchart/d6e8ad50-e158-44c6-a246-61125727b8e2/edit?viewport_loc=-2854%2C426%2C2242%2C1277%2C0_0&invitationId=inv_55b0ee6d-4c57-44c6-9d7c-7d82ad58eb26)

# Core Tables

Our main tables consist of tblClient, tblUser, tblVolunteer, and tblOrganization

-User is a base class used by clients and volunteers for logging in and viewing their respective data
-Volunteers are a classs of user that are assigned to one or more organizations, and are able to register new
clients at those organzations, and log visits
-Clients are a class of users that are able to login and view their data. They are the people visiting the organizations to receive aid
-Organzations are the groups Volunteers are registered to, and the places clients visit

# Linking Voulnteers and Clients to an Organization

Volunteers and clients are linked to an Organization through the tblVolunteerOrgList, and tblClientOrgList tables, respectively. This allows them to be easily regisered to multiple organizations, and unlinked easily by just removing the values.

# Data Tables

The phone, address, visit, service, and availability tables all contain data that is important to their respective tables.

# Session Information

The data for user session is contained within the tblSession table, which is linked to the user. It is used to validat a session so users dont need to log back in, and autolog out users after a certain period of time.

# Password Reset

Password reset data is stored in tblPasswordReset, which is used to generate a token linked to a userID that expires after a certain amount of time
