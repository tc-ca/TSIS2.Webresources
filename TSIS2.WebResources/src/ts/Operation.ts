namespace ROM.Operation {

    export function onLoad(eContext: Xrm.ExecutionContext<any, any>): void {
    const form = <Form.ovs_operation.Main.Information>eContext.getFormContext();       

    if (form.getAttribute("ts_statusstartdate").getValue() == null) {
        form.getAttribute("ts_description").setValue(null);
        form.getControl("ts_statusenddate").setDisabled(true);
        form.getControl("ts_description").setDisabled(true);
    }
}

    export function siteOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        const form = <Form.ovs_operation.Main.Information>eContext.getFormContext();
        const siteAttribute = form.getAttribute("ts_site");

        if (siteAttribute != null) {
            const siteAttributeValue = siteAttribute.getValue();

            // Enable subsite field with appropriate filtered view if site selected
            if (siteAttributeValue != null && siteAttributeValue != undefined) {
                form.getControl('ts_subsite').setDisabled(false);
                const viewId = '{6A59549F-F162-5128-4711-79BC929540C3}';
                const entityName = "msdyn_functionallocation";
                const viewDisplayName = "Filtered Sites";
                const activityTypeFetchXml = '<fetch no-lock="false"><entity name="msdyn_functionallocation"><attribute name="statecode"/><attribute name="msdyn_functionallocationid"/><attribute name="msdyn_name"/><filter><condition attribute="msdyn_functionallocationid" operator="under" value="' + siteAttributeValue[0].id + '"/></filter><order attribute="msdyn_name" descending="false"/></entity></fetch>';
                const layoutXml = '<grid name="resultset" object="10010" jump="msdyn_name" select="1" icon="1" preview="1"><row name="result" id="msdyn_functionallocationid"><cell name="msdyn_name" width="200" /></row></grid>';
                form.getControl("ts_subsite").addCustomView(viewId, entityName, viewDisplayName, activityTypeFetchXml, layoutXml, true);
            }
            else {
                form.getControl('ts_subsite').setDisabled(true);
            }
        }
    }

    export function operationStatusOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        const form = <Form.ovs_operation.Main.Information>eContext.getFormContext();
        const operationStatusAttribute = form.getAttribute("ts_operationalstatus");

        if(operationStatusAttribute != null && operationStatusAttribute != null){
            const operationStatusAttributeValue = operationStatusAttribute.getValue();
            if (operationStatusAttributeValue == 717750001) {
                form.getAttribute("ts_statusstartdate").setValue(new Date(Date.now()));
                form.getAttribute("ts_statusenddate").setValue(null);
                form.getControl("ts_statusenddate").setDisabled(false);
                form.getControl("ts_description").setDisabled(false);
            }
            else {
                form.getAttribute("ts_statusstartdate").setValue(null);
                form.getAttribute("ts_statusenddate").setValue(null);
                form.getAttribute("ts_description").setValue(null);
                form.getControl("ts_statusenddate").setDisabled(true);
                form.getControl("ts_description").setDisabled(true);
            }
        }
    }

    export function statusStartDateOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        const form = <Form.ovs_operation.Main.Information>eContext.getFormContext();
        if (form.getAttribute("ts_statusstartdate").getValue() != null)
            form.getControl("ts_statusenddate").setDisabled(false);
            form.getControl("ts_description").setDisabled(false);

    }
}