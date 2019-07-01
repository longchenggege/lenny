  <meta charset="UTF-8">
<?php

$str = '<p style="text-align: center;">图片
<img src="https://www.znforex.cn/static/ueditor/php/upload/91341520500682.jpg" title="外汇杠杆" alt="图片123">
</p>';

$ret = replacePicUrl($str);

echo $ret;

function replacePicUrl($content = null, $url="") {
    $pattern = "/<img(.*?)src=('|\")([^>]*).(bmp|gif|jpeg|jpg|png)('|\")(.*?)>/i";
    $replacement = "<mip-img src={$url}$3.$4 $6></mip-img>";
    $content = preg_replace($pattern, $replacement, $content);

    $pattern2 = Array("/style=(([\s\S])*?)>/i");
    $replacement2 = Array(">");
    $content2 = preg_replace($pattern2, $replacement2, $content);
    //$content2 = str_replace("www.znforex.cn", "m.znforex.cn", $content2);
$content2 = str_replace('href="https://www.znforex.cn','href="https://m.znforex.cn',$content2);
    return $content2;
}

?>