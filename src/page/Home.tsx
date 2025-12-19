import { IonButton, IonContent, IonPage } from "@ionic/react";

export const Home = () => {
	return (
		<IonPage>
			<IonContent className="ion-padding">
				<IonButton routerLink="/hello" routerDirection="forward">
					Hello
				</IonButton>
			</IonContent>
		</IonPage>
	);
};
