window.onload = function () {
    let search = document.getElementById('search');
    let result = document.getElementById('result');
    let resultList = document.getElementById('resultList');
    let placeholder = document.getElementById('placeholder');
    let list = [];

    // Set focus on the search bar
    search.focus();

    search.addEventListener("keyup", function (event) {
        // console.log(event.key);

        // Action
        switch (event.key) {
            case "Enter":
                $('.active')[0].click();
                break;

            case "ArrowDown":
                if ($('.active').next().hasClass("collection-item")) {
                    $('.active').removeClass("active").next().addClass("active");
                }
                break;

            case "ArrowUp":
                if ($('.active').prev().hasClass("collection-item")) {
                    $('.active').removeClass("active").prev().addClass("active");
                }
                break;

            default:
                break;
        }

    });

    search.addEventListener('input', function (e) {
        const options = {
            // isCaseSensitive: false,
            // includeScore: false,
            // shouldSort: true,
            // includeMatches: false,
            // findAllMatches: false,
            // minMatchCharLength: 1,
            // location: 0,
            // threshold: 1,
            // distance: 100,
            // useExtendedSearch: false,
            // ignoreLocation: false,
            // ignoreFieldNorm: false,
            keys: [
                "title",
                "baseURL"
            ]
        };

        if (!list.length) {
            $.getJSON("list.json", function (json) {
                list = json;
            });
        }


        const fuse = new Fuse(list, options);

        // Change the pattern
        const pattern = search.value

        // resultSet = fuse.search(pattern);
        placeholder.innerHTML = ""

        if (!!search.value.match(/^([a-zA-Z0-9_-]){3}$/)) {
            buildRow( 'DLM', "https://dlm/systemcockpit/portal/#/search/%s".replace("%s", search.value), 0);
        } else if (!!/^\d{10}$/.test(search.value)) {
            buildRow( 'BCS', "https://support.wdf.sap.corp/sap/support/message/%s".replace("%s", search.value), 0);
        } else if (!!/^\d{1,10}$/.test(search.value)) {
            buildRow( 'Notes', "https://i7p.wdf.sap.corp/sap/support/notes/%s".replace("%s", search.value), 0);
        } else { }




        // function buildResultList() {
        // }

        function buildRow(title, url, index) {
            resultList = $("div").attr("id", "resultList").addClass("collection");
            $(placeholder).append(resultList);

            var link = $("<a>");
            link.attr("href", url);
            link.attr("title", title);
            link.attr("target", "_blank");
            link.text(title + " - " + url);
            link.addClass("collection-item").addClass(index == 0 ? "active" : "");

            $(resultList).append(link);
        }


    });
};