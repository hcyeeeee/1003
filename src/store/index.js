import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    guys: [
      {
        name: "張烱春",
        no: "1",
        party: "張烱春",
        photo: require("../assets/張烱春.png"),
        party_photo: require("../assets/台灣股票黨.png"),
        experience: {
          edu: ["台中師專"],
          exp: [
            "台中市北屯仁和里長",
            "台中市街頭藝人協會創會理事長",
            "台中市兒童福利發展協會總幹事",
          ],
        },
        opinion: {
          title: "政見",
          opin: [
            "行政中立法／地方自治／財政畫分／選罷法／總統選舉法／公投／勞基法等等需修",
            "國教立即短期內向下延伸",
            "土地正義相關／國土規劃／都市計劃／農地全面檢討",
            "司法／人權／轉型正義等修正",
            "保障身心障礙家庭基本收入及照顧入法",
            "遷建立法院台中先行",
            "中火空污回饋補償擴大範圍更需向中央爭取，加速台中重大建設，如：沙鹿台中機場開發、海線鐵路高架雙軌、大肚生活圈古蹟人文、烏日高鐵區發展、霧峰台中捷運優先，形成環狀大台中等",
          ],
        },
        property: {
          title: "財產申報",
          prop: ["空白"],
          file: [
            "https://www.ftvnews.com.tw/topics/tai2area/property/張烱春財申表.pdf",
          ],
        },
      },
      {
        name: "林金連",
        no: "2",
        party: "林金連",
        photo: require("../assets/林金連.png"),
        party_photo: require("../assets/無黨籍.png"),
        experience: {
          edu: [
            "光華高工",
            "省立嘉義師專幼稚教育師資科",
            "省立嘉義師專幼稚教育師資科",
            "國立嘉義師範學院幼兒教育學系",
            "國立嘉義大學幼兒教育研究所，幼教碩士",
          ],
          exp: [
            "台中黎明幼兒園園長",
            "87年文建會地方記錄片首獎、考古研究、埔里石墩坑、南屯麻糍埔遺址發現",
            "台灣省道教會理事",
            "台灣土地正義行動聯盟常務理事",
            "嘉義大學幼兒教育研究所甄試榜首",
            "中華道教學院合格大法師認證",
          ],
        },
        opinion: {
          title: "政見",
          opin: [
            "身為土地迫遷受難者，看到台灣社會存在太多的不公不義、貪官污吏、官商勾結問題泛濫",
            "我絕不是叛經離道的異議人士，只能更能苦民所苦，領悟太多不當之法需改革修正",
            "唯有進駐立法院，才能真正擺除政黨包袱為小老百姓做事發聲",
          ],
        },
        property: {
          title: "財產申報",
          prop: ["土地4筆", "建物5筆", "汽車1筆"],
          file: [
            "https://www.ftvnews.com.tw/topics/tai2area/property/林金連財申表.pdf",
          ],
        },
      },
      {
        name: "李昇翰",
        no: "3 ",
        party: "李昇翰",
        photo: require("../assets/李昇翰.png"),
        party_photo: require("../assets/無黨籍.png"),
        experience: {
          edu: ["國立高雄海洋科技大學學士"],
          exp: [
            "某科大第一屆學生會會長",
            "某社區第三屆主任委員",
            "某社福基金會第八屆體驗活動總召",
          ],
        },
        opinion: {
          title: "政見",
          opin: [
            "承襲爺爺熱心公益的從政理念",
            "無黨無派、無依無靠、沒有背台、沒有立場",
            "青年首購107年遷進沙鹿，成家三年5626",
            "中二區只選剩餘這屆，兩年期滿「約翰走路」",
            "有很多特別的主題，想發表1986的時代心聲",
            "督促自己半年內熟悉立院事務，請各方前輩給我機會",
            "當選設一個主要辦事處，以全台的眼光看地方的發展定位",
            "支持立法院遷中部",
            "重視空港整體性建設，爭取航站員工專用停車場",
            "取消疫調實聯名制，維護民眾個資安全，減少商家營業負擔",
          ],
        },
        property: {
          title: "財產申報",
          prop: [
            "土地1筆",
            "建物1筆",
            "汽車1筆",
            "保險3筆 84萬9200元",
            "股票 3萬元",
            "存款 87萬3190元",
            "債務 532萬6852元",
          ],
          file: [
            "https://www.ftvnews.com.tw/topics/tai2area/property/李昇翰財申表.pdf",
          ],
        },
      },
      {
        name: "林靜儀",
        no: "4",
        party: "林靜儀",
        photo: require("../assets/林靜儀.png"),
        party_photo: require("../assets/民進黨.png"),
        experience: {
          edu: [
            "台大分子醫學研究所碩士",
            "中山醫學大學醫學研究所碩士",
            "中山醫學大學醫學研究所博士",
          ],
          exp: [
            "第9屆立法委員",
            "民進黨中央黨部婦女發展部主任",
            "中山醫大附設醫院產科主任",
            "行政院婦權會委員",
          ],
        },
        opinion: {
          title: "政見",
          opin: [
            "照顧長幼全方位：長照2.0 社區服務最佳化，完善幼托資源照顧更有力",
            "能源轉型穩健推：增氣減煤機組更新少碳排，空汙防治監測品質更進化",
            "大眾運輸要起飛：山海環線鐵路雙軌高架化，捷運路網建置規劃更全面",
            "交通建設助安行：聯外運輸便捷友善促觀光，道路品質翻新交通更安心",
            "產業升級不能停：在地產業體質更新重永續，優質農產行銷輔導有效率",
            "本地文化永傳承：區域閒置空間古蹟再利用，連結歷史藝文活動新感動",
            "教育環境再提升：校舍整建設施改善要健全，學童學習活動空間更安全",
            "休息遊憩更便利：建構生態及河濱親水公園，觀光景點規劃發展更落地",
            "基礎建設續完善：自來水管線汰換延管加速，極端氣候永續能源來因應",
            "強身健體有處去：爭取全民運動空間廣設置，普及運動習慣世代更健康",
          ],
        },
        property: {
          title: "財產申報",
          prop: [
            "土地3筆",
            "建物3筆",
            "汽車1筆",
            "保險4筆 285萬7457元",
            "存款 172萬0389元",
            "債務 491萬9800元",
          ],
          file: [
            "https://www.ftvnews.com.tw/topics/tai2area/property/林靜儀財申表.pdf",
          ],
        },
      },
      {
        name: "顏寬恒",
        no: "5",
        party: "顏寬恒",
        photo: require("../assets/顏寬恒.png"),
        party_photo: require("../assets/國民黨.png"),
        experience: {
          edu: [
            "建國工專機械工程科",
            "美國舊金山多明尼肯大學企管碩士",
            "中華大學行政管理研究所碩士",
          ],
          exp: [
            "第8、9屆立法委員",
            "台中市救國團團委會指導委員",
            "大甲鎮瀾宮兒童家園志工",
            "台中市後備指揮部發展委員",
            "台中市新移民女性家庭關懷協會顧問",
            "台中市沙鹿中正獅子會2016-2017會長",
            "中華民國法警協會榮譽理事長",
            "社團法人台中市學前教育協會顧問",
          ],
        },
        opinion: {
          title: "政見",
          opin: [
            "監督衛福部接種受害救濟審議小組，對於因疫苗預防接種受害請求救濟者，應盡速審議確定後予以救濟補償",
            "檢討我國食安政策，針對含有萊克多巴胺等有害藥劑之豬肉，加強源頭管制嚴格把關及標示義務",
            "監督中央與地方政府合力，加強大型汙染源管制，擴大鼓勵高汙染車輛及鍋爐汰換，改善中部地區空汙問題：堅持台中發電廠新建燃氣機組，必須除役並拆除等量之燃煤機組，絕不讓中火成為世界最大火力發電廠",
            "加速爭取海線鐵路雙軌化以及大慶至烏日段高架化建設，增加海線鐵道班次，活絡交通、平衡區域發展",
            "持續監督台中大肚與彰化銜接之和美大橋工程進度，縮短兩地交通時間，紓解目前周邊道路尖峰時間壅塞問題",
            "全力爭取台中生活圈四號道路線延伸開闢工程，補足大肚、龍井區域聯外道路，完成大台中交通環狀線。",
            "提升台中港與台中國際機場運量，監督行政部門加速台中國際機場升級完工，滿足出入境需求。",
            "督促行政部門加速台中捷運藍線、綠線延伸線盡速動工，爭取藍線向南延伸至霧峰段盡速定案，以因應沿線人口快速成長及霧峰區內兩所大學之大眾交通問題。",
            "延續任內推動建設，持續監督南山截水溝工程，全面改善龍井、沙鹿地區淹水問題。",
            "針對區域老舊自來水管線，進行汰換以降低漏水率，並持續提升自來水普及率，增設偏遠地區之自來水管線。",
            "爭取青年創業基地，擴大青年創業及就業補助，加強配套措施，鼓勵青年返鄉就業、創業。",
            "檢討我國嬰幼兒收托政策，減輕家長負擔、提升嬰幼兒托育及園所營運品質，照顧孩子同時兼顧幼保人員權益。",
            "因應人口高齡化加強長照政策，活化老年人口、提升長照品質，滿足失能、失智人口增加所衍生之長照需求，減輕子女負擔。",
            "配合十二年國民基本教育，爭取新設高中，讓在地學子免於舟車勞頓，提升教育質量。",
            "擴大勞工就業職能、技能輔導，包括創業、就業、轉型，放寬創業貸款審查，加速投入職場。",
            "加強農漁牧業產銷輔導，穩定市場價格；推動農漁牧業轉型升級，加強農漁牧行銷策略，吸引在地青年投入",
            "爭取中央預算，針對在地商圈加強行銷特色商圈與商圈活化，吸引外地觀光人潮、帶動區域發展。",
          ],
        },
        property: {
          title: "財產申報",
          prop: [
            `土地62筆`,
            `建物10筆`,
            `汽車1筆`,
            `保險27筆`,
            `股票 1384萬6760元`,
            `存款 2705萬9790元`,
            `債務 7422萬1077元`,
            `事業投資 1800萬元`,
          ],
          file: [
            "https://www.ftvnews.com.tw/topics/tai2area/property/顏寬恒財申表.pdf",
          ],
        },
      },
    ],

    vote_personal: [
      { no: 1, valid_vote: 0, percent: 0, elected: false },
      { no: 2, valid_vote: 0, percent: 0, elected: false },
      { no: 3, valid_vote: 0, percent: 0, elected: false },
      { no: 4, valid_vote: 0, percent: 0, elected: true },
      { no: 5, valid_vote: 0, percent: 0, elected: false },
    ],
    vote_total: 120000,
  },
  mutations: {
    votes(state) {
      // eslint-disable-next-line no-undef
      axios
        .get("https://www.ftvnews.com.tw/api/poll220109.json")
        .then(function (res) {
          let votes = res.data.Data[1].Candidate;
          let total =
            votes[0].Tickets +
            votes[1].Tickets +
            votes[2].Tickets +
            votes[3].Tickets +
            votes[4].Tickets;

          for (let i = 0; i < state.guys.length; i++) {
            let bar = (votes[i].Tickets / state.vote_total) * 100; // 票數百分比

            document.querySelectorAll(".percent")[i].innerHTML = (
              (votes[i].Tickets / total) *
              100
            ).toFixed(2);

            if (votes[i].Tickets >= 120000) {
              document.querySelectorAll(".vote_progress")[i].style.width =
                100 + "%";
            } else {
              document.querySelectorAll(".vote_progress")[i].style.width =
                bar + "%"; // progress長度
            }

            state.vote_personal[i].valid_vote = votes[
              i
            ].Tickets.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬"); // api新票數 取代 預設票數值vote_personal

            // person_vote = state.vote_personal[i].valid_vote
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  actions: {},
  modules: {},
});
