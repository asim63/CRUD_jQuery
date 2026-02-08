function createSingleItem(item) {
  var $div = $('div class="single_item"></div>');

  $div.html(`
        <input type="checkbox" ${item.complete ? "checked" : ""}/>
        <p style = "text-decoration: ${item.complete ? "linethrough" : "none"}">${item.name}
        </p>
        <button class = "btn icon-btn edit-btn" type = "button">
            <i class = "fa-regular fa-pen-to-square"></i>
        </button>
        <button class="btn icon-btn remove-btn" type = "button">
        <i class = "fa-regulat fa-trash"></i>
        </button>        
        `);

  return $div;
}
