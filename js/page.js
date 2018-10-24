$(document).ready(function () {

    $(".GoClass").click(function () {
        if ($(".PageInput").val() != "") {
            if (isNaN($(".PageInput").val())) {
                alert("ÊäÈëÒ³Êı´íÎó/Input Error Pages");
                return;
            }
 
            if (parseInt($(".PageInput").val()) > parseInt($(".MaxPage").text())) {
                alert("ÊäÈëÒ³Êı´íÎó/Input Error Pages");
                return;
            }
            if (parseInt($(".PageInput").val()) <= 0) {
                alert("ÊäÈëÒ³Êı´íÎó/Input Error Pages");
                return;
            }
            if (Math.ceil($(".PageInput").val()) != parseInt($(".PageInput").val())) {
                alert("ÊäÈëÒ³Êı´íÎó/Input Error Pages");
                return;
            }
            var pathUrl = window.location.pathname;
            var lastIndexOf1 = pathUrl.lastIndexOf("_");
            var lastIndexOf2 = pathUrl.lastIndexOf(".");

            var partUrl1 = pathUrl.substring(0, lastIndexOf1 + 1);
            var partUrl2 = pathUrl.substring(lastIndexOf2);

            window.location.href = partUrl1 + $(".PageInput").val() + partUrl2;
        }

    });
});