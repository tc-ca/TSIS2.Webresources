function readOnlyOnClosed(eContext, keepLockedList, keepUnlockedList) {
  var formContext = eContext.getFormContext();
  let isClosed = recordIsClosed(eContext);
  toggleDisabledAllControls(eContext, isClosed, keepLockedList, keepUnlockedList);
  RefreshGridRibbon(formContext, 'workorderservicetasksgrid2');
  RefreshGridRibbon(formContext, 'workorderservicetasksgrid');
}

function recordIsClosed(eContext) {
  var formContext = eContext.getFormContext();
  var recordStatus = formContext.getAttribute('msdyn_systemstatus').getValue();
  return (recordStatus == 690970004 || recordStatus == 690970005);
}

//Sets every control in the form to disable's value (true or false), keeping specified controls locked and unlocked.
function toggleDisabledAllControls(eContext, disable, keepLockedList, keepUnlockedList) {
  var formContext = eContext.getFormContext();

  //Toggle everything to match disable status
  formContext.ui.controls.forEach(function (attribute) {
    var control = formContext.getControl(attribute.getName());
    if (control) {
      control.setDisabled(disable);
    }
  });
  //Lock everything in KeepLockedList
  if (keepLockedList) {
    keepLockedList.forEach(function (attributeName) {
      var control = formContext.getControl(attributeName);
      if (control) {
        control.setDisabled(true);
      }
    });
  }

  //Unlock everything in KeepUnlockedList
  if (keepUnlockedList) {
    keepUnlockedList.forEach(function (attributeName) {
      var control = formContext.getControl(attributeName);
      if (control) {
        control.setDisabled(false);
      }
    });
  }
}

function RefreshGridRibbon(formContext, gridName) {
  var gridContext = formContext.getControl(gridName);
  if (gridContext == null || gridContext == 'undefined') return;
  gridContext.refreshRibbon();
}