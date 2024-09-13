import React from "react";

import OrganizationOptions from "./organizationCards/OrganizationOptions";
import SwitchOrganization from "./organizationCards/SwitchOrganization";
import EditOrganization from "./organizationCards/EditOrganization";

function Organization() {
  //constants that determine which content is displayed
  const [organizationOptionsIsOpen, setOrganizationOptionsIsOpen] = React.useState(true);
  const [switchOrganizationIsOpen, setSwitchOrganizationIsOpen] = React.useState(false);
  const [editOrganizationIsOpen, setEditOrganizationIsOpen] = React.useState(false);
  

  //functions for organization buttons
  function handleSwitchOrganizationClick() {
    setOrganizationOptionsIsOpen(false);
    setSwitchOrganizationIsOpen(true);
  }
  function handleEditOrganizationClick() {
    setOrganizationOptionsIsOpen(false);
    setEditOrganizationIsOpen(true);
  }
  function handleGoBack() {
    setOrganizationOptionsIsOpen(true);
    setSwitchOrganizationIsOpen(false);
  }

  let content;
  if (organizationOptionsIsOpen) {
    content = <OrganizationOptions onSelectSwitchOrg={handleSwitchOrganizationClick} onSelectEditOrg={handleEditOrganizationClick} />;
  } else if (switchOrganizationIsOpen) {
    content = <SwitchOrganization onSelectBack={handleGoBack}/>;
  } else if (editOrganizationIsOpen) {
    content = <EditOrganization onSelectBack={handleGoBack}/>;
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

export default Organization;
  