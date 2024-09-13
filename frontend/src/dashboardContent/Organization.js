import React from "react";

import OrganizationOptions from "./organizationCards/OrganizationOptions";
import SwitchOrganization from "./organizationCards/SwitchOrganization";
import EditOrganization from "./organizationCards/EditOrganization";
import ManageVolunteers from "./organizationCards/ManageVolunteers";

function Organization() {
  //constants that determine which content is displayed
  const [organizationOptionsIsOpen, setOrganizationOptionsIsOpen] = React.useState(true);
  const [switchOrganizationIsOpen, setSwitchOrganizationIsOpen] = React.useState(false);
  const [editOrganizationIsOpen, setEditOrganizationIsOpen] = React.useState(false);
  const [manageVolunteersIsOpen, setManageVolunteersIsOpen] = React.useState(false);

  //functions for organization buttons
  function handleSwitchOrganizationClick() {
    setOrganizationOptionsIsOpen(false);
    setSwitchOrganizationIsOpen(true);
  }
  function handleEditOrganizationClick() {
    setOrganizationOptionsIsOpen(false);
    setEditOrganizationIsOpen(true);
  }
  function handleManageVolunteersClick() {
    setOrganizationOptionsIsOpen(false);
    setManageVolunteersIsOpen(true);
  }
  //function for back buttons in switch organization, edit organization, and manage volunteers
  function handleGoBack() {
    setOrganizationOptionsIsOpen(true);
    setSwitchOrganizationIsOpen(false);
    setEditOrganizationIsOpen(false);
    setManageVolunteersIsOpen(false);
  }

  let content;
  if (organizationOptionsIsOpen) {
    content = <OrganizationOptions onSelectSwitchOrg={handleSwitchOrganizationClick} onSelectEditOrg={handleEditOrganizationClick} onSelectManageVolunteers={handleManageVolunteersClick} />;
  } else if (switchOrganizationIsOpen) {
    content = <SwitchOrganization onSelectBack={handleGoBack}/>;
  } else if (editOrganizationIsOpen) {
    content = <EditOrganization onSelectBack={handleGoBack}/>;
  } else if (manageVolunteersIsOpen) {
    content = <ManageVolunteers onSelectBack={handleGoBack}/>;
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

export default Organization;
  