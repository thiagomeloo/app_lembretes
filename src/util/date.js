const data = {

    getCurrentData() {
        
        dia = new Date().getDate()
        mes = new Date().getMonth() + 1
        ano = new Date().getFullYear()

        hora = new Date().getHours()
        min = new Date().getMinutes()
        seg = new Date().getSeconds()
  
        return dia + '/' + mes + '/' + ano + ' ' + hora + ':' + min + ':' + seg
    },
}


export default data