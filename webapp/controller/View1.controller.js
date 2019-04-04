sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("report.ProdReport.controller.View1", {
		onInit: function () {
			//  $.ajax({

			// 	method: "GET",
			// 	url: "/DEVPortal",
			// 	headers: {
			// 		"X-DBP-APIKEY": "fb0BtZAYPigSPfv1K3TwYOlLUOGLxdqA"
			// 	},

			// 	success: function (oData) {

			// 		return oData;

			// 	},
			// 	error: function (oError) {

			// 	}

			// });
			jQuery.ajax({

				url: "/DEVPortal",
				//	url: "https://DBGAPIManagement.apimanagement.hana.ondemand.com:443/prod/prisma-margin-estimator/1.0.0/products",
				headers: {
					"X-DBP-APIKEY": "fb0BtZAYPigSPfv1K3TwYOlLUOGLxdqA"
				},
				async: false,
				method: "GET",
				dataType: "json",
				success: function (data) {
					
				},
				error: function (error) {

				}

			});

		}
	});
});