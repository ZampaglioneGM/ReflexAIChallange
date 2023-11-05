export const revenueCard_Title: string = '//h5[text()="Revenue"]';
export const revenueCardTitle_staticText: string = "Revenue";
export const revenueCard_Containter: string =
  '(//div[contains(@class,"mb-6 grid")]//div)[1]';

export const revenueCard_graph: string =
  "//p[@class='text-lg dark:text-white-light/90']/following-sibling::div[1]";

export const revenueCardTotalProfit_Label: string =
  "//div[contains(@class,'mb-5 flex')]/following-sibling::p[1]";
export const revenueCardProfit_staticText: string = "Total Profit $10,840";

export const revenueCardIncome_Label: string = "(//span[@i='0'])[1]";
export const revenueCardIncome_staticText: string = "Income";

export const revenueCardExpenses_Label: string = "(//span[@i='1'])[1]";
export const revenueCardExpenses_staticText: string = "Expenses";
