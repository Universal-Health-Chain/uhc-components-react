import React from "react";
import { SContainer } from "./style";
import {
  SearchIcon,
  ViewIcon,
  MoreIcon,
  RequestDocumentIcon,
  DonorInformationIcon,
  ConsentIcon,
  GetDocumentIcon,
  NewDocumentIcon,
  ConnectionDetailsIcon,
  NewMessagesIcon,
  DocumentIcon,
  ClinicalTrialsIcon,
  SendMessageIcon,
  ImagingStudiesIcon,
  NewAppointmentIcon,
  VideoCallIcon,
  ServersIcon,
  AwardsIcon,
  ContactsIcon,
  MedicalDevicesIcon,
  OrganizationIcon,
  ProfileIcon,
  ResearchIcon,
  StudiesIcon,
  MedicalProfileIcon,
  PrescriptionsIcon,
  InviteIcon,
  EmergenciesIcon,
  InsuranceAndPoliciesIcon,
  IconSize,
} from "../icons";

export type IconName =
  | "search"
  | "view"
  | "more"
  | "request-document"
  | "donor-information"
  | "consent"
  | "get-document"
  | "new-document"
  | "connection-details"
  | "new-messages"
  | "document"
  | "clinical-trials"
  | "send-message"
  | "imaging-studies"
  | "new-appointment"
  | "video-call"
  | "servers"
  | "awards"
  | "contacts"
  | "medical-devices"
  | "organization"
  | "profile"
  | "research"
  | "studies"
  | "medical-profile"
  | "prescriptions"
  | "invite"
  | "emergencies"
  | "insurance-and-policies";

interface IProps {
  name: IconName;
  size?: IconSize;
}

const getIcon = (name: IconName) => {
  switch (name) {
    case "search":
      return SearchIcon;
    case "view":
      return ViewIcon;
    case "more":
      return MoreIcon;
    case "request-document":
      return RequestDocumentIcon;
    case "donor-information":
      return DonorInformationIcon;
    case "consent":
      return ConsentIcon;
    case "get-document":
      return GetDocumentIcon;
    case "new-document":
      return NewDocumentIcon;
    case "connection-details":
      return ConnectionDetailsIcon;
    case "new-messages":
      return NewMessagesIcon;
    case "document":
      return DocumentIcon;
    case "clinical-trials":
      return ClinicalTrialsIcon;
    case "send-message":
      return SendMessageIcon;
    case "imaging-studies":
      return ImagingStudiesIcon;
    case "new-appointment":
      return NewAppointmentIcon;
    case "video-call":
      return VideoCallIcon;
    case "servers":
      return ServersIcon;
    case "awards":
      return AwardsIcon;
    case "contacts":
      return ContactsIcon;
    case "medical-devices":
      return MedicalDevicesIcon;
    case "organization":
      return OrganizationIcon;
    case "profile":
      return ProfileIcon;
    case "research":
      return ResearchIcon;
    case "studies":
      return StudiesIcon;
    case "medical-profile":
      return MedicalProfileIcon;
    case "prescriptions":
      return PrescriptionsIcon;
    case "studies":
      return StudiesIcon;
    case "medical-profile":
      return MedicalProfileIcon;
    case "invite":
      return InviteIcon;
    case "emergencies":
      return EmergenciesIcon;
    case "insurance-and-policies":
      return InsuranceAndPoliciesIcon;

    default:
      throw new Error(`An icon with this name doesn't exist: ${name}`);
  }
};
const UHCIcon: React.FunctionComponent<IProps> = ({ name, size }) => {
  const Icon = getIcon(name);

  return (
    <SContainer>
      <Icon size={size}></Icon>
    </SContainer>
  );
};

UHCIcon.defaultProps = {
  size: "big",
};

export default UHCIcon;
