function update_orders_button()
{
	var text = 'Cart (' + cart_get_number_of_items() + ')';
	$('#orders_button').val(text);
}