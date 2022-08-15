namespace ROM.EnforcementAction {
    export function onLoad(eContext: Xrm.ExecutionContext<any, any>): void {
        let formContext = <Form.ts_enforcementaction.Main.Information>eContext.getFormContext();

        //Enable type of enforcement action field if user is Admin
        if(formContext.ui.getFormType() == 2 || formContext.ui.getFormType() == 3){
            const userRoles = Xrm.Utility.getGlobalContext().userSettings.roles;
            userRoles.forEach(role => {
                if (role.name == "System Administrator") {
                    formContext.getControl("ts_typeofenforcementaction").setDisabled(false);
                }
            });
            formContext.getControl("ts_typeofenforcementaction").setDisabled(true);
        }
        
        additionalDetailsVisibility(formContext);

        filterRepresentative(formContext);
        filterCompany(formContext);
    }

    export function onSave(eContext: Xrm.ExecutionContext<any, any>): void {
    }

    function filterRepresentative(formContext: Form.ts_enforcementaction.Main.Information){
        const viewId = '{145AC9F2-4F7E-43DF-BEBD-442CB4C1F770}';
        const entityName = "contact";
        const viewDisplayName = "Filtered Contacts";

        const fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true" no-lock="false" returntotalrecordcount="true" page="1" count="25"><entity name="contact"><attribute name="statecode"/><attribute name="contactid"/><attribute name="fullname"/><link-entity name="ts_operationcontact" from="ts_contact" to="contactid"><link-entity name="ovs_operation" from="ovs_operationid" to="ts_operation"><link-entity name="msdyn_workorder" from="ovs_operationid" to="ovs_operationid"><link-entity name="incident" from="incidentid" to="msdyn_servicerequest" link-type="inner"><link-entity name="ts_enforcementaction" from="regardingobjectid" to="incidentid" link-type="inner"><filter><condition attribute="activityid" operator="eq" value="' + formContext.data.entity.getId() + '"/></filter></link-entity></link-entity></link-entity></link-entity><link-entity name="ts_role" from="ts_roleid" to="ts_connectionrole" link-type="inner"><attribute name="ts_name" alias="role"/></link-entity></link-entity><order attribute="fullname" descending="false"/></entity></fetch>';

        const layoutXml = '<grid name="resultset" object="2" jump="
        fullname" select="1" icon="1" preview="1"><row name="result" id="contactid"><cell name="fullname" width="200" /><cell name="role.ts_name" width="200" /></row></grid>';

        formContext.getControl("ts_verbalwarninggivento").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
        formContext.getControl("ts_writtenwarningsentto").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);

    }

    function filterCompany(formContext: Form.ts_enforcementaction.Main.Information){
        const viewId = '{145AC9F2-4F7E-43DF-BEBD-442CB4C1F880}';
        const entityName = "account";
        const viewDisplayName = "Filtered Accounts";

        const fetchXml = '<fetch count="25" distinct="true" returntotalrecordcount="true" page="1"><entity name="account"><attribute name="name"/><attribute name="ts_stakeholderstatus"/><link-entity name="msdyn_workorder" from="msdyn_serviceaccount" to="accountid" link-type="inner"><link-entity name="incident" from="incidentid" to="msdyn_servicerequest"><link-entity name="ts_enforcementaction" from="regardingobjectid" to="incidentid"><filter><condition attribute="activityid" operator="eq" value="' + formContext.data.entity.getId() + '"/></filter></link-entity></link-entity></link-entity></entity></fetch>';

        const layoutXml = '<grid name="resultset" object="2" jump="name" select="1" icon="1" preview="1"><row name="result" id="activityid"><cell name="name" width="200" /><cell name="ts_stakeholderstatus" width="200" /></row></grid>';

        formContext.getControl("ts_individualcompany").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
    }

    export function typeOnChange(eContext: Xrm.ExecutionContext<any, any>): void { 
        let formContext = <Form.ts_enforcementaction.Main.Information>eContext.getFormContext();
        additionalDetailsVisibility(formContext);
    }

    export function additionalDetailsVisibility(formContext: Form.ts_enforcementaction.Main.Information){
        const typeAttributeValue = formContext.getAttribute("ts_typeofenforcementaction").getValue();

        if(typeAttributeValue != null && typeAttributeValue == ts_type.VerbalWarning){
            formContext.ui.tabs.get("general").sections.get("additional_details").setVisible(true);

            formContext.getControl("ts_verbalwarninggivento").setVisible(true);
            formContext.getControl("ts_individualposition").setVisible(true);
            formContext.getControl("ts_individualcompany").setVisible(true);
            formContext.getControl("ts_verbalwarningdeliverylocation").setVisible(true);

            formContext.getAttribute("ts_verbalwarninggivento").setRequiredLevel("required");
            formContext.getAttribute("ts_individualposition").setRequiredLevel("required");
            formContext.getAttribute("ts_individualcompany").setRequiredLevel("required");
            formContext.getAttribute("ts_verbalwarningdeliverylocation").setRequiredLevel("required");

            formContext.getAttribute("ts_writtenwarningsentto").setValue();
            formContext.getAttribute("ts_writtenwarningdeliverymethod").setValue();
        
            formContext.getControl("ts_writtenwarningsentto").setVisible(false);
            formContext.getControl("ts_writtenwarningdeliverymethod").setVisible(false);

            formContext.getAttribute("ts_writtenwarningsentto").setRequiredLevel("none");
            formContext.getAttribute("ts_writtenwarningdeliverymethod").setRequiredLevel("none");
        }
        else if(typeAttributeValue != null && typeAttributeValue == ts_type.WrittenWarning){
            formContext.ui.tabs.get("general").sections.get("additional_details").setVisible(true);

            formContext.getControl("ts_writtenwarningsentto").setVisible(true);
            formContext.getControl("ts_individualposition").setVisible(true);
            formContext.getControl("ts_individualcompany").setVisible(true);
            formContext.getControl("ts_writtenwarningdeliverymethod").setVisible(true);

            formContext.getAttribute("ts_writtenwarningsentto").setRequiredLevel("required");
            formContext.getAttribute("ts_individualposition").setRequiredLevel("required");
            formContext.getAttribute("ts_individualcompany").setRequiredLevel("required");
            formContext.getAttribute("ts_writtenwarningdeliverymethod").setRequiredLevel("required");

            formContext.getAttribute("ts_verbalwarninggivento").setValue();
            formContext.getAttribute("ts_verbalwarningdeliverylocation").setValue();

            formContext.getControl("ts_verbalwarninggivento").setVisible(false);
            formContext.getControl("ts_verbalwarningdeliverylocation").setVisible(false);

            formContext.getAttribute("ts_verbalwarninggivento").setRequiredLevel("none");
            formContext.getAttribute("ts_verbalwarningdeliverylocation").setRequiredLevel("none");
        }
        else{
            formContext.ui.tabs.get("general").sections.get("additional_details").setVisible(false);

            formContext.getAttribute("ts_verbalwarninggivento").setValue();
            formContext.getAttribute("ts_writtenwarningsentto").setValue();
            formContext.getAttribute("ts_individualposition").setValue();
            formContext.getAttribute("ts_individualcompany").setValue();
            formContext.getAttribute("ts_verbalwarningdeliverylocation").setValue();
            formContext.getAttribute("ts_writtenwarningdeliverymethod").setValue();

            formContext.getControl("ts_verbalwarninggivento").setVisible(false);
            formContext.getControl("ts_writtenwarningsentto").setVisible(false);
            formContext.getControl("ts_individualposition").setVisible(false);
            formContext.getControl("ts_individualcompany").setVisible(false);
            formContext.getControl("ts_verbalwarningdeliverylocation").setVisible(false);
            formContext.getControl("ts_writtenwarningdeliverymethod").setVisible(false);

            formContext.getAttribute("ts_verbalwarninggivento").setRequiredLevel("none");
            formContext.getAttribute("ts_writtenwarningsentto").setRequiredLevel("none");
            formContext.getAttribute("ts_individualposition").setRequiredLevel("none");
            formContext.getAttribute("ts_individualcompany").setRequiredLevel("none");
            formContext.getAttribute("ts_verbalwarningdeliverylocation").setRequiredLevel("none");
        }
    }
}