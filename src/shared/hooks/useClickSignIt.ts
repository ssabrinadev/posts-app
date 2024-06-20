import { useOAuth } from "@clerk/clerk-expo";
import { useCallback } from "react";

export const useClickSignIn = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  
  return useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [])
};