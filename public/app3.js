function cart_get_number_of_items() 
{
	var cnt = 0;

	for(var i = 0; i < window.localStorage.length;  i++)
	{
		var key1 = window.localStorage.key(i);
		var value1 = window.localStorage.getItem(key1);

		if(key1.indexOf('product_') == 0)
		{
			cnt = cnt + value1 * 1;
		}
	} 
	return cnt;
}