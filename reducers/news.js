const initialState = {
	news: [],
};

const news = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_NEWS":
			const newNews = action.news.map((item, index) => {
				const newItem = {
					id: index,
					comment: item.Comment,
					sliceComment: item.Comment.substr(0, 90) + "...",
					name: item.MarketActionName,
					dateStart: item.DateStart,
					dateEnd: item.DateEnd,
					image: "http://pic.standart.by/" + item.Files[0].FilePath.substr(12),
				};

				return newItem;
			});

			return {
				...state,
				news: newNews,
			};

		case "UPDATE_NEWS":
			return {
				...state,
				news: action.payload,
			};

		default:
			return state;
	}
};

export default news;
