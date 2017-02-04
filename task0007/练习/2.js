function Deduplicate(_String)
{
    var T_String = _String.split(',');
    var O_String = [];

    for (var i = 0, j; i < T_String.length; i++)
    {
        for (j = 0; j < O_String.length; j++)
        {
            if (O_String[j] === T_String[i])
            {
                j = -1;
                break;
            }
        }
        if (j !== -1)
        {
            O_String.push(T_String[i]);
        }
    }
    return O_String.join(',');
}