interface ts_site_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: ts_site_statecode | null;
  statuscode?: ts_site_statuscode | null;
  timezoneruleversionnumber?: number | null;
  ts_address1?: string | null;
  ts_address2?: string | null;
  ts_address3?: string | null;
  ts_addressname?: string | null;
  ts_alias1?: string | null;
  ts_alias2?: string | null;
  ts_alias3?: string | null;
  ts_alias4?: string | null;
  ts_alias5?: string | null;
  ts_businessunit?: string | null;
  ts_city?: string | null;
  ts_class?: ts_ts_site_ts_class | null;
  ts_costcenter?: string | null;
  ts_countryregion?: string | null;
  ts_description?: string | null;
  ts_emailaddress?: string | null;
  ts_functionallocationnameenglish?: string | null;
  ts_functionallocationnamefrench?: string | null;
  ts_iatacode?: string | null;
  ts_icaocode?: string | null;
  ts_latitude?: number | null;
  ts_locationopendate?: Date | null;
  ts_longitude?: number | null;
  ts_lpdtounitedstates?: boolean | null;
  ts_mode?: ts_securityincidentmode | null;
  ts_name?: string | null;
  ts_postalcode?: string | null;
  ts_primarytimezone?: number | null;
  ts_riskscore?: number | null;
  ts_sequence?: number | null;
  ts_shortname?: string | null;
  ts_siteid?: string | null;
  ts_sitestatus?: ts_sitestatus | null;
  ts_stateorprovince?: string | null;
  ts_statusenddate?: Date | null;
  ts_statusstartdate?: Date | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ts_site_Relationships {
  ts_ParentFunctionalLocation?: ts_site_Result | null;
  ts_site_Appointments?: Appointment_Result[] | null;
  ts_site_Emails?: Email_Result[] | null;
  ts_site_ServiceAppointments?: ServiceAppointment_Result[] | null;
  ts_site_ts_enforcementactions?: ts_enforcementaction_Result[] | null;
  ts_ts_site_incident_Site?: Incident_Result[] | null;
  ts_ts_site_msdyn_workorder_ArrivalAerodrome?: msdyn_workorder_Result[] | null;
  ts_ts_site_msdyn_workorder_DepartureAerodrome_Site?: msdyn_workorder_Result[] | null;
  ts_ts_site_msdyn_workorder_FunctionalLocation?: msdyn_workorder_Result[] | null;
  ts_ts_site_msdyn_workorder_Site_Site?: msdyn_workorder_Result[] | null;
  ts_ts_site_msdyn_workorder_Subsubsite?: msdyn_workorder_Result[] | null;
  ts_ts_site_msdyn_workorderservicetask_AOCSite_Site?: msdyn_workorderservicetask_Result[] | null;
  ts_ts_site_msdyn_workorderservicetask_ArrivalAerodrome_Site?: msdyn_workorderservicetask_Result[] | null;
  ts_ts_site_msdyn_workorderservicetask_BoardingLounge_Site?: msdyn_workorderservicetask_Result[] | null;
  ts_ts_site_msdyn_workorderservicetask_DepartureAerodrome_Site?: msdyn_workorderservicetask_Result[] | null;
  ts_ts_site_msdyn_workorderservicetask_Gate_Site?: msdyn_workorderservicetask_Result[] | null;
  ts_ts_site_ovs_finding_Site_Site?: ovs_Finding_Result[] | null;
  ts_ts_site_ovs_operation_Site_Site?: ovs_operation_Result[] | null;
  ts_ts_site_ovs_operation_Subsite_Site?: ovs_operation_Result[] | null;
  ts_ts_site_ovs_operation_Subsubsite_Site?: ovs_operation_Result[] | null;
  ts_ts_site_ts_case_Site?: ts_case_Result[] | null;
  ts_ts_site_ts_operationactivity_Site_Site?: ts_OperationActivity_Result[] | null;
  ts_ts_site_ts_planningdata_Site_Site?: ts_PlanningData_Result[] | null;
  ts_ts_site_ts_securityincident_Destination_Site?: ts_securityincident_Result[] | null;
  ts_ts_site_ts_securityincident_DiversionAerodrome_Site?: ts_securityincident_Result[] | null;
  ts_ts_site_ts_securityincident_Origin_Site?: ts_securityincident_Result[] | null;
  ts_ts_site_ts_securityincident_Site_Site?: ts_securityincident_Result[] | null;
  ts_ts_site_ts_securityincident_Subsite_Site?: ts_securityincident_Result[] | null;
  ts_ts_site_ts_site_ParentFunctionalLocation?: ts_site_Result[] | null;
  ts_ts_site_ts_suggestedinspection_Site_Site?: ts_SuggestedInspection_Result[] | null;
}
interface ts_site extends ts_site_Base, ts_site_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  ts_Country_bind$tc_countries?: string | null;
  ts_ParentFunctionalLocation_bind$ts_sites?: string | null;
  ts_Region_bind$territories?: string | null;
  ts_SiteType2_bind$ovs_sitetypes?: string | null;
  ts_SiteType3_bind$ovs_sitetypes?: string | null;
  ts_SiteType_bind$ovs_sitetypes?: string | null;
}
interface ts_site_Create extends ts_site {
}
interface ts_site_Update extends ts_site {
}
interface ts_site_Select {
  createdby_guid: WebAttribute<ts_site_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ts_site_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ts_site_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ts_site_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ts_site_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ts_site_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ts_site_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ts_site_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<ts_site_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ts_site_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ts_site_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ts_site_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<ts_site_Select, { statecode: ts_site_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ts_site_Select, { statuscode: ts_site_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ts_site_Select, { timezoneruleversionnumber: number | null }, {  }>;
  ts_address1: WebAttribute<ts_site_Select, { ts_address1: string | null }, {  }>;
  ts_address2: WebAttribute<ts_site_Select, { ts_address2: string | null }, {  }>;
  ts_address3: WebAttribute<ts_site_Select, { ts_address3: string | null }, {  }>;
  ts_addressname: WebAttribute<ts_site_Select, { ts_addressname: string | null }, {  }>;
  ts_alias1: WebAttribute<ts_site_Select, { ts_alias1: string | null }, {  }>;
  ts_alias2: WebAttribute<ts_site_Select, { ts_alias2: string | null }, {  }>;
  ts_alias3: WebAttribute<ts_site_Select, { ts_alias3: string | null }, {  }>;
  ts_alias4: WebAttribute<ts_site_Select, { ts_alias4: string | null }, {  }>;
  ts_alias5: WebAttribute<ts_site_Select, { ts_alias5: string | null }, {  }>;
  ts_businessunit: WebAttribute<ts_site_Select, { ts_businessunit: string | null }, {  }>;
  ts_city: WebAttribute<ts_site_Select, { ts_city: string | null }, {  }>;
  ts_class: WebAttribute<ts_site_Select, { ts_class: ts_ts_site_ts_class | null }, { ts_class_formatted?: string }>;
  ts_costcenter: WebAttribute<ts_site_Select, { ts_costcenter: string | null }, {  }>;
  ts_country_guid: WebAttribute<ts_site_Select, { ts_country_guid: string | null }, { ts_country_formatted?: string }>;
  ts_countryregion: WebAttribute<ts_site_Select, { ts_countryregion: string | null }, {  }>;
  ts_description: WebAttribute<ts_site_Select, { ts_description: string | null }, {  }>;
  ts_emailaddress: WebAttribute<ts_site_Select, { ts_emailaddress: string | null }, {  }>;
  ts_functionallocationnameenglish: WebAttribute<ts_site_Select, { ts_functionallocationnameenglish: string | null }, {  }>;
  ts_functionallocationnamefrench: WebAttribute<ts_site_Select, { ts_functionallocationnamefrench: string | null }, {  }>;
  ts_iatacode: WebAttribute<ts_site_Select, { ts_iatacode: string | null }, {  }>;
  ts_icaocode: WebAttribute<ts_site_Select, { ts_icaocode: string | null }, {  }>;
  ts_latitude: WebAttribute<ts_site_Select, { ts_latitude: number | null }, {  }>;
  ts_locationopendate: WebAttribute<ts_site_Select, { ts_locationopendate: Date | null }, { ts_locationopendate_formatted?: string }>;
  ts_longitude: WebAttribute<ts_site_Select, { ts_longitude: number | null }, {  }>;
  ts_lpdtounitedstates: WebAttribute<ts_site_Select, { ts_lpdtounitedstates: boolean | null }, {  }>;
  ts_mode: WebAttribute<ts_site_Select, { ts_mode: ts_securityincidentmode | null }, { ts_mode_formatted?: string }>;
  ts_name: WebAttribute<ts_site_Select, { ts_name: string | null }, {  }>;
  ts_parentfunctionallocation_guid: WebAttribute<ts_site_Select, { ts_parentfunctionallocation_guid: string | null }, { ts_parentfunctionallocation_formatted?: string }>;
  ts_postalcode: WebAttribute<ts_site_Select, { ts_postalcode: string | null }, {  }>;
  ts_primarytimezone: WebAttribute<ts_site_Select, { ts_primarytimezone: number | null }, {  }>;
  ts_region_guid: WebAttribute<ts_site_Select, { ts_region_guid: string | null }, { ts_region_formatted?: string }>;
  ts_riskscore: WebAttribute<ts_site_Select, { ts_riskscore: number | null }, {  }>;
  ts_sequence: WebAttribute<ts_site_Select, { ts_sequence: number | null }, {  }>;
  ts_shortname: WebAttribute<ts_site_Select, { ts_shortname: string | null }, {  }>;
  ts_siteid: WebAttribute<ts_site_Select, { ts_siteid: string | null }, {  }>;
  ts_sitestatus: WebAttribute<ts_site_Select, { ts_sitestatus: ts_sitestatus | null }, { ts_sitestatus_formatted?: string }>;
  ts_sitetype2_guid: WebAttribute<ts_site_Select, { ts_sitetype2_guid: string | null }, { ts_sitetype2_formatted?: string }>;
  ts_sitetype3_guid: WebAttribute<ts_site_Select, { ts_sitetype3_guid: string | null }, { ts_sitetype3_formatted?: string }>;
  ts_sitetype_guid: WebAttribute<ts_site_Select, { ts_sitetype_guid: string | null }, { ts_sitetype_formatted?: string }>;
  ts_stateorprovince: WebAttribute<ts_site_Select, { ts_stateorprovince: string | null }, {  }>;
  ts_statusenddate: WebAttribute<ts_site_Select, { ts_statusenddate: Date | null }, { ts_statusenddate_formatted?: string }>;
  ts_statusstartdate: WebAttribute<ts_site_Select, { ts_statusstartdate: Date | null }, { ts_statusstartdate_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ts_site_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ts_site_Select, { versionnumber: number | null }, {  }>;
}
interface ts_site_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: ts_site_statecode;
  statuscode: ts_site_statuscode;
  timezoneruleversionnumber: number;
  ts_address1: string;
  ts_address2: string;
  ts_address3: string;
  ts_addressname: string;
  ts_alias1: string;
  ts_alias2: string;
  ts_alias3: string;
  ts_alias4: string;
  ts_alias5: string;
  ts_businessunit: string;
  ts_city: string;
  ts_class: ts_ts_site_ts_class;
  ts_costcenter: string;
  ts_country_guid: XQW.Guid;
  ts_countryregion: string;
  ts_description: string;
  ts_emailaddress: string;
  ts_functionallocationnameenglish: string;
  ts_functionallocationnamefrench: string;
  ts_iatacode: string;
  ts_icaocode: string;
  ts_latitude: number;
  ts_locationopendate: Date;
  ts_longitude: number;
  ts_lpdtounitedstates: boolean;
  ts_mode: ts_securityincidentmode;
  ts_name: string;
  ts_parentfunctionallocation_guid: XQW.Guid;
  ts_postalcode: string;
  ts_primarytimezone: number;
  ts_region_guid: XQW.Guid;
  ts_riskscore: number;
  ts_sequence: number;
  ts_shortname: string;
  ts_siteid: XQW.Guid;
  ts_sitestatus: ts_sitestatus;
  ts_sitetype2_guid: XQW.Guid;
  ts_sitetype3_guid: XQW.Guid;
  ts_sitetype_guid: XQW.Guid;
  ts_stateorprovince: string;
  ts_statusenddate: Date;
  ts_statusstartdate: Date;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ts_site_Expand {
  createdby: WebExpand<ts_site_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ts_site_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ts_site_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ts_site_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<ts_site_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<ts_site_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ts_site_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  ts_ParentFunctionalLocation: WebExpand<ts_site_Expand, ts_site_Select, ts_site_Filter, { ts_ParentFunctionalLocation: ts_site_Result }>;
  ts_site_Appointments: WebExpand<ts_site_Expand, Appointment_Select, Appointment_Filter, { ts_site_Appointments: Appointment_Result[] }>;
  ts_site_Emails: WebExpand<ts_site_Expand, Email_Select, Email_Filter, { ts_site_Emails: Email_Result[] }>;
  ts_site_ServiceAppointments: WebExpand<ts_site_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { ts_site_ServiceAppointments: ServiceAppointment_Result[] }>;
  ts_site_ts_enforcementactions: WebExpand<ts_site_Expand, ts_enforcementaction_Select, ts_enforcementaction_Filter, { ts_site_ts_enforcementactions: ts_enforcementaction_Result[] }>;
  ts_ts_site_incident_Site: WebExpand<ts_site_Expand, Incident_Select, Incident_Filter, { ts_ts_site_incident_Site: Incident_Result[] }>;
  ts_ts_site_msdyn_workorder_ArrivalAerodrome: WebExpand<ts_site_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { ts_ts_site_msdyn_workorder_ArrivalAerodrome: msdyn_workorder_Result[] }>;
  ts_ts_site_msdyn_workorder_DepartureAerodrome_Site: WebExpand<ts_site_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { ts_ts_site_msdyn_workorder_DepartureAerodrome_Site: msdyn_workorder_Result[] }>;
  ts_ts_site_msdyn_workorder_FunctionalLocation: WebExpand<ts_site_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { ts_ts_site_msdyn_workorder_FunctionalLocation: msdyn_workorder_Result[] }>;
  ts_ts_site_msdyn_workorder_Site_Site: WebExpand<ts_site_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { ts_ts_site_msdyn_workorder_Site_Site: msdyn_workorder_Result[] }>;
  ts_ts_site_msdyn_workorder_Subsubsite: WebExpand<ts_site_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { ts_ts_site_msdyn_workorder_Subsubsite: msdyn_workorder_Result[] }>;
  ts_ts_site_msdyn_workorderservicetask_AOCSite_Site: WebExpand<ts_site_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { ts_ts_site_msdyn_workorderservicetask_AOCSite_Site: msdyn_workorderservicetask_Result[] }>;
  ts_ts_site_msdyn_workorderservicetask_ArrivalAerodrome_Site: WebExpand<ts_site_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { ts_ts_site_msdyn_workorderservicetask_ArrivalAerodrome_Site: msdyn_workorderservicetask_Result[] }>;
  ts_ts_site_msdyn_workorderservicetask_BoardingLounge_Site: WebExpand<ts_site_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { ts_ts_site_msdyn_workorderservicetask_BoardingLounge_Site: msdyn_workorderservicetask_Result[] }>;
  ts_ts_site_msdyn_workorderservicetask_DepartureAerodrome_Site: WebExpand<ts_site_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { ts_ts_site_msdyn_workorderservicetask_DepartureAerodrome_Site: msdyn_workorderservicetask_Result[] }>;
  ts_ts_site_msdyn_workorderservicetask_Gate_Site: WebExpand<ts_site_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { ts_ts_site_msdyn_workorderservicetask_Gate_Site: msdyn_workorderservicetask_Result[] }>;
  ts_ts_site_ovs_finding_Site_Site: WebExpand<ts_site_Expand, ovs_Finding_Select, ovs_Finding_Filter, { ts_ts_site_ovs_finding_Site_Site: ovs_Finding_Result[] }>;
  ts_ts_site_ovs_operation_Site_Site: WebExpand<ts_site_Expand, ovs_operation_Select, ovs_operation_Filter, { ts_ts_site_ovs_operation_Site_Site: ovs_operation_Result[] }>;
  ts_ts_site_ovs_operation_Subsite_Site: WebExpand<ts_site_Expand, ovs_operation_Select, ovs_operation_Filter, { ts_ts_site_ovs_operation_Subsite_Site: ovs_operation_Result[] }>;
  ts_ts_site_ovs_operation_Subsubsite_Site: WebExpand<ts_site_Expand, ovs_operation_Select, ovs_operation_Filter, { ts_ts_site_ovs_operation_Subsubsite_Site: ovs_operation_Result[] }>;
  ts_ts_site_ts_case_Site: WebExpand<ts_site_Expand, ts_case_Select, ts_case_Filter, { ts_ts_site_ts_case_Site: ts_case_Result[] }>;
  ts_ts_site_ts_operationactivity_Site_Site: WebExpand<ts_site_Expand, ts_OperationActivity_Select, ts_OperationActivity_Filter, { ts_ts_site_ts_operationactivity_Site_Site: ts_OperationActivity_Result[] }>;
  ts_ts_site_ts_planningdata_Site_Site: WebExpand<ts_site_Expand, ts_PlanningData_Select, ts_PlanningData_Filter, { ts_ts_site_ts_planningdata_Site_Site: ts_PlanningData_Result[] }>;
  ts_ts_site_ts_securityincident_Destination_Site: WebExpand<ts_site_Expand, ts_securityincident_Select, ts_securityincident_Filter, { ts_ts_site_ts_securityincident_Destination_Site: ts_securityincident_Result[] }>;
  ts_ts_site_ts_securityincident_DiversionAerodrome_Site: WebExpand<ts_site_Expand, ts_securityincident_Select, ts_securityincident_Filter, { ts_ts_site_ts_securityincident_DiversionAerodrome_Site: ts_securityincident_Result[] }>;
  ts_ts_site_ts_securityincident_Origin_Site: WebExpand<ts_site_Expand, ts_securityincident_Select, ts_securityincident_Filter, { ts_ts_site_ts_securityincident_Origin_Site: ts_securityincident_Result[] }>;
  ts_ts_site_ts_securityincident_Site_Site: WebExpand<ts_site_Expand, ts_securityincident_Select, ts_securityincident_Filter, { ts_ts_site_ts_securityincident_Site_Site: ts_securityincident_Result[] }>;
  ts_ts_site_ts_securityincident_Subsite_Site: WebExpand<ts_site_Expand, ts_securityincident_Select, ts_securityincident_Filter, { ts_ts_site_ts_securityincident_Subsite_Site: ts_securityincident_Result[] }>;
  ts_ts_site_ts_site_ParentFunctionalLocation: WebExpand<ts_site_Expand, ts_site_Select, ts_site_Filter, { ts_ts_site_ts_site_ParentFunctionalLocation: ts_site_Result[] }>;
  ts_ts_site_ts_suggestedinspection_Site_Site: WebExpand<ts_site_Expand, ts_SuggestedInspection_Select, ts_SuggestedInspection_Filter, { ts_ts_site_ts_suggestedinspection_Site_Site: ts_SuggestedInspection_Result[] }>;
}
interface ts_site_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  ts_class_formatted?: string;
  ts_country_formatted?: string;
  ts_locationopendate_formatted?: string;
  ts_mode_formatted?: string;
  ts_parentfunctionallocation_formatted?: string;
  ts_region_formatted?: string;
  ts_sitestatus_formatted?: string;
  ts_sitetype2_formatted?: string;
  ts_sitetype3_formatted?: string;
  ts_sitetype_formatted?: string;
  ts_statusenddate_formatted?: string;
  ts_statusstartdate_formatted?: string;
}
interface ts_site_Result extends ts_site_Base, ts_site_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  ts_country_guid: string | null;
  ts_parentfunctionallocation_guid: string | null;
  ts_region_guid: string | null;
  ts_sitetype2_guid: string | null;
  ts_sitetype3_guid: string | null;
  ts_sitetype_guid: string | null;
}
interface ts_site_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ts_ParentFunctionalLocation: WebMappingRetrieve<ts_site_Select,ts_site_Expand,ts_site_Filter,ts_site_Fixed,ts_site_Result,ts_site_FormattedResult>;
}
interface ts_site_RelatedMany {
  ts_site_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  ts_site_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  ts_site_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  ts_site_ts_enforcementactions: WebMappingRetrieve<ts_enforcementaction_Select,ts_enforcementaction_Expand,ts_enforcementaction_Filter,ts_enforcementaction_Fixed,ts_enforcementaction_Result,ts_enforcementaction_FormattedResult>;
  ts_ts_site_incident_Site: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  ts_ts_site_msdyn_workorder_ArrivalAerodrome: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ts_ts_site_msdyn_workorder_DepartureAerodrome_Site: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ts_ts_site_msdyn_workorder_FunctionalLocation: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ts_ts_site_msdyn_workorder_Site_Site: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ts_ts_site_msdyn_workorder_Subsubsite: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ts_ts_site_msdyn_workorderservicetask_AOCSite_Site: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
  ts_ts_site_msdyn_workorderservicetask_ArrivalAerodrome_Site: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
  ts_ts_site_msdyn_workorderservicetask_BoardingLounge_Site: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
  ts_ts_site_msdyn_workorderservicetask_DepartureAerodrome_Site: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
  ts_ts_site_msdyn_workorderservicetask_Gate_Site: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
  ts_ts_site_ovs_finding_Site_Site: WebMappingRetrieve<ovs_Finding_Select,ovs_Finding_Expand,ovs_Finding_Filter,ovs_Finding_Fixed,ovs_Finding_Result,ovs_Finding_FormattedResult>;
  ts_ts_site_ovs_operation_Site_Site: WebMappingRetrieve<ovs_operation_Select,ovs_operation_Expand,ovs_operation_Filter,ovs_operation_Fixed,ovs_operation_Result,ovs_operation_FormattedResult>;
  ts_ts_site_ovs_operation_Subsite_Site: WebMappingRetrieve<ovs_operation_Select,ovs_operation_Expand,ovs_operation_Filter,ovs_operation_Fixed,ovs_operation_Result,ovs_operation_FormattedResult>;
  ts_ts_site_ovs_operation_Subsubsite_Site: WebMappingRetrieve<ovs_operation_Select,ovs_operation_Expand,ovs_operation_Filter,ovs_operation_Fixed,ovs_operation_Result,ovs_operation_FormattedResult>;
  ts_ts_site_ts_case_Site: WebMappingRetrieve<ts_case_Select,ts_case_Expand,ts_case_Filter,ts_case_Fixed,ts_case_Result,ts_case_FormattedResult>;
  ts_ts_site_ts_operationactivity_Site_Site: WebMappingRetrieve<ts_OperationActivity_Select,ts_OperationActivity_Expand,ts_OperationActivity_Filter,ts_OperationActivity_Fixed,ts_OperationActivity_Result,ts_OperationActivity_FormattedResult>;
  ts_ts_site_ts_planningdata_Site_Site: WebMappingRetrieve<ts_PlanningData_Select,ts_PlanningData_Expand,ts_PlanningData_Filter,ts_PlanningData_Fixed,ts_PlanningData_Result,ts_PlanningData_FormattedResult>;
  ts_ts_site_ts_securityincident_Destination_Site: WebMappingRetrieve<ts_securityincident_Select,ts_securityincident_Expand,ts_securityincident_Filter,ts_securityincident_Fixed,ts_securityincident_Result,ts_securityincident_FormattedResult>;
  ts_ts_site_ts_securityincident_DiversionAerodrome_Site: WebMappingRetrieve<ts_securityincident_Select,ts_securityincident_Expand,ts_securityincident_Filter,ts_securityincident_Fixed,ts_securityincident_Result,ts_securityincident_FormattedResult>;
  ts_ts_site_ts_securityincident_Origin_Site: WebMappingRetrieve<ts_securityincident_Select,ts_securityincident_Expand,ts_securityincident_Filter,ts_securityincident_Fixed,ts_securityincident_Result,ts_securityincident_FormattedResult>;
  ts_ts_site_ts_securityincident_Site_Site: WebMappingRetrieve<ts_securityincident_Select,ts_securityincident_Expand,ts_securityincident_Filter,ts_securityincident_Fixed,ts_securityincident_Result,ts_securityincident_FormattedResult>;
  ts_ts_site_ts_securityincident_Subsite_Site: WebMappingRetrieve<ts_securityincident_Select,ts_securityincident_Expand,ts_securityincident_Filter,ts_securityincident_Fixed,ts_securityincident_Result,ts_securityincident_FormattedResult>;
  ts_ts_site_ts_site_ParentFunctionalLocation: WebMappingRetrieve<ts_site_Select,ts_site_Expand,ts_site_Filter,ts_site_Fixed,ts_site_Result,ts_site_FormattedResult>;
  ts_ts_site_ts_suggestedinspection_Site_Site: WebMappingRetrieve<ts_SuggestedInspection_Select,ts_SuggestedInspection_Expand,ts_SuggestedInspection_Filter,ts_SuggestedInspection_Fixed,ts_SuggestedInspection_Result,ts_SuggestedInspection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ts_sites: WebMappingRetrieve<ts_site_Select,ts_site_Expand,ts_site_Filter,ts_site_Fixed,ts_site_Result,ts_site_FormattedResult>;
}
interface WebEntitiesRelated {
  ts_sites: WebMappingRelated<ts_site_RelatedOne,ts_site_RelatedMany>;
}
interface WebEntitiesCUDA {
  ts_sites: WebMappingCUDA<ts_site_Create,ts_site_Update,ts_site_Select>;
}
