textWrap_page = TextWrap.new

Entao('sera buscado o texto com quebra de linhas') do
    
    textWrap_page.visit("/capybaraprewrap")

    expect(textWrap_page).to have_selector('p', text: /Algum\s+texto\s+dentro de elemento P/)
    
end