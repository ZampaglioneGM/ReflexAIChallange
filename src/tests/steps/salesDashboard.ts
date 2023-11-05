import { Given, Then } from "@cucumber/cucumber";
import { sharedContext } from "../../../drivers/browserContext";
import {
  clickElement,
  expectAtributeToBe,
  validateElementHaveText,
  validateElementisVisible,
} from "../../../drivers/drivers";
import * as DailySales from "../pageobject/salesDashboard/dailySales";
import * as Revenue from "../pageobject/salesDashboard/revenueCard";
import * as SalesCategory from "../pageobject/salesDashboard/salesByCategoryCard";
import * as PODashboard from "../pageobject/salesDashboard/salesDashboard";
import * as Summary from "../pageobject/salesDashboard/summary";
import * as TotalOrders from "../pageobject/salesDashboard/totalOrders"

Given("Sales Dashboard is visible", async function () {
  await validateElementisVisible(
    PODashboard.salesDashboard_Container,
    sharedContext.page
  );
  await validateElementisVisible(
    PODashboard.salesDashboardBreadCrumbs_Label,
    sharedContext.page
  );
  await validateElementHaveText(
    PODashboard.salesDashboardBreadCrumbsDashboard_Label,
    PODashboard.salesDashboardBreadCrumbsDashboard_staticText,
    sharedContext.page
  );

  await validateElementHaveText(
    PODashboard.salesDashboardBreadCrumbsSales_Label,
    PODashboard.salesDashboardBreadCrumbsSales_staticText,
    sharedContext.page
  );

  await validateElementHaveText(
    PODashboard.salesDashboardRights_Label,
    PODashboard.salesDashboardRights_staticText,
    sharedContext.page
  );
});

Then("Revenue card is visible and correct", async function () {
  await validateElementisVisible(
    Revenue.revenueCard_Containter,
    sharedContext.page
  );
  await validateElementisVisible(Revenue.revenueCard_Title, sharedContext.page);
  await validateElementHaveText(
    Revenue.revenueCard_Title,
    Revenue.revenueCardTitle_staticText,
    sharedContext.page
  );
  await validateElementHaveText(
    Revenue.revenueCardTotalProfit_Label,
    Revenue.revenueCardProfit_staticText,
    sharedContext.page
  );
  await validateElementHaveText(
    Revenue.revenueCardTotalProfit_Label,
    Revenue.revenueCardProfit_staticText,
    sharedContext.page
  );
  await validateElementHaveText(
    Revenue.revenueCardIncome_Label,
    Revenue.revenueCardIncome_staticText,
    sharedContext.page
  );
  await validateElementHaveText(
    Revenue.revenueCardExpenses_Label,
    Revenue.revenueCardExpenses_staticText,
    sharedContext.page
  );
  await validateElementisVisible(Revenue.revenueCard_graph, sharedContext.page);
});

Then("Sales By Category card is visible and correct", async function () {
  await validateElementisVisible(
    SalesCategory.salesByCategory_Containter,
    sharedContext.page
  );
  await validateElementHaveText(
    SalesCategory.salesByCategory_Title,
    SalesCategory.salesByCategoryTitle_staticText,
    sharedContext.page
  );

  await clickElement(
    SalesCategory.salesByCategory_aparrelButton,
    sharedContext.page
  );
  await expectAtributeToBe(
    SalesCategory.salesByCategory_aparrelSection,
    "true",
    sharedContext.page
  );
  await validateElementHaveText(
    SalesCategory.salesByCategory_total,
    SalesCategory.salesByCategory_aparrelStaticText,
    sharedContext.page
  );

  await clickElement(
    SalesCategory.salesByCategory_otherButton,
    sharedContext.page
  );
  await expectAtributeToBe(
    SalesCategory.salesByCategory_othersSection,
    "true",
    sharedContext.page
  );
  await validateElementHaveText(
    SalesCategory.salesByCategory_total,
    SalesCategory.salesByCategory_othersStaticText,
    sharedContext.page
  );

  await clickElement(
    SalesCategory.salesByCategory_sportsButton,
    sharedContext.page
  );
  await expectAtributeToBe(
    SalesCategory.salesByCategory_sportsSection,
    "true",
    sharedContext.page
  );
  await validateElementHaveText(
    SalesCategory.salesByCategory_total,
    SalesCategory.salesByCategory_sportsStaticText,
    sharedContext.page
  );
});

Then("Daily Sales card is visible and correct", async function () {
  await validateElementisVisible(
    DailySales.dailySalesCard_Containter,
    sharedContext.page
  );
  validateElementHaveText(
    DailySales.dailySalesCard_Containter,
    DailySales.dailySalesCardTitle_staticText,
    sharedContext.page
  );
  validateElementisVisible(DailySales.dailySales_graph, sharedContext.page);
  validateElementisVisible(DailySales.dailySales_moneyIcon, sharedContext.page);
});

Then("Summary card is visible and correct", async function () {
  await validateElementisVisible(
    Summary.summaryCardTitle_container,
    sharedContext.page
  );

  validateElementHaveText(
    Summary.summaryCardTitle_Label,
    Summary.summaryCardTitle_staticText,
    sharedContext.page
  );

  validateElementisVisible(Summary.summaryIncome_container, sharedContext.page);
  validateElementisVisible(Summary.summaryIncome_Icon, sharedContext.page);
  validateElementHaveText(
    Summary.summaryIncome_title,
    Summary.summaryIncome_staticText,
    sharedContext.page
  );

  validateElementisVisible(Summary.summaryProfit_container, sharedContext.page);
  validateElementisVisible(Summary.summaryProfit_Icon, sharedContext.page);
  validateElementHaveText(
    Summary.summaryProfit_title,
    Summary.summaryProfit_staticText,
    sharedContext.page
  );

  validateElementisVisible(
    Summary.summaryExpenses_container,
    sharedContext.page
  );
  validateElementisVisible(Summary.summaryExpenses_Icon, sharedContext.page);
  validateElementHaveText(
    Summary.summaryExpenses_title,
    Summary.summaryExpenses_staticText,
    sharedContext.page
  );

  clickElement(Summary.summaryBurger_Button, sharedContext.page);
  validateElementHaveText(
    Summary.summaryBurgerOption_ViewReport,
    Summary.summaryBurgerOption_ViewReportText,
    sharedContext.page
  );
  validateElementHaveText(
    Summary.summaryBurgerOption_EditReport,
    Summary.summaryBurgerOption_EditReportText,
    sharedContext.page
  );
  validateElementHaveText(
    Summary.summaryBurgerOption_DoneReport,
    Summary.summaryBurgerOption_DoneReportText,
    sharedContext.page
  );
});

Then("Total Orders card is visible and correct", async function () {
  await validateElementisVisible(
    TotalOrders.totalOrders_container,
    sharedContext.page
  );
});
