function update_orders_input()
{
	var orders1 = cart_get_orders();
	$("#orders_input").val(orders1);

}