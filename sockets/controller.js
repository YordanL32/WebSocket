const socketController = (socket) => {
      console.log('a user connected',socket.id);
       socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
      }); 
      socket.on('enviar-mensaje', (payload , callback) => {//escucha evento del cliente
         // console.log(payload)        
          
          const id = 123456
          callback({id, fecha: new Date().getTime()})
          socket.broadcast.emit('enviar-mensaje', payload)//emite evento al cliente
        }); 
    }
module.exports = {
    socketController
}