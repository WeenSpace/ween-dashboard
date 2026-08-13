import { getAbsoluteApiUrl, getApiUrl } from "@dashboard/config";

describe("global config", () => {
  const { location } = window;

  beforeEach((): void => {
    jest.clearAllMocks();

    delete (window as { location?: unknown }).location;

    const testingUrl = new URL("https://foo.weenspace.cloud/dashboard/product/asdf?aaaa=bbbb");

    // Mock window.location for testing purposes
    Object.defineProperty(window, "location", {
      // URL matches fields from location so we can just put it there
      value: testingUrl,
      writable: true,
      configurable: true,
    });
  });
  afterAll((): void => {
    Object.defineProperty(window, "location", {
      value: location,
      writable: true,
      configurable: true,
    });
  });

  describe("getApiUrl", () => {
    it.each(["/graphql/", "https://foo.weenspace.cloud/graphql/"])(
      "Returns value assigned to global window: %s",
      param => {
        window.__WEENSPACE_CONFIG__.API_URL = param;

        expect(getApiUrl()).toEqual(param);
      },
    );
  });

  describe("getAbsoluteApiUrl", () => {
    it.each<{ envParam: string; expected: string }>([
      {
        envParam: "/graphql/",
        expected: "https://foo.weenspace.cloud/graphql/",
      },
      {
        envParam: "https://foo.weenspace.cloud/graphql/",
        expected: "https://foo.weenspace.cloud/graphql/",
      },
      {
        envParam: "https://other.weenspace.cloud/graphql/",
        expected: "https://other.weenspace.cloud/graphql/",
      },
    ])("Correctly builds absolute url: %s", ({ envParam, expected }) => {
      window.__WEENSPACE_CONFIG__.API_URL = envParam;

      expect(getAbsoluteApiUrl()).toEqual(expected);
    });
  });
});
