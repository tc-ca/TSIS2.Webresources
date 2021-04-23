/* eslint-disable @typescript-eslint/triple-slash-reference */
namespace ROM.WorkOrder {
    // EVENTS
    export function onLoad(eContext: Xrm.ExecutionContext<any, any>): void {
        const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
        const state = form.getAttribute("statecode").getValue();

        updateCaseView(eContext);

        //Set required field
        form.getAttribute("ovs_operationtypeid").setRequiredLevel("required");
        form.getAttribute("ovs_regulatedentity").setRequiredLevel("required");

        //Set visible fields
        if( form.getAttribute("ovs_assetcategory").getValue() != null){
            form.getControl("ovs_assetcategory").setVisible(true);  
        }
        if(form.getAttribute("ovs_asset").getValue() != null){
            form.getControl("ovs_asset").setVisible(true);  
        }

        //Prevent enabling controls if record is Inactive and set the right views (active/inactive)
        if (state == 1){

            setWorkOrderServiceTasksView(form, false);
            setBookableResourceBookingsView(form, false);

            return;
        }
        else{ //If the work order is active, show the active views
            setWorkOrderServiceTasksView(form, true);
            setBookableResourceBookingsView(form, true);
        }

        switch (form.ui.getFormType()) {
            //Create
            case 1:
                setDefaultFiscalYear(form);
                setRegion(form);

                // Disable all operation related fields
                form.getControl("ovs_operationtypeid").setDisabled(true);
                form.getControl("ovs_regulatedentity").setDisabled(true);
                form.getControl("msdyn_serviceaccount").setDisabled(true);
                break;
            default:
                // Enable all operation related fields
                form.getControl("ovs_operationtypeid").setDisabled(false);
                form.getControl("ovs_regulatedentity").setDisabled(false);
                form.getControl("msdyn_serviceaccount").setDisabled(false);
                break;
        }
        
    }

    export function onSave(eContext: Xrm.ExecutionContext<any, any>): void {
        const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
        const systemStatus = form.getAttribute("msdyn_systemstatus").getValue();

        var workOrderServiceTaskData;
        var bookableResourceBookingData;

        if(systemStatus == 690970004){ //Only close associated entities when Record Status is set to Closed - Posted
            workOrderServiceTaskData = 
            {
                "statecode" :  1,           //open -> 0
                "statuscode" : 918640003    //open -> 918640002
            };
            bookableResourceBookingData = 
            {
                "statecode" :  1,           //open -> 0
                "statuscode" : 2            //open -> 1
            };

            //Close/Open associated work order service task(s)
            closeWorkOrderServiceTasks(form, workOrderServiceTaskData);

            //Close/Open Bookable Resource Booking
            //closeBookableResourceBookings(form, bookableResourceBookingData); //disabled until we know the usage of bookings

            //Set inactive views
            setWorkOrderServiceTasksView(form , false);
            setBookableResourceBookingsView(form , false);
        }
    }

    export function regionOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        try {

            const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
            const regionAttribute = form.getAttribute("msdyn_serviceterritory");

            if (regionAttribute != null && regionAttribute != undefined) {

                // Clear out all dependent fields' value
                if (!form.getControl("ovs_operationtypeid").getDisabled() || form.getAttribute("ovs_operationtypeid").getValue() != null) {
                    form.getAttribute("ovs_operationtypeid").setValue(null);
                }
                if (!form.getControl("ovs_regulatedentity").getDisabled() || form.getAttribute("ovs_regulatedentity").getValue() != null) {
                    form.getAttribute("ovs_regulatedentity").setValue(null);
                }
                if (!form.getControl("msdyn_serviceaccount").getDisabled() || form.getAttribute("msdyn_serviceaccount").getValue() != null) {
                    form.getAttribute("msdyn_serviceaccount").setValue(null);
                }

                // Disable all dependent fields
                form.getControl("ovs_operationtypeid").setDisabled(true);
                form.getControl("ovs_regulatedentity").setDisabled(true);
                form.getControl("msdyn_serviceaccount").setDisabled(true);

                // If previous fields have values, we use the filtered fetchxml in a custom lookup view
                const regionAttributeValue = regionAttribute.getValue();
                if (regionAttributeValue != null && regionAttributeValue != undefined) {

                    // Enable direct dependent field
                    if(regionAttributeValue[0].name != "International"){
                        form.getControl("ovs_operationtypeid").setDisabled(false);
                    }

                    // Setup a custom view
                    // This value is never saved and only needs to be unique among the other available views for the lookup.
                    const viewId = '{8982C38D-8BB4-4C95-BD05-493398FEAE98}';
                    const entityName = "ovs_operationtype";
                    const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredOperationTypes");
                    const fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true"><entity name="ovs_operationtype"><attribute name="ovs_operationtypeid" /><attribute name="ovs_name" /><order attribute="ovs_name" descending="false" /><link-entity name="ovs_operation" from="ovs_operationtypeid" to="ovs_operationtypeid" link-type="inner" alias="al"><link-entity name="account" from="accountid" to="ovs_siteid" link-type="inner" alias="am"><filter type="and"><condition attribute="msdyn_serviceterritory" operator="eq"  value="' + regionAttributeValue[0].id + '" /></filter></link-entity></link-entity></entity></fetch>';
                    const layoutXml = '<grid name="resultset" object="10010" jump="name" select="1" icon="1" preview="1"><row name="result" id="ovs_operationtypeid"><cell name="title" width="200" /></row></grid>';
                    form.getControl("ovs_operationtypeid").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
                }

            }
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    export function countryOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        try {

            const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
            const countryAttribute = form.getAttribute("ts_country");

            if (countryAttribute != null && countryAttribute != undefined) {

                // Clear out all dependent fields' value
                if (!form.getControl("ovs_operationtypeid").getDisabled() || form.getAttribute("ovs_operationtypeid").getValue() != null) {
                    form.getAttribute("ovs_operationtypeid").setValue(null);
                }
                if (!form.getControl("ovs_regulatedentity").getDisabled() || form.getAttribute("ovs_regulatedentity").getValue() != null) {
                    form.getAttribute("ovs_regulatedentity").setValue(null);
                }
                if (!form.getControl("msdyn_serviceaccount").getDisabled() || form.getAttribute("msdyn_serviceaccount").getValue() != null) {
                    form.getAttribute("msdyn_serviceaccount").setValue(null);
                }
                
                // Enable direct dependent field
                form.getControl("ovs_operationtypeid").setDisabled(false);
            }
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    export function fiscalYearOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        //if new fiscal year is selected, then previous selection of quarter no longer corresponds
        removeSelectedFiscalQuarter(eContext);
    }

    export function operationTypeOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        try {

            const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
            const regionAttribute = form.getAttribute("msdyn_serviceterritory");
            const operationTypeAttribute = form.getAttribute("ovs_operationtypeid");
            const countryAttribute = form.getAttribute("ts_country");

            if (operationTypeAttribute != null && operationTypeAttribute != undefined) {

                // Clear out all dependent fields' value
                if (!form.getControl("ovs_regulatedentity").getDisabled() || form.getAttribute("ovs_regulatedentity").getValue() != null) {
                    form.getAttribute("ovs_regulatedentity").setValue(null);
                }
                if (!form.getControl("msdyn_serviceaccount").getDisabled() || form.getAttribute("msdyn_serviceaccount").getValue() != null) {
                    form.getAttribute("msdyn_serviceaccount").setValue(null);
                }

                // Disable all dependent fields
                form.getControl("ovs_regulatedentity").setDisabled(true);
                form.getControl("msdyn_serviceaccount").setDisabled(true);

                // If previous fields have values, we use the filtered fetchxml in a custom lookup view
                const regionAttributeValue = regionAttribute.getValue();
                const operationTypeAttributeValue = operationTypeAttribute.getValue();
                const countryAttributeValue = countryAttribute.getValue();
                if (regionAttributeValue != null && regionAttributeValue != undefined &&
                    operationTypeAttributeValue != null && operationTypeAttributeValue != undefined) {

                    
                    var countryCondition = "";

                    if(countryAttributeValue != null && countryAttributeValue != undefined ){
                        if(regionAttributeValue[0].name != "International"){
                            form.getControl("msdyn_serviceaccount").setDisabled(false);
                        }
                        else{
                            countryCondition = '<condition attribute="ts_country" operator="eq" value="' + countryAttributeValue[0].id + '" />';
                        }
                    } 

                    // Enable direct dependent field
                    form.getControl("ovs_regulatedentity").setDisabled(false);

                    // Setup a custom view
                    // This value is never saved and only needs to be unique among the other available views for the lookup.
                    const viewId = '{145AC9F2-4F7E-43DF-BEBD-442CB4C1F659}';
                    const entityName = "account";
                    const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredRegulatedEntities");
                    const layoutXml = '<grid name="resultset" object="10010" jump="name" select="1" icon="1" preview="1"><row name="result" id="accountid"><cell name="name" width="200" /><cell name="owner" width="125" /></row></grid>';
                    const fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true"><entity name="account"><attribute name="name" /><attribute name="accountid" /><order attribute="name" descending="false" /><filter type="and"><condition attribute="customertypecode" operator="eq" value="948010000" /></filter><link-entity name="ovs_operation" from="ovs_regulatedentityid" to="accountid" link-type="inner" alias="ag"><filter type="and"><condition attribute="ovs_operationtypeid" operator="eq" value="' + operationTypeAttributeValue[0].id + '" /></filter><link-entity name="account" from="accountid" to="ovs_siteid" link-type="inner" alias="ah"><filter type="and"><condition attribute="msdyn_serviceterritory" operator="eq" value="' + regionAttributeValue[0].id + '" />' + countryCondition +'</filter></link-entity></link-entity></entity></fetch>';
                    form.getControl("ovs_regulatedentity").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
                }
            }
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    export function regulatedEntityOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        try {

            const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
            const regionAttribute = form.getAttribute("msdyn_serviceterritory");
            const operationTypeAttribute = form.getAttribute("ovs_operationtypeid");
            const regulatedEntityAttribute = form.getAttribute("ovs_regulatedentity");
            const countryAttribute = form.getAttribute("ts_country");

            if (regulatedEntityAttribute != null && regulatedEntityAttribute != undefined) {

                // Clear out all dependent fields' value
                if (!form.getControl("msdyn_serviceaccount").getDisabled() || form.getAttribute("msdyn_serviceaccount").getValue() != null) {
                    form.getAttribute("msdyn_serviceaccount").setValue(null);
                }

                // Disable all dependent fields
                form.getControl("msdyn_serviceaccount").setDisabled(true);

                // If an operation type is selected, we use the filtered fetchxml, otherwise, disable and clear out the dependent fields
                const regionAttributeValue = regionAttribute.getValue();
                const operationTypeAttributeValue = operationTypeAttribute.getValue();
                const regulatedEntityAttributeValue = regulatedEntityAttribute.getValue();
                const countryAttributeValue = countryAttribute.getValue();

                if (regionAttributeValue != null && regionAttributeValue != undefined &&
                    operationTypeAttributeValue != null && operationTypeAttributeValue != undefined &&
                    regulatedEntityAttributeValue != null && regulatedEntityAttributeValue != undefined) {

                    var countryCondition = "";

                    if(countryAttributeValue != null && countryAttributeValue != undefined ){
                        if(regionAttributeValue[0].name != "International"){
                            form.getControl("msdyn_serviceaccount").setDisabled(false);
                        }
                        else{
                            countryCondition = '<condition attribute="ts_country" operator="eq" value="' + countryAttributeValue[0].id + '"/>';
                        }
                    } 
                    // Enable direct dependent field
                    form.getControl("msdyn_serviceaccount").setDisabled(false);

                    // Setup a custom view
                    // This value is never saved and only needs to be unique among the other available views for the lookup.
                    const viewId = '{6E57251F-F695-4076-9498-49AB892154B7}';
                    const entityName = "account";
                    const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredSites");
                    const layoutXml = '<grid name="resultset" object="10010" jump="name" select="1" icon="1" preview="1"><row name="result" id="accountid"><cell name="name" width="200" /><cell name="owner" width="125" /></row></grid>';
                    const fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true"><entity name="account"><attribute name="name" /><attribute name="accountid" /><order attribute="name" descending="false" /><filter type="and"><condition attribute="customertypecode" operator="eq" value="948010001" /><condition attribute="msdyn_serviceterritory" operator="eq" value="' + regionAttributeValue[0].id + '" />' + countryCondition + '</filter><link-entity name="ovs_operation" from="ovs_siteid" to="accountid" link-type="inner" alias="ab"><filter type="and"><condition attribute="ovs_operationtypeid" operator="eq" value="' + operationTypeAttributeValue[0].id + '" /><condition attribute="ovs_regulatedentityid" operator="eq" value="' + regulatedEntityAttributeValue[0].id + '" /></filter></link-entity></entity></fetch>';
                    form.getControl("msdyn_serviceaccount").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
                    
                }
                
            }
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    export function siteOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        try {

            const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
            const siteAttribute = form.getAttribute("msdyn_serviceaccount");

            if (siteAttribute != null && siteAttribute != undefined) {

                // Clear out all dependent fields' value
                if (!form.getControl("msdyn_functionallocation").getDisabled() || form.getAttribute("msdyn_functionallocation").getValue() != null) {
                    form.getAttribute("msdyn_functionallocation").setValue(null);
                }

                // Disable all dependent fields
                form.getControl("msdyn_functionallocation").setDisabled(true);

                // If an operation type is selected, we use the filtered fetchxml, otherwise, disable and clear out the dependent fields
                const siteAttributeValue = siteAttribute.getValue();

                if (siteAttributeValue != null && siteAttributeValue != undefined) {

                    // Enable direct dependent field
                    form.getControl("msdyn_functionallocation").setDisabled(false);

                    // Setup a custom view
                    // This value is never saved and only needs to be unique among the other available views for the lookup.
                    const viewId = '{C0DAF55B-505E-410C-B0CD-CD0F24F63231}';
                    const entityName = "msdyn_functionallocation";
                    const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredLocations");
                    const layoutXml = '<grid name="resultset" object="10300" jump="msdyn_name" select="1" icon="1" preview="1"><row name="result" id="msdyn_functionallocationid"><cell name="msdyn_name" width="200" /></row></grid>';
                    const fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true"><entity name="msdyn_functionallocation"><attribute name="msdyn_name"/><link-entity name="msdyn_msdyn_functionallocation_account" from="msdyn_functionallocationid" to="msdyn_functionallocationid" link-type="inner"><filter><condition attribute="accountid" operator="eq" value="' + siteAttributeValue[0].id + '"/></filter></link-entity></entity></fetch>';
                    form.getControl("msdyn_functionallocation").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
                }
                
            }
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    export function functionalLocationOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        try {

            const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
            const assetCategoryAttribute = form.getAttribute("ovs_assetcategory");
            const functionalLocationAttribute = form.getAttribute("msdyn_functionallocation");

            if (functionalLocationAttribute != null && functionalLocationAttribute != undefined) {

                // Clear out all dependent fields' value
                if (!form.getControl("ovs_assetcategory").getDisabled() || form.getAttribute("ovs_assetcategory").getValue() != null) {
                    form.getAttribute("ovs_assetcategory").setValue(null);
                }

                // Disable all dependent fields
                form.getControl("ovs_assetcategory").setDisabled(true);

                // If an operation type is selected, we use the filtered fetchxml, otherwise, disable and clear out the dependent fields
                const functionalLocationAttributeValue = functionalLocationAttribute.getValue();

                if (functionalLocationAttributeValue != null && functionalLocationAttributeValue != undefined) {

                    // Enable direct dependent field
                    form.getControl("ovs_assetcategory").setVisible(true);
                    form.getControl("ovs_assetcategory").setDisabled(false);

                    // Setup a custom view
                    // This value is never saved and only needs to be unique among the other available views for the lookup.
                    const viewId = '{1A58459F-F987-5478-5823-49AB823644B1}';
                    const entityName = "msdyn_customerassetcategory";
                    const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredAssets");
                    const layoutXml = '<grid name="resultset" object="10010" jump="msdyn_name" select="1" icon="1" preview="1"><row name="result" id="msdyn_customerassetcategoryid"><cell name="msdyn_name" width="200" /><cell name="msdyn_customerassetcategoryid" width="200" /></row></grid>';
                    const fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true"><entity name="msdyn_customerassetcategory"><attribute name="msdyn_name"/><attribute name="msdyn_customerassetcategoryid"/><link-entity name="msdyn_functionallocation" from="ovs_msdyn_customerassetcategory" to="msdyn_customerassetcategoryid"><filter type="and"><condition attribute="msdyn_functionallocationid" operator="eq" value="' + functionalLocationAttributeValue[0].id + '"/></filter></link-entity></entity></fetch>';
                    form.getControl("ovs_assetcategory").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
                    
                }
                
            }
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    export function assetCategoryOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        try {

            const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
            const assetAttribute = form.getAttribute("ovs_asset");
            const assetCategoryAttribute = form.getAttribute("ovs_assetcategory");

            if (assetCategoryAttribute != null && assetCategoryAttribute != undefined) {

                // Clear out all dependent fields' value
                if (!form.getControl("ovs_asset").getDisabled() || form.getAttribute("ovs_asset").getValue() != null) {
                    form.getAttribute("ovs_asset").setValue(null);
                }

                // Disable all dependent fields
                form.getControl("ovs_asset").setDisabled(true);

                // If an operation type is selected, we use the filtered fetchxml, otherwise, disable and clear out the dependent fields
                const assetCategoryAttributeValue = assetCategoryAttribute.getValue();

                if (assetCategoryAttributeValue != null && assetCategoryAttributeValue != undefined) {

                    // Enable direct dependent field
                    form.getControl("ovs_asset").setVisible(true);
                    form.getControl("ovs_asset").setDisabled(false);

                    // Setup a custom view
                    // This value is never saved and only needs to be unique among the other available views for the lookup.
                    const viewId = '{3A58459F-F182-5428-4871-49AA825243B3}';
                    const entityName = "msdyn_customerasset";
                    const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredAssetCategories");
                    const layoutXml = '<grid name="resultset" object="10010" jump="msdyn_name" select="1" icon="1" preview="1"><row name="result" id="msdyn_customerassetid"><cell name="msdyn_name" width="200" /></row></grid>';
                    const fetchXml = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true" ><entity name="msdyn_customerasset" ><attribute name="msdyn_name" /><attribute name="msdyn_customerassetid" /><filter type="and" ><condition attribute="msdyn_customerassetcategory" operator="eq" value="' + assetCategoryAttributeValue[0].id + '" /></filter> </entity></fetch>';
                    form.getControl("ovs_asset").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
                    
                }
                
            }
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    export function systemStatusOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        const formContext = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
        var systemStatus = formContext.getAttribute("msdyn_systemstatus").getValue();

        //If system status is set to closed
        if (systemStatus == 690970004 || systemStatus == 690970005) {
            //Set state to Inactive
            formContext.getAttribute("statecode").setValue(1);
            //Set Status Reason to Closed
            formContext.getAttribute("statuscode").setValue(918640000);

            
        } else {
            //Keep record Active
            formContext.getAttribute("statecode").setValue(0);
            formContext.getAttribute("statuscode").setValue(1);
        }
    }

    export function stateCodeOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        const formContext = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
        var stateCode = formContext.getAttribute("statecode").getValue();
        //If statecode changed to Active
        if (stateCode == 0) {
            var systemStatus = formContext.getAttribute("msdyn_systemstatus").getValue();
            //If systemStatus is currently Closed
            if (systemStatus == 690970004 || systemStatus == 690970005) {
                //Change systemstatus to Open - Completed
                formContext.getAttribute("msdyn_systemstatus").setValue(690970003);
                //Prevent User from discarding status change
                formContext.data.save();
            }
        }
    }

    export function updateCaseView(eContext: Xrm.ExecutionContext<any, any>): void {
        try {

            const form = <Form.msdyn_workorder.Main.TSISOversightActivity>eContext.getFormContext();
            const caseAttribute = form.getAttribute("msdyn_servicerequest");
            const regionAttribute = form.getAttribute("msdyn_serviceterritory");
            const countryAttribute = form.getAttribute("ts_country");
            const regulatedEntityAttribute = form.getAttribute("ovs_regulatedentity");
            const siteAttribute = form.getAttribute("msdyn_serviceaccount");

            const caseAttributeValue = caseAttribute.getValue();
            const regionAttributeValue = regionAttribute.getValue();
            const countryAttributeValue = countryAttribute.getValue();
            const regulatedEntityAttributeValue = regulatedEntityAttribute.getValue();
            const siteAttributeValue = siteAttribute.getValue();

            var regionCondition = regionAttributeValue == null ? "" : '<condition attribute="ovs_region" operator="eq" value="' + regionAttributeValue[0].id + '" />' ;

            var countryCondition = countryAttributeValue == null ? "" : '<condition attribute="tc_country" operator="eq" value="' + countryAttributeValue[0].id + '" />' ;

            var regulateEntityCondition = regulatedEntityAttributeValue == null ? "" : '<condition attribute="ovs_regulatedentity" operator="eq" value="' + regulatedEntityAttributeValue[0].id + '" />' ;

            var siteCondition = siteAttributeValue == null ? "" : '<condition attribute="ovs_site" operator="eq" value="' + siteAttributeValue[0].id + '" />' ;

            var caseData;
            if(caseAttribute != null && caseAttribute != undefined){
                if(caseAttributeValue != null ){
                    Xrm.WebApi.online.retrieveRecord("incident", caseAttributeValue[0].id.replace(/({|})/g,''), "?$select=_ovs_region_value, _tc_country_value, _ovs_regulatedentity_value, _ovs_site_value").then(
                        function success(result) {
                            if ((regionCondition != "" && (result != null && regionAttributeValue != null && regionAttributeValue[0].id.replace(/({|})/g, '') != result._ovs_region_value.toUpperCase())) ||
                                (countryCondition != "" && (result != null && countryAttributeValue != null && countryAttributeValue[0].id.replace(/({|})/g, '') != result._tc_country_value.toUpperCase())) ||
                                (regulateEntityCondition != "" && (result != null && regulatedEntityAttributeValue != null && regulatedEntityAttributeValue[0].id.replace(/({|})/g, '') != result._ovs_regulatedentity_value.toUpperCase())) ||
                                (siteCondition != "" && (result != null && siteAttributeValue != null && siteAttributeValue[0].id.replace(/({|})/g, '') != result._ovs_site_value.toUpperCase()))) {

                                form.getAttribute("msdyn_servicerequest").setValue(null);
                            }
                    },
                        function (error) {
                            showErrorMessageAlert(error);
                        }
                    );
                }
                // Setup a custom view
                // This value is never saved and only needs to be unique among the other available views for the lookup.
                const viewId = '{5B58559F-F162-5428-4771-79BC825240B3}';
                const entityName = "incident";
                const viewDisplayName = Xrm.Utility.getResourceString("ovs_/resx/WorkOrder", "FilteredCases");
                const layoutXml = '<grid name="resultset" object="10010" jump="title" select="1" icon="1" preview="1"><row name="result" id="incidentid"><cell name="title" width="200" /><cell name="customerid" width="200" /></row></grid>';
                const fetchXml = '<fetch version="1.0" mapping="logical" returntotalrecordcount="true" page="1" count="25" no-lock="false" > <entity name="incident" > <attribute name="statecode" /> <attribute name="title" /> <attribute name="customerid" /> <attribute name="incidentid" /> <filter type="and" >' + regionCondition + countryCondition + regulateEntityCondition + siteCondition + '</filter> <order attribute="title" descending="false" /> </entity> </fetch>';
                form.getControl("msdyn_servicerequest").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
            }
            
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    // FUNCTIONS
    function showErrorMessageAlert(error){
        var alertStrings = { text: error.message };
        var alertOptions = { height: 120, width: 260 };
        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(function () { });
    }

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

    function setRegion(form: Form.msdyn_workorder.Main.TSISOversightActivity): void {
        var currentUserId = Xrm.Utility.getGlobalContext().userSettings.userId;
        currentUserId = currentUserId.replace(/[{}]/g, "");

        // Get the user's territory
        Xrm.WebApi.online.retrieveRecord("systemuser", currentUserId, "?$select=_territoryid_value").then(
            function success(result) {

                if (result != null && result["_territoryid_value"] != null) {

                    // NOTE: Our localization plugin can't localize the territory name on system user
                    // So we do an extra call to the territory table to get the localized name
                    Xrm.WebApi.online.retrieveRecord("territory", result["_territoryid_value"], "?$select=name").then(
                        function success(result) {
                            const territoryId = result["territoryid"];
                            var territoryName = result["name"];
                            var territoryLogicalName = "territory";
                            var lookup = new Array();
                            lookup[0] = new Object();
                            lookup[0].id = territoryId;
                            lookup[0].name = territoryName;
                            lookup[0].entityType = territoryLogicalName;
                            form.getAttribute('msdyn_serviceterritory').setValue(lookup);
                            if(lookup[0].name == "International"){
                                form.getControl("ts_country").setVisible(true);
                            }
                            // Enable the Operation Type if we've successfully set the Region
                            form.getControl("ovs_operationtypeid").setDisabled(false);
                        },
                        function (error) {
                            showErrorMessageAlert(error);
                        }
                    );

                }
            },
            function (error) {
                showErrorMessageAlert(error);
            }
        );
    }

    function closeWorkOrderServiceTasks(formContext: Form.msdyn_workorder.Main.TSISOversightActivity, workOrderServiceTaskData: any) {
        Xrm.WebApi.online.retrieveMultipleRecords("msdyn_workorderservicetask", `?$select=msdyn_workorder&$filter=msdyn_workorder/msdyn_workorderid eq ${formContext.data.entity.getId()}`).then(
            function success(result) {
                for (var i = 0; i < result.entities.length; i++) {
                    Xrm.WebApi.updateRecord("msdyn_workorderservicetask", result.entities[i].msdyn_workorderservicetaskid, workOrderServiceTaskData).then(
                        function success(result) {
                            //work order service task closed successfully
                        },
                        function (error) {
                            showErrorMessageAlert(error);
                        }
                    );
                }
            },
            function (error) {
                showErrorMessageAlert(error);
            }
        );
    }

    function closeBookableResourceBookings(formContext: Form.msdyn_workorder.Main.TSISOversightActivity, bookableResourceBookingData: any) {
        Xrm.WebApi.online.retrieveMultipleRecords("bookableresourcebooking", `?$select=msdyn_workorder&$filter=msdyn_workorder/msdyn_workorderid eq ${formContext.data.entity.getId()}`).then(
            function success(result) {
                for (var i = 0; i < result.entities.length; i++) {
                    Xrm.WebApi.updateRecord("bookableresourcebooking", result.entities[i].bookableresourcebookingid, bookableResourceBookingData).then(
                        function success(result) {
                            //bookable resource booking closed successfully
                        },
                        function (error) {
                            showErrorMessageAlert(error);
                        }
                    );
                }
            },
            function (error) {
                showErrorMessageAlert(error);
            }
        );
    }

    function setWorkOrderServiceTasksView(form: Form.msdyn_workorder.Main.TSISOversightActivity, active: boolean){
        var workOrderView;
        
        if(active){
            workOrderView = 
                {
                    entityType: "savedquery",
                    id: "{C9FD8F4D-8184-4DDB-A31A-89E66E8E710E}",
                    name: "Active Work Order Service Tasks"
                }
        }
        else{
            workOrderView = 
                {
                    entityType: "savedquery",
                    id: "{2F145106-BCB3-4F0F-9D02-E8C3B6BB25E8}",
                    name: "Inactive Work Order Service Tasks"
                };
        }
    
        if (form.getControl("workorderservicetasksgrid").getViewSelector().getCurrentView() != workOrderView) {
            form.getControl("workorderservicetasksgrid").getViewSelector().setCurrentView(workOrderView);
        }
    }
    
    function setBookableResourceBookingsView(form: Form.msdyn_workorder.Main.TSISOversightActivity, active: boolean){
        var bookingsView;
        
        if(active){
            bookingsView = 
                {
                    entityType: "savedquery",
                    id: "{8AF53D0E-07FE-49D4-BBBA-CA524DD6551B}",
                    name: "Active Resource Bookings (Field Service Information)"
                };  
        }
        else{
            bookingsView = 
                {
                    entityType: "savedquery",
                    id: "{B74D2E1A-37CB-4DA9-AA06-156CBF7BC3DD}",
                    name: "Inactive Bookable Resource Bookings"
                }; 
        }
    
        if (form.getControl("bookings").getViewSelector().getCurrentView() != bookingsView) {
            form.getControl("bookings").getViewSelector().setCurrentView(bookingsView);
        }
    }
  }