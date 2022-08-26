import PinYin from "../search/pinyin";

let TimeZones = [
    {"interval": 480, "zh": "上海（中国）", "en": "Asia/Shanghai"}, {
    "interval": 480,
    "zh": "北京（中国）",
    "en": "Asia/Beijing"
}, {"zh": "台北（中国）", "interval": 480, "en": "Asia/Taipei"}, {
    "zh": "重庆（中国）",
    "en": "Asia/Chongqing",
    "interval": 480
}, {"en": "Africa/Abidjan", "interval": 0, "zh": "阿比让（非洲）"}, {
    "zh": "阿克拉（非洲）",
    "en": "Africa/Accra",
    "interval": 0
}, {"zh": "亚的斯亚贝巴（非洲）", "interval": 180, "en": "Africa/Addis_Ababa"}, {
    "zh": "阿尔及尔（非洲）",
    "en": "Africa/Algiers",
    "interval": 60
}, {"en": "Africa/Asmara", "interval": 180, "zh": "阿斯马拉（非洲）"}, {
    "zh": "巴马科（非洲）",
    "en": "Africa/Bamako",
    "interval": 0
}, {"en": "Africa/Bangui", "interval": 60, "zh": "班吉（非洲）"}, {
    "en": "Africa/Banjul",
    "zh": "班珠尔（非洲）",
    "interval": 0
}, {"zh": "比绍（非洲）", "interval": 0, "en": "Africa/Bissau"}, {
    "en": "Africa/Blantyre",
    "zh": "布兰太尔（非洲）",
    "interval": 120
}, {"en": "Africa/Brazzaville", "interval": 60, "zh": "布拉柴维尔（非洲）"}, {
    "interval": 120,
    "zh": "布琼布拉（非洲）",
    "en": "Africa/Bujumbura"
}, {"interval": 120, "en": "Africa/Cairo", "zh": "开罗（非洲）"}, {
    "zh": "卡萨布兰卡（非洲）",
    "en": "Africa/Casablanca",
    "interval": 60
}, {"interval": 120, "en": "Africa/Ceuta", "zh": "休达（非洲）"}, {
    "interval": 0,
    "en": "Africa/Conakry",
    "zh": "科纳克里（非洲）"
}, {"en": "Africa/Dakar", "zh": "达喀尔（非洲）", "interval": 0}, {
    "zh": "达累斯萨拉姆（非洲）",
    "interval": 180,
    "en": "Africa/Dar_es_Salaam"
}, {"zh": "吉布提（非洲）", "interval": 180, "en": "Africa/Djibouti"}, {
    "zh": "杜阿拉（非洲）",
    "en": "Africa/Douala",
    "interval": 60
}, {"en": "Africa/El_Aaiun", "interval": 60, "zh": "埃昂（非洲）"}, {
    "en": "Africa/Freetown",
    "zh": "弗里敦（非洲）",
    "interval": 0
}, {"en": "Africa/Gaborone", "zh": "哈博罗内（非洲）", "interval": 120}, {
    "en": "Africa/Harare",
    "zh": "哈拉雷（非洲）",
    "interval": 120
}, {"interval": 120, "zh": "约翰内斯堡（非洲）", "en": "Africa/Johannesburg"}, {
    "en": "Africa/Juba",
    "interval": 180,
    "zh": "朱巴（非洲）"
}, {"en": "Africa/Kampala", "interval": 180, "zh": "坎帕拉（非洲）"}, {
    "en": "Africa/Khartoum",
    "zh": "喀土穆（非洲）",
    "interval": 120
}, {"en": "Africa/Kigali", "zh": "基加利（非洲）", "interval": 120}, {
    "en": "Africa/Kinshasa",
    "zh": "金沙萨（非洲）",
    "interval": 60
}, {"interval": 60, "zh": "拉各斯（非洲）", "en": "Africa/Lagos"}, {
    "zh": "利伯维尔（非洲）",
    "interval": 60,
    "en": "Africa/Libreville"
}, {"interval": 0, "en": "Africa/Lome", "zh": "洛美（非洲）"}, {
    "zh": "罗安达（非洲）",
    "en": "Africa/Luanda",
    "interval": 60
}, {"en": "Africa/Lubumbashi", "zh": "卢本巴希（非洲）", "interval": 120}, {
    "en": "Africa/Lusaka",
    "zh": "卢萨卡（非洲）",
    "interval": 120
}, {"zh": "马拉博（非洲）", "interval": 60, "en": "Africa/Malabo"}, {
    "en": "Africa/Maputo",
    "interval": 120,
    "zh": "马普托（非洲）"
}, {"en": "Africa/Maseru", "zh": "马塞鲁（非洲）", "interval": 120}, {
    "en": "Africa/Mbabane",
    "interval": 120,
    "zh": "姆巴巴尼（非洲）"
}, {"zh": "摩加迪沙（非洲）", "en": "Africa/Mogadishu", "interval": 180}, {
    "zh": "蒙罗维亚（非洲）",
    "en": "Africa/Monrovia",
    "interval": 0
}, {"interval": 180, "zh": "内罗毕（非洲）", "en": "Africa/Nairobi"}, {
    "interval": 60,
    "en": "Africa/Ndjamena",
    "zh": "恩贾梅纳（非洲）"
}, {"interval": 60, "en": "Africa/Niamey", "zh": "尼亚美（非洲）"}, {
    "interval": 0,
    "zh": "努瓦克肖特（非洲）",
    "en": "Africa/Nouakchott"
}, {"en": "Africa/Ouagadougou", "interval": 0, "zh": "瓦加杜古（非洲）"}, {
    "interval": 60,
    "zh": "新港（非洲）",
    "en": "Africa/Porto-Novo"
}, {"zh": "圣多美（非洲）", "interval": 0, "en": "Africa/Sao_Tome"}, {
    "en": "Africa/Tripoli",
    "interval": 120,
    "zh": "的黎波里（非洲）"
}, {"interval": 60, "en": "Africa/Tunis", "zh": "突尼斯（非洲）"}, {
    "en": "Africa/Windhoek",
    "zh": "温得和克（非洲）",
    "interval": 120
}, {"zh": "阿达克（美洲）", "interval": -540, "en": "America/Adak"}, {
    "interval": -480,
    "en": "America/Anchorage",
    "zh": "安克雷奇（美洲）"
}, {"zh": "安圭拉（美洲）", "en": "America/Anguilla", "interval": -240}, {
    "interval": -240,
    "en": "America/Antigua",
    "zh": "安提瓜（美洲）"
}, {"zh": "阿拉瓜那（美洲）", "en": "America/Araguaina", "interval": -180}, {
    "zh": "美洲/阿根廷/布宜诺斯艾利斯",
    "en": "America/Argentina/Buenos_Aires",
    "interval": -180
}, {"zh": "美洲/阿根廷/卡塔马卡", "en": "America/Argentina/Catamarca", "interval": -180}, {
    "interval": -180,
    "en": "America/Argentina/Cordoba",
    "zh": "美洲/阿根廷/科尔多瓦"
}, {"zh": "美洲/阿根廷/朱伊", "en": "America/Argentina/Jujuy", "interval": -180}, {
    "en": "America/Argentina/La_Rioja",
    "interval": -180,
    "zh": "美洲/阿根廷/拉丁美洲"
}, {"en": "America/Argentina/Mendoza", "zh": "美洲/阿根廷/门多萨", "interval": -180}, {
    "en": "America/Argentina/Rio_Gallegos",
    "interval": -180,
    "zh": "美洲/阿根廷/里约热内卢加列戈斯"
}, {"en": "America/Argentina/Salta", "interval": -180, "zh": "美洲/阿根廷/萨尔塔"}, {
    "zh": "美洲/阿根廷/圣胡安",
    "en": "America/Argentina/San_Juan",
    "interval": -180
}, {"interval": -180, "zh": "美洲/阿根廷/圣路易斯", "en": "America/Argentina/San_Luis"}, {
    "interval": -180,
    "zh": "美洲/阿根廷/图库曼",
    "en": "America/Argentina/Tucuman"
}, {"en": "America/Argentina/Ushuaia", "interval": -180, "zh": "美洲/阿根廷/乌斯怀亚"}, {
    "interval": -240,
    "zh": "阿鲁巴（美洲）",
    "en": "America/Aruba"
}, {"zh": "亚松森（美洲）", "en": "America/Asuncion", "interval": -240}, {
    "interval": -300,
    "en": "America/Atikokan",
    "zh": "阿提科坎（美洲）"
}, {"zh": "巴伊亚（美洲）", "en": "America/Bahia", "interval": -180}, {
    "en": "America/Bahia_Banderas",
    "zh": "班德拉斯（美洲）",
    "interval": -300
}, {"zh": "巴巴多斯（美洲）", "interval": -240, "en": "America/Barbados"}, {
    "interval": -180,
    "zh": "贝伦（美洲）",
    "en": "America/Belem"
}, {"en": "America/Belize", "interval": -360, "zh": "伯利兹（美洲）"}, {
    "en": "America/Blanc-Sablon",
    "interval": -240,
    "zh": "布兰科萨伯伦（美洲）"
}, {"interval": -240, "zh": "Boa（美洲）", "en": "America/Boa_Vista"}, {
    "zh": "波哥大（美洲）",
    "en": "America/Bogota",
    "interval": -300
}, {"interval": -360, "en": "America/Boise", "zh": "博伊西（美洲）"}, {
    "en": "America/Cambridge_Bay",
    "interval": -360,
    "zh": "剑桥湾（美洲）"
}, {"en": "America/Campo_Grande", "interval": -240, "zh": "坎波格兰德（美洲）"}, {
    "zh": "坎昆（美洲）",
    "en": "America/Cancun",
    "interval": -300
}, {"zh": "加拉加斯（美洲）", "en": "America/Caracas", "interval": -240}, {
    "en": "America/Cayenne",
    "interval": -180,
    "zh": "卡宴（美洲）"
}, {"interval": -300, "en": "America/Cayman", "zh": "开曼群岛（美洲）"}, {
    "interval": -300,
    "en": "America/Chicago",
    "zh": "芝加哥（美国）"
}, {"zh": "吉娃娃（美洲）", "en": "America/Chihuahua", "interval": -360}, {
    "zh": "哥斯达黎加（美洲）",
    "en": "America/Costa_Rica",
    "interval": -360
}, {"en": "America/Creston", "interval": -420, "zh": "克雷斯顿（美洲）"}, {
    "interval": -240,
    "en": "America/Cuiaba",
    "zh": "库亚巴（美洲）"
}, {"interval": -240, "en": "America/Curacao", "zh": "库拉索岛（美洲）"}, {
    "en": "America/Danmarkshavn",
    "zh": "丹麦（美洲）",
    "interval": 0
}, {"zh": "道森（美洲）", "interval": -420, "en": "America/Dawson"}, {
    "zh": "道森溪（美洲）",
    "en": "America/Dawson_Creek",
    "interval": -420
}, {"interval": -360, "zh": "丹佛（美洲）", "en": "America/Denver"}, {
    "en": "America/Detroit",
    "interval": -240,
    "zh": "底特律（美国）"
}, {"interval": -240, "en": "America/Dominica", "zh": "多米尼加（美洲）"}, {
    "en": "America/Edmonton",
    "interval": -360,
    "zh": "埃德蒙顿（美洲）"
}, {"interval": -300, "zh": "埃鲁内佩（美洲）", "en": "America/Eirunepe"}, {
    "zh": "萨尔瓦多（美洲）",
    "en": "America/El_Salvador",
    "interval": -360
}, {"en": "America/Fort_Nelson", "zh": "纳尔逊堡（美洲）", "interval": -420}, {
    "en": "America/Fortaleza",
    "interval": -180,
    "zh": "福塔莱萨（美洲）"
}, {"zh": "格拉斯湾（美洲）", "interval": -180, "en": "America/Glace_Bay"}, {
    "zh": "戈德萨（美洲）",
    "interval": -120,
    "en": "America/Godthab"
}, {"interval": -180, "en": "America/Goose_Bay", "zh": "鹅湾（美洲）"}, {
    "interval": -240,
    "en": "America/Grand_Turk",
    "zh": "大土耳其人（美洲）"
}, {"en": "America/Grenada", "interval": -240, "zh": "格林纳达（美洲）"}, {
    "zh": "瓜德罗普（美洲）",
    "interval": -240,
    "en": "America/Guadeloupe"
}, {"interval": -360, "zh": "危地马拉（美洲）", "en": "America/Guatemala"}, {
    "interval": -300,
    "en": "America/Guayaquil",
    "zh": "瓜亚基尔（美洲）"
}, {"zh": "圭亚那（美洲）", "en": "America/Guyana", "interval": -240}, {
    "zh": "哈利法克斯（美洲）",
    "en": "America/Halifax",
    "interval": -180
}, {"en": "America/Havana", "interval": -240, "zh": "哈瓦那（美洲）"}, {
    "interval": -420,
    "zh": "赫莫西罗（美洲）",
    "en": "America/Hermosillo"
}, {"zh": "美洲/印第安纳/印第安纳波利斯", "en": "America/Indiana/Indianapolis", "interval": -240}, {
    "interval": -300,
    "en": "America/Indiana/Knox",
    "zh": "美洲/印第安纳/诺克斯"
}, {"interval": -240, "en": "America/Indiana/Marengo", "zh": "美洲/印第安纳/马伦戈"}, {
    "en": "America/Indiana/Petersburg",
    "interval": -240,
    "zh": "美洲/印第安纳/彼得堡"
}, {"en": "America/Indiana/Tell_City", "zh": "美国/印第安纳州/泰尔丘市", "interval": -300}, {
    "interval": -240,
    "en": "America/Indiana/Vevay",
    "zh": "美国/印第安纳/维维"
}, {"interval": -240, "zh": "美洲/印第安纳/文森", "en": "America/Indiana/Vincennes"}, {
    "interval": -240,
    "zh": "美洲/肯塔基州/蒙蒂塞洛",
    "en": "America/Indiana/Winamac"
}, {"en": "America/Inuvik", "interval": -360, "zh": "因纽维克（美洲）"}, {
    "interval": -240,
    "zh": "伊卡鲁伊特（美洲）",
    "en": "America/Iqaluit"
}, {"zh": "牙买加（美洲）", "en": "America/Jamaica", "interval": -300}, {
    "interval": -480,
    "zh": "朱诺（美洲）",
    "en": "America/Juneau"
}, {"zh": "美国/肯塔基州/路易斯维尔", "interval": -240, "en": "America/Kentucky/Louisville"}, {
    "zh": "美国/肯塔基州/蒙蒂塞罗",
    "interval": -240,
    "en": "America/Kentucky/Monticello"
}, {"interval": -240, "zh": "王国（美洲）", "en": "America/Kralendijk"}, {
    "interval": -240,
    "zh": "拉巴斯（美洲）",
    "en": "America/La_Paz"
}, {"zh": "利马（美洲）", "en": "America/Lima", "interval": -300}, {
    "zh": "洛杉矶（美国）",
    "interval": -420,
    "en": "America/Los_Angeles"
}, {"zh": "下丘王子（美洲）", "en": "America/Lower_Princes", "interval": -240}, {
    "zh": "马塞奥（美洲）",
    "en": "America/Maceio",
    "interval": -180
}, {"en": "America/Managua", "interval": -360, "zh": "马那瓜（美洲）"}, {
    "zh": "马瑙斯（美洲）",
    "en": "America/Manaus",
    "interval": -240
}, {"en": "America/Marigot", "zh": "马里戈（美洲）", "interval": -240}, {
    "interval": -240,
    "en": "America/Martinique",
    "zh": "马提尼克（美洲）"
}, {"en": "America/Matamoros", "interval": -300, "zh": "马塔莫罗斯（美洲）"}, {
    "en": "America/Mazatlan",
    "interval": -360,
    "zh": "马萨特兰（美洲）"
}, {"interval": -300, "en": "America/Menominee", "zh": "美诺米尼（美洲）"}, {
    "en": "America/Merida",
    "interval": -300,
    "zh": "梅里达（美洲）"
}, {"en": "America/Metlakatla", "interval": -480, "zh": "梅特拉卡特（美洲）"}, {
    "interval": -300,
    "en": "America/Mexico_City",
    "zh": "墨西哥城（美洲）"
}, {"en": "America/Miquelon", "zh": "密克隆（美洲）", "interval": -120}, {
    "interval": -180,
    "en": "America/Moncton",
    "zh": "蒙克顿（美洲）"
}, {"en": "America/Monterrey", "interval": -300, "zh": "蒙特雷（美洲）"}, {
    "interval": -180,
    "en": "America/Montevideo",
    "zh": "蒙得维的亚（美洲）"
}, {"en": "America/Montreal", "interval": -240, "zh": "蒙特利尔（美洲）"}, {
    "zh": "蒙特塞拉特（美洲）",
    "interval": -240,
    "en": "America/Montserrat"
}, {"interval": -240, "en": "America/Nassau", "zh": "拿骚（美洲）"}, {
    "en": "America/New_York",
    "interval": -240,
    "zh": "纽约（美国）"
}, {"en": "America/Nipigon", "zh": "尼比昂（美洲）", "interval": -240}, {
    "en": "America/Nome",
    "zh": "诺姆（美洲）",
    "interval": -480
}, {"zh": "诺伦哈（美洲）", "interval": -120, "en": "America/Noronha"}, {
    "zh": "美洲/北达科他州/贝乌拉",
    "interval": -300,
    "en": "America/North_Dakota/Beulah"
}, {"zh": "美洲/北达科他州/中心", "en": "America/North_Dakota/Center", "interval": -300}, {
    "interval": -300,
    "zh": "美洲/北达科他州/新塞勒姆",
    "en": "America/North_Dakota/New_Salem"
}, {"interval": -120, "zh": "努克（美洲）", "en": "America/Nuuk"}, {
    "en": "America/Ojinaga",
    "interval": -360,
    "zh": "奥金纳加（美洲）"
}, {"zh": "巴拿马（美洲）", "en": "America/Panama", "interval": -300}, {
    "en": "America/Pangnirtung",
    "interval": -240,
    "zh": "庞尼通（美洲）"
}, {"zh": "帕拉马里博（美洲）", "interval": -180, "en": "America/Paramaribo"}, {
    "en": "America/Phoenix",
    "interval": -420,
    "zh": "凤凰城（美洲）"
}, {"en": "America/Port-au-Prince", "interval": -240, "zh": "太子港（美国）"}, {
    "zh": "西班牙港口（美洲）",
    "en": "America/Port_of_Spain",
    "interval": -240
}, {"en": "America/Porto_Velho", "interval": -240, "zh": "波尔图维略（美洲）"}, {
    "zh": "波多黎各（美洲）",
    "interval": -240,
    "en": "America/Puerto_Rico"
}, {"interval": -180, "zh": "蓬塔阿里纳斯（美洲）", "en": "America/Punta_Arenas"}, {
    "en": "America/Rainy_River",
    "zh": "雨河（美洲）",
    "interval": -300
}, {"zh": "兰金湾（美洲）", "en": "America/Rankin_Inlet", "interval": -300}, {
    "zh": "累西腓（美洲）",
    "en": "America/Recife",
    "interval": -180
}, {"en": "America/Regina", "interval": -360, "zh": "里贾纳（美洲）"}, {
    "zh": "坚决（美国）",
    "en": "America/Resolute",
    "interval": -300
}, {"en": "America/Rio_Branco", "interval": -300, "zh": "里约布兰科（美洲）"}, {
    "interval": -420,
    "zh": "圣塔伊莎贝尔（美洲）",
    "en": "America/Santa_Isabel"
}, {"zh": "桑塔雷姆（美洲）", "interval": -180, "en": "America/Santarem"}, {
    "interval": -180,
    "zh": "圣地亚哥（美洲）",
    "en": "America/Santiago"
}, {"en": "America/Santo_Domingo", "interval": -240, "zh": "圣多明各（美洲）"}, {
    "zh": "圣保罗（美洲）",
    "interval": -180,
    "en": "America/Sao_Paulo"
}, {"interval": 0, "zh": "斯科尔斯比松（美洲）", "en": "America/Scoresbysund"}, {
    "interval": -360,
    "en": "America/Shiprock",
    "zh": "希普洛克（美洲）"
}, {"zh": "锡特卡（美洲）", "en": "America/Sitka", "interval": -480}, {
    "en": "America/St_Barthelemy",
    "interval": -240,
    "zh": "圣巴塞勒米（美洲）"
}, {"zh": "圣约翰（美洲）", "en": "America/St_Johns", "interval": -150}, {
    "en": "America/St_Kitts",
    "interval": -240,
    "zh": "圣基茨（美洲）"
}, {"zh": "圣卢西亚（美洲）", "interval": -240, "en": "America/St_Lucia"}, {
    "zh": "圣托马斯（美洲）",
    "en": "America/St_Thomas",
    "interval": -240
}, {"zh": "圣文森特（美洲）", "interval": -240, "en": "America/St_Vincent"}, {
    "en": "America/Swift_Current",
    "zh": "斯威夫特海流（美洲）",
    "interval": -360
}, {"zh": "特古西加尔巴（美洲）", "interval": -360, "en": "America/Tegucigalpa"}, {
    "en": "America/Thule",
    "interval": -180,
    "zh": "图尔（美洲）"
}, {"zh": "雷霆湾（美洲）", "en": "America/Thunder_Bay", "interval": -240}, {
    "interval": -420,
    "en": "America/Tijuana",
    "zh": "蒂华纳（美洲）"
}, {"en": "America/Toronto", "zh": "多伦多（美洲）", "interval": -240}, {
    "interval": -240,
    "en": "America/Tortola",
    "zh": "托托拉（美洲）"
}, {"interval": -420, "zh": "温哥华（美洲）", "en": "America/Vancouver"}, {
    "zh": "白马（美洲）",
    "en": "America/Whitehorse",
    "interval": -420
}, {"zh": "温尼伯（美洲）", "interval": -300, "en": "America/Winnipeg"}, {
    "zh": "雅库塔（美洲）",
    "interval": -480,
    "en": "America/Yakutat"
}, {"interval": -360, "zh": "黄刀（美洲）", "en": "America/Yellowknife"}, {
    "en": "Antarctica/Casey",
    "interval": 480,
    "zh": "凯西（南极洲）"
}, {"en": "Antarctica/Davis", "interval": 420, "zh": "戴维斯（南极洲）"}, {
    "interval": 600,
    "zh": "杜蒙德维尔（南极洲）",
    "en": "Antarctica/DumontDUrville"
}, {"interval": 660, "en": "Antarctica/Macquarie", "zh": "麦格理（南极洲）"}, {
    "interval": 300,
    "zh": "马森（南极洲）",
    "en": "Antarctica/Mawson"
}, {"en": "Antarctica/McMurdo", "interval": 720, "zh": "麦克默多（南极洲）"}, {
    "en": "Antarctica/Palmer",
    "zh": "帕尔默（南极洲）",
    "interval": -180
}, {"zh": "罗瑟拉（南极洲）", "en": "Antarctica/Rothera", "interval": -180}, {
    "zh": "南极（南极洲）",
    "interval": 720,
    "en": "Antarctica/South_Pole"
}, {"interval": 180, "zh": "西瓦（南极洲）", "en": "Antarctica/Syowa"}, {
    "en": "Antarctica/Troll",
    "zh": "巨魔（南极洲）",
    "interval": 120
}, {"interval": 360, "en": "Antarctica/Vostok", "zh": "沃斯托克（南极洲）"}, {
    "interval": 120,
    "zh": "朗伊尔拜恩（北极）",
    "en": "Arctic/Longyearbyen"
}, {"en": "Asia/Aden", "zh": "亚丁（亚洲）", "interval": 180}, {
    "interval": 360,
    "en": "Asia/Almaty",
    "zh": "阿拉木图（亚洲）"
}, {"interval": 180, "zh": "安曼（亚洲）", "en": "Asia/Amman"}, {
    "zh": "阿纳德尔（亚洲）",
    "en": "Asia/Anadyr",
    "interval": 720
}, {"interval": 300, "en": "Asia/Aqtau", "zh": "阿克套（亚洲）"}, {
    "zh": "阿克托贝（亚洲）",
    "en": "Asia/Aqtobe",
    "interval": 300
}, {"en": "Asia/Ashgabat", "zh": "阿什哈巴德（亚洲）", "interval": 300}, {
    "interval": 300,
    "en": "Asia/Atyrau",
    "zh": "阿特劳（亚洲）"
}, {"en": "Asia/Baghdad", "interval": 180, "zh": "巴格达（亚洲）"}, {
    "en": "Asia/Bahrain",
    "interval": 180,
    "zh": "巴林（亚洲）"
}, {"interval": 240, "en": "Asia/Baku", "zh": "巴库（亚洲）"}, {
    "zh": "曼谷（亚洲）",
    "en": "Asia/Bangkok",
    "interval": 420
}, {"en": "Asia/Barnaul", "interval": 420, "zh": "巴诺（亚洲）"}, {
    "en": "Asia/Beirut",
    "zh": "贝鲁特（亚洲）",
    "interval": 180
}, {"zh": "比什凯克（亚洲）", "interval": 360, "en": "Asia/Bishkek"}, {
    "interval": 480,
    "zh": "文莱（亚洲）",
    "en": "Asia/Brunei"
}, {"en": "Asia/Calcutta", "interval": 330, "zh": "加尔各答（亚洲）"}, {
    "interval": 540,
    "en": "Asia/Chita",
    "zh": "奇塔（亚洲）"
}, {"en": "Asia/Choibalsan", "interval": 480, "zh": "Choibalsan（亚洲）"}, {
    "zh": "科伦坡（亚洲）",
    "en": "Asia/Colombo",
    "interval": 330
}, {"en": "Asia/Damascus", "zh": "大马士革（亚洲）", "interval": 180}, {
    "zh": "达卡（亚洲）",
    "en": "Asia/Dhaka",
    "interval": 360
}, {"interval": 540, "zh": "帝力（亚洲）", "en": "Asia/Dili"}, {
    "en": "Asia/Dubai",
    "zh": "迪拜（亚洲）",
    "interval": 240
}, {"interval": 300, "en": "Asia/Dushanbe", "zh": "杜尚别（亚洲）"}, {
    "interval": 180,
    "en": "Asia/Famagusta",
    "zh": "法马古斯塔（亚洲）"
}, {"en": "Asia/Gaza", "zh": "加沙（亚洲）", "interval": 180}, {
    "interval": 480,
    "zh": "哈尔滨（亚洲）",
    "en": "Asia/Harbin"
}, {"en": "Asia/Hebron", "interval": 180, "zh": "希伯伦（亚洲）"}, {
    "en": "Asia/Ho_Chi_Minh",
    "interval": 420,
    "zh": "胡志明（亚洲）"
}, {"zh": "香港（亚洲）", "interval": 480, "en": "Asia/Hong_Kong"}, {
    "interval": 420,
    "zh": "Hovd（亚洲）",
    "en": "Asia/Hovd"
}, {"zh": "伊尔库茨克（亚洲）", "en": "Asia/Irkutsk", "interval": 480}, {
    "interval": 420,
    "en": "Asia/Jakarta",
    "zh": "雅加达（亚洲）"
}, {"en": "Asia/Jayapura", "zh": "Jayapura（亚洲）", "interval": 540}, {
    "interval": 180,
    "zh": "耶路撒冷（亚洲）",
    "en": "Asia/Jerusalem"
}, {"en": "Asia/Kabul", "interval": 270, "zh": "喀布尔（亚洲）"}, {
    "zh": "堪察加半岛（亚洲）",
    "en": "Asia/Kamchatka",
    "interval": 720
}, {"interval": 300, "en": "Asia/Karachi", "zh": "卡拉奇（亚洲）"}, {
    "zh": "喀什（亚洲）",
    "en": "Asia/Kashgar",
    "interval": 360
}, {"en": "Asia/Kathmandu", "zh": "加德满都（亚洲）", "interval": 345}, {
    "interval": 345,
    "zh": "加德满都（亚洲）",
    "en": "Asia/Katmandu"
}, {"interval": 540, "en": "Asia/Khandyga", "zh": "坎迪加（亚洲）"}, {
    "zh": "克拉斯诺亚尔斯克（亚洲）",
    "en": "Asia/Krasnoyarsk",
    "interval": 420
}, {"en": "Asia/Kuala_Lumpur", "interval": 480, "zh": "吉隆坡（亚洲）"}, {
    "zh": "古晋（亚洲）",
    "en": "Asia/Kuching",
    "interval": 480
}, {"en": "Asia/Kuwait", "interval": 180, "zh": "科威特（亚洲）"}, {
    "interval": 480,
    "en": "Asia/Macau",
    "zh": "澳门（亚洲）"
}, {"en": "Asia/Magadan", "zh": "马加丹（亚洲）", "interval": 660}, {
    "en": "Asia/Makassar",
    "interval": 480,
    "zh": "马卡萨尔（亚洲）"
}, {"zh": "马尼拉（亚洲）", "interval": 480, "en": "Asia/Manila"}, {
    "interval": 240,
    "en": "Asia/Muscat",
    "zh": "马斯喀特（亚洲）"
}, {"zh": "尼科西亚（亚洲）", "en": "Asia/Nicosia", "interval": 180}, {
    "en": "Asia/Novokuznetsk",
    "interval": 420,
    "zh": "新库兹涅茨克（亚洲）"
}, {"en": "Asia/Novosibirsk", "interval": 420, "zh": "新西伯利亚（亚洲）"}, {
    "interval": 360,
    "en": "Asia/Omsk",
    "zh": "鄂木斯克（亚洲）"
}, {"interval": 300, "zh": "乌拉尔（亚洲）", "en": "Asia/Oral"}, {
    "zh": "金边（亚洲）",
    "en": "Asia/Phnom_Penh",
    "interval": 420
}, {"zh": "庞蒂亚纳克（亚洲）", "interval": 420, "en": "Asia/Pontianak"}, {
    "interval": 540,
    "en": "Asia/Pyongyang",
    "zh": "平壤（亚洲）"
}, {"zh": "卡塔尔（亚洲）", "interval": 180, "en": "Asia/Qatar"}, {
    "interval": 360,
    "en": "Asia/Qostanay",
    "zh": "科斯塔奈（亚洲）"
}, {"en": "Asia/Qyzylorda", "zh": "克孜洛尔达（亚洲）", "interval": 300}, {
    "interval": 390,
    "zh": "仰光（亚洲）",
    "en": "Asia/Rangoon"
}, {"en": "Asia/Riyadh", "zh": "利雅得（亚洲）", "interval": 180}, {
    "zh": "萨哈林（亚洲）",
    "en": "Asia/Sakhalin",
    "interval": 660
}, {"zh": "撒马尔罕（亚洲）", "en": "Asia/Samarkand", "interval": 300}, {
    "en": "Asia/Seoul",
    "interval": 540,
    "zh": "首尔（亚洲）"
}, {"interval": 480, "zh": "新加坡（亚洲）", "en": "Asia/Singapore"}, {
    "zh": "中克里米亚（亚洲）",
    "en": "Asia/Srednekolymsk",
    "interval": 660
}, {"interval": 300, "en": "Asia/Tashkent", "zh": "塔什干（亚洲）"}, {
    "en": "Asia/Tbilisi",
    "zh": "第比利斯（亚洲）",
    "interval": 240
}, {"interval": 270, "en": "Asia/Tehran", "zh": "德黑兰（亚洲）"}, {
    "interval": 360,
    "zh": "廷布（亚洲）",
    "en": "Asia/Thimphu"
}, {"en": "Asia/Tokyo", "zh": "东京（亚洲）", "interval": 540}, {
    "en": "Asia/Tomsk",
    "interval": 420,
    "zh": "托木斯克（亚洲）"
}, {"en": "Asia/Ulaanbaatar", "zh": "乌兰巴托（亚洲）", "interval": 480}, {
    "en": "Asia/Urumqi",
    "zh": "乌鲁木齐（亚洲）",
    "interval": 360
}, {"en": "Asia/Ust-Nera", "zh": "乌斯季挪拉（亚洲）", "interval": 600}, {
    "interval": 420,
    "zh": "万象（亚洲）",
    "en": "Asia/Vientiane"
}, {"en": "Asia/Vladivostok", "interval": 600, "zh": "海参崴（亚洲）"}, {
    "en": "Asia/Yakutsk",
    "interval": 540,
    "zh": "雅库茨克（亚洲）"
}, {"zh": "仰光（亚洲）", "en": "Asia/Yangon", "interval": 390}, {
    "en": "Asia/Yekaterinburg",
    "interval": 300,
    "zh": "叶卡捷琳堡（亚洲）"
}, {"zh": "埃里温（亚洲）", "en": "Asia/Yerevan", "interval": 240}, {
    "en": "Atlantic/Azores",
    "interval": 0,
    "zh": "亚速尔群岛（大西洋）"
}, {"en": "Atlantic/Bermuda", "interval": -180, "zh": "百慕大（大西洋）"}, {
    "en": "Atlantic/Canary",
    "interval": 60,
    "zh": "金丝雀（大西洋）"
}, {"interval": -60, "zh": "佛得角（大西洋）", "en": "Atlantic/Cape_Verde"}, {
    "en": "Atlantic/Faroe",
    "zh": "法罗（大西洋）",
    "interval": 60
}, {"interval": 60, "en": "Atlantic/Madeira", "zh": "马德拉（大西洋）"}, {
    "interval": 0,
    "en": "Atlantic/Reykjavik",
    "zh": "雷克雅未克（大西洋）"
}, {"interval": -120, "en": "Atlantic/South_Georgia", "zh": "南乔治亚（大西洋）"}, {
    "interval": 0,
    "en": "Atlantic/St_Helena",
    "zh": "圣赫勒拿（大西洋）"
}, {"en": "Atlantic/Stanley", "interval": -180, "zh": "斯坦利（大西洋）"}, {
    "en": "Australia/Adelaide",
    "interval": 570,
    "zh": "阿德莱德（澳大利亚）"
}, {"interval": 600, "zh": "布里斯班（澳大利亚）", "en": "Australia/Brisbane"}, {
    "en": "Australia/Broken_Hill",
    "interval": 570,
    "zh": "布罗德丘（澳大利亚）"
}, {"en": "Australia/Currie", "zh": "库里（澳大利亚）", "interval": 600}, {
    "interval": 570,
    "en": "Australia/Darwin",
    "zh": "达尔文（澳大利亚）"
}, {"en": "Australia/Eucla", "interval": 525, "zh": "欧克拉（澳大利亚）"}, {
    "interval": 600,
    "zh": "霍巴特（澳大利亚）",
    "en": "Australia/Hobart"
}, {"zh": "林德曼（澳大利亚）", "en": "Australia/Lindeman", "interval": 600}, {
    "interval": 630,
    "zh": "豪勋爵（澳大利亚）",
    "en": "Australia/Lord_Howe"
}, {"interval": 600, "en": "Australia/Melbourne", "zh": "墨尔本（澳大利亚）"}, {
    "en": "Australia/Perth",
    "interval": 480,
    "zh": "珀斯（澳大利亚）"
}, {"en": "Australia/Sydney", "interval": 600, "zh": "悉尼（澳大利亚）"}, {
    "zh": "阿姆斯特丹（欧洲）",
    "en": "Europe/Amsterdam",
    "interval": 120
}, {"interval": 120, "en": "Europe/Andorra", "zh": "安道尔（欧洲）"}, {
    "zh": "阿斯特拉罕（欧洲）",
    "en": "Europe/Astrakhan",
    "interval": 240
}, {"en": "Europe/Athens", "interval": 180, "zh": "雅典（欧洲）"}, {
    "interval": 120,
    "en": "Europe/Belgrade",
    "zh": "贝尔格莱德（欧洲）"
}, {"interval": 120, "en": "Europe/Berlin", "zh": "柏林（欧洲）"}, {
    "en": "Europe/Bratislava",
    "zh": "布拉迪斯拉发（欧洲）",
    "interval": 120
}, {"en": "Europe/Brussels", "zh": "布鲁塞尔（欧洲）", "interval": 120}, {
    "zh": "布加勒斯特（欧洲）",
    "en": "Europe/Bucharest",
    "interval": 180
}, {"en": "Europe/Budapest", "interval": 120, "zh": "布达佩斯（欧洲）"}, {
    "zh": "商业（欧洲）",
    "en": "Europe/Busingen",
    "interval": 120
}, {"en": "Europe/Chisinau", "interval": 180, "zh": "基希讷乌（欧洲）"}, {
    "interval": 120,
    "en": "Europe/Copenhagen",
    "zh": "哥本哈根（欧洲）"
}, {"interval": 60, "en": "Europe/Dublin", "zh": "都柏林（欧洲）"}, {
    "en": "Europe/Gibraltar",
    "interval": 120,
    "zh": "直布罗陀（欧洲）"
}, {"zh": "根西岛（欧洲）", "en": "Europe/Guernsey", "interval": 60}, {
    "interval": 180,
    "en": "Europe/Helsinki",
    "zh": "赫尔辛基（欧洲）"
}, {"zh": "昂文岛（欧洲）", "en": "Europe/Isle_of_Man", "interval": 60}, {
    "interval": 180,
    "zh": "伊斯坦布尔（欧洲）",
    "en": "Europe/Istanbul"
}, {"interval": 60, "zh": "泽西岛（欧洲）", "en": "Europe/Jersey"}, {
    "zh": "加里宁格勒（欧洲）",
    "en": "Europe/Kaliningrad",
    "interval": 120
}, {"interval": 180, "zh": "基辅（欧洲）", "en": "Europe/Kiev"}, {
    "zh": "基洛夫（欧洲）",
    "en": "Europe/Kirov",
    "interval": 180
}, {"zh": "里斯本（欧洲）", "en": "Europe/Lisbon", "interval": 60}, {
    "interval": 120,
    "zh": "卢布尔雅那（欧洲）",
    "en": "Europe/Ljubljana"
}, {"zh": "伦敦（欧洲）", "interval": 60, "en": "Europe/London"}, {
    "interval": 120,
    "zh": "卢森堡（欧洲）",
    "en": "Europe/Luxembourg"
}, {"interval": 120, "zh": "马德里（欧洲）", "en": "Europe/Madrid"}, {
    "zh": "马耳他（欧洲）",
    "en": "Europe/Malta",
    "interval": 120
}, {"en": "Europe/Mariehamn", "interval": 180, "zh": "Mariehamn（欧洲）"}, {
    "en": "Europe/Minsk",
    "interval": 180,
    "zh": "明斯克（欧洲）"
}, {"interval": 120, "zh": "摩纳哥（欧洲）", "en": "Europe/Monaco"}, {
    "interval": 180,
    "zh": "莫斯科（欧洲）",
    "en": "Europe/Moscow"
}, {"interval": 120, "zh": "奥斯陆（欧洲）", "en": "Europe/Oslo"}, {
    "en": "Europe/Paris",
    "zh": "巴黎（欧洲）",
    "interval": 120
}, {"interval": 120, "en": "Europe/Podgorica", "zh": "波德戈里察（欧洲）"}, {
    "zh": "布拉格（欧洲）",
    "en": "Europe/Prague",
    "interval": 120
}, {"en": "Europe/Riga", "zh": "里加（欧洲）", "interval": 180}, {
    "zh": "罗马（欧洲）",
    "en": "Europe/Rome",
    "interval": 120
}, {"zh": "萨马拉（欧洲）", "en": "Europe/Samara", "interval": 240}, {
    "interval": 120,
    "zh": "圣马力诺（欧洲）",
    "en": "Europe/San_Marino"
}, {"interval": 120, "zh": "萨拉热窝（欧洲）", "en": "Europe/Sarajevo"}, {
    "interval": 240,
    "zh": "萨拉托夫（欧洲）",
    "en": "Europe/Saratov"
}, {"interval": 180, "en": "Europe/Simferopol", "zh": "辛菲罗波尔（欧洲）"}, {
    "en": "Europe/Skopje",
    "zh": "斯科普里（欧洲）",
    "interval": 120
}, {"zh": "索非亚（欧洲）", "interval": 180, "en": "Europe/Sofia"}, {
    "interval": 120,
    "zh": "斯德哥尔摩（欧洲）",
    "en": "Europe/Stockholm"
}, {"zh": "塔林（欧洲）", "interval": 180, "en": "Europe/Tallinn"}, {
    "en": "Europe/Tirane",
    "interval": 120,
    "zh": "地拉内（欧洲）"
}, {"en": "Europe/Ulyanovsk", "interval": 240, "zh": "乌里扬诺夫斯克（欧洲）"}, {
    "interval": 180,
    "en": "Europe/Uzhgorod",
    "zh": "乌日戈罗德（欧洲）"
}, {"interval": 120, "zh": "瓦杜兹（欧洲）", "en": "Europe/Vaduz"}, {
    "en": "Europe/Vatican",
    "interval": 120,
    "zh": "梵蒂冈（欧洲）"
}, {"interval": 120, "zh": "维也纳（欧洲）", "en": "Europe/Vienna"}, {
    "interval": 180,
    "zh": "维尔纽斯（欧洲）",
    "en": "Europe/Vilnius"
}, {"zh": "伏尔加格勒（欧洲）", "en": "Europe/Volgograd", "interval": 240}, {
    "interval": 120,
    "en": "Europe/Warsaw",
    "zh": "华沙（欧洲）"
}, {"zh": "萨格勒布（欧洲）", "interval": 120, "en": "Europe/Zagreb"}, {
    "zh": "扎波罗齐（欧洲）",
    "en": "Europe/Zaporozhye",
    "interval": 180
}, {"interval": 120, "zh": "苏黎世（欧洲）", "en": "Europe/Zurich"}, {
    "en": "GMT",
    "zh": "格林威治标准时间",
    "interval": 0
}, {"interval": 180, "en": "Indian/Antananarivo", "zh": "塔那那利佛（印度）"}, {
    "interval": 360,
    "en": "Indian/Chagos",
    "zh": "查戈斯（印第安人）"
}, {"interval": 420, "zh": "圣诞节（印度）", "en": "Indian/Christmas"}, {
    "en": "Indian/Cocos",
    "interval": 390,
    "zh": "可可（印度）"
}, {"en": "Indian/Comoro", "interval": 180, "zh": "科摩罗（印度）"}, {
    "en": "Indian/Kerguelen",
    "interval": 300,
    "zh": "科盖伦（印度）"
}, {"zh": "马埃（印度）", "en": "Indian/Mahe", "interval": 240}, {
    "interval": 300,
    "zh": "马尔代夫（印度）",
    "en": "Indian/Maldives"
}, {"en": "Indian/Mauritius", "zh": "毛里求斯（印度）", "interval": 240}, {
    "interval": 180,
    "zh": "马约特（印第安人）",
    "en": "Indian/Mayotte"
}, {"en": "Indian/Reunion", "interval": 240, "zh": "留尼汪（印第安人）"}, {
    "zh": "阿皮亚（太平洋）",
    "en": "Pacific/Apia",
    "interval": 780
}, {"interval": 720, "zh": "奥克兰（太平洋）", "en": "Pacific/Auckland"}, {
    "en": "Pacific/Bougainville",
    "interval": 660,
    "zh": "布干维尔（太平洋）"
}, {"interval": 765, "zh": "查塔姆（太平洋）", "en": "Pacific/Chatham"}, {
    "en": "Pacific/Chuuk",
    "interval": 600,
    "zh": "丘克（太平洋）"
}, {"interval": -300, "zh": "复活节（太平洋）", "en": "Pacific/Easter"}, {
    "zh": "Efate（太平洋）",
    "interval": 660,
    "en": "Pacific/Efate"
}, {"en": "Pacific/Enderbury", "zh": "恩德伯里（太平洋）", "interval": 780}, {
    "interval": 780,
    "en": "Pacific/Fakaofo",
    "zh": "法考夫（太平洋）"
}, {"interval": 720, "zh": "斐济（太平洋）", "en": "Pacific/Fiji"}, {
    "zh": "福纳富提（太平洋）",
    "interval": 720,
    "en": "Pacific/Funafuti"
}, {"interval": -360, "zh": "加拉帕戈斯（太平洋）", "en": "Pacific/Galapagos"}, {
    "zh": "甘比亚（太平洋）",
    "interval": -540,
    "en": "Pacific/Gambier"
}, {"en": "Pacific/Guadalcanal", "interval": 660, "zh": "瓜达尔卡纳尔（太平洋）"}, {
    "zh": "关岛（太平洋）",
    "en": "Pacific/Guam",
    "interval": 600
}, {"en": "Pacific/Honolulu", "zh": "檀香山（太平洋）", "interval": -600}, {
    "en": "Pacific/Johnston",
    "interval": -600,
    "zh": "约翰斯顿（太平洋）"
}, {"en": "Pacific/Kiritimati", "interval": 840, "zh": "基里蒂马蒂（太平洋）"}, {
    "zh": "科斯雷（太平洋）",
    "interval": 660,
    "en": "Pacific/Kosrae"
}, {"en": "Pacific/Kwajalein", "interval": 720, "zh": "夸贾林（太平洋）"}, {
    "interval": 720,
    "zh": "马朱罗（太平洋）",
    "en": "Pacific/Majuro"
}, {"zh": "马奎萨（太平洋）", "en": "Pacific/Marquesas", "interval": -570}, {
    "interval": -660,
    "en": "Pacific/Midway",
    "zh": "中途岛（太平洋）"
}, {"en": "Pacific/Nauru", "interval": 720, "zh": "瑙鲁（太平洋）"}, {
    "en": "Pacific/Niue",
    "interval": -660,
    "zh": "纽埃（太平洋）"
}, {"zh": "诺福克（太平洋）", "interval": 660, "en": "Pacific/Norfolk"}, {
    "zh": "努美阿（太平洋）",
    "en": "Pacific/Noumea",
    "interval": 660
}, {"zh": "帕果帕果（太平洋）", "en": "Pacific/Pago_Pago", "interval": -660}, {
    "interval": 540,
    "en": "Pacific/Palau",
    "zh": "帕劳（太平洋）"
}, {"interval": -480, "en": "Pacific/Pitcairn", "zh": "皮特凯恩（太平洋）"}, {
    "zh": "波恩佩（太平洋）",
    "en": "Pacific/Pohnpei",
    "interval": 660
}, {"en": "Pacific/Ponape", "interval": 660, "zh": "波纳佩（太平洋）"}, {
    "en": "Pacific/Port_Moresby",
    "zh": "莫尔兹比港（太平洋）",
    "interval": 600
}, {"interval": -600, "zh": "拉罗通加（太平洋）", "en": "Pacific/Rarotonga"}, {
    "interval": 600,
    "en": "Pacific/Saipan",
    "zh": "塞班岛（太平洋）"
}, {"en": "Pacific/Tahiti", "interval": -600, "zh": "大溪地（太平洋）"}, {
    "interval": 720,
    "zh": "塔拉瓦（太平洋）",
    "en": "Pacific/Tarawa"
}, {"en": "Pacific/Tongatapu", "interval": 780, "zh": "汤加塔普（太平洋）"}, {
    "zh": "特鲁克（太平洋）",
    "interval": 600,
    "en": "Pacific/Truk"
}, {"en": "Pacific/Wake", "interval": 720, "zh": "威克（太平洋）"}, {
    "en": "Pacific/Wallis",
    "zh": "瓦利斯（太平洋）",
    "interval": 720
}];
for (let i = 0; i < TimeZones.length; ++i) {
    let item = TimeZones[i];
    if (item.zh) {
        let p = PinYin.getPinYinAndFirstCharacter(item.zh);
        item.py = p.py;
        item.first = p.first;
    }
    item.id = i;
}

function searchZone(item, word) {
    if (item.en.match(word)) {
        return true;
    }
    else if (item.zh.match(word)) {
        return true;
    }
    else if (PinYin.isEnglish(word)) {
        word = word.toLocaleLowerCase();
        let f = 0;
        let startIndex = -1;
        let sWord = word;
        sWord = sWord.replace(/\s/g, "");
        sWord.trim();
        sWord.trim();
        if (item.first && item.py) {
            for (let i = 0; i < item.first.length; ++i && f < sWord.length) {
                if (item.first[i] === sWord[f]) {
                    ++f;
                    if (startIndex === -1) {
                        startIndex = i;
                    }
                } else if (startIndex !== -1) {
                    break;
                }
            }
            if (f === sWord.length) {
                return true;
            } else {
                let pIndex = -1;
                for (let i = 0; i < item.py.length; ++i) {
                    let ph = sWord.match(item.py[i]);
                    if (ph && ph.index === 0) {
                        sWord = sWord.substring(item.py[i].length);
                        if (pIndex === -1) {
                            pIndex = i;
                        }
                        if (sWord === '') {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}

export {
    TimeZones,
    searchZone
}