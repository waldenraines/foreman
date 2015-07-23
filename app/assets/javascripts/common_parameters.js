var Editor;

$(document).on('ContentLoad', load_editor);

function load_editor(){
    var template_text = $(".template_text");

    if (template_text.length > 0) {
        create_param_editor(template_text)
    }
}

function create_param_editor(item) {
    var value = item.val();

    console.log("create editor");
    item.parent().prepend("<div id='editor2'></div>");
    //item.hide();

    Editor = ace.edit("editor2");
    Editor.setShowPrintMargin(false);
    Editor.renderer.setShowGutter(false);
    $(document).on('resize','#editor2', function(){Editor.resize()});
    if (item.is(':disabled')) {
        $('.ace_text-input').attr('disabled', true)
    }

    Editor.setTheme("ace/theme/twilight");
    Editor.setReadOnly(false);
    var session = Editor.getSession();
    session.setMode("ace/mode/ruby");

    console.log(value);

    session.setValue(value);

    session.on('change', function(){
        item.text(session.getValue());
    });
}

