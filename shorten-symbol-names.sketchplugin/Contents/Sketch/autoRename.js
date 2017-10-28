COScript.currentCOScript().setShouldKeepAround(true);

var symbolInserted = false;

var onInsertSymbol = function(context) {
   symbolInserted = true;
}

var onSelectionChanged = function(context) {
   
   var selection = context.actionContext.newSelection;

   if (symbolInserted && selection.length == 1 && selection[0].class() == "MSSymbolInstance") {
      var selectionName = selection[0].name();
      selectionName = selectionName.split("/");
      selectionName = selectionName[selectionName.length - 1].trim();
      selection[0].setName(selectionName);
      symbolInserted = false;
   }

}
