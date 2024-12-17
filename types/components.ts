import { IconType } from "react-icons";
import { Price, Product } from "./subscriptions";

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

export interface SidebarProps {
    children: React.ReactNode;
    songs: Song[];
};

export interface LibraryProps {
    songs: Song[];
};

export interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
};

export interface ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export interface PlayerStore {
    ids: string[];
    activeId?: string;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {};

export interface Song {
    id: string;
    user_id: string;
    author: string;
    title: string;
    song_path: string;
    image_path: string;
};

export interface PageContentProps {
    songs: Song[];
};

export interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
};

export interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
};

export interface PlayerContentProps {
    song: Song;
    songUrl: string;
};

export interface SliderProps {
    value?: number;
    onChange?: (value: number) => void;
};

export interface ProductWithPrice extends Product {
    prices?: Price[];
};

export interface ModalProviderProps {
    products: ProductWithPrice[];
};

export interface SubscribeModalProps {
    products: ProductWithPrice[];
};