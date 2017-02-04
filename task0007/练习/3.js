var pDate = ['2017/02/01','2017/02/08','2017/02/15','2017/02/22'];

function promotionDate(pDate)
{
    var myDate = new Date();
    var Result = [];
    var datedif, _date;
    
    for (var i = 0; i < pDate.length; i++)
    {
        _date = new Date(pDate[i]);
        datedif = parseInt((_date.getTime() - myDate.getTime()) / 86400000);
        if (datedif < 0)
        {
            Result.push({date:pDate[i],daysbefore:"这一天已经过了"});
            continue;
        }else
        {
            Result.push({date:pDate[i],daysbefore:datedif});
        }
    }
    
    return Result;
}