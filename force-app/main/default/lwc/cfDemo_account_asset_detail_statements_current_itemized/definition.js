let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"vertical","size":"x-small","label":"vertical:x-small"}],"margin":[{"type":"around","size":"none","label":"around:none"}],"container":{"class":""},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12 ","class":"slds-p-vertical_x-small slds-m-around_none ","background":{"color":"","image":"","size":"","repeat":"","position":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             "},"components":{"layer-0":{"children":[{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3E%7BCategoryName%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#339CD9"},"inlineStyle":"font-size: 1rem;","class":"","style":"            color:#339CD9; font-size: 1rem;"},"elementLabel":"Text-1"},{"name":"FlexCard","element":"childCardPreview","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"cardName":"demo_account_asset_detail_statements_current_itemized_items","recordId":"{recordId}","cardNode":"{record.LineItems}","selectedState":"Active","isChildCardTrackingEnabled":false},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12"},"elementLabel":"FlexCard-2"},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_12-of-12"},"children":[{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"6"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3ETotal%20%7BCategoryName%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_6-of-12 ","size":{"isResponsive":false,"default":"6"},"padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#6C6C6C"},"inlineStyle":"font-weight: bold;","class":"","style":"            color:#6C6C6C; font-weight: bold;","selectedStyles":"total"},"elementLabel":"Block-3-Text-0","key":"element_element_block_2_0_outputField_0_0","parentElementKey":"element_block_2_0"},{"key":"element_element_block_2_0_outputField_2_0","name":"Field","element":"outputField","size":{"isResponsive":false,"default":"6"},"stateIndex":0,"class":"slds-col ","property":{"placeholder":"","record":"{record}","type":"currency","card":"{card}","locale":"en-US","currency":"USD","fieldName":"TotalAmount","styles":{"value":{"textAlign":"right"}}},"type":"element","styleObject":{"sizeClass":"slds-size_6-of-12 ","size":{"isResponsive":false,"default":"6"},"padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{"styles":{"value":{"textAlign":"right"}}},"text":{"align":"","color":"#6C6C6C"},"inlineStyle":"font-weight: bold;","class":"","style":"            color:#6C6C6C; font-weight: bold;","selectedStyles":"total"},"parentElementKey":"element_block_2_0","elementLabel":"Block-3-Field-2"}],"elementLabel":"Block-3"},{"name":"Datatable","element":"dataTable","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"issearchavailable":false,"issortavailable":true,"cellLevelEdit":true,"pagelimit":3,"groupOrder":"asc","hideTableHeader":true,"columns":[],"records":"{records}"},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12"},"elementLabel":"Datatable-4"}]}},"childCards":["demo_account_asset_detail_statements_current_itemized_items"],"actions":[],"omniscripts":[]}],"dataSource":{"type":"IntegrationProcedures","value":{"ipMethod":"Demo_GetStatementLineItems","vlocityAsync":false,"inputMap":{"statementId":"{Parent.statementId}"},"resultVar":""},"orderBy":{"name":"","isReverse":false},"contextVariables":[]},"title":"demo_account_asset_detail_statements_current_itemized","enableLwc":true,"isFlex":true,"theme":"slds","lwc":{"DeveloperName":"cfDemo_account_asset_detail_statements_current_itemized_2_sfi","Id":"0Rb8Y000000h0EVCAI","MasterLabel":"cfDemo_account_asset_detail_statements_current_itemized_2_sfi","NamespacePrefix":"c","ManageableState":"unmanaged"},"isRepeatable":true,"Id":"a5L8Y00001bLrWpEAO","vlocity_cmt__GlobalKey__c":"demo_account_asset_detail_statements_current_itemized/sfi/2/1624630561230","vlocity_cmt__IsChildCard__c":true};
  export default definition