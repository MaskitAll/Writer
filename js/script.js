'use strict';

new Vue({
	el: '#main',
	data: {
		logo: "/img/logo.jpg",
		title: "Наталия Хаимова",

		isShowPage: 0,
		title_img: "/img/back.png",
		bookTitle: "АромаТы АпрелЯ",
		bookContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.",
		linksTitle: "Приобрести печатную версию можно тут:",
		links: [
			{name: "Ozon.com", link: "#"},
			{name: "Amazon.com", link: "#"},
			{name: "Читай город", link: "#"},
		],

		aboutHeader: "Биография",
		aboutImg: "/img/back.png",
		aboutTitle: "Наталия Хаимова",
		aboutContent: [
			{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis."},

			{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis."},
			{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis."},
			{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis."},
			{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis."},
		],
		aboutSign: "Inst: instagram",

		aboutPhotos: [
			{
				img: "/img/logo.jpg",
				commentTitle: "Лучший писатель года",
				comment: [
				{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus."},
				{paragraf: " Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				]
			},
			{
				img: "https://placehold.it/350x250",
				commentTitle: "Лучший писатель года",
				comment: [
				{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus."},
				{paragraf: " Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				]
			},
			{
				img: "/img/back.png",
				commentTitle: "Лучший писатель года",
				comment: [
				{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus."},
				{paragraf: " Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				]
			},
			{
				img: "https://placehold.it/600x250",
				commentTitle: "Лучший писатель года",
				comment: [
				{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus."},
				{paragraf: " Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				]
			},
		],



		contactHeader: "Контакты",

		phone: "tel: +7 800 555 35 35",
		phoneNumber: "+7 800 555 35 35",
		mail: "mailto: G-mai@e-mail.ru",
		mailName: "G-mai@e-mail.ru",



		reviewsHeader: "Отзывы",
		reviewsArticle: [
			{
				reviewsName: "Название отзыва",
				reviewsRating: "4",
				reviewsContent: [
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				],
			},{
				reviewsName: "Название отзыва",
				reviewsRating: "4",
				reviewsContent: [
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				],
			},{
				reviewsName: "Название отзываНазвание отзываНазвание отзываНазвание отзываНазвание отзываНазвание отзываНазвание отзыва",
				reviewsRating: "4",
				reviewsContent: [
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				],
			},{
				reviewsName: "Название отзыва",
				reviewsRating: "4",
				reviewsContent: [
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				],
			},
		],





		booksHeader: "Книги",


		commHeader: "Общение",
		commTitle: "Выберите тему для общения, которая Вам интересна. Не стесняйтесь выражать свою мысль, главное делать это культурно.",
		commContent: [
			{paragraf: "Хорошая история, как кружка ароматного кофе, ты чавствешь все мысли и эмоции которые наполняют эту её. Она может как согреть так и обжечь, если резко окунуться в неё. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus"},
		],
		commHistory: [
			{
				historyTitle: "Моя история",
				historyContent: [
					{paragraf: "Тут Вы можете поделиться своей жизненной историей или вдохновится чужой, я уверена, что у каждого есть уникальный жизненный опыт, который застравит других слушать с удивлением.  "},
				],
				historyBtn: "Открыть",
			},
			{
				historyTitle: "Моя история",
				historyContent: [
					{paragraf: "Тут Вы можете поделиться своей жизненной историей или вдохновится чужой, я уверена, что у каждого есть уникальный жизненный опыт, который застравит других слушать с удивлением.  "},
				],
				historyBtn: "Открыть",
			},

		],


		comm2Header: "Моя история",
		comm2Title: "Поделитесь своей уникальной историей, которая может вдохновить на великое многих других читателей.",

		storiesArticle:[
			{
				storiesName: "Собака по имени Евгений",
				storiesAutor: "Мария М.Л",
				storiesLike: "14",
				storiesContent: [
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				],
			},
			{
				storiesName: "Собака по имени Евгений",
				storiesAutor: "Мария М.Л",
				storiesLike: "14",
				storiesContent: [
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				],
			},
		],



		newsHeader: "Последняя запись",
		newsArticle: [
			{
				newsName: "Новость",
				newsDate: "08.10.2020",
				newsImages: [
					{img: "https://placehold.it/650x550"},
					{img: "https://placehold.it/65x550"},
					{img: "https://placehold.it/650x55"},
					{img: "https://placehold.it/60x50"},
					{img: "https://placehold.it/6250x550"},
				],
				newsContent: [
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				],
			},
				{
				newsName: "Новость",
				newsDate: "08.10.2020",
				newsImages: [
					{img: "https://placehold.it/650x550"},
					{img: "https://placehold.it/65x550"},
					{img: "https://placehold.it/65x550"},
					{img: "https://placehold.it/65x550"},
					{img: "https://placehold.it/650x55"},
					{img: "https://placehold.it/60x50"},
					{img: "https://placehold.it/6250x550"},
				],
				newsContent: [
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				],
			},	{
				newsName: "Новость",
				newsDate: "08.10.2020",
				newsImages: [
					{img: "https://placehold.it/650x550"},
					{img: "https://placehold.it/65x550"},
				],
				newsContent: [
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
					{paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi aenean tortor vulputate cursus duis egestas vulputate. Interdum lacinia tincidunt senectus aliquam, penatibus facilisi egestas suspendisse lectus. Enim, ac sed tempor aliquam. Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida nibh.Sapien velit at in ultrices dui nec eleifend augue mattis. Nisl malesuada tortor, gravida risus adipiscing gravida."},
				],
			},

		],

	},

	methods: {

	},

});



function getDate() {
	var date = new Date();
	return (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
}


