declare namespace Form.ovs_finding.Main {
  namespace Information {
    namespace Tabs {
      interface summary extends Xrm.SectionCollectionBase {
        get(name: "NCAT_proposed_section"): Xrm.PageSection;
        get(name: "RATE_proposed_section"): Xrm.PageSection;
        get(name: "summary_section_4"): Xrm.PageSection;
        get(name: "summary_section_5"): Xrm.PageSection;
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
      get(name: "ts_acceptncatrecommendation"): Xrm.OptionSetAttribute<ts_yesno>;
      get(name: "ts_acceptraterecommendation"): Xrm.OptionSetAttribute<ts_yesno>;
      get(name: "ts_accountid"): Xrm.LookupAttribute<"account">;
      get(name: "ts_findingprovisiontexten"): Xrm.Attribute<string>;
      get(name: "ts_findingprovisiontextfr"): Xrm.Attribute<string>;
      get(name: "ts_findingtype"): Xrm.OptionSetAttribute<ts_findingtype>;
      get(name: "ts_justificationof"): Xrm.Attribute<string>;
      get(name: "ts_ncatactualorpotentialharm"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncatcompliancehistory"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncatcooperationwithinspectionorinvestigat"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncatdetectionofnoncompliances"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncateconomicbenefit"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncatenforcementjustification"): Xrm.Attribute<string>;
      get(name: "ts_ncatenforcementrecommendation"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
      get(name: "ts_ncatfinalenforcementaction"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
      get(name: "ts_ncatinspectorrecommendation"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
      get(name: "ts_ncatintentionality"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ncatmitigationofnoncompliantbehaviors"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_proposealternatencatenforcementaction"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ts_provisioncategory"): Xrm.LookupAttribute<"ts_provisioncategory">;
      get(name: "ts_rateactualorpotentialharm"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ratecompliancehistory"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ratecooperationwithinspectionorinvestigat"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ratedetectionofnoncompliances"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_rateeconomicbenefit"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_rateenforcementrecommendation"): Xrm.OptionSetAttribute<ts_raterecommendations>;
      get(name: "ts_ratefinalenforcementaction"): Xrm.OptionSetAttribute<ts_raterecommendations>;
      get(name: "ts_rateintentionality"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_ratemitigationofnoncompliantbehaviors"): Xrm.LookupAttribute<"ts_assessmentrating">;
      get(name: "ts_workorder"): Xrm.Attribute<any>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Subgrid_1"): Xrm.SubGridControl<"ts_file">;
      get(name: "WebResource_FindingProvisionText"): Xrm.WebResourceControl;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "ovs_caseid"): Xrm.LookupControl<"incident">;
      get(name: "ovs_finding"): Xrm.StringControl;
      get(name: "ovs_findingcomments"): Xrm.StringControl;
      get(name: "ovs_findingprovisionreference"): Xrm.StringControl;
      get(name: "ts_acceptncatrecommendation"): Xrm.OptionSetControl<ts_yesno>;
      get(name: "ts_acceptraterecommendation"): Xrm.OptionSetControl<ts_yesno>;
      get(name: "ts_accountid"): Xrm.LookupControl<"account">;
      get(name: "ts_findingprovisiontexten"): Xrm.StringControl;
      get(name: "ts_findingprovisiontextfr"): Xrm.StringControl;
      get(name: "ts_findingtype"): Xrm.OptionSetControl<ts_findingtype>;
      get(name: "ts_justificationof"): Xrm.StringControl;
      get(name: "ts_ncatactualorpotentialharm"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncatcompliancehistory"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncatcooperationwithinspectionorinvestigat"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncatdetectionofnoncompliances"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncateconomicbenefit"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncatenforcementjustification"): Xrm.StringControl;
      get(name: "ts_ncatenforcementrecommendation"): Xrm.OptionSetControl<ts_ncatrecommendations>;
      get(name: "ts_ncatfinalenforcementaction"): Xrm.OptionSetControl<ts_ncatrecommendations>;
      get(name: "ts_ncatinspectorrecommendation"): Xrm.OptionSetControl<ts_ncatrecommendations>;
      get(name: "ts_ncatintentionality"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ncatmitigationofnoncompliantbehaviors"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_proposealternatencatenforcementaction"): Xrm.OptionSetControl<boolean>;
      get(name: "ts_provisioncategory"): Xrm.LookupControl<"ts_provisioncategory">;
      get(name: "ts_rateactualorpotentialharm"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ratecompliancehistory"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ratecooperationwithinspectionorinvestigat"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ratedetectionofnoncompliances"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_rateeconomicbenefit"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_rateenforcementrecommendation"): Xrm.OptionSetControl<ts_raterecommendations>;
      get(name: "ts_ratefinalenforcementaction"): Xrm.OptionSetControl<ts_raterecommendations>;
      get(name: "ts_rateintentionality"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: "ts_ratemitigationofnoncompliantbehaviors"): Xrm.LookupControl<"ts_assessmentrating">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "summary"): Xrm.PageTab<Tabs.summary>;
      get(name: "tab_Files"): Xrm.PageTab<Tabs.tab_Files>;
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
    getAttribute(attributeName: "ts_acceptncatrecommendation"): Xrm.OptionSetAttribute<ts_yesno>;
    getAttribute(attributeName: "ts_acceptraterecommendation"): Xrm.OptionSetAttribute<ts_yesno>;
    getAttribute(attributeName: "ts_accountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "ts_findingprovisiontexten"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_findingprovisiontextfr"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_findingtype"): Xrm.OptionSetAttribute<ts_findingtype>;
    getAttribute(attributeName: "ts_justificationof"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_ncatactualorpotentialharm"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncatcompliancehistory"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncatcooperationwithinspectionorinvestigat"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncatdetectionofnoncompliances"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncateconomicbenefit"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncatenforcementjustification"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_ncatenforcementrecommendation"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
    getAttribute(attributeName: "ts_ncatfinalenforcementaction"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
    getAttribute(attributeName: "ts_ncatinspectorrecommendation"): Xrm.OptionSetAttribute<ts_ncatrecommendations>;
    getAttribute(attributeName: "ts_ncatintentionality"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ncatmitigationofnoncompliantbehaviors"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_proposealternatencatenforcementaction"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ts_provisioncategory"): Xrm.LookupAttribute<"ts_provisioncategory">;
    getAttribute(attributeName: "ts_rateactualorpotentialharm"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ratecompliancehistory"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ratecooperationwithinspectionorinvestigat"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ratedetectionofnoncompliances"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_rateeconomicbenefit"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_rateenforcementrecommendation"): Xrm.OptionSetAttribute<ts_raterecommendations>;
    getAttribute(attributeName: "ts_ratefinalenforcementaction"): Xrm.OptionSetAttribute<ts_raterecommendations>;
    getAttribute(attributeName: "ts_rateintentionality"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_ratemitigationofnoncompliantbehaviors"): Xrm.LookupAttribute<"ts_assessmentrating">;
    getAttribute(attributeName: "ts_workorder"): Xrm.Attribute<any>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "Subgrid_1"): Xrm.SubGridControl<"ts_file">;
    getControl(controlName: "WebResource_FindingProvisionText"): Xrm.WebResourceControl;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "ovs_caseid"): Xrm.LookupControl<"incident">;
    getControl(controlName: "ovs_finding"): Xrm.StringControl;
    getControl(controlName: "ovs_findingcomments"): Xrm.StringControl;
    getControl(controlName: "ovs_findingprovisionreference"): Xrm.StringControl;
    getControl(controlName: "ts_acceptncatrecommendation"): Xrm.OptionSetControl<ts_yesno>;
    getControl(controlName: "ts_acceptraterecommendation"): Xrm.OptionSetControl<ts_yesno>;
    getControl(controlName: "ts_accountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "ts_findingprovisiontexten"): Xrm.StringControl;
    getControl(controlName: "ts_findingprovisiontextfr"): Xrm.StringControl;
    getControl(controlName: "ts_findingtype"): Xrm.OptionSetControl<ts_findingtype>;
    getControl(controlName: "ts_justificationof"): Xrm.StringControl;
    getControl(controlName: "ts_ncatactualorpotentialharm"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncatcompliancehistory"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncatcooperationwithinspectionorinvestigat"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncatdetectionofnoncompliances"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncateconomicbenefit"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncatenforcementjustification"): Xrm.StringControl;
    getControl(controlName: "ts_ncatenforcementrecommendation"): Xrm.OptionSetControl<ts_ncatrecommendations>;
    getControl(controlName: "ts_ncatfinalenforcementaction"): Xrm.OptionSetControl<ts_ncatrecommendations>;
    getControl(controlName: "ts_ncatinspectorrecommendation"): Xrm.OptionSetControl<ts_ncatrecommendations>;
    getControl(controlName: "ts_ncatintentionality"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ncatmitigationofnoncompliantbehaviors"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_proposealternatencatenforcementaction"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "ts_provisioncategory"): Xrm.LookupControl<"ts_provisioncategory">;
    getControl(controlName: "ts_rateactualorpotentialharm"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ratecompliancehistory"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ratecooperationwithinspectionorinvestigat"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ratedetectionofnoncompliances"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_rateeconomicbenefit"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_rateenforcementrecommendation"): Xrm.OptionSetControl<ts_raterecommendations>;
    getControl(controlName: "ts_ratefinalenforcementaction"): Xrm.OptionSetControl<ts_raterecommendations>;
    getControl(controlName: "ts_rateintentionality"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: "ts_ratemitigationofnoncompliantbehaviors"): Xrm.LookupControl<"ts_assessmentrating">;
    getControl(controlName: string): undefined;
  }
}
