<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */ 
/*引入color ui样式*/
@import "colorui/main.css";
@import "colorui/icon.css";

/*每个页面公共css */
@import './common/uni.css';
</style>
