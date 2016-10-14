$(document).ready(function() {
    var i = 0;
    $("#cmd0").focus();
    $("body").on('keydown', '.cmd',function(e) {
        if (e.keyCode == 13) {
        	e.preventDefault();
            var id_old = "#cmd"+i;
            $(id_old).attr('readonly', true);
            var child_process = require('child_process');

            function getChildProcessData(){
                var child_process_exec = $(id_old).val();
                return child_process_exec;
            }
            var output = child_process.execSync(getChildProcessData());
            var text = '<li>'+output+'</li>';
            $("#command_line").append(text);


            i++;
            var text = '<li>shell: <input type="textarea" class="cmd" id="cmd' + i + '"></li>';
            $("#command_line").append(text);
            var selector = "#cmd" + i;
            $(selector).focus();
        }
    })
});