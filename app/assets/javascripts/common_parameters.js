$(document).on('ContentLoad', load_param_editor);

function load_param_editor(){
    var template_text = $(".param_text");

    if (template_text.length > 0) {
        create_param_editor(template_text)
    }
}

function create_param_editor(item) {
    var session, ParamEditor,
        value = item.val();

    item.parent().prepend("<div id='param_editor'></div>");
    item.hide();

    ParamEditor = ace.edit("param_editor");
    ParamEditor.setShowPrintMargin(false);
    ParamEditor.renderer.setShowGutter(false);

    $(document).on('resize','#param_editor', function(){ParamEditor.resize()});
    if (item.is(':disabled')) {
        $('.ace_text-input').attr('disabled', true)
    }

    ParamEditor.setTheme("ace/theme/twilight");
    ParamEditor.setReadOnly(false);

    session = ParamEditor.getSession();
    session.setMode("ace/mode/ruby");

    session.setValue(value);

    session.on('change', function(){
        item.text(session.getValue());
    });
}

