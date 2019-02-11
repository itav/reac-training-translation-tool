const state = {
	trans: {
		a: 1,
		b: 2
	},
	error: "ddd"
};

const newTrans = {...state.trans, b: 3}
const newState = {...state, trans: newTrans};


console.log(state, newState);