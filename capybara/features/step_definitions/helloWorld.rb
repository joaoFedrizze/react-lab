helloWorld_page = HelloWorld.new

Dado('que o usuario clicou no link de pagina perdida') do
    helloWorld_page.visit('/')
    helloWorld_page.find('a', text: 'localhost3000/somethingelse').click    
end

Entao('uma pagina com a mensagem {string} aparecera') do |mensagem|
    expect(helloWorld_page).to have_selector('h1', text: mensagem)
end