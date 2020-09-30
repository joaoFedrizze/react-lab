class CapybaraFaker < SitePrism::Page

    #Campos do formulario
    element :submit_field, "#submitform"
    element :field_a, "#field_A"
    element :field_b, "#field_B"
    element :field_c, "#field_C"

    #Texto apresentado
    element :text_content, "#replacetext"

end