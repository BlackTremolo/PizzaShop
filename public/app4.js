function cart_get_orders() 
{
	var orders = '';

	for(var i = 0; i < window.localStorage.length;  i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);

		if(key.indexOf('product_') == 0)
		{
			orders = orders + key + "=" + value + ",";
		}
	} 
	return orders;
}