package Runner;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterSuite;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "src/main/java/Features/retirement.feature", // mapping the file file with location
		
		glue={"stepdefinition"}, // Mapping the step definition file
		
		plugin= {"pretty","html:test-output","html:target/cucumber-html-report", "json:target/cucumber-json-report.json","junit:junit_xml/cucumber.xml"} ,
		
		dryRun= false,  // To check the mapping between feature file and Step definition is proper or not
		
		monochrome = true, // Display the console output in proper readable format
		
		strict = false,  // To check if any step is not defined in step definition file
		
		tags = {"@Demo"}
		)

public class TestRunner extends AbstractTestNGCucumberTests {

	
	
	
}
