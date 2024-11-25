import { view } from "./storybook.requires";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem as (key: string) => Promise<string | null>,
    setItem: AsyncStorage.setItem as (key: string, value: string) => Promise<void>,
  },
});

export default StorybookUIRoot;
