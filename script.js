
const tarotCards = [
    {
        name: "愚者",
        image: "00-TheFool.jpg",
        upright: "新的旅程開始，擁抱未知與可能。你正站在改變的門口，充滿勇氣與自由。適合冒險、創業、嘗試新事物。",
        reversed: "魯莽行事或忽視風險。你可能沒有準備好開始，或過於天真。當心錯誤的決定與缺乏規劃。"
      },
      {
        name: "魔術師",
        image: "01-TheMagician.jpg",
        upright: "這是行動的時刻。你擁有實現夢想的工具，無論是溝通、技巧或創意。適合啟動新計畫、創業，或主導一場談判。",
        reversed: "資源被誤用或表裡不一。當心欺瞞或誇大其詞。你的想法尚未落實，可能缺乏信心或專注力。"
      },
      {
        name: "女祭司",
        image: "02-TheHighPriestess.jpg",
        upright: "傾聽內在的聲音，直覺將帶你找到答案。現在不宜過度行動，而是觀察、學習與沉澱，適合探索潛意識與靈性。",
        reversed: "忽視直覺或過度壓抑內心感受。也可能有秘密被隱藏或誤解他人。建議暫緩重大決定，重新對齊內在。"
      },
      {
        name: "皇后",
        image: "03-TheEmpress.jpg",
        upright: "滋養與創造的能量正在環繞你。適合孕育新關係、計畫或家庭。重視感官享受與自然連結，帶來豐盛與愛。",
        reversed: "過度依賴、懶散或情緒失衡。你可能付出太多而忽略自己，或陷入無法結果的關係中。"
      },
      {
        name: "皇帝",
        image: "04-TheEmperor.jpg",
        upright: "你正掌控局面。象徵結構、秩序與責任。適合制定規則、建立穩固的基礎，並用理性做決策。",
        reversed: "控制慾過強、專制或缺乏彈性。你可能過度壓抑情感或無法放手控制。學會信任他人。"
      },
{
  name: "教皇",
  image: "05-TheHierophant.jpg",
  upright: "傳統、信仰與學習。你正在尋求精神導引、教育或制度內的支持。適合跟隨規則，向長輩或導師請益。",
  reversed: "質疑傳統、叛逆或偏離常軌。你可能不願遵守規則，或對既有系統產生抗拒。尋找你自己的信仰。"
},
{
  name: "戀人",
  image: "06-TheLovers.jpg",
  upright: "關係、選擇與整合。你正面臨重要決定，須平衡感性與理性。代表愛情、夥伴關係或價值的統一。",
  reversed: "衝突、誘惑或優柔寡斷。你可能逃避責任或在關係中失去平衡。面對真實內心才能做出選擇。"
},
{
  name: "戰車",
  image: "07-TheChariot.jpg",
  upright: "勝利、意志與控制。你正駕馭內外力量邁向目標。適合主動出擊、奮力前進，不畏挑戰。",
  reversed: "失控、拖延或過度執著。你可能被情緒或外在干擾所牽引，無法掌握方向。重新找回自我中心。"
},
{
  name: "力量",
  image: "08-Strength.jpg",
  upright: "內在堅韌與柔性力量。你具備溫和又堅定的能量，可安撫衝突、克服恐懼。相信自己，勇敢表達。",
  reversed: "自我懷疑、情緒失控或壓抑。你可能低估了自己或用錯方式面對壓力。學習與內心和平共處。"
},
{
  name: "隱者",
  image: "09-TheHermit.jpg",
  upright: "內省、獨處與智慧的追求。你需要退一步思考，關注內在世界。適合沉澱、冥想或尋找生命意義。",
  reversed: "孤立、逃避或拒絕與人連結。你可能過度封閉自己，無法接受幫助。走出心牆，重新連結世界。"
},{
  name: "命運之輪",
  image: "10-WheelOfFortune.jpg",
  upright: "命運開始轉動，無法掌控的變化正在發生。好運將至，或是新的契機將你推向前方。相信宇宙的安排，順勢而為。",
  reversed: "突如其來的困難、延遲或停滯。你可能對變化抗拒，或無法適應新局面。學會放下控制，接受不確定性。"
},
{
  name: "正義",
  image: "11-Justice.jpg",
  upright: "公平與誠實至上。你將因過去的行動而獲得回報或面對後果。適合簽約、法律事務或解決爭議。",
  reversed: "偏見、不公或逃避責任。真相被扭曲，或你正面臨不誠實的局勢。重新評估你的立場與價值觀。"
},
{
  name: "倒吊人",
  image: "12-TheHangedMan.jpg",
  upright: "暫停與等待是為了獲得新視角。放下固有觀念，犧牲眼前利益，以換取更深的洞見或精神成長。",
  reversed: "遲疑、逃避或原地踏步。你可能拒絕成長或改變。建議檢視是否該鬆手某些執著，重啟方向。"
},
{
  name: "死神",
  image: "13-Death.jpg",
  upright: "結束與重生。一段關係、階段或信念正走向終點。放下舊我，迎接新的開始。蛻變雖痛苦，但必要。",
  reversed: "抗拒改變、無法放下。你可能被過去綁住，錯失轉機。療癒與釋放是你此刻的功課。"
},
{
  name: "節制",
  image: "14-Temperance.jpg",
  upright: "平衡與整合的時期。你正學會調和不同的資源、人際或能量。適合做長期規劃，穩健推進目標。",
  reversed: "極端、不協調或失去節制。你可能過度沉溺某事，或人際失衡。回歸中心，重建內外一致性。"
},
{
  name: "惡魔",
  image: "15-TheDevil.jpg",
  upright: "慾望、束縛與上癮的象徵。你可能沉迷於金錢、權力、感情或成癮行為。面對陰影面，才能走出枷鎖。",
  reversed: "開始覺察與釋放束縛。你可能準備擺脫不健康的關係或惡性循環。正是掙脫控制、重獲自由的時機。"
},
{
  name: "高塔",
  image: "16-TheTower.jpg",
  upright: "突如其來的震撼與崩解。長期累積的不穩定將被摧毀，迫使你重新建構。雖痛苦，但有助於真實重生。",
  reversed: "你可能預感到改變即將來臨，或試圖避免災難。逃避只會延長痛苦。主動面對反而能更快重整。"
},
{
  name: "星星",
  image: "17-TheStar.jpg",
  upright: "希望、療癒與靈感。你正從低谷中甦醒，重拾信心與願景。適合進行創作、自我修復或追尋夢想。",
  reversed: "失去信心或陷入自我懷疑。你可能迷失方向、感覺無助。重新連結你的初心與內在光亮。"
},
{
  name: "月亮",
  image: "18-TheMoon.jpg",
  upright: "幻象、直覺與潛意識。事實可能被掩蓋，需靠內在指引前進。適合探索夢境、靈性或隱藏情緒。",
  reversed: "混亂逐漸釐清，真相開始浮現。你可能正擺脫迷惘，但也要小心固執與自欺。"
},
{
  name: "太陽",
  image: "19-TheSun.jpg",
  upright: "成功、光明與喜悅。你處於正能量高峰期，適合展現自我、完成目標或慶祝成果。也象徵幸福家庭與豐收。",
  reversed: "樂觀過頭或被表面現象迷惑。你可能忽略現實問題，或被驕傲蒙蔽雙眼。回歸真實才能發光。"
},
{
  name: "審判",
  image: "20-Judgement.jpg",
  upright: "覺醒、反思與重生。你正經歷一段自我審視期，準備擺脫過去並蛻變。這是一個決斷與釋放的關鍵時刻。",
  reversed: "逃避責任、懊悔或未能原諒自己。你可能無法跨越過去的錯誤，或害怕面對真相。唯有誠實才能解脫。"
},
{
  name: "世界",
  image: "21-TheWorld.jpg",
  upright: "圓滿、完成與整合。你已達成階段性目標，迎來勝利與和諧。也象徵旅程的終點與新的開始。",
  reversed: "未竟之事或延遲完成。你可能接近成功卻猶豫不決，或錯過整合經驗的機會。檢視是否有遺漏或逃避。"
},
{
  name: "審判",
  image: "20-Judgement.jpg",
  upright: "覺醒、反思與重生。你正經歷一段自我審視期，準備擺脫過去並蛻變。這是一個決斷與釋放的關鍵時刻。",
  reversed: "逃避責任、懊悔或未能原諒自己。你可能無法跨越過去的錯誤，或害怕面對真相。唯有誠實才能解脫。"
},
{
  name: "世界",
  image: "21-TheWorld.jpg",
  upright: "圓滿、完成與整合。你已達成階段性目標，迎來勝利與和諧。也象徵旅程的終點與新的開始。",
  reversed: "未竟之事或延遲完成。你可能接近成功卻猶豫不決，或錯過整合經驗的機會。檢視是否有遺漏或逃避。"
},

{
  name: "聖杯侍者",
  image: "Cups11.jpg",
  upright: "靈感與情感的新芽。可能有好消息、告白或創意出現。象徵開放心靈、純真與情感探索的開始。",
  reversed: "情感幼稚、逃避或情緒不穩。你可能過度敏感、害怕面對感情或無法處理內心需求。"
},
{
  name: "聖杯騎士",
  image: "Cups12.jpg",
  upright: "浪漫使者、情感行動。你可能收到邀約、表白或創作靈感，適合勇敢表達情感或追尋夢想。",
  reversed: "情感不實、猶豫或理想化過頭。你可能被幻想牽引或逃避現實關係。"
},
{
  name: "聖杯皇后",
  image: "Cups13.jpg",
  upright: "深沉的愛、直覺與療癒能量。你或他人正展現無條件的接納與情感支持，是同理與內在穩定的象徵。",
  reversed: "情緒過載、依附或操縱。你可能無法清楚界線，陷入自我犧牲或情緒勒索模式。"
},
{
  name: "聖杯國王",
  image: "Cups14.jpg",
  upright: "情感成熟、穩定與寬容。代表能穩健掌控情緒並理解他人的人物，也象徵你在關係中的領導角色。",
  reversed: "壓抑情緒或情感疏離。可能遇到情緒壓迫、冷漠或情緒操控的人。"
},
{
  name: "錢幣一",
  image: "Pentacles01.jpg",
  upright: "物質與現實的新開始。可能收到工作機會、金錢資源或創業靈感。代表具體目標的啟動與穩固。",
  reversed: "機會流失或現實不穩。你可能缺乏耐心、過於貪心或無法好好運用資源。"
},
{
  name: "錢幣二",
  image: "Pentacles02.jpg",
  upright: "彈性、平衡與多重處理。你正忙於應對多重任務，但掌握節奏。鼓勵你保持靈活與節奏感。",
  reversed: "失去平衡、壓力過大。你可能在多線操作中崩潰，無法分配時間與資源。"
},
{
  name: "錢幣三",
  image: "Pentacles03.jpg",
  upright: "合作、學習與專業發展。代表在團隊中發揮才能，或在專業上精進。適合請教專家與共同努力。",
  reversed: "缺乏協調、團隊不合或自滿。你可能孤軍奮戰或忽略他人建議。"
},
{
  name: "錢幣四",
  image: "Pentacles04.jpg",
  upright: "掌控、穩固與保護。你正努力建立安全感，重視金錢與資源管理。但也提醒你不要太過緊抓。",
  reversed: "過度執著、吝嗇或控制欲。你可能害怕失去而無法成長。學習放手、信任流動。"
},
{
  name: "錢幣五",
  image: "Pentacles05.jpg",
  upright: "匱乏、失落與孤立。可能面臨財務困難、健康問題或支持系統中斷。記得，協助其實就在你身邊。",
  reversed: "情況開始改善，援助與資源出現。你準備走出困境，重建安全感。"
},
{
  name: "錢幣六",
  image: "Pentacles06.jpg",
  upright: "給予與接受的平衡。象徵慷慨、支援或公平分配資源。你可能是施予者或受助者，關鍵在於平衡。",
  reversed: "依賴、不公平或權力不對等。你可能感到被操控或利用，或給出過頭而無法照顧自己。"
},
{
  name: "錢幣七",
  image: "Pentacles07.jpg",
  upright: "耐心等待、長期投資的成果。你已投入大量努力，現在是評估進展與等待收成的時候。",
  reversed: "急躁、不願等待或失去耐性。你可能對成果不滿，或忽略了努力所需的時間與累積。"
},
{
  name: "錢幣八",
  image: "Pentacles08.jpg",
  upright: "專注、技能磨練與勤奮學習。你正穩健進步，透過不斷實踐而變得更專業。",
  reversed: "散漫、缺乏動力或目標不明。你可能只做表面功夫，或無法長期堅持計劃。"
},
{
  name: "錢幣九",
  image: "Pentacles09.jpg",
  upright: "獨立、自信與物質成就。你已累積可觀成果，享受自由與美好的生活品質。",
  reversed: "對物質過度依賴或內心空虛。你可能在外表光鮮下感到孤單，提醒你重視內在滿足。"
},
{
  name: "錢幣十",
  image: "Pentacles10.jpg",
  upright: "家庭穩定、世代傳承與長期保障。象徵經濟安全、家族祝福與集體的成果。",
  reversed: "家庭不合、財務壓力或代際矛盾。你可能在物質追求中忽略了關係的溫度。"
},
{
  name: "錢幣侍者",
  image: "Pentacles11.jpg",
  upright: "新的現實機會、學習與實作。你可能開始培養一項技能、投資計畫或進修。腳踏實地最關鍵。",
  reversed: "缺乏專注或學習不深入。你可能想得太多但缺乏行動，或三分鐘熱度。",
},
{
  name: "錢幣騎士",
  image: "Pentacles12.jpg",
  upright: "穩健前進、責任感與務實行動。你正持續打造未來，不急躁卻非常可靠。",
  reversed: "過於固執、拖延或墨守成規。你可能陷入保守、不敢改變的狀態，無法跟上節奏。"
},
{
  name: "錢幣皇后",
  image: "Pentacles13.jpg",
  upright: "實際、溫暖與滋養之母。你善於管理家庭、財務與人際，是安全感與豐盛的象徵。",
  reversed: "過度照顧他人、自我忽略。你可能把自己榨乾、犧牲過多，忘記自身價值。",
},
{
  name: "錢幣國王",
  image: "Pentacles14.jpg",
  upright: "財務穩定、管理高手。你是一位有耐性與遠見的領導者，適合長期規劃、擴展事業。",
  reversed: "控制慾強、過度物質導向。你可能忽略人性，將金錢當作唯一標準。"
},
{
  name: "寶劍一",
  image: "Swords01.jpg",
  upright: "新思維、真相揭露與決心。你擁有清晰的方向與力量，適合開啟溝通、決策或突破困局。",
  reversed: "混亂、誤解與錯誤的開始。你可能判斷失誤或逃避溝通，需先釐清內在想法。",
},
{
  name: "寶劍二",
  image: "Swords02.jpg",
  upright: "兩難選擇、理性封閉。你可能在權衡決策，內心尚未準備好面對現實，需要時間沉澱。",
  reversed: "拖延已久的抉擇將被迫面對。你無法再逃避，壓力會逼你下定決心。"
},
{
  name: "寶劍三",
  image: "Swords03.jpg",
  upright: "心碎、失落與分離。你可能正面臨感情破裂、友情背叛或難以釋懷的傷痛。面對悲傷，是療癒的開始。",
  reversed: "傷痛仍未痊癒，或難以釋懷過去。你可能壓抑情緒，導致內在更大壓力。給自己時間修復。"
},
{
  name: "寶劍四",
  image: "Swords04.jpg",
  upright: "休息、沉澱與精神復原。你需要暫時退出混亂，讓自己靜心療癒、重整思緒。適合冥想與靜觀。",
  reversed: "你可能休息過久、逃避或無法真正放鬆。需平衡行動與休息，別讓壓力悄悄堆積。"
},
{
  name: "寶劍五",
  image: "Swords05.jpg",
  upright: "衝突、勝之不武或人際對立。即使獲勝，也可能感到空虛。反思是否值得爭執，或該選擇和平。",
  reversed: "嘗試彌補、停戰或重建信任。你已開始意識到衝突的代價，適合釋出善意、修復關係。"
},
{
  name: "寶劍六",
  image: "Swords06.jpg",
  upright: "過渡、遷移與逐漸好轉。你正離開困難的過去，雖仍在旅途中，但希望已在前方。",
  reversed: "停滯不前或無法脫離困境。你可能抗拒改變、拖延決定，或被過去牽制。"
},
{
  name: "寶劍七",
  image: "Swords07.jpg",
  upright: "秘密行動、策略或欺瞞。你可能採取不公開的方式達成目標，也要留心身邊是否有人不誠實。",
  reversed: "真相即將曝光或良心不安。你可能開始反省行為，或有人揭穿偽裝。"
},
{
  name: "寶劍八",
  image: "Swords08.jpg",
  upright: "受困、恐懼與限制。你可能感到被困住，但實際上是自我限制。鬆綁心中的枷鎖，你就能走出來。",
  reversed: "開始突破限制，看見出口。你可能準備面對恐懼，採取實際行動。"
},
{
  name: "寶劍九",
  image: "Swords09.jpg",
  upright: "焦慮、失眠與內在折磨。你可能過度擔憂、悔恨或壓力爆棚。請正視情緒，並尋求支持。",
  reversed: "情緒釋放與緩解中。你正逐漸放下焦慮，也可能仍需時間徹底轉化痛苦。"
},
{
  name: "寶劍十",
  image: "Swords10.jpg",
  upright: "結束、背叛與崩潰。某段關係或計畫已走到盡頭。雖然痛苦，但新的開始也即將到來。",
  reversed: "復原中或否認結束。你可能難以放下，或正從最低谷中重新站起。"
},
{
  name: "寶劍侍者",
  image: "Swords11.jpg",
  upright: "觀察者、學習與警覺。你正處於新知階段，頭腦活躍、好奇心旺盛。也提醒你保持誠實與清晰。",
  reversed: "八卦、過度好奇或言語攻擊。你可能說話太直傷人，或被誤解。注意溝通方式。"
},
{
  name: "寶劍騎士",
  image: "Swords12.jpg",
  upright: "衝勁、直率與迅速行動。你準備果斷前進，但也要當心衝動與忽略細節。理性與熱情需並重。",
  reversed: "過度衝動、魯莽或衝突導向。你可能在未看清全貌下行動，導致誤判與摩擦。"
},{
  name: "寶劍皇后",
  image: "Swords13.jpg",
  upright: "理智、公正與清晰的女性能量。你能洞察事實、做出精準判斷。象徵智慧、誠實與情感掌控。",
  reversed: "冷漠、過度批判或情感封閉。你可能太過理性而忽略他人感受，也可能難以信任他人。"
},
{
  name: "寶劍國王",
  image: "Swords14.jpg",
  upright: "智慧、邏輯與權威。你擁有強大判斷力與決策能力，適合做出理性且有策略性的行動。",
  reversed: "專橫、操控或情緒冷淡。你可能過於堅持己見，無視他人觀點或情緒。"
},
{
  name: "權杖一",
  image: "Wands01.jpg",
  upright: "新動力、新計畫的誕生。你充滿熱情與行動力，適合啟動創意、創業或激發人生方向。",
  reversed: "延遲、創意受阻或動力不足。你可能感到迷惘，缺乏行動力或無法點燃熱情。"
},
{
  name: "權杖二",
  image: "Wands02.jpg",
  upright: "規劃未來與展望。你正面臨選擇與擴張，準備走出舒適圈並擁抱更多可能。",
  reversed: "猶豫、恐懼未知或固守原地。你可能害怕冒險，錯失成長機會。"
},
{
  name: "權杖三",
  image: "Wands03.jpg",
  upright: "遠景與實踐。你已做出選擇，正迎向擴展與收穫。象徵成果將至與新舞台的開啟。",
  reversed: "計劃受阻、延誤或眼界不足。你可能沒看到全局或過度依賴他人。"
},
{
  name: "權杖四",
  image: "Wands04.jpg",
  upright: "穩定、慶祝與家庭和諧。代表階段性成功與幸福時刻，適合慶典、家庭聚會或婚姻。",
  reversed: "不穩、家中不合或慶祝氣氛表面化。你可能忽略了內部不安，需重新調整關係。"
},
{
  name: "權杖五",
  image: "Wands05.jpg",
  upright: "競爭、衝突與挑戰。你正處於多方摩擦或觀點不一的局面。保持彈性與溝通至關重要。",
  reversed: "內耗、逃避對抗或壓抑衝突。你可能對競爭感到疲憊，或無法有效處理分歧。"
},
{
  name: "權杖六",
  image: "Wands06.jpg",
  upright: "勝利、肯定與大眾認可。你努力的成果被看見，正獲得他人的支持與讚賞。",
  reversed: "虛榮、過度自信或渴望掌聲。你可能過於依賴外在認可而忽略真實價值。"
},
{
  name: "權杖七",
  image: "Wands07.jpg",
  upright: "堅持立場、自我保護。你可能面對質疑或攻擊，但擁有足夠能力捍衛所信之事。",
  reversed: "防衛過度、信心動搖。你可能感到被孤立、懷疑自己立場或失去行動力。"
},
{
  name: "權杖八",
  image: "Wands08.jpg",
  upright: "快速進展、溝通與行動。事務正以閃電速度發展，適合果斷回應與迅速前進。",
  reversed: "延遲、資訊錯亂或行動卡住。你可能被太多訊息壓得無法決策，需要重新釐清方向。"
},
{
  name: "權杖九",
  image: "Wands09.jpg",
  upright: "堅持到底、防禦與經驗累積。雖然歷經波折，但你仍擁有堅持信念的力量，代表即將突破最後一道關卡。",
  reversed: "筋疲力竭、懷疑或過度戒備。你可能太過防禦而與他人疏離，也可能無法信任自己的直覺。"
},
{
  name: "權杖十",
  image: "Wands10.jpg",
  upright: "重擔、壓力與責任過重。你扛了太多事，可能是時間重新分配與釋放負擔了。",
  reversed: "崩潰邊緣、逃避責任或倦怠。你可能不堪重負，需要尋求支援或學會拒絕。"
},
{
  name: "權杖侍者",
  image: "Wands11.jpg",
  upright: "熱情開啟、靈感與冒險。象徵年輕活力與好奇心，是創意、新旅程或新目標的開始。",
  reversed: "衝動、不成熟或方向模糊。你可能點子很多但難以落實，需調整動機與專注。"
},
{
  name: "權杖騎士",
  image: "Wands12.jpg",
  upright: "行動力、冒險與衝刺。你充滿激情準備出發，是快速移動、開拓與激進突破的象徵。",
  reversed: "莽撞、缺乏計畫或情緒衝動。你可能太快做決定，錯失判斷與穩健成長的機會。"
},
{
  name: "權杖皇后",
  image: "Wands13.jpg",
  upright: "自信、魅力與領導風範。你正展現迷人而果斷的力量，是創意與社交能量的化身。",
  reversed: "自我中心、嫉妒或控制欲。你可能過度在意外表或情緒起伏不定，需重新找回內在穩定。"
},
{
  name: "權杖國王",
  image: "Wands14.jpg",
  upright: "遠見、熱情與掌控力。你具備帶領他人實現理想的能力，是成功與主動的象徵。",
  reversed: "獨斷、暴躁或目標模糊。你可能過度追求支配，忽略合作與真誠溝通。"
}

];

function drawCards() {
  const cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";

  const selected = tarotCards.sort(() => 0.5 - Math.random()).slice(0, 3);
  const stages = ["過去", "現在", "未來"];

  selected.forEach((card, i) => {
    const isReversed = Math.random() < 0.5;
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    cardEl.innerHTML = `
      <img src="https://tarot-cards-d4u.pages.dev/${card.image}" style="transform: rotate(${isReversed ? 180 : 0}deg)">
      <h4>${stages[i]}・${isReversed ? "逆位" : "正位"}</h4>
      <strong>${card.name}</strong>
      <p>${isReversed ? card.reversed : card.upright}</p>
    `;
    cardsContainer.appendChild(cardEl);
    setTimeout(() => cardEl.classList.add("show"), i * 400);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("draw-btn");
  const input = document.getElementById("user-question");
  const inputContainer = document.getElementById("input-container");
  const topicDisplay = document.getElementById("question-topic");

  button.addEventListener("click", () => {
    const question = input.value.trim();
    if (question) {
      inputContainer.style.display = "none";
      topicDisplay.innerText = `關於「${question}」的塔羅占卜結果`;
      drawCards();
    }
  });
});