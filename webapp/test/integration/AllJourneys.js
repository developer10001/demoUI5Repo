/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"demo/zgitApp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"demo/zgitApp/test/integration/pages/Worklist",
	"demo/zgitApp/test/integration/pages/Object",
	"demo/zgitApp/test/integration/pages/NotFound",
	"demo/zgitApp/test/integration/pages/Browser",
	"demo/zgitApp/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "demo.zgitApp.view."
	});

	sap.ui.require([
		"demo/zgitApp/test/integration/WorklistJourney",
		"demo/zgitApp/test/integration/ObjectJourney",
		"demo/zgitApp/test/integration/NavigationJourney",
		"demo/zgitApp/test/integration/NotFoundJourney",
		"demo/zgitApp/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});