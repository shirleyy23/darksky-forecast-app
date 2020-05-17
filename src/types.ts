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
