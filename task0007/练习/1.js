/*购物卡密码转换*/

function Replace(_String)
{
	var num = _String.length;
	var tempString=Array.from(_String);
	
    /**替换连字符 */
    for (var i = j = 0; i < num; i++)
    {
		if (tempString[i] === '-')
        {
		    j--;
		}else
        {
			tempString[i+j]=tempString[i];
		}
	}
	
    /**判断是否是20位 */
    if (i + j == 20)
    {
		return tempString.join('').toUpperCase( );	
	}else
    {
		return '异常：无效的密码格式';
	}
}