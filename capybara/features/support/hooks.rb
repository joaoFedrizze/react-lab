Before do |feature|
  if @mobile
    page.driver.browser.manage.window.resize_to(440, 990)
  else
    page.driver.browser.manage.window.maximize
  end
end

After do |scenario|
  # Do something after each scenario.
  if scenario.failed?
    $encoded_img = page.driver.browser.screenshot_as(:base64)
    embed("data:image/png;base64,#{$encoded_img}",'image/png')
  end
end