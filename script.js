

function entersite() {
    $("#landing").css("transform", "translate(-200vw)");
    $("#dimmed-bg").css("visibility", "visible");
    $("#dimmed-bg").css("transform", "translate(0)");
    $("#above-fold").css("opacity", "1");
    $("#full-site").css("visibility", "visible");
    $("#full-site").css("overflow", "visible");
    $("#full-site").css("max-height", "auto");
    $("#register-side-bar").css("transform", "translate(0)");
}


$("#visible-section").mouseenter(function () { openform(); });
$("#empty-section").mouseenter(function () { closeform(); });
$("#form-section").mouseleave(function () { closeform(); });

function openform() {
    $("#register-side-bar").css("transform", "translate(-650px)");
    $("#register-side-bar").css("transition-delay", "0s");
    $("#register-side-bar").css("z-index", "100");

    $("#call-num").css("opacity", "0");
    $("#reg").css("opacity", "0");
}

function closeform() {
    $("#register-side-bar").css("transform", "translate(0)");
    $("#register-side-bar").css("z-index", "0");
    $("#call-num").css("opacity", "1");
    $("#reg").css("opacity", "1");
}


(function managetotalusers() {

    let totalusers = String(getrandom(100000, 200000));
    totalusers = addcomma(totalusers);

    addtototalusers(totalusers);

    function addtototalusers(currentvalue) {
        let num = Number(currentvalue.replace(",", ""));
        num++;
        num = String(num);
        num = addcomma(num);
        $("#total-users").html(num);
        setTimeout(function () {
            addtototalusers(num);
        }, getrandom(100, 2000));
    }

    function getrandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function addcomma(num) {
        return num.slice(0, 3) + "," + num.slice(3, 6);
    }

})();
