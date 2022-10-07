$(document).ready(function() {

    // test
    let namTuLiem = {
        code: "A",
        name: "Nam Tu Liem"
    };
    let longBien = {
        code: "B",
        name: "Long Bien"
    };
    const hanoiList = [namTuLiem, longBien];

    let quan1 = {
        code: "C",
        name: "Quan 1"
    };

    let quan7 = {
        code: "D",
        name: "Quan 7"
    };
    let quan12 = {
        code: "E",
        name: "Quan 12"
    };

    const saigonList = [quan1, quan7, quan12];

    let hanoi = {
        code: "F",
        name: "Ha Noi",
        districtLiList: hanoiList
    };

    let saigon = {
        code: "G",
        name: "Sai Gon",
        districtLiList: saigonList
    };

    let cityList = [hanoi, saigon];



    $(".plus").click(function() {
        $(this).toggleClass("minus").siblings("ul").toggle();
    })

    $("input[type=checkbox]").click(function() {
        //alert($(this).attr("id"));
        //var sp = $(this).attr("id");
        //if (sp.substring(0, 4) === "c_bs" || sp.substring(0, 4) === "c_bf") {
        $(this).siblings("ul").find("input[type=checkbox]").prop('checked', $(this).prop('checked'));
        //}
    })

    $("input[type=checkbox]").change(function() {
        var sp = $(this).attr("id");
        if (sp.substring(0, 4) === "c_io") {
            var ff = $(this).parents("ul[id^=bf_l]").attr("id");
            if ($('#' + ff + ' > li input[type=checkbox]:checked').length == $('#' + ff + ' > li input[type=checkbox]').length) {
                $('#' + ff).siblings("input[type=checkbox]").prop('checked', true);
                check_fst_lvl(ff);
            } else {
                $('#' + ff).siblings("input[type=checkbox]").prop('checked', false);
                check_fst_lvl(ff);
            }
        }

        if (sp.substring(0, 4) === "c_bf") {
            var ss = $(this).parents("ul[id^=bs_l]").attr("id");
            if ($('#' + ss + ' > li input[type=checkbox]:checked').length == $('#' + ss + ' > li input[type=checkbox]').length) {
                $('#' + ss).siblings("input[type=checkbox]").prop('checked', true);
                check_fst_lvl(ss);
            } else {
                $('#' + ss).siblings("input[type=checkbox]").prop('checked', false);
                check_fst_lvl(ss);
            }
        }
    });
    /*parent ul*/
    addCityLiListFromUl("ulCity_1", cityList);
})

function addDistrictLiListFromUl(fromUlId, list) {
    var ul = document.getElementById(fromUlId);
    for (let i = 0; i < list.length; i++) {
        // get name from list
        ul.appendChild(addDistrictLi(fromUlId, i.toString(), list[i]));
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
    input.id = "inputCity_" + fromUlId + idx;
    input.setAttribute("value", cityObject.code);


    var spanText = document.createElement("span");
    spanText.textContent = cityObject.name;


    var childUl = document.createElement("ul");
    childUl.id = "ulDistrict_" + fromUlId + idx;
    childUl.setAttribute("class", "inner_ul");

    parentLi.appendChild(childUl);

    addDistrictLiListFromUl(childUl.id, cityObject.districtLiList);

    parentLi.appendChild(spanIcon);
    parentLi.appendChild(input);
    parentLi.appendChild(spanText);
    parentLi.appendChild(childUl);

    parentUl.appendChild(parentLi);
}

// add region:
function addDistrictLi(fromUlId, idx, regionObject) {
    var li = document.createElement("li");
    li.id = "io_" + fromUlId + idx;
    // input tag
    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = "inputDistrict_" + fromUlId + idx;
    input.setAttribute("value", regionObject.code);


    // span tag:
    var span = document.createElement("span");
    span.textContent = regionObject.name;


    li.appendChild(input);
    li.appendChild(span);
    return li;
}

function addCityLiListFromUl(fromUlId, cityObjectList) {
    var ul = document.getElementById(fromUlId);
    for (let i = 0; i < (cityObjectList.length); i++) {
        ul.append(addCityLi(fromUlId, i.toString(), cityObjectList[i]));
    }
}

function getDistrictRegionCode(inputParentCode, ulParent) {
    var regionCode = "";
    var inputList = ulParent.querySelectorAll("input");
    var cnt = 0;
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].checked) {
            regionCode += inputList[i].value + ",";
            cnt++;
        }
    }


    if (cnt === inputList.length) return inputParentCode + ",";

    return regionCode;
}

function getRegionCodeFromCityLi(liId) { // liId = bf_ulCity_11
    var cityLi = document.getElementById(liId);

    var inputCity = cityLi.querySelector("input[id^=inputCity]");
    var cityCode = inputCity.value; // get city code

    var ulParent = cityLi.querySelector("ul[id^=ulDistrict]");

    var districtRegionCode = getDistrictRegionCode(cityCode, ulParent);

    console.log(districtRegionCode);
    return districtRegionCode;

}

function getRegionCodeFromCountry(ulCityId) { // for loop with <li> tag

    var regionCode = "";
    var ulCity = document.getElementById(ulCityId);

    var liList = ulCity.querySelectorAll("li[id^=bf_ulCity]");

    for (i = 0; i < liList.length; i++) {
        regionCode += getRegionCodeFromCityLi(liList[i].id);
    }

    regionCode = regionCode.substring(0, regionCode.length - 1);

    return regionCode;

}