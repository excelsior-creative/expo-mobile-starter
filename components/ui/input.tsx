import { forwardRef } from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import { cn } from "@/lib/utils";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <View className="w-full">
        {label && (
          <Text className="text-sm font-medium text-slate-700 mb-2">
            {label}
          </Text>
        )}
        <TextInput
          ref={ref}
          className={cn(
            "h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-900",
            "placeholder:text-slate-400",
            "focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
            error && "border-red-500",
            className
          )}
          placeholderTextColor="#94a3b8"
          {...props}
        />
        {error && (
          <Text className="text-sm text-red-500 mt-1">{error}</Text>
        )}
      </View>
    );
  }
);

Input.displayName = "Input";
