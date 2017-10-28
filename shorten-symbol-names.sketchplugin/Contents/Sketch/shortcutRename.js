var ShortenSelectedNames = function(context) {

   var selection = context.selection;

   for (var i=0; i<selection.count(); i++) {
      var selectionName = selection[i].name();
      selectionName = selectionName.split("/");
      selectionName = selectionName[selectionName.length - 1];
      selection[i].setName(selectionName.trim());
   }
   context.document.showMessage("Shortened symbol names!");
}

var SetDefaultName = function(context) {

   var selection = context.selection;

   for (var i=0; i<selection.count(); i++) {
      var selectionName = selection[i].name();
      selectionName = selectionName.split("/");
      selectionName = selectionName[selectionName.length - 1];
      selection[i].setName(selection[i].symbolMaster().name().trim());
   }
   context.document.showMessage("Symbol names set to default!");
}