// import { Stack } from "expo-router";
// import './globals.css';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen
//         name="(tabs)"
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="movies"
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="onboarding"
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="authentication"
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Stack>
//   )

// }




import { Stack, router, usePathname, Slot } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";
import './globals.css';

const STORAGE_KEY = "lastRoute";

export default function RootLayout() {
  const pathname = usePathname();
  const [isRestored, setIsRestored] = useState(false);

  // 📝 Save current path to AsyncStorage every time it changes
  useEffect(() => {
    if (pathname !== "/onboarding/onboarding1") {
      AsyncStorage.setItem(STORAGE_KEY, pathname);
    }
  }, [pathname]);

  // 🔁 Restore the last path on initial load
  useEffect(() => {
    const restoreRoute = async () => {
      try {
        const lastRoute = await AsyncStorage.getItem(STORAGE_KEY);
        if ( lastRoute && lastRoute !== "/onboarding/onboarding1" ) {
          router.replace(lastRoute as any);
        } else {
          router.replace('/home' as any)
        }
      } catch (error) {
        console.warn("Failed to restore route:", error);
      } finally {
        setIsRestored(true);
      }
    };

    restoreRoute();
  }, []);

  // ⏳ Show a loading screen while restoring the route
  if (!isRestored) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="movies"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="authentication"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}




// import { Slot, usePathname, router } from "expo-router";
// import { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { View, ActivityIndicator } from "react-native";
// import './globals.css';

// const STORAGE_KEY = "lastRoute";
// const IS_DEVELOPMENT = true; // ⬅ Only true in dev mode

// export default function RootLayout() {
//   const pathname = usePathname();
//   const [isRestored, setIsRestored] = useState(!IS_DEVELOPMENT); // skip restore in prod

//   // Save current route in AsyncStorage (only in dev)
//   useEffect(() => {
//     if (IS_DEVELOPMENT && pathname && pathname !== "/") {
//       AsyncStorage.setItem(STORAGE_KEY, pathname);
//     }
//   }, [pathname]);

//   // Restore route only during development
//   useEffect(() => {
//     if (!IS_DEVELOPMENT) return;

//     const restoreRoute = async () => {
//       try {
//         const lastRoute = await AsyncStorage.getItem(STORAGE_KEY);
//         if (
//           lastRoute &&
//           lastRoute !== pathname &&
//           lastRoute !== "/" &&
//           !pathname.startsWith(lastRoute)
//         ) {
//           requestAnimationFrame(() => {
//             router.replace(lastRoute as any);
//           });
//         }
//       } catch (err) {
//         console.warn("Failed to restore route:", err);
//       } finally {
//         setIsRestored(true);
//       }
//     };

//     restoreRoute();
//   }, []);

//   if (!isRestored) {
//     return (
//       <View className="flex-1 justify-center items-center bg-white">
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return <Slot />;
// }





