sap.ui.define([
		"demo/zgitApp/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("demo.zgitApp.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);