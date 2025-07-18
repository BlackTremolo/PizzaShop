function cart_get_orders() 
{
	var orders = '';

	for(var i = 0; i < window.localStorage.length;  i++)
	{
		var key2 = window.localStorage.key(i);
		var value2 = window.localStorage.getItem(key2);

		if(key2.indexOf('product_') == 0)
		{
			orders = orders + key2 + "=" + value2 + ",";
		}
	} 
	return orders;
}