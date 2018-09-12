  <meta charset="UTF-8">

<?php

$a = date('Y-m-d',1526351659);
$b = date('h:m:s',1526351659);
echo $a.'T'.$b;
/* $a = '<a href="https://www.znforex.cn/whjypt/" target="_blank">123</a><img src="https://www.znforex.cn/hehe/">';
 $para = '/href="https:\/\/www.znforex.cn/';

 $c = str_replace('href="https://www.znforex.cn','href="https://m.znforex.cn',$a);
 echo $c;
echo "\n";
 $b = preg_replace($para,'href="https://m.znforex.cn',$a);
 echo $b;*/

 $r = '{
    "reamin_mip": 9998,
    "success_mip": 2,
    "not_same_site":[],
    "not_valid":[]
}';

$r2 = json_decode($r);
if(isset($r2->success_mip)){
  echo "成功提交数量：".$r2->success_mip;
}else{
  echo "失败信息:".$r2->message;
}


/*echo $r.reamin_mip;
exit();
*/
/*$r = "[".$r."]";

echo $r2[0]['success_mip'];*/
?>