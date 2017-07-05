<template>
	<div id="footer">
		<div id="container">
			<p>Copyright (C) 2017 东北大学计算机科学与工程学院</p>
			<p>在使用过程中遇到问题随时欢迎联系我们xujingguo58@163.com</p>
		</div>
	</div>

</template>
<script>
export default{
  name: 'bottomFooter'
}
</script>
<style scoped>
#footer{
	margin: auto;
	margin-top: -16px;
	display: table;
	height: 100px;
	background-color: #E8E8E8;
}
#container{
	display: table-cell;
	vertical-align: middle;
}
div p{
	text-align: center;
	color: black;
	//line-height: 50px;
}
@media screen and (min-width: 1366px){
	#footer{
		width: 1360px;
	}
}
@media screen and (max-width: 1365px){
	#footer{
		width: 1100px;

	}
}
@media screen and (max-width: 1150px){
	#footer{
		width: 900px;
	}
}
</style>
