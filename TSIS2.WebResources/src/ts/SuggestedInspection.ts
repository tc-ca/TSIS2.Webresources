﻿namespace ROM.SuggestedInspection {
    export function onLoad(eContext) {
        const form = <Form.ts_suggestedinspection.Main.Information>eContext.getFormContext();
        setOperationTypeFilteredView(form);
    }

    export function operationTypeOnChange(eContext) {
        const form = <Form.ts_suggestedinspection.Main.Information>eContext.getFormContext();

        const operationTypeValue = form.getAttribute("ts_operationtype").getValue();
        if (operationTypeValue == null) {
            //Clear and lock all dependent fields
            form.getAttribute("ts_stakeholder").setValue(null);
            form.getAttribute("ts_site").setValue(null);
            form.getAttribute("ts_operation").setValue(null);
            form.getAttribute("ts_activitytype").setValue(null);
            form.getAttribute("ts_riskthreshold").setValue(null);

            form.getControl("ts_stakeholder").setDisabled(true);
            form.getControl("ts_site").setDisabled(true);
            form.getControl("ts_operation").setDisabled(true);
            form.getControl("ts_activitytype").setDisabled(true);
            form.getControl("ts_riskthreshold").setDisabled(true);

            setOperationTypeFilteredView(form);
        } else {
            //Unlock next field
            form.getControl("ts_stakeholder").setDisabled(false);
            setStakeholderFilteredView(form);
        }
    }

    export function stakeholderOnChange(eContext) {
        const form = <Form.ts_suggestedinspection.Main.Information>eContext.getFormContext();

        const stakeholderValue = form.getAttribute("ts_stakeholder").getValue();
        if (stakeholderValue == null) {
            //Clear and lock all dependent fields
            form.getAttribute("ts_site").setValue(null);
            form.getAttribute("ts_operation").setValue(null);
            form.getAttribute("ts_activitytype").setValue(null);
            form.getAttribute("ts_riskthreshold").setValue(null);

            form.getControl("ts_site").setDisabled(true);
            form.getControl("ts_operation").setDisabled(true);
            form.getControl("ts_activitytype").setDisabled(true);
            form.getControl("ts_riskthreshold").setDisabled(true);

            setOperationTypeFilteredView(form);
            setStakeholderFilteredView(form);
        } else {
            //Unlock next field
            form.getControl("ts_site").setDisabled(false);
            setSiteFilteredView(form);
        }
    }

    export async function siteOnChange(eContext) {
        const form = <Form.ts_suggestedinspection.Main.Information>eContext.getFormContext();

        const siteValue = form.getAttribute("ts_site").getValue();
        if (siteValue == null) {
            //Clear and lock all dependent fields
            form.getAttribute("ts_operation").setValue(null);
            form.getAttribute("ts_activitytype").setValue(null);
            form.getAttribute("ts_riskthreshold").setValue(null);

            form.getControl("ts_operation").setDisabled(true);
            form.getControl("ts_activitytype").setDisabled(true);
            form.getControl("ts_riskthreshold").setDisabled(true);

            setStakeholderFilteredView(form);
            setSiteFilteredView(form);
        } else {
            //Set Operation Field

            //Get
            const operationTypeValue = form.getAttribute("ts_operationtype").getValue();
            const stakeholderValue = form.getAttribute("ts_stakeholder").getValue();
            let operationTypeId;
            let stakeholderId;
            let siteId;
            if (operationTypeValue != null && stakeholderValue != null) {
                operationTypeId = operationTypeValue[0].id;
                stakeholderId = stakeholderValue[0].id;
                siteId = siteValue[0].id;
            }
            if (operationTypeId != null && stakeholderId != null && siteId != null) {

                //Active Operation with matching Operation Type Stakeholder and Site
                let fetchXml = [
                    "<fetch>",
                    "  <entity name='ovs_operation'>",
                    "    <attribute name='ovs_operationid'/>",
                    "    <attribute name='ts_operationalstatus'/>",
                    "    <attribute name='ovs_name'/>",
                    "    <filter>",
                    "      <condition attribute='ts_stakeholder' operator='eq' value='", stakeholderId, "' uitype='account'/>",
                    "      <condition attribute='ovs_operationtypeid' operator='eq' value='", operationTypeId, "' uitype='ovs_operationtype'/>",
                    "      <condition attribute='ts_site' operator='eq' value='", siteId, "' uitype='msdyn_functionallocation'/>",
                    "      <condition attribute='statecode' operator='eq' value='0'/>",
                    "    </filter>",
                    "  </entity>",
                    "</fetch>"
                ].join("");
                fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
                let operation = await Xrm.WebApi.retrieveMultipleRecords("ovs_operation", fetchXml).then(function success(result) {
                    return result.entities[0];
                });
                if (operation != null) {
                    const lookup = new Array();
                    lookup[0] = new Object();
                    lookup[0].id = operation.ovs_operationid;
                    lookup[0].name = operation.ovs_name;
                    lookup[0].entityType = 'ovs_operation';

                    if (operation.ts_operationalstatus == 717750001) {
                        form.ui.setFormNotification((Xrm.Utility.getGlobalContext().userSettings.languageId == 1033 ? "The operation \"" + operation.ovs_name + "\" is non-operational." : "L'opération \"" + operation.ovs_name + "\" est  non opérationnelle."), "ERROR", "non-operational-operation");
                        form.getAttribute('ts_site').setValue(null);
                    }
                    else {
                        form.ui.clearFormNotification("non-operational-operation");
                        form.getAttribute('ts_operation').setValue(lookup);
                        const operationValue = form.getAttribute("ts_operation").getValue();
                        form.getControl("ts_activitytype").setDisabled(false);
                        setActivityTypeFilteredView(form);
                    }
                }
            }
            
        }
    }

    export function activityTypeOnChange(eContext) {
        const form = <Form.ts_suggestedinspection.Main.Information>eContext.getFormContext();

        const activtyTypeValue = form.getAttribute("ts_activitytype").getValue();
        let activityypeId;
        if (activtyTypeValue != null) {
            activityypeId = activtyTypeValue[0].id;

            Xrm.WebApi.retrieveRecord("msdyn_incidenttype", activityypeId, "?$select=msdyn_name,_ts_riskscore_value,msdyn_estimatedduration&$expand=ts_RiskScore($select=ts_englishname,ts_frenchname,ts_recurrencefrequenciesid)")
                .then(function success(result) {
                    if (result != null) {
                        const lookup = new Array();
                        lookup[0] = new Object();
                        lookup[0].id = result.ts_RiskScore.ts_recurrencefrequenciesid;
                        lookup[0].name = (Xrm.Utility.getGlobalContext().userSettings.languageId == 1036) ? result.ts_RiskScore.ts_frenchname : result.ts_RiskScore.ts_englishname;
                        lookup[0].entityType = 'ts_riskcategory';

                        form.getAttribute('ts_riskthreshold').setValue(lookup);
                        form.getAttribute('ts_estimatedduration').setValue(result.msdyn_estimatedduration / 60);
                    }
                });
        } else {
            form.getAttribute('ts_riskthreshold').setValue(null);
            form.getAttribute('ts_estimatedduration').setValue(null);
        }
    }

    function setOperationTypeFilteredView(form: Form.ts_suggestedinspection.Main.Information): void {
        const viewId = '{8982C38D-8BB4-4C95-BD05-493398FEAE99}';
        const entityName = "ovs_operationtype";
        //const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredOperationTypes");
        const viewDisplayName = "Operation Types";

        //Active Operation Types with Inspection Incident Types that belong to ISSO
        const fetchXml = [
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>",
            "  <entity name='ovs_operationtype'>",
            "    <attribute name='createdon'/>",
            "    <attribute name='ovs_name'/>",
            "    <attribute name='ovs_operationtypeid'/>",
            "    <filter>",
            "      <condition attribute='statecode' operator='eq' value='0'/>",
            "    </filter>",
            "    <link-entity name='businessunit' from='businessunitid' to='owningbusinessunit' alias='businessunit'>",
            "      <filter>",
            "        <condition attribute='name' operator='begins-with' value='Intermodal'/>",
            "      </filter>",
            "    </link-entity>",
            "    <link-entity name='ts_ovs_operationtypes_msdyn_incidenttypes' from='ovs_operationtypeid' to='ovs_operationtypeid' intersect='true'>",
            "      <link-entity name='msdyn_incidenttype' from='msdyn_incidenttypeid' to='msdyn_incidenttypeid' alias='incidenttype'>",
            "        <filter>",
            "          <condition attribute='msdyn_defaultworkordertype' operator='eq' value='b1ee680a-7cf7-ea11-a815-000d3af3a7a7'/>",
            "          <condition attribute='statecode' operator='eq' value='0'/>",
            "        </filter>",
            "      </link-entity>",
            "    </link-entity>",
            "  </entity>",
            "</fetch>"
        ].join("");
        const layoutXml = '<grid name="resultset" object="10010" jump="name" select="1" icon="1" preview="1"><row name="result" id="ovs_operationtypeid"><cell name="ovs_name" width="200" /></row></grid>';
        form.getControl("ts_operationtype").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
    }

    function setStakeholderFilteredView(form: Form.ts_suggestedinspection.Main.Information): void {
        let operationTypeValue = form.getAttribute("ts_operationtype").getValue();
        let operationTypeId;
        if (operationTypeValue != null) {
            operationTypeId = operationTypeValue[0].id;
        }
        const viewId = '{8982C38D-8BB4-4C95-BD05-493398F11111}';
        const entityName = "account";
        //const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredStakeholders");
        const viewDisplayName = "Stakeholders";

        //All Active Stakeholders/Accounts that have an Operation with a matching Operation Type
        var fetchXml = [
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>",
            "  <entity name='account'>",
            "    <attribute name='accountid'/>",
            "    <attribute name='createdon'/>",
            "    <attribute name='name'/>",
            "    <filter>",
            "      <condition attribute='statecode' operator='eq' value='0'/>",
            "    </filter>",
            "    <link-entity name='ovs_operation' from='ts_stakeholder' to='accountid' link-type='inner' alias='operation' intersect='true'>",
            "      <filter>",
            "        <condition attribute='ovs_operationtypeid' operator='eq' value='", operationTypeId, "'/>",
            "        <condition attribute='statecode' operator='eq' value='0'/>",
            "      </filter>",
            "    </link-entity>",
            "  </entity>",
            "</fetch>"
        ].join("");
        const layoutXml = '<grid name="resultset" jump="name" select="1" icon="1" preview="1"> <row name="result" id="accountid"> <cell name="name" width="300" /></row> </grid>';
        form.getControl("ts_stakeholder").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
    }

    function setSiteFilteredView(form: Form.ts_suggestedinspection.Main.Information): void {
        let operationTypeValue = form.getAttribute("ts_operationtype").getValue();
        let stakeholderValue = form.getAttribute("ts_stakeholder").getValue();
        let operationTypeId;
        let stakeholderId;
        if (operationTypeValue != null && stakeholderValue != null) {
            operationTypeId = operationTypeValue[0].id;
            stakeholderId = stakeholderValue[0].id;
        }
        const viewId = '{8982C38D-8BB4-4C95-BD05-493398F00000}';
        const entityName = "msdyn_functionallocation";
        //const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredStakeholders");
        const viewDisplayName = "Sites";

        //All Active Sites/FunctionalLocations that have an Operation with matching Stakeholder and Operation Type
        const fetchXml = [
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>",
            "  <entity name='msdyn_functionallocation'>",
            "    <attribute name='createdon'/>",
            "    <attribute name='msdyn_name'/>",
            "    <attribute name='msdyn_functionallocationid'/>",
            "    <filter>",
            "      <condition attribute='statecode' operator='eq' value='0'/>",
            "    </filter>",
            "    <link-entity name='ovs_operation' from='ts_site' to='msdyn_functionallocationid' alias='operation'  intersect='true'>",
            "      <filter>",
            "        <condition attribute='ts_stakeholder' operator='eq' value='", stakeholderId, "'/>",
            "        <condition attribute='ovs_operationtypeid' operator='eq' value='", operationTypeId, "'/>",
            "        <condition attribute='statecode' operator='eq' value='0'/>",
            "      </filter>",
            "    </link-entity>",
            "  </entity>",
            "</fetch>"
        ].join("");
        const layoutXml = '<grid name="resultset" jump="msdyn_name" select="1" preview="1" icon="1"> <row name="result" id="msdyn_functionallocationid"> <cell name="msdyn_name" width="150" /> </row> </grid>';
        form.getControl("ts_site").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
    }

    function setActivityTypeFilteredView(form: Form.ts_suggestedinspection.Main.Information): void {
        const viewId = '{8982C38D-8BB4-4C95-BD05-493398666666}';
        const entityName = "msdyn_incidenttype";
        //const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredOperationTypes");
        const viewDisplayName = "Activity Types";

        //All Active Inspection ActivityTypes/IncidentTypes related to the selected Operation Type  
        const fetchXml = [
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>",
            "  <entity name='msdyn_incidenttype'>",
            "    <attribute name='msdyn_incidenttypeid'/>",
            "    <attribute name='msdyn_name'/>",
            "    <filter>",
            "      <condition attribute='msdyn_defaultworkordertype' operator='eq' value='b1ee680a-7cf7-ea11-a815-000d3af3a7a7'/>",
            "      <condition attribute='statecode' operator='eq' value='0'/>",
            "    </filter>",
            "    <link-entity name='ts_ovs_operationtypes_msdyn_incidenttypes' from='msdyn_incidenttypeid' to='msdyn_incidenttypeid' intersect='true'>",
            "      <link-entity name='ovs_operationtype' from='ovs_operationtypeid' to='ovs_operationtypeid' intersect='true'>",
            "        <filter>",
            "          <condition attribute='ovs_operationtypeid' operator='eq' value='d883b39a-c751-eb11-a812-000d3af3ac0d'/>",
            "          <condition attribute='statecode' operator='eq' value='0'/>",
            "        </filter>",
            "      </link-entity>",
            "    </link-entity>",
            "  </entity>",
            "</fetch>"
        ].join("");
        const layoutXml = '<grid name="resultset" object="10010" jump="name" select="1" icon="1" preview="1"><row name="result" id="msdyn_incidenttypeid"><cell name="msdyn_name" width="200" /></row></grid>';
        form.getControl("ts_activitytype").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
    }


}