import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

type PlatformMocks = {
  isMobile?: boolean;
  isElectron?: boolean;
  isDesktop?: boolean;
  platform?: string | null;
  os?: string | null;
  osVersion?: string | null;
  model?: string | null;
};

async function renderWithPlatform(mocks: PlatformMocks) {
  vi.resetModules();

  vi.doMock("../utils/platform", () => {
    return {
      isMobile: vi.fn(() => mocks.isMobile ?? false),
      isElectron: vi.fn(() => mocks.isElectron ?? false),
      isDesktop: vi.fn(() => mocks.isDesktop ?? false),
      getPlatform: vi.fn(async () => mocks.platform ?? "web"),
      getOperatingSystem: vi.fn(async () => mocks.os ?? "unknown"),
      getOsVersion: vi.fn(async () => mocks.osVersion ?? null),
      getModel: vi.fn(async () => mocks.model ?? null),
    };
  });

  const { PlatformInfo } = await import("./PlatformInfo");
  render(<PlatformInfo />);
}

describe("PlatformInfo", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("rend correctement (structure de base + badge)", async () => {
    await renderWithPlatform({
      isDesktop: false,
      isElectron: false,
      isMobile: false,
      platform: "web",
      os: "unknown",
      osVersion: null,
      model: null,
    });

    expect(screen.getByText("Détecté")).toBeInTheDocument();
    expect(screen.getByText("Système")).toBeInTheDocument();
    expect(screen.getByText("Version de l’OS")).toBeInTheDocument();
    expect(screen.getByText("Plateforme")).toBeInTheDocument();

    // Catégorie "Web"
    expect(screen.getByText("Web")).toBeInTheDocument();

    // Valeurs asynchrones (via useEffect)
    expect(await screen.findByText("Inconnu")).toBeInTheDocument();
    expect(await screen.findByText("web")).toBeInTheDocument();
    expect(await screen.findByText("Non disponible")).toBeInTheDocument();
  });

  it("affiche le scénario Mobile (Android) avec la version et le modèle", async () => {
    await renderWithPlatform({
      isMobile: true,
      platform: "android",
      os: "android",
      osVersion: "14",
      model: "Pixel 8",
    });

    expect(screen.getByText("Mobile")).toBeInTheDocument();

    expect(await screen.findByText("Android")).toBeInTheDocument();
    expect(await screen.findByText("14")).toBeInTheDocument();
    expect(await screen.findByText("android")).toBeInTheDocument();

    expect(await screen.findByText(/Appareil\s*:/)).toBeInTheDocument();
    expect(await screen.findByText("Pixel 8")).toBeInTheDocument();
  });

  it("affiche le scénario Desktop/Electron", async () => {
    await renderWithPlatform({
      isElectron: true,
      platform: "electron",
      os: "mac",
      osVersion: "15.1",
      model: "MacBook Pro",
    });

    expect(screen.getByText("Desktop (Electron)")).toBeInTheDocument();

    expect(await screen.findByText("macOS")).toBeInTheDocument();
    expect(await screen.findByText("15.1")).toBeInTheDocument();
    expect(await screen.findByText("electron")).toBeInTheDocument();
  });
});


