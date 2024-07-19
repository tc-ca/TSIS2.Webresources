declare namespace Form.ovs_finding.Main {
  namespace Information {
    namespace Tabs {
      interface Action_tab extends Xrm.SectionCollectionBase {
        get(name: "tab_7_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface summary extends Xrm.SectionCollectionBase {
        get(name: "summary_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_6 extends Xrm.SectionCollectionBase {
        get(name: "tab_6_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_Files extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_NCAT extends Xrm.SectionCollectionBase {
        get(name: "NCAT_main_section"): Xrm.PageSection;
        get(name: "NCAT_manager_review"): Xrm.PageSection;
        get(name: "NCAT_proposed_section"): Xrm.PageSection;
        get(name: "summary_ncatfactorguide"): Xrm.PageSection;
        get(name: "tab_NCAT_section_5"): Xrm.PageSection;
        get(name: "tab_NCAT_section_6"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_RATE extends Xrm.SectionCollectionBase {
        get(name: "RATE_manager_review"): Xrm.PageSection;
        get(name: "RATE_proposed_section"): Xrm.PageSection;
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "tab_RATE_column_5_section_1"): Xrm.PageSection;
        get(name: "tab_RATE_section_5"): Xrm.PageSection;
        get(name: "tab_RATE_section_7"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_causes extends Xrm.SectionCollectionBase {
        get(name: "tab_8_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface wo_details extends Xrm.SectionCollectionBase {
        get(name: "WOSection"): Xrm.PageSection;
        get(name: "null_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "ovs_caseid"): Xrm.LookupAttribute<"incident">;
      get(name: "ovs_finding"): Xrm.Attribute<string>;
      get(name: "ovs_findingcomments"): Xrm.Attribute<string>;
      get(name: "ovs_findingprovisionreference"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<ovs_finding_statuscode>;
      get(name: "ts_acceptncatrecommendation"): Xrm.OptionSetAttribute<ts_yesno>;
      get(name: "ts_acceptraterecommendation"): Xrm.OptionSetAttribute<ts_yesno>;
      get(name: "ts_accountid"): Xrm.LookupAttribute<"account">;
      get(name: "ts_contact"): Xrm.LookupAttribute<"contact">;
      get(name: "ts_finalenforcementaction"): Xrm.OptionSetAttribute<ts_finalenforcementaction>;
      get(name: "ts_findingprovisiontexten"): Xrm.Attribute<string>;
      get(name: "ts_findingprovisiontextfr"): Xrm.Attribute<string>;
      get(name: "ts_findingtype"): Xrm.OptionSetAttribute<ts_findingtype>;
      get(name: "ts_functionallocation"): Xrm.LookupAttribute<"msdyn_functionallocation">;
      get(name: "ts_issueaddressedonsite"): Xrm.OptionSetAttribute<ts_yesno>;
      get(name: "ts_ncatactualorpotentialharm"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncatapprovingteam"): Xrm.LookupAttribute<"team">;
      get(name: "ts_ncatcompliancehistory"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncatcooperationwithinspectionorinvestigat"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncatdetailstosupport"): Xrm.Attribute<string>;
      get(name: "ts_ncatdetectionofnoncompliances"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncateconomicbenefit"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncatenforcementjustification"): Xrm.Attribute<string>;
      get(name: "ts_ncatenforcementrecommendation"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
      get(name: "ts_ncatfactorguide"): Xrm.Attribute<any>;
      get(name: "ts_ncatinspectorrecommendation"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
      get(name: "ts_ncatintentionality"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncatmanager"): Xrm.LookupAttribute<"systemuser">;
      get(name: "ts_ncatmanageralternativerecommendation"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
      get(name: "ts_ncatmanagerdecision"): Xrm.OptionSetAttribute<ts_ncatmanagerdecision>;
      get(name: "ts_ncatmanagerenforcementjustification"): Xrm.Attribute<string>;
      get(name: "ts_ncatmitigationofnoncompliantbehaviors"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_noncompliancetimeframe"): Xrm.OptionSetAttribute<ts_noncompliancetimeframe>;
      get(name: "ts_notetostakeholder"): Xrm.Attribute<string>;
      get(name: "ts_operationid"): Xrm.LookupAttribute<"ovs_operation">;
      get(name: "ts_ovs_operationtype"): Xrm.LookupAttribute<"ovs_operationtype">;
      get(name: "ts_provisioncategory"): Xrm.LookupAttribute<"ts_provisioncategory">;
      get(name: "ts_qm_rclegislation"): Xrm.LookupAttribute<"qm_rclegislation">;
      get(name: "ts_rateactualorpotentialharm"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_rateapprovingteam"): Xrm.LookupAttribute<"team">;
      get(name: "ts_ratecooperationwithinspectionorinvestigat"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_rateeconomicbenefit"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_rateenforcementjustification"): Xrm.Attribute<string>;
      get(name: "ts_rateenforcementrecommendation"): Xrm.OptionSetAttribute<ts_raterecommendations>;
      get(name: "ts_rategeneralcompliancehistory"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_rateinspectorrecommendation"): Xrm.OptionSetAttribute<ts_raterecommendations>;
      get(name: "ts_rateintentionality"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ratemanager"): Xrm.LookupAttribute<"systemuser">;
      get(name: "ts_ratemanageralternativerecommendation"): Xrm.OptionSetAttribute<ts_raterecommendations>;
      get(name: "ts_ratemanagerdecision"): Xrm.OptionSetAttribute<ts_ratemanagerdecision>;
      get(name: "ts_ratemanagerenforcementjustification"): Xrm.Attribute<string>;
      get(name: "ts_ratemitigationofnoncompliantbehaviors"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ratepreventingrecurrence"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_rateresponsibility"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ratespecificcompliancehistory"): Xrm.OptionSetAttribute<ts_ratespecificcompliancehistory>;
      get(name: "ts_ratespecificenforcementhistory"): Xrm.OptionSetAttribute<ts_ratespecificenforcementhistory>;
      get(name: "ts_sensitivitylevel"): Xrm.OptionSetAttribute<ts_sensitivitylevel>;
      get(name: "ts_workorder"): Xrm.Attribute<any>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Actions"): Xrm.SubGridControl<"ts_actionfinding">;
      get(name: "Causes"): Xrm.SubGridControl<"ts_causefinding">;
      get(name: "Subgrid_1"): Xrm.SubGridControl<"ts_file">;
      get(name: "WebResource_FindingProvisionText"): Xrm.WebResourceControl;
      get(name: "WebResource_NCATFactorGuide"): Xrm.WebResourceControl;
      get(name: "WebResource_RATEFactorGuide_AcceptanceOfResponsibility"): Xrm.WebResourceControl;
      get(name: "WebResource_RATEFactorGuide_ActualPotentialHarmVulnerability"): Xrm.WebResourceControl;
      get(name: "WebResource_RATEFactorGuide_Cooperation"): Xrm.WebResourceControl;
      get(name: "WebResource_RATEFactorGuide_EconomicBenefit"): Xrm.WebResourceControl;
      get(name: "WebResource_RATEFactorGuide_GeneralNonComplianceHistory"): Xrm.WebResourceControl;
      get(name: "WebResource_RATEFactorGuide_Intentionality"): Xrm.WebResourceControl;
      get(name: "WebResource_RATEFactorGuide_MitigationOfHarm"): Xrm.WebResourceControl;
      get(name: "WebResource_RATEFactorGuide_PreventionOfRecurrence"): Xrm.WebResourceControl;
      get(name: "WebResource_RATEFactorGuide_SpecificNonComplianceHistory"): Xrm.WebResourceControl;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statuscode"): Xrm.OptionSetControl<ovs_finding_statuscode>;
      get(name: "header_ts_rateenforcementrecommendation"): Xrm.OptionSetControl<ts_raterecommendations>;
      get(name: "ovs_caseid"): Xrm.LookupControl<"incident">;
      get(name: "ovs_finding"): Xrm.StringControl;
      get(name: "ovs_findingcomments"): Xrm.StringControl;
      get(name: "ovs_findingprovisionreference"): Xrm.StringControl;
      get(name: "relatedfinding_grid"): Xrm.SubGridControl<"ovs_finding">;
      get(name: "ts_acceptncatrecommendation"): Xrm.OptionSetControl<ts_yesno>;
      get(name: "ts_acceptraterecommendation"): Xrm.OptionSetControl<ts_yesno>;
      get(name: "ts_accountid"): Xrm.LookupControl<"account">;
      get(name: "ts_accountid1"): Xrm.LookupControl<"account">;
      get(name: "ts_contact"): Xrm.LookupControl<"contact">;
      get(name: "ts_finalenforcementaction"): Xrm.OptionSetControl<ts_finalenforcementaction>;
      get(name: "ts_findingprovisiontexten"): Xrm.StringControl;
      get(name: "ts_findingprovisiontextfr"): Xrm.StringControl;
      get(name: "ts_findingtype"): Xrm.OptionSetControl<ts_findingtype>;
      get(name: "ts_functionallocation"): Xrm.LookupControl<"msdyn_functionallocation">;
      get(name: "ts_issueaddressedonsite"): Xrm.OptionSetControl<ts_yesno>;
      get(name: "ts_ncatactualorpotentialharm"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncatapprovingteam"): Xrm.LookupControl<"team">;
      get(name: "ts_ncatcompliancehistory"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncatcooperationwithinspectionorinvestigat"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncatdetailstosupport"): Xrm.StringControl;
      get(name: "ts_ncatdetectionofnoncompliances"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncateconomicbenefit"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncatenforcementjustification"): Xrm.StringControl;
      get(name: "ts_ncatenforcementrecommendation"): Xrm.OptionSetControl<ts_ncatrecommendations>;
      get(name: "ts_ncatfactorguide"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ts_ncatinspectorrecommendation"): Xrm.OptionSetControl<ts_ncatrecommendations>;
      get(name: "ts_ncatintentionality"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncatmanager"): Xrm.LookupControl<"systemuser">;
      get(name: "ts_ncatmanageralternativerecommendation"): Xrm.OptionSetControl<ts_ncatrecommendations>;
      get(name: "ts_ncatmanagerdecision"): Xrm.OptionSetControl<ts_ncatmanagerdecision>;
      get(name: "ts_ncatmanagerenforcementjustification"): Xrm.StringControl;
      get(name: "ts_ncatmitigationofnoncompliantbehaviors"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_noncompliancetimeframe"): Xrm.OptionSetControl<ts_noncompliancetimeframe>;
      get(name: "ts_notetostakeholder"): Xrm.StringControl;
      get(name: "ts_operationid"): Xrm.LookupControl<"ovs_operation">;
      get(name: "ts_ovs_operationtype"): Xrm.LookupControl<"ovs_operationtype">;
      get(name: "ts_provisioncategory"): Xrm.LookupControl<"ts_provisioncategory">;
      get(name: "ts_qm_rclegislation"): Xrm.LookupControl<"qm_rclegislation">;
      get(name: "ts_rateactualorpotentialharm"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_rateapprovingteam"): Xrm.LookupControl<"team">;
      get(name: "ts_ratecooperationwithinspectionorinvestigat"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_rateeconomicbenefit"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_rateenforcementjustification"): Xrm.StringControl;
      get(name: "ts_rateenforcementrecommendation"): Xrm.OptionSetControl<ts_raterecommendations>;
      get(name: "ts_rategeneralcompliancehistory"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_rateinspectorrecommendation"): Xrm.OptionSetControl<ts_raterecommendations>;
      get(name: "ts_rateintentionality"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ratemanager"): Xrm.LookupControl<"systemuser">;
      get(name: "ts_ratemanageralternativerecommendation"): Xrm.OptionSetControl<ts_raterecommendations>;
      get(name: "ts_ratemanagerdecision"): Xrm.OptionSetControl<ts_ratemanagerdecision>;
      get(name: "ts_ratemanagerenforcementjustification"): Xrm.StringControl;
      get(name: "ts_ratemitigationofnoncompliantbehaviors"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ratepreventingrecurrence"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_rateresponsibility"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ratespecificcompliancehistory"): Xrm.OptionSetControl<ts_ratespecificcompliancehistory>;
      get(name: "ts_ratespecificenforcementhistory"): Xrm.OptionSetControl<ts_ratespecificenforcementhistory>;
      get(name: "ts_sensitivitylevel"): Xrm.OptionSetControl<ts_sensitivitylevel>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Action_tab"): Xrm.PageTab<Tabs.Action_tab>;
      get(name: "summary"): Xrm.PageTab<Tabs.summary>;
      get(name: "tab_6"): Xrm.PageTab<Tabs.tab_6>;
      get(name: "tab_Files"): Xrm.PageTab<Tabs.tab_Files>;
      get(name: "tab_NCAT"): Xrm.PageTab<Tabs.tab_NCAT>;
      get(name: "tab_RATE"): Xrm.PageTab<Tabs.tab_RATE>;
      get(name: "tab_causes"): Xrm.PageTab<Tabs.tab_causes>;
      get(name: "wo_details"): Xrm.PageTab<Tabs.wo_details>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "ovs_caseid"): Xrm.LookupAttribute<"incident">;
    getAttribute(attributeName: "ovs_finding"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_findingcomments"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_findingprovisionreference"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<ovs_finding_statuscode>;
    getAttribute(attributeName: "ts_acceptncatrecommendation"): Xrm.OptionSetAttribute<ts_yesno>;
    getAttribute(attributeName: "ts_acceptraterecommendation"): Xrm.OptionSetAttribute<ts_yesno>;
    getAttribute(attributeName: "ts_accountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "ts_contact"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "ts_finalenforcementaction"): Xrm.OptionSetAttribute<ts_finalenforcementaction>;
    getAttribute(attributeName: "ts_findingprovisiontexten"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_findingprovisiontextfr"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_findingtype"): Xrm.OptionSetAttribute<ts_findingtype>;
    getAttribute(attributeName: "ts_functionallocation"): Xrm.LookupAttribute<"msdyn_functionallocation">;
    getAttribute(attributeName: "ts_issueaddressedonsite"): Xrm.OptionSetAttribute<ts_yesno>;
    getAttribute(attributeName: "ts_ncatactualorpotentialharm"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncatapprovingteam"): Xrm.LookupAttribute<"team">;
    getAttribute(attributeName: "ts_ncatcompliancehistory"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncatcooperationwithinspectionorinvestigat"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncatdetailstosupport"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_ncatdetectionofnoncompliances"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncateconomicbenefit"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncatenforcementjustification"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_ncatenforcementrecommendation"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
    getAttribute(attributeName: "ts_ncatfactorguide"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ts_ncatinspectorrecommendation"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
    getAttribute(attributeName: "ts_ncatintentionality"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncatmanager"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "ts_ncatmanageralternativerecommendation"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
    getAttribute(attributeName: "ts_ncatmanagerdecision"): Xrm.OptionSetAttribute<ts_ncatmanagerdecision>;
    getAttribute(attributeName: "ts_ncatmanagerenforcementjustification"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_ncatmitigationofnoncompliantbehaviors"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_noncompliancetimeframe"): Xrm.OptionSetAttribute<ts_noncompliancetimeframe>;
    getAttribute(attributeName: "ts_notetostakeholder"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_operationid"): Xrm.LookupAttribute<"ovs_operation">;
    getAttribute(attributeName: "ts_ovs_operationtype"): Xrm.LookupAttribute<"ovs_operationtype">;
    getAttribute(attributeName: "ts_provisioncategory"): Xrm.LookupAttribute<"ts_provisioncategory">;
    getAttribute(attributeName: "ts_qm_rclegislation"): Xrm.LookupAttribute<"qm_rclegislation">;
    getAttribute(attributeName: "ts_rateactualorpotentialharm"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_rateapprovingteam"): Xrm.LookupAttribute<"team">;
    getAttribute(attributeName: "ts_ratecooperationwithinspectionorinvestigat"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_rateeconomicbenefit"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_rateenforcementjustification"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_rateenforcementrecommendation"): Xrm.OptionSetAttribute<ts_raterecommendations>;
    getAttribute(attributeName: "ts_rategeneralcompliancehistory"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_rateinspectorrecommendation"): Xrm.OptionSetAttribute<ts_raterecommendations>;
    getAttribute(attributeName: "ts_rateintentionality"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ratemanager"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "ts_ratemanageralternativerecommendation"): Xrm.OptionSetAttribute<ts_raterecommendations>;
    getAttribute(attributeName: "ts_ratemanagerdecision"): Xrm.OptionSetAttribute<ts_ratemanagerdecision>;
    getAttribute(attributeName: "ts_ratemanagerenforcementjustification"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_ratemitigationofnoncompliantbehaviors"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ratepreventingrecurrence"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_rateresponsibility"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ratespecificcompliancehistory"): Xrm.OptionSetAttribute<ts_ratespecificcompliancehistory>;
    getAttribute(attributeName: "ts_ratespecificenforcementhistory"): Xrm.OptionSetAttribute<ts_ratespecificenforcementhistory>;
    getAttribute(attributeName: "ts_sensitivitylevel"): Xrm.OptionSetAttribute<ts_sensitivitylevel>;
    getAttribute(attributeName: "ts_workorder"): Xrm.Attribute<any>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "Actions"): Xrm.SubGridControl<"ts_actionfinding">;
    getControl(controlName: "Causes"): Xrm.SubGridControl<"ts_causefinding">;
    getControl(controlName: "Subgrid_1"): Xrm.SubGridControl<"ts_file">;
    getControl(controlName: "WebResource_FindingProvisionText"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_NCATFactorGuide"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_RATEFactorGuide_AcceptanceOfResponsibility"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_RATEFactorGuide_ActualPotentialHarmVulnerability"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_RATEFactorGuide_Cooperation"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_RATEFactorGuide_EconomicBenefit"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_RATEFactorGuide_GeneralNonComplianceHistory"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_RATEFactorGuide_Intentionality"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_RATEFactorGuide_MitigationOfHarm"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_RATEFactorGuide_PreventionOfRecurrence"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_RATEFactorGuide_SpecificNonComplianceHistory"): Xrm.WebResourceControl;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<ovs_finding_statuscode>;
    getControl(controlName: "header_ts_rateenforcementrecommendation"): Xrm.OptionSetControl<ts_raterecommendations>;
    getControl(controlName: "ovs_caseid"): Xrm.LookupControl<"incident">;
    getControl(controlName: "ovs_finding"): Xrm.StringControl;
    getControl(controlName: "ovs_findingcomments"): Xrm.StringControl;
    getControl(controlName: "ovs_findingprovisionreference"): Xrm.StringControl;
    getControl(controlName: "relatedfinding_grid"): Xrm.SubGridControl<"ovs_finding">;
    getControl(controlName: "ts_acceptncatrecommendation"): Xrm.OptionSetControl<ts_yesno>;
    getControl(controlName: "ts_acceptraterecommendation"): Xrm.OptionSetControl<ts_yesno>;
    getControl(controlName: "ts_accountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "ts_accountid1"): Xrm.LookupControl<"account">;
    getControl(controlName: "ts_contact"): Xrm.LookupControl<"contact">;
    getControl(controlName: "ts_finalenforcementaction"): Xrm.OptionSetControl<ts_finalenforcementaction>;
    getControl(controlName: "ts_findingprovisiontexten"): Xrm.StringControl;
    getControl(controlName: "ts_findingprovisiontextfr"): Xrm.StringControl;
    getControl(controlName: "ts_findingtype"): Xrm.OptionSetControl<ts_findingtype>;
    getControl(controlName: "ts_functionallocation"): Xrm.LookupControl<"msdyn_functionallocation">;
    getControl(controlName: "ts_issueaddressedonsite"): Xrm.OptionSetControl<ts_yesno>;
    getControl(controlName: "ts_ncatactualorpotentialharm"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncatapprovingteam"): Xrm.LookupControl<"team">;
    getControl(controlName: "ts_ncatcompliancehistory"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncatcooperationwithinspectionorinvestigat"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncatdetailstosupport"): Xrm.StringControl;
    getControl(controlName: "ts_ncatdetectionofnoncompliances"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncateconomicbenefit"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncatenforcementjustification"): Xrm.StringControl;
    getControl(controlName: "ts_ncatenforcementrecommendation"): Xrm.OptionSetControl<ts_ncatrecommendations>;
    getControl(controlName: "ts_ncatfactorguide"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ts_ncatinspectorrecommendation"): Xrm.OptionSetControl<ts_ncatrecommendations>;
    getControl(controlName: "ts_ncatintentionality"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncatmanager"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "ts_ncatmanageralternativerecommendation"): Xrm.OptionSetControl<ts_ncatrecommendations>;
    getControl(controlName: "ts_ncatmanagerdecision"): Xrm.OptionSetControl<ts_ncatmanagerdecision>;
    getControl(controlName: "ts_ncatmanagerenforcementjustification"): Xrm.StringControl;
    getControl(controlName: "ts_ncatmitigationofnoncompliantbehaviors"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_noncompliancetimeframe"): Xrm.OptionSetControl<ts_noncompliancetimeframe>;
    getControl(controlName: "ts_notetostakeholder"): Xrm.StringControl;
    getControl(controlName: "ts_operationid"): Xrm.LookupControl<"ovs_operation">;
    getControl(controlName: "ts_ovs_operationtype"): Xrm.LookupControl<"ovs_operationtype">;
    getControl(controlName: "ts_provisioncategory"): Xrm.LookupControl<"ts_provisioncategory">;
    getControl(controlName: "ts_qm_rclegislation"): Xrm.LookupControl<"qm_rclegislation">;
    getControl(controlName: "ts_rateactualorpotentialharm"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_rateapprovingteam"): Xrm.LookupControl<"team">;
    getControl(controlName: "ts_ratecooperationwithinspectionorinvestigat"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_rateeconomicbenefit"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_rateenforcementjustification"): Xrm.StringControl;
    getControl(controlName: "ts_rateenforcementrecommendation"): Xrm.OptionSetControl<ts_raterecommendations>;
    getControl(controlName: "ts_rategeneralcompliancehistory"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_rateinspectorrecommendation"): Xrm.OptionSetControl<ts_raterecommendations>;
    getControl(controlName: "ts_rateintentionality"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ratemanager"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "ts_ratemanageralternativerecommendation"): Xrm.OptionSetControl<ts_raterecommendations>;
    getControl(controlName: "ts_ratemanagerdecision"): Xrm.OptionSetControl<ts_ratemanagerdecision>;
    getControl(controlName: "ts_ratemanagerenforcementjustification"): Xrm.StringControl;
    getControl(controlName: "ts_ratemitigationofnoncompliantbehaviors"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ratepreventingrecurrence"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_rateresponsibility"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ratespecificcompliancehistory"): Xrm.OptionSetControl<ts_ratespecificcompliancehistory>;
    getControl(controlName: "ts_ratespecificenforcementhistory"): Xrm.OptionSetControl<ts_ratespecificenforcementhistory>;
    getControl(controlName: "ts_sensitivitylevel"): Xrm.OptionSetControl<ts_sensitivitylevel>;
    getControl(controlName: string): undefined;
  }
}
