window.searchInput = ""

$(document).ready(function () {
    $(".js-range-slider").ionRangeSlider({
        onFinish: function (e) {
            let room_range = $('#room-slider').val().split(';');
            let searchText = searchInput;
            let price_range = $('#price-slider').val().split(';');
            let square_range = $('#square-slider').val().split(';');
            let order_by = $('#orderdropdown').val();
            let zip_code = $('#zip-dropdown').val();
            let zip_filter = '&postcode='
            let search_check = '&search-filter='
            if (order_by !== null) {
                order_by = $('#orderdropdown').val();
            } else {
                order_by = 'name'
            }
            if (zip_code !== "") {
                zip_code = $('#zip-dropdown').val();
            } else {
                zip_filter = ""
            }
            if (searchInput !== "") {
                searchInput = searchInput
            } else {
                search_check = ""
            }
            $.ajax({
                url: '/properties/search/?price-filter=' + price_range[0] + ',' + price_range[1] + search_check +  searchInput + '&room-filter=' + room_range[0] + ',' + room_range[1] + '&square-filter=' + square_range[0] + ',' + square_range[1] + '&order=' + order_by + zip_filter + zip_code,
                type: 'GET',
                success: function (resp) {
                    var newHTML = resp.data.map(d => {
                        let is_varified = d.verified;
                        if (is_varified) {
                        return `
                        <div class="col-md-3 well castles">
                                <a href="/properties/${d.id}">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src='${d.image}'onerror="this.src='/static/images/no_image_available.jpg'" data-holder-rendered="true">
                                    <div class="click-to-top"><img class="verified" alt="verified" src='/static/images/correct.png'/><span>  Verified property!</span></div>
                                    <div class="card-body">
                                        <h1 class="card-text" id="castle-name"> ${d.name}</h1>
                                        <p class="card-text" id="castle-info "> ${d.info}</p>
                                        <p class="card-text far fa-money-bill-alt" id="castle-price"> ${d.price}</p>
                                        <p class="card-text fas fa-expand-arrows-alt" id="castle-size"> ${ d.size }</p>
                                    </div>
                                </div>
                                </a>
                        </div>`
                        } else {
                            return `
                            <div class="col-md-3 well castles">
                                    <a href="/properties/${d.id}">
                                    <div class="card mb-4 box-shadow">
                                        <img class="card-img-top" src='${d.image}'onerror="this.src='/static/images/no_image_available.jpg'" data-holder-rendered="true">
                                        <div class="card-body">
                                            <h1 class="card-text" id="castle-name"> ${d.name}</h1>
                                            <p class="card-text" id="castle-info "> ${d.info}</p>
                                            <p class="card-text far fa-money-bill-alt" id="castle-price"> ${d.price}</p>
                                            <p class="card-text fas fa-expand-arrows-alt" id="castle-size"> ${ d.size }</p>
                                        </div>
                                    </div>
                                    </a>
                            </div>`
                        }
                    });
                    $('.castles').html(newHTML.join(''));
                },
                error: function (xhr, status, error) {
                    console.error(error);
                },
            })
        },
        type: "double",
        skin: "flat",
        min: 0,
        max: 50,
})
});
$(document).ready(function () {
    $('#search-btn').on('click', function (e) {
        e.preventDefault();
        let searchText = $('#search-box').val();
        let price_range = $('#price-slider').val().split(';');
        let room_range = $('#room-slider').val().split(';');
        let square_range = $('#square-slider').val().split(';');
        let order_by = $('#orderdropdown').val();
        let zip_code = $('#zip-dropdown').val();
        let zip_filter = '&postcode='
        if (order_by !== null) {
            order_by = $('#orderdropdown').val();
        } else {
            order_by = 'name'
        }
        if (zip_code !== "") {
            zip_code = $('#zip-dropdown').val();
        } else {
            zip_filter = ""
        }
        $.ajax({
            url: '/properties/search/?search-filter=' + searchText + '&price-filter=' + price_range[0] + ',' + price_range[1] + '&room-filter=' + room_range[0] + ',' + room_range[1] + '&square-filter=' + square_range[0] + ',' + square_range[1] + '&order=' + order_by + zip_filter + zip_code,
            type: 'GET',
            success: function (resp) {
                var newHTML = resp.data.map(d => {
                    let is_varified = d.verified;
                        if (is_varified) {
                        return `
                        <div class="col-md-3 well castles">
                                <a href="/properties/${d.id}">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src='${d.image}'onerror="this.src='/static/images/no_image_available.jpg'" data-holder-rendered="true">
                                    <div class="click-to-top"><img class="verified" alt="verified" src='/static/images/correct.png'/><span>  Verified property!</span></div>
                                    <div class="card-body">
                                        <h1 class="card-text" id="castle-name"> ${d.name}</h1>
                                        <p class="card-text" id="castle-info "> ${d.info}</p>
                                        <p class="card-text far fa-money-bill-alt" id="castle-price"> ${d.price}</p>
                                        <p class="card-text fas fa-expand-arrows-alt" id="castle-size"> ${ d.size }</p>
                                    </div>
                                </div>
                                </a>
                        </div>`
                        } else {
                            return `
                            <div class="col-md-3 well castles">
                                    <a href="/properties/${d.id}">
                                    <div class="card mb-4 box-shadow">
                                        <img class="card-img-top" src='${d.image}'onerror="this.src='/static/images/no_image_available.jpg'" data-holder-rendered="true">
                                        <div class="card-body">
                                            <h1 class="card-text" id="castle-name"> ${d.name}</h1>
                                            <p class="card-text" id="castle-info "> ${d.info}</p>
                                            <p class="card-text far fa-money-bill-alt" id="castle-price"> ${d.price}</p>
                                            <p class="card-text fas fa-expand-arrows-alt" id="castle-size"> ${ d.size }</p>
                                        </div>
                                    </div>
                                    </a>
                            </div>`}
                });
                window.searchInput = searchText;
                $('.castles').html(newHTML.join(''));
                $('#search-box').val('');
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        })
    })
});

$(document).ready(function () {
    $('.dropdown_search').on('change', function (e) {
        e.preventDefault();
        let room_range = $('#room-slider').val().split(';');
        let searchText = searchInput;
        let price_range = $('#price-slider').val().split(';');
        let square_range = $('#square-slider').val().split(';');
        let order_by = $('#orderdropdown').val();
        let order_filter = '&order='
        let zip_code = $('#zip-dropdown').val();
        let zip_filter = '&postcode='
        let search_check = '&search-filter='
        console.log()
        if (order_by !== null) {
            order_by = $('#orderdropdown').val();
        } else {
            order_filter = ""
            order_by= ""
        }
        if (zip_code !== "") {
            zip_code = $('#zip-dropdown').val();
        } else {
            zip_filter = ""
        }
        if (searchInput !== "") {
            searchInput = searchInput
        } else {
            search_check = ""
        }
        $.ajax({
            url: '/properties/search/?price-filter=' + price_range[0] + ',' + price_range[1] + search_check +  searchInput + '&room-filter=' + room_range[0] + ',' + room_range[1] + '&square-filter=' + square_range[0] + ',' + square_range[1] + order_filter + order_by + zip_filter + zip_code,
            type: 'GET',
            success: function (resp) {
                var newHTML = resp.data.map(d => {
                    let is_varified = d.verified;
                        if (is_varified) {
                        return `
                        <div class="col-md-3 well castles">
                                <a href="/properties/${d.id}">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src='${d.image}'onerror="this.src='/static/images/no_image_available.jpg'" data-holder-rendered="true">
                                    <div class="click-to-top"><img class="verified" alt="verified" src='/static/images/correct.png'/><span>  Verified property!</span></div>
                                    <div class="card-body">
                                        <h1 class="card-text" id="castle-name"> ${d.name}</h1>
                                        <p class="card-text" id="castle-info "> ${d.info}</p>
                                        <p class="card-text far fa-money-bill-alt" id="castle-price"> ${d.price}</p>
                                        <p class="card-text fas fa-expand-arrows-alt" id="castle-size"> ${ d.size }</p>
                                    </div>
                                </div>
                                </a>
                        </div>`
                        } else {
                            return `
                            <div class="col-md-3 well castles">
                                    <a href="/properties/${d.id}">
                                    <div class="card mb-4 box-shadow">
                                        <img class="card-img-top" src='${d.image}'onerror="this.src='/static/images/no_image_available.jpg'" data-holder-rendered="true">
                                        <div class="card-body">
                                            <h1 class="card-text" id="castle-name"> ${d.name}</h1>
                                            <p class="card-text" id="castle-info "> ${d.info}</p>
                                            <p class="card-text far fa-money-bill-alt" id="castle-price"> ${d.price}</p>
                                            <p class="card-text fas fa-expand-arrows-alt" id="castle-size"> ${ d.size }</p>
                                        </div>
                                    </div>
                                    </a>
                            </div>`}
                });
                $('.castles').html(newHTML.join(''))
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        })
    })
});
