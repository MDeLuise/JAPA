function display(secName) {
    $(".menu-body").css("display", "none")
    $("#menu-sec-" + secName).css("display", "initial")
    $("button").removeClass("btn-selected")
    $("#" + secName + "-btn").addClass("btn-selected")
}

$(document).ready(function() {
    $("#fake-long-interval").on('change', () => {
        var insertedVal = $("#fake-long-interval").val()
        if (! /^\d+$/.test(insertedVal)) {
            $("#fake-long-interval").val(4)
        }
        // below not working, even if whould be the correct way...
        //$("#real-long-interval").val(insertedVal).trigger("input")
        vm.$data.fullCycle = parseInt($("#fake-long-interval").val())
    })

    //$("#carousel").css("width", "305px") // (61 * vm.$data.phasesDisplayed)
    //$("#name").css("width", $("#carousel").css("width"))
})