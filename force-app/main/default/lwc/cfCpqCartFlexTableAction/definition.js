let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"REST","value":{"dsDelay":"","endpoint":"https://run.mocky.io/v3/eee1a689-2d3f-4b65-924d-5ed53277b10f","methodType":"GET","resultVar":"","subType":"Web"}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartFlexTableAction_1_Vlocity","Id":"0Rb8Y000000h0Pj0AE","ManageableState":"unmanaged","MasterLabel":"cfCpqCartFlexTableAction_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"osSupport":true,"requiredPermission":"","sessionVars":[],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Block-2-Menu-0","key":"element_element_block_0_0_flexMenu_0_0","name":"Menu","parentElementKey":"element_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Parent.flowType","hasMergeField":false,"id":"state-new-condition-122","operator":"!=","type":"custom","value":"bulkChange"},{"field":"vlocity_cmt__Action__c.value","hasMergeField":false,"id":"state-new-condition-34","logicalOperator":"&&","operator":"!=","type":"custom","value":"Disconnect"},{"field":"changesNotAllowed","hasMergeField":false,"id":"state-new-condition-285","logicalOperator":"&&","operator":"==","type":"custom","value":"undefined"},{"group":[{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-88","operator":"==","type":"custom","value":"undefined"},{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-134","logicalOperator":"||","operator":"==","type":"custom","value":"null"},{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-200","logicalOperator":"||","operator":"!=","type":"custom","value":"Cancel"}],"id":"state-new-group-89","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"flyoutObj":{"menuItemFlyout2":{"cardName":"cpqConfigureCart","cardNode":"{record}","displayName":"Configure","flyoutLwc":"cpqConfigureCart","flyoutParams":{"cartType":"{Parent.cartType}"},"flyoutType":"childCard","hasExtraParams":true,"id":"menuItemFlyout2","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":""}},"iconName":"utility:threedots_vertical","iconSize":"small","menuItems":[{"actionConditions":{"group":[{"field":"vlocity_cmt__RecurringCharge__c.actions.applyadjustment","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","reRenderFlyout":true,"stateAction":{"actionConditions":null,"cardName":"cpqManualPriceAdjustments","displayName":"{Label.CPQAdjustPrice}","flyoutLwc":"cpqManualPriceAdjustments","flyoutParams":{"cartId":"{Parent.cartId}","id":"{Id.value}","lineItemName":"{Name}","type":"charge"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1629976380502","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":""},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1641563536721-vwgtep8ss","label":"Action","reRenderFlyout":true,"stateAction":{"actionConditions":null,"cardName":"cpqManualPriceAdjustments","channelName":"close_modal","displayName":"{Label.CPQAdjustPrice}","flyoutLwc":"cpqManualPriceAdjustments","flyoutParams":{"cartId":"{Parent.cartId}","cartType":"{Parent.cartType}","id":"{Id.value}","lineItemName":"{Name}","type":"charge"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1641580168551","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":""},"stateObj":"{record}"}],"iconName":"","iconPosition":"","label":"{Label.CPQAdjustPrice}","name":"menu-item-1614792957513-0","showSpinner":"false","status":""},{"actionConditions":{"group":[],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"displayName":"{Label.CPQClone}","eventName":"cpq_{recordId}","extraParams":{"cartId":"{Parent.cartId}","cartType":"{Parent.cartType}","getInputMethod":"prepareCloneItemInCartInput","handleResponseMethod":"processCloneItemInCartResponse","hierarchyPath":"{Id.value}","ipMethod":"CPQ_CloneLineItems","itemId":"{Id.value}","methodName":"cloneItemInCart","responseEventName":"cpq_cart_line_item_clone"},"hasExtraParams":true,"id":"flex-action-1626944470908","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1637727987805-zdb0i67c6","label":"Action","stateAction":{"actionConditions":{"group":[],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQClone}","eventName":"cpq_{recordId}","extraParams":{"cartId":"{Parent.cartId}","cartType":"{Parent.cartType}","getInputMethod":"prepareCloneItemInCartInput","handleResponseMethod":"processCloneItemInCartResponse","hierarchyPath":"{Id.value}","ipMethod":"CPQ_CloneLineItems","itemId":"{Id.value}","methodName":"cloneItemInCart","responseEventName":"cpq_cart_line_item_clone"},"hasExtraParams":true,"id":"flex-action-1637731577531","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"}],"iconName":"","iconPosition":"","label":"{Label.CPQClone}","name":"menu-item-1616393869626-0","showSpinner":"false","status":""},{"actionConditions":{"group":[{"field":"Parent.flow","hasMergeField":false,"id":"state-new-condition-13","operator":"!=","type":"custom","value":"config"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","preloadFlyout":false,"reRenderFlyout":true,"stateAction":{"actionConditions":null,"cardName":"cpqConfigureCart","cardNode":"{record}","displayName":"{Label.CPQConfigure}","flyoutLwc":"cpqConfigureCart","flyoutParams":{"cartType":"{Parent.cartType}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1626944489907","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":""},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1637728013216-vy3ki7zo3","label":"Action","preloadFlyout":false,"reRenderFlyout":true,"stateAction":{"actionConditions":{"group":[],"id":"state-condition-object","isParent":true},"cardName":"cpqConfigureCart","cardNode":"{record}","channelName":"close_modal","displayName":"{Label.CPQConfigure}","flyoutLwc":"cpqConfigureCart","flyoutParams":{"cartType":"{Parent.cartType}","multisiteSelectedGroupItemsCount":"{Parent.multisiteSelectedGroupItemsCount}","multisiteSelectedGroupName":"{Parent.multisiteSelectedGroupName}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1638167803885","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":""},"stateObj":"{record}"}],"iconName":"","iconPosition":"","label":"{Label.CPQConfigure}","name":"menu-item-1617193930813-0","showSpinner":"false","status":""},{"actionConditions":{"group":[{"field":"actions.deleteitem","hasMergeField":false,"id":"state-new-condition-1742","operator":"!=","type":"custom","value":"undefined"},{"group":[{"field":"orderActive","hasMergeField":false,"id":"state-new-condition-1767","operator":"==","type":"custom","value":"false"},{"field":"orderActive","hasMergeField":false,"id":"state-new-condition-1799","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"}],"id":"state-new-group-1768","logicalOperator":"&&"},{"group":[{"field":"vlocity_cmt__IsChangesAllowed__c.value","hasMergeField":false,"id":"state-new-condition-1844","operator":"==","type":"custom","value":"undefined"},{"field":"vlocity_cmt__IsChangesAllowed__c.value","hasMergeField":false,"id":"state-new-condition-1897","logicalOperator":"||","operator":"==","type":"custom","value":"true"},{"field":"vlocity_cmt__IsChangesAllowed__c.value","hasMergeField":false,"id":"state-new-condition-1989","logicalOperator":"||","operator":"==","type":"custom","value":"null"}],"id":"state-new-group-1845","logicalOperator":"&&"},{"group":[{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-2066","operator":"==","type":"custom","value":"undefined"},{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-2147","logicalOperator":"||","operator":"!=","type":"custom","value":"cancel"},{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-2258","logicalOperator":"||","operator":"==","type":"custom","value":"null"}],"id":"state-new-group-2067","logicalOperator":"&&"},{"field":"vlocity_cmt__Action__c.value","hasMergeField":false,"id":"state-new-condition-222","logicalOperator":"&&","operator":"==","type":"custom","value":"Add"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"displayName":"{Label.CPQDelete}","eventName":"cpq_{recordId}","extraParams":{"cartType":"{Parent.cartType}","getInputMethod":"prepareDeleteItemFromCartInput","handleResponseMethod":"processDeleteItemFromCartResponse","hierarchyPath":"{Id.value}","ipMethod":"CPQ_DeleteItemFromCart","itemId":"{Id.value}","methodName":"deleteItemFromCart","minQuantity":"0","parentObject":"null"},"hasExtraParams":true,"id":"flex-action-1633355107895","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"actionConditions":null,"displayName":"{Label.CPQDelete}","eventName":"cpq_{recordId}","extraParams":{"cartType":"{Parent.cartType}","getInputMethod":"prepareDeleteItemFromCartInput","handleResponseMethod":"processDeleteItemFromCartResponse","hierarchyPath":"{Id.value}","ipMethod":"CPQ_DeleteItemFromCart","itemId":"{Id.value}","methodName":"deleteItemFromCart","minQuantity":"0","parentObject":"null"},"hasExtraParams":true,"id":"flex-action-1633355107895","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"}],"iconName":"utility:delete","iconPosition":"left","label":"{Label.CPQDelete}","name":"menu-item-1617699403428-0","showSpinner":"false","status":""},{"actionConditions":{"group":[{"field":"actions.cancelcartitem","hasMergeField":false,"id":"state-new-condition-290","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1635235550021-erfgsyyjw","label":"Action","stateAction":{"actionConditions":{"group":[{"field":"Parent.flow","hasMergeField":false,"id":"state-new-condition-22","operator":"!=","type":"custom","value":"config"}],"id":"state-condition-object","isParent":true},"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"actionObjName":"cancelcartitem","getInputMethod":"prepareCancelCartItem","handleResponseMethod":"processCancelCartItemResponse","input":"{\"ipMethod\":\"CPQ_CancelCartItem\"}","methodName":"cancelCartItem","record":"{record}"},"hasExtraParams":true,"id":"flex-action-1637728046850","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"iconName":"utility:close","iconPosition":"left","label":"\\{Label.CPQCancel}","name":"menu-item-1635235550019-0","showSpinner":"false","status":""},{"actionConditions":{"group":[{"field":"actions.deleteitem","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"},{"group":[{"field":"orderActive","hasMergeField":false,"id":"state-new-condition-554","operator":"==","type":"custom","value":"false"},{"field":"orderActive","hasMergeField":false,"id":"state-new-condition-586","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"}],"id":"state-new-group-555","logicalOperator":"&&"},{"group":[{"field":"vlocity_cmt__IsChangesAllowed__c.value","hasMergeField":false,"id":"state-new-condition-646","operator":"==","type":"custom","value":"undefined"},{"field":"vlocity_cmt__IsChangesAllowed__c.value","hasMergeField":false,"id":"state-new-condition-699","logicalOperator":"||","operator":"==","type":"custom","value":"true"},{"field":"vlocity_cmt__IsChangesAllowed__c.value","hasMergeField":false,"id":"state-new-condition-774","logicalOperator":"||","operator":"==","type":"custom","value":"null"}],"id":"state-new-group-647","logicalOperator":"&&"},{"group":[{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-920","operator":"==","type":"custom","value":"undefined"},{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-1001","logicalOperator":"||","operator":"!=","type":"custom","value":"cancel"},{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-1137","logicalOperator":"||","operator":"==","type":"custom","value":"null"}],"id":"state-new-group-921","logicalOperator":"&&"},{"field":"vlocity_cmt__Action__c.value","hasMergeField":false,"id":"state-new-condition-1248","logicalOperator":"&&","operator":"!=","type":"custom","value":"Add"}],"id":"state-condition-object","isParent":true},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1637143886522-uz7q9x6r3","label":"Action","stateAction":{"actionConditions":{"group":[{"field":"Parent.flow","hasMergeField":false,"id":"state-new-condition-29","operator":"!=","type":"custom","value":"config"}],"id":"state-condition-object","isParent":true},"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"cartType":"{Parent.cartType}","getInputMethod":"prepareDeleteItemFromCartInput","handleResponseMethod":"processDeleteItemFromCartResponse","hierarchyPath":"{Id.value}","ipMethod":"CPQ_DeleteItemFromCart","itemId":"{Id.value}","methodName":"deleteItemFromCart","minQuantity":"0","parentObject":"null"},"hasExtraParams":true,"id":"flex-action-1637728063301","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"iconName":"standard:default","label":"{Label.Disconnect}","name":"menu-item-1637143886520-0","showSpinner":"false"}],"overflow":true,"position":"right","record":"{record}","size":"xx-small","type":"action","variant":""},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right cpq__cart-flextable_menu slds-p-top_small ","container":{"class":"cpq__cart-flextable_menu"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right cpq__cart-flextable_menu slds-p-top_small ","container":{"class":"cpq__cart-flextable_menu"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"right","color":""}}}],"type":"element"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-1","key":"element_element_block_0_0_block_1_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"Parent.flow","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"config"},{"field":"vlocity_cmt__Action__c.value","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"&&","operator":"==","type":"custom","value":"Disconnect"},{"field":"changesNotAllowed","hasMergeField":false,"id":"state-new-condition-23","logicalOperator":"||","operator":"==","type":"custom","value":"true"},{"field":"vlocity_cmt__SupplementalAction__c.value","hasMergeField":false,"id":"state-new-condition-269","logicalOperator":"||","operator":"==","type":"custom","value":"Cancel"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""},"theme":"theme_default"},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""},"theme":"theme_default"}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#FAFAF9","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default slds-text-align_right ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FAFAF9;      \n         ","text":{"align":"right","color":""},"theme":"theme_default"}}],"theme":"slds","title":"cpqCartFlexTableAction","uniqueKey":"Id.value","Id":"a5L8Y00001bLrS1EAQ","vlocity_cmt__GlobalKey__c":"cpqCartFlexTableAction/Vlocity/2/1640707505097"};
  export default definition