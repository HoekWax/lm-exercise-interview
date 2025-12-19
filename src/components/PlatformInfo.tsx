import {
	IonBadge,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonNote,
} from "@ionic/react";
import {
	desktopOutline,
	globeOutline,
	phonePortraitOutline,
} from "ionicons/icons";
import { useEffect, useMemo, useState } from "react";
import {
	getModel,
	getOperatingSystem,
	getOsVersion,
	getPlatform,
	isDesktop,
	isElectron,
	isMobile,
} from "../utils/platform";

import "./PlatformInfo.scss";

type PlatformInfoState = {
	platform: string | null;
	os: string | null;
	osVersion: string | null;
	model: string | null;
};

const osLabelFr = (os: string | null) => {
	switch (os) {
		case "ios":
			return "iOS";
		case "android":
			return "Android";
		case "windows":
			return "Windows";
		case "mac":
			return "macOS";
		default:
			return os ?? "Inconnu";
	}
};

export const PlatformInfo = () => {
	const [state, setState] = useState<PlatformInfoState>({
		platform: null,
		os: null,
		osVersion: null,
		model: null,
	});

	const category = useMemo(() => {
		if (isMobile()) return "mobile";
		if (isElectron()) return "electron";
		if (isDesktop()) return "desktop";
		return "web";
	}, []);

	useEffect(() => {
		let alive = true;

		(async () => {
			const [platform, os, osVersion, model] = await Promise.all([
				getPlatform().catch(() => null),
				getOperatingSystem().catch(() => null),
				getOsVersion().catch(() => null),
				getModel().catch(() => null),
			]);

			if (!alive) return;
			setState({ platform, os, osVersion, model });
		})();

		return () => {
			alive = false;
		};
	}, []);

	const header = useMemo(() => {
		switch (category) {
			case "mobile":
				return {
					title: "Mobile",
					icon: phonePortraitOutline,
					color: "primary" as const,
				};
			case "electron":
				return {
					title: "Desktop (Electron)",
					icon: desktopOutline,
					color: "tertiary" as const,
				};
			case "desktop":
				return {
					title: "Desktop",
					icon: desktopOutline,
					color: "tertiary" as const,
				};
			default:
				return {
					title: "Web",
					icon: globeOutline,
					color: "medium" as const,
				};
		}
	}, [category]);

	return (
		<IonCard className={`platform-info`}>
			<IonCardHeader>
				<div className="platform-info__header">
					<div className="platform-info__title">
						<IonIcon icon={header.icon} />
						<IonCardTitle>{header.title}</IonCardTitle>
					</div>
					<IonBadge color={header.color}>Détecté</IonBadge>
				</div>
			</IonCardHeader>

			<IonCardContent>
				<IonList inset>
					<IonItem lines="full">
						<IonLabel>
							<div className="platform-info__kv">
								<span className="platform-info__k">
									Système
								</span>
								<span className="platform-info__v">
									{osLabelFr(state.os)}
								</span>
							</div>
						</IonLabel>
					</IonItem>

					<IonItem lines="full">
						<IonLabel>
							<div className="platform-info__kv">
								<span className="platform-info__k">
									Version de l’OS
								</span>
								<span className="platform-info__v">
									{state.osVersion ?? "Non disponible"}
								</span>
							</div>
						</IonLabel>
					</IonItem>

					<IonItem lines="none">
						<IonLabel>
							<div className="platform-info__kv">
								<span className="platform-info__k">
									Plateforme
								</span>
								<span className="platform-info__v">
									{state.platform ?? "Non disponible"}
								</span>
							</div>
						</IonLabel>
					</IonItem>
				</IonList>

				{state.model ? (
					<div className="platform-info__model">
						<IonNote>
							Appareil : <strong>{state.model}</strong>
						</IonNote>
					</div>
				) : null}
			</IonCardContent>
		</IonCard>
	);
};
