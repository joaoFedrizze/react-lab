diferenceofselectors_page = DiferenceOfSelectors.new

Dado('usuario realizou busca entre find e expected') do       

    diferenceofselectors_page.visit("/CapybaraDiferenceOfSelectors")

    #Seletor find
    diferenceofselectors_page.find('p', text: 'Elemento p com algum texto simples', class: 'separator')

    #Seletor expected
    expect(diferenceofselectors_page).to have_text('Elemento p com algum texto simples')

end