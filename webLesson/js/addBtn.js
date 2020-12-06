$(document).ready(function () {
    showBtnAdd();
    $(".btn-add").click(() => {
        showGiveName();
        hideBtnAdd();

        $(".btn-add-section").click(() => {
            let numIdNewSection = $(".content--text__item").length;
            $(".for__link").before('<div class="content--text__item" id = "'+ numIdNewSection +'" >x</div>')
        })
    })   
})

function showBtnAdd() {
    $(".for__link").before('<div class="btn__wrapper"><button class="btn btn-add">добавить раздел</button>  </div>');
    $(".step__chapter").after('<div class="btn__wrapper"><a href = "#endDocument" class="btn btn-add">добавить раздел</a>  </div>');
}

function hideBtnAdd() {
    $(".btn-add").remove();
}

function showGiveName() {
    $(".for__link").before('<div class="give-name"> <input id = "add-name" placeholder = "введите название раздела" type="text" class="name-new-section"></input> <div class="btn__wrapper"> <button  ton class="btn btn-add-section">добаить</button></div><div class="btn__wrapper"><button class="btn btn-cancel">отмена</button></div></div>');
}

function hideGiveName() {
    $(".give-name").remove();
}

