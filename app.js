$('#btn1').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btn2').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btn3').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btn4').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btn5').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btn6').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btn7').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btn8').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btn9').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btn0').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btnAdd').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btnSub').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btnMul').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btnDiv').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btnSine').on('click', function() {
    console.log(this.value)
    $('#display').append(this.value)
})

$('#btnCE').on('click', function() {
   $('#display').empty()
})

$('#btnEqual').on('click', function() {
    var result = $('#display').text()
    result = eval(result)
    $('#display').empty()
    $('#display').append(result)

})