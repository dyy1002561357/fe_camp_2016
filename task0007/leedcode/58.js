/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s)
{
	var length = s.length,
		count = 0;
	while (length > 0 && s.charAt(length-1) === ' ')
		length--;
	while (length > 0 && s.charAt(length-1) !== ' ')
    {
		length--;
		count++
	}
	return count;
};