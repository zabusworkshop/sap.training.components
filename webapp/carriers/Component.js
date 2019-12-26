sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/training/carriers/controller/CarriersDialog"
], function(UIComponent, CarriersDialog) {

	"use strict";
	return UIComponent.extend("sap.training.carriers.Component", {

		metadata: {
			manifest: "json"
		},
		
		init: function() {
			
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			//set dialog
			this.carriersDialog = new CarriersDialog();
			
		}

	});
});