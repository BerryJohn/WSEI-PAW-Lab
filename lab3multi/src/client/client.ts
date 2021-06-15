export const client = () => {

    let socket = new WebSocket("ws://localhost:8080");

    socket.onopen = function(e) {
        socket.send("Hello!");
    };

}