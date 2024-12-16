import { ButtonProps } from "@/types/components";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            ref={ref}
            type={type}
            className={twMerge(
                "w-full rounded-full bg-green-500 border border-transparent p-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition",
                className,
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
});

export { Button };