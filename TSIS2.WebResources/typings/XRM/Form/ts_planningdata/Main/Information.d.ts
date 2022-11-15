declare namespace Form.ts_planningdata.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ts_activitytype"): Xrm.LookupAttribute<"msdyn_incidenttype">;
      get(name: "ts_completedq1"): Xrm.NumberAttribute;
      get(name: "ts_completedq2"): Xrm.NumberAttribute;
      get(name: "ts_completedq3"): Xrm.NumberAttribute;
      get(name: "ts_completedq4"): Xrm.NumberAttribute;
      get(name: "ts_details"): Xrm.Attribute<string>;
      get(name: "ts_dueq1"): Xrm.NumberAttribute;
      get(name: "ts_dueq2"): Xrm.NumberAttribute;
      get(name: "ts_dueq3"): Xrm.NumberAttribute;
      get(name: "ts_dueq4"): Xrm.NumberAttribute;
      get(name: "ts_fiscalyear"): Xrm.LookupAttribute<"tc_tcfiscalyear">;
      get(name: "ts_generationlog"): Xrm.Attribute<string>;
      get(name: "ts_name"): Xrm.Attribute<string>;
      get(name: "ts_operationactivity"): Xrm.LookupAttribute<"ts_operationactivity">;
      get(name: "ts_operationtype"): Xrm.LookupAttribute<"ovs_operationtype">;
      get(name: "ts_originalteamestimatedduration"): Xrm.NumberAttribute;
      get(name: "ts_plannedq1"): Xrm.NumberAttribute;
      get(name: "ts_plannedq2"): Xrm.NumberAttribute;
      get(name: "ts_plannedq3"): Xrm.NumberAttribute;
      get(name: "ts_plannedq4"): Xrm.NumberAttribute;
      get(name: "ts_plannedwouncalculated"): Xrm.NumberAttribute;
      get(name: "ts_site"): Xrm.LookupAttribute<"msdyn_functionallocation">;
      get(name: "ts_stakeholder"): Xrm.LookupAttribute<"account">;
      get(name: "ts_target"): Xrm.NumberAttribute;
      get(name: "ts_teamestimatedduration"): Xrm.NumberAttribute;
      get(name: "ts_teamplanningdata"): Xrm.LookupAttribute<"ts_teamplanningdata">;
      get(name: "ts_variance"): Xrm.NumberAttribute;
      get(name: "ts_varianceuncalculated"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "ts_activitytype"): Xrm.LookupControl<"msdyn_incidenttype">;
      get(name: "ts_completedq1"): Xrm.NumberControl;
      get(name: "ts_completedq2"): Xrm.NumberControl;
      get(name: "ts_completedq3"): Xrm.NumberControl;
      get(name: "ts_completedq4"): Xrm.NumberControl;
      get(name: "ts_details"): Xrm.StringControl;
      get(name: "ts_dueq1"): Xrm.NumberControl;
      get(name: "ts_dueq2"): Xrm.NumberControl;
      get(name: "ts_dueq3"): Xrm.NumberControl;
      get(name: "ts_dueq4"): Xrm.NumberControl;
      get(name: "ts_fiscalyear"): Xrm.LookupControl<"tc_tcfiscalyear">;
      get(name: "ts_generationlog"): Xrm.StringControl;
      get(name: "ts_name"): Xrm.StringControl;
      get(name: "ts_operationactivity"): Xrm.LookupControl<"ts_operationactivity">;
      get(name: "ts_operationtype"): Xrm.LookupControl<"ovs_operationtype">;
      get(name: "ts_originalteamestimatedduration"): Xrm.NumberControl;
      get(name: "ts_plannedq1"): Xrm.NumberControl;
      get(name: "ts_plannedq2"): Xrm.NumberControl;
      get(name: "ts_plannedq3"): Xrm.NumberControl;
      get(name: "ts_plannedq4"): Xrm.NumberControl;
      get(name: "ts_plannedwouncalculated"): Xrm.NumberControl;
      get(name: "ts_plannedwouncalculated1"): Xrm.NumberControl;
      get(name: "ts_site"): Xrm.LookupControl<"msdyn_functionallocation">;
      get(name: "ts_stakeholder"): Xrm.LookupControl<"account">;
      get(name: "ts_target"): Xrm.NumberControl;
      get(name: "ts_teamestimatedduration"): Xrm.NumberControl;
      get(name: "ts_teamplanningdata"): Xrm.LookupControl<"ts_teamplanningdata">;
      get(name: "ts_variance"): Xrm.NumberControl;
      get(name: "ts_varianceuncalculated"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ts_activitytype"): Xrm.LookupAttribute<"msdyn_incidenttype">;
    getAttribute(attributeName: "ts_completedq1"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_completedq2"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_completedq3"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_completedq4"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_details"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_dueq1"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_dueq2"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_dueq3"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_dueq4"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_fiscalyear"): Xrm.LookupAttribute<"tc_tcfiscalyear">;
    getAttribute(attributeName: "ts_generationlog"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_operationactivity"): Xrm.LookupAttribute<"ts_operationactivity">;
    getAttribute(attributeName: "ts_operationtype"): Xrm.LookupAttribute<"ovs_operationtype">;
    getAttribute(attributeName: "ts_originalteamestimatedduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_plannedq1"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_plannedq2"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_plannedq3"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_plannedq4"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_plannedwouncalculated"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_site"): Xrm.LookupAttribute<"msdyn_functionallocation">;
    getAttribute(attributeName: "ts_stakeholder"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "ts_target"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_teamestimatedduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_teamplanningdata"): Xrm.LookupAttribute<"ts_teamplanningdata">;
    getAttribute(attributeName: "ts_variance"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ts_varianceuncalculated"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "ts_activitytype"): Xrm.LookupControl<"msdyn_incidenttype">;
    getControl(controlName: "ts_completedq1"): Xrm.NumberControl;
    getControl(controlName: "ts_completedq2"): Xrm.NumberControl;
    getControl(controlName: "ts_completedq3"): Xrm.NumberControl;
    getControl(controlName: "ts_completedq4"): Xrm.NumberControl;
    getControl(controlName: "ts_details"): Xrm.StringControl;
    getControl(controlName: "ts_dueq1"): Xrm.NumberControl;
    getControl(controlName: "ts_dueq2"): Xrm.NumberControl;
    getControl(controlName: "ts_dueq3"): Xrm.NumberControl;
    getControl(controlName: "ts_dueq4"): Xrm.NumberControl;
    getControl(controlName: "ts_fiscalyear"): Xrm.LookupControl<"tc_tcfiscalyear">;
    getControl(controlName: "ts_generationlog"): Xrm.StringControl;
    getControl(controlName: "ts_name"): Xrm.StringControl;
    getControl(controlName: "ts_operationactivity"): Xrm.LookupControl<"ts_operationactivity">;
    getControl(controlName: "ts_operationtype"): Xrm.LookupControl<"ovs_operationtype">;
    getControl(controlName: "ts_originalteamestimatedduration"): Xrm.NumberControl;
    getControl(controlName: "ts_plannedq1"): Xrm.NumberControl;
    getControl(controlName: "ts_plannedq2"): Xrm.NumberControl;
    getControl(controlName: "ts_plannedq3"): Xrm.NumberControl;
    getControl(controlName: "ts_plannedq4"): Xrm.NumberControl;
    getControl(controlName: "ts_plannedwouncalculated"): Xrm.NumberControl;
    getControl(controlName: "ts_plannedwouncalculated1"): Xrm.NumberControl;
    getControl(controlName: "ts_site"): Xrm.LookupControl<"msdyn_functionallocation">;
    getControl(controlName: "ts_stakeholder"): Xrm.LookupControl<"account">;
    getControl(controlName: "ts_target"): Xrm.NumberControl;
    getControl(controlName: "ts_teamestimatedduration"): Xrm.NumberControl;
    getControl(controlName: "ts_teamplanningdata"): Xrm.LookupControl<"ts_teamplanningdata">;
    getControl(controlName: "ts_variance"): Xrm.NumberControl;
    getControl(controlName: "ts_varianceuncalculated"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
  }
}
