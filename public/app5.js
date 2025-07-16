function update_orders_input()
{
	var orders = cart_get_orders();
	$("#orders_input").val(orders);

}