sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("report.ProdReport.controller.View1", {
		onInit: function () {
			var data = $.ajax({

				method: "GET",
				url: "/DEVPortal",
				headers: {
					"X-DBP-APIKEY": "fb0BtZAYPigSPfv1K3TwYOlLUOGLxdqA"
				},

				success: function (oData) {

					return oData;

				},
				error: function (oError) {

				}

			});

		}
	});
});