import { useTheme } from "@dashboard/theme";
import { type DefaultTheme } from "@saleor/macaw-ui-next";
import { render, screen } from "@testing-library/react";

import { WeenSpaceLogo } from "./WeenSpaceLogo";

jest.mock("@dashboard/theme", () => {
  const actualTheme = jest.requireActual("@dashboard/theme");

  return {
    ...actualTheme,
    useTheme: jest.fn(),
  };
});

describe("WeenSpaceLogo", () => {
  it("should display light mode logo when theme is defaultLight", () => {
    // Arrange
    const mockTheme: DefaultTheme = "defaultLight";

    (useTheme as jest.Mock).mockReturnValue({
      theme: mockTheme,
    });

    // Act
    render(<WeenSpaceLogo />);

    // Assert
    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", expect.stringContaining("sidebar-default-logo.png"));
  });

  it("should display dark mode logo when theme is defaultDark", () => {
    // Arrange
    const mockTheme: DefaultTheme = "defaultDark";

    (useTheme as jest.Mock).mockReturnValue({
      theme: mockTheme,
    });

    // Act
    render(<WeenSpaceLogo />);

    // Assert
    const img = screen.getByRole("img");

    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("sidebar-deafult-logo-darkMode.png"),
    );
  });

  it("should throw error when theme is invalid", () => {
    // Arrange
    const mockTheme = "invalidTheme" as DefaultTheme;

    (useTheme as jest.Mock).mockReturnValue({
      theme: mockTheme,
    });

    // Act & Assert
    expect(() => {
      render(<WeenSpaceLogo />);
    }).toThrow("Invalid theme mode, should not happen.");
  });
});
