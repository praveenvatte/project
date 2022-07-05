package Pages;

public class PreRetirmentCalcutationPage {

	public static final String HomePage_Title_Xpath = "//img[@class='dsg-nav-logo']";
	public static final String Age_TxtBox_ID = "current-age";
	public static final String RetirementAge_TxtBox_ID = "retirement-age";
	public static final String CurrentIncome_TxtBox_ID = "current-income";
	public static final String SpouseIncome_TxtBox_ID = "spouse-income";
	public static final String CurrentSavings_TxtBox_ID = "current-total-savings";
	public static final String CurrentAnnualSavings_TxtBox_ID = "current-annual-savings";
	public static final String SavingsIncreaseRate_TxtBox_ID = "savings-increase-rate";
	public static final String SocialSecurityBenifits_RadioButton_ID = "no-social-benefits";
	public static final String SocialSecurityBenifits_RadioButton_YES_ID = "yes-social-benefits";
	
//  ********** Locators if Social Security Income is "YES" *******************
	
	public static final String Marriage_RadioBtn_Xpath = "//input[@id='married']";
	public static final String SocialSecurityOverrideAmount_TxtBox_Xpath = "//input[@id='social-security-override']";
	public static final String Calculate_Button_Xpath = "//button[@class='dsg-btn-primary btn-block']";
}
