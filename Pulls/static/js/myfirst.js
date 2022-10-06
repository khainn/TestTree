$(document).ready(function () {

    $(".plus").click(function () {
        $(this).toggleClass("minus").siblings("ul").toggle();
    })

    $("input[type=checkbox]").click(function () {
        //alert($(this).attr("id"));
        //var sp = $(this).attr("id");
        //if (sp.substring(0, 4) === "c_bs" || sp.substring(0, 4) === "c_bf") {
            $(this).siblings("ul").find("input[type=checkbox]").prop('checked', $(this).prop('checked'));
        //}
    })

    $("input[type=checkbox]").change(function () {
        var sp = $(this).attr("id");
        if (sp.substring(0, 4) === "c_io") {
            var ff = $(this).parents("ul[id^=bf_l]").attr("id");
            if ($('#' + ff + ' > li input[type=checkbox]:checked').length == $('#' + ff + ' > li input[type=checkbox]').length) {
                $('#' + ff).siblings("input[type=checkbox]").prop('checked', true);
                check_fst_lvl(ff);
            }
            else {
                $('#' + ff).siblings("input[type=checkbox]").prop('checked', false);
                check_fst_lvl(ff);
            }
        }

        if (sp.substring(0, 4) === "c_bf") {
            var ss = $(this).parents("ul[id^=bs_l]").attr("id");
            if ($('#' + ss + ' > li input[type=checkbox]:checked').length == $('#' + ss + ' > li input[type=checkbox]').length) {
                $('#' + ss).siblings("input[type=checkbox]").prop('checked', true);
                check_fst_lvl(ss);
            }
            else {
                $('#' + ss).siblings("input[type=checkbox]").prop('checked', false);
                check_fst_lvl(ss);
            }
        }
    });

    // add region:
    function addDistrictLi(fromUlId, idx, regionName) {
        var li = document.createElement("li");
        li.id = "io_" + fromUlId + idx;
        // input tag
        var input = document.createElement("input");
        input.type = "checkbox";
        input.id = "ci_io_" + fromUlId + idx;
        // span tag:
        var span = document.createElement("span");
        span.textContent = regionName + idx;

        li.appendChild(input);
        li.appendChild(span);
        return li;
    }

    function addDistrictLiListFromUl(fromUlId, list) {
        var ul = document.getElementById(fromUlId);
        for (let i = 0; i < list.length; i++) {
            var regionName = "region name"; // get name from list
            ul.appendChild(addDistrictLi(fromUlId, i.toString(), regionName));
        }
    }

    function addCityLi(fromUlId, idx, cityObject) {
        var parentUl = document.getElementById(fromUlId);

        var parentLi = document.createElement("li");
        parentLi.id = "bf_" + fromUlId + idx;

        parentUl.appendChild(parentLi);


        var spanIcon = document.createElement("span");
        spanIcon.setAttribute("class", "plus minus");

        var input = document.createElement("input");
        input.type = "checkbox";
        input.id = "c_bf_" + fromUlId + idx;

        var spanText = document.createElement("span");
        spanText.textContent = cityObject.name;

        var childUl = document.createElement("ul");
        childUl.id = "bf_l_" + fromUlId + idx;
        childUl.setAttribute("class", "inner_ul");

        parentLi.appendChild(childUl);

        addDistrictLiListFromUl(childUl.id, cityObject.districtLiList);

        parentLi.appendChild(spanIcon);
        parentLi.appendChild(input);
        parentLi.appendChild(spanText);
        parentLi.appendChild(childUl);

        parentUl.appendChild(parentLi);

    }

    function addCityLiListFromUl(fromUlId, cityObjectList) {
        var ul = document.getElementById(fromUlId);
        for (let i = 0; i < cityObjectList.length; i++) {
            ul.append(addCityLi(fromUlId, i.toString(), cityObjectList[i]));
        }
    }
    
    // test
    const regionList = [ "A", "B", "C"];

    /*addLiListFromUl("bf_l_4", regionList);*/
    let hanoi = {
        name :"HA NOI",
        districtLiList : regionList
    };
     let saigon = {
         name :"SAI GON",
         districtLiList : regionList
     }

     let cityList = [hanoi, saigon];

/*      addCityLi("bs_l_1", "5", cityObject);*/

    addCityLiListFromUl("bs_l_2", cityList);


})

function check_fst_lvl(dd) {
    //var ss = $('#' + dd).parents("ul[id^=bs_l]").attr("id");
    var ss = $('#' + dd).parent().closest("ul").attr("id");
    if ($('#' + ss + ' > li input[type=checkbox]:checked').length == $('#' + ss + ' > li input[type=checkbox]').length) {
        //$('#' + ss).siblings("input[id^=c_bs]").prop('checked', true);
        $('#' + ss).siblings("input[type=checkbox]").prop('checked', true);
    }
    else {
        //$('#' + ss).siblings("input[id^=c_bs]").prop('checked', false);
        $('#' + ss).siblings("input[type=checkbox]").prop('checked', false);
    }

}

function pageLoad() {
    $(".plus").click(function () {
        $(this).toggleClass("minus").siblings("ul").toggle();
    })
}