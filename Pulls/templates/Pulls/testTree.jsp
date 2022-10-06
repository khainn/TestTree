
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
{% load static %}

<link rel="stylesheet" href="{% static 'css/tree.css' %}">
<script src="{% static 'js/myfirst.js' %}" type="text/javascript" ></script>

<body>
    <div class="exclaim">Tree Select</div>
    <div class="container-tree">

        <div>
            <input class="search-bar" type="search" placeholder="Search...">
        </div>

        <div class="tree_main">
            <ul id="bs_main" class="main_ul">
                <li id="bs_1">
                    <span class="plus minus">&nbsp;</span>
                    <input type="checkbox" id="c_bs_1">
                    <span>Korea </span>
                    <ul id="bs_l_1" class="sub_ul" style="display: none">
                        <li id="bf_1">
                            <span class="plus minus">&nbsp;</span>
                            <input type="checkbox" id="c_bf_1">
                            <span>Seoul</span>
                            <ul id="bf_l_1" style="display: none" class="inner_ul">
                                <li id="io_1">
                                    <input type="checkbox" name = "last" id="c_io_1"><span>Last Level 1 </span></li>
                                <li id="io_2">
                                    <input type="checkbox" name = "last" id="c_io_2"><span>Last Level 2 </span></li>
                                <li id="io_3">
                                    <input type="checkbox" name = "last" id="c_io_3"><span>Last Level 3 </span></li>
                                <li id="io_4">
                                    <input type="checkbox" name = "last" id="c_io_4"><span>Last Level 4 </span></li>
                            </ul>
                        </li>
                        <li id="bf_2">
                            <span class="plus minus">&nbsp;</span>
                            <input type="checkbox" id="c_bf_2">
                            <span>Incheon</span>
                            <ul id="bf_l_2" style = "display: none" class="inner_ul">
                                <li id="io_5">
                                    <input type="checkbox" id="c_io_5"><span>Last Level 5 </span></li>
                                <li id="io_6">
                                    <input type="checkbox" id="c_io_6"><span>Last Level 6 </span></li>
                                <li id="io_7">
                                    <input type="checkbox" id="c_io_7"><span>Last Level 7 </span></li>
                                <li id="io_8">
                                    <input type="checkbox" id="c_io_8"><span>Last Level 8 </span></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li id="bs_2">
                    <span class="plus">&nbsp;</span>
                    <input type="checkbox" id="c_bs_2">
                    <span>Viet Nam </span>
                    <ul id="bs_l_2" style="display: none" class="sub_ul">
                    <li id="bf_3">
                        <span class="plus minus">&nbsp;</span>
                        <input type="checkbox" id="c_bf_3">
                        <span>Gyeonggi </span>
                        <ul id="bf_l_3" style="display: none" class="inner_ul">
                            <li id="io_9">
                                <input type="checkbox" id="c_io_9"><span>Last Level 9 </span></li>
                            <li id="io_10">
                                <input type="checkbox" id="c_io_10"><span>Last Level 10 </span></li>
                            <li id="io_11">
                                <input type="checkbox" id="c_io_11"><span>Last Level 11 </span></li>
                            <li id="io_12">
                                <input type="checkbox" id="c_io_12"><span>Last Level 12 </span></li>
                        </ul>
                    </li>
                    <li id="bf_4">
                        <span class="plus minus">&nbsp;</span>
                        <input type="checkbox" id="c_bf_4">
                        <span>Sub Level 4 </span>
                        <ul id="bf_l_4" style="display: none" class="inner_ul">
                            <li id="io_13">
                                <input type="checkbox" id="c_io_13"><span>Last Level 13 </span></li>
                            <li id="io_14">
                                <input type="checkbox" id="c_io_14"><span>Last Level 14 </span></li>
                            <li id="io_15">
                                <input type="checkbox" id="c_io_15"><span>Last Level 15 </span></li>
                            <li id="io_16">
                                <input type="checkbox" id="c_io_16"><span>Last Level 16 </span></li>
                        </ul>
                    </li>
                </li>
            </ul>
        </div>
    </div>

<script type="text/javascript">
    $(document).ready(function () {

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


        /*createNewLiWithIcon("bf_4", "4", "Hai Duong", "inner_ul", regionList);*/

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


    })

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


</script>


<!-- <script type="text/javascript" src="<c:url value='/resources/js/languages.js'/>"></script> -->
</body>
</html>
