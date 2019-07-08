import {
	Login,
	Logout
} from '../../api/api.js'

const user = {

	state: {
		hasLogin: false,
		userInfo: {
			nickname: "",
			uid: "",
			sex: "0",//0:unknown;1:male;2:female
			birthday: "0000-00-00",
			qq: "",
			login: "",//登录次数
			reg_ip: "",//登录ip地址
			last_login_ip: "",//最后一次登录的ip地址
			signature: "",//个性签名
			pos_province: "",//所在省份
			pos_city: "", //所在城市
			pos_district: "",//所在乡镇
			pos_community: "",
			session_id: "",
			fans: "",
			avatar: "",
		},
	},
	mutations: {
		LOGIN(state, res) {
			state.hasLogin = true;
			state.userInfo = {
				//本地调试使用，等后台搭建好后会做修改
				nickname : res != null ? res.data.data.hyn : "Unknown",
				avatar: "/static/img/login/head.png"
			};
		},
		LOGOUT(state) {
			state.hasLogin = false;
			state.userInfo = {
				nickName : ""
			};
		}
	},
	actions: {
		async login(context, state, loginInfo) {
			return await new Promise ((resolve, reject) => {
				Login(loginInfo).then(res => {
					console.log("hyn Login success");
					console.log(res.data);
					context.commit('LOGIN', res);
					resolve(res);
				}).catch(err => {
					console.log("hyn Login error");
					console.log(err.errMsg);
					context.commit('LOGIN');
					reject(err);
				});
			})
		},
		async logout(context, state) {
			return await new Promise((resolve, reject) => {
				Logout().then(res => {
					console.log('hyn Logout success')
					context.commit('LOGOUT');
					resolve(res);
				}).catch(err => {
					console.log('hyn Logout error')
					context.commit('LOGOUT');
					reject(err);
				});
			})
		}
	},
}

export default user