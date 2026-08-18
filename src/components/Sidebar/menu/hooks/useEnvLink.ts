const UTM_PARAMS = "?utm_source=dashboard&utm_content=sidebar_button";

// Links are hardcoded until env URLs are sourced from config.
const stagingLink = (hostname: string) =>
  `https://cloud.staging.weenspace.com/env/${hostname}${UTM_PARAMS}`;

const prodLink = (hostname: string) => `https://cloud.weenspace.com/env/${hostname}${UTM_PARAMS}`;

export const useEnvLink = () => {
  const { hostname } = window.location;

  if (hostname.includes(".staging.")) {
    return stagingLink(hostname);
  }

  return prodLink(hostname);
};
