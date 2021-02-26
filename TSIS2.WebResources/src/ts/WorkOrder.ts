/* eslint-disable @typescript-eslint/triple-slash-reference */
namespace ROM.WorkOrder {
    // EVENTS
    export function onLoad(eContext: Xrm.ExecutionContext<any, any>): void {
        const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();

        switch (form.ui.getFormType()) {
            //Create
            case 1:
                setDefaultFiscalYear(form);
            default:
                break;
        }

        if (!userHasRole("ROM Manager") && !userHasRole("ROM Planner")) {
            form.getControl("ovs_revisedquarterid").setDisabled(true);
        }
        else {
            form.getControl("ovs_revisedquarterid").setDisabled(false);
        }
    }

    export function regionOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        try {

            const form = <Form.msdyn_workorder.Main.TSISOversightActivityOpTest>eContext.getFormContext();
            const regionAttribute = form.getAttribute("msdyn_serviceterritory");

            if (regionAttribute != null && regionAttribute != undefined) {

                // Set the dependent control that uses this lookup field.
                const dependentControl = form.getControl("ovs_operationtypeid");

                // If a region is selected, we use the filtered fetchxml, otherwise, disable and clear out the dependent field
                if (regionAttribute.getValue() != null && regionAttribute.getValue() != undefined) {
                    dependentControl.setDisabled(false);

                    // Setup a custom view
                    // This value is never saved and only needs to be unique among the other available views for the lookup.
                    const viewId = '{8982C38D-8BB4-4C95-BD05-493398FEAE98}';
                    const entityName = "ovs_operationtype";
                    const viewDisplayName = "Filtered Operation Types";
                    const fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true"><entity name="ovs_operationtype"><attribute name="ovs_operationtypeid" /><attribute name="ovs_name" /><order attribute="ovs_name" descending="false" /><link-entity name="ovs_operation" from="ovs_operationtypeid" to="ovs_operationtypeid" link-type="inner" alias="al"><link-entity name="account" from="accountid" to="ovs_siteid" link-type="inner" alias="am"><filter type="and"><condition attribute="territoryid" operator="eq"  value="' + regionAttribute.getValue()[0].id  + '" /></filter></link-entity></link-entity></entity></fetch>';
                    const layoutXml = '<grid name="resultset" object="10010" jump="name" select="1" icon="1" preview="1"><row name="result" id="ovs_operationtypeid"><cell name="ovs_name" width="200" /><cell name="owner" width="125" /></row></grid>';
                    dependentControl.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
                } else {
                    form.getAttribute("ovs_operationtypeid").setValue(null);
                    dependentControl.setDisabled(true);
                }

            }
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    export function operationTypeOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        try {

            const form = <Form.msdyn_workorder.Main.TSISOversightActivityOpTest>eContext.getFormContext();
            const operationTypeAttribute = form.getAttribute("ovs_operationtypeid");

            if (operationTypeAttribute != null && operationTypeAttribute != undefined) {

                const viewId = form.getControl("msdyn_billingaccount").getDefaultView();
                const entityName = "account";
                const viewDisplayName = "Filtered Regulated Entities";

                const layoutXml = '<grid name="resultset" object="10010" jump="name" select="1" icon="1" preview="1"><row name="result" id="accountid"><cell name="name" width="200" /><cell name="owner" width="125" /></row></grid>';

                // If an operation type is selected, we use the filtered fetchxml, otherwise, use the default
                let fetchXml = ""
                if (operationTypeAttribute.getValue() != null && operationTypeAttribute.getValue() != undefined) {
                    fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true"><entity name="account"><attribute name="name" /><attribute name="accountid" /><order attribute="name" descending="false" /><link-entity name="ovs_operation" from="ovs_regulatedentityid" to="accountid" link-type="inner" alias="ae"><filter type="and"><condition attribute="ovs_operationtypeid" operator="eq" value="' + operationTypeAttribute.getValue()[0].id + '" /></filter></link-entity></entity></fetch>';
                } else {
                    fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false"><entity name="account"><attribute name="name" /><attribute name="accountid" /><filter type="and"><condition attribute="customertypecode" operator="eq" value="948010000" /></filter></entity></fetch>';
                }

                form.getControl("msdyn_billingaccount").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);

            }
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    export function fiscalYearOnchange(eContext: Xrm.ExecutionContext<any, any>): void {
        //if new fiscal year is selected, then previous selection of quarter no longer corresponds
        removeSelectedFiscalQuarter(eContext);
    }

    // FUNCTIONS
    function setDefaultFiscalYear(form: Form.msdyn_workorder.Main.TSISOversightActivity): void {
        XrmQuery.retrieveMultiple((x) => x.tc_tcfiscalyears)
            .select((x) => [x.tc_name])
            .filter((x) => Filter.equals(x.tc_iscurrentfiscalyear, true))
            .execute((fiscalYears) => {
                //should only return one fiscal year record as the current
                if (fiscalYears.length === 1) {
                    const targetedFiscalYear = fiscalYears[0];
                    const lookup = new Array();
                    lookup[0] = new Object();
                    lookup[0].id = targetedFiscalYear.tc_tcfiscalyearid;
                    lookup[0].name = targetedFiscalYear.tc_name;
                    lookup[0].entityType = 'tc_tcfiscalyear';

                    form.getAttribute('ovs_fiscalyear').setValue(lookup);
                } else {
                    // do not set a default if multiple records are found, error.
                }
            });
    }

    function removeSelectedFiscalQuarter(eContext: Xrm.ExecutionContext<any, any>): void {
        const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
        form.getAttribute('ovs_fiscalquarter').setValue(null);
    }

    function userHasRole(roleName): boolean {
        var currentUserRoles = Xrm.Utility.getGlobalContext().userSettings.roles.get();
        for (var i = 0; i < currentUserRoles.length; i++) {
            var userRoleName = currentUserRoles[i].name;
            if (userRoleName == roleName) {
                return true;
            }
        }
        return false;
    }
  }
