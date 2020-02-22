const socket = io("http://localhost:3000");
socket.on("serverSendData", function (data) {
    //adddata(data);
});
$(document).ready(function () { 
    adddata();
});