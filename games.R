# load required packages
library(tidyverse)
library(gganimate)

# load data
games <- read_csv("data/vgsales-12-4-2019.csv")

# initial processing
games <- games %>%
  mutate(sales = case_when(!is.na(Total_Shipped) ~ Total_Shipped,
                           TRUE ~ Global_Sales),
         img_url_full = paste0("http://www.vgchartz.com/",img_url))

write_csv(games, "data/games_edit.csv", na = "")

# how many of each category?
unique(games$Genre) # 20
unique(games$Platform) # 74
unique(games$Publisher) # 3068

# data to make join tables for simplification of categories
sales_genre <- games %>%
  group_by(Genre) %>%
  summarize(sales = sum(sales, na.rm = TRUE)) %>%
  arrange(desc(sales))
write_csv(sales_genre, "data/sales_genre.csv", na = "")

sales_platform <- games %>%
  group_by(Platform) %>%
  summarize(sales = sum(sales, na.rm = TRUE)) %>%
  arrange(desc(sales))
write_csv(sales_platform, "data/sales_platform.csv", na = "")

sales_publisher <- games %>%
  group_by(Publisher) %>%
  summarize(sales = sum(sales, na.rm = TRUE)) %>%
  arrange(desc(sales))
write_csv(sales_publisher, "data/sales_publisher.csv", na = "")






