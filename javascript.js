$(document).ready(function() {
    var i = 0;
    $("#cmd0").focus();
    $("body").on('keydown', '.cmd',function(e) {
        if (e.keyCode == 13) {
        	e.preventDefault();
            var id_old = "#cmd"+i;
            $(id_old).attr('readonly', true);

            function getChildProcessData(){
                var child_process_exec = $(id_old).val();
                return child_process_exec;
            }

            $.ajax({
                url:"/child_process",
                data: getChildProcessData(),
                type:"POST",
                async:true,
                success: function(data){
                    
                }
            });

            i++;
            var text = '<li>aman@aman-pc:~$ <input type="textarea" class="cmd" id="cmd' + i + '"></li>';
            $("#command_line").append(text);
            var selector = "#cmd" + i;
            $(selector).focus();
        }
    })
});