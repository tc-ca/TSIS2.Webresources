declare namespace Form.email.Main {
  namespace Wizard {
    namespace Tabs {
      interface Email extends Xrm.SectionCollectionBase {
        get(name: "Hidden Section"): Xrm.PageSection;
        get(name: "Regarding information"): Xrm.PageSection;
        get(name: "attachments"): Xrm.PageSection;
        get(name: "email description"): Xrm.PageSection;
        get(name: "recipient information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "actualdurationminutes"): Xrm.NumberAttribute;
      get(name: "bcc"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "cc"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "description"): Xrm.Attribute<any>;
      get(name: "from"): Xrm.LookupAttribute<"queue" | "systemuser">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<email_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "ikl_a2d_securitytemplate" | "ikl_bulkmigrationjob" | "ikl_bulkmigrationjobstatus" | "ikl_inogiclicensedetails" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_productinventory" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_salessuggestion" | "msdyn_shipvia" | "msdyn_swarm" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "ovs_operation" | "ppp_traveller" | "quote" | "salesorder" | "site" | "ts_request" | "ts_securityincident" | "ts_teamplanningdata">;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "statuscode"): Xrm.OptionSetAttribute<email_statuscode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "to"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "actualdurationminutes"): Xrm.NumberControl;
      get(name: "attachmentsGrid"): Xrm.SubGridControl<"activitymimeattachment">;
      get(name: "bcc"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "cc"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "description"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "from"): Xrm.LookupControl<"queue" | "systemuser">;
      get(name: "header_prioritycode"): Xrm.OptionSetControl<email_prioritycode>;
      get(name: "header_scheduledend"): Xrm.DateControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "ikl_a2d_securitytemplate" | "ikl_bulkmigrationjob" | "ikl_bulkmigrationjobstatus" | "ikl_inogiclicensedetails" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_productinventory" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_salessuggestion" | "msdyn_shipvia" | "msdyn_swarm" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "ovs_operation" | "ppp_traveller" | "quote" | "salesorder" | "site" | "ts_request" | "ts_securityincident" | "ts_teamplanningdata">;
      get(name: "statuscode"): Xrm.OptionSetControl<email_statuscode>;
      get(name: "subject"): Xrm.StringControl;
      get(name: "to"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Email"): Xrm.PageTab<Tabs.Email>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Wizard extends Xrm.PageBase<Wizard.Attributes,Wizard.Tabs,Wizard.Controls> {
    getAttribute(attributeName: "actualdurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "bcc"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "cc"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "description"): Xrm.Attribute<any>;
    getAttribute(attributeName: "from"): Xrm.LookupAttribute<"queue" | "systemuser">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<email_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "ikl_a2d_securitytemplate" | "ikl_bulkmigrationjob" | "ikl_bulkmigrationjobstatus" | "ikl_inogiclicensedetails" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_productinventory" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_salessuggestion" | "msdyn_shipvia" | "msdyn_swarm" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "ovs_operation" | "ppp_traveller" | "quote" | "salesorder" | "site" | "ts_request" | "ts_securityincident" | "ts_teamplanningdata">;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<email_statuscode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "to"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "actualdurationminutes"): Xrm.NumberControl;
    getControl(controlName: "attachmentsGrid"): Xrm.SubGridControl<"activitymimeattachment">;
    getControl(controlName: "bcc"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "cc"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "description"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "from"): Xrm.LookupControl<"queue" | "systemuser">;
    getControl(controlName: "header_prioritycode"): Xrm.OptionSetControl<email_prioritycode>;
    getControl(controlName: "header_scheduledend"): Xrm.DateControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "ikl_a2d_securitytemplate" | "ikl_bulkmigrationjob" | "ikl_bulkmigrationjobstatus" | "ikl_inogiclicensedetails" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_productinventory" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_salessuggestion" | "msdyn_shipvia" | "msdyn_swarm" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "ovs_operation" | "ppp_traveller" | "quote" | "salesorder" | "site" | "ts_request" | "ts_securityincident" | "ts_teamplanningdata">;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<email_statuscode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "to"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "msdyn_salessuggestion" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: string): undefined;
  }
}
