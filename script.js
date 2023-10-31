function generateNumber() {

    const min = Math.ceil(document.querySelector('.initial').value)
    const max = Math.floor(document.querySelector('.final').value)

    const result = Math.floor(Math.random()* (max -min + 1)) + min;


    alert(result)


}
