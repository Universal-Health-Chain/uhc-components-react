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
  color?: string;
}
export const ArrowRightIcon: React.FunctionComponent<IProps> = ({
  size,
  color,
}) => {
  return (
    <svg
      width={size === "big" ? "36" : "16"}
      height={size === "big" ? "36" : "16"}
      viewBox="0 0 24 24"
      fill={color ? color : "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};

export const ArrowLeftIcon: React.FunctionComponent<IProps> = ({
  size,
  color,
}) => {
  return (
    <svg
      width={size === "big" ? "36" : "16"}
      height={size === "big" ? "36" : "16"}
      viewBox="0 0 24 24"
      fill={color ? color : "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};

export const SortIcon: React.FunctionComponent<IProps> = ({ size, color }) => {
  return (
    <svg
      width={size === "big" ? "36" : "16"}
      height={size === "big" ? "36" : "16"}
      viewBox="0 0 24 24"
      fill={color ? color : "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
        fill={color ? color : "white"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};

export const FindIcon: React.FunctionComponent<IProps> = ({ size, color }) => {
  return (
    <svg
      width={size === "big" ? "36" : "16"}
      height={size === "big" ? "36" : "16"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
        fill={color ? color : "black"}
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

export const HideIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <svg
      width={size === "big" ? "36" : "16"}
      height={size === "big" ? "36" : "16"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ShowIcon: React.FunctionComponent<IProps> = ({ size }) => {
  return (
    <svg
      width={size === "big" ? "36" : "16"}
      height={size === "big" ? "36" : "16"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3C6.40848 3 1.71018 6.82432 0.378052 12C1.71018 17.1757 6.40848 21 12 21C17.5915 21 22.2898 17.1757 23.6219 12C22.2898 6.82432 17.5915 3 12 3ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
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
