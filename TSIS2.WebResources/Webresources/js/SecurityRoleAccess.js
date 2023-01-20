﻿
async function buildRoleAccessTables(formContext, wrCtrl) {

    const contentWindow = await wrCtrl.getContentWindow().then(function (win) { return win });
    const securityRoles = JSON.parse(formContext.getAttribute("ts_securityroles").getValue().replace(/(\r\n|\n|\r)/gm, ""));
    const powerAppsEntities = JSON.parse(formContext.getAttribute("ts_tables").getValue().replace(/(\r\n|\n|\r)/gm, ""));

    const roleAccessTablesDiv = contentWindow.document.getElementById("roleAccessTables");

    for (let powerAppsEntity of powerAppsEntities) {
        const sercurityRoleAccessTable = document.createElement("table");
        roleAccessTablesDiv.appendChild(sercurityRoleAccessTable);

        const sercurityRoleAccessTableHeader = sercurityRoleAccessTable.createTHead();
        const sercurityRoleAccessTableHeaderTitleRow = sercurityRoleAccessTableHeader.insertRow();
        const sercurityRoleAccessTableHeaderTitleHeader = document.createElement("th");
        sercurityRoleAccessTableHeaderTitleHeader.colSpan = 9
        sercurityRoleAccessTableHeaderTitleHeader.innerHTML = powerAppsEntity.plainTextName;
        sercurityRoleAccessTableHeaderTitleRow.appendChild(sercurityRoleAccessTableHeaderTitleHeader)

        const sercurityRoleAccessTableHeaderRow = sercurityRoleAccessTableHeader.insertRow();
        const sercurityRoleAccessTableRoleNameHeader = document.createElement("th");
        const sercurityRoleAccessTableCreateHeader = document.createElement("th");
        const sercurityRoleAccessTableReadHeader = document.createElement("th");
        const sercurityRoleAccessTableWriteHeader = document.createElement("th");
        const sercurityRoleAccessTableDeleteHeader = document.createElement("th");
        const sercurityRoleAccessTableAppendHeader = document.createElement("th");
        const sercurityRoleAccessTableAppendToHeader = document.createElement("th");
        const sercurityRoleAccessTableAssignHeader = document.createElement("th");
        const sercurityRoleAccessTableShareHeader = document.createElement("th");

        sercurityRoleAccessTableRoleNameHeader.innerHTML = "Security Role";
        sercurityRoleAccessTableCreateHeader.innerHTML = "Create";
        sercurityRoleAccessTableReadHeader.innerHTML = "Read";
        sercurityRoleAccessTableWriteHeader.innerHTML = "Write";
        sercurityRoleAccessTableDeleteHeader.innerHTML = "Delete";
        sercurityRoleAccessTableAppendHeader.innerHTML = "Append";
        sercurityRoleAccessTableAppendToHeader.innerHTML = "Append To";
        sercurityRoleAccessTableAssignHeader.innerHTML = "Assign";
        sercurityRoleAccessTableShareHeader.innerHTML = "Share";

        sercurityRoleAccessTableHeaderRow.appendChild(sercurityRoleAccessTableRoleNameHeader);
        sercurityRoleAccessTableHeaderRow.appendChild(sercurityRoleAccessTableCreateHeader);
        sercurityRoleAccessTableHeaderRow.appendChild(sercurityRoleAccessTableReadHeader);
        sercurityRoleAccessTableHeaderRow.appendChild(sercurityRoleAccessTableWriteHeader);
        sercurityRoleAccessTableHeaderRow.appendChild(sercurityRoleAccessTableDeleteHeader);
        sercurityRoleAccessTableHeaderRow.appendChild(sercurityRoleAccessTableAppendHeader);
        sercurityRoleAccessTableHeaderRow.appendChild(sercurityRoleAccessTableAppendToHeader);
        sercurityRoleAccessTableHeaderRow.appendChild(sercurityRoleAccessTableAssignHeader);
        sercurityRoleAccessTableHeaderRow.appendChild(sercurityRoleAccessTableShareHeader);

        for (let securityRole of securityRoles) {
            let fetchXml = [
                "<fetch>",
                "  <entity name='roleprivileges'>",
                "    <attribute name='privilegedepthmask'/>",
                "    <filter>",
                "      <condition attribute='roleid' operator='eq' value='" + securityRole.id + "'/>",
                "    </filter>",
                "    <link-entity name='privilege' from='privilegeid' to='privilegeid' alias='priv'>",
                "      <attribute name='name'/>",
                "      <filter>",
                "        <condition attribute='name' operator='ends-with' value='" + powerAppsEntity.logicalname + "'/>",
                "      </filter>",
                "    </link-entity>",
                "  </entity>",
                "</fetch>"
            ].join("");
            fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
            const workOrderPrivileges = await parent.Xrm.WebApi.retrieveMultipleRecords("roleprivileges", fetchXml).then(function (result) { return result.entities });

            const workOrderPrivilegesData = {
                Create: "",
                Read: "",
                Write: "",
                Delete: "",
                Append: "",
                AppendTo: "",
                Assign: "",
                Share: "",
            }
            for (let privilege of workOrderPrivileges) {
                switch (privilege["priv.name"].toLowerCase()) {
                    case "prvcreate" + powerAppsEntity.logicalname:
                        workOrderPrivilegesData.Create = convertPrivilegeDepthCodeToText(privilege.privilegedepthmask);
                        break;
                    case "prvread" + powerAppsEntity.logicalname:
                        workOrderPrivilegesData.Read = convertPrivilegeDepthCodeToText(privilege.privilegedepthmask);
                        break;
                    case "prvwrite" + powerAppsEntity.logicalname:
                        workOrderPrivilegesData.Write = convertPrivilegeDepthCodeToText(privilege.privilegedepthmask);
                        break;
                    case "prvdelete" + powerAppsEntity.logicalname:
                        workOrderPrivilegesData.Delete = convertPrivilegeDepthCodeToText(privilege.privilegedepthmask);
                        break;
                    case "prvappend" + powerAppsEntity.logicalname:
                        workOrderPrivilegesData.Append = convertPrivilegeDepthCodeToText(privilege.privilegedepthmask);
                        break;
                    case "prvappendTo" + powerAppsEntity.logicalname:
                        workOrderPrivilegesData.AppendTo = convertPrivilegeDepthCodeToText(privilege.privilegedepthmask);
                        break;
                    case "prvassign" + powerAppsEntity.logicalname:
                        workOrderPrivilegesData.Assign = convertPrivilegeDepthCodeToText(privilege.privilegedepthmask);
                        break;
                    case "prvshare" + powerAppsEntity.logicalname:
                        workOrderPrivilegesData.Share = convertPrivilegeDepthCodeToText(privilege.privilegedepthmask);
                        break;

                }
            }

            const sercurityRoleAccessTableDataBody = sercurityRoleAccessTable.createTBody();
            const sercurityRoleAccessTableDataRow = sercurityRoleAccessTableDataBody.insertRow();
            const sercurityRoleAccessTableRoleNameData = sercurityRoleAccessTableDataRow.insertCell();
            const sercurityRoleAccessTableCreateData = sercurityRoleAccessTableDataRow.insertCell();
            const sercurityRoleAccessTableReadData = sercurityRoleAccessTableDataRow.insertCell();
            const sercurityRoleAccessTableWriteData = sercurityRoleAccessTableDataRow.insertCell();
            const sercurityRoleAccessTableDeleteData = sercurityRoleAccessTableDataRow.insertCell();
            const sercurityRoleAccessTableAppendData = sercurityRoleAccessTableDataRow.insertCell();
            const sercurityRoleAccessTableAppendToData = sercurityRoleAccessTableDataRow.insertCell();
            const sercurityRoleAccessTableAssignData = sercurityRoleAccessTableDataRow.insertCell();
            const sercurityRoleAccessTableShareData = sercurityRoleAccessTableDataRow.insertCell();

            sercurityRoleAccessTableRoleNameData.innerHTML = securityRole.name;
            sercurityRoleAccessTableRoleNameData.style.textAlign = "left";
            sercurityRoleAccessTableCreateData.innerHTML = workOrderPrivilegesData.Create;
            sercurityRoleAccessTableReadData.innerHTML = workOrderPrivilegesData.Read;
            sercurityRoleAccessTableWriteData.innerHTML = workOrderPrivilegesData.Write;
            sercurityRoleAccessTableDeleteData.innerHTML = workOrderPrivilegesData.Delete;
            sercurityRoleAccessTableAppendData.innerHTML = workOrderPrivilegesData.Append;
            sercurityRoleAccessTableAppendToData.innerHTML = workOrderPrivilegesData.AppendTo;
            sercurityRoleAccessTableAssignData.innerHTML = workOrderPrivilegesData.Assign;
            sercurityRoleAccessTableShareData.innerHTML = workOrderPrivilegesData.Share;
        }
    }
}

function onLoad(eContext) {
    const formContext = eContext.getFormContext();
    const wrCtrl = formContext.getControl('WebResource_SecurityRoleAccess');
    buildRoleAccessTables(formContext, wrCtrl);
}

function convertPrivilegeDepthCodeToText(depth) {

    switch (depth) {
        case 8:
            return "Org";
        case 4:
            return "PC";
        case 2:
            return "BU";
        case 1:
            return "User";
        default:
            return "Error";
    }
}