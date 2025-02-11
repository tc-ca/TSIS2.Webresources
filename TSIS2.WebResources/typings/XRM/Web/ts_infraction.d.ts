interface ts_infraction_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: ts_infraction_statecode | null;
  statuscode?: ts_infraction_statuscode | null;
  timezoneruleversionnumber?: number | null;
  ts_acceptraterecommendation?: ts_yesno | null;
  ts_finalenforcementaction?: ts_finalenforcementaction | null;
  ts_infractionid?: string | null;
  ts_infractiontype?: ts_infractiontype | null;
  ts_issueaddressedonsite?: ts_yesno | null;
  ts_name?: string | null;
  ts_noncompliancetimeframe?: ts_noncompliancetimeframe | null;
  ts_rateenforcementjustification?: string | null;
  ts_rateenforcementrecommendation?: ts_raterecommendations | null;
  ts_ratefinalenforcementaction?: ts_raterecommendations | null;
  ts_rateinspectorrecommendation?: ts_raterecommendations | null;
  ts_ratemanageralternativerecommendation?: ts_raterecommendations | null;
  ts_ratemanagerdecision?: ts_ratemanagerdecision | null;
  ts_ratemanagerenforcementjustification?: string | null;
  ts_ratepreviousenforcementmechanism?: ts_ratespecificenforcementhistory | null;
  ts_ratespecificnoncompliancehistory?: ts_ratespecificcompliancehistory | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ts_infraction_Relationships {
  ts_RATEApprovingTeam?: Team_Result | null;
  ts_RATEManager?: SystemUser_Result | null;
  ts_ovs_finding_infraction_ts_infraction?: ovs_Finding_Result[] | null;
}
interface ts_infraction extends ts_infraction_Base, ts_infraction_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  ts_RATEActualorPotentialHarm_bind$ts_assessmentratings?: string | null;
  ts_RATEApprovingTeam_bind$teams?: string | null;
  ts_RATEComplianceHistory_bind$ts_assessmentratings?: string | null;
  ts_RATECooperation_bind$ts_assessmentratings?: string | null;
  ts_RATEDetectionofNonCompliances_bind$ts_assessmentratings?: string | null;
  ts_RATEEconomicBenefit_bind$ts_assessmentratings?: string | null;
  ts_RATEGeneralNonComplianceHistory_bind$ts_assessmentratings?: string | null;
  ts_RATEIntentionality_bind$ts_assessmentratings?: string | null;
  ts_RATEManager_bind$systemusers?: string | null;
  ts_RATEMitigationofHarm_bind$ts_assessmentratings?: string | null;
  ts_RATEPreventingRecurrence_bind$ts_assessmentratings?: string | null;
  ts_RATEResponsibility_bind$ts_assessmentratings?: string | null;
  ts_action_bind$ts_actions?: string | null;
  ts_contact_bind$contacts?: string | null;
  ts_functionallocation_bind$msdyn_functionallocations?: string | null;
  ts_legislation_bind$qm_rclegislations?: string | null;
  ts_operation_bind$ovs_operations?: string | null;
  ts_operationtype_bind$ovs_operationtypes?: string | null;
  ts_stakeholder_bind$accounts?: string | null;
}
interface ts_infraction_Create extends ts_infraction {
}
interface ts_infraction_Update extends ts_infraction {
}
interface ts_infraction_Select {
  createdby_guid: WebAttribute<ts_infraction_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ts_infraction_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ts_infraction_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ts_infraction_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ts_infraction_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ts_infraction_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ts_infraction_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ts_infraction_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<ts_infraction_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ts_infraction_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ts_infraction_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ts_infraction_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<ts_infraction_Select, { statecode: ts_infraction_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ts_infraction_Select, { statuscode: ts_infraction_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ts_infraction_Select, { timezoneruleversionnumber: number | null }, {  }>;
  ts_acceptraterecommendation: WebAttribute<ts_infraction_Select, { ts_acceptraterecommendation: ts_yesno | null }, { ts_acceptraterecommendation_formatted?: string }>;
  ts_action_guid: WebAttribute<ts_infraction_Select, { ts_action_guid: string | null }, { ts_action_formatted?: string }>;
  ts_contact_guid: WebAttribute<ts_infraction_Select, { ts_contact_guid: string | null }, { ts_contact_formatted?: string }>;
  ts_finalenforcementaction: WebAttribute<ts_infraction_Select, { ts_finalenforcementaction: ts_finalenforcementaction | null }, { ts_finalenforcementaction_formatted?: string }>;
  ts_functionallocation_guid: WebAttribute<ts_infraction_Select, { ts_functionallocation_guid: string | null }, { ts_functionallocation_formatted?: string }>;
  ts_infractionid: WebAttribute<ts_infraction_Select, { ts_infractionid: string | null }, {  }>;
  ts_infractiontype: WebAttribute<ts_infraction_Select, { ts_infractiontype: ts_infractiontype | null }, { ts_infractiontype_formatted?: string }>;
  ts_issueaddressedonsite: WebAttribute<ts_infraction_Select, { ts_issueaddressedonsite: ts_yesno | null }, { ts_issueaddressedonsite_formatted?: string }>;
  ts_legislation_guid: WebAttribute<ts_infraction_Select, { ts_legislation_guid: string | null }, { ts_legislation_formatted?: string }>;
  ts_name: WebAttribute<ts_infraction_Select, { ts_name: string | null }, {  }>;
  ts_noncompliancetimeframe: WebAttribute<ts_infraction_Select, { ts_noncompliancetimeframe: ts_noncompliancetimeframe | null }, { ts_noncompliancetimeframe_formatted?: string }>;
  ts_operation_guid: WebAttribute<ts_infraction_Select, { ts_operation_guid: string | null }, { ts_operation_formatted?: string }>;
  ts_operationtype_guid: WebAttribute<ts_infraction_Select, { ts_operationtype_guid: string | null }, { ts_operationtype_formatted?: string }>;
  ts_rateactualorpotentialharm_guid: WebAttribute<ts_infraction_Select, { ts_rateactualorpotentialharm_guid: string | null }, { ts_rateactualorpotentialharm_formatted?: string }>;
  ts_rateapprovingteam_guid: WebAttribute<ts_infraction_Select, { ts_rateapprovingteam_guid: string | null }, { ts_rateapprovingteam_formatted?: string }>;
  ts_ratecompliancehistory_guid: WebAttribute<ts_infraction_Select, { ts_ratecompliancehistory_guid: string | null }, { ts_ratecompliancehistory_formatted?: string }>;
  ts_ratecooperation_guid: WebAttribute<ts_infraction_Select, { ts_ratecooperation_guid: string | null }, { ts_ratecooperation_formatted?: string }>;
  ts_ratedetectionofnoncompliances_guid: WebAttribute<ts_infraction_Select, { ts_ratedetectionofnoncompliances_guid: string | null }, { ts_ratedetectionofnoncompliances_formatted?: string }>;
  ts_rateeconomicbenefit_guid: WebAttribute<ts_infraction_Select, { ts_rateeconomicbenefit_guid: string | null }, { ts_rateeconomicbenefit_formatted?: string }>;
  ts_rateenforcementjustification: WebAttribute<ts_infraction_Select, { ts_rateenforcementjustification: string | null }, {  }>;
  ts_rateenforcementrecommendation: WebAttribute<ts_infraction_Select, { ts_rateenforcementrecommendation: ts_raterecommendations | null }, { ts_rateenforcementrecommendation_formatted?: string }>;
  ts_ratefinalenforcementaction: WebAttribute<ts_infraction_Select, { ts_ratefinalenforcementaction: ts_raterecommendations | null }, { ts_ratefinalenforcementaction_formatted?: string }>;
  ts_rategeneralnoncompliancehistory_guid: WebAttribute<ts_infraction_Select, { ts_rategeneralnoncompliancehistory_guid: string | null }, { ts_rategeneralnoncompliancehistory_formatted?: string }>;
  ts_rateinspectorrecommendation: WebAttribute<ts_infraction_Select, { ts_rateinspectorrecommendation: ts_raterecommendations | null }, { ts_rateinspectorrecommendation_formatted?: string }>;
  ts_rateintentionality_guid: WebAttribute<ts_infraction_Select, { ts_rateintentionality_guid: string | null }, { ts_rateintentionality_formatted?: string }>;
  ts_ratemanager_guid: WebAttribute<ts_infraction_Select, { ts_ratemanager_guid: string | null }, { ts_ratemanager_formatted?: string }>;
  ts_ratemanageralternativerecommendation: WebAttribute<ts_infraction_Select, { ts_ratemanageralternativerecommendation: ts_raterecommendations | null }, { ts_ratemanageralternativerecommendation_formatted?: string }>;
  ts_ratemanagerdecision: WebAttribute<ts_infraction_Select, { ts_ratemanagerdecision: ts_ratemanagerdecision | null }, { ts_ratemanagerdecision_formatted?: string }>;
  ts_ratemanagerenforcementjustification: WebAttribute<ts_infraction_Select, { ts_ratemanagerenforcementjustification: string | null }, {  }>;
  ts_ratemitigationofharm_guid: WebAttribute<ts_infraction_Select, { ts_ratemitigationofharm_guid: string | null }, { ts_ratemitigationofharm_formatted?: string }>;
  ts_ratepreventingrecurrence_guid: WebAttribute<ts_infraction_Select, { ts_ratepreventingrecurrence_guid: string | null }, { ts_ratepreventingrecurrence_formatted?: string }>;
  ts_ratepreviousenforcementmechanism: WebAttribute<ts_infraction_Select, { ts_ratepreviousenforcementmechanism: ts_ratespecificenforcementhistory | null }, { ts_ratepreviousenforcementmechanism_formatted?: string }>;
  ts_rateresponsibility_guid: WebAttribute<ts_infraction_Select, { ts_rateresponsibility_guid: string | null }, { ts_rateresponsibility_formatted?: string }>;
  ts_ratespecificnoncompliancehistory: WebAttribute<ts_infraction_Select, { ts_ratespecificnoncompliancehistory: ts_ratespecificcompliancehistory | null }, { ts_ratespecificnoncompliancehistory_formatted?: string }>;
  ts_stakeholder_guid: WebAttribute<ts_infraction_Select, { ts_stakeholder_guid: string | null }, { ts_stakeholder_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ts_infraction_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ts_infraction_Select, { versionnumber: number | null }, {  }>;
}
interface ts_infraction_Filter {
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
  statecode: ts_infraction_statecode;
  statuscode: ts_infraction_statuscode;
  timezoneruleversionnumber: number;
  ts_acceptraterecommendation: ts_yesno;
  ts_action_guid: XQW.Guid;
  ts_contact_guid: XQW.Guid;
  ts_finalenforcementaction: ts_finalenforcementaction;
  ts_functionallocation_guid: XQW.Guid;
  ts_infractionid: XQW.Guid;
  ts_infractiontype: ts_infractiontype;
  ts_issueaddressedonsite: ts_yesno;
  ts_legislation_guid: XQW.Guid;
  ts_name: string;
  ts_noncompliancetimeframe: ts_noncompliancetimeframe;
  ts_operation_guid: XQW.Guid;
  ts_operationtype_guid: XQW.Guid;
  ts_rateactualorpotentialharm_guid: XQW.Guid;
  ts_rateapprovingteam_guid: XQW.Guid;
  ts_ratecompliancehistory_guid: XQW.Guid;
  ts_ratecooperation_guid: XQW.Guid;
  ts_ratedetectionofnoncompliances_guid: XQW.Guid;
  ts_rateeconomicbenefit_guid: XQW.Guid;
  ts_rateenforcementjustification: string;
  ts_rateenforcementrecommendation: ts_raterecommendations;
  ts_ratefinalenforcementaction: ts_raterecommendations;
  ts_rategeneralnoncompliancehistory_guid: XQW.Guid;
  ts_rateinspectorrecommendation: ts_raterecommendations;
  ts_rateintentionality_guid: XQW.Guid;
  ts_ratemanager_guid: XQW.Guid;
  ts_ratemanageralternativerecommendation: ts_raterecommendations;
  ts_ratemanagerdecision: ts_ratemanagerdecision;
  ts_ratemanagerenforcementjustification: string;
  ts_ratemitigationofharm_guid: XQW.Guid;
  ts_ratepreventingrecurrence_guid: XQW.Guid;
  ts_ratepreviousenforcementmechanism: ts_ratespecificenforcementhistory;
  ts_rateresponsibility_guid: XQW.Guid;
  ts_ratespecificnoncompliancehistory: ts_ratespecificcompliancehistory;
  ts_stakeholder_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ts_infraction_Expand {
  createdby: WebExpand<ts_infraction_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ts_infraction_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ts_infraction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ts_infraction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<ts_infraction_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<ts_infraction_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ts_infraction_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  ts_RATEApprovingTeam: WebExpand<ts_infraction_Expand, Team_Select, Team_Filter, { ts_RATEApprovingTeam: Team_Result }>;
  ts_RATEManager: WebExpand<ts_infraction_Expand, SystemUser_Select, SystemUser_Filter, { ts_RATEManager: SystemUser_Result }>;
  ts_action: WebExpand<ts_infraction_Expand, ts_action_Select, ts_action_Filter, { ts_action: ts_action_Result }>;
  ts_contact: WebExpand<ts_infraction_Expand, Contact_Select, Contact_Filter, { ts_contact: Contact_Result }>;
  ts_functionallocation: WebExpand<ts_infraction_Expand, msdyn_FunctionalLocation_Select, msdyn_FunctionalLocation_Filter, { ts_functionallocation: msdyn_FunctionalLocation_Result }>;
  ts_legislation: WebExpand<ts_infraction_Expand, qm_rclegislation_Select, qm_rclegislation_Filter, { ts_legislation: qm_rclegislation_Result }>;
  ts_operation: WebExpand<ts_infraction_Expand, ovs_operation_Select, ovs_operation_Filter, { ts_operation: ovs_operation_Result }>;
  ts_operationtype: WebExpand<ts_infraction_Expand, ovs_operationtype_Select, ovs_operationtype_Filter, { ts_operationtype: ovs_operationtype_Result }>;
  ts_ovs_finding_infraction_ts_infraction: WebExpand<ts_infraction_Expand, ovs_Finding_Select, ovs_Finding_Filter, { ts_ovs_finding_infraction_ts_infraction: ovs_Finding_Result[] }>;
  ts_stakeholder: WebExpand<ts_infraction_Expand, Account_Select, Account_Filter, { ts_stakeholder: Account_Result }>;
}
interface ts_infraction_FormattedResult {
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
  ts_acceptraterecommendation_formatted?: string;
  ts_action_formatted?: string;
  ts_contact_formatted?: string;
  ts_finalenforcementaction_formatted?: string;
  ts_functionallocation_formatted?: string;
  ts_infractiontype_formatted?: string;
  ts_issueaddressedonsite_formatted?: string;
  ts_legislation_formatted?: string;
  ts_noncompliancetimeframe_formatted?: string;
  ts_operation_formatted?: string;
  ts_operationtype_formatted?: string;
  ts_rateactualorpotentialharm_formatted?: string;
  ts_rateapprovingteam_formatted?: string;
  ts_ratecompliancehistory_formatted?: string;
  ts_ratecooperation_formatted?: string;
  ts_ratedetectionofnoncompliances_formatted?: string;
  ts_rateeconomicbenefit_formatted?: string;
  ts_rateenforcementrecommendation_formatted?: string;
  ts_ratefinalenforcementaction_formatted?: string;
  ts_rategeneralnoncompliancehistory_formatted?: string;
  ts_rateinspectorrecommendation_formatted?: string;
  ts_rateintentionality_formatted?: string;
  ts_ratemanager_formatted?: string;
  ts_ratemanageralternativerecommendation_formatted?: string;
  ts_ratemanagerdecision_formatted?: string;
  ts_ratemitigationofharm_formatted?: string;
  ts_ratepreventingrecurrence_formatted?: string;
  ts_ratepreviousenforcementmechanism_formatted?: string;
  ts_rateresponsibility_formatted?: string;
  ts_ratespecificnoncompliancehistory_formatted?: string;
  ts_stakeholder_formatted?: string;
}
interface ts_infraction_Result extends ts_infraction_Base, ts_infraction_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  ts_action_guid: string | null;
  ts_contact_guid: string | null;
  ts_functionallocation_guid: string | null;
  ts_legislation_guid: string | null;
  ts_operation_guid: string | null;
  ts_operationtype_guid: string | null;
  ts_rateactualorpotentialharm_guid: string | null;
  ts_rateapprovingteam_guid: string | null;
  ts_ratecompliancehistory_guid: string | null;
  ts_ratecooperation_guid: string | null;
  ts_ratedetectionofnoncompliances_guid: string | null;
  ts_rateeconomicbenefit_guid: string | null;
  ts_rategeneralnoncompliancehistory_guid: string | null;
  ts_rateintentionality_guid: string | null;
  ts_ratemanager_guid: string | null;
  ts_ratemitigationofharm_guid: string | null;
  ts_ratepreventingrecurrence_guid: string | null;
  ts_rateresponsibility_guid: string | null;
  ts_stakeholder_guid: string | null;
}
interface ts_infraction_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ts_RATEApprovingTeam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  ts_RATEManager: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ts_action: WebMappingRetrieve<ts_action_Select,ts_action_Expand,ts_action_Filter,ts_action_Fixed,ts_action_Result,ts_action_FormattedResult>;
  ts_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  ts_functionallocation: WebMappingRetrieve<msdyn_FunctionalLocation_Select,msdyn_FunctionalLocation_Expand,msdyn_FunctionalLocation_Filter,msdyn_FunctionalLocation_Fixed,msdyn_FunctionalLocation_Result,msdyn_FunctionalLocation_FormattedResult>;
  ts_legislation: WebMappingRetrieve<qm_rclegislation_Select,qm_rclegislation_Expand,qm_rclegislation_Filter,qm_rclegislation_Fixed,qm_rclegislation_Result,qm_rclegislation_FormattedResult>;
  ts_operation: WebMappingRetrieve<ovs_operation_Select,ovs_operation_Expand,ovs_operation_Filter,ovs_operation_Fixed,ovs_operation_Result,ovs_operation_FormattedResult>;
  ts_operationtype: WebMappingRetrieve<ovs_operationtype_Select,ovs_operationtype_Expand,ovs_operationtype_Filter,ovs_operationtype_Fixed,ovs_operationtype_Result,ovs_operationtype_FormattedResult>;
  ts_stakeholder: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
}
interface ts_infraction_RelatedMany {
  ts_ovs_finding_infraction_ts_infraction: WebMappingRetrieve<ovs_Finding_Select,ovs_Finding_Expand,ovs_Finding_Filter,ovs_Finding_Fixed,ovs_Finding_Result,ovs_Finding_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ts_infractions: WebMappingRetrieve<ts_infraction_Select,ts_infraction_Expand,ts_infraction_Filter,ts_infraction_Fixed,ts_infraction_Result,ts_infraction_FormattedResult>;
}
interface WebEntitiesRelated {
  ts_infractions: WebMappingRelated<ts_infraction_RelatedOne,ts_infraction_RelatedMany>;
}
interface WebEntitiesCUDA {
  ts_infractions: WebMappingCUDA<ts_infraction_Create,ts_infraction_Update,ts_infraction_Select>;
}
