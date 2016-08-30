$(document).ready(function() {
    var i = 0;
    $("#cmd0").focus();
    $(".cmd").keydown(function(e) {
        if (e.keyCode == 13) {
        	e.preventDefault();
            i++;
            var text = '<li>aman@aman-pc:~$ <input type="text" class="cmd" id="cmd' + i + '"></li>';
            $("#command_line").append(text);
            var selector = "#cmd" + i;
            $(selector).focus();
        }
    })
});