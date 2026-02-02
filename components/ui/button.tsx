import { forwardRef } from "react";
import { Pressable, Text, PressableProps, View } from "react-native";
import { cn } from "@/lib/utils";

interface ButtonProps extends PressableProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
}

const buttonVariants = {
  default: "bg-primary-600 active:bg-primary-700",
  destructive: "bg-red-600 active:bg-red-700",
  outline: "border border-slate-300 bg-transparent active:bg-slate-100",
  secondary: "bg-slate-200 active:bg-slate-300",
  ghost: "bg-transparent active:bg-slate-100",
  link: "bg-transparent",
};

const buttonSizes = {
  default: "h-12 px-6 py-3",
  sm: "h-9 px-4 py-2",
  lg: "h-14 px-8 py-4",
  icon: "h-12 w-12",
};

const textVariants = {
  default: "text-white font-semibold",
  destructive: "text-white font-semibold",
  outline: "text-slate-900 font-semibold",
  secondary: "text-slate-900 font-semibold",
  ghost: "text-slate-900 font-semibold",
  link: "text-primary-600 font-semibold underline",
};

const textSizes = {
  default: "text-base",
  sm: "text-sm",
  lg: "text-lg",
  icon: "text-base",
};

export const Button = forwardRef<View, ButtonProps>(
  ({ variant = "default", size = "default", children, className, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        className={cn(
          "flex-row items-center justify-center rounded-lg",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {typeof children === "string" ? (
          <Text className={cn(textVariants[variant], textSizes[size])}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    );
  }
);

Button.displayName = "Button";
