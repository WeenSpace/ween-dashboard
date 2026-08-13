import weenspaceLogoDarkMode from "@assets/images/sidebar-deafult-logo-darkMode.png";
import weenspaceLogoLightMode from "@assets/images/sidebar-default-logo.png";
import { useTheme } from "@dashboard/theme";
import { type DefaultTheme } from "@saleor/macaw-ui-next";

const getWeenSpaceLogoUrl = (theme: DefaultTheme) => {
  switch (theme) {
    case "defaultLight":
      return weenspaceLogoLightMode;
    case "defaultDark":
      return weenspaceLogoDarkMode;
    default:
      throw new Error("Invalid theme mode, should not happen.");
  }
};

export const WeenSpaceLogo = () => {
  const { theme } = useTheme();

  return <img src={getWeenSpaceLogoUrl(theme)} alt="" />;
};
