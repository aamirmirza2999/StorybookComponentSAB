import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "../constants/Theme/ThemeProvider";
import React from "react";
import { View } from "react-native";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "plain",
      values: [
        { name: "plain", value: "white" },
        { name: "warm", value: "hotpink" },
        { name: "cool", value: "deepskyblue" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <View style={{alignSelf:'center',justifyContent:'center'}}>
        <Story />
        </View>
         
    </ThemeProvider>
    ),
    withBackgrounds,
  ],
};

export default preview;
