# Expo Mobile Starter

A production-ready Expo template with Tailwind CSS (NativeWind) and shadcn-style components.

## Stack

- **Expo** - React Native framework
- **NativeWind** - Tailwind CSS for React Native
- **TypeScript** - Type safety
- **shadcn-style components** - Reusable, customizable UI components

## Quick Start

```bash
# Clone this template
npx degit excelsior-creative/expo-mobile-starter my-app
cd my-app

# Install dependencies
npm install

# Start development
npm start
```

## Folder Structure

```
├── App.tsx                 # Entry point
├── components/
│   └── ui/                 # shadcn-style components
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── screens/                # Screen components
├── lib/
│   └── utils.ts           # cn() utility for class merging
├── global.css             # Tailwind directives
├── tailwind.config.js     # Tailwind configuration
└── metro.config.js        # Metro bundler config
```

## Components

### Button

```tsx
import { Button } from "@/components/ui/button";

// Variants: default, secondary, destructive, outline, ghost, link
<Button variant="default">Click me</Button>

// Sizes: sm, default, lg, icon
<Button size="lg">Large Button</Button>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input

```tsx
import { Input } from "@/components/ui/input";

<Input
  label="Email"
  placeholder="you@example.com"
  error="Invalid email"
/>
```

## Customization

### Adding Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        600: '#your-darker-color',
      },
    },
  },
},
```

### Adding Components

Follow the shadcn pattern:
1. Create component in `components/ui/`
2. Use the `cn()` utility for class merging
3. Accept `className` prop for overrides
4. Export from `components/ui/index.ts`

## Resources

- [NativeWind Docs](https://www.nativewind.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Native Reusables](https://reactnativereusables.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

MIT
