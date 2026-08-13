import { isInternalToken } from "./helpers";

describe("isInternalToken", () => {
  it("returns true for 'weenspace' owner", () => {
    // Arrange
    const owner = "weenspace";

    // Act
    const result = isInternalToken(owner);

    // Assert
    expect(result).toBe(true);
  });

  it("returns false for empty string", () => {
    // Arrange
    const owner = "";

    // Act
    const result = isInternalToken(owner);

    // Assert
    expect(result).toBe(false);
  });

  it("returns false for 'google'", () => {
    // Arrange
    const owner = "google";

    // Act
    const result = isInternalToken(owner);

    // Assert
    expect(result).toBe(false);
  });

  it("returns false for 'openid'", () => {
    // Arrange
    const owner = "openid";

    // Act
    const result = isInternalToken(owner);

    // Assert
    expect(result).toBe(false);
  });

  it("returns false for 'WeenSpace' (case-sensitive)", () => {
    // Arrange
    const owner = "WeenSpace";

    // Act
    const result = isInternalToken(owner);

    // Assert
    expect(result).toBe(false);
  });
});
