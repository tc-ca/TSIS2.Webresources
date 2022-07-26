declare namespace Form.msdyn_workorder.Main {
  namespace Planning {
    namespace Tabs {
      interface b8e326ee5c214a18ba55e3b56966c249 extends Xrm.SectionCollectionBase {
        get(name: "f1tab_mainsettings_section_5"): Xrm.PageSection;
        get(name: "general_section"): Xrm.PageSection;
        get(name: "{b8e326ee-5c21-4a18-ba55-e3b56966c249}_column_2_section_1"): Xrm.PageSection;
        get(name: "{b8e326ee-5c21-4a18-ba55-e3b56966c249}_section_9"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface f1tab_mainsettings extends Xrm.SectionCollectionBase {
        get(name: "WorkOrderAccessTeams"): Xrm.PageSection;
        get(name: "f1tab_mainsettings_section_2"): Xrm.PageSection;
        get(name: "f1tab_mainsettings_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface f1tab_record_log extends Xrm.SectionCollectionBase {
        get(name: "tab_6_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface operations_tab extends Xrm.SectionCollectionBase {
        get(name: "tab_12_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_14 extends Xrm.SectionCollectionBase {
        get(name: "tab_14_section_3"): Xrm.PageSection;
        get(name: "tab_14_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_8 extends Xrm.SectionCollectionBase {
        get(name: "tab_8_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "msdyn_billingaccount"): Xrm.LookupAttribute<"account"> | null;
      get(name: "msdyn_closedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_functionallocation"): Xrm.LookupAttribute<"msdyn_functionallocation">;
      get(name: "msdyn_latitude"): Xrm.NumberAttribute;
      get(name: "msdyn_longitude"): Xrm.NumberAttribute;
      get(name: "msdyn_mapcontrol"): Xrm.Attribute<any>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_primaryincidenttype"): Xrm.LookupAttribute<"msdyn_incidenttype"> | null;
      get(name: "msdyn_priority"): Xrm.LookupAttribute<"msdyn_priority"> | null;
      get(name: "msdyn_serviceaccount"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_serviceterritory"): Xrm.LookupAttribute<"territory">;
      get(name: "msdyn_substatus"): Xrm.LookupAttribute<"msdyn_workordersubstatus">;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_wosystemstatus>;
      get(name: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_taxcode"): Xrm.LookupAttribute<"msdyn_taxcode">;
      get(name: "msdyn_timeclosed"): Xrm.DateAttribute;
      get(name: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
      get(name: "msdyn_worklocation"): Xrm.OptionSetAttribute<msdyn_worklocation>;
      get(name: "msdyn_workordersummary"): Xrm.Attribute<string>;
      get(name: "msdyn_workordertype"): Xrm.LookupAttribute<"msdyn_workordertype">;
      get(name: "ovs_fiscalquarter"): Xrm.LookupAttribute<"tc_tcfiscalquarter">;
      get(name: "ovs_operationid"): Xrm.LookupAttribute<"ovs_operation">;
      get(name: "ovs_operationtypeid"): Xrm.LookupAttribute<"ovs_operationtype">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "qm_remote"): Xrm.Attribute<any>;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_workorder_statecode>;
      get(name: "ts_country"): Xrm.LookupAttribute<"tc_country">;
      get(name: "ts_region"): Xrm.LookupAttribute<"territory">;
      get(name: "ts_site"): Xrm.LookupAttribute<"msdyn_functionallocation">;
      get(name: "ts_tradenameid"): Xrm.LookupAttribute<"ts_tradename">;
      get(name: "ts_workorderenddate"): Xrm.DateAttribute;
      get(name: "ts_workorderstartdate"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Subgrid_2"): Xrm.SubGridControl<"ts_file">;
      get(name: "Subgrid_3"): Xrm.SubGridControl<"ts_file">;
      get(name: "createdby"): Xrm.LookupControl<"systemuser">;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "footer_msdyn_substatus"): Xrm.LookupControl<"msdyn_workordersubstatus">;
      get(name: "footer_msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_wosystemstatus>;
      get(name: "footer_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_msdyn_billingaccount"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_msdyn_billingaccount_1"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_msdyn_primaryincidenttype"): Xrm.LookupControl<"msdyn_incidenttype"> | null;
      get(name: "header_process_msdyn_primaryincidenttype_1"): Xrm.LookupControl<"msdyn_incidenttype"> | null;
      get(name: "header_process_msdyn_priority"): Xrm.LookupControl<"msdyn_priority"> | null;
      get(name: "header_process_msdyn_priority_1"): Xrm.LookupControl<"msdyn_priority"> | null;
      get(name: "header_process_msdyn_priority_2"): Xrm.LookupControl<"msdyn_priority"> | null;
      get(name: "header_process_msdyn_serviceaccount"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_msdyn_serviceaccount_1"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_msdyn_serviceaccount_2"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_msdyn_substatus"): Xrm.LookupControl<"msdyn_workordersubstatus"> | null;
      get(name: "header_process_msdyn_substatus_1"): Xrm.LookupControl<"msdyn_workordersubstatus"> | null;
      get(name: "header_process_msdyn_substatus_2"): Xrm.LookupControl<"msdyn_workordersubstatus"> | null;
      get(name: "header_process_msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
      get(name: "header_process_msdyn_systemstatus_1"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
      get(name: "header_process_msdyn_systemstatus_2"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
      get(name: "header_process_msdyn_systemstatus_3"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
      get(name: "header_process_msdyn_systemstatus_4"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
      get(name: "header_process_msdyn_systemstatus_5"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
      get(name: "header_process_msdyn_workordertype"): Xrm.LookupControl<"msdyn_workordertype"> | null;
      get(name: "header_process_msdyn_workordertype_1"): Xrm.LookupControl<"msdyn_workordertype"> | null;
      get(name: "header_process_msdyn_workordertype_2"): Xrm.LookupControl<"msdyn_workordertype"> | null;
      get(name: "modifiedby"): Xrm.LookupControl<"systemuser">;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "msdyn_closedby"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_functionallocation"): Xrm.LookupControl<"msdyn_functionallocation">;
      get(name: "msdyn_latitude"): Xrm.NumberControl;
      get(name: "msdyn_longitude"): Xrm.NumberControl;
      get(name: "msdyn_mapcontrol"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_serviceaccount"): Xrm.LookupControl<"account">;
      get(name: "msdyn_serviceterritory"): Xrm.LookupControl<"territory">;
      get(name: "msdyn_substatus"): Xrm.LookupControl<"msdyn_workordersubstatus">;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_wosystemstatus>;
      get(name: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_taxcode"): Xrm.LookupControl<"msdyn_taxcode">;
      get(name: "msdyn_timeclosed"): Xrm.DateControl;
      get(name: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
      get(name: "msdyn_worklocation"): Xrm.OptionSetControl<msdyn_worklocation>;
      get(name: "msdyn_workordersummary"): Xrm.StringControl;
      get(name: "msdyn_workordertype"): Xrm.LookupControl<"msdyn_workordertype">;
      get(name: "ovs_fiscalquarter"): Xrm.LookupControl<"tc_tcfiscalquarter">;
      get(name: "ovs_operationid"): Xrm.LookupControl<"ovs_operation">;
      get(name: "ovs_operationid1"): Xrm.LookupControl<"ovs_operation">;
      get(name: "ovs_operationtypeid"): Xrm.LookupControl<"ovs_operationtype">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "qm_remote"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "statecode"): Xrm.OptionSetControl<msdyn_workorder_statecode>;
      get(name: "ts_country"): Xrm.LookupControl<"tc_country">;
      get(name: "ts_region"): Xrm.LookupControl<"territory">;
      get(name: "ts_site"): Xrm.LookupControl<"msdyn_functionallocation">;
      get(name: "ts_tradenameid"): Xrm.LookupControl<"ts_tradename">;
      get(name: "ts_workorderenddate"): Xrm.DateControl;
      get(name: "ts_workorderstartdate"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{b8e326ee-5c21-4a18-ba55-e3b56966c249}"): Xrm.PageTab<Tabs.b8e326ee5c214a18ba55e3b56966c249>;
      get(name: "f1tab_mainsettings"): Xrm.PageTab<Tabs.f1tab_mainsettings>;
      get(name: "f1tab_record_log"): Xrm.PageTab<Tabs.f1tab_record_log>;
      get(name: "operations_tab"): Xrm.PageTab<Tabs.operations_tab>;
      get(name: "tab_14"): Xrm.PageTab<Tabs.tab_14>;
      get(name: "tab_8"): Xrm.PageTab<Tabs.tab_8>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Planning extends Xrm.PageBase<Planning.Attributes,Planning.Tabs,Planning.Controls> {
    getAttribute(attributeName: "createdby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_billingaccount"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "msdyn_closedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_functionallocation"): Xrm.LookupAttribute<"msdyn_functionallocation">;
    getAttribute(attributeName: "msdyn_latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_mapcontrol"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_primaryincidenttype"): Xrm.LookupAttribute<"msdyn_incidenttype"> | null;
    getAttribute(attributeName: "msdyn_priority"): Xrm.LookupAttribute<"msdyn_priority"> | null;
    getAttribute(attributeName: "msdyn_serviceaccount"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_serviceterritory"): Xrm.LookupAttribute<"territory">;
    getAttribute(attributeName: "msdyn_substatus"): Xrm.LookupAttribute<"msdyn_workordersubstatus">;
    getAttribute(attributeName: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_wosystemstatus>;
    getAttribute(attributeName: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_taxcode"): Xrm.LookupAttribute<"msdyn_taxcode">;
    getAttribute(attributeName: "msdyn_timeclosed"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
    getAttribute(attributeName: "msdyn_worklocation"): Xrm.OptionSetAttribute<msdyn_worklocation>;
    getAttribute(attributeName: "msdyn_workordersummary"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_workordertype"): Xrm.LookupAttribute<"msdyn_workordertype">;
    getAttribute(attributeName: "ovs_fiscalquarter"): Xrm.LookupAttribute<"tc_tcfiscalquarter">;
    getAttribute(attributeName: "ovs_operationid"): Xrm.LookupAttribute<"ovs_operation">;
    getAttribute(attributeName: "ovs_operationtypeid"): Xrm.LookupAttribute<"ovs_operationtype">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "qm_remote"): Xrm.Attribute<any>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_workorder_statecode>;
    getAttribute(attributeName: "ts_country"): Xrm.LookupAttribute<"tc_country">;
    getAttribute(attributeName: "ts_region"): Xrm.LookupAttribute<"territory">;
    getAttribute(attributeName: "ts_site"): Xrm.LookupAttribute<"msdyn_functionallocation">;
    getAttribute(attributeName: "ts_tradenameid"): Xrm.LookupAttribute<"ts_tradename">;
    getAttribute(attributeName: "ts_workorderenddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ts_workorderstartdate"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "Subgrid_2"): Xrm.SubGridControl<"ts_file">;
    getControl(controlName: "Subgrid_3"): Xrm.SubGridControl<"ts_file">;
    getControl(controlName: "createdby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "footer_msdyn_substatus"): Xrm.LookupControl<"msdyn_workordersubstatus">;
    getControl(controlName: "footer_msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_wosystemstatus>;
    getControl(controlName: "footer_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_msdyn_billingaccount"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_msdyn_billingaccount_1"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_msdyn_primaryincidenttype"): Xrm.LookupControl<"msdyn_incidenttype"> | null;
    getControl(controlName: "header_process_msdyn_primaryincidenttype_1"): Xrm.LookupControl<"msdyn_incidenttype"> | null;
    getControl(controlName: "header_process_msdyn_priority"): Xrm.LookupControl<"msdyn_priority"> | null;
    getControl(controlName: "header_process_msdyn_priority_1"): Xrm.LookupControl<"msdyn_priority"> | null;
    getControl(controlName: "header_process_msdyn_priority_2"): Xrm.LookupControl<"msdyn_priority"> | null;
    getControl(controlName: "header_process_msdyn_serviceaccount"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_msdyn_serviceaccount_1"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_msdyn_serviceaccount_2"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_msdyn_substatus"): Xrm.LookupControl<"msdyn_workordersubstatus"> | null;
    getControl(controlName: "header_process_msdyn_substatus_1"): Xrm.LookupControl<"msdyn_workordersubstatus"> | null;
    getControl(controlName: "header_process_msdyn_substatus_2"): Xrm.LookupControl<"msdyn_workordersubstatus"> | null;
    getControl(controlName: "header_process_msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
    getControl(controlName: "header_process_msdyn_systemstatus_1"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
    getControl(controlName: "header_process_msdyn_systemstatus_2"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
    getControl(controlName: "header_process_msdyn_systemstatus_3"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
    getControl(controlName: "header_process_msdyn_systemstatus_4"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
    getControl(controlName: "header_process_msdyn_systemstatus_5"): Xrm.OptionSetControl<msdyn_wosystemstatus> | null;
    getControl(controlName: "header_process_msdyn_workordertype"): Xrm.LookupControl<"msdyn_workordertype"> | null;
    getControl(controlName: "header_process_msdyn_workordertype_1"): Xrm.LookupControl<"msdyn_workordertype"> | null;
    getControl(controlName: "header_process_msdyn_workordertype_2"): Xrm.LookupControl<"msdyn_workordertype"> | null;
    getControl(controlName: "modifiedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "msdyn_closedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_functionallocation"): Xrm.LookupControl<"msdyn_functionallocation">;
    getControl(controlName: "msdyn_latitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_longitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_mapcontrol"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_serviceaccount"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_serviceterritory"): Xrm.LookupControl<"territory">;
    getControl(controlName: "msdyn_substatus"): Xrm.LookupControl<"msdyn_workordersubstatus">;
    getControl(controlName: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_wosystemstatus>;
    getControl(controlName: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_taxcode"): Xrm.LookupControl<"msdyn_taxcode">;
    getControl(controlName: "msdyn_timeclosed"): Xrm.DateControl;
    getControl(controlName: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
    getControl(controlName: "msdyn_worklocation"): Xrm.OptionSetControl<msdyn_worklocation>;
    getControl(controlName: "msdyn_workordersummary"): Xrm.StringControl;
    getControl(controlName: "msdyn_workordertype"): Xrm.LookupControl<"msdyn_workordertype">;
    getControl(controlName: "ovs_fiscalquarter"): Xrm.LookupControl<"tc_tcfiscalquarter">;
    getControl(controlName: "ovs_operationid"): Xrm.LookupControl<"ovs_operation">;
    getControl(controlName: "ovs_operationid1"): Xrm.LookupControl<"ovs_operation">;
    getControl(controlName: "ovs_operationtypeid"): Xrm.LookupControl<"ovs_operationtype">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "qm_remote"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<msdyn_workorder_statecode>;
    getControl(controlName: "ts_country"): Xrm.LookupControl<"tc_country">;
    getControl(controlName: "ts_region"): Xrm.LookupControl<"territory">;
    getControl(controlName: "ts_site"): Xrm.LookupControl<"msdyn_functionallocation">;
    getControl(controlName: "ts_tradenameid"): Xrm.LookupControl<"ts_tradename">;
    getControl(controlName: "ts_workorderenddate"): Xrm.DateControl;
    getControl(controlName: "ts_workorderstartdate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
  }
}
