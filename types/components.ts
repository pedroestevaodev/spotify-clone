import { IconType } from "react-icons";

export interface BoxProps {
    children: React.ReactNode;
    className?: string;
};

export interface HeaderProps {
    children: React.ReactNode;
    className?: string;
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {};

export interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
};

export interface ListItemProps {
    image: string;
    name: string;
    href: string;
};