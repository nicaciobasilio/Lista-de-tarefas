$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const inputNomeTarefa = $('#inserir-tarefas').val();
        const novaTarefa = $('<li style= "text-decoration: none"></li>');
        $($(inputNomeTarefa)).appendTo(novaTarefa);

        $(novaTarefa).appendTo('li');

        $('#inserir-tarefas').val('');
    })

})

