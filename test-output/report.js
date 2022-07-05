$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/retirement.feature");
formatter.feature({
  "name": "Retirement savings calculation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Demo"
    }
  ]
});
formatter.background({
  "name": "User should launch the browser and open the URL",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should open the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "RetirementSavings_Stepdefs.user_should_open_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: unexpected command response\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027HYDPCM404434L\u0027, ip: \u0027192.168.29.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002716\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f52028043fd627a10c1dad9906613166, get {url\u003dhttps://www.securian.com/insights-tools/retirement-calculator.html}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Vatte.Kumar\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:64076}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64076/devtoo..., se:cdpVersion: 103.0.5060.114, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f52028043fd627a10c1dad9906613166\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:332)\r\n\tat util.testBase.initialization(testBase.java:55)\r\n\tat stepdefinition.RetirementSavings_Stepdefs.user_should_open_the_browser_and_navigate_to_the_URL(RetirementSavings_Stepdefs.java:37)\r\n\tat ✽.User should open the browser and navigate to the URL(src/main/java/Features/retirement.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Retirement savings of a person without social security benefits",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "name": "User is on securian public facing application",
  "keyword": "Given "
});
formatter.match({
  "location": "RetirementSavings_Stepdefs.user_is_on_securian_public_facing_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User provides all the required fields in the application to calculate the savings",
  "keyword": "When "
});
formatter.match({
  "location": "RetirementSavings_Stepdefs.user_provides_all_the_required_fields_in_the_application_to_calculate_the_savings()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will be able to see the total savings after his retirement with out social securoty benefits",
  "keyword": "Then "
});
formatter.match({
  "location": "RetirementSavings_Stepdefs.user_will_be_able_to_see_the_total_savings_after_his_retirement_with_out_social_securoty_benefits()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.quit()\" because \"this.driver\" is null\r\n\tat stepdefinition.RetirementSavings_Stepdefs.tearDown(RetirementSavings_Stepdefs.java:28)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:53)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:56)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:598)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:174)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:821)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:147)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:588)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1214)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1136)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1066)\r\n\tat org.testng.TestNG.run(TestNG.java:1034)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "User should launch the browser and open the URL",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should open the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "RetirementSavings_Stepdefs.user_should_open_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:587)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:264)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:179)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:49)\r\n\tat util.testBase.initialization(testBase.java:46)\r\n\tat stepdefinition.RetirementSavings_Stepdefs.user_should_open_the_browser_and_navigate_to_the_URL(RetirementSavings_Stepdefs.java:37)\r\n\tat ✽.User should open the browser and navigate to the URL(src/main/java/Features/retirement.feature:5)\r\nCaused by: org.openqa.selenium.WebDriverException: Driver server process died prematurely.\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027HYDPCM404434L\u0027, ip: \u0027192.168.29.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002716\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:226)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:98)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:264)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:179)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:49)\r\n\tat util.testBase.initialization(testBase.java:46)\r\n\tat stepdefinition.RetirementSavings_Stepdefs.user_should_open_the_browser_and_navigate_to_the_URL(RetirementSavings_Stepdefs.java:37)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:56)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:598)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:174)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:821)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:147)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:588)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1214)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1136)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1066)\r\n\tat org.testng.TestNG.run(TestNG.java:1034)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Retirement savings of a person with social security benefits",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "name": "User is on securian public facing application",
  "keyword": "Given "
});
formatter.match({
  "location": "RetirementSavings_Stepdefs.user_is_on_securian_public_facing_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User provides all the required fields in the application to calculate the savings with SSI",
  "keyword": "When "
});
formatter.match({
  "location": "RetirementSavings_Stepdefs.user_provides_all_the_required_fields_in_the_application_to_calculate_the_savings_with_SSI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will be able to see the total savings after his retirement with social securoty benefits",
  "keyword": "Then "
});
formatter.match({
  "location": "RetirementSavings_Stepdefs.user_will_be_able_to_see_the_total_savings_after_his_retirement_with_social_securoty_benefits()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.quit()\" because \"this.driver\" is null\r\n\tat stepdefinition.RetirementSavings_Stepdefs.tearDown(RetirementSavings_Stepdefs.java:28)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:53)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:56)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:598)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:174)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:821)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:147)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:588)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1214)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1136)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1066)\r\n\tat org.testng.TestNG.run(TestNG.java:1034)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});