export const OMNIDEF = {"userTimeZone":-480,"userProfile":"System Administrator","userName":"joemcmaster@comms2021.demo","userId":"0058Y00000C1jorAA4","userCurrencyCode":"USD","timeStamp":"2022-11-16T20:13:55.141Z","sOmniScriptId":"a2s8Y000008HqO9QAK","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":true},"prefillJSON":"{}","lwcId":"23bbe281-d796-2742-e9d4-dec3ea9907c7","labelMap":{"NavigateToQuote":"CreateOrderMsgStep:NavigateToQuote","LineBreak1":"CreateOrderMsgStep:LineBreak1","CreateOrderMsg":"CreateOrderMsgStep:CreateOrderMsg","CreateOrderMsgStep":"CreateOrderMsgStep","CPQ_StartBulkQuoteToOrder":"CPQ_StartBulkQuoteToOrder"},"labelKeyMap":{"New":"New","Continue":"Continue","Done":"Done","Previous":"Previous","Ok":"OK","Cancel":"Cancel","CreateOrderMsg":"Create Order job started. Process Id: %asyncProcessId%","OK":"OK"},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"","integrationProcedureKey":"CPQ_StartBulkQuoteToOrder","inProgressMessage":"","failureNextLabel":"Continue","failureGoBackLabel":"","failureAbortMessage":"","failureAbortLabel":"","extraPayload":{"cartId":"%ContextId%"},"errorMessage":{"default":"","custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CPQ_StartBulkQuoteToOrder","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"CPQ_StartBulkQuoteToOrder","lwcId":"lwc0"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"","saveLabel":"","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Ok","message":{},"label":"","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":"","custom":[]},"conditionType":"Hide if False","completeMessage":"","completeLabel":"","chartLabel":null,"cancelMessage":"","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"CreateOrderMsgStep":""},"aggElements":{}},"offSet":0,"name":"CreateOrderMsgStep","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Validation","rootIndex":1,"response":null,"propSetMap":{"validateExpression":null,"show":null,"messages":[{"value":true,"type":"Success","text":"CreateOrderMsg","active":true},{"value":false,"type":"Requirement","text":"","active":true}],"lwcComponentOverride":"","label":"","hideLabel":true,"controlWidth":12,"HTMLTemplateId":""},"name":"CreateOrderMsg","level":1,"JSONPath":"CreateOrderMsgStep:CreateOrderMsg","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bMessaging":true,"lwcId":"lwc10-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Line Break","rootIndex":1,"response":null,"propSetMap":{"show":null,"padding":0,"disOnTplt":false,"HTMLTemplateId":""},"name":"LineBreak1","level":1,"JSONPath":"CreateOrderMsgStep:LineBreak1","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc11-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Navigate Action","rootIndex":1,"response":null,"propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetType":"Record","targetName":"Quote","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":null,"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":"OK","iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":3,"businessEvent":"","businessCategory":"","HTMLTemplateId":""},"name":"NavigateToQuote","level":1,"JSONPath":"CreateOrderMsgStep:NavigateToQuote","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bNavigate":true,"lwcId":"lwc12-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"CreateOrderMsgStep","lwcId":"lwc1"}],"bReusable":false,"bpVersion":3,"bpType":"CPQ","bpSubType":"BulkQuoteToOrder","bpLang":"Multi-Language","bHasAttachment":false,"lwcVarMap":{}};