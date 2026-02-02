import "./global.css";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "./components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card";
import { Input } from "./components/ui/input";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-50">
        <StatusBar style="dark" />
        <ScrollView className="flex-1 p-4">
          {/* Header */}
          <View className="mb-8">
            <Text className="text-3xl font-bold text-slate-900">
              Expo Mobile Starter
            </Text>
            <Text className="text-slate-500 mt-1">
              NativeWind + shadcn-style components
            </Text>
          </View>

          {/* Demo Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Welcome! 👋</CardTitle>
              <CardDescription>
                This template includes Tailwind CSS (NativeWind) and reusable
                components inspired by shadcn/ui.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                label="Your Name"
                placeholder="Enter your name"
              />
            </CardContent>
            <CardFooter>
              <Button
                variant="default"
                onPress={() => alert("Hello from Expo!")}
              >
                Say Hello
              </Button>
              <Button variant="outline">
                Cancel
              </Button>
            </CardFooter>
          </Card>

          {/* Button Variants */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                All the button styles you need
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link Style</Button>
            </CardContent>
          </Card>

          {/* Button Sizes */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
            </CardHeader>
            <CardContent className="gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </CardContent>
          </Card>

          {/* Input Examples */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Form Inputs</CardTitle>
            </CardHeader>
            <CardContent className="gap-4">
              <Input
                label="Email"
                placeholder="you@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Input
                label="Password"
                placeholder="••••••••"
                secureTextEntry
              />
              <Input
                label="With Error"
                placeholder="Enter something"
                error="This field is required"
              />
            </CardContent>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
