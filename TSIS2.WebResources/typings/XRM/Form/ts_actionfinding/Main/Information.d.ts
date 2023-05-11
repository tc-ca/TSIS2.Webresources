declare namespace Form.ts_actionfinding.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ts_action"): Xrm.LookupAttribute<"ts_action">;
      get(name: "ts_name"): Xrm.Attribute<string>;
      get(name: "ts_ovs_finding"): Xrm.LookupAttribute<"ovs_finding">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "ts_action"): Xrm.LookupControl<"ts_action">;
      get(name: "ts_name"): Xrm.StringControl;
      get(name: "ts_ovs_finding"): Xrm.LookupControl<"ovs_finding">;
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
    getAttribute(attributeName: "ts_action"): Xrm.LookupAttribute<"ts_action">;
    getAttribute(attributeName: "ts_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ts_ovs_finding"): Xrm.LookupAttribute<"ovs_finding">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "ts_action"): Xrm.LookupControl<"ts_action">;
    getControl(controlName: "ts_name"): Xrm.StringControl;
    getControl(controlName: "ts_ovs_finding"): Xrm.LookupControl<"ovs_finding">;
    getControl(controlName: string): undefined;
  }
}
