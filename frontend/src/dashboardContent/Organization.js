import React from "react";

import OrganizationOptions from "./organizationCards/OrganizationOptions";
import SwitchOrganization from "./organizationCards/SwitchOrganization";

function Organization() {
  //constants that determine which content is displayed
  const [organizationOptionsIsOpen, setOrganizationOptionsIsOpen] = React.useState(true);
  const [switchOrganizationIsOpen, setSwitchOrganizationIsOpen] = React.useState(false);
  const switchOrgRef = React.useRef();

  //functions for organization buttons
  function handleSwitchOrganizationClick() {
    setOrganizationOptionsIsOpen(false);
    setSwitchOrganizationIsOpen(true);
  }
  function handleGoBack() {
    setOrganizationOptionsIsOpen(true);
    setSwitchOrganizationIsOpen(false);
  }

  let content;
  if (organizationOptionsIsOpen) {
    content = <OrganizationOptions onSelect={handleSwitchOrganizationClick} />;
  } else if (switchOrganizationIsOpen) {
    content = <SwitchOrganization onSelect={handleGoBack}/>;
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

export default Organization;
  