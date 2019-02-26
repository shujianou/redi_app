
var API_PATH = 'http://localhost:8095'
const ajax = (opt) => {
	opt = opt || {};
	opt.url = opt.url || '';
	opt.data = opt.data || null;
	opt.method = opt.method || 'GET';
	opt.header = opt.header || {
		"Content-Type": "application/json"
	};
	opt.success = opt.success || function() {};

	uni.request({
		url: API_PATH + opt.url,
		data: opt.data,
		method: opt.method,
		header: {
			'Authorization':uni.getStorageSync('token')
		},
		dataType: opt.dataType,
		success: function(res) {
			opt.success(res);
		},
		fail: function() {
			uni.showToast({
				title: '请稍后重试'
			});
		}
	})
}
export default {
	ajax
}
