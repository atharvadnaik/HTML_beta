function fn(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Want to see my python repository?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'Maybe Later',
        reverseButtons: false,
        allowOutsideClick: false
    }).then((result) => {
        if (result.value) {
            swalWithBootstrapButtons.fire({
                confirmButtonText: '<a href="https://atharvadnaik.github.io/BasicPython3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Confirm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>'+
                         '<style> a { color: white; text-decoration: none; } </style>',
                footer: 'Click on confirm to proceed',
                showCancelButton: true,
                type: 'warning',
                allowOutsideClick: false
            })
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Have A good Day!'
            )
        }
    })
}