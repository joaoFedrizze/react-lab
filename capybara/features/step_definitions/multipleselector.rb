multipleselector_page = MultipleSelector.new

Entao('o usuario vai selecionar botao por botao e o valor sera alterado') do
    multipleselector_page.visit("/capybaramultpleelements")

    multipleselector_page.find_all('.alpha')[0].click
    expect(multipleselector_page).to have_selector('p', text: 'O valor é 1')

    multipleselector_page.find_all('.alpha')[1].click
    expect(multipleselector_page).to have_selector('p', text: 'O valor é 2')

    multipleselector_page.find_all('.alpha')[2].click
    expect(multipleselector_page).to have_selector('p', text: 'O valor é 3')


end