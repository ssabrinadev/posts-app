import * as SecureStore from "expo-secure-store";
import { TCacheTokenProps } from "./types";

export const tokenCache: TCacheTokenProps = {
  async getToken(key: string): Promise<string | null> {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error(err);
    }
  },
};