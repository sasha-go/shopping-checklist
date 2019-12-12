function createShoppingList(value) {
    return `<li>
        <span class="shopping-item">${value}</span>
         <div class="shopping-item-controls">
             <button class="shopping-item-toggle">
             <span class="button-label">check</span>
            </button>
             <button class="shopping-item-delete">
             <span class="button-label">delete</span>
             </button>
         </div>
         </li>`;
}

function checkedItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
     e.preventDefault();   
    $(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

// Permanently remove items from the list
function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        e.preventDefault();
        this.closest('li').remove();
    })
}

// Enter items entered on field when clicking Add Item or using the keyboard to enter by clicking return
function newShoppingList() {
   $('#js-shopping-list-form').submit(function(e) {
       e.preventDefault();
       const item = $('#shopping-list-entry').val();
       console.log(item);

    $('.shopping-list').append($(createShoppingList(item)));
    $('.shopping-list-entry').val();

   });
}

// Callback Functions
    $(newShoppingList);
    $(checkedItem);
    $(deleteItem);


