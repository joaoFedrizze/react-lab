fileupload_page = FileUpload.new

Dado('usuario acessou a pagina e envio um arquivo') do
    
    fileupload_page.visit("/capybarauploadfile")

    fileupload_page.upload_input.attach_file('assets/asset_fileupload.jpg')

    sleep 5
end