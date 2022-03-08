namespace ROM.FunctionalLocation {
    export function onLoad(eContext: Xrm.ExecutionContext<any, any>): void {
        const form = <Form.msdyn_functionallocation.Main.Information>eContext.getFormContext();

        const ownerAttribute = form.getAttribute("ownerid")
        if (ownerAttribute != null && ownerAttribute != undefined) {

            const ownerAttributeValue = ownerAttribute.getValue();

            if (ownerAttributeValue != null && ownerAttributeValue != undefined) {

                Xrm.WebApi.retrieveRecord("systemuser", ownerAttributeValue[0].id.replace(/[{}]/g, ""), "?$select=_businessunitid_value").then(
                    function success(result) {
                        Xrm.WebApi.retrieveRecord("businessunit", result._businessunitid_value, "?$select=name").then(
                            function success(result) {
                                form.getAttribute("ts_businessunit").setValue(result.name);
                            },
                            function (error) {
                            }
                        );
                    },
                    function (error) {
                    }
                );
            }

            const siteTypeAttribute = form.getAttribute("ts_sitetype");
            if(siteTypeAttribute != null){
                const siteTypeAttributeValue = form.getAttribute("ts_sitetype").getValue();
                if (siteTypeAttributeValue != null) {
                    if(siteTypeAttributeValue[0].name == "Aerodrome"){
                        form.getControl("ts_icaocode").setVisible(true);
                        form.getControl("ts_iatacode").setVisible(true);
                    }
                }
            }

            //If site type is aerodrome, show ICAO and IATA fields
           
        }

        if (form.getAttribute("ts_statusstartdate").getValue() != null) {
            form.getControl("ts_statusenddate").setDisabled(false);
            form.getControl("ts_description").setDisabled(false);
            form.getAttribute("ts_description").setRequiredLevel("required");
        }
    }

    export function onSave(eContext: Xrm.ExecutionContext<any, any>): void {
        const form = <Form.msdyn_functionallocation.Main.Information>eContext.getFormContext();
        const statusStartDateValue = form.getAttribute("ts_statusstartdate").getValue();
        const statusEndDateValue = form.getAttribute("ts_statusenddate").getValue();
        if (statusStartDateValue != null) {
            if (Date.parse(statusStartDateValue.toDateString()) <= Date.parse(new Date(Date.now()).toDateString())) {
                form.getAttribute("ts_sitestatus").setValue(ts_sitestatus.NonOperational);
            }
        }
        if (statusEndDateValue != null) {
            if (Date.parse(statusEndDateValue.toDateString()) <= Date.parse(new Date(Date.now()).toDateString())) {
                form.getAttribute("ts_sitestatus").setValue(ts_sitestatus.Operational);
            }
        }
    }
    export function siteTypeOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        try {
            const form = <Form.msdyn_functionallocation.Main.Information>eContext.getFormContext();
            const siteTypeAttribute = form.getAttribute("ts_sitetype");
            const icaoCodeAttribute = form.getAttribute("ts_icaocode");
            const iataCodeAttribute = form.getAttribute("ts_iatacode");
            if (siteTypeAttribute != null && siteTypeAttribute != undefined) {
                const siteTypeAttributeValue = siteTypeAttribute.getValue();
                if (siteTypeAttributeValue != null && siteTypeAttributeValue != undefined) {
                    if(siteTypeAttributeValue[0].id == "{99DA31E7-7D78-EB11-A812-0022486D697D}" ){ //aerodrome
                        form.getControl("ts_icaocode").setVisible(true)
                        form.getControl("ts_iatacode").setVisible(true)
                    }
                }
                else{
                    icaoCodeAttribute.setValue() == null;
                    iataCodeAttribute.setValue() == null;
                    form.getControl("ts_icaocode").setVisible(false)
                    form.getControl("ts_iatacode").setVisible(false)
                }
            }
        } catch (e) {
            throw new Error(e.Message);
        }
    }

    export function statusStartDateOnChange(eContext: Xrm.ExecutionContext<any, any>): void {
        const form = <Form.msdyn_functionallocation.Main.Information>eContext.getFormContext();
        if (form.getAttribute("ts_statusstartdate").getValue() != null) {
            form.getControl("ts_statusenddate").setDisabled(false);
            form.getControl("ts_description").setDisabled(false);
            form.getAttribute("ts_description").setRequiredLevel("required");
        }
        else {
            form.getAttribute("ts_description").setRequiredLevel("none");
            form.getAttribute("ts_description").setValue(null);
            form.getAttribute("ts_statusenddate").setValue(null);
            form.getControl("ts_statusenddate").setDisabled(true);
            form.getControl("ts_description").setDisabled(true);
        }
    }
}