import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface LinkProps {
  link: string;
  content: string;
}

export interface ButtonProps extends LinkProps {
  disabled?: boolean;
  onClick?: () => void;
}

export interface TitleProps {
  title: string;
}

export interface IconProps extends TitleProps {
  value: string | number;
  icon: IconProp;
}

export interface APIResponse {
  statusCode: number;
  body: string;
}

export interface FormState {
  latitude: boolean;
  longitude: boolean;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface TabValueState {
  value: number;
}
