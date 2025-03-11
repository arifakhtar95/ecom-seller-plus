$(document).ready(function () {
  $(".slick, .slick_3").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slick_2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // $(".slick_3").slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   infinite: true,
  // });

  // When the filter values are changed,
  // apply the filter to slick.
  $("form.filter select").on("change", function () {
    var filterClass = getFilterValue();
    $(".filter-class").text(filterClass);
    $(".slick").slick("slickUnfilter");
    $(".slick").slick("slickFilter", filterClass);
  });

  /**
   * This just reads the inputs from the
   * selects and creates the filter.
   */
  function getFilterValue() {
    // Grab all the values from the filters.
    var values = $(".filter-group")
      .map(function () {
        // For each group, get the select values.
        var groupVal = $(this)
          .find("select")
          .map(function () {
            return $(this).val();
          })
          .get();
        // join the values together.
        return groupVal.join("");
      })
      .get();

    // Remove empty strings from the filter array.
    // and join together with a comma. this way you
    // can use multiple filters.
    return values
      .filter(function (n) {
        return n !== "";
      })
      .join(",");
  }

  /**
   * Add a filter group row.
   */
  $(".add-filter").on("click", function (event) {
    event.preventDefault();
    $("form.filter .filter-group")
      .first()
      .clone(true)
      .insertBefore($("form.filter .add-filter"));
  });
  
const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

});

function searchbyname(ele) {
  // Declare variabl
  const filter = jQuery(ele).val();

  $(".slick").slick("slickUnfilter");
  $(".slick").slick("slickFilter", function () {
    let content = jQuery(this).find("a").text().toLowerCase();
    return content.indexOf(filter) > -1;
  });
}



// -----------------------------------
