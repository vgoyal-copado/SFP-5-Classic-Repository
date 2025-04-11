let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1625931781422-g2d6zvo2b","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.details","fieldValue":"{action.response.records[0].details}"}],"flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1623771382931","layoutType":"lightning","openFlyoutIn":"Modal","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqReadyToSubmitCancelledMobile_1_Vlocity","Id":"0Rb8Y000000h0PE0AY","ManageableState":"unmanaged","MasterLabel":"cfCpqReadyToSubmitCancelledMobile_1_Vlocity","NamespacePrefix":"c"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-4","name":"Menu","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"flyoutObj":{"menuItemFlyout4":{"displayName":"Request Pending Approval","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"menuItemFlyout4","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"}},"iconName":"utility:down","menuItems":[{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629441788357","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewRecord}","name":"menu-item-1612100275302-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629441792582","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQGenerateDocumentPDF}","name":"menu-item-1612100312317-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629441796242","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQAmendmentHistory}","name":"menu-item-1612100357124-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629441799164","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQStatusNotifications}","name":"menu-item-1612100381466-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","hasMergeField":false,"id":"state-new-condition-11","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629183337884","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQRequestPendingApproval}","name":"menu-item-1612103374315-0"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"displayName":"{Label.CPQPrintableView}","id":"flex-action-1629107091887","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQPrintableView}","name":"menu-item-1615224887780-0"},{"actionData":{"card":"{card}","stateAction":{"Record":{"targetAction":"clone","targetId":"{Id}","targetName":"Order"},"displayName":"{Label.CPQClone}","id":"flex-action-1629107107871","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Record","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQClone}","name":"menu-item-1615225295907-0"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/vlocity_cmt__XOMViewOrderDecomposition?id={Id}"},"displayName":"{Label.CPQViewDecomposition}","id":"flex-action-1629107121285","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewDecomposition}","name":"menu-item-1615264900003-1"},{"actionData":{"card":"{card}","stateAction":{"displayName":"{Label.CPQViewOrchestrationPlan}","eventName":"cpqutils","extraParams":{"cartId":"{Id}","ipMethod":"CPQ_OrderActionUtil","utilMethod":"viewOrchestrationPlan"},"hasExtraParams":true,"id":"flex-action-1629107135041","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewOrchestrationPlan}","name":"menu-item-1615264948055-1"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-18","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-19","logicalOperator":"&&","operator":"===","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631198052498","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAgreement}","name":"menu-item-1615265193120-1"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-20","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-21","logicalOperator":"&&","operator":"===","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631198061099","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAmendment}","name":"menu-item-1631197862086-1"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-22","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-23","logicalOperator":"&&","operator":"===","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631198068087","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAgreement}","name":"menu-item-1631197876917-1"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-24","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-27","logicalOperator":"&&","operator":"===","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631198075157","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAmendment}","name":"menu-item-1631197890901-1"}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-17","operator":"==","type":"custom","value":"Order"},{"group":[{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-19","operator":"==","type":"custom","value":"Activated"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-20","logicalOperator":"||","operator":"==","type":"custom","value":"Complete"}],"id":"state-condition-18","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order Complete Activated","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-4","name":"Menu","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"flyoutObj":{"menuItemFlyout10":{"flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Order"},"flyoutType":"childCard","id":"menuItemFlyout10"},"menuItemFlyout13":{"flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}"},"flyoutType":"childCard","id":"menuItemFlyout13"},"menuItemFlyout4":{"displayName":"Request Pending Approval","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"menuItemFlyout4","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"}},"iconName":"utility:down","menuItems":[{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629441812387","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewRecord}","name":"menu-item-1612100275302-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629441817074","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQGenerateDocumentPDF}","name":"menu-item-1612100312317-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629441820073","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQAmendmentHistory}","name":"menu-item-1612100357124-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629441823717","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQStatusNotifications}","name":"menu-item-1612100381466-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","hasMergeField":false,"id":"state-new-condition-20","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629183362867","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQRequestPendingApproval}","name":"menu-item-1612103374315-0"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"displayName":"{Label.CPQPrintableView}","id":"flex-action-1629107373224","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQPrintableView}","name":"menu-item-1615224887780-0"},{"actionData":{"card":"{card}","stateAction":{"Record":{"targetAction":"clone","targetId":"{Id}","targetName":"Order"},"displayName":"{Label.CPQClone}","id":"flex-action-1629107387763","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Record","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQClone}","name":"menu-item-1615225295907-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-28","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-29","logicalOperator":"&&","operator":"===","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631198158655","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAgreement}","name":"menu-item-1615265193120-1"},{"actionData":{"card":"{card}","stateAction":{"cardName":"cpqDeleteModal","cardNode":"","displayName":"{Label.CPQDelete}","flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Order"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1629107402783","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQDelete}","name":"menu-item-1615266058947-2"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-30","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-31","logicalOperator":"&&","operator":"===","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631198171120","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAgreement}","name":"menu-item-1615266118695-2"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-32","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-33","logicalOperator":"&&","operator":"===","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631198178122","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAmendment}","name":"menu-item-1631197970965-2"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-34","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-35","logicalOperator":"&&","operator":"===","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631198185466","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAmendment}","name":"menu-item-1631197987659-2"}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":2,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-21","operator":"==","type":"custom","value":"Order"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-22","logicalOperator":"&&","operator":"==","type":"custom","value":"Queued"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order Queued","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqReadyToSubmitCancelledMobileChild","Id":"a5L8Y00001bLrTEEAA","vlocity_cmt__GlobalKey__c":"cpqReadyToSubmitCancelledMobileChild/Vlocity/1/1658214978401"};
  export default definition