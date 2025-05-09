function submit(event) {
    event.preventDefault();
    let name = document.getElementById('nome').value;
    let type = document.getElementById('tipo').value;
    let comments = document.getElementById('comentarios').value;
    console.log(`Nome ${name}`)
    console.log(`Tipo do dado: ${type}`);
    console.log(`Comentário: ${comments}`);
    alert('enviado!!')
}


document.getElementById('formulario').addEventListener('submit', submit);