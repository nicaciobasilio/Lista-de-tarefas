$(document).ready(function(){

    $('#botao').click(function(event){
        event.preventDefault();
        let input = $("#inserir-tarefas");
        let li = $("<li />").html(input.val());
        $('#lista').append(li);
        $('#inserir-tarefas').val("");
        
        clicarTarefa();
        clicarDuas();
    });

    function clicarTarefa() {
        $('li').click(function(event){
            $(this).css("text-decoration", "line-through")
    }); 
    }

});