function cart_get_nymber_of_items() 
{
	var cnt = 0;

	for(var i = 0; i < window.localStorage.length;  i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);

		if(key.indexOf('product_') == 0)
		{
			cnt = cnt + value * 1;
		}
	} 
	return cnt;
}