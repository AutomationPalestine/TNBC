$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TC09-User.feature");
formatter.feature({
  "name": "To Test Create User Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RegressionUserMenu"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Create User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_09_01_AddUserScenario"
    }
  ]
});
formatter.step({
  "name": "user goes to administration and users and click on Add menu",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cUserName\u003e\" and \"\u003cFullName\u003e\" and selects \"\u003cProfile\u003e\" ,\"\u003cAuthMatrix\u003e\" and enters \"\u003cPassword\u003e\"  \"\u003cVerify Password\u003e\" and clicks on Ok button",
  "keyword": "And "
});
formatter.step({
  "name": "user goes to Approve screen and approves the record",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "FullName",
        "Profile",
        "AuthMatrix",
        "Password",
        "Verify Password"
      ]
    },
    {
      "cells": [
        "Maker14",
        "Test User14",
        "Admin",
        "",
        "secure",
        "secure"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionUserMenu"
    },
    {
      "name": "@TC_09_01_AddUserScenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to administration and users and click on Add menu",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateUserStepDefinition.user_goes_to_administration_and_users_and_click_on_Add_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Maker14\" and \"Test User14\" and selects \"Admin\" ,\"\" and enters \"secure\"  \"secure\" and clicks on Ok button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateUserStepDefinition.user_enters_and_and_selects_and_enters_and_clicks_on_Ok_button(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user goes to Approve screen and approves the record",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateUserStepDefinition.user_goes_to_Approve_screen_and_approves_the_record()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
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