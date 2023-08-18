import themes from "@/constants/themes";
import { useColorScheme } from "react-native";

const useTheme = () => {
  const colorScheme = useColorScheme();

  const theme = themes[colorScheme === "dark" ? "dark" : "light"];

  return theme;
};

export default useTheme;
