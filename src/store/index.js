import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    guys: [
      {
        name: "陳時中",
        no: "1",
        party: "民進黨",
        photo: "../assets/陳時中.png",
        party_photo: "../assets/民進黨.png",
        experience: {
          edu: ["臺北醫學院牙醫學系"],
          exp: [
            "2004年財團法人臺北醫學大學董事",
            "2005年行政院衛生署「全民健康保險監理委員會」委員",
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
        photo: "../assets/蔣萬安.png",
        party_photo: "../assets/國民黨.png",
        experience: {
          edu: [
            "國立政治大學外交學系國際關係學學士",
            "國立政治大學法律學系法律學學士",
            "賓夕法尼亞大學法學碩士",
            "賓夕法尼亞大學法律博士",
          ],
          exp: [
            "2016年第9屆立法委員",
            "2016年財團法人青年和平團董事",
            "2017年中國國民黨中央委員會中央常務委員",
            "台灣土地正義行動聯盟常務理事",
            "2020年第10屆立法委員",
            "中國國民黨立法院黨團書記長",
          ],
        },
      },
      {
        name: "黃珊珊",
        no: "3 ",
        party: "無黨",
        photo: "../assets/黃珊珊.png",
        party_photo: "../assets/無黨籍.png",
        experience: {
          edu: [
            "國立臺灣大學大氣科學系轉法律系",
            "國立陽明交通大學科技法律研究所（肄業）",
          ],
          exp: [
            "1998年台北市議會第8屆議員",
            "2002年台北市議會第9屆議員",
            "2006年台北市議會第10屆議員",
            "2010年台北市議會第11屆議員",
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
        photo: "../assets/蘇煥智.png",
        party_photo: "../assets/維新黨.png",
        experience: {
          edu: [
            "國立臺灣大學物理系肄業",
            "國立臺灣大學法律系畢業 ",
            "輔仁大學法律研究所碩士",
          ],
          exp: [
            "2001年臺南縣第14屆縣長",
            "2005年臺南縣第15屆縣長",
            "2012年新境界文教基金會地方自治組召集人",
            "2019年臺灣維新創黨人兼第一屆召集人",
          ],
        },
      },

      {
        name: "張家豪",
        no: "5",
        party: "台灣動保黨",
        photo: "../assets/張家豪.png",
        party_photo: "../assets/台灣動保黨.png",
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
        photo: "../assets/黃聖峰.png",
        party_photo: "../assets/台澎黨.png",
        experience: {
          edu: [
            "國立臺灣大學法律學系學士畢",
            "國立臺北大學法學研究所刑法組碩士畢",
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
        photo: "../assets/張家豪.png",
        party_photo: "../assets/無黨籍.png",
        experience: {
          edu: ["國立臺灣大學法律學系學士", "美國麥克喬治法學院LLM法學碩士"],
          exp: [
            "萬國法律事務所律師",
            "李潮雄律師事務所律師",
            "Adobe法律顧問",
            "齊麟國際法律事務所合夥人",
          ],
        },
      },
      {
        name: "鄭匡宇",
        no: "8",
        party: "無黨",
        photo: "../assets/鄭匡宇.png",
        party_photo: "../assets/無黨.png",
        experience: {
          edu: [
            "國立政治大學哲學系畢業",
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
        photo: "../assets/施奉先.png",
        party_photo: "../assets/無黨.png",
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "唐新民",
        no: "10",
        party: "無黨",
        photo: "../assets/唐新民.png",
        party_photo: "../assets/無黨.png",
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "王文娟",
        no: "9",
        party: "無黨",
        photo: "../assets/王文娟.png",
        party_photo: "../assets/無黨.png",
        experience: {
          edu: [""],
          exp: [""],
        },
      },
      {
        name: "謝立康",
        no: "10",
        party: "無黨",
        photo: "../assets/謝立康.png",
        party_photo: "../assets/無黨.png",
        experience: {
          edu: [""],
          exp: [""],
        },
      },
    ],

    guys_Newtaipei: [
      {
        name: "林佳龍",
        no: "1",
        party: "民進黨",
        photo: "../assets/林佳龍.png",
        party_photo: "../assets/民進黨.png",
        experience: {
          edu: [
            "國立臺灣大學政治學系學士、碩士",
            "耶魯大學人文哲學碩士、政治學碩士、政治學博士",
          ],
          exp: [
            "2004年行政院新聞局局長",
            "2007年總統府副祕國家安全會議諮詢委員",
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
        photo: "../assets/侯友宜.png",
        party_photo: "../assets/國民黨.png",
        experience: {
          edu: [
            "中央警官學校刑事警察學系法學學士",
            "中央警察大學犯罪防治研究所法學博士",
            "賓夕法尼亞大學法學碩士",
            "賓夕法尼亞大學法律博士",
          ],
          exp: [
            "2001年桃園縣政府警察局局長",
            "2003年內政部警政署刑事警察局局長",
            "2006年內政部警政署署長",
            "2008年中央警察大學校長",
            "2010年新北市第1屆副市長",
            "2014年新北市第2屆副市長",
            "2018年新北市第3屆市長",
          ],
        },
      },
    ],
    guys_Taoyuan: [
      {
        name: "鄭運鵬",
        no: "1",
        party: "民進黨",
        photo: "../assets/鄭運鵬.png",
        party_photo: "../assets/民進黨.png",
        experience: {
          edu: ["國立臺灣大學土木工程學系畢業"],
          exp: [
            "2004年當選台北市北區立委",
            "2012年任民進黨網路部主任",
            "2013年任民進黨組織部主任",
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
        photo: "../assets/張善政.png",
        party_photo: "../assets/國民黨.png",
        experience: {
          edu: [
            "國立臺灣大學土木工程學系工學學士",
            "美國史丹佛大學土木與環境工程學碩士",
            "美國康奈爾大學土木與環境工程學博士 ",
          ],
          exp: [
            "2012年行政院政務委員",
            "2014年第1任科技部部長",
            "2014年第38任行政院副院長",
            "2016年第27任行政院院長",
            "2019年花蓮觀光文化推廣大使",
            "2019年中華民族致公黨最高顧問",
            "2020年中華民國總統選舉中國國民黨副總統候選人",
          ],
        },
      },
      {
        name: "賴香伶",
        no: "3",
        party: "民眾黨",
        photo: "../assets/張善政.png",
        party_photo: "../assets/民眾黨.png",
        experience: {
          edu: [
            "國立臺灣大學土木工程學系工學學士",
            "美國史丹佛大學土木與環境工程學碩士",
            "美國康奈爾大學土木與環境工程學博士 ",
          ],
          exp: [
            "2012年行政院政務委員",
            "2014年第1任科技部部長",
            "2014年第38任行政院副院長",
            "2016年第27任行政院院長",
            "2019年花蓮觀光文化推廣大使",
            "2019年中華民族致公黨最高顧問",
            "2020年中華民國總統選舉中國國民黨副總統候選人",
          ],
        },
      },
      {
        name: "張善政",
        no: "2",
        party: "國民黨",
        photo: "../assets/張善政.png",
        party_photo: "../assets/國民黨.png",
        experience: {
          edu: [
            "國立臺灣大學土木工程學系工學學士",
            "美國史丹佛大學土木與環境工程學碩士",
            "美國康奈爾大學土木與環境工程學博士 ",
          ],
          exp: [
            "2012年行政院政務委員",
            "2014年第1任科技部部長",
            "2014年第38任行政院副院長",
            "2016年第27任行政院院長",
            "2019年花蓮觀光文化推廣大使",
            "2019年中華民族致公黨最高顧問",
            "2020年中華民國總統選舉中國國民黨副總統候選人",
          ],
        },
      },
    ],
    guys_Taichung: [
      {
        name: "鄭運鵬",
        no: "1",
        party: "民進黨",
        photo: "../assets/鄭運鵬.png",
        party_photo: "../assets/民進黨.png",
        experience: {
          edu: ["國立臺灣大學土木工程學系畢業"],
          exp: [
            "2004年當選台北市北區立委",
            "2012年任民進黨網路部主任",
            "2013年任民進黨組織部主任",
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
        photo: "../assets/張善政.png",
        party_photo: "../assets/國民黨.png",
        experience: {
          edu: [
            "國立臺灣大學土木工程學系工學學士",
            "美國史丹佛大學土木與環境工程學碩士",
            "美國康奈爾大學土木與環境工程學博士 ",
          ],
          exp: [
            "2012年行政院政務委員",
            "2014年第1任科技部部長",
            "2014年第38任行政院副院長",
            "2016年第27任行政院院長",
            "2019年花蓮觀光文化推廣大使",
            "2019年中華民族致公黨最高顧問",
            "2020年中華民國總統選舉中國國民黨副總統候選人",
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
