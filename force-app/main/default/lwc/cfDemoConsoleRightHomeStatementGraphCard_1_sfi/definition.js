let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[],"margin":[],"container":{"class":""},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12 ","class":"","background":{"color":"#ffffff","image":"","size":"","repeat":"","position":""},"border":{"type":"","width":"","color":"#D8DDE6","radius":"4px","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"box-shadow: 0 0 0.25rem 0 rgba(0,0,0, 0.15);","height":"","style":"background-color:#ffffff;     border-color:#D8DDE6;  border-radius:4px;      box-shadow: 0 0 0.25rem 0 rgba(0,0,0, 0.15);"},"components":{"layer-0":{"children":[{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"small","label":"around:small"}],"class":"slds-p-around_small ","sizeClass":"slds-size_12-of-12 ","size":{"isResponsive":false,"default":"12"},"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             "},"children":[{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[],"class":"slds-m-bottom_small ","sizeClass":"slds-size_12-of-12 ","margin":[{"type":"bottom","size":"small","label":"bottom:small"}],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             "},"children":[{"key":"element_element_element_block_0_0_block_0_0_block_0_0","name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_12-of-12 ","size":{"isResponsive":false,"default":"12"}},"children":[{"name":"Icon","element":"flexIcon","size":{"isResponsive":false,"default":"1"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","iconType":"Salesforce SVG","iconName":"custom:custom18","size":"medium","extraclass":"slds-icon_container slds-icon-custom-custom18 ","variant":"inverse","imgsrc":""},"type":"element","styleObject":{"size":{"isResponsive":false,"default":"1"},"sizeClass":"slds-size_1-of-12 "},"elementLabel":"block-header-container-Block-1-Icon-0","key":"element_element_element_element_block_0_0_block_0_0_block_0_0_flexIcon_0_0","parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0"},{"key":"element_element_element_element_block_0_0_block_0_0_block_0_0_outputField_1_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"11"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3E%3Cspan%20class=%22slds-text-heading_medium%22%20style=%22font-size:%2014pt;%22%3E12-Month%20Statements%3C/span%3E%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_11-of-12 ","padding":[{"type":"top","size":"xx-small","label":"top:xx-small"},{"type":"left","size":"small","label":"left:small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"11"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#1F4482"},"inlineStyle":"","class":"slds-p-top_xx-small slds-p-left_small ","style":"            color:#1F4482; "},"parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0","elementLabel":"block-header-container-Block-1-Text-1"}],"parentElementKey":"element_element_block_0_0_block_0_0","elementLabel":"block-header-container-Block-1"}],"elementLabel":"block-header-container","userUpdatedElementLabel":true,"key":"element_element_block_0_0_block_0_0","parentElementKey":"element_block_0_0"},{"name":"Chart","element":"flexChart","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"title":"Charts","type":"bar","hideHeader":"true","card":"{card}","records":"{records}","channel":"flexcarddesigner:chart","cutoutPercentage":"0","colorPalette":["#3296ED","#77B9F2","#9D53F2","#C398F5","#26ABA4","#4ED4CD"],"labelNode":"dueDateFormatted","valueNode":"totalBalance"},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"#ffffff","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"border: none;","height":"","class":"","style":"     border-color:#ffffff;        border: none;","maxHeight":""},"elementLabel":"StatementsGraph","key":"element_element_block_0_0_flexChart_1_0","parentElementKey":"element_block_0_0","userUpdatedElementLabel":true}],"elementLabel":"Block-1"}]}},"childCards":[],"actions":[],"omniscripts":[],"documents":[]}],"dataSource":{"type":"IntegrationProcedures","value":{"resultVar":"[\"statements\"]","ipMethod":"Account_Statements","vlocityAsync":false,"inputMap":{"paramId":"{recordId}"}},"orderBy":{"name":"DueDate","isReverse":false},"contextVariables":[]},"title":"demoConsoleRightHomeStatementGraphCard","enableLwc":true,"isFlex":true,"theme":"slds","lwc":{"DeveloperName":"cfdemoConsoleRightHomeStatementGraphCard_1_sfi","Id":"0Rb8Y000000h0NtCAE","MasterLabel":"cfdemoConsoleRightHomeStatementGraphCard_1_sfi","NamespacePrefix":"c","ManageableState":"unmanaged"},"isRepeatable":false,"globalCSS":true,"Id":"a5L8Y00001bLrQ8EAO","vlocity_cmt__GlobalKey__c":"demoConsoleRightHomeStatementGraphCard/sfi/1/1620940397080","vlocity_cmt__IsChildCard__c":true};
  export default definition