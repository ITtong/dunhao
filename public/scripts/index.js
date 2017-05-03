console.log('index主页');


/*banner图高度*/
var winHeight = 0;
function findDimensions() //函数：获取尺寸
{
    //获取窗口高度
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    //通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    }
    // 结果改变banner的高度
    $('#banner').css('height',winHeight+'px');
}
findDimensions();
//调用函数，获取数值
window.onresize=findDimensions;


