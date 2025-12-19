import {
	IonAvatar,
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
	IonText,
	IonTitle,
	IonToggle,
	IonToolbar,
} from "@ionic/react";
import { briefcaseOutline, calendarOutline, mailOutline } from "ionicons/icons";
import avatarUrl from "../assets/jean.png";

import { PlatformInfo } from "../components/PlatformInfo";
import "./Hello.scss";

const mockUser = {
	name: "Jean Gabin",
	email: "jean.gabin@example.com",
	role: "Acteur",
	joinedAt: "Dec 2025",
};

export const Hello = () => {
	return (
		<IonPage className="hello-page">
			<IonHeader>
				<IonToolbar>
					<IonTitle>Profil</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent className="ion-padding">
				<IonCard className="hello-card">
					<IonCardHeader>
						<div className="hello-card__header">
							<IonAvatar className="hello-card__avatar">
								<img src={avatarUrl} alt="User avatar" />
							</IonAvatar>

							<div className="hello-card__meta">
								<IonCardTitle>{mockUser.name}</IonCardTitle>
							</div>
						</div>
					</IonCardHeader>

					<IonCardContent>
						<IonText color="medium">
							<p className="hello-card__blurb">
								Infos sur Jean Gabin, lorem ipsum dolor sit
								amet.
							</p>
						</IonText>

						<IonList inset className="hello-card__list">
							<IonItem lines="full">
								<IonIcon slot="start" icon={mailOutline} />
								<IonLabel>
									<div className="hello-kv">
										<span className="hello-kv__k">
											Email
										</span>
										<span className="hello-kv__v">
											{mockUser.email}
										</span>
									</div>
								</IonLabel>
							</IonItem>

							<IonItem lines="full">
								<IonIcon slot="start" icon={briefcaseOutline} />
								<IonLabel>
									<div className="hello-kv">
										<span className="hello-kv__k">
											Role
										</span>
										<span className="hello-kv__v">
											{mockUser.role}
										</span>
									</div>
								</IonLabel>
							</IonItem>

							<IonItem lines="none">
								<IonIcon slot="start" icon={calendarOutline} />
								<IonLabel>
									<div className="hello-kv">
										<span className="hello-kv__k">
											Joined
										</span>
										<span className="hello-kv__v">
											{mockUser.joinedAt}
										</span>
									</div>
								</IonLabel>
							</IonItem>
						</IonList>

						<div className="hello-section">
							<div className="hello-section__title">
								Preferences
							</div>
							<IonItem lines="none" className="hello-pref">
								<IonLabel>Activer les notifications</IonLabel>
								<IonToggle checked />
							</IonItem>
						</div>
					</IonCardContent>
				</IonCard>

				<PlatformInfo />

				<IonButton routerLink="/home" routerDirection="back">
					Retour
				</IonButton>
			</IonContent>
		</IonPage>
	);
};
