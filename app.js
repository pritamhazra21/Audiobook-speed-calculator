

document.getElementById("myBtn").addEventListener("click", function () {
    var hr = document.getElementById("hr").value;
    var min = document.getElementById("min").value;
    var speed = document.getElementById("speed").value;
    hr = parseInt(hr)
    min = parseInt(min)
    speed = parseFloat(speed)
    min = hr*60 + min
    result = min / speed
    result = parseInt(result)

    hr = parseInt(result/60);
    min = result%60;

    let text = hr.toString() + " hr " + min.toString() + " min"
    // console.log(hr)
    console.log(text)
    document.getElementById("result").defaultValue = text;
})

