require "capybara"
require "capybara/cucumber"
require "httparty"
require "pry"
require "rspec"
require "faker"
require "selenium-webdriver"
require "capybara/rspec/matchers"
require "selenium-webdriver"
require "site_prism"
require "rspec"
#require "rspec/retry"

# Alterando algumas configurações padrao
Capybara.configure do |config|
  config.default_driver = :selenium_chrome
  config.default_max_wait_time = 15
  config.app_host = "http://localhost:3000" #https://ecommerce-web.azurewebsites.net
end
