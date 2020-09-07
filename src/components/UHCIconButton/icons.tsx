import React from "react";

interface IProps {
  size: string;
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
