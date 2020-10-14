capybarafaker_page = CapybaraFaker.new

#Textos
texto_a = Faker::Verb.base
texto_b = Faker::Name.unique.name 
texto_c = Faker::Movies::StarWars.character

Dado('que o usuario preencheu os campos do formuario') do
    
    capybarafaker_page.visit("/capybarafaker")

    capybarafaker_page.field_a.set(texto_a)
    capybarafaker_page.field_b.set(texto_b)
    capybarafaker_page.field_c.set(texto_c)
end

Entao('ele realizara um submit') do
    capybarafaker_page.submit_field.click 
end

Entao('verificara se os valores correspondem com os capos inseridos') do
    expect(capybarafaker_page).to have_selector('p', text: texto_a)
    expect(capybarafaker_page).to have_selector('p', text: texto_b)
    expect(capybarafaker_page).to have_selector('p', text: texto_c)

    log("Os campos resultados foram [#{texto_a}, #{texto_b}, #{texto_c}]")
end