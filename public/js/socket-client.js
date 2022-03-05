//referencias del HTML
const lblOnline    = document.querySelector('#lblOnline')
const lblOffline   = document.querySelector('#lblOffline')
const textMensajes = document.querySelector('#textMensajes')
const btnEnviar    = document.querySelector('#btnEnviar')
const socket       = io()
socket.on('connect', ()=>{
    lblOffline.style.display = 'none'
    lblOnline.style.display = '' 
   // console.log('socket conectado')
})
socket.on('disconnect', ()=>{
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
    //console.log('socket desconectado')
})
socket.on('enviar-mensaje', (payload)=>{
    
    console.log(payload)
})
btnEnviar.addEventListener('click', ()=>{
    const mensaje = textMensajes.value
    const payload = {
        mensaje,
        id:'123ABC',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje',payload, (id)=>{
          //  console.log('desde el server...', id)
            //console.log('desde el server', payload)
        }
    )
    
})