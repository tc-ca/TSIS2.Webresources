interface ovs_Finding_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  ovs_finding?: string | null;
  ovs_findingcomments?: string | null;
  ovs_findingfile?: string | null;
  ovs_findingid?: string | null;
  ovs_findingprovisionreference?: string | null;
  ovs_findingprovisiontext?: string | null;
  statecode?: ovs_finding_statecode | null;
  statuscode?: ovs_finding_statuscode | null;
  timezoneruleversionnumber?: number | null;
  ts_acceptncatrecommendation?: ts_yesno | null;
  ts_acceptraterecommendation?: ts_yesno | null;
  ts_enforcementaction?: ts_ovs_finding_ts_enforcementaction | null;
  ts_finalenforcementaction?: ts_finalenforcementaction | null;
  ts_findingmappingkey?: string | null;
  ts_findingprovisiontexten?: string | null;
  ts_findingprovisiontextfr?: string | null;
  ts_findingtype?: ts_findingtype | null;
  ts_issueaddressedonsite?: ts_yesno | null;
  ts_justificationof?: string | null;
  ts_ncatenforcementjustification?: string | null;
  ts_ncatenforcementrecommendation?: ts_ncatrecommendations | null;
  ts_ncatfactorguide?: boolean | null;
  ts_ncatfinalenforcementaction?: ts_ncatrecommendations | null;
  ts_ncatinspectorrecommendation?: ts_ncatrecommendations | null;
  ts_ncatmanageralternativerecommendation?: ts_ncatrecommendations | null;
  ts_ncatmanagerdecision?: ts_ncatmanagerdecision | null;
  ts_ncatmanagerenforcementjustification?: string | null;
  ts_noncompliancetimeframe?: ts_noncompliancetimeframe | null;
  ts_notetostakeholder?: string | null;
  ts_proposealternatencatenforcementaction?: boolean | null;
  ts_rateenforcementjustification?: string | null;
  ts_rateenforcementrecommendation?: ts_raterecommendations | null;
  ts_ratefinalenforcementaction?: ts_raterecommendations | null;
  ts_rateinspectorrecommendation?: ts_raterecommendations | null;
  ts_ratemanageralternativerecommendation?: ts_raterecommendations | null;
  ts_ratemanagerdecision?: ts_ratemanagerdecision | null;
  ts_ratemanagerenforcementjustification?: string | null;
  ts_ratespecificcompliancehistory?: ts_ratespecificcompliancehistory | null;
  ts_ratespecificenforcementhistory?: ts_ratespecificenforcementhistory | null;
  ts_sensitivitylevel?: ts_sensitivitylevel | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ovs_Finding_Relationships {
  ovs_CaseId?: Incident_Result | null;
  ovs_WorkOrderServiceTaskId?: msdyn_workorderservicetask_Result | null;
  ts_ActionFinding_ovs_Finding_ovs_Finding?: ts_ActionFinding_Result[] | null;
  ts_Contact?: Contact_Result | null;
  ts_NCATApprovingTeam?: Team_Result | null;
  ts_NCATManager?: SystemUser_Result | null;
  ts_RATEApprovingTeam?: Team_Result | null;
  ts_RATEManager?: SystemUser_Result | null;
  ts_VerbalWarningGivenTo?: Contact_Result | null;
  ts_WorkOrder?: msdyn_workorder_Result | null;
}
interface ovs_Finding extends ovs_Finding_Base, ovs_Finding_Relationships {
  ovs_CaseId_bind$incidents?: string | null;
  ovs_WorkOrderServiceTaskId_bind$msdyn_workorderservicetasks?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  ts_Contact_bind$contacts?: string | null;
  ts_File_bind$ts_files?: string | null;
  ts_NCATActualorPotentialHarm_bind$ts_assessmentratings?: string | null;
  ts_NCATApprovingTeam_bind$teams?: string | null;
  ts_NCATComplianceHistory_bind$ts_assessmentratings?: string | null;
  ts_NCATCooperationwithInspectionorInvestigat_bind$ts_assessmentratings?: string | null;
  ts_NCATDetectionofNonCompliances_bind$ts_assessmentratings?: string | null;
  ts_NCATEconomicBenefit_bind$ts_assessmentratings?: string | null;
  ts_NCATIntentionality_bind$ts_assessmentratings?: string | null;
  ts_NCATManager_bind$systemusers?: string | null;
  ts_NCATMitigationofNonCompliantBehaviors_bind$ts_assessmentratings?: string | null;
  ts_ProvisionCategory_bind$ts_provisioncategories?: string | null;
  ts_RATEActualorPotentialHarm_bind$ts_assessmentratings?: string | null;
  ts_RATEApprovingTeam_bind$teams?: string | null;
  ts_RATEComplianceHistory_bind$ts_assessmentratings?: string | null;
  ts_RATECooperationwithInspectionorInvestigat_bind$ts_assessmentratings?: string | null;
  ts_RATEDetectionofNonCompliances_bind$ts_assessmentratings?: string | null;
  ts_RATEEconomicBenefit_bind$ts_assessmentratings?: string | null;
  ts_RATEGeneralComplianceHistory_bind$ts_assessmentratings?: string | null;
  ts_RATEIntentionality_bind$ts_assessmentratings?: string | null;
  ts_RATEManager_bind$systemusers?: string | null;
  ts_RATEMitigationofNonCompliantBehaviors_bind$ts_assessmentratings?: string | null;
  ts_RATEPreventingRecurrence_bind$ts_assessmentratings?: string | null;
  ts_RATEResponsibility_bind$ts_assessmentratings?: string | null;
  ts_VerbalWarningGivenTo_bind$contacts?: string | null;
  ts_WorkOrder_bind$msdyn_workorders?: string | null;
  ts_accountid_bind$accounts?: string | null;
  ts_actioncreated_bind$ts_actions?: string | null;
  ts_enforcementactioncreated_bind$ts_enforcementactions?: string | null;
  ts_functionallocation_bind$msdyn_functionallocations?: string | null;
  ts_operationid_bind$ovs_operations?: string | null;
  ts_ovs_operationtype_bind$ovs_operationtypes?: string | null;
  ts_qm_rclegislation_bind$qm_rclegislations?: string | null;
}
interface ovs_Finding_Create extends ovs_Finding {
}
interface ovs_Finding_Update extends ovs_Finding {
}
interface ovs_Finding_Select {
  createdby_guid: WebAttribute<ovs_Finding_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ovs_Finding_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ovs_Finding_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ovs_Finding_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ovs_Finding_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ovs_Finding_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ovs_Finding_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ovs_Finding_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ovs_caseid_guid: WebAttribute<ovs_Finding_Select, { ovs_caseid_guid: string | null }, { ovs_caseid_formatted?: string }>;
  ovs_finding1;
  ovs_findingcomments: WebAttribute<ovs_Finding_Select, { ovs_findingcomments: string | null }, {  }>;
  ovs_findingfile: WebAttribute<ovs_Finding_Select, { ovs_findingfile: string | null }, {  }>;
  ovs_findingid: WebAttribute<ovs_Finding_Select, { ovs_findingid: string | null }, {  }>;
  ovs_findingprovisionreference: WebAttribute<ovs_Finding_Select, { ovs_findingprovisionreference: string | null }, {  }>;
  ovs_findingprovisiontext: WebAttribute<ovs_Finding_Select, { ovs_findingprovisiontext: string | null }, {  }>;
  ovs_workorderservicetaskid_guid: WebAttribute<ovs_Finding_Select, { ovs_workorderservicetaskid_guid: string | null }, { ovs_workorderservicetaskid_formatted?: string }>;
  ownerid_guid: WebAttribute<ovs_Finding_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ovs_Finding_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ovs_Finding_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ovs_Finding_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<ovs_Finding_Select, { statecode: ovs_finding_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ovs_Finding_Select, { statuscode: ovs_finding_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ovs_Finding_Select, { timezoneruleversionnumber: number | null }, {  }>;
  ts_acceptncatrecommendation: WebAttribute<ovs_Finding_Select, { ts_acceptncatrecommendation: ts_yesno | null }, { ts_acceptncatrecommendation_formatted?: string }>;
  ts_acceptraterecommendation: WebAttribute<ovs_Finding_Select, { ts_acceptraterecommendation: ts_yesno | null }, { ts_acceptraterecommendation_formatted?: string }>;
  ts_accountid_guid: WebAttribute<ovs_Finding_Select, { ts_accountid_guid: string | null }, { ts_accountid_formatted?: string }>;
  ts_actioncreated_guid: WebAttribute<ovs_Finding_Select, { ts_actioncreated_guid: string | null }, { ts_actioncreated_formatted?: string }>;
  ts_contact_guid: WebAttribute<ovs_Finding_Select, { ts_contact_guid: string | null }, { ts_contact_formatted?: string }>;
  ts_enforcementaction: WebAttribute<ovs_Finding_Select, { ts_enforcementaction: ts_ovs_finding_ts_enforcementaction | null }, { ts_enforcementaction_formatted?: string }>;
  ts_enforcementactioncreated_guid: WebAttribute<ovs_Finding_Select, { ts_enforcementactioncreated_guid: string | null }, { ts_enforcementactioncreated_formatted?: string }>;
  ts_file_guid: WebAttribute<ovs_Finding_Select, { ts_file_guid: string | null }, { ts_file_formatted?: string }>;
  ts_finalenforcementaction: WebAttribute<ovs_Finding_Select, { ts_finalenforcementaction: ts_finalenforcementaction | null }, { ts_finalenforcementaction_formatted?: string }>;
  ts_findingmappingkey: WebAttribute<ovs_Finding_Select, { ts_findingmappingkey: string | null }, {  }>;
  ts_findingprovisiontexten: WebAttribute<ovs_Finding_Select, { ts_findingprovisiontexten: string | null }, {  }>;
  ts_findingprovisiontextfr: WebAttribute<ovs_Finding_Select, { ts_findingprovisiontextfr: string | null }, {  }>;
  ts_findingtype: WebAttribute<ovs_Finding_Select, { ts_findingtype: ts_findingtype | null }, { ts_findingtype_formatted?: string }>;
  ts_functionallocation_guid: WebAttribute<ovs_Finding_Select, { ts_functionallocation_guid: string | null }, { ts_functionallocation_formatted?: string }>;
  ts_issueaddressedonsite: WebAttribute<ovs_Finding_Select, { ts_issueaddressedonsite: ts_yesno | null }, { ts_issueaddressedonsite_formatted?: string }>;
  ts_justificationof: WebAttribute<ovs_Finding_Select, { ts_justificationof: string | null }, {  }>;
  ts_ncatactualorpotentialharm_guid: WebAttribute<ovs_Finding_Select, { ts_ncatactualorpotentialharm_guid: string | null }, { ts_ncatactualorpotentialharm_formatted?: string }>;
  ts_ncatapprovingteam_guid: WebAttribute<ovs_Finding_Select, { ts_ncatapprovingteam_guid: string | null }, { ts_ncatapprovingteam_formatted?: string }>;
  ts_ncatcompliancehistory_guid: WebAttribute<ovs_Finding_Select, { ts_ncatcompliancehistory_guid: string | null }, { ts_ncatcompliancehistory_formatted?: string }>;
  ts_ncatcooperationwithinspectionorinvestigat_guid: WebAttribute<ovs_Finding_Select, { ts_ncatcooperationwithinspectionorinvestigat_guid: string | null }, { ts_ncatcooperationwithinspectionorinvestigat_formatted?: string }>;
  ts_ncatdetectionofnoncompliances_guid: WebAttribute<ovs_Finding_Select, { ts_ncatdetectionofnoncompliances_guid: string | null }, { ts_ncatdetectionofnoncompliances_formatted?: string }>;
  ts_ncateconomicbenefit_guid: WebAttribute<ovs_Finding_Select, { ts_ncateconomicbenefit_guid: string | null }, { ts_ncateconomicbenefit_formatted?: string }>;
  ts_ncatenforcementjustification: WebAttribute<ovs_Finding_Select, { ts_ncatenforcementjustification: string | null }, {  }>;
  ts_ncatenforcementrecommendation: WebAttribute<ovs_Finding_Select, { ts_ncatenforcementrecommendation: ts_ncatrecommendations | null }, { ts_ncatenforcementrecommendation_formatted?: string }>;
  ts_ncatfactorguide: WebAttribute<ovs_Finding_Select, { ts_ncatfactorguide: boolean | null }, {  }>;
  ts_ncatfinalenforcementaction: WebAttribute<ovs_Finding_Select, { ts_ncatfinalenforcementaction: ts_ncatrecommendations | null }, { ts_ncatfinalenforcementaction_formatted?: string }>;
  ts_ncatinspectorrecommendation: WebAttribute<ovs_Finding_Select, { ts_ncatinspectorrecommendation: ts_ncatrecommendations | null }, { ts_ncatinspectorrecommendation_formatted?: string }>;
  ts_ncatintentionality_guid: WebAttribute<ovs_Finding_Select, { ts_ncatintentionality_guid: string | null }, { ts_ncatintentionality_formatted?: string }>;
  ts_ncatmanager_guid: WebAttribute<ovs_Finding_Select, { ts_ncatmanager_guid: string | null }, { ts_ncatmanager_formatted?: string }>;
  ts_ncatmanageralternativerecommendation: WebAttribute<ovs_Finding_Select, { ts_ncatmanageralternativerecommendation: ts_ncatrecommendations | null }, { ts_ncatmanageralternativerecommendation_formatted?: string }>;
  ts_ncatmanagerdecision: WebAttribute<ovs_Finding_Select, { ts_ncatmanagerdecision: ts_ncatmanagerdecision | null }, { ts_ncatmanagerdecision_formatted?: string }>;
  ts_ncatmanagerenforcementjustification: WebAttribute<ovs_Finding_Select, { ts_ncatmanagerenforcementjustification: string | null }, {  }>;
  ts_ncatmitigationofnoncompliantbehaviors_guid: WebAttribute<ovs_Finding_Select, { ts_ncatmitigationofnoncompliantbehaviors_guid: string | null }, { ts_ncatmitigationofnoncompliantbehaviors_formatted?: string }>;
  ts_noncompliancetimeframe: WebAttribute<ovs_Finding_Select, { ts_noncompliancetimeframe: ts_noncompliancetimeframe | null }, { ts_noncompliancetimeframe_formatted?: string }>;
  ts_notetostakeholder: WebAttribute<ovs_Finding_Select, { ts_notetostakeholder: string | null }, {  }>;
  ts_operationid_guid: WebAttribute<ovs_Finding_Select, { ts_operationid_guid: string | null }, { ts_operationid_formatted?: string }>;
  ts_ovs_operationtype_guid: WebAttribute<ovs_Finding_Select, { ts_ovs_operationtype_guid: string | null }, { ts_ovs_operationtype_formatted?: string }>;
  ts_proposealternatencatenforcementaction: WebAttribute<ovs_Finding_Select, { ts_proposealternatencatenforcementaction: boolean | null }, {  }>;
  ts_provisioncategory_guid: WebAttribute<ovs_Finding_Select, { ts_provisioncategory_guid: string | null }, { ts_provisioncategory_formatted?: string }>;
  ts_qm_rclegislation_guid: WebAttribute<ovs_Finding_Select, { ts_qm_rclegislation_guid: string | null }, { ts_qm_rclegislation_formatted?: string }>;
  ts_rateactualorpotentialharm_guid: WebAttribute<ovs_Finding_Select, { ts_rateactualorpotentialharm_guid: string | null }, { ts_rateactualorpotentialharm_formatted?: string }>;
  ts_rateapprovingteam_guid: WebAttribute<ovs_Finding_Select, { ts_rateapprovingteam_guid: string | null }, { ts_rateapprovingteam_formatted?: string }>;
  ts_ratecompliancehistory_guid: WebAttribute<ovs_Finding_Select, { ts_ratecompliancehistory_guid: string | null }, { ts_ratecompliancehistory_formatted?: string }>;
  ts_ratecooperationwithinspectionorinvestigat_guid: WebAttribute<ovs_Finding_Select, { ts_ratecooperationwithinspectionorinvestigat_guid: string | null }, { ts_ratecooperationwithinspectionorinvestigat_formatted?: string }>;
  ts_ratedetectionofnoncompliances_guid: WebAttribute<ovs_Finding_Select, { ts_ratedetectionofnoncompliances_guid: string | null }, { ts_ratedetectionofnoncompliances_formatted?: string }>;
  ts_rateeconomicbenefit_guid: WebAttribute<ovs_Finding_Select, { ts_rateeconomicbenefit_guid: string | null }, { ts_rateeconomicbenefit_formatted?: string }>;
  ts_rateenforcementjustification: WebAttribute<ovs_Finding_Select, { ts_rateenforcementjustification: string | null }, {  }>;
  ts_rateenforcementrecommendation: WebAttribute<ovs_Finding_Select, { ts_rateenforcementrecommendation: ts_raterecommendations | null }, { ts_rateenforcementrecommendation_formatted?: string }>;
  ts_ratefinalenforcementaction: WebAttribute<ovs_Finding_Select, { ts_ratefinalenforcementaction: ts_raterecommendations | null }, { ts_ratefinalenforcementaction_formatted?: string }>;
  ts_rategeneralcompliancehistory_guid: WebAttribute<ovs_Finding_Select, { ts_rategeneralcompliancehistory_guid: string | null }, { ts_rategeneralcompliancehistory_formatted?: string }>;
  ts_rateinspectorrecommendation: WebAttribute<ovs_Finding_Select, { ts_rateinspectorrecommendation: ts_raterecommendations | null }, { ts_rateinspectorrecommendation_formatted?: string }>;
  ts_rateintentionality_guid: WebAttribute<ovs_Finding_Select, { ts_rateintentionality_guid: string | null }, { ts_rateintentionality_formatted?: string }>;
  ts_ratemanager_guid: WebAttribute<ovs_Finding_Select, { ts_ratemanager_guid: string | null }, { ts_ratemanager_formatted?: string }>;
  ts_ratemanageralternativerecommendation: WebAttribute<ovs_Finding_Select, { ts_ratemanageralternativerecommendation: ts_raterecommendations | null }, { ts_ratemanageralternativerecommendation_formatted?: string }>;
  ts_ratemanagerdecision: WebAttribute<ovs_Finding_Select, { ts_ratemanagerdecision: ts_ratemanagerdecision | null }, { ts_ratemanagerdecision_formatted?: string }>;
  ts_ratemanagerenforcementjustification: WebAttribute<ovs_Finding_Select, { ts_ratemanagerenforcementjustification: string | null }, {  }>;
  ts_ratemitigationofnoncompliantbehaviors_guid: WebAttribute<ovs_Finding_Select, { ts_ratemitigationofnoncompliantbehaviors_guid: string | null }, { ts_ratemitigationofnoncompliantbehaviors_formatted?: string }>;
  ts_ratepreventingrecurrence_guid: WebAttribute<ovs_Finding_Select, { ts_ratepreventingrecurrence_guid: string | null }, { ts_ratepreventingrecurrence_formatted?: string }>;
  ts_rateresponsibility_guid: WebAttribute<ovs_Finding_Select, { ts_rateresponsibility_guid: string | null }, { ts_rateresponsibility_formatted?: string }>;
  ts_ratespecificcompliancehistory: WebAttribute<ovs_Finding_Select, { ts_ratespecificcompliancehistory: ts_ratespecificcompliancehistory | null }, { ts_ratespecificcompliancehistory_formatted?: string }>;
  ts_ratespecificenforcementhistory: WebAttribute<ovs_Finding_Select, { ts_ratespecificenforcementhistory: ts_ratespecificenforcementhistory | null }, { ts_ratespecificenforcementhistory_formatted?: string }>;
  ts_sensitivitylevel: WebAttribute<ovs_Finding_Select, { ts_sensitivitylevel: ts_sensitivitylevel | null }, { ts_sensitivitylevel_formatted?: string }>;
  ts_verbalwarninggivento_guid: WebAttribute<ovs_Finding_Select, { ts_verbalwarninggivento_guid: string | null }, { ts_verbalwarninggivento_formatted?: string }>;
  ts_workorder_guid: WebAttribute<ovs_Finding_Select, { ts_workorder_guid: string | null }, { ts_workorder_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ovs_Finding_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ovs_Finding_Select, { versionnumber: number | null }, {  }>;
}
interface ovs_Finding_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ovs_caseid_guid: XQW.Guid;
  ovs_finding: string;
  ovs_findingcomments: string;
  ovs_findingfile: string;
  ovs_findingid: XQW.Guid;
  ovs_findingprovisionreference: string;
  ovs_findingprovisiontext: string;
  ovs_workorderservicetaskid_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: ovs_finding_statecode;
  statuscode: ovs_finding_statuscode;
  timezoneruleversionnumber: number;
  ts_acceptncatrecommendation: ts_yesno;
  ts_acceptraterecommendation: ts_yesno;
  ts_accountid_guid: XQW.Guid;
  ts_actioncreated_guid: XQW.Guid;
  ts_contact_guid: XQW.Guid;
  ts_enforcementaction: ts_ovs_finding_ts_enforcementaction;
  ts_enforcementactioncreated_guid: XQW.Guid;
  ts_file_guid: XQW.Guid;
  ts_finalenforcementaction: ts_finalenforcementaction;
  ts_findingmappingkey: string;
  ts_findingprovisiontexten: string;
  ts_findingprovisiontextfr: string;
  ts_findingtype: ts_findingtype;
  ts_functionallocation_guid: XQW.Guid;
  ts_issueaddressedonsite: ts_yesno;
  ts_justificationof: string;
  ts_ncatactualorpotentialharm_guid: XQW.Guid;
  ts_ncatapprovingteam_guid: XQW.Guid;
  ts_ncatcompliancehistory_guid: XQW.Guid;
  ts_ncatcooperationwithinspectionorinvestigat_guid: XQW.Guid;
  ts_ncatdetectionofnoncompliances_guid: XQW.Guid;
  ts_ncateconomicbenefit_guid: XQW.Guid;
  ts_ncatenforcementjustification: string;
  ts_ncatenforcementrecommendation: ts_ncatrecommendations;
  ts_ncatfactorguide: boolean;
  ts_ncatfinalenforcementaction: ts_ncatrecommendations;
  ts_ncatinspectorrecommendation: ts_ncatrecommendations;
  ts_ncatintentionality_guid: XQW.Guid;
  ts_ncatmanager_guid: XQW.Guid;
  ts_ncatmanageralternativerecommendation: ts_ncatrecommendations;
  ts_ncatmanagerdecision: ts_ncatmanagerdecision;
  ts_ncatmanagerenforcementjustification: string;
  ts_ncatmitigationofnoncompliantbehaviors_guid: XQW.Guid;
  ts_noncompliancetimeframe: ts_noncompliancetimeframe;
  ts_notetostakeholder: string;
  ts_operationid_guid: XQW.Guid;
  ts_ovs_operationtype_guid: XQW.Guid;
  ts_proposealternatencatenforcementaction: boolean;
  ts_provisioncategory_guid: XQW.Guid;
  ts_qm_rclegislation_guid: XQW.Guid;
  ts_rateactualorpotentialharm_guid: XQW.Guid;
  ts_rateapprovingteam_guid: XQW.Guid;
  ts_ratecompliancehistory_guid: XQW.Guid;
  ts_ratecooperationwithinspectionorinvestigat_guid: XQW.Guid;
  ts_ratedetectionofnoncompliances_guid: XQW.Guid;
  ts_rateeconomicbenefit_guid: XQW.Guid;
  ts_rateenforcementjustification: string;
  ts_rateenforcementrecommendation: ts_raterecommendations;
  ts_ratefinalenforcementaction: ts_raterecommendations;
  ts_rategeneralcompliancehistory_guid: XQW.Guid;
  ts_rateinspectorrecommendation: ts_raterecommendations;
  ts_rateintentionality_guid: XQW.Guid;
  ts_ratemanager_guid: XQW.Guid;
  ts_ratemanageralternativerecommendation: ts_raterecommendations;
  ts_ratemanagerdecision: ts_ratemanagerdecision;
  ts_ratemanagerenforcementjustification: string;
  ts_ratemitigationofnoncompliantbehaviors_guid: XQW.Guid;
  ts_ratepreventingrecurrence_guid: XQW.Guid;
  ts_rateresponsibility_guid: XQW.Guid;
  ts_ratespecificcompliancehistory: ts_ratespecificcompliancehistory;
  ts_ratespecificenforcementhistory: ts_ratespecificenforcementhistory;
  ts_sensitivitylevel: ts_sensitivitylevel;
  ts_verbalwarninggivento_guid: XQW.Guid;
  ts_workorder_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ovs_Finding_Expand {
  createdby: WebExpand<ovs_Finding_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ovs_Finding_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ovs_Finding_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ovs_Finding_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ovs_CaseId: WebExpand<ovs_Finding_Expand, Incident_Select, Incident_Filter, { ovs_CaseId: Incident_Result }>;
  ovs_WorkOrderServiceTaskId: WebExpand<ovs_Finding_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { ovs_WorkOrderServiceTaskId: msdyn_workorderservicetask_Result }>;
  ownerid: WebExpand<ovs_Finding_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<ovs_Finding_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ovs_Finding_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  ts_ActionFinding_ovs_Finding_ovs_Finding: WebExpand<ovs_Finding_Expand, ts_ActionFinding_Select, ts_ActionFinding_Filter, { ts_ActionFinding_ovs_Finding_ovs_Finding: ts_ActionFinding_Result[] }>;
  ts_Contact: WebExpand<ovs_Finding_Expand, Contact_Select, Contact_Filter, { ts_Contact: Contact_Result }>;
  ts_NCATApprovingTeam: WebExpand<ovs_Finding_Expand, Team_Select, Team_Filter, { ts_NCATApprovingTeam: Team_Result }>;
  ts_NCATManager: WebExpand<ovs_Finding_Expand, SystemUser_Select, SystemUser_Filter, { ts_NCATManager: SystemUser_Result }>;
  ts_RATEApprovingTeam: WebExpand<ovs_Finding_Expand, Team_Select, Team_Filter, { ts_RATEApprovingTeam: Team_Result }>;
  ts_RATEManager: WebExpand<ovs_Finding_Expand, SystemUser_Select, SystemUser_Filter, { ts_RATEManager: SystemUser_Result }>;
  ts_VerbalWarningGivenTo: WebExpand<ovs_Finding_Expand, Contact_Select, Contact_Filter, { ts_VerbalWarningGivenTo: Contact_Result }>;
  ts_WorkOrder: WebExpand<ovs_Finding_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { ts_WorkOrder: msdyn_workorder_Result }>;
  ts_accountid: WebExpand<ovs_Finding_Expand, Account_Select, Account_Filter, { ts_accountid: Account_Result }>;
  ts_enforcementactioncreated: WebExpand<ovs_Finding_Expand, ts_enforcementaction_Select, ts_enforcementaction_Filter, { ts_enforcementactioncreated: ts_enforcementaction_Result }>;
  ts_functionallocation: WebExpand<ovs_Finding_Expand, msdyn_FunctionalLocation_Select, msdyn_FunctionalLocation_Filter, { ts_functionallocation: msdyn_FunctionalLocation_Result }>;
  ts_operationid: WebExpand<ovs_Finding_Expand, ovs_operation_Select, ovs_operation_Filter, { ts_operationid: ovs_operation_Result }>;
  ts_qm_rclegislation: WebExpand<ovs_Finding_Expand, qm_rclegislation_Select, qm_rclegislation_Filter, { ts_qm_rclegislation: qm_rclegislation_Result }>;
}
interface ovs_Finding_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ovs_caseid_formatted?: string;
  ovs_workorderservicetaskid_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  ts_acceptncatrecommendation_formatted?: string;
  ts_acceptraterecommendation_formatted?: string;
  ts_accountid_formatted?: string;
  ts_actioncreated_formatted?: string;
  ts_contact_formatted?: string;
  ts_enforcementaction_formatted?: string;
  ts_enforcementactioncreated_formatted?: string;
  ts_file_formatted?: string;
  ts_finalenforcementaction_formatted?: string;
  ts_findingtype_formatted?: string;
  ts_functionallocation_formatted?: string;
  ts_issueaddressedonsite_formatted?: string;
  ts_ncatactualorpotentialharm_formatted?: string;
  ts_ncatapprovingteam_formatted?: string;
  ts_ncatcompliancehistory_formatted?: string;
  ts_ncatcooperationwithinspectionorinvestigat_formatted?: string;
  ts_ncatdetectionofnoncompliances_formatted?: string;
  ts_ncateconomicbenefit_formatted?: string;
  ts_ncatenforcementrecommendation_formatted?: string;
  ts_ncatfinalenforcementaction_formatted?: string;
  ts_ncatinspectorrecommendation_formatted?: string;
  ts_ncatintentionality_formatted?: string;
  ts_ncatmanager_formatted?: string;
  ts_ncatmanageralternativerecommendation_formatted?: string;
  ts_ncatmanagerdecision_formatted?: string;
  ts_ncatmitigationofnoncompliantbehaviors_formatted?: string;
  ts_noncompliancetimeframe_formatted?: string;
  ts_operationid_formatted?: string;
  ts_ovs_operationtype_formatted?: string;
  ts_provisioncategory_formatted?: string;
  ts_qm_rclegislation_formatted?: string;
  ts_rateactualorpotentialharm_formatted?: string;
  ts_rateapprovingteam_formatted?: string;
  ts_ratecompliancehistory_formatted?: string;
  ts_ratecooperationwithinspectionorinvestigat_formatted?: string;
  ts_ratedetectionofnoncompliances_formatted?: string;
  ts_rateeconomicbenefit_formatted?: string;
  ts_rateenforcementrecommendation_formatted?: string;
  ts_ratefinalenforcementaction_formatted?: string;
  ts_rategeneralcompliancehistory_formatted?: string;
  ts_rateinspectorrecommendation_formatted?: string;
  ts_rateintentionality_formatted?: string;
  ts_ratemanager_formatted?: string;
  ts_ratemanageralternativerecommendation_formatted?: string;
  ts_ratemanagerdecision_formatted?: string;
  ts_ratemitigationofnoncompliantbehaviors_formatted?: string;
  ts_ratepreventingrecurrence_formatted?: string;
  ts_rateresponsibility_formatted?: string;
  ts_ratespecificcompliancehistory_formatted?: string;
  ts_ratespecificenforcementhistory_formatted?: string;
  ts_sensitivitylevel_formatted?: string;
  ts_verbalwarninggivento_formatted?: string;
  ts_workorder_formatted?: string;
}
interface ovs_Finding_Result extends ovs_Finding_Base, ovs_Finding_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ovs_caseid_guid: string | null;
  ovs_workorderservicetaskid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  ts_accountid_guid: string | null;
  ts_actioncreated_guid: string | null;
  ts_contact_guid: string | null;
  ts_enforcementactioncreated_guid: string | null;
  ts_file_guid: string | null;
  ts_functionallocation_guid: string | null;
  ts_ncatactualorpotentialharm_guid: string | null;
  ts_ncatapprovingteam_guid: string | null;
  ts_ncatcompliancehistory_guid: string | null;
  ts_ncatcooperationwithinspectionorinvestigat_guid: string | null;
  ts_ncatdetectionofnoncompliances_guid: string | null;
  ts_ncateconomicbenefit_guid: string | null;
  ts_ncatintentionality_guid: string | null;
  ts_ncatmanager_guid: string | null;
  ts_ncatmitigationofnoncompliantbehaviors_guid: string | null;
  ts_operationid_guid: string | null;
  ts_ovs_operationtype_guid: string | null;
  ts_provisioncategory_guid: string | null;
  ts_qm_rclegislation_guid: string | null;
  ts_rateactualorpotentialharm_guid: string | null;
  ts_rateapprovingteam_guid: string | null;
  ts_ratecompliancehistory_guid: string | null;
  ts_ratecooperationwithinspectionorinvestigat_guid: string | null;
  ts_ratedetectionofnoncompliances_guid: string | null;
  ts_rateeconomicbenefit_guid: string | null;
  ts_rategeneralcompliancehistory_guid: string | null;
  ts_rateintentionality_guid: string | null;
  ts_ratemanager_guid: string | null;
  ts_ratemitigationofnoncompliantbehaviors_guid: string | null;
  ts_ratepreventingrecurrence_guid: string | null;
  ts_rateresponsibility_guid: string | null;
  ts_verbalwarninggivento_guid: string | null;
  ts_workorder_guid: string | null;
}
interface ovs_Finding_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ovs_CaseId: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  ovs_WorkOrderServiceTaskId: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ts_Contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  ts_NCATApprovingTeam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  ts_NCATManager: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ts_RATEApprovingTeam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  ts_RATEManager: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ts_VerbalWarningGivenTo: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  ts_WorkOrder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ts_accountid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  ts_enforcementactioncreated: WebMappingRetrieve<ts_enforcementaction_Select,ts_enforcementaction_Expand,ts_enforcementaction_Filter,ts_enforcementaction_Fixed,ts_enforcementaction_Result,ts_enforcementaction_FormattedResult>;
  ts_functionallocation: WebMappingRetrieve<msdyn_FunctionalLocation_Select,msdyn_FunctionalLocation_Expand,msdyn_FunctionalLocation_Filter,msdyn_FunctionalLocation_Fixed,msdyn_FunctionalLocation_Result,msdyn_FunctionalLocation_FormattedResult>;
  ts_operationid: WebMappingRetrieve<ovs_operation_Select,ovs_operation_Expand,ovs_operation_Filter,ovs_operation_Fixed,ovs_operation_Result,ovs_operation_FormattedResult>;
  ts_qm_rclegislation: WebMappingRetrieve<qm_rclegislation_Select,qm_rclegislation_Expand,qm_rclegislation_Filter,qm_rclegislation_Fixed,qm_rclegislation_Result,qm_rclegislation_FormattedResult>;
}
interface ovs_Finding_RelatedMany {
  ts_ActionFinding_ovs_Finding_ovs_Finding: WebMappingRetrieve<ts_ActionFinding_Select,ts_ActionFinding_Expand,ts_ActionFinding_Filter,ts_ActionFinding_Fixed,ts_ActionFinding_Result,ts_ActionFinding_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ovs_findings: WebMappingRetrieve<ovs_Finding_Select,ovs_Finding_Expand,ovs_Finding_Filter,ovs_Finding_Fixed,ovs_Finding_Result,ovs_Finding_FormattedResult>;
}
interface WebEntitiesRelated {
  ovs_findings: WebMappingRelated<ovs_Finding_RelatedOne,ovs_Finding_RelatedMany>;
}
interface WebEntitiesCUDA {
  ovs_findings: WebMappingCUDA<ovs_Finding_Create,ovs_Finding_Update,ovs_Finding_Select>;
}
