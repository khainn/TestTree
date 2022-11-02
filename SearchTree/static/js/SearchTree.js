const data = [{
        "regionGrpCd": "A",
        "regionGrpNm": "Seoul",
        "createDt": null,
        "updateDt": null,
        "userNo": null,
        "regions": [{
                "regionCd": "2",
                "regionNm": "Songpa-gu",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            },
            {
                "regionCd": "3",
                "regionNm": "Mapo-gu",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            }
        ]
    },
    {
        "regionGrpCd": "B",
        "regionGrpNm": "Gyeonggi",
        "createDt": null,
        "updateDt": null,
        "userNo": null,
        "regions": [{
                "regionCd": "10",
                "regionNm": "Manan-gu",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            },
            {
                "regionCd": "11",
                "regionNm": "Sosa-gu",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            },
            {
                "regionCd": "9",
                "regionNm": "Wonmi-gu",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            }
        ]
    },
    {
        "regionGrpCd": "C",
        "regionGrpNm": "Busan",
        "createDt": null,
        "updateDt": null,
        "userNo": null,
        "regions": [{
                "regionCd": "1",
                "regionNm": "Buk-gu",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            },
            {
                "regionCd": "4",
                "regionNm": "Dong-gu",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            },
            {
                "regionCd": "5",
                "regionNm": "Nam-gu",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            },
            {
                "regionCd": "6",
                "regionNm": "Seo-gu",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            }
        ]
    },
    {
        "regionGrpCd": "D",
        "regionGrpNm": "Incheon",
        "createDt": null,
        "updateDt": null,
        "userNo": null,
        "regions": [{
                "regionCd": "7",
                "regionNm": "Ganghwa-gun",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            },
            {
                "regionCd": "8",
                "regionNm": "Namdong-gu",
                "regionGrpCd": null,
                "createDt": null,
                "updateDt": null,
                "explainText": null,
                "userNo": 0,
                "fileId": 0,
                "edbsregionCd": null
            }
        ]
    }
]


$(document).ready(function() {

    var fromUlId = "ulCity";
    var searchId = "filterInput";
    // var regionCode = "A,B,C,D";


    document.getElementById(fromUlId).innerHTML = showRegionTree(data, fromUlId);
    // document.getElementById(searchId).oninput = function() { handleRegionTree(data, fromUlId, searchId) };

    $("#" + searchId).on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#" + fromUlId + " li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // applyRegionTreeview(regionCode, fromUlId)

    Logic()
})

function Logic() {
    $(".plus").click(function() {
        $(this).toggleClass("minus").siblings("ul").toggle();
    })

    $("input[type=checkbox]").click(function() {
        $(this).siblings("ul").find("input[type=checkbox]").prop('checked', $(this).prop('checked'));

        if ($(this).is(":checked")) {
            $(this).siblings("ul").find("input[type=checkbox]").attr("disabled", true);

        } else {
            $(this).siblings("ul").find("input[type=checkbox]").attr("disabled", false);
        }
    })

    $("input[type=checkbox]").change(function() {
        var sp = $(this).attr("id");
        var sDistrict = "inputDistrict";
        if (sp.substring(0, sDistrict.length) === sDistrict) {
            var ff = $(this).parents("ul[id^=ulDistrict]").attr("id");
            numDistrictTicked = $('#' + ff + ' > li input[type=checkbox]:checked');
            numDistrict = $('#' + ff + ' > li input[type=checkbox]');
            if (numDistrictTicked.length == numDistrict.length) {
                $('#' + ff).siblings("input[type=checkbox]").prop('checked', true);
                for (i = 0; i < numDistrict.length; i++) {
                    $(numDistrict[i]).attr("disabled", true);
                }

                check_fst_lvl(ff);
            } else {
                $('#' + ff).siblings("input[type=checkbox]").prop('checked', false);
                check_fst_lvl(ff);
            }
        }
        var sCity = "inputCity";
        if (sp.substring(0, sCity.length) === sCity) {

            var ss = $(this).parents("ul[id^=ulCity]").attr("id");
            numCityTicked = $('#' + ss + ' > li input[type=checkbox]:checked');
            numCity = $('#' + ss + ' > li input[type=checkbox]');
            if (numCityTicked.length == numCity.length) {
                $('#' + ss).siblings("input[type=checkbox]").prop('checked', true);
                for (i = 0; i < numCity.length; i++) {
                    $(numCity[i]).attr("disabled", true);
                }

                check_fst_lvl(ss);
            } else {
                $('#' + ss).siblings("input[type=checkbox]").prop('checked', false);
                check_fst_lvl(ss);
            }
        }
    })
}

function check_fst_lvl(dd) {
    var ss = $('#' + dd).parent().closest("ul").attr("id");
    numTicked = $('#' + ss + ' > li input[type=checkbox]:checked');
    num = $('#' + ss + ' > li input[type=checkbox]');
    if (numTicked.length == num.length) {
        $('#' + ss).siblings("input[type=checkbox]").prop('checked', true);
        for (i = 0; i < num.length; i++) {
            if ($(num[i]).attr("id") === "c_bs_1") {
                continue;
            }
            $(num[i]).attr("disabled", true);
        }

    } else {
        $('#' + ss).siblings("input[type=checkbox]").prop('checked', false);
    }
}

function pageLoad() {
    $(".plus").click(function() {
        $(this).toggleClass("minus").siblings("ul").toggle();
    })
}


function showRegionTree(data, fromUlId) {
    var regionGrpNm = "regionGrpNm";
    var regionGrpCd = "regionGrpCd";
    var regionNm = "regionNm";
    var regionCd = "regionCd";

    var htmlRetStr = "";

    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        for (var key in obj) {
            if (obj[key] == null) {
                continue;
            }
            if (typeof(obj[key]) == 'object') {
                var Child_obj = obj[key];
                fromUlId = "ulDistrict_" + obj[regionGrpCd];
                htmlRetStr += showRegionTree(Child_obj, fromUlId);
                htmlRetStr += '</ul></li>';
            } else if (key == regionGrpNm) {
                htmlRetStr += "<li id='bf_" + obj[regionGrpCd] + "'>";
                htmlRetStr += "<span class='plus minus'></span>";
                htmlRetStr += "<input id ='inputCity_" + obj[regionGrpCd] + "' type='checkbox' value = '" + obj[regionGrpCd] + "'>";
                htmlRetStr += "<span>" + obj[regionGrpNm] + "</span>";
                htmlRetStr += "<ul id='ulDistrict_" + obj[regionGrpCd] + "' class='inner_ul' style='display:block'>";
            } else if (key == regionNm) {
                htmlRetStr += "<li id='liDistrict_" + obj[regionCd] + "'>";
                htmlRetStr += "<input type='checkbox' id='inputDistrict_" + obj[regionCd] + "' value='" + obj[regionCd] + "'>";
                htmlRetStr += "<span>" + obj[regionNm] + "</span>";
            }
        }
    }
    return (htmlRetStr);
}

function getRegionCodeFromCountry(ulCityId) {

    var regionCode = "";
    var ulCity = document.getElementById(ulCityId);

    // var liList = ulCity.querySelectorAll("li[id^=bf_ulCity]");
    var liList = ulCity.querySelectorAll("li[id^=bf_]");

    for (i = 0; i < liList.length; i++) {
        regionCode += getRegionCodeFromCityLi(liList[i].id);
    }

    regionCode = regionCode.substring(0, regionCode.length - 1); // remove the last ","

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

function applyRegionTreeview(regionCode, parentId) { // "A,11,5,7"

    var parent = document.getElementById(parentId); // ulCity
    var children = parent.querySelectorAll("input");


    var countryCode = ""
    for (var i = 0; i < data.length; i++) {
        countryCode = countryCode + data[i]["regionGrpCd"] + ',';
    }
    countryCode = countryCode.slice(0, countryCode.length - 1)


    if (regionCode.length > 1) {
        if (regionCode === countryCode) { //     verify all checkbox was checked

            var checkboxCountry = $(document).find("input[id=c_bs_1]"); //    id = c_bs_1 
            checkboxCountry.prop('checked', true);

            var checkboxAll = $(document).find("input[type=checkbox]:not([id=c_bs_1])"); //    id != c_bs_1 
            checkboxAll.prop({
                "disabled": true,
                'checked': true
            });

        } else {
            var regionCodeArr = regionCode.split(",");
            for (var i = 0; i < regionCodeArr.length; i++) {
                var code = regionCodeArr[i];
                for (var j = 0; j < children.length; j++) {
                    if (children[j].getAttribute("value") === code) {

                        children[j].setAttribute("checked", true);
                        if (children[j].id.indexOf("inputCity") > -1) {
                            var checkboxDistrict = $(document).find("input[id=inputCity_" + code + "]").siblings("ul").children().find("input[type=checkbox]");
                            checkboxDistrict.prop({
                                "disabled": true,
                                'checked': true
                            })
                        }
                    }
                }
            }
        }
    }
}