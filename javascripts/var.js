var settings={
	opts : 5
}
var review=[];
var testNum=[];
var root=[
	"plat",
	"plor"
];
var affix=[
	[
		"amphi",
		"col-",
		"cor",
		"wise",
		"ster",
		"acious",
		"arium",
		"ard",
		"ary",
		"el",
		"ery",
		"esque"
	],
	[
		"rud",
		"san",
		"sanit",
		"sign",
		"temper",
		"tempor",
		"tempt",
		"tenu",
		"tir",
		"trud",
		"vac",
		"van",
		"void",
		"vad",
		"vas",
		"vag",
		"vagr",
		"venge",
		"verb",
		"vest",
		"vulg",
		"agog",
		"alg",
		"ampl",
		"arm",
		"barr"
	],
	[
		"dole",
		"dom",
		"dox",
		"fill",
		"fili",
		"fum",
		"funct",
		"helio",
		"hor",
		"horr",
		"journ",
		"jug",
		"langu",
		"lapid",
		"nihil",
		"null",
		"phan",
		"ploy",
		"plumb",
		"porc",
		"proach",
		"pud",
		"rage",
		"salt",
		"sult"
	],
	[
		"vil",
		"ambul",
		"aqu",
		"bell",
		"bel",
		"card",
		"cord",
		"crypt",
		"dur",
		"dyn",
		"dynam",
		"em",
		"empt",
		"ampl",
		"erg",
		"it",
		"err",
		"hap",
		"laps"
	]
]
var affix_meanings=[
	[
		"两个，两种",
		"共同",
		"共同",
		"状态",
		"～人",
		"有特征的，多～的",
		"地点，场所",
		"不好的人",
		"～的／人，场所，物",
		"人或物",
		"场所，地点／行为，情况",
		"如～的"
	],
	[
		"原始，粗野",
		"健康的",
		"健康的",
		"记号，信号",
		"时间或时间引起的现象",
		"时间或时间引起的现象",
		"尝试",
		"细，薄",
		"拉",
		"推",
		"推",
		"空",
		"空",
		"空",
		"走",
		"走",
		"漫游",
		"漫游",
		"惩罚，报仇",
		"衣服",
		"人群",
		"引导",
		"痛",
		"大",
		"武器",
		"棒，栏"
	],
	[
		
		"悲伤",
		"屋，家",
		"观点",
		"线条",
		"线条",
		"烟",
		"活动",
		"太阳",
		"颤抖，害怕",
		"颤抖，害怕",
		"日期",
		"牛轭",
		"虚弱",
		"石头",
		"无，不存在",
		"没有",
		"显示",
		"用，参加",
		"铅",
		"猪",
		"接近",
		"感到羞耻",
		"疯狂",
		"跳",
		"跳"
	],
	[
		"卑劣",
		"行走",
		"水",
		"战争，打斗",
		"战争，打斗",
		"心脏，一致",
		"心脏，一致",
		"秘密，隐藏",
		"持久，坚硬",
		"力量",
		"力量",
		"拿，获得",
		"拿，获得",
		"拿，获得",
		"能量，活动",
		"行走",
		"漫游，犯错误",
		"机会，运气",
		"滑，滑走"
	]
]