function cancel_order()
{
	window.localStorage.clear();
	update_orders_button()
	return false;
}

function some()
	{
		var x = window.localStorage.getItem('aaa');
// умножаем ,чтобы преобразовать тип string в integer
		x = x * 1 + 1;	
		
		window.localStorage.setItem('aaa', x);
		
		alert(x);
	}


function add_to_cart(id)
{
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);	

	update_orders_input();
	update_orders_button();
}


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


function update_orders_input()
{
	var orders1 = cart_get_orders();
	$('#orders_input').val(orders1);

}


function update_orders_button()
{
	var text = 'Cart (' + cart_get_number_of_items() + ')';
	$('#orders_button').val(text);
}


