import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show links to other pages", () => {
      render(<Header />);

      const csrLink = screen.getByRole("link", { name: "Pokémon (CSR)" });
      const homeLink = screen.getByRole("link", {
        name: "JustR-Pokémon Next.js",
      });
      const ssrLink = screen.getByRole("link", { name: "Mis pokémon SSR" });
      const isrLink = screen.getByRole("link", { name: "Mis pokémon ISR" });
      const hamburgerButton = screen.getByRole("button", {
        name: "Toggle navigation",
      });

      expect(csrLink).toBeInTheDocument();
      expect(homeLink).toBeInTheDocument();
      expect(ssrLink).toBeInTheDocument();
      expect(isrLink).toBeInTheDocument();
      expect(hamburgerButton).toBeInTheDocument();
    });
  });
});
