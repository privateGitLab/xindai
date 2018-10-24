$(function(){
	$('.left').click(function(){
		$('.bg').show();
		$('.tc').show();
		$('.ta').show();
	});
	$('.right').click(function(){
		$('.bg').show();
		$('.tc').show();
		$('.ta').show();
	});
	$('.bottom').click(function(){
		$('.bg').show();
		$('.tc').show();
		$('.ta').show();
	});
		$('.copy').click(function(){
		$('.bg').show();
		$('.tc').show();
		$('.ta').show();
	});
	$('.close').click(function(){
		$('.bg').hide();
		$('.tc').hide();
		$('.ta').hide();
	});
})
function tc(){
	$('.bg').show();
	$('.tc').show();
	$('.ta').show();
}
setInterval("tc()",25000);

function copy(id){
        const range = document.createRange();
        range.selectNode(document.getElementById(id));

        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
		setTimeout(function () {
			$('.bg').show();
			$('.tc').show();
			$('.ta').show();
		},1000)
        document.execCommand('copy');alert("已复制好，可打开微信粘贴。"); 
}

function copy2(id){
        const range = document.createRange();
        range.selectNode(document.getElementById(id));

        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
		setTimeout(function () {
			$('.bg').show();
			$('.tc').show();
			$('.ta').show();
		},1000)
        document.execCommand('copy2');alert("已复制好，可打开微信粘贴。"); 
}

function copy3(event){
        const range = document.createRange();
        range.selectNode(document.getElementById('zgwechat'));

        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
        
        document.execCommand('copy');alert(""); 
}

$('#yjcopy').click(function () {copy('yq')} )
$('#yjcopy2').click(function () {copy('yq2')} )
$('#copy9').click(function () {copy('article9')} )
$('#copy2').click(function () {copy('article2')} )	
$('#copy3').click(function () {copy2('article3')} )	
$('#copy').click(function () {copy('article')} )	
$('#img2').click(function () {copy('article')} )
$('#img16').click(function () {copy('article')} )
$('#img16').click(function () {copy('article')} )
$('.imgcopy').click(function () {copy('article')} )
$('.lzd').click(function () {copy3('zgwechat')})
