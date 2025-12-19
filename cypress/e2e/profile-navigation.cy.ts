describe("Navigation Profil", () => {
	it("navigue de Home vers Profil et affiche PlatformInfo", () => {
		cy.visit("/home");

		cy.contains("ion-button", "Hello").click();

		cy.url().should("include", "/hello");
		cy.contains("ion-title", "Profil").should("be.visible");

		// PlatformInfo
		// Ionic utilise un ion-content scrollable + header fixed : on scrolle avant d'asserter la visibilité
		cy.contains("ion-badge", "Détecté", { timeout: 10000 })
			.scrollIntoView()
			.should("be.visible");

		// Le contenu doit exister (la visibilité peut dépendre du scroll / overlay)
		cy.contains("Système").should("exist");
		cy.contains("Version de l’OS").should("exist");
		cy.contains("Plateforme").should("exist");

		// Le titre dépend de la détection Ionic (web/desktop/mobile)
		cy.contains(/^(Web|Desktop|Desktop \(Electron\)|Mobile)$/).should(
			"exist"
		);
	});
});
