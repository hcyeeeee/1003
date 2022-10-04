import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 北
    //宜蘭縣6位
    Yilan: [
      {
        name: "江聰淵",
        no: "1",
        party: "民進黨",
        photo: require("../assets/江聰淵.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: [
            // "佛光大學公共事務學系碩士",
            "淡江大學國際企業學系商學碩士",
          ],
          exp: [
            // "2006年第16屆宜蘭縣議會議員",
            // "2010年第17屆宜蘭縣議會議員",
            // "2014年宜蘭市第17屆市長",
            "2018年宜蘭市第18屆市長",
            "2020蔡英文總統陳歐珀立法委員宜蘭縣競選總部總幹事",
          ],
        },
      },
      {
        name: "林姿妙",
        no: "2",
        party: "國民黨",
        photo: require("../assets/林姿妙.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            // "蘭陽技術學院附設專科進修學校",
            "佛光大學公共事務學系碩士在職專班",
          ],
          exp: [
            // "2002年第15屆宜蘭縣議員",
            // "2006年第16屆宜蘭縣議員",
            // "2010年羅東鎮第16屆鎮長",
            "2014年羅東鎮第17屆鎮長",
            "2018年宜蘭縣第18屆縣長",
          ],
        },
      },
      {
        name: "陳琬惠",
        no: "3",
        party: "民眾黨",
        photo: require("../assets/陳琬惠.jpg"),
        party_photo: require("../assets/民眾黨.jpg"),
        experience: {
          edu: ["國立政治大學經營管理碩士"],
          exp: [
            "台灣公益團體自律聯盟秘書長",
            "2020年民眾黨第10屆不分區立委候選人",
            "2022年立法院台灣民眾黨黨團主任",
          ],
        },
      },
      {
        name: "陳秋境",
        no: "4",
        party: "無黨籍",
        photo: require("../assets/陳秋境.jpg"),
        party_photo: require("../assets/無黨籍.jpg"),
        experience: {
          edu: [
            // "龍華工商專校化學工程系畢業",
            "國立宜蘭大學",
          ],
          exp: [
            "1993年公務人員普通考試化學工程科（及格）",
            "經濟部台灣自來水公司",
          ],
        },
      },
      {
        name: "朱振東",
        no: "5",
        party: "天一黨",
        photo: require("../assets/朱振東.jpg"),
        party_photo: require("../assets/天一黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "許鋐哲",
        no: "6",
        party: "無黨",
        photo: require("../assets/許鋐哲.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
    ],
    //基隆完成
    Keelung: [
      {
        //5位
        name: "蔡適應",
        no: "1",
        party: "民進黨",
        photo: require("../assets/蔡適應.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: [
            // "東海大學政治系國際關係組學士",
            // "淡江大學國際事務與戰略研究所碩士",
            "國立臺北大學都市計劃研究所博士",
          ],
          exp: [
            "2005年基隆市議會（第16-18屆）議員",
            "2016年第9屆立法委員",
            "2020年第10屆立法委員",
          ],
        },
      },
      {
        name: "謝國樑",
        no: "2",
        party: "國民黨",
        photo: require("../assets/謝國樑.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            // "南加州大學社會系學士",
            "麻省理工學院科技管理學碩士",
            "政治大學法律學碩士(在職專班)",
          ],
          exp: [
            // "2005年第6屆立法委員",
            // "2008年第7屆立法委員",
            "2012年第8屆立法委員",
            "民黨基隆市地方黨部主任委員",
          ],
        },
      },
      {
        name: "陳薇仲",
        no: "3",
        party: "時代力量",
        photo: require("../assets/陳薇仲.jpg"),
        party_photo: require("../assets/時代力量.jpg"),
        experience: {
          edu: ["國立臺灣大學生物產業傳播暨發展學系學士"],
          exp: [
            // "2018年基隆市第19屆議員",
            // "2019年時代力量第2屆決策委員",
            // "2019年時代力量政策副祕書長",
            "2021年時代力量第3屆決策委員",
            "2021年時代力量副祕書長",
          ],
        },
      },
      {
        name: "黃希賢",
        no: "4",
        party: "無黨",
        photo: require("../assets/黃希賢.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [
            "中國市政專科學校企業管理科",
            "國立政治大學EMBA在職碩班全球企業經營組",
          ],
          exp: [
            // "2018年國民黨基隆市黨部主委",
            "2021年退出國民黨",
            "2022年參選基隆市長",
          ],
        },
      },
      {
        name: "曾國民",
        no: "5",
        party: "無黨",
        photo: require("../assets/曾國民.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
    ],
    //台北市12位
    Taipei: [
      {
        name: "陳時中",
        no: "1",
        party: "民進黨",
        photo: require("../assets/陳時中.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["臺北醫學院牙醫學系"],
          exp: [
            // "2004年財團法人臺北醫學大學董事",
            // "2005年行政院衛生署「全民健康保險監理委員會」委員",
            "2005年行政院衛生署副署長",
            "2016年總統府國策顧問",
            "2017年衛生福利部部長",
          ],
        },
      },
      {
        name: "蔣萬安",
        no: "2",
        party: "國民黨",
        photo: require("../assets/蔣萬安.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            // "國立政治大學外交學系國際關係學學士",
            // "國立政治大學法律學系法律學學士",
            // "賓夕法尼亞大學法學碩士",
            "賓夕法尼亞大學法律博士",
          ],
          exp: [
            // "2016年第9屆立法委員",
            // "2016年財團法人青年和平團董事",
            "2017年中國國民黨中央委員會中央常務委員",
            // "台灣土地正義行動聯盟常務理事",
            "2020年第10屆立法委員",
            "中國國民黨立法院黨團書記長",
          ],
        },
      },
      {
        name: "黃珊珊",
        no: "3 ",
        party: "無黨",
        photo: require("../assets/黃珊珊.jpg"),
        party_photo: require("../assets/無黨籍.jpg"),
        experience: {
          edu: [
            "國立臺灣大學大氣科學系轉法律系",
            // "國立陽明交通大學科技法律研究所（肄業）",
          ],
          exp: [
            // "1998年台北市議會第8屆議員",
            // "2002年台北市議會第9屆議員",
            // "2006年台北市議會第10屆議員",
            // "2010年台北市議會第11屆議員",
            "2014年台北市議會第12屆議員",
            "2018年台北市議會第13屆議員",
            "2019年台北市副市長",
          ],
        },
      },
      {
        name: "蘇煥智",
        no: "4",
        party: "維新黨",
        photo: require("../assets/蘇煥智.jpg"),
        party_photo: require("../assets/維新黨.jpg"),
        experience: {
          edu: [
            // "國立臺灣大學物理系肄業",
            "國立臺灣大學法律系畢業 ",
            "輔仁大學法律研究所碩士",
          ],
          exp: [
            // "2001年臺南縣第14屆縣長",
            "2005年臺南縣第15屆縣長",
            // "2012年新境界文教基金會地方自治組召集人",
            "2019年臺灣維新創黨人兼第一屆召集人",
          ],
        },
      },

      {
        name: "張家豪",
        no: "5",
        party: "台灣動保黨",
        photo: require("../assets/張家豪.jpg"),
        party_photo: require("../assets/台灣動保黨.jpg"),
        experience: {
          edu: ["台灣大學心理學系學士"],
          exp: [
            "2017年東默農編劇有限公司 共同創辦人 ",
            "2020年台灣動物保護黨 副主席",
          ],
        },
      },
      {
        name: "黃聖峰",
        no: "6",
        party: "台澎黨",
        photo: require("../assets/黃聖峰.jpg"),
        party_photo: require("../assets/台澎黨.jpg"),
        experience: {
          edu: [
            // "國立臺灣大學法律學系學士畢",
            // "國立臺北大學法學研究所刑法組碩士畢",
            "英國愛丁堡大學國際法博士生",
            "英國倫敦大學學院（UCL）國際法碩士畢",
          ],
          exp: [
            "創立監票者聯盟",
            "創立臺澎國際法法理建國連線",
            "台澎國際法法理建國黨法務長",
          ],
        },
      },
      {
        name: "童文薰",
        no: "7",
        party: "無黨",
        photo: require("../assets/童文薰.jpg"),
        party_photo: require("../assets/無黨籍.jpg"),
        experience: {
          edu: ["國立臺灣大學法律學系學士", "美國麥克喬治法學院LLM法學碩士"],
          exp: [
            "萬國法律事務所律師",
            "李潮雄律師事務所律師",
            // "Adobe法律顧問",
            // "齊麟國際法律事務所合夥人",
          ],
        },
      },
      {
        name: "鄭匡宇",
        no: "8",
        party: "無黨",
        photo: require("../assets/鄭匡宇.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [
            // "國立政治大學哲學系畢業",
            "美國加州大學河濱分校舞蹈史舞蹈理論博士",
          ],
          exp: [
            "2015年東吳大學華語教學副主任",
            "2016年創立寰宇軒行股份有限公司",
          ],
        },
      },
      {
        name: "施奉先",
        no: "9",
        party: "無黨",
        photo: require("../assets/施奉先.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "唐新民",
        no: "10",
        party: "無黨",
        photo: require("../assets/唐新民.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "王文娟",
        no: "9",
        party: "無黨",
        photo: require("../assets/王文娟.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "謝立康",
        no: "10",
        party: "無黨",
        photo: require("../assets/謝立康.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
    ],
    //ㄥ新北市2位
    Newtaipei: [
      {
        name: "林佳龍",
        no: "1",
        party: "民進黨",
        photo: require("../assets/林佳龍.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: [
            // "國立臺灣大學政治學系學士、碩士",
            "耶魯大學人文哲學碩士、政治學碩士、政治學博士",
          ],
          exp: [
            // "2004年行政院新聞局局長",
            // "2007年總統府副祕國家安全會議諮詢委員",
            "2012年第8屆立法委員",
            "2019年交通部長",
            "2022年無任所大使",
          ],
        },
      },
      {
        name: "侯友宜",
        no: "2",
        party: "國民黨",
        photo: require("../assets/侯友宜.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            // "中央警官學校刑事警察學系法學學士",
            "中央警察大學犯罪防治研究所法學博士",
            "賓夕法尼亞大學法學碩士、博士",
            // "賓夕法尼亞大學法律博士",
          ],
          exp: [
            // "2001年桃園縣政府警察局局長",
            // "2003年內政部警政署刑事警察局局長",
            // "2006年內政部警政署署長",
            // "2008年中央警察大學校長",
            // "2010年新北市第1屆副市長",
            "2014年新北市第2屆副市長",
            "2018年新北市第3屆市長",
          ],
        },
      },
    ],
    //桃園市4位
    Taoyuan: [
      {
        name: "鄭運鵬",
        no: "1",
        party: "民進黨",
        photo: require("../assets/鄭運鵬.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["國立臺灣大學土木工程學系畢業"],
          exp: [
            // "2004年當選台北市北區立委",
            // "2012年任民進黨網路部主任",
            // "2013年任民進黨組織部主任",
            "2014年任民進黨文宣部主任",
            "2016年第9屆立法委員",
            "2020年第10屆立法委員",
          ],
        },
      },
      {
        name: "張善政",
        no: "2",
        party: "國民黨",
        photo: require("../assets/張善政.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            // "國立臺灣大學土木工程學系工學學士",
            "美國史丹佛大學土木與環境工程學碩士、博士",
            // "美國康奈爾大學土木與環境工程學博士 ",
          ],
          exp: [
            // "2012年行政院政務委員",
            // "2014年第1任科技部部長",
            // "2014年第38任行政院副院長",
            // "2016年第27任行政院院長",
            // "2019年花蓮觀光文化推廣大使",
            "2019年中華民族致公黨最高顧問",
            "2020年中華民國總統選舉中國國民黨副總統候選人",
          ],
        },
      },
      {
        name: "賴香伶",
        no: "3",
        party: "民眾黨",
        photo: require("../assets/賴香伶.jpg"),
        party_photo: require("../assets/民眾黨.jpg"),
        experience: {
          edu: ["輔仁大學企業管理系", "世新大學社會發展研究所"],
          exp: [
            "2014年台北市政府勞動局局長",
            "2020年第10屆立法委員",
            "2020年立法院民眾黨黨團總召",
          ],
        },
      },
      {
        name: "鄭寶清",
        no: "4",
        party: "無黨",
        photo: require("../assets/鄭寶清.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [
            // "國立中興大學法商學院公共行政系（今國立臺北大學公共行政暨政策系）學士",
            "國立中興大學法商學院公共政策研究所（今國立臺北大學公共行政暨政策系）碩士",
            "國立中央大學企業管理系博士",
          ],
          exp: [
            // "1999年第4屆立法委員",
            // "民主進步黨立法院黨團（第4屆第三會期）總召集人",
            "2016年第9屆立法委員",
            "2017年社團法人國立臺北大學公共行政暨政策系系友會常務理事",
          ],
        },
      },
    ],
    //新竹市6位
    HsinchuCity: [
      {
        name: "沈慧虹",
        no: "1",
        party: "民進黨",
        photo: require("../assets/沈慧虹.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["淡江大學交通管理系學士", "國立交通大學交通運輸研究所碩士"],
          exp: [
            "台北市政府發言人室",
            "台北捷運公司籌備處工程員",
            "新竹市副市長",
          ],
        },
      },
      {
        name: "林耕仁",
        no: "2",
        party: "國民黨",
        photo: require("../assets/林耕仁.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: ["國立交通大學高階管理學碩士畢", "中華大學科技管理研究所碩士畢"],
          exp: ["新竹市第五、六、七、八、九屆市議員"],
        },
      },
      {
        name: "高虹安",
        no: "3",
        party: "民眾黨",
        photo: require("../assets/高虹安.jpg"),
        party_photo: require("../assets/民眾黨.jpg"),
        experience: {
          edu: [
            // "國立臺灣師範大學資訊教育學士",
            "國立臺灣大學資訊工程系碩士",
            "美國辛辛那提大學機械工程博士",
          ],
          exp: [
            "2020年第10屆立法委員、第10屆立法院數位國力促進會副會長",
            "2022年第10屆立法院資通安全與科技發展策進會會長",
          ],
        },
      },
      {
        name: "龔偉綸",
        no: "4",
        party: "無黨",
        photo: require("../assets/龔偉綸.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["國立臺北教育大學法律教育學系"],
          exp: [
            // "偉綸開發投資(偉綸代書事務所) ",
            "台灣菁英協會第六期副會長 ",
            "青商會理事 ",
            "大台灣隊會友",
          ],
        },
      },
      {
        name: "黃源甫",
        no: "5",
        party: "無黨",
        photo: require("../assets/黃源甫.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["國立交通大學管理科學博士"],
          exp: [
            // "2009年市議員參選人",
            // "2010年新竹市水源里里長參選人",
            "2014年新竹市水源里里長參選人",
            "2016立委參選人",
            "2018年新竹市市長參選人",
          ],
        },
      },
      {
        name: "李驥羣",
        no: "6",
        party: "無黨",
        photo: require("../assets/李驥羣.png"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["竹東高中(肄)", "磐石夜補校"],
          exp: ["教育廳高中自修鑑定通過", "2018年新竹市市長參選人"],
        },
      },
    ],
    //新竹縣5位
    HsinchuCountry: [
      {
        name: "周江杰",
        no: "1",
        party: "民進黨",
        photo: require("../assets/周江杰.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["國立政治大學公共行政學系", "國立政治大學公共行政研究所"],
          exp: [
            "2018年民主進步黨客家部主任",
            "2019年民主進步黨新聞部主任、民主進步黨發言人",
          ],
        },
      },
      {
        name: "楊文科",
        no: "2",
        party: "國民黨",
        photo: require("../assets/楊文科.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            // "中國文化大學土地資源學系學士",
            "美國薩基諾谷州立大學企管碩士",
            "中華大學科技管理研究所碩士",
          ],
          exp: [
            // "科技部中部科學工業園區管理局局長",
            // "新竹縣政府秘書長",
            // "新竹縣政府副縣長",
            "2016年第27任行政院院長",
            "新竹縣第18屆縣長",
          ],
        },
      },
      {
        name: "范振揆",
        no: "3",
        party: "無黨籍",
        photo: require("../assets/范振揆.jpg"),
        party_photo: require("../assets/無黨籍.jpg"),
        experience: {
          edu: ["玄奘大學法律學系"],
          exp: ["國民大會代表范揚恭辦公室主任"],
        },
      },
      {
        name: "黃秀龍",
        no: "4",
        party: "無黨籍",
        photo: require("../assets/楊文科.jpg"),
        party_photo: require("../assets/無黨籍.jpg"),
        experience: {
          edu: ["竹東高中"],
          exp: ["欣榮企業社", "兄弟企業社", "國際企業社", "神誠有限公司董事"],
        },
      },
      {
        name: "劉復嵐",
        no: "5",
        party: "無黨籍",
        photo: require("../assets/劉復嵐.jpg"),
        party_photo: require("../assets/無黨籍.jpg"),
        experience: {
          edu: [""],
          exp: ["2018年新竹縣 關西鎮 新力里長參選人", "2020年立法委員參選人"],
        },
      },
    ],
    // 中
    //苗栗縣5位
    Miaoli: [
      {
        name: "徐定禎",
        no: "1",
        party: "民進黨",
        photo: require("../assets/徐定禎.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["東吳大學企業管理學系學士"],
          exp: ["頭份鎮第16－17屆鎮長", "頭份市第1屆市長"],
        },
      },
      {
        name: "謝福弘",
        no: "2",
        party: "國民黨",
        photo: require("../assets/謝福弘.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: ["中國文化大學政治學系學士", "中華大學土木與資訊科學碩士"],
          exp: [
            // "中國國民黨苗栗縣黨部副主委",
            "中國國民黨苗栗縣黨部主委",
            // "2010年第3、4屆苗栗農田水利會會長",
            "2020年農田水利署苗栗管理處處長",
          ],
        },
      },
      {
        name: "宋國鼎",
        no: "3",
        party: "時代力量",
        photo: require("../assets/宋國鼎.jpg"),
        party_photo: require("../assets/時代力量.jpg"),
        experience: {
          edu: ["國立中正大學法律、勞工關係雙學士", "國立中正大學法學碩士"],
          exp: ["2018年苗栗縣議會第19屆縣議員"],
        },
      },
      {
        name: "鍾東錦",
        no: "4",
        party: "無黨",
        photo: require("../assets/鍾東錦.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["中華大學企業管理學系"],
          exp: [
            "2014年第18屆苗栗縣議會議員",
            "2018年第18屆苗栗縣議會副議長",
            "2018年第19屆苗栗縣議會議長",
          ],
        },
      },
      {
        name: "吳盛聖",
        no: "5",
        party: "無黨",
        photo: require("../assets/吳盛聖.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["國立勤益技術學院機械系​"],
          exp: [
            "江蘇新雲漢光電科技有限公司(中外合資) 國有控股企業副總經理 / 集團高級副總裁",
            "台灣明道大學副校長",
          ],
        },
      },
    ],
    //台中市3位
    Taichung: [
      {
        name: "蔡其昌",
        no: "1",
        party: "民進黨",
        photo: require("../assets/蔡其昌.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: [
            "東海大學歷史學系",
            "東海大學歷史學碩士",
            "國立中興大學EMBA財金組",
            "泰國湄州大學觀光發展榮譽博士",
          ],
          exp: [
            // "2004年第6屆立法委員",
            // "2008年第7屆立法委員  ",
            // "2012年第8屆立法委員",
            // "2014年任民進黨文宣部主任",
            "2016年第9屆立法委員、立法院副院長",
            "2020年第10屆立法委員、連任立法院副院長",
            "2021年中華職棒會長",
          ],
        },
      },
      {
        name: "盧秀燕",
        no: "2",
        party: "國民黨",
        photo: require("../assets/盧秀燕.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: ["國立政治大學地政學系", "淡江大學國際事務與戰略研究所碩士"],
          exp: [
            // "2002年第5屆立法委員",
            // "2005年第6屆立法委員",
            // "2008年第7屆立法委員",
            "2012年第8屆立法委員",
            "2016年第9屆立法委員",
            "2018年臺中市第3屆市長",
            // "2005年胡志強競選市長連任總幹事",
            // "2010年胡志強競選直轄市長市區總幹事",
            // "中國國民黨副秘書長",
            // "中國國民黨中央委員",
            // "中國國民黨中央常務委員",
          ],
        },
      },
      {
        name: "陳美妃",
        no: "3",
        party: "無黨",
        photo: require("../assets/陳美妃.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
    ],
    //彰化縣3位
    Changhua: [
      {
        name: "黃秀芳",
        no: "1",
        party: "民進黨",
        photo: require("../assets/黃秀芳.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["靜宜大學外文系", "東海大學人力資源管理班結業"],
          exp: [
            // "2006年彰化縣議會第16屆議員",
            // "2010年彰化縣議會第17屆議員",
            "2014年彰化縣議會第18屆議員",
            "2016年第9屆立法委員",
            "2020年第10屆立法委員",
          ],
        },
      },
      {
        name: "王惠美",
        no: "2",
        party: "國民黨",
        photo: require("../assets/王惠美.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            "東海大學政治學系學士",
            "東海大學政治學碩士",
            // "國立彰化師範大學財務金融博士（就讀中）",
          ],
          exp: [
            // "2006年鹿港鎮第15－16屆鎮長",
            // "2012年第8屆立法委員",
            "2016年第9屆立法委員",
            "2018年化縣第18屆縣長",
          ],
        },
      },
      {
        name: "蕭仁正",
        no: "3",
        party: "無黨",
        photo: require("../assets/選舉章icon.png"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
    ],
    //南投縣3位
    Nantou: [
      {
        name: "蔡培慧",
        no: "1",
        party: "民進黨",
        photo: require("../assets/蔡培慧.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: [
            "世新大學社會發展研究所碩士",
            "國立臺灣大學生物產業傳播暨發展研究所學系研究所博士",
          ],
          exp: [
            "2016年第9屆不分區立法委員",
            "2020年行政院中部聯合服務中心執行長",
            // "立法院教育及文化委員會召集委員",
          ],
        },
      },
      {
        name: "許淑華",
        no: "2",
        party: "國民黨",
        photo: require("../assets/許淑華.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: ["南開技術學院工業工程管理系", "逢甲大學經營管理碩士（爭議）"],
          exp: [
            "2015年第8屆立法委員",
            "2016年第9屆立法委員",
            "2020年第10屆立法委員",
          ],
        },
      },
      {
        name: "王永慶",
        no: "3",
        party: "無黨",
        photo: require("../assets/王永慶.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["同德高職"],
          exp: ["2014年南投縣議員參選人", "2018年南投縣議員參選人"],
        },
      },
    ],
    //雲林縣3位
    Yunlin: [
      {
        name: "劉建國",
        no: "1",
        party: "民進黨",
        photo: require("../assets/劉建國.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["南華大學旅遊管理學系暨旅遊管理碩士"],
          exp: [
            // "2002年第15屆雲林縣議會議員",
            // "2006年第16屆雲林縣議會議員、雲林縣議會民進黨團召集人",
            // "2009年第7屆立法委員",
            // "2012年第8屆立法委員",
            "2015年立法院厚生會會長",
            "2016年第9屆立法委員",
            "2020年第10屆立法委員",
          ],
        },
      },
      {
        name: "張麗善",
        no: "2",
        party: "國民黨",
        photo: require("../assets/張麗善.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            "國立虎尾科技大學工業管理系",
            "國立台灣師範大學運動與休閒管理研究所教育學碩士",
          ],
          exp: [
            // "2005年第六屆立法委員",
            // "立法院最高顧問",
            // "2009年中國國民黨雲林縣長候選人（退選）",
            // "2014年中國國民黨雲林縣長候選人",
            "2016年第9屆立法委員",
            "2018年雲林縣第18屆縣長",
          ],
        },
      },
      {
        name: "林佳瑜",
        no: "3",
        party: "無黨",
        photo: require("../assets/林佳瑜.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["中山醫學大學", "中山醫學院牙醫系"],
          exp: ["2005年雲林縣長參選人", "2018年雲林縣長參選人"],
        },
      },
    ],
    //南
    //嘉義市6位
    ChiayiCity: [
      {
        name: "李俊俋",
        no: "1",
        party: "民進黨",
        photo: require("../assets/李俊俋.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: [
            "波士頓學院政治研究所碩士",
            "喬治華盛頓大學政治研究所博士班結業",
          ],
          exp: [
            // "總統府國策顧問兼憲改辦公室主任",
            // "2012年第8屆立法委員",
            "2016年第9屆立法委員",
            "2020年中華民國總統府副秘書長",
          ],
        },
      },
      {
        name: "黃敏惠",
        no: "2",
        party: "國民黨",
        photo: require("../assets/黃敏惠.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: ["國立臺灣師範大學國文學士", "國立嘉義大學管理碩士"],
          exp: [
            // "2002年第5屆立法委員",
            // "2005年第6屆立法委員",
            // "中國國民黨立法院黨團副書記長",
            // "2005年嘉義市第7屆市長",
            // "2008年中國國民黨副主席",
            // "2009年嘉義市第8屆市長",
            "2016年中國國民黨主席（代理）",
            "2018年嘉義市第10屆市長）",
            "2021年中國國民黨副主席",
          ],
        },
      },
      {
        name: "黃宏成台灣阿成世界偉人財神總統",
        no: "3",
        party: "無黨",
        photo: require("../assets/黃宏成台灣阿成世界偉人財神總統.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["東吳法律系"],
          exp: [
            "2016年第9屆立法委員參選人",
            "2018年嘉義市長參選人",
            "2020年第10屆立法委員參選人",
          ],
        },
      },
      {
        name: "蔡松益",
        no: "4",
        party: "無黨",
        photo: require("../assets/蔡松益.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "黃紹聰",
        no: "5",
        party: "無黨",
        photo: require("../assets/黃紹聰.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "陳泰山",
        no: "6",
        party: "無黨",
        photo: require("../assets/陳泰山.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [
            // "2005年高雄縣議員參選人",
            // "2010年鄉鎮市民代表選舉參選人",
            // "2014年嘉義市長參選人",
            "2018年嘉義市劉厝里長參選人",
            "2020年第10屆立法委員參選人",
          ],
        },
      },
    ],
    //嘉義縣2位
    ChiayiCountry: [
      {
        name: "翁章梁",
        no: "1",
        party: "民進黨",
        photo: require("../assets/翁章梁.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["中原大學資訊工程學系", "南華大學非營利事業管理研究所碩士"],
          exp: [
            // "嘉義縣政府秘書兼人力發展所所長",
            // "嘉義縣政府社會局局長",
            "行政院農業委員會副主任委員",
            "嘉義縣第18屆縣長",
          ],
        },
      },
      {
        name: "王育敏",
        no: "2",
        party: "國民黨",
        photo: require("../assets/徐榛蔚.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            "東海大學社會工作學系社會工作學學士",
            "東海大學社會工作學系社會工作學碩士",
          ],
          exp: [
            // "2016年中國國民黨立法院黨團副書記長",
            // "2018年立法院第9屆國民黨團書記長",
            // "立法院程序委員會委員",
            // "立法院社福及衛環委員會召集委員",
            // "立法院性別平等委員會委員",
            "2012年第8屆立法委員",
            "2016年第9屆立法委員",
          ],
        },
      },
    ],
    //台南市5位
    Tainan: [
      {
        name: "黃偉哲",
        no: "1",
        party: "民進黨",
        photo: require("../assets/黃偉哲.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: [
            "國立臺灣大學農業推廣系農學學士",
            "美國耶魯大學公共衛生碩士",
            "美國哈佛大學公共行政碩士",
          ],
          exp: [
            // "2002年第15屆台南縣議員",
            // "2005年第6屆立法委員",
            // "2008年第7屆立法委員",
            // "2012年第8屆立法委員",
            "2016年第9屆立法委員",
            "2018年臺南市第3屆市長",
          ],
        },
      },
      {
        name: "謝龍介",
        no: "2",
        party: "國民黨",
        photo: require("../assets/徐榛蔚.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: ["遠東技術學院企業管理系", "國立成功大學高階管理碩士（EMBA）"],
          exp: [
            "2002年省轄市第15屆臺南市議會議員",
            "2006年省轄市第16屆臺南市議會議員",
            // "2010年直轄市第1屆臺南市議會議員",
            // "2014年直轄市第2屆臺南市議會議員",
            // "2018年直轄市第3屆臺南市議會議員",
          ],
        },
      },
      {
        name: "許忠信",
        no: "3",
        party: "無黨",
        photo: require("../assets/許忠信.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [
            "國立臺灣大學國際關係組學士",
            "國立政治大學法律研究所碩士",
            "英國劍橋大學國際經貿法學博士",
          ],
          exp: [
            // "行政院新聞局無線電視台審議委員",
            "經濟部貿易調查委員會義務法律顧問",
            "行政院新聞局法規會委員",
          ],
        },
      },
      {
        name: "林義豐",
        no: "4",
        party: "無黨",
        photo: require("../assets/林義豐.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["台南市立協進國小", "美國維吉尼亞州科技管理大學企業管理碩士"],
          exp: [
            // "1968年伍彩集團創辦人兼總裁",
            // "2018年台南市長參選人",
            "2020年台南市第五選區立委候選人",
            "2022年台南市長參選人",
          ],
        },
      },
      {
        name: "吳炳輝",
        no: "3",
        party: "無黨",
        photo: require("../assets/吳炳輝.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["東吳大學法律系", "加拿大大學企業管理碩士及博士"],
          exp: ["1990年執行律師業務", "2020年台南市第五選區立委參選人"],
        },
      },
    ],

    //高雄市4位
    Kaohsiung: [
      {
        name: "陳其邁",
        no: "1",
        party: "民進黨",
        photo: require("../assets/陳其邁.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: [
            "中山醫學院醫學系畢業",
            "國立臺灣大學公共衛生研究所預防醫學碩士",
          ],
          exp: [
            // "2000年民主進步黨主流聯盟發言人",
            // "2002年第5屆立法委員",
            // "立法院民主進步黨黨團副幹事長",
            // "2003年立法院程序委員會召集委員",
            // "2004年行政院政務委員、行政院發言人",
            // "2005年高雄市（合併前直轄市）代理市長",
            // "2006年高雄市市長候選人陳菊競選總部總幹事",
            // "2007年中華民國總統府特任副秘書長",
            // "2008年民主進步黨副祕書長",
            // "2009年民主進步黨社會發展委員會主委",
            // "民主進步黨發言人",
            // "2012年第8屆立法委員",
            // "2016年第9屆立法院委員",
            "2019年第42任行政院副院長",
            "2020年高雄市第3屆市長（補選）",
          ],
        },
      },
      {
        name: "柯志恩",
        no: "2",
        party: "國民黨",
        photo: require("../assets/柯志恩.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            "國立政治大學教育學系教育學學士",
            "美國密西根州立大學教育學碩士",
            "美國南加州大學教育心理學博士",
          ],
          exp: [
            // "2016年第9屆立法委員",
            // "2017年中國國民黨婦女部主任",
            "2018年第27屆立法院厚生會秘書長",
            "2020年中國國民黨中央委員會副秘書長",
          ],
        },
      },
      {
        name: "鄭宇翔",
        no: "3",
        party: "無黨",
        photo: require("../assets/鄭宇翔.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "曾尹儷",
        no: "4",
        party: "無黨",
        photo: require("../assets/曾尹儷.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["美國巴爾的摩大學公共管理博士"],
          exp: ["國民黨市長候選人黃俊英及楊秋興競選團隊發言人"],
        },
      },
    ],
    //屏東縣3位
    Pingtung: [
      {
        name: "周春米",
        no: "1",
        party: "民進黨",
        photo: require("../assets/周春米.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["國立臺灣大學法律學系法學組畢業"],
          exp: ["2016年第9屆立法委員", "2020年第10屆立法委員"],
        },
      },
      {
        name: "蘇清泉",
        no: "2",
        party: "國民黨",
        photo: require("../assets/蘇清泉.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            "中山醫學大學醫學學士",
            "中山醫學大學醫學碩士",
            "中山醫學大學醫學博士",
          ],
          exp: ["2012年第8屆立法委員"],
        },
      },
      {
        name: "詹智鈞",
        no: "3",
        party: "時代力量",
        photo: require("../assets/詹智鈞.jpg"),
        party_photo: require("../assets/時代力量.jpg"),
        experience: {
          edu: [
            "國立中興大學食品科學系",
            "高雄醫學大學學士後醫學系",
            "國立屏東大學社會發展學系碩士班",
          ],
          exp: [
            // "屏東縣就業歧視暨性平評議委員會委員",
            // "屏東縣勞動調解委員",
            "屏東地檢署榮譽法醫師",
            "屏基工會創會理事長",
          ],
        },
      },
    ],
    //東
    //花蓮縣3位
    Hualien: [
      {
        name: "KolasYotaka",
        no: "1",
        party: "民進黨",
        // photo: require("../assets/Kolas.png"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["東海大學社會學系學士", "東海大學社會學研究所碩士"],
          exp: [
            // "2014年桃園市政府原住民族行政局局長",
            // "2016年第9屆全國不分區及僑居國外國民立法委員",
            "2017年美國國務院「國際領袖計畫」訪問者",
            "2018年行政院發言人",
            "2020年總統府發言人",
          ],
        },
      },
      {
        name: "徐榛蔚",
        no: "2",
        party: "國民黨",
        photo: require("../assets/徐榛蔚.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: ["中國文化大學音樂系"],
          exp: [
            // "2009年花蓮縣副縣長",
            // "2012年總統候選人馬英九後援會婦女幹部領袖",
            "2016年總統候選人朱立倫花蓮縣競選總部主委",
            "2016年第9屆立法委員",
            "2018年花蓮縣第18屆縣長",
          ],
        },
      },
      {
        name: "黃師鵬",
        no: "3",
        party: "無黨",
        photo: require("../assets/黃師鵬.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [
            "2014年花蓮縣長參選人",
            "2016年選立法委員參選人",
            "2018年參花蓮縣長參選人",
          ],
        },
      },
    ],
    //台東縣3位
    Taitung: [
      {
        name: "劉櫂豪",
        no: "1",
        party: "民進黨",
        photo: require("../assets/選舉章icon.png"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["國立政治大學法律系"],
          exp: [
            // "2001年臺東縣副縣長",
            // "2019年民主進步黨政策會執行長",
            "2020年民主進步黨台東縣黨部主委",
            "2012年第8屆立法委員",
            "2016年第9屆立法委員",
            "2020年第10屆立法委員",
          ],
        },
      },
      {
        name: "饒慶鈴",
        no: "2",
        party: "國民黨",
        photo: require("../assets/饒慶鈴.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            // "輔仁大學中文系",
            "美國加州聖荷西州立大學媒體教育碩士",
            "國立臺灣師範大學政治研究所博士",
          ],
          exp: [
            // "2006年第16屆臺東縣副議長",
            // "2006年第16－18屆臺東縣議員",
            // "2010年第17－18屆臺東縣議長",
            "2016年中國國民黨副秘書長",
            "2018年臺東縣第18屆縣長",
          ],
        },
      },
      {
        name: "陳長宏",
        no: "3",
        party: "無黨",
        photo: require("../assets/陳長宏.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [
            // "新北市永光彩色印刷廠負責人",
            // "工業局審查委員顧問",
            // "交通部IP及通訊協定委員",
            "台灣網際網路創會會長及法制委員會總召",
            "族群聯盟執行長",
            "全球華人牧師大會總召",
          ],
        },
      },
    ],
    //離島
    // 澎湖縣3位
    Penghu: [
      {
        name: "陳光復",
        no: "1",
        party: "民進黨",
        photo: require("../assets/陳光復.jpg"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: ["喜信聖經學院"],
          exp: [
            // "1985年高雄市議員",
            // "1993年立法委員",
            "2007年澎湖第一酒廠有限公司創辦人兼任董事長",
            "2007年澎湖第一生技有限公司創辦人兼任董事長",
            "2019年總統府國策顧問",
          ],
        },
      },
      {
        name: "賴峰偉",
        no: "2",
        party: "國民黨",
        photo: require("../assets/賴峰偉.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [
            "東海大學化學系畢業",
            "美國密蘇里大學工業管理碩士",
            "美國密蘇里大學工程管理博士",
          ],
          exp: [
            // "2001年澎湖縣第14屆縣長",
            // "中國國民黨高雄市委員會副主任委員",
            // "2008年內政部政務次長",
            // "2008年總統府副秘書長",
            "2010年考試院考選部部長",
            "2018年澎湖縣第18屆縣長員",
          ],
        },
      },
      {
        name: "葉竹林",
        no: "3",
        party: "無黨",
        photo: require("../assets/葉竹林.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["澎湖科技大學服務業經營管理研究所碩士畢業"],
          exp: ["澎湖縣縣議員", "2018年馬公市第10屆市長"],
        },
      },
    ],
    //金門縣6位
    Kinmen: [
      {
        name: "李應文",
        no: "1",
        party: "無黨",
        photo: require("../assets/李應文.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["國立東華大學碩士"],
          exp: [
            // "金門縣六屆縣議員",
            // "金門空軍後備協會第3-4屆理事長",
            "107年金門縣李氏宗親會常務理事",
            "102-107國民黨金沙民眾服務站主任",
            "金門縣青年創業協會理事長",
          ],
        },
      },
      {
        name: "楊鎮浯",
        no: "2",
        party: "國民黨",
        photo: require("../assets/楊鎮浯.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: ["中國文化大學經濟學系", "西敏大學企業管理碩士"],
          exp: ["2016年第9屆立法委員", "2018年金門縣第7屆縣長"],
        },
      },
      {
        name: "洪志恒",
        no: "3",
        party: "無黨",
        photo: require("../assets/洪志恒.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: ["東吳大學法律系畢業"],
          exp: [
            // "法律實務經驗20多年",
            // "2014年金門縣長參選人",
            // "2016年立法委員參選人",
            "2018年金門縣長參選人",
            "2020年立法委員參選人",
          ],
        },
      },
      {
        name: "朱紀瑋",
        no: "4",
        party: "無黨",
        photo: require("../assets/朱紀瑋.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "陳福海",
        no: "5",
        party: "無黨",
        photo: require("../assets/陳福海.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [
            "國立空中大學公共行政學系",
            "銘傳大學公共事務所學分班",
            "華中科技大學公共管理學院碩士",
            "華中科技大學公共管理學院博士生",
          ],
          exp: ["2008年第7屆立法委員", "2014年第6屆金門縣縣長"],
        },
      },
      {
        name: "林志錦",
        no: "6",
        party: "無黨",
        photo: require("../assets/林志錦.jpg"),
        party_photo: require("../assets/無黨.jpg"),
        experience: {
          edu: [""],
          exp: ["2020年立法委員參選人"],
        },
      },
    ],
    //連江縣3位
    Lienchiang: [
      {
        name: "李問",
        no: "1",
        party: "民進黨",
        photo: require("../assets/選舉章icon.png"),
        party_photo: require("../assets/民進黨.jpg"),
        experience: {
          edu: [
            "國立臺灣大學人類學系學士",
            "美國芝加哥大學社會科學碩士學程碩士",
          ],
          exp: [
            // "民主進步黨媒體創意中心副主任",
            // "民主進步黨公共關係處副主任",
            // "民主進步黨發言人",
            // "民主進步黨中國事務部副主任",
            "民主進步黨連江縣入黨審查委員會召集人",
            "民主進步黨連江縣黨部主委",
          ],
        },
      },
      {
        name: "曹爾元",
        no: "2",
        party: "國民黨",
        photo: require("../assets/曹爾元.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: [""],
          exp: ["農改場技術員迄縣府地政局長"],
        },
      },
      {
        name: "王忠銘",
        no: "3",
        party: "國民黨",
        photo: require("../assets/王忠銘.jpg"),
        party_photo: require("../assets/國民黨.jpg"),
        experience: {
          edu: ["淡江大學教育政策與領導研究所"],
          exp: [
            // "連江縣副縣長",
            // "連江縣政府秘書長",
            "連江縣政府局長",
            "連江縣政府參議",
            "連江縣政府主任",
          ],
        },
      },
    ],
  },

  actions: {},
  modules: {},
});
