let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"dsDelay":"","inputMap":{"attributes":"{Parent.filterQuery}","cartId":"{Parent.cartId}","catalogId":"{Parent.typeId}","fields":"","offerType":"{Parent.typeId}","offsetSize":"0","pagesize":"{Parent.pagesize}","pricelistId":"{Parent.pricelistId}","qualifiedFilter":"{Parent.category}","query":"{Parent.query}"},"ipMethod":"CPQ_ProductPromotionContainer","resultVar":"[\"response\"]","vlocityAsync":false}},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1625930837519-8a68rxzv9","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"result","fieldValue":"{action.result}"}],"id":"flex-action-1617483345766","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628308324065-518c9792o","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"result","fieldValue":"{action.result}"}],"id":"flex-action-1625930870086","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_load_more_promotions_cart","element":"action","eventLabel":"pubsub","eventname":"cpq_load_more_promotions_cart","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1625930837519-fpnkks6wg","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"result","fieldValue":"{action.result}"}],"id":"flex-action-1617145869879","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628308324065-nqyoy7i3d","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"result","fieldValue":"{action.result}"}],"id":"flex-action-1617145869879","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_load_more_products_cart","element":"action","eventLabel":"pubsub","eventname":"cpq_load_more_products_cart","eventtype":"pubsub","key":"event-1","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628308324065-sajga45mw","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"actionsname":"addtocart","checkboxPhase":"{action.phase}","checked":"{action.checked}","eventname":"cpq_select_multiple_products","offerType":"Products","phase":"{Parent.phase}","record":"{record}","selectedProductsIdsBrowse":"{Session.selectedProductsIdsBrowse}","selectedProductsIdsCart":"{Session.selectedProductsIdsCart}","selectedProductsNamesBrowse":"{Session.selectedProductsNamesBrowse}","selectedProductsNamesCart":"{Session.selectedProductsNamesCart}","selectedRecord":"{action.record}","utilMethod":"selectRecordFunctionality"},"hasExtraParams":true,"id":"flex-action-1628283192188","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_select_product","element":"action","eventLabel":"pubsub","eventname":"cpq_select_product","eventtype":"pubsub","key":"event-2","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628308324065-xc4bk57wp","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"result","fieldValue":"{action.result}"},{"fieldName":"Session.selectedProductsIdsBrowse","fieldValue":"{action.selectedProductsIdsBrowse}"},{"fieldName":"Session.selectedProductsIdsCart","fieldValue":"{action.selectedProductsIdsCart}"},{"fieldName":"Session.selectedProductsNamesBrowse","fieldValue":"{action.selectedProductsNamesBrowse}"},{"fieldName":"Session.selectedProductsNamesCart","fieldValue":"{action.selectedProductsNamesCart}"}],"id":"flex-action-1628284933860","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_update_products_cart","element":"action","eventLabel":"pubsub","eventname":"cpq_update_products_cart","eventtype":"pubsub","key":"event-3","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628308324065-liczgafwx","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.selectedProductsIdsBrowse","fieldValue":"[]"},{"fieldName":"Session.selectedProductsIdsCart","fieldValue":"[]"},{"fieldName":"Session.selectedProductsNamesBrowse","fieldValue":"[]"},{"fieldName":"Session.selectedProductsNamesCart","fieldValue":"[]"}],"id":"flex-action-1628287756883","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_remove_multiselect_incontainer_cart","element":"action","eventLabel":"pubsub","eventname":"cpq_remove_multiselect_incontainer_cart","eventtype":"pubsub","key":"event-4","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628308324065-3n3mbfyms","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"phase":"Cart","record":"{record}","utilMethod":"unSelectRecords"},"hasExtraParams":true,"id":"flex-action-1628292825988","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_uncheck_all_products_cart","element":"action","eventLabel":"pubsub","eventname":"cpq_uncheck_all_products_cart","eventtype":"pubsub","key":"event-5","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628308324065-109nzjahr","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"actionsname":"addtocart","checkboxPhase":"{action.phase}","checked":"{action.checked}","eventname":"cpq_select_multiple_products","offerType":"Products","phase":"{Parent.phase}","record":"{record}","utilMethod":"selectAllFunctionality"},"hasExtraParams":true,"id":"flex-action-1628301456269","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_select_all_products_checkbox","element":"action","eventLabel":"pubsub","eventname":"cpq_select_all_products_checkbox","eventtype":"pubsub","key":"event-6","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628308324065-kmstd5ae2","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.isSelectAll","fieldValue":"{action.checked}"}],"id":"flex-action-1628300925012","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_mark_select_all_checkbox_cart","element":"action","eventLabel":"pubsub","eventname":"cpq_mark_select_all_checkbox_cart","eventtype":"pubsub","key":"event-7","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"listenToWidthResize":false,"lwc":{"DeveloperName":"cfCpqProductsPromotionsContainerCart_1_Vlocity","Id":"0Rb8Y000000h0PUCAE","ManageableState":"unmanaged","MasterLabel":"cfCpqProductsPromotionsContainerCart_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","sessionVars":[{"name":"selectedProductsIdsBrowse","val":"[]"},{"name":"selectedProductsNamesBrowse","val":"[]"},{"name":"selectedProductsIdsCart","val":"[]"},{"name":"selectedProductsNamesCart","val":"[]"},{"name":"isSelectAll","val":"false"}],"states":[{"actions":[],"blankCardState":false,"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"Parent.pricelistId","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"undefined"},{"field":"Parent.pricelistId","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"||","operator":"==","type":"custom","value":""}],"id":"state-condition-object","isParent":true},"mergeField":"%3Ch4%20class=%22slds-text-align_center%22%3E%3Cspan%20class=%22slds-text-body_regular%20slds-text-color_default%20slds-text-heading_medium%22%20style=%22color:%20#000000;%22%3E%7BLabel.CPQNoPriceListSelected%7D%3C/span%3E%3C/h4%3E%0A%3Cp%20class=%22slds-text-align_center%22%3E%3Cspan%20class=%22slds-text-body_regular%20slds-text-color_default%22%20style=%22color:%20#3e3e3c;%22%3E%7BLabel.CPQNoPriceListMessageDescription%7D%3C/span%3E%3C/p%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-0-clone-0","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"group":[{"field":"Parent.pricelistId","hasMergeField":false,"id":"state-new-condition-26","operator":"!=","type":"custom","value":"undefined"},{"field":"Parent.pricelistId","hasMergeField":false,"id":"state-new-condition-44","logicalOperator":"&&","operator":"!=","type":"custom","value":""}],"id":"state-new-group-27"},{"group":[{"field":"result.totalSize","hasMergeField":false,"id":"state-new-condition-59","operator":"==","type":"custom","value":"0"},{"field":"result.totalSize","hasMergeField":false,"id":"state-new-condition-98","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"}],"id":"state-new-group-60","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Ch4%20class=%22slds-text-align_center%22%3E%3Cspan%20class=%22slds-text-body_regular%20slds-text-color_default%20slds-text-heading_medium%22%20style=%22color:%20#000000;%22%3E%7BLabel.CPQNoItemsFound%7D%3C/span%3E%3C/h4%3E%0A%3Cp%20class=%22slds-text-align_center%22%3E%3Cspan%20class=%22slds-text-body_regular%20slds-text-color_default%22%20style=%22color:%20#3e3e3c;%22%3E%7BLabel.CPQNoItemsFoundMessageDescription%7D%3C/span%3E%3C/p%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}]}},"conditions":{"group":[{"field":"Parent.pricelistId","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"undefined"},{"field":"Parent.pricelistId","hasMergeField":false,"id":"state-new-condition-9","logicalOperator":"||","operator":"==","type":"custom","value":""},{"field":"result.totalSize","hasMergeField":false,"id":"state-new-condition-16","logicalOperator":"||","operator":"==","type":"custom","value":"0"},{"field":"result.totalSize","hasMergeField":false,"id":"state-new-condition-29","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Empty State","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__products-promotions_empty slds-p-around_x-small slds-m-bottom_x-small ","container":{"class":"cpq__products-promotions_empty"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqPromotions"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"cpqPromotions","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}","pagesize":"{Parent.pagesize}","phase":"{Parent.phase}","qualifiedFilter":"{Parent.category}","query":"{Parent.query}","view":"{Parent.view}"},"recordId":"{recordId}","selectedState":"Browse"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.typeId","id":"state-condition-1","operator":"==","type":"custom","value":"-2"},{"field":"result.totalSize","hasMergeField":false,"id":"state-new-condition-0","logicalOperator":"&&","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Promotions","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqProductView"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"cpqProductView","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"attribute":"{Parent.filterQuery}","cartId":"{Parent.cartId}","catalogId":"{Parent.typeId}","isSelectAll":"{Session.isSelectAll}","pagesize":"{Parent.pagesize}","phase":"{Parent.phase}","qualifiedFilter":"{Parent.category}","query":"{Parent.query}","type":"{Parent.type}","view":"{Parent.view}"},"recordId":"{recordId}","selectedState":"Product-View"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_products_promotions_container ","container":{"class":"cpq_products_promotions_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_products_promotions_container ","container":{"class":"cpq_products_promotions_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[{"field":"Parent.typeId","id":"state-condition-1","operator":"!=","type":"custom","value":"-2"},{"field":"result.totalSize","hasMergeField":false,"id":"state-new-condition-10","logicalOperator":"&&","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Products","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqProductsPromotionsContainerCart","Id":"a5L8Y00001bLrSzEAI","vlocity_cmt__GlobalKey__c":"cpqProductsPromotionsContainerCart/Vlocity/3/1643090403467"};
  export default definition