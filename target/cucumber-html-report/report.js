$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TC15-OnusPaymentFlow.feature");
formatter.feature({
  "name": "Onus Payment flow feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Inward Payment flow",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_15_09_OnusPaymentflowwithExceptionfromQueuedToPosting"
    }
  ]
});
formatter.step({
  "name": "check whether payment move to SignatureCheckApprove using \"\u003cValueDateperiod\u003e\",\"\u003cPaymentType\u003e\",\"\u003cReference\u003e\",\"\u003cSubRef\u003e\",\"\u003cChequeNo\u003e\",\"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "check whether payment move to QueuedToPosting status using \"\u003cValueDateperiod\u003e\",\"\u003cPaymentType\u003e\",\"\u003cReference\u003e\",\"\u003cSubRef\u003e\",\"\u003cChequeNo\u003e\",\"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "check whether payment move to Exception status using \"\u003cValueDateperiod\u003e\",\"\u003cPaymentType\u003e\",\"\u003cReference\u003e\",\"\u003cSubRef\u003e\",\"\u003cChequeNo\u003e\",\"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "check whether payment move to Exception to Approve status using \"\u003cValueDateperiod\u003e\",\"\u003cPaymentType\u003e\",\"\u003cReference\u003e\",\"\u003cSubRef\u003e\",\"\u003cChequeNo\u003e\",\"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "check whether payment move to Completed status using \"\u003cValueDateperiod\u003e\",\"\u003cPaymentType\u003e\",\"\u003cReference\u003e\",\"\u003cSubRef\u003e\",\"\u003cChequeNo\u003e\",\"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ValueDateperiod",
        "PaymentType",
        "Reference",
        "SubRef",
        "ChequeNo",
        "AccountNumber"
      ]
    },
    {
      "cells": [
        "",
        "INTERNAL CHEQUE",
        "Cheque No",
        "EQUAL",
        "37120224",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Inward Payment flow",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_15_09_OnusPaymentflowwithExceptionfromQueuedToPosting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "check whether payment move to SignatureCheckApprove using \"\",\"INTERNAL CHEQUE\",\"Cheque No\",\"EQUAL\",\"37120224\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OnusPaymentFlowStepDefinition.check_whether_payment_move_to_SignatureCheckApprove_using(String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//tr[@class\u003d\u0027rowcoloreven\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027DESKTOP-CPIEPSU\u0027, ip: \u0027192.168.166.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Montran\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:59159}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0f38d8f354fb4431bb14b572bf3220d9\n*** Element info: {Using\u003dxpath, value\u003d//tr[@class\u003d\u0027rowcoloreven\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat com.tnbc.qa.pages.PaymentFlow.signatureCheckQueue_Confirm(PaymentFlow.java:299)\r\n\tat StepDefinition.OnusPaymentFlowStepDefinition.check_whether_payment_move_to_SignatureCheckApprove_using(OnusPaymentFlowStepDefinition.java:118)\r\n\tat ✽.check whether payment move to SignatureCheckApprove using \"\",\"INTERNAL CHEQUE\",\"Cheque No\",\"EQUAL\",\"37120224\",\"\"(file:src/test/resources/Features/TC15-OnusPaymentFlow.feature:132)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "check whether payment move to QueuedToPosting status using \"\",\"INTERNAL CHEQUE\",\"Cheque No\",\"EQUAL\",\"37120224\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OnusPaymentFlowStepDefinition.check_whether_payment_move_to_QueuedToPosting_status_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "check whether payment move to Exception status using \"\",\"INTERNAL CHEQUE\",\"Cheque No\",\"EQUAL\",\"37120224\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OnusPaymentFlowStepDefinition.check_whether_payment_move_to_Exception_status_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "check whether payment move to Exception to Approve status using \"\",\"INTERNAL CHEQUE\",\"Cheque No\",\"EQUAL\",\"37120224\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OnusPaymentFlowStepDefinition.check_whether_payment_move_to_Exception_to_Approve_status_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "check whether payment move to Completed status using \"\",\"INTERNAL CHEQUE\",\"Cheque No\",\"EQUAL\",\"37120224\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OnusPaymentFlowStepDefinition.check_whether_payment_move_to_Completed_status_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});