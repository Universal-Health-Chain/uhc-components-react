import React from "react";

export type IconSize = "big" | "small" | undefined;

//@ts-ignore
import Search from "./assets/search.svg";
//@ts-ignore
import View from "./assets/view.svg";
//@ts-ignore
import More from "./assets/more.svg";
//@ts-ignore
import RequestDocument from "./assets/request-document.svg";
//@ts-ignore
import DonorInformation from "./assets/donor-information.svg";
//@ts-ignore
import Consent from "./assets/consent.svg";

//@ts-ignore
import GetDocument from "./assets/get-document.svg";
//@ts-ignore
import NewDocument from "./assets/new-document.svg";
//@ts-ignore
import ConnectionDetails from "./assets/connection-details.svg";
//@ts-ignore
import NewMessages from "./assets/new-messages.svg";
//@ts-ignore
import Document from "./assets/document.svg";
//@ts-ignore
import ClinicalTrials from "./assets/clinical-trials.svg";
//@ts-ignore
import SendMessage from "./assets/send-message.svg";
//@ts-ignore
import ImagingStudies from "./assets/imaging-studies.svg";
//@ts-ignore
import NewAppointment from "./assets/new-appointment.svg";
//@ts-ignore
import VideoCall from "./assets/video-call.svg";
//@ts-ignore
import Servers from "./assets/servers.svg";
//@ts-ignore
import Awards from "./assets/awards.svg";
//@ts-ignore
import Contacts from "./assets/contacts.svg";
//@ts-ignore
import MedicalDevices from "./assets/medical-devices.svg";
//@ts-ignore
import Organization from "./assets/organization.svg";
//@ts-ignore
import Profile from "./assets/profile.svg";
//@ts-ignore
import Research from "./assets/research.svg";
//@ts-ignore
import Studies from "./assets/studies.svg";
//@ts-ignore
import MedicalProfile from "./assets/medical-profile.svg";
//@ts-ignore
import Prescriptions from "./assets/prescriptions.svg";
//@ts-ignore
import Invite from "./assets/invite.svg";
//@ts-ignore
import Emergencies from "./assets/emergencies.svg";
//@ts-ignore
import InsuranceAndPolicies from "./assets/insurance-and-policies.svg";

interface IProps {
  size: IconSize;
}
export const ArrowRightIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <svg
      width={size === "big" ? "36" : "16"}
      height={size === "big" ? "36" : "16"}
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
        fill="white"
      />
    </svg>
  );
};

export const ArrowLeftIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <svg
      width={size === "big" ? "36" : "16"}
      height={size === "big" ? "36" : "16"}
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
        fill="white"
      />
    </svg>
  );
};

export const SmallArrowDownIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <svg
      width={size === "big" ? "36" : "16"}
      height={size === "big" ? "36" : "16"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SearchIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Search}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const ViewIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={View}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const MoreIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={More}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const RequestDocumentIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <img
      src={RequestDocument}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const DonorInformationIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <img
      src={DonorInformation}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const ConsentIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Consent}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const GetDocumentIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={GetDocument}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const NewDocumentIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={NewDocument}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const ConnectionDetailsIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <img
      src={ConnectionDetails}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const NewMessagesIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={NewMessages}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const DocumentIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Document}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const ClinicalTrialsIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <img
      src={ClinicalTrials}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const SendMessageIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={SendMessage}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const ImagingStudiesIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <img
      src={ImagingStudies}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const NewAppointmentIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <img
      src={NewAppointment}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const VideoCallIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={VideoCall}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const ServersIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Servers}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const AwardsIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Awards}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const ContactsIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Contacts}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const MedicalDevicesIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <img
      src={MedicalDevices}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const OrganizationIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Organization}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const ProfileIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Profile}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const ResearchIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Research}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const StudiesIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Studies}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const MedicalProfileIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <img
      src={MedicalProfile}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const PrescriptionsIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <img
      src={Prescriptions}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const InviteIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Invite}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const EmergenciesIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <img
      src={Emergencies}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};

export const InsuranceAndPoliciesIcon: React.FunctionComponent<IProps> = ({
  size,
}) => {
  return (
    <img
      src={InsuranceAndPolicies}
      style={{
        width: size === "big" ? 36 : 16,
        height: size === "big" ? 36 : 16,
      }}
    ></img>
  );
};
