declare namespace Form.appointment.QuickCreate {
  namespace Appointmentquickcreateform {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "budgetamount"): Xrm.NumberAttribute | null;
      get(name: "closeprobability"): Xrm.NumberAttribute | null;
      get(name: "companyname"): Xrm.Attribute<string> | null;
      get(name: "createdon"): Xrm.DateAttribute | null;
      get(name: "currentsituation"): Xrm.Attribute<string> | null;
      get(name: "customerneed"): Xrm.Attribute<string> | null;
      get(name: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "estimatedclosedate"): Xrm.DateAttribute | null;
      get(name: "estimatedvalue"): Xrm.NumberAttribute | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "isalldayevent"): Xrm.OptionSetAttribute<boolean>;
      get(name: "jobtitle"): Xrm.Attribute<string> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "location"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "opportunityratingcode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "optionalattendees"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcontactid"): Xrm.LookupAttribute<"opportunity"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"contact"> | null;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<appointment_prioritycode>;
      get(name: "proposedsolution"): Xrm.Attribute<string> | null;
      get(name: "purchaseprocess"): Xrm.OptionSetAttribute<number> | null;
      get(name: "purchasetimeframe"): Xrm.OptionSetAttribute<number> | null;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "ikl_a2d_securitytemplate" | "ikl_bulkmigrationjob" | "ikl_bulkmigrationjobstatus" | "ikl_inogiclicensedetails" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_productinventory" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "ppp_traveller" | "quote" | "salesorder" | "site" | "ts_request">;
      get(name: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "resolveby"): Xrm.DateAttribute | null;
      get(name: "responseby"): Xrm.DateAttribute | null;
      get(name: "scheduleddurationminutes"): Xrm.NumberAttribute;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "scheduledstart"): Xrm.DateAttribute;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "subjectid"): Xrm.LookupAttribute<"incident"> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "ticketnumber"): Xrm.Attribute<string> | null;
      get(name: "title"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "description"): Xrm.StringControl;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_budgetamount"): Xrm.NumberControl | null;
      get(name: "header_process_budgetamount_1"): Xrm.NumberControl | null;
      get(name: "header_process_closeprobability"): Xrm.NumberControl | null;
      get(name: "header_process_companyname"): Xrm.StringControl | null;
      get(name: "header_process_createdon"): Xrm.DateControl | null;
      get(name: "header_process_currentsituation"): Xrm.StringControl | null;
      get(name: "header_process_customerneed"): Xrm.StringControl | null;
      get(name: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_description"): Xrm.StringControl | null;
      get(name: "header_process_description_1"): Xrm.StringControl | null;
      get(name: "header_process_description_2"): Xrm.StringControl | null;
      get(name: "header_process_description_3"): Xrm.StringControl | null;
      get(name: "header_process_description_4"): Xrm.StringControl | null;
      get(name: "header_process_description_5"): Xrm.StringControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_emailaddress1_1"): Xrm.StringControl | null;
      get(name: "header_process_estimatedclosedate"): Xrm.DateControl | null;
      get(name: "header_process_estimatedvalue"): Xrm.NumberControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_firstname_1"): Xrm.StringControl | null;
      get(name: "header_process_jobtitle"): Xrm.StringControl | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_lastname_1"): Xrm.StringControl | null;
      get(name: "header_process_location"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone_1"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_name_1"): Xrm.StringControl | null;
      get(name: "header_process_opportunityratingcode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_optionalattendees"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress"> | null;
      get(name: "header_process_ownerid"): Xrm.LookupControl<"incident"> | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_parentaccountid_1"): Xrm.LookupControl<"opportunity"> | null;
      get(name: "header_process_parentcontactid"): Xrm.LookupControl<"opportunity"> | null;
      get(name: "header_process_parentcustomerid"): Xrm.LookupControl<"contact"> | null;
      get(name: "header_process_primarycontactid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_prioritycode"): Xrm.OptionSetControl<appointment_prioritycode> | null;
      get(name: "header_process_proposedsolution"): Xrm.StringControl | null;
      get(name: "header_process_purchaseprocess"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_purchasetimeframe"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_regardingobjectid"): Xrm.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "ikl_a2d_securitytemplate" | "ikl_bulkmigrationjob" | "ikl_bulkmigrationjobstatus" | "ikl_inogiclicensedetails" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_productinventory" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "ppp_traveller" | "quote" | "salesorder" | "site" | "ts_request"> | null;
      get(name: "header_process_requiredattendees"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress"> | null;
      get(name: "header_process_resolveby"): Xrm.DateControl | null;
      get(name: "header_process_responseby"): Xrm.DateControl | null;
      get(name: "header_process_scheduledend"): Xrm.DateControl | null;
      get(name: "header_process_scheduledstart"): Xrm.DateControl | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_subject"): Xrm.StringControl | null;
      get(name: "header_process_subject_1"): Xrm.StringControl | null;
      get(name: "header_process_subjectid"): Xrm.LookupControl<"incident"> | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_telephone1_1"): Xrm.StringControl | null;
      get(name: "header_process_ticketnumber"): Xrm.StringControl | null;
      get(name: "header_process_title"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "isalldayevent"): Xrm.OptionSetControl<boolean>;
      get(name: "location"): Xrm.StringControl;
      get(name: "optionalattendees"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetControl<appointment_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "ikl_a2d_securitytemplate" | "ikl_bulkmigrationjob" | "ikl_bulkmigrationjobstatus" | "ikl_inogiclicensedetails" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_productinventory" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "ppp_traveller" | "quote" | "salesorder" | "site" | "ts_request">;
      get(name: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "scheduleddurationminutes"): Xrm.NumberControl;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "scheduledstart"): Xrm.DateControl;
      get(name: "subject"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Appointmentquickcreateform extends Xrm.PageBase<Appointmentquickcreateform.Attributes,Appointmentquickcreateform.Tabs,Appointmentquickcreateform.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "budgetamount"): Xrm.NumberAttribute | null;
    getAttribute(attributeName: "closeprobability"): Xrm.NumberAttribute | null;
    getAttribute(attributeName: "companyname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "currentsituation"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "customerneed"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "estimatedclosedate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "estimatedvalue"): Xrm.NumberAttribute | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "isalldayevent"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "location"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "opportunityratingcode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "optionalattendees"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcontactid"): Xrm.LookupAttribute<"opportunity"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"contact"> | null;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<appointment_prioritycode>;
    getAttribute(attributeName: "proposedsolution"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "purchaseprocess"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "purchasetimeframe"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "ikl_a2d_securitytemplate" | "ikl_bulkmigrationjob" | "ikl_bulkmigrationjobstatus" | "ikl_inogiclicensedetails" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_productinventory" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "ppp_traveller" | "quote" | "salesorder" | "site" | "ts_request">;
    getAttribute(attributeName: "requiredattendees"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "resolveby"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "responseby"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "scheduleddurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "subjectid"): Xrm.LookupAttribute<"incident"> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ticketnumber"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "title"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_budgetamount"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_budgetamount_1"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_closeprobability"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_companyname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_createdon"): Xrm.DateControl | null;
    getControl(controlName: "header_process_currentsituation"): Xrm.StringControl | null;
    getControl(controlName: "header_process_customerneed"): Xrm.StringControl | null;
    getControl(controlName: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_description_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_description_2"): Xrm.StringControl | null;
    getControl(controlName: "header_process_description_3"): Xrm.StringControl | null;
    getControl(controlName: "header_process_description_4"): Xrm.StringControl | null;
    getControl(controlName: "header_process_description_5"): Xrm.StringControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_emailaddress1_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_estimatedclosedate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_estimatedvalue"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_firstname_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_jobtitle"): Xrm.StringControl | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_lastname_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_location"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_opportunityratingcode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_optionalattendees"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress"> | null;
    getControl(controlName: "header_process_ownerid"): Xrm.LookupControl<"incident"> | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_parentaccountid_1"): Xrm.LookupControl<"opportunity"> | null;
    getControl(controlName: "header_process_parentcontactid"): Xrm.LookupControl<"opportunity"> | null;
    getControl(controlName: "header_process_parentcustomerid"): Xrm.LookupControl<"contact"> | null;
    getControl(controlName: "header_process_primarycontactid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_prioritycode"): Xrm.OptionSetControl<appointment_prioritycode> | null;
    getControl(controlName: "header_process_proposedsolution"): Xrm.StringControl | null;
    getControl(controlName: "header_process_purchaseprocess"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_purchasetimeframe"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_regardingobjectid"): Xrm.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "ikl_a2d_securitytemplate" | "ikl_bulkmigrationjob" | "ikl_bulkmigrationjobstatus" | "ikl_inogiclicensedetails" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_productinventory" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "ppp_traveller" | "quote" | "salesorder" | "site" | "ts_request"> | null;
    getControl(controlName: "header_process_requiredattendees"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress"> | null;
    getControl(controlName: "header_process_resolveby"): Xrm.DateControl | null;
    getControl(controlName: "header_process_responseby"): Xrm.DateControl | null;
    getControl(controlName: "header_process_scheduledend"): Xrm.DateControl | null;
    getControl(controlName: "header_process_scheduledstart"): Xrm.DateControl | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_subject"): Xrm.StringControl | null;
    getControl(controlName: "header_process_subject_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_subjectid"): Xrm.LookupControl<"incident"> | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_ticketnumber"): Xrm.StringControl | null;
    getControl(controlName: "header_process_title"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "isalldayevent"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "location"): Xrm.StringControl;
    getControl(controlName: "optionalattendees"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<appointment_prioritycode>;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "ikl_a2d_securitytemplate" | "ikl_bulkmigrationjob" | "ikl_bulkmigrationjobstatus" | "ikl_inogiclicensedetails" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_productinventory" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "ppp_traveller" | "quote" | "salesorder" | "site" | "ts_request">;
    getControl(controlName: "requiredattendees"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "scheduleddurationminutes"): Xrm.NumberControl;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "scheduledstart"): Xrm.DateControl;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
