package util;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;



public class testBase {
	public static  WebDriver driver;
	public static Properties prop;
	public static XSSFSheet sheetValue;


	public WebDriver getdriver() {

		return driver;
	}

	// This testBase method is used to fetch the variables from config.properties file
	public testBase() {
		try {
			prop = new Properties();
			FileInputStream fis = new FileInputStream("D:/WorkSpace/Securianproject/sampleproject/src/main/java/Config/Config.properties");
			prop.load(fis);
		}catch(IOException e){
			e.getMessage();
		}
	}

	// ***** This method is used to launch the chrome browser and navigate to securian URL ***********
	//*****************************************************************************************************************************
	//**************** Here "Thread.sleep" method is used to halt the execution so that the URL can be loaded.*********************
	//***Instead of that Explicit wait can be used to halt the execution but due to time constrain Thread.sleep method is used ****
	//*****************************************************************************************************************************
	public void initialization() throws Exception {


		String broswerName = prop.getProperty("browser");
		String URL = prop.getProperty("URL");

		if(broswerName.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "D:\\WorkSpace\\Securianproject\\sampleproject\\src\\main\\java\\Config\\chromedriver.exe");
			driver=new ChromeDriver();

		}else {
			System.setProperty("webdriver.gecko.driver", "D:\\WorkSpace\\Securianproject\\sampleproject\\src\\main\\java\\Config\\chromedriver.exe");
			driver=new FirefoxDriver();
		}

		// This Method is usd to open the URL that is provided
		driver.get(URL);
		Thread.sleep(5000);
		// To maximize the broswer screen
		driver.manage().window().maximize();


	}

//	<***********************  This method is used to access the excel workbook and its sheets to fetch the data from it *********>
	public static void excelReader() throws IOException {

		FileInputStream fs = new FileInputStream("D:/WorkSpace/Securianproject/sampleproject/src/main/java/TestData/Test Data.xlsx");
		XSSFWorkbook wb = new XSSFWorkbook(fs);
		sheetValue = wb.getSheet("Sheet1");

	}

	public static XSSFSheet getSheetValue() {
		return sheetValue;
	}
}
