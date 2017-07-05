<template>
	<div>
		<Navigation></Navigation>
		<Tree></Tree>
		<FooterMessage></FooterMessage>
	</div>
</template>
<script>
import Nav from './Nav'
import Footer from './Footer'
import Tree from './Tree'
export default{
  name: 'Index',
  components: {
    Navigation: Nav,
    FooterMessage: Footer,
    Tree: Tree
  }
}
</script>
<style scoped>
</style>
