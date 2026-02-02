import { View, Text, ViewProps, TextProps } from "react-native";
import { cn } from "@/lib/utils";

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <View
      className={cn(
        "rounded-xl border border-slate-200 bg-white shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </View>
  );
}

export function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <View className={cn("p-6 pb-0", className)} {...props}>
      {children}
    </View>
  );
}

export function CardTitle({ children, className, ...props }: TextProps & { children: React.ReactNode }) {
  return (
    <Text
      className={cn("text-xl font-semibold text-slate-900", className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function CardDescription({ children, className, ...props }: TextProps & { children: React.ReactNode }) {
  return (
    <Text
      className={cn("text-sm text-slate-500 mt-1", className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function CardContent({ children, className, ...props }: CardProps) {
  return (
    <View className={cn("p-6", className)} {...props}>
      {children}
    </View>
  );
}

export function CardFooter({ children, className, ...props }: CardProps) {
  return (
    <View className={cn("p-6 pt-0 flex-row gap-2", className)} {...props}>
      {children}
    </View>
  );
}
