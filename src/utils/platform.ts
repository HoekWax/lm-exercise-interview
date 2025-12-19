import { Device } from "@capacitor/device";
import { getPlatforms } from "@ionic/react";

export const isElectron = () => getPlatforms().includes("electron");
export const isDesktop = () => getPlatforms().includes("desktop");
export const isMobile = () => getPlatforms().includes("mobile");

export type AppPlatform = "web" | "android" | "ios" | "electron";
export type AppOperatingSystem =
	| "ios"
	| "android"
	| "windows"
	| "mac"
	| "unknown";

export const getPlatform = async (): Promise<AppPlatform> => {
	if (getPlatforms().includes("electron")) {
		return "electron";
	}
	return Device.getInfo().then((deviceInfo) => deviceInfo.platform);
};

export const getOperatingSystem = async (): Promise<AppOperatingSystem> =>
	(await Device.getInfo()).operatingSystem;

export const getOsVersion = async (): Promise<string | null> =>
	(await Device.getInfo()).osVersion ?? null;

export const getModel = async (): Promise<string | null> =>
	(await Device.getInfo()).model ?? null;
