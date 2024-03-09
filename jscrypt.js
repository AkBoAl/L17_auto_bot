chrome.storage.local.set({'start_bot_ctrg': true});

let east_joto = {
    'Безлюдная дорога' : {
        need_treated : true,
        treatment_path : [['Безлюдная дорога', 'Олстон', 'Монстроцентр'],
                        ['#btnGo42', '#btnGo33', '#btnGo35']],
        numbers_attacks : 2,
        'Волек' : [0, 101, 'nobody'],
        'Мотль' : [0, 101, 'nobody'],
        'Москилл' : [0, 101, 'nobody'],
        'Орлин' : [0, 101, 'nobody'],
        'Вупс' : [0, 101, 'nobody'],
    },
    	'Заросшая тропа' : {
		need_treated : true,
		treatment_path : [['Заросшая тропа', 'Олстон', 'Монстроцентр'],
				        ['#btnGo41', '#btnGo33', '#btnGo35']],
		numbers_attacks : 2,
		'Пискун' : [0, 101, 'nobody'],
		'Ополоз' : [0, 101, 'nobody'], 
		'Клуббиш' : [0, 101, 'nobody'],
		'Вьюнудль' : [0, 101, 'nobody'],
		'Лознудль' : [0, 101, 'nobody'],
	},
	'Горный перевал' : {
		need_treated : true,
		treatment_path : [['Горный перевал', 'Олстон', 'Монстроцентр'],
				        ['#btnGo32', '#btnGo33', '#btnGo35']],
		numbers_attacks : 2,
		'Скалоб' : [0, 101, 'nobody'],
		'Рошер' : [0, 101, 'nobody'],
		'Ленси' : [0, 101, 'nobody'],
		'Ферон' : [0, 101, 'nobody'], 
	},
	'Дорога №2' : {
		need_treated : true,
		treatment_path : [['Дорога №2', 'Мост', 'Оливин', 'Монстроцентр'],
				        ['#btnGo18', '#btnGo22', '#btnGo23', '#btnGo25']],
		numbers_attacks : 2,
		'Дроздор' : [0, 101, 'nobody'],
		'Клуббиш' : [0, 101, 'nobody'],
		'Эфон' : [0, 101, 'nobody'],
		'Вольтон' : [0, 101, 'nobody'], 
		'Астрания' : [0, 101, 'nobody'], 
		'Яркокрыл' : [0, 101, 'nobody'], 
	},
	'Причал' : {
		need_treated : true,
		treatment_path : [['Причал', 'Пляж', 'Оливин', 'Монстроцентр'],
				        ['#btnGo156', '#btnGo31', '#btnGo23', '#btnGo25']],
		numbers_attacks : 2,
		'Дибарак' : [0, 101, 'nobody'],
		'Сивинг' : [0, 101, 'nobody'],
		'Пелисир' : [0, 101, 'nobody'],
	},	
	'Лиственный подлесок' : {
		need_treated : true,
		treatment_path : [['Лиственный подлесок', 'Лес вокруг воздушного стадиона', 'Старый район', 'Площадь Голденрода', 'Монстроцентр'],
				        ['#btnGo450', '#btnGo7', '#btnGo9', '#btnGo1', '#btnGo3']],
		numbers_attacks : 2,
		'Мотль' : [0, 101, 'nobody'],
		'Коккон' : [0, 101, 'nobody'],
		'Листотел' : [0, 101, 'nobody'],
		'Рахнус' : [0, 101, 'nobody'],
		'Прутти' : [0, 101, 'nobody'],
	},
	'Лес вокруг воздушного стадиона' : {
		need_treated : true,
		treatment_path : [['Лес вокруг воздушного стадиона', 'Старый район', 'Площадь Голденрода', 'Монстроцентр'],
				        ['#btnGo7', '#btnGo9', '#btnGo1', '#btnGo3']],
		numbers_attacks : 2,
		'Мотль' : [0, 101, 'nobody'],
		'Орли' : [0, 101, 'nobody'],
		'Пискун' : [0, 101, 'nobody'],
		'Ополоз' : [0, 101, 'nobody'],
		'Листотел' : [0, 101, 'nobody'],
		'Редлик' : [0, 101, 'nobody'],
		'Булли' : [0, 101, 'nobody'],
		'Лутка' : [0, 101, 'nobody'],
		'Вьюнудль' : [0, 101, 'nobody'],
		'Дирбаг' : [0, 101, 'all'],
		'Грути' : [0, 101, 'nobody'],
	},
    'Пасека' : {
		need_treated : true,
		treatment_path : [['Пасека', 'Ферма', 'Дорога №8', 'Флауренция', 'Дорога №3', 'Новый район', 'Площадь Голденрода', 'Монстроцентр'],
				        ['#btnGo779', '#btnGo776', '#btnGo59', '#btnGo47', '#btnGo17', '#btnGo10', '#btnGo1', '#btnGo3']],
		numbers_attacks : 2,
		'Москилл' : [0, 90, 'nobody'],
		'Мандракас' : [0, 101, 'nobody'],
		'Буллитум' : [0, 101, 'nobody'],
		'Дендино' : [0, 101, 'nobody'],
		'Джуснель' : [0, 101, 'all'],
		'Астрания' : [0, 101, 'nobody'],
		'Хани' : [0, 101, 'nobody'],
		'Роялони' : [0, 101, 'nobody'],
	},
}
let canto = {
    'Маршрут 12' : {
        need_treated : true,
        treatment_path : [['Маршрут 12', 'Лавандия', 'Монстроцентр'],
                        ['#btnGo165', '#btnGo164', '#btnGo209']],
        numbers_attacks : 2,
        'Шримпер' : [0, 101, 'nobody'],
        'Сплешер' : [0, 101, 'nobody'],
        'Каллея' : [0, 101, 'nobody'],
        'Птеркус' : [0, 101, 'nobody'],
        'Нерп' : [0, 101, 'all'],
        'Булавир' : [0, 101, 'nobody'],
        'Веттерино' : [0, 101, 'all'],
    },
    'Маршрут 16' : {
        need_treated : true,
        treatment_path : [['Маршрут 16', 'Целадон', 'Монстроцентр'],
                        ['#btnGo176', '#btnGo177', '#btnGo206']],
        numbers_attacks : 2,
        'Фоснейл' : [0, 101, 'nobody'],
        'Грязень' : [0, 101, 'nobody'],
        'Дроздун' : [0, 101, 'nobody'],
        'Месьер' : [0, 101, 'nobody'],
        'Слизень' : [0, 101, 'nobody'],
    },
    'Горный тоннель' : {
        need_treated : true,
        treatment_path : [['Горный тоннель', 'Маршрут 10', 'Лавандия', 'Монстроцентр'],
                        ['#btnGo183', '#btnGo184', '#btnGo164', '#btnGo209']],
        numbers_attacks : 2,
        'Крыскун' : [0, 101, 'nobody'],
        'Джипсон' : [0, 101, 'nobody'],
        'Потат' : [0, 101, 'nobody'],
        'Аспер' : [0, 101, 'nobody'],
        'Месьер' : [0, 101, 'nobody'],
        'Битав' : [0, 101, 'nobody'],
        'Фоснейл' : [0, 101, 'nobody'],
        'Ферон' : [0, 101, 'nobody'],
    },
    'Электростанция' : {
        need_treated : true,
        treatment_path : [['Электростанция', 'Маршрут 9','Монстроцентр'],
                ['#btnGo182', '#btnGo181', '#btnGo199']],
        number_attacks : 2,
        'Дуоселл' : [0, 101, 'nobody'],
        'Октаселл' : [0, 101, 'nobody'],
        'Люминьон' : [0, 101, 'nobody'],
        'Ваттон' : [0, 101, 'all'],
        'Грязень' : [0, 101, 'nobody'],
    },
    'Подсобка' : {
  	need_treated : true,
        treatment_path : [['Подсобка', 'Магазин «Сладкая выпечка»','Лакричная аллея', 'Мармеладная площадь'],
                ['#btnGo1118', '#btnGo1113', '#btnGo1109', '#btnGo1108']],
        number_attacks : 2,
        'Сласедь' : [0, 101, 'nobody'],
        'Пискун' : [0, 101, 'nobody'],
        'Медёна' : [50, 101, 'nobody'],
    },
}
let selene_island = {
    'Маршрут 16' : {
        need_treated : true,
        treatment_path : [['Маршрут 16', 'Маршрут 14', 'Эстайр Сити', 'Монстроцентр'],
                        ['#btnGo500', '#btnGo482', '#btnGo481', '#btnGo485']],
        numbers_attacks : 2,
        'Орли' : [0, 101, 'nobody'],
        'Пискун' : [0, 101, 'nobody'],
        'Гюрзар' : [0, 101, 'nobody'],
        'Вупс' : [0, 101, 'nobody'],
        'Яркокрыл' : [0, 101, 'nobody'],
    },
    'Маршрут 18' : {
        need_treated : true,
        treatment_path : [['Маршрут 18', 'Снежный путь', 'Заброшенная дорога', 'Северный причал Селена', 'Монстроцентр'],
                        ['#btnGo507', '#btnGo506', '#btnGo414', '#btnGo412', '#btnGo473']],
        numbers_attacks : 2,
        'Ленси' : [0, 101, 'nobody'],
        'Ленсерино' : [0, 101, 'nobody'],
        'Снепург' : [0, 101, 'nobody'],
        'Пургетта' : [0, 101, 'nobody'],
    },
    'Пещера' : {
        need_treated : false,
        treatment_path : [['Пещера', 'Пещера', 'Пещера', 'Пещера', 'Провал', 'Маршрут 4', 'Остарон', 'Монстроцентр'],
                        ['#btnGo427', '#btnGo426', '#btnGo424', '#btnGo423', '#btnGo422', '#btnGo418', '#btnGo419', '#btnGo457']],
        numbers_attacks : 2,
        'Потат' : [0, 101, 'nobody'],
        'Птатат' : [0, 101, 'nobody'],
        'Эстерелла' : [0, 101, 'male'],
    },
    'Лес Селена' : {
        need_treated : true,
        treatment_path : [['Лес Селена', 'Северный причал Селена', 'Монстроцентр'],
                        ['#btnGo415', '#btnGo412', '#btnGo473']],
        numbers_attacks : 2,
        'Орли' : [0, 101, 'nobody'],
        'Редлик' : [0, 101, 'nobody'],
        'Аспер' : [0, 101, 'nobody'],
        'Сивун' : [0, 101, 'nobody'],
        'Фоуль' : [0, 101, 'nobody'],
        'Демот' : [0, 101, 'nobody'],
        'Айсхог' : [0, 101, 'nobody'],
    },
    'Крутой подъём' : {
        need_treated : true,
        treatment_path : [['Крутой подъём', 'Горная деревушка', 'Стадион Призраков'],
                        ['#btnGo448', '#btnGo447', '#btnGo653']],
        numbers_attacks : 2,
        'Бонозавр' : [0, 101, 'nobody'],
        'Скуллозавр' : [0, 101, 'nobody'],
        'Феронт' : [0, 101, 'nobody'],
    },
    'Старая дорога' : {
        need_treated : true,
        treatment_path : [['Старая дорога', 'Маршрут 16', 'Маршрут 14', 'Эстайр сити', 'Монстроцентр'],
        ['#btnGo499', '#btnGo500', '#btnGo482', '#btnGo481', '#btnGo485']],
        numbers_attacks : 2,
        'Редлик' : [0, 101, 'nobody'],
        'Слизень' : [0, 101, 'nobody'],
        'Бонозавр' : [0, 101, 'nobody'],
        'Кларина' : [0, 101, 'all'],
    },
    'Пастбище' : {
        need_treated : true,
        treatment_path : [['Пастбище', 'Маршрут 8', 'Остарон', 'Монстроцентр'],
        ['#btnGo465', '#btnGo468', '#btnGo419', '#btnGo457']],
        numbers_attacks : 2,
        'Дроздор' : [0, 101, 'nobody'],
        'Клуббиш' : [0, 101, 'nobody'],
        'Буллит' : [0, 101, 'nobody'],
        'Булаврон' : [0, 101, 'nobody'],
        'Элкас' : [0, 101, 'nobody'],
        'Ленси' : [0, 101, 'nobody'],
        'Ленсерино' : [0, 101, 'nobody'],
    },
    'Лазурная заводь' : {
		need_treated : true,
		treatment_path : [['Лазурная заводь', 'Маршрут 15', 'Эстайр сити', 'Монстроцентр'],
				        ['#btnGo489', '#btnGo483', '#btnGo481', '#btnGo485']],
		numbers_attacks : 2,
		'Ополоз' : [0, 101, 'nobody'], //nobody - никого не ловить, all - ловить всех
		'Каллея' : [0, 101, 'nobody'], //male - ловить парней, female - ловить девок
		'Птеркус' : [0, 101, 'nobody'],
		'Вьюнудль' : [0, 101, 'nobody'],
	},
	'Грот' : {
		need_treated : true,
		treatment_path : [['Грот', 'Маршрут 5', 'Остратон', 'Монстроцентр'],
                        ['#btnGo421', '#btnGo420', '#btnGo419', 'btnGo457']],
		numbers_attacks : 2,
		'Потат' : [0, 101, 'nobody'], //nobody - никого не ловить, all - ловить всех
		'Потатат' : [0, 101, 'nobody'], //male - ловить парней, female - ловить девок
		'Шелтер' : [0, 101, 'nobody'],
		'Армурена' : [0, 101, 'nobody'],
		'Полиста' : [0, 101, 'all'],
		'Дуняш' : [0, 101, 'all'],
	},
	'Место падения метеорита' : {
		need_treated : true,
		treatment_path : [['Место падения метеорита', 'Маршрут 18', 'Снежный путь', 'Заброшенная дорога', 'Северный причал Селена', 'Монстроцентр'],
				  ['#btnGo508', '#btnGo507', '#btnGo506', '#btnGo414', '#btnGo412', '#btnGo473']],
		numbers_attacks : 2,
		'Демот' : [0, 101, 'nobody'], //nobody - никого не ловить, all - ловить всех
		'Ленси' : [0, 101, 'nobody'], //male - ловить парней, female - ловить девок
		'Ленсерино' : [0, 101, 'nobody'],
		'Снепург' : [0, 101, 'nobody'],
		'Снолинг' : [0, 101, 'nobody'],
	},
    'Северный причал Селена' : {
        need_treated : true,
        treatment_path : [['Северный причал Селена', 'Монстроцентр'],
        ['btnGo412', 'btnGo473']],
        numbers_attacks : 2,
        'Каллея' : [0, 101, 'nobody'],
        'Нерп' : [0, 101, 'all'],
        'Шелтер' : [0, 101, 'nobody'],
        'Шримпер' : [0, 101, 'nobody'],
        'Птерра' : [0, 101, 'nobody'],
        'Сивинг' : [0, 101, 'nobody'],
        'Снелень' : [0, 101, 'all'],
    },
}
let west_joto = {
    'Каменная площадка' : {
        need_treated : true,
        'Пискун' : [0, 101, 'nobody'],
        'Дроздун' : [0, 101, 'nobody'],
        'Грюмышь' : [0, 101, 'nobody'],
        'Скалоб' : [0, 101, 'nobody'],
        'Рошер' : [0, 101, 'nobody'],
        'Шадо-Ли' : [0, 101, 'nobody'],
        'Кнурр' : [0, 101, 'nobody'],
        'Ферон' : [0, 101, 'nobody'],
	'Шумышь' : [0, 101, 'nobody'],
        treatment_path : [['Каменная площадка', 'Ручей', 'Возвышенность', 'Саммер', 'Монстроцентр'],
                        ['#btnGo721','#btnGo720','#btnGo574','#btnGo566','#btnGo567']],
        numbers_attacks : 2,
    },
    'Вулканическое плато' : {
        need_treated : true,
        treatment_path : [['Вулканическое плато', 'Маршрут №3  ', 'Маршрут №2  ', 'Маршрут №1', 'Возвышенность', 'Саммер', 'Монстроцентр'],
                        ['#btnGo581', '#btnGo577', '#btnGo576', '#btnGo575', '#btnGo574', '#btnGo566', '#btnGo567']],
        numbers_attacks : 2,
        'Смоггер' : [0, 101, 'nobody'],
        'Фоснейл' : [0, 101, 'nobody'],
        'Фланжин' : [0, 101, 'nobody'],
        'Эмбозавр' : [0, 101, 'nobody'],
        'Фобрец' : [0, 101, 'nobody'],
    },
    'Углубление ' : {
        need_treated : true,
        treatment_path : [['Углубление ', 'Вулканическое плато', 'Маршрут №3  ', 'Маршрут №2  ', 'Маршрут №1', 'Возвышенность', 'Саммер', 'Монстроцентр'],
                        ['#btnGo582', '#btnGo581', '#btnGo577', '#btnGo576', '#btnGo575', '#btnGo574', '#btnGo566', '#btnGo567']],
        numbers_attacks : 2,
        'Шумышь' : [0, 101, 'nobody'],
        'Грюмышь' : [0, 101, 'nobody'],
        'Каллея' : [0, 101, 'nobody'],
        'Скорпимер' : [0, 101, 'all'],
        'Злобстер' : [0, 101, 'nobody'],
    },
}
let southern_archipelago = {
    'Коралловая роща' : {
        need_treated : true,
        treatment_path : [['Коралловая роща', 'Мелководье', 'Коралловая лагуна', 'Песчаная тропа', 'Гавань', 'Монстроцентр'],
                        ['#btnGo892', '#btnGo332', '#btnGo889', '#btnGo888', '#btnGo527', '#btnGo335']],
        numbers_attacks : 2,
        'Каллея' : [0, 101, 'nobody'],
        'Вартфиш' : [0, 101, 'nobody'],
        'Кореллик' : [0, 101, 'nobody'],
        'Остер' : [0, 101, 'nobody'],
        'Жемчул' : [0, 101, 'nobody'],
        'Туснейк' : [0, 101, 'nobody'],
        'Ротенот' : [0, 101, 'nobody'],
    },
    'Старый парк' : {
        need_treated : true,
        treatment_path : [['Старый парк', 'Старый квартал', 'Гавань', 'Монстроцентр'],
                        ['#btnGo341', '#btnGo529', '#btnGo527', '#btnGo335']],
        numbers_attacks : 2,
        'Клуббиш' : [0, 101, 'nobody'],
        'Слизень' : [0, 101, 'nobody'],
        'Маранолия' : [0, 101, 'nobody'],
        'Путун' : [0, 101, 'nobody'],
        'Муваг' : [0, 101, 'nobody'],
        'Баттинун' : [0, 101, 'nobody'],
        'Баттнайти' : [0, 101, 'nobody'],
        'Камелиона' : [0, 101, 'nobody'],
        'Яркокрыл' : [0, 101, 'nobody'],
        'Кензи' : [0, 101, 'all'],
    },
}
let event_region = {
    'Аллея Роз' : {
        need_treated : true,
        treatment_path : [['Аллея Роз', 'Театр «Де Фиорес»'],
                        ['#btnGo1648', '#btnGo1649']],
        numbers_attacks : 2,
        'Вулли' : [0, 101, 'nobody'],
        'Смородива' : [0, 101, 'nobody'],
        'Камелиона' : [0, 101, 'nobody'],
        'Толириб' : [0, 101, 'nobody'],
        'Камолино' : [0, 101, 'nobody'],
        'Пикан' : [0, 101, 'all'],
    },
}

let variables = {
    start_bot : false,  //ползунок старта работы
    sound : false,  //ползунок звука
    vs_or_ut : false,   //ползунок подставного хода
    heal_or_no : false, //ползунок лечения
    sand_s : false, //ползунок автобоя в песчаный шторм
    hail : false,   //ползунок автобоя в град
    craft : false,  //ползунок выбивания крафт ресурсов
    fatigue : false, //наличие усталости
    enemy_monster_name : '',    //имя напавнего монстра
    enemy_monster_lvl : '', //уровень напавшего монстра
    enemy_monster_color : '',   //приписка напавшего монстра(шайни)
    enemy_monster_gender : '',  //пол напавшего монстра
    enemy_monster_catching : '',    //возможность поймать напавшего монстра
    kill_or_no : false, //надо убивать или нет
    location_name : '', //название локации
    weather : '',   //погода в бою
    enemy_type : '',    //тип противника(дикий монстр или тренер)
    visio_fight : '',   //наличие боя
    close_fight_button : '',    //наличие кнопки закрыть бой
    my_monster_lvl : '',    //уровень моего монстра
    my_monster_hp : '', //колличество НР моего монстра
    attack_first_pp : 20,   //колличество РР у 1 атаки
    attack_second_pp : 20,  //колличество РР у 2 атаки
    attack_third_pp : 20,   //колличество РР у 3 атаки
    attack_fourth_pp : 20,  //колличество РР у 4 атаки
    attack_first_name : '', //название 1 атаки на монстре
    region : '',    //Регион, в котором сейчас находится
    window_focus : true,    //в фокусе ли вкладка
    craft_monsters : ['Бранзер', 'Ополоз', 'Буллитум', 'Рошер', 'Вьюнудль', 'Рахнус', 'Маранолия', 'Фоснейл', 'Муваг', 'Астрания', 'Пескомот', 'Гранатрон', 'Трухля'],
    need_heal : false,  //нужно ли лечиться
    button_wild_monsters : false,   //нажата ли кнопка дикий монстров
    helper_heal : false,
    counter_pause_go : Math.floor(Math.random() * (13 - 8 + 1)) + 8,
    counter_pause_fight : (Math.floor(Math.random() * (11 - 5 + 1)) + 5) + (Math.floor(Math.random() * (11 - 5 + 1)) + 5) + (Math.floor(Math.random() * (11 - 5 + 1)) + 5),
};

let working_location = {};
let counter_pause = 0;

let sound_signal = {
    sound : new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="),
}

setInterval(mail_fun, 100);

function mail_fun() {
    console.log(1);
    $('.divHalloweenCandy.grayscale').css({'opacity':'1', 'border':'3px solid red'}); ///Красная рамка вокруг конфет на Хелуине
    create_working_location();
    if (variables.start_bot) {
        variables_input();
        button_wild_monsters_fun();
        counter_pause++;
        if (variables.fatigue) {
            counter_pause--;
        }
        if (variables.visio_fight) {
            if (counter_pause >= variables.counter_pause_fight) {
                variables.counter_pause_fight = (Math.floor(Math.random() * (11 - 5 + 1)) + 5) + (Math.floor(Math.random() * (11 - 5 + 1)) + 5) + (Math.floor(Math.random() * (11 - 5 + 1)) + 5);
                console.log('Битва');
                counter_pause = 0;
                if (variables.close_fight_button) {
                    $('div:contains("Закрыть"):last').click();
                    return;
                };
                if (variables.kill_or_no) {
                    fight_go();
                } else {
                    sound_start();
                };
            };
        } else {
            if (counter_pause >= variables.counter_pause_go) {
                console.log(variables);
                variables.counter_pause_go = Math.floor(Math.random() * (13 - 8 + 1)) + 8;
                counter_pause = 0;
                if (!($('.button.btnSwitchWilds.withtext.pressed').length < 0)) {
                    go_to_heal();
                }
            }
        }
    }
}

function fun1() {
    console.log(variables);
    // if (variables.location_name in variables.region) {
    //     console.log(working_location?.treatment_path[[0]].indexOf(variables.location_name));
        console.log(working_location);
        console.log(working_location?.treatment_path[0].indexOf(variables.location_name));
        if (working_location?.treatment_path) {
            console.log(working_location?.treatment_path[0]);
        }
    // }
}

{  //достать из хранилища и вписать туда
    chrome.storage.local.get(['start_bot_ctrg'], function(result) {
        variables.start_bot = result.start_bot_ctrg;
    })
    chrome.storage.local.get(['sound_ctrg'], function(result) {
        variables.sound = result.sound_ctrg;
    })
    chrome.storage.local.get(['vs_or_ut_ctrg'], function(result) {
        variables.vs_or_ut = result.vs_or_ut_ctrg;
    })
    chrome.storage.local.get(['heal_or_no_ctrg'], function(result) {
        variables.heal_or_no = result.heal_or_no_ctrg;
    })
    chrome.storage.local.get(['sand_s_ctrg'], function(result) {
        variables.sand_s = result.sand_s_ctrg;
    })
    chrome.storage.local.get(['hail_ctrg'], function(result) {
        variables.hail = result.hail_ctrg;
    })
    chrome.storage.local.get(['craft_ctrg'], function(result) {
        variables.craft = result.craft_ctrg;
    })


    chrome.storage.onChanged.addListener(() => {
        chrome.storage.local.get(['start_bot_ctrg'], function(result) {
            variables.start_bot = result.start_bot_ctrg;
        })
        chrome.storage.local.get(['sound_ctrg'], function(result) {
            variables.sound = result.sound_ctrg;
        })
        chrome.storage.local.get(['vs_or_ut_ctrg'], function(result) {
            variables.vs_or_ut = result.vs_or_ut_ctrg;
        })
        chrome.storage.local.get(['heal_or_no_ctrg'], function(result) {
            variables.heal_or_no = result.heal_or_no_ctrg;
        })
        chrome.storage.local.get(['sand_s_ctrg'], function(result) {
            variables.sand_s = result.sand_s_ctrg;
        })
        chrome.storage.local.get(['hail_ctrg'], function(result) {
            variables.hail = result.hail_ctrg;
        })
        chrome.storage.local.get(['craft_ctrg'], function(result) {
            variables.craft = result.craft_ctrg;
        })
    })
}

function create_working_location() {    //
    variables.location_name = $('#divLocTitleText').text();
    switch ($('.locpath').text().split(' >', 1).toString()) {
        case 'Восточный Джото': {
            variables.region = east_joto;
            break;
        }
        case 'Канто': {
            variables.region = canto;
            break;
        }
        case 'о.Селен': {
            variables.region = selene_island;
            break;
        }
        case 'Западный Джото': {
            variables.region = west_joto;
            break;
        }
        case 'Южный Архипелаг': {
            variables.region = southern_archipelago;
             break;
        }
        default: {
            variables.region = event_region;
         };
    };
    if (Object.keys(working_location).length == 0) {
        if (variables.location_name in variables.region) {
            working_location = variables?.region[variables.location_name];
        } else {
            working_location = {};
            chrome.storage.local.set({'start_bot_ctrg': false});
        }
    } else {
        if (working_location?.treatment_path[0].indexOf(variables.location_name) == -1) {
        working_location = {};
        chrome.storage.local.set({'start_bot_ctrg': false});
        }
    }
}

function variables_input() {    //ввод данных
    variables.visio_fight = $('#divVisioFight').attr('style') == 'display: none;' ? false : true;
    variables.close_fight_button = $('#divFightButtons div:last').attr('style') == 'display: none;' ? false : true;
    if (variables.visio_fight) {
        variables.fatigue = $('#body').text().indexOf('Вы слишком ослаблены и не можете перемещаться.') == -1 ? false : true; 
        variables.enemy_monster_color = $('#divFightH .minicard div:first span').text() != '' ? true : false;
        variables.enemy_monster_name = $('#divFightH div').is($('.name')) ? $('#divFightH div.name').text() : '';
        variables.enemy_monster_lvl = $('#divFightH div').is($('.lvl')) ? $('#divFightH div.lvl').text() : '';
        variables.enemy_monster_gender = $('#divFightH div').is($('.gender.sex1')) ? 'male' : $('#divFightH div').is($('.gender.sex2')) ? 'female' : $('#divFightH div').is($('.gender.sex3')) ? 'asexual' : '';
        variables.enemy_monster_catching = $('#divFightOptions div').is($('.nocatch')) ? false : true;
        variables.weather = $('#divFightData div').is($('.iconweather.w0')) ? 'normal' : $('#divFightData div').is($('.iconweather.w1')) ? 'rain' : $('#divFightData div').is($('.iconweather.w2')) ? 'sunny' : $('#divFightData div').is($('.iconweather.w3')) ? 'hail' : $('#divFightData div').is($('.iconweather.w4')) ? 'storm' : '';
        variables.attack_first_name = $('.divMoveInfo.clickable:eq(0) .divMoveTitle.category2').text();
        variables.attack_first_pp = +$('.divMoveInfo.clickable:eq(0) .divMoveParams:first').text().split('/')[0];
        variables.attack_second_pp = +$('.divMoveInfo.clickable:eq(1) .divMoveParams:first').text().split('/')[0];
        variables.attack_third_pp = +$('.divMoveInfo.clickable:eq(2) .divMoveParams:first').text().split('/')[0];
        variables.attack_fourth_pp = +$('.divMoveInfo.clickable:eq(3) .divMoveParams:first').text().split('/')[0];
        variables.enemy_type = $('#divFightH span.title').text();
        {
            if ($('#divFightI div').is($('.progressbar.barHP.max'))) {
                variables.my_monster_hp = $('#divVisioFight').attr('style') == '' ? +$('.progressbar.barHP.max div').attr('style').substring($('.progressbar.barHP.max div').attr('style').search(' '), $('.progressbar.barHP.max div').attr('style').search('%')) : variables.my_monster_hp;
            };
            if ($('#divFightI div').is($('.progressbar.barHP.mid'))) {
                variables.my_monster_hp = $('#divVisioFight').attr('style') == '' ? +$('.progressbar.barHP.mid div').attr('style').substring($('.progressbar.barHP.mid div').attr('style').search(' '), $('.progressbar.barHP.mid div').attr('style').search('%')) : variables.my_monster_hp;
            };
            if ($('#divFightI div').is($('.progressbar.barHP.min'))) {
                variables.my_monster_hp = $('#divVisioFight').attr('style') == '' ? +$('.progressbar.barHP.min div').attr('style').substring($('.progressbar.barHP.min div').attr('style').search(' '), $('.progressbar.barHP.min div').attr('style').search('%')) : variables.my_monster_hp;
            };
        } //Количество НР у монстра
        if ((variables.attack_first_pp + variables.attack_second_pp) <= 3 || variables.my_monster_hp < 40 || variables.attack_third_pp == 0) {
            variables.need_heal = true;
            console.log('heal');
        }
    }
    if ($('#body').text().indexOf('Лечение не требуется.') != -1) {
        variables.need_heal = false;
    }
    variables.button_wild_monsters = $('div').is($('.button.btnSwitchWilds.withtext.pressed'));

    if (variables.enemy_type == 'Дикий монстр') {
        console.log(1);
        if (variables.enemy_monster_catching) {
            console.log(2);
            if (variables.enemy_monster_color) {
                console.log(-3);
                variables.kill_or_no = false;
            } else {
                console.log(3)
                if (variables.enemy_monster_name in working_location) {
                    console.log(4)
                    if ((working_location[variables.enemy_monster_name][0] < variables.enemy_monster_lvl)
                    && (working_location[variables.enemy_monster_name][1] > variables.enemy_monster_lvl)) {
                        console.log(5)
                        if (working_location[variables.enemy_monster_name][2] == 'nobody') {
                            console.log(6)
                            variables.kill_or_no = true;
                        };
                        if (working_location[variables.enemy_monster_name][2] == 'all') {
                            console.log(7)
                            variables.kill_or_no = false;
                        };
                        if (working_location[variables.enemy_monster_name][2] == variables.enemy_monster_gender) {
                            console.log(8)
                            variables.kill_or_no = false;
                        }
                    } else {
                        console.log(-5)
                        variables.kill_or_no = false;
                    };
                } else {
                    console.log(variables);
                    console.log(-4)
                    variables.kill_or_no = false;
                }
            }
        } else {
            console.log(-1);
            variables.kill_or_no = true;
        }
    } else {
        console.log(-1);
        variables.kill_or_no = false;
    }
    console.log('----------');
}

window.onfocus = function () {
    variables.window_focus = true;
} //пользователь на вкладке сайте
window.onblur = function () {
    variables.window_focus = false;
} //пользователь закрыл вкладку или переключил на другую

function sound_start() {
    if (variables.sound) {
        if (!variables.window_focus) {
            sound_signal.sound.play();
        }
    }
} //вызов звукового сигнала

function fight_go() {
    if (variables.close_fight_button) {
        $('div:contains("Закрыть"):last').click();
        return;
    };
    if (variables.my_monster_hp >= 25 && variables.craft_monsters.includes(variables.enemy_monster_name) && variables.craft && variables.attack_third_pp != 0) {
        $('.divMoveInfo.clickable:eq(2)').click();
        return;
    };
    if (variables.my_monster_hp >= 25 && variables.attack_first_pp != 0) {
        $('.divMoveInfo.clickable:first').click();
        return;
    };
    if (variables.my_monster_hp >= 25 && variables.attack_second_pp != 0) {
        $('.divMoveInfo.clickable:eq(1)').click();
        return;
    };
    if (variables.my_monster_hp < 25 || (variables.attack_first_pp == 0 && variables.attack_second_pp == 0 && variables.attack_third_pp == 0)) {
        sound_start();
        return;
    };
}

function button_wild_monsters_fun() {
    if ($('.button.btnSwitchWilds.withtext.pressed').length > 0) { 
        if (variables.need_heal) {
            $('.button.btnSwitchWilds.withtext.pressed').click(); 
        }
    } else {
        if (!variables.need_heal && variables.location_name == variables?.region[variables.location_name]?.treatment_path[0][0]) {
            $('.button.btnSwitchWilds.withtext').click();   
        }
    }

}

function go_to_heal() {
    if (variables.need_heal) {
        if (working_location?.treatment_path[0].indexOf(variables.location_name) != working_location?.treatment_path[0].length - 1) {
            $(working_location.treatment_path[1][working_location?.treatment_path[0].indexOf(variables.location_name) + 1]).click();
        } else {
            if (variables.helper_heal) {
                $('.button.btnLocHeal').click();
                variables.helper_heal = false;
            } else {
                $('.divElement.clickable.menuHealAll.highlighted').click();
                variables.helper_heal = true;
            }
        }
    } else {
        if (working_location?.treatment_path[0].indexOf(variables.location_name) != 0) {
            $(working_location.treatment_path[1][working_location?.treatment_path[0].indexOf(variables.location_name) - 1]).click();
        }
    }
}