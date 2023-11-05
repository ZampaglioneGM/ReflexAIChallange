export const salesByCategory_Title: string = "(//div[contains(@class,'mb-5 flex')]//h5)[2]";
export const salesByCategoryTitle_staticText: string = "Sales By Category";
export const salesByCategory_Containter: string =
  "(//div[contains(@class,'panel h-full')]/following-sibling::div)[1]";

export const salesByCategory_graph: string= "(//div[@class='panel h-full']//div)[2]"

export const salesByCategory_aparrelSection: string= ".apexcharts-donut-slice-0"
export const salesByCategory_othersSection: string= '.apexcharts-donut-slice-2'
export const salesByCategory_sportsSection: string= '.apexcharts-donut-slice-1'

export const salesByCategory_aparrelButton :string = "//span[text()='Apparel']";
export const salesByCategory_otherButton :string = "//span[text()='Others']";
export const salesByCategory_sportsButton :string = "//span[text()='Sports']";

export const salesByCategory_total :string =  ".apexcharts-datalabel-label:first-child";
export const salesByCategory_aparrelStaticText :string =  "Apparel";
export const salesByCategory_othersStaticText :string =  "Others";
export const salesByCategory_sportsStaticText :string =  "Sports";