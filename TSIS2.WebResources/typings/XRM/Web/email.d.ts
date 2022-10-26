interface Email_Base extends WebEntity {
  activityadditionalparams?: string | null;
  activityid?: string | null;
  activitytypecode?: string | null;
  actualdurationminutes?: number | null;
  actualend?: Date | null;
  actualstart?: Date | null;
  attachmentcount?: number | null;
  attachmentopencount?: number | null;
  baseconversationindexhash?: number | null;
  category?: string | null;
  compressed?: boolean | null;
  conversationindex?: string | null;
  conversationtrackingid?: string | null;
  correlationmethod?: email_correlationmethod | null;
  createdon?: Date | null;
  delayedemailsendtime?: Date | null;
  deliveryattempts?: number | null;
  deliveryprioritycode?: activitypointer_deliveryprioritycode | null;
  deliveryreceiptrequested?: boolean | null;
  description?: string | null;
  directioncode?: boolean | null;
  emailreminderexpirytime?: Date | null;
  emailreminderstatus?: email_reminderstatus | null;
  emailremindertext?: string | null;
  emailremindertype?: email_remindertype | null;
  emailtrackingid?: string | null;
  exchangerate?: number | null;
  followemailuserpreference?: boolean | null;
  importsequencenumber?: number | null;
  inreplyto?: string | null;
  isbilled?: boolean | null;
  isemailfollowed?: boolean | null;
  isemailreminderset?: boolean | null;
  isregularactivity?: boolean | null;
  isunsafe?: number | null;
  isworkflowcreated?: boolean | null;
  lastonholdtime?: Date | null;
  lastopenedtime?: Date | null;
  linksclickedcount?: number | null;
  messageid?: string | null;
  messageiddupcheck?: string | null;
  mimetype?: string | null;
  modifiedon?: Date | null;
  msdyn_recipientlist?: string | null;
  notifications?: email_notifications | null;
  onholdtime?: number | null;
  opencount?: number | null;
  overriddencreatedon?: Date | null;
  postponeemailprocessinguntil?: Date | null;
  prioritycode?: email_prioritycode | null;
  processid?: string | null;
  readreceiptrequested?: boolean | null;
  reminderactioncardid?: string | null;
  replycount?: number | null;
  reservedforinternaluse?: string | null;
  scheduleddurationminutes?: number | null;
  scheduledend?: Date | null;
  scheduledstart?: Date | null;
  sender?: string | null;
  senton?: Date | null;
  sortdate?: Date | null;
  stageid?: string | null;
  statecode?: email_statecode | null;
  statuscode?: email_statuscode | null;
  subcategory?: string | null;
  subject?: string | null;
  submittedby?: string | null;
  timezoneruleversionnumber?: number | null;
  torecipients?: string | null;
  trackingtoken?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Email_Relationships {
  CorrelatedActivityId_Email?: Email_Result | null;
  createdby_email?: SystemUser_Result | null;
  createdonbehalfby_email?: SystemUser_Result | null;
  email_activity_parties?: ActivityParty_Result[] | null;
  email_connections1?: Connection_Result[] | null;
  email_connections2?: Connection_Result[] | null;
  email_email_CorrelatedActivityId?: Email_Result[] | null;
  email_email_parentactivityid?: Email_Result[] | null;
  emailsender_account?: Account_Result | null;
  emailsender_contact?: Contact_Result | null;
  emailsender_systemuser?: SystemUser_Result | null;
  modifiedby_email?: SystemUser_Result | null;
  modifiedonbehalfby_email?: SystemUser_Result | null;
  ownerid_email?: Team_Result | null;
  ownerid_email1?: SystemUser_Result | null;
  owningteam_email?: Team_Result | null;
  owninguser_email?: SystemUser_Result | null;
  regardingobjectid_account_email?: Account_Result | null;
  regardingobjectid_bookableresourcebooking_email?: BookableResourceBooking_Result | null;
  regardingobjectid_contact_email?: Contact_Result | null;
  regardingobjectid_incident_email?: Incident_Result | null;
  regardingobjectid_msdyn_customerasset_email?: msdyn_customerasset_Result | null;
  regardingobjectid_msdyn_workorder_email?: msdyn_workorder_Result | null;
  regardingobjectid_msdyn_workorderservicetask_email?: msdyn_workorderservicetask_Result | null;
  regardingobjectid_ovs_operation_email?: ovs_operation_Result | null;
}
interface Email extends Email_Base, Email_Relationships {
  ownerid_email_bind$systemusers?: string | null;
  ownerid_email_bind$teams?: string | null;
  regardingobjectid_account_email_bind$accounts?: string | null;
  regardingobjectid_asyncoperation_bind$asyncoperations?: string | null;
  regardingobjectid_bookableresourcebooking_email_bind$bookableresourcebookings?: string | null;
  regardingobjectid_bookableresourcebookingheader_email_bind$bookableresourcebookingheaders?: string | null;
  regardingobjectid_bulkoperation_email_bind$bulkoperations?: string | null;
  regardingobjectid_campaign_email_bind$campaigns?: string | null;
  regardingobjectid_campaignactivity_email_bind$campaignactivities?: string | null;
  regardingobjectid_contact_email_bind$contacts?: string | null;
  regardingobjectid_contract_email_bind$contracts?: string | null;
  regardingobjectid_entitlement_email_bind$entitlements?: string | null;
  regardingobjectid_entitlementtemplate_email_bind$entitlementtemplates?: string | null;
  regardingobjectid_ikl_a2d_securitytemplate_email_bind$ikl_a2d_securitytemplates?: string | null;
  regardingobjectid_ikl_bulkmigrationjob_email_bind$ikl_bulkmigrationjobs?: string | null;
  regardingobjectid_ikl_bulkmigrationjobstatus_email_bind$ikl_bulkmigrationjobstatuses?: string | null;
  regardingobjectid_ikl_inogiclicensedetails_email_bind$ikl_inogiclicensedetailses?: string | null;
  regardingobjectid_incident_email_bind$incidents?: string | null;
  regardingobjectid_invoice_email_bind$invoices?: string | null;
  regardingobjectid_knowledgearticle_email_bind$knowledgearticles?: string | null;
  regardingobjectid_knowledgebaserecord_email_bind$knowledgebaserecords?: string | null;
  regardingobjectid_lead_email_bind$leads?: string | null;
  regardingobjectid_msdyn_agreement_email_bind$msdyn_agreements?: string | null;
  regardingobjectid_msdyn_agreementbookingdate_email_bind$msdyn_agreementbookingdates?: string | null;
  regardingobjectid_msdyn_agreementbookingincident_email_bind$msdyn_agreementbookingincidents?: string | null;
  regardingobjectid_msdyn_agreementbookingproduct_email_bind$msdyn_agreementbookingproducts?: string | null;
  regardingobjectid_msdyn_agreementbookingservice_email_bind$msdyn_agreementbookingservices?: string | null;
  regardingobjectid_msdyn_agreementbookingservicetask_email_bind$msdyn_agreementbookingservicetasks?: string | null;
  regardingobjectid_msdyn_agreementbookingsetup_email_bind$msdyn_agreementbookingsetups?: string | null;
  regardingobjectid_msdyn_agreementinvoicedate_email_bind$msdyn_agreementinvoicedates?: string | null;
  regardingobjectid_msdyn_agreementinvoiceproduct_email_bind$msdyn_agreementinvoiceproducts?: string | null;
  regardingobjectid_msdyn_agreementinvoicesetup_email_bind$msdyn_agreementinvoicesetups?: string | null;
  regardingobjectid_msdyn_bookingalertstatus_email_bind$msdyn_bookingalertstatuses?: string | null;
  regardingobjectid_msdyn_bookingrule_email_bind$msdyn_bookingrules?: string | null;
  regardingobjectid_msdyn_bookingtimestamp_email_bind$msdyn_bookingtimestamps?: string | null;
  regardingobjectid_msdyn_customerasset_email_bind$msdyn_customerassets?: string | null;
  regardingobjectid_msdyn_fieldservicesetting_email_bind$msdyn_fieldservicesettings?: string | null;
  regardingobjectid_msdyn_incidenttypecharacteristic_email_bind$msdyn_incidenttypecharacteristics?: string | null;
  regardingobjectid_msdyn_incidenttypeproduct_email_bind$msdyn_incidenttypeproducts?: string | null;
  regardingobjectid_msdyn_incidenttypeservice_email_bind$msdyn_incidenttypeservices?: string | null;
  regardingobjectid_msdyn_inventoryadjustment_email_bind$msdyn_inventoryadjustments?: string | null;
  regardingobjectid_msdyn_inventoryadjustmentproduct_email_bind$msdyn_inventoryadjustmentproducts?: string | null;
  regardingobjectid_msdyn_inventoryjournal_email_bind$msdyn_inventoryjournals?: string | null;
  regardingobjectid_msdyn_inventorytransfer_email_bind$msdyn_inventorytransfers?: string | null;
  regardingobjectid_msdyn_payment_email_bind$msdyn_payments?: string | null;
  regardingobjectid_msdyn_paymentdetail_email_bind$msdyn_paymentdetailes?: string | null;
  regardingobjectid_msdyn_paymentmethod_email_bind$msdyn_paymentmethods?: string | null;
  regardingobjectid_msdyn_paymentterm_email_bind$msdyn_paymentterms?: string | null;
  regardingobjectid_msdyn_playbookinstance_email_bind$msdyn_playbookinstances?: string | null;
  regardingobjectid_msdyn_postalbum_email_bind$msdyn_postalbums?: string | null;
  regardingobjectid_msdyn_postalcode_email_bind$msdyn_postalcodes?: string | null;
  regardingobjectid_msdyn_productinventory_email_bind$msdyn_productinventories?: string | null;
  regardingobjectid_msdyn_purchaseorder_email_bind$msdyn_purchaseorders?: string | null;
  regardingobjectid_msdyn_purchaseorderbill_email_bind$msdyn_purchaseorderbills?: string | null;
  regardingobjectid_msdyn_purchaseorderproduct_email_bind$msdyn_purchaseorderproducts?: string | null;
  regardingobjectid_msdyn_purchaseorderreceipt_email_bind$msdyn_purchaseorderreceipts?: string | null;
  regardingobjectid_msdyn_purchaseorderreceiptproduct_email_bind$msdyn_purchaseorderreceiptproducts?: string | null;
  regardingobjectid_msdyn_purchaseordersubstatus_email_bind$msdyn_purchaseordersubstatuses?: string | null;
  regardingobjectid_msdyn_quotebookingincident_email_bind$msdyn_quotebookingincidents?: string | null;
  regardingobjectid_msdyn_quotebookingproduct_email_bind$msdyn_quotebookingproducts?: string | null;
  regardingobjectid_msdyn_quotebookingservice_email_bind$msdyn_quotebookingservices?: string | null;
  regardingobjectid_msdyn_quotebookingservicetask_email_bind$msdyn_quotebookingservicetasks?: string | null;
  regardingobjectid_msdyn_resourceterritory_email_bind$msdyn_resourceterritories?: string | null;
  regardingobjectid_msdyn_rma_email_bind$msdyn_rmas?: string | null;
  regardingobjectid_msdyn_rmaproduct_email_bind$msdyn_rmaproducts?: string | null;
  regardingobjectid_msdyn_rmareceipt_email_bind$msdyn_rmareceipts?: string | null;
  regardingobjectid_msdyn_rmareceiptproduct_email_bind$msdyn_rmareceiptproducts?: string | null;
  regardingobjectid_msdyn_rmasubstatus_email_bind$msdyn_rmasubstatuses?: string | null;
  regardingobjectid_msdyn_rtv_email_bind$msdyn_rtvs?: string | null;
  regardingobjectid_msdyn_rtvproduct_email_bind$msdyn_rtvproducts?: string | null;
  regardingobjectid_msdyn_rtvsubstatus_email_bind$msdyn_rtvsubstatuses?: string | null;
  regardingobjectid_msdyn_salessuggestion_email_bind$msdyn_salessuggestions?: string | null;
  regardingobjectid_msdyn_shipvia_email_bind$msdyn_shipvias?: string | null;
  regardingobjectid_msdyn_swarm_email_bind$msdyn_swarms?: string | null;
  regardingobjectid_msdyn_systemuserschedulersetting_email_bind$msdyn_systemuserschedulersettinges?: string | null;
  regardingobjectid_msdyn_timegroup_email_bind$msdyn_timegroups?: string | null;
  regardingobjectid_msdyn_timegroupdetail_email_bind$msdyn_timegroupdetails?: string | null;
  regardingobjectid_msdyn_timeoffrequest_email_bind$msdyn_timeoffrequests?: string | null;
  regardingobjectid_msdyn_warehouse_email_bind$msdyn_warehouses?: string | null;
  regardingobjectid_msdyn_workorder_email_bind$msdyn_workorders?: string | null;
  regardingobjectid_msdyn_workordercharacteristic_email_bind$msdyn_workordercharacteristics?: string | null;
  regardingobjectid_msdyn_workorderincident_email_bind$msdyn_workorderincidents?: string | null;
  regardingobjectid_msdyn_workorderproduct_email_bind$msdyn_workorderproducts?: string | null;
  regardingobjectid_msdyn_workorderresourcerestriction_email_bind$msdyn_workorderresourcerestrictions?: string | null;
  regardingobjectid_msdyn_workorderservice_email_bind$msdyn_workorderservices?: string | null;
  regardingobjectid_msdyn_workorderservicetask_email_bind$msdyn_workorderservicetasks?: string | null;
  regardingobjectid_opportunity_email_bind$opportunities?: string | null;
  regardingobjectid_ovs_operation_email_bind$ovs_operations?: string | null;
  regardingobjectid_ppp_traveller_email_bind$ppp_travellers?: string | null;
  regardingobjectid_quote_email_bind$quotes?: string | null;
  regardingobjectid_salesorder_email_bind$salesorders?: string | null;
  regardingobjectid_site_email_bind$sites?: string | null;
  regardingobjectid_ts_request_email_bind$ts_requests?: string | null;
  serviceid_email_bind$services?: string | null;
  sla_email_sla_bind$slas?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  templateid_bind$templates?: string | null;
  transactioncurrencyid_email_bind$transactioncurrencies?: string | null;
}
interface Email_Create extends Email {
  CorrelatedActivityId_Email_bind$emails?: string | null;
  ReceivingMailboxId_Email_bind$mailboxes?: string | null;
  acceptingentityid_bind$queues?: string | null;
  acceptingentityid_bind$systemusers?: string | null;
  activityid_activitypointer_bind$activitypointers?: string | null;
  parentactivityid_bind$emails?: string | null;
}
interface Email_Update extends Email {
}
interface Email_Select {
  acceptingentityid_guid: WebAttribute<Email_Select, { acceptingentityid_guid: string | null }, { acceptingentityid_formatted?: string }>;
  activityadditionalparams: WebAttribute<Email_Select, { activityadditionalparams: string | null }, {  }>;
  activityid: WebAttribute<Email_Select, { activityid: string | null }, {  }>;
  activitytypecode: WebAttribute<Email_Select, { activitytypecode: string | null }, {  }>;
  actualdurationminutes: WebAttribute<Email_Select, { actualdurationminutes: number | null }, {  }>;
  actualend: WebAttribute<Email_Select, { actualend: Date | null }, { actualend_formatted?: string }>;
  actualstart: WebAttribute<Email_Select, { actualstart: Date | null }, { actualstart_formatted?: string }>;
  attachmentcount: WebAttribute<Email_Select, { attachmentcount: number | null }, {  }>;
  attachmentopencount: WebAttribute<Email_Select, { attachmentopencount: number | null }, {  }>;
  baseconversationindexhash: WebAttribute<Email_Select, { baseconversationindexhash: number | null }, {  }>;
  bcc_guid: WebAttribute<Email_Select, { bcc_guid: string | null }, { bcc_formatted?: string }>;
  category: WebAttribute<Email_Select, { category: string | null }, {  }>;
  cc_guid: WebAttribute<Email_Select, { cc_guid: string | null }, { cc_formatted?: string }>;
  compressed: WebAttribute<Email_Select, { compressed: boolean | null }, {  }>;
  conversationindex: WebAttribute<Email_Select, { conversationindex: string | null }, {  }>;
  conversationtrackingid: WebAttribute<Email_Select, { conversationtrackingid: string | null }, {  }>;
  correlatedactivityid_guid: WebAttribute<Email_Select, { correlatedactivityid_guid: string | null }, { correlatedactivityid_formatted?: string }>;
  correlationmethod: WebAttribute<Email_Select, { correlationmethod: email_correlationmethod | null }, { correlationmethod_formatted?: string }>;
  createdby_guid: WebAttribute<Email_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Email_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Email_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  delayedemailsendtime: WebAttribute<Email_Select, { delayedemailsendtime: Date | null }, { delayedemailsendtime_formatted?: string }>;
  deliveryattempts: WebAttribute<Email_Select, { deliveryattempts: number | null }, {  }>;
  deliveryprioritycode: WebAttribute<Email_Select, { deliveryprioritycode: activitypointer_deliveryprioritycode | null }, { deliveryprioritycode_formatted?: string }>;
  deliveryreceiptrequested: WebAttribute<Email_Select, { deliveryreceiptrequested: boolean | null }, {  }>;
  description: WebAttribute<Email_Select, { description: string | null }, {  }>;
  directioncode: WebAttribute<Email_Select, { directioncode: boolean | null }, {  }>;
  emailreminderexpirytime: WebAttribute<Email_Select, { emailreminderexpirytime: Date | null }, { emailreminderexpirytime_formatted?: string }>;
  emailreminderstatus: WebAttribute<Email_Select, { emailreminderstatus: email_reminderstatus | null }, { emailreminderstatus_formatted?: string }>;
  emailremindertext: WebAttribute<Email_Select, { emailremindertext: string | null }, {  }>;
  emailremindertype: WebAttribute<Email_Select, { emailremindertype: email_remindertype | null }, { emailremindertype_formatted?: string }>;
  emailsender_guid: WebAttribute<Email_Select, { emailsender_guid: string | null }, { emailsender_formatted?: string }>;
  emailtrackingid: WebAttribute<Email_Select, { emailtrackingid: string | null }, {  }>;
  exchangerate: WebAttribute<Email_Select, { exchangerate: number | null }, {  }>;
  followemailuserpreference: WebAttribute<Email_Select, { followemailuserpreference: boolean | null }, {  }>;
  from_guid: WebAttribute<Email_Select, { from_guid: string | null }, { from_formatted?: string }>;
  importsequencenumber: WebAttribute<Email_Select, { importsequencenumber: number | null }, {  }>;
  inreplyto: WebAttribute<Email_Select, { inreplyto: string | null }, {  }>;
  isbilled: WebAttribute<Email_Select, { isbilled: boolean | null }, {  }>;
  isemailfollowed: WebAttribute<Email_Select, { isemailfollowed: boolean | null }, {  }>;
  isemailreminderset: WebAttribute<Email_Select, { isemailreminderset: boolean | null }, {  }>;
  isregularactivity: WebAttribute<Email_Select, { isregularactivity: boolean | null }, {  }>;
  isunsafe: WebAttribute<Email_Select, { isunsafe: number | null }, {  }>;
  isworkflowcreated: WebAttribute<Email_Select, { isworkflowcreated: boolean | null }, {  }>;
  lastonholdtime: WebAttribute<Email_Select, { lastonholdtime: Date | null }, { lastonholdtime_formatted?: string }>;
  lastopenedtime: WebAttribute<Email_Select, { lastopenedtime: Date | null }, { lastopenedtime_formatted?: string }>;
  linksclickedcount: WebAttribute<Email_Select, { linksclickedcount: number | null }, {  }>;
  messageid: WebAttribute<Email_Select, { messageid: string | null }, {  }>;
  messageiddupcheck: WebAttribute<Email_Select, { messageiddupcheck: string | null }, {  }>;
  mimetype: WebAttribute<Email_Select, { mimetype: string | null }, {  }>;
  modifiedby_guid: WebAttribute<Email_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Email_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Email_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_recipientlist: WebAttribute<Email_Select, { msdyn_recipientlist: string | null }, {  }>;
  notifications: WebAttribute<Email_Select, { notifications: email_notifications | null }, { notifications_formatted?: string }>;
  onholdtime: WebAttribute<Email_Select, { onholdtime: number | null }, {  }>;
  opencount: WebAttribute<Email_Select, { opencount: number | null }, {  }>;
  overriddencreatedon: WebAttribute<Email_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Email_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Email_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Email_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Email_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentactivityid_guid: WebAttribute<Email_Select, { parentactivityid_guid: string | null }, { parentactivityid_formatted?: string }>;
  postponeemailprocessinguntil: WebAttribute<Email_Select, { postponeemailprocessinguntil: Date | null }, { postponeemailprocessinguntil_formatted?: string }>;
  prioritycode: WebAttribute<Email_Select, { prioritycode: email_prioritycode | null }, { prioritycode_formatted?: string }>;
  processid: WebAttribute<Email_Select, { processid: string | null }, {  }>;
  readreceiptrequested: WebAttribute<Email_Select, { readreceiptrequested: boolean | null }, {  }>;
  receivingmailboxid_guid: WebAttribute<Email_Select, { receivingmailboxid_guid: string | null }, { receivingmailboxid_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<Email_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  reminderactioncardid: WebAttribute<Email_Select, { reminderactioncardid: string | null }, {  }>;
  replycount: WebAttribute<Email_Select, { replycount: number | null }, {  }>;
  reservedforinternaluse: WebAttribute<Email_Select, { reservedforinternaluse: string | null }, {  }>;
  scheduleddurationminutes: WebAttribute<Email_Select, { scheduleddurationminutes: number | null }, {  }>;
  scheduledend: WebAttribute<Email_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
  scheduledstart: WebAttribute<Email_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
  sender: WebAttribute<Email_Select, { sender: string | null }, {  }>;
  sendermailboxid_guid: WebAttribute<Email_Select, { sendermailboxid_guid: string | null }, { sendermailboxid_formatted?: string }>;
  sendersaccount_guid: WebAttribute<Email_Select, { sendersaccount_guid: string | null }, { sendersaccount_formatted?: string }>;
  senton: WebAttribute<Email_Select, { senton: Date | null }, { senton_formatted?: string }>;
  serviceid_guid: WebAttribute<Email_Select, { serviceid_guid: string | null }, { serviceid_formatted?: string }>;
  slaid_guid: WebAttribute<Email_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  slainvokedid_guid: WebAttribute<Email_Select, { slainvokedid_guid: string | null }, { slainvokedid_formatted?: string }>;
  sortdate: WebAttribute<Email_Select, { sortdate: Date | null }, { sortdate_formatted?: string }>;
  stageid: WebAttribute<Email_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<Email_Select, { statecode: email_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Email_Select, { statuscode: email_statuscode | null }, { statuscode_formatted?: string }>;
  subcategory: WebAttribute<Email_Select, { subcategory: string | null }, {  }>;
  subject: WebAttribute<Email_Select, { subject: string | null }, {  }>;
  submittedby: WebAttribute<Email_Select, { submittedby: string | null }, {  }>;
  templateid_guid: WebAttribute<Email_Select, { templateid_guid: string | null }, { templateid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<Email_Select, { timezoneruleversionnumber: number | null }, {  }>;
  to_guid: WebAttribute<Email_Select, { to_guid: string | null }, { to_formatted?: string }>;
  torecipients: WebAttribute<Email_Select, { torecipients: string | null }, {  }>;
  trackingtoken: WebAttribute<Email_Select, { trackingtoken: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Email_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<Email_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Email_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Email_Select, { versionnumber: number | null }, {  }>;
}
interface Email_Filter {
  acceptingentityid_guid: XQW.Guid;
  activityadditionalparams: string;
  activityid: XQW.Guid;
  activitytypecode: string;
  actualdurationminutes: number;
  actualend: Date;
  actualstart: Date;
  attachmentcount: number;
  attachmentopencount: number;
  baseconversationindexhash: number;
  bcc_guid: XQW.Guid;
  category: string;
  cc_guid: XQW.Guid;
  compressed: boolean;
  conversationindex: string;
  conversationtrackingid: XQW.Guid;
  correlatedactivityid_guid: XQW.Guid;
  correlationmethod: email_correlationmethod;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  delayedemailsendtime: Date;
  deliveryattempts: number;
  deliveryprioritycode: activitypointer_deliveryprioritycode;
  deliveryreceiptrequested: boolean;
  description: string;
  directioncode: boolean;
  emailreminderexpirytime: Date;
  emailreminderstatus: email_reminderstatus;
  emailremindertext: string;
  emailremindertype: email_remindertype;
  emailsender_guid: XQW.Guid;
  emailtrackingid: XQW.Guid;
  exchangerate: any;
  followemailuserpreference: boolean;
  from_guid: XQW.Guid;
  importsequencenumber: number;
  inreplyto: string;
  isbilled: boolean;
  isemailfollowed: boolean;
  isemailreminderset: boolean;
  isregularactivity: boolean;
  isunsafe: number;
  isworkflowcreated: boolean;
  lastonholdtime: Date;
  lastopenedtime: Date;
  linksclickedcount: number;
  messageid: string;
  messageiddupcheck: XQW.Guid;
  mimetype: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_recipientlist: string;
  notifications: email_notifications;
  onholdtime: number;
  opencount: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentactivityid_guid: XQW.Guid;
  postponeemailprocessinguntil: Date;
  prioritycode: email_prioritycode;
  processid: XQW.Guid;
  readreceiptrequested: boolean;
  receivingmailboxid_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  reminderactioncardid: XQW.Guid;
  replycount: number;
  reservedforinternaluse: string;
  scheduleddurationminutes: number;
  scheduledend: Date;
  scheduledstart: Date;
  sender: string;
  sendermailboxid_guid: XQW.Guid;
  sendersaccount_guid: XQW.Guid;
  senton: Date;
  serviceid_guid: XQW.Guid;
  slaid_guid: XQW.Guid;
  slainvokedid_guid: XQW.Guid;
  sortdate: Date;
  stageid: XQW.Guid;
  statecode: email_statecode;
  statuscode: email_statuscode;
  subcategory: string;
  subject: string;
  submittedby: string;
  templateid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  to_guid: XQW.Guid;
  torecipients: string;
  trackingtoken: string;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Email_Expand {
  CorrelatedActivityId_Email: WebExpand<Email_Expand, Email_Select, Email_Filter, { CorrelatedActivityId_Email: Email_Result }>;
  acceptingentityid: WebExpand<Email_Expand, SystemUser_Select, SystemUser_Filter, { acceptingentityid: SystemUser_Result }>;
  createdby_email: WebExpand<Email_Expand, SystemUser_Select, SystemUser_Filter, { createdby_email: SystemUser_Result }>;
  createdonbehalfby_email: WebExpand<Email_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby_email: SystemUser_Result }>;
  email_activity_parties: WebExpand<Email_Expand, ActivityParty_Select, ActivityParty_Filter, { email_activity_parties: ActivityParty_Result[] }>;
  email_connections1: WebExpand<Email_Expand, Connection_Select, Connection_Filter, { email_connections1: Connection_Result[] }>;
  email_connections2: WebExpand<Email_Expand, Connection_Select, Connection_Filter, { email_connections2: Connection_Result[] }>;
  email_email_CorrelatedActivityId: WebExpand<Email_Expand, Email_Select, Email_Filter, { email_email_CorrelatedActivityId: Email_Result[] }>;
  email_email_parentactivityid: WebExpand<Email_Expand, Email_Select, Email_Filter, { email_email_parentactivityid: Email_Result[] }>;
  emailsender_account: WebExpand<Email_Expand, Account_Select, Account_Filter, { emailsender_account: Account_Result }>;
  emailsender_contact: WebExpand<Email_Expand, Contact_Select, Contact_Filter, { emailsender_contact: Contact_Result }>;
  emailsender_systemuser: WebExpand<Email_Expand, SystemUser_Select, SystemUser_Filter, { emailsender_systemuser: SystemUser_Result }>;
  modifiedby_email: WebExpand<Email_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby_email: SystemUser_Result }>;
  modifiedonbehalfby_email: WebExpand<Email_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby_email: SystemUser_Result }>;
  ownerid_email: WebExpand<Email_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid_email: SystemUser_Result } & { ownerid_email: Team_Result }>;
  owningteam_email: WebExpand<Email_Expand, Team_Select, Team_Filter, { owningteam_email: Team_Result }>;
  owninguser_email: WebExpand<Email_Expand, SystemUser_Select, SystemUser_Filter, { owninguser_email: SystemUser_Result }>;
  parentactivityid: WebExpand<Email_Expand, Email_Select, Email_Filter, { parentactivityid: Email_Result }>;
  regardingobjectid_account_email: WebExpand<Email_Expand, Account_Select, Account_Filter, { regardingobjectid_account_email: Account_Result }>;
  regardingobjectid_bookableresourcebooking_email: WebExpand<Email_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { regardingobjectid_bookableresourcebooking_email: BookableResourceBooking_Result }>;
  regardingobjectid_contact_email: WebExpand<Email_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact_email: Contact_Result }>;
  regardingobjectid_incident_email: WebExpand<Email_Expand, Incident_Select, Incident_Filter, { regardingobjectid_incident_email: Incident_Result }>;
  regardingobjectid_msdyn_customerasset_email: WebExpand<Email_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { regardingobjectid_msdyn_customerasset_email: msdyn_customerasset_Result }>;
  regardingobjectid_msdyn_workorder_email: WebExpand<Email_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { regardingobjectid_msdyn_workorder_email: msdyn_workorder_Result }>;
  regardingobjectid_msdyn_workorderservicetask_email: WebExpand<Email_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { regardingobjectid_msdyn_workorderservicetask_email: msdyn_workorderservicetask_Result }>;
  regardingobjectid_ovs_operation_email: WebExpand<Email_Expand, ovs_operation_Select, ovs_operation_Filter, { regardingobjectid_ovs_operation_email: ovs_operation_Result }>;
  sendersaccount: WebExpand<Email_Expand, Account_Select, Account_Filter, { sendersaccount: Account_Result }>;
}
interface Email_FormattedResult {
  acceptingentityid_formatted?: string;
  actualend_formatted?: string;
  actualstart_formatted?: string;
  bcc_formatted?: string;
  cc_formatted?: string;
  correlatedactivityid_formatted?: string;
  correlationmethod_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  delayedemailsendtime_formatted?: string;
  deliveryprioritycode_formatted?: string;
  emailreminderexpirytime_formatted?: string;
  emailreminderstatus_formatted?: string;
  emailremindertype_formatted?: string;
  emailsender_formatted?: string;
  from_formatted?: string;
  lastonholdtime_formatted?: string;
  lastopenedtime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  notifications_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentactivityid_formatted?: string;
  postponeemailprocessinguntil_formatted?: string;
  prioritycode_formatted?: string;
  receivingmailboxid_formatted?: string;
  regardingobjectid_formatted?: string;
  scheduledend_formatted?: string;
  scheduledstart_formatted?: string;
  sendermailboxid_formatted?: string;
  sendersaccount_formatted?: string;
  senton_formatted?: string;
  serviceid_formatted?: string;
  slaid_formatted?: string;
  slainvokedid_formatted?: string;
  sortdate_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  templateid_formatted?: string;
  to_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Email_Result extends Email_Base, Email_Relationships {
  "@odata.etag": string;
  acceptingentityid_guid: string | null;
  bcc_guid: string | null;
  cc_guid: string | null;
  correlatedactivityid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  emailsender_guid: string | null;
  from_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentactivityid_guid: string | null;
  receivingmailboxid_guid: string | null;
  regardingobjectid_guid: string | null;
  sendermailboxid_guid: string | null;
  sendersaccount_guid: string | null;
  serviceid_guid: string | null;
  slaid_guid: string | null;
  slainvokedid_guid: string | null;
  templateid_guid: string | null;
  to_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Email_RelatedOne {
  CorrelatedActivityId_Email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  acceptingentityid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdby_email: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby_email: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  emailsender_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  emailsender_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  emailsender_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby_email: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby_email: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid_email: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  ownerid_email1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owningteam_email: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser_email: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentactivityid: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  regardingobjectid_account_email: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_bookableresourcebooking_email: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  regardingobjectid_contact_email: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regardingobjectid_incident_email: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  regardingobjectid_msdyn_customerasset_email: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  regardingobjectid_msdyn_workorder_email: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  regardingobjectid_msdyn_workorderservicetask_email: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
  regardingobjectid_ovs_operation_email: WebMappingRetrieve<ovs_operation_Select,ovs_operation_Expand,ovs_operation_Filter,ovs_operation_Fixed,ovs_operation_Result,ovs_operation_FormattedResult>;
  sendersaccount: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
}
interface Email_RelatedMany {
  email_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  email_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  email_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  email_email_CorrelatedActivityId: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  email_email_parentactivityid: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
}
interface WebEntitiesRetrieve {
  emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
}
interface WebEntitiesRelated {
  emails: WebMappingRelated<Email_RelatedOne,Email_RelatedMany>;
}
interface WebEntitiesCUDA {
  emails: WebMappingCUDA<Email_Create,Email_Update,Email_Select>;
}
