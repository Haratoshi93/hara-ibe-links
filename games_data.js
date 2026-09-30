const gamesData = [
    {
        "title": "Splendorデュエル",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "戦略",
            "エンジン構築",
            "2人専用"
        ],
        "desc": "2人専用のスプレンダー。宝石トークンを集めてカードを取得し、複数の勝利条件を争う宝石商対決。",
        "playTime": "30分",
        "amazonUrl": "https://www.amazon.co.jp/dp/B0BLZ7H4H1"
    },
    {
        "title": "GIN CRAFTERS",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "1〜4人",
        "weight": "中量級",
        "category": "ボードゲーム",
        "tags": [
            "戦略",
            "エンジン構築",
            "アクション選択"
        ],
        "desc": "クラフトジンの蒸留家となり、素材収集・レシピ開発・ブランディングで最高の職人を目指す対戦ゲーム。",
        "playTime": "45〜90分",
        "amazonUrl": ""
    },
    {
        "title": "PROJECT L",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "1〜4人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パズル",
            "抽象",
            "エンジン構築"
        ],
        "desc": "アクリル製ポリオミノのピースをパズルにはめ込み、完成させて新しいピースを獲得するテトリス風ゲーム。",
        "playTime": "20〜40分",
        "amazonUrl": ""
    },
    {
        "title": "チャオチャオ..！",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜4人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ブラフ",
            "ダイス",
            "パーティー"
        ],
        "desc": "サイコロを振り、出目を嘘ついて橋を渡るコマを進めるブラフゲーム。バレると脱落するスリル満点の作品。",
        "playTime": "20〜30分",
        "amazonUrl": ""
    },
    {
        "title": "ダイスタック",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜4人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "アクション",
            "バランス",
            "パーティー"
        ],
        "desc": "カードの指示に従ってサイコロを崩さずに積み上げるバランス系アクションゲーム。全員が最後まで参加できる。",
        "playTime": "15〜30分",
        "amazonUrl": ""
    },
    {
        "title": "お憑かれ！おばけちゃん",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜4人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "チキンレース",
            "カード"
        ],
        "desc": "手札を出し切りつつ「酔いメーター」を9にギリギリ近づけて勝つチキンレース型カードゲーム。10超えると脱落。",
        "playTime": "15〜20分",
        "amazonUrl": ""
    },
    {
        "title": "PANDEMIC",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜4人",
        "weight": "中量級",
        "category": "ボードゲーム",
        "tags": [
            "協力",
            "戦略",
            "ネットワーク"
        ],
        "desc": "全員で協力して世界に蔓延する感染症を制圧する協力ゲームの定番作品。役割分担と計画性が鍵。",
        "playTime": "45分",
        "amazonUrl": "https://www.amazon.co.jp/dp/B09NMWY23V"
    },
    {
        "title": "ギャンブラー×ギャンブル",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜4人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ブラフ",
            "競り",
            "心理戦"
        ],
        "desc": "カジノを潰すギャンブラーとして手札を出し合い、合計数字が当たり目と一致すれば報酬を得る読み合いゲーム。",
        "playTime": "15〜30分",
        "amazonUrl": ""
    },
    {
        "title": "七つの予言",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜4人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "トリックテイキング",
            "予測",
            "カード"
        ],
        "desc": "各トリックで自分が何位になるかを事前に「予言」し、予言通りに進めることで得点するビット系トリックテイキング。",
        "playTime": "25〜35分",
        "amazonUrl": ""
    },
    {
        "title": "フリーライドUSA",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "1〜5人",
        "weight": "中量級",
        "category": "ボードゲーム",
        "tags": [
            "ネットワーク構築",
            "戦略",
            "鉄道"
        ],
        "desc": "1950年代のアメリカを舞台に線路を敷いて旅客を運ぶ鉄道ゲーム。他者の路線を使うと国営化される独自ルール。",
        "playTime": "55分",
        "amazonUrl": ""
    },
    {
        "title": "ナナ",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "記憶",
            "セット収集",
            "カード"
        ],
        "desc": "他プレイヤーの手札を記憶し、同じ数字3枚のセットを先に集める記憶型セット収集ゲーム。",
        "playTime": "15〜30分",
        "amazonUrl": ""
    },
    {
        "title": "ラブレター",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "推理",
            "心理戦",
            "カード"
        ],
        "desc": "わずか16枚のカードで行う手札管理と推理のゲーム。最後まで手札に残った最高位のカードを持つ人が勝利。",
        "playTime": "20分",
        "amazonUrl": ""
    },
    {
        "title": "あいうえバトル",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ワード",
            "パーティー",
            "スピード"
        ],
        "desc": "お題の頭文字でワードを宣言しながら手札を出し切ることを目指すワード系カードゲーム。",
        "playTime": "15分",
        "amazonUrl": ""
    },
    {
        "title": "もっとホイップを！",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "競り",
            "ジレンマ"
        ],
        "desc": "ケーキを切り分けながら「取るか取らないか」のジレンマを楽しむ分配型パーティーゲーム。",
        "playTime": "20分",
        "amazonUrl": ""
    },
    {
        "title": "エクストリームミッション",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "カード",
            "手札管理",
            "競争"
        ],
        "desc": "エージェントとして手札の色・数字の組み合わせでミッションをクリアしていく対戦型手札管理カードゲーム。",
        "playTime": "30分",
        "amazonUrl": ""
    },
    {
        "title": "焼肉焼いても店焼くな",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "心理戦",
            "同時選択"
        ],
        "desc": "火力を調整しながら肉を焼くタイミングを読み合う同時選択型ゲーム。過熱して店が焼けると強制終了。",
        "playTime": "人数×10分",
        "amazonUrl": ""
    },
    {
        "title": "グミトリック",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "トリックテイキング",
            "カード"
        ],
        "desc": "色ごとに勝敗を決める独自ルールのマストフォロー型トリックテイキング。伏せ札の使い時が勝敗の鍵。",
        "playTime": "15分",
        "amazonUrl": ""
    },
    {
        "title": "グリッズルド",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "協力",
            "コミュニケーション制限"
        ],
        "desc": "第一次大戦の塹壕を生き抜く協力ゲーム。手札を見せられない制限下でチームワークが問われる難度高め作品。",
        "playTime": "30〜45分",
        "amazonUrl": ""
    },
    {
        "title": "ザ・クルー第９惑星の探索",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "協力",
            "トリックテイキング",
            "ミッション"
        ],
        "desc": "宇宙飛行士として50のミッションをこなす協力型トリックテイキング。会話制限の中でチームワークを発揮する。",
        "playTime": "20分",
        "amazonUrl": ""
    },
    {
        "title": "社長は定時で帰る",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "心理戦",
            "カード"
        ],
        "desc": "手札の役職カードを出し合い、出世争いをしながら社長になって定時退社を目指すパーティーカードゲーム。",
        "playTime": "15〜20分",
        "amazonUrl": ""
    },
    {
        "title": "なかぬきパラダイス",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "心理戦",
            "バッティング",
            "ジレンマ"
        ],
        "desc": "欲張り過ぎた（数字が最大の）プレイヤーだけペナルティを受けるジレンマゲーム。",
        "playTime": "15分",
        "amazonUrl": ""
    },
    {
        "title": "Ill-Illan",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ブラフ",
            "パーティー",
            "心理戦"
        ],
        "desc": "自分のカードが見えない状態で他者が「要る/要らない」を宣言するブラフゲーム。同数字2枚でダメージ。",
        "playTime": "15分",
        "amazonUrl": ""
    },
    {
        "title": "マスカレイドトリックパーティー",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜5人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "トリックテイキング",
            "正体隠匿"
        ],
        "desc": "役職カードの勝利条件を隠しながら行うトリックテイキングゲーム。正体隠匿要素が加わった個性派作品。",
        "playTime": "15分",
        "amazonUrl": ""
    },
    {
        "title": "金魚の商人",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "カード",
            "手札管理",
            "大富豪系"
        ],
        "desc": "大富豪をベースに「市場」との両替システムを加えた手札管理ゲーム。いち早く手札を出し切った人が勝利。",
        "playTime": "20分",
        "amazonUrl": ""
    },
    {
        "title": "カイト",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "協力",
            "リアルタイム",
            "カード"
        ],
        "desc": "砂時計が落ちきる前にカードを出して特定の砂時計をひっくり返す、リアルタイム協力ゲーム。わずか10分の緊張感。",
        "playTime": "10分",
        "amazonUrl": ""
    },
    {
        "title": "ナナトリドリ",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "カード",
            "大富豪系",
            "手札管理"
        ],
        "desc": "手札の並び替え禁止という独特ルールを持つ大富豪系カードゲーム。「ネクスト大富豪」とも呼ばれる作品。",
        "playTime": "10〜20分",
        "amazonUrl": ""
    },
    {
        "title": "ハゲタカのえじき",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "バッティング",
            "心理戦",
            "カード"
        ],
        "desc": "全員が手持ちの数字カードを同時に出してポイントカードを競り合う同時選択型の心理戦ゲームの名作。",
        "playTime": "15〜20分",
        "amazonUrl": ""
    },
    {
        "title": "5本のキュウリ",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "トリックテイキング",
            "脱落",
            "カード"
        ],
        "desc": "最後のトリックを取ってしまうと「キュウリ」をもらい、5本集めたら脱落する変則トリックテイキング。",
        "playTime": "15〜20分",
        "amazonUrl": ""
    },
    {
        "title": "ペンギンパーティー",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "カード",
            "パーティー",
            "セット"
        ],
        "desc": "色カードをピラミッド状に積み上げながら手持ちカードを出し切ることを目指す軽量カードゲーム。",
        "playTime": "15分",
        "amazonUrl": ""
    },
    {
        "title": "バッティング",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "バッティング",
            "心理戦",
            "パーティー"
        ],
        "desc": "宝石タイルを全員で同時に指差し、自分だけが選んだタイルを獲得できる同時選択型の読み合いゲーム。",
        "playTime": "15〜30分",
        "amazonUrl": ""
    },
    {
        "title": "オバケパレード",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "チキンレース",
            "カード"
        ],
        "desc": "カードをめくってオバケを他者に押し付けながら最後まで生き残るチキンレース型カードゲーム。",
        "playTime": "10〜20分",
        "amazonUrl": ""
    },
    {
        "title": "生ハムメロンゲーム",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "カード",
            "セット収集",
            "パーティー"
        ],
        "desc": "同じ素材のカードを組み合わせて強化し、いち早く「生ハムメロン」などの料理を完成させるセット収集ゲーム。",
        "playTime": "15〜30分",
        "amazonUrl": ""
    },
    {
        "title": "オトスナー",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "バランス",
            "アクション",
            "パーティー"
        ],
        "desc": "ウェイターとなってお盆カードを指先で支え、商品コマを落とさずに最も長く耐えることを目指すバランスゲーム。",
        "playTime": "10〜20分",
        "amazonUrl": ""
    },
    {
        "title": "SLIDE",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "抽象",
            "カード",
            "パズル"
        ],
        "desc": "4×4グリッドにカードを「スライド」して同数字を隣接させ消すことで、最も低いスコアを目指す抽象ゲーム。",
        "playTime": "15分",
        "amazonUrl": ""
    },
    {
        "title": "SKULL",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ブラフ",
            "心理戦",
            "パーティー"
        ],
        "desc": "花またはドクロを裏向きに置いてビッドし、自分の宣言数枚をめくってドクロを避けられれば得点するブラフゲーム。",
        "playTime": "15〜45分",
        "amazonUrl": ""
    },
    {
        "title": "スコットランドヤード",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "推理",
            "協力",
            "隠密移動"
        ],
        "desc": "1人がミスターXとしてロンドン中を逃げ回り、残りが探偵として協力して追い詰める非対称追跡ゲームの名作。",
        "playTime": "45〜60分",
        "amazonUrl": ""
    },
    {
        "title": "ワードポーターズ",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ワード",
            "連想",
            "パーティー"
        ],
        "desc": "限られたヒントカードを早い者勝ちで使い、自分のお題を相手に伝える連想クイズ系パーティーゲーム。",
        "playTime": "20分",
        "amazonUrl": ""
    },
    {
        "title": "ことばのクローバー！",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "協力",
            "ワード",
            "連想"
        ],
        "desc": "4枚のキーワードを1つのヒントワードでつなぎ、他プレイヤーがキーワードを当てる協力型連想ワードゲーム（So Clover!）。",
        "playTime": "30分",
        "amazonUrl": ""
    },
    {
        "title": "ゾン噛まPARTY",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "反射神経",
            "心理戦"
        ],
        "desc": "手札を揃えてカードを伏せる椅子取りゲーム式パーティーゲーム。最後に残った1人が負けの超高速ゲーム。",
        "playTime": "5分以内",
        "amazonUrl": ""
    },
    {
        "title": "英雄になろう！",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "ダイス",
            "ファンタジー"
        ],
        "desc": "ダイスロールとクエスト達成でポイントを競うファンタジーテーマのパーティーカードゲーム。",
        "playTime": "20〜30分",
        "amazonUrl": ""
    },
    {
        "title": "ディクシット：ディズニーエディション",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "連想",
            "イマジネーション"
        ],
        "desc": "ディズニーアートを使ったディクシット。ヒントワードを出し、自分のカードを他者に当ててもらうイマジネーションゲーム。",
        "playTime": "30〜60分",
        "amazonUrl": ""
    },
    {
        "title": "13 Leaves -13枚の葉-",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "カード",
            "手札管理",
            "ゴーアウト"
        ],
        "desc": "場のカードに最小または最大の数字を出す条件を守りながら手札を出し切るゴーアウト系カードゲーム。",
        "playTime": "20分",
        "amazonUrl": ""
    },
    {
        "title": "シレット",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "心理戦",
            "アクション"
        ],
        "desc": "周囲に気づかれないよう「しれっと」特定アクションをこなすパーティーカードゲーム。超短時間で遊べる。",
        "playTime": "5〜15分",
        "amazonUrl": ""
    },
    {
        "title": "PRESAGES",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "4〜6人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "トリックテイキング",
            "協力",
            "チーム戦"
        ],
        "desc": "全カードに特殊効果がつくチーム戦トリックテイキング。カード効果とチームメイトとの連携で勝利を目指す。",
        "playTime": "20〜30分",
        "amazonUrl": ""
    },
    {
        "title": "JUST ONE",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜7人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "協力",
            "ワード",
            "パーティー"
        ],
        "desc": "お題に対してヒントを1語ずつ書き、重複したヒントは消えてしまう協力型ワード当てゲーム。2019年ドイツゲーム大賞受賞。",
        "playTime": "20分",
        "amazonUrl": "https://www.amazon.co.jp/dp/B07RZW81RS"
    },
    {
        "title": "オトツナゲーター",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜7人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "協力",
            "ワード",
            "連想"
        ],
        "desc": "出来事の断片の「音」を時系列でつなぎ合わせ、解答者が何のお題かを当てる協力型音表現パーティーゲーム。",
        "playTime": "20〜40分",
        "amazonUrl": ""
    },
    {
        "title": "コードネーム",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ワード",
            "チーム戦",
            "連想"
        ],
        "desc": "1語のヒントで複数のコードネームを仲間に伝えるチーム対抗ワードゲーム。相手チームに先を越されないよう競争。",
        "playTime": "15〜30分",
        "amazonUrl": ""
    },
    {
        "title": "カタカナーシ",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ワード",
            "パーティー",
            "説明"
        ],
        "desc": "カタカナ語をカタカナを一切使わず説明して当ててもらうワードパーティーゲーム。制限が盛り上がりを生む。",
        "playTime": "15分",
        "amazonUrl": ""
    },
    {
        "title": "はぁって言うゲーム",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "4〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "演技",
            "コミュニケーション"
        ],
        "desc": "「はぁ」などの短い言葉を声と表情だけで演じ分けてシチュエーションを当て合う演技系コミュニケーションゲーム。",
        "playTime": "15分",
        "amazonUrl": ""
    },
    {
        "title": "犯人は踊る",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "カード",
            "心理戦"
        ],
        "desc": "「犯人カード」が誰の手元にあるかを推理しながらカードを出し合う軽量カードゲーム。10分で終わる手軽さが人気。",
        "playTime": "10〜20分",
        "amazonUrl": ""
    },
    {
        "title": "ファンタジーランクマスター",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "投票",
            "ランキング"
        ],
        "desc": "ファンタジーのモンスターをお題に合わせてランク付けし、他プレイヤーの答えと照らし合わせるランキングゲーム。",
        "playTime": "20分",
        "amazonUrl": ""
    },
    {
        "title": "タイムボム",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "正体隠匿",
            "心理戦",
            "チーム戦"
        ],
        "desc": "爆弾解除チームとボマー団に分かれ、誰がどちらか隠したまま導線を切り合う正体隠匿ゲーム。脱落なしで全員参加。",
        "playTime": "10〜30分",
        "amazonUrl": ""
    },
    {
        "title": "ぼくらなかよし",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "協力",
            "ワード",
            "コミュニケーション"
        ],
        "desc": "ことばカードで文を作り、その文が表す「気持ち」を他プレイヤーに当ててもらう協力型言葉遊びゲーム。",
        "playTime": "20分",
        "amazonUrl": ""
    },
    {
        "title": "ファントムインク",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ワード",
            "チーム戦",
            "推理"
        ],
        "desc": "「霊」が文字を1文字ずつ書いてヒントを出し、チームが先に秘密ワードを当てる競争型ワード推理ゲーム。",
        "playTime": "20〜30分",
        "amazonUrl": "https://www.amazon.co.jp/dp/B09XXK3N25"
    },
    {
        "title": "人狼ドッチ？",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "正体隠匿",
            "心理戦",
            "推理"
        ],
        "desc": "2枚の役職カードのうち1枚を選んで正体を決める短時間人狼系ゲーム。5〜10分で決着する超コンパクト版人狼。",
        "playTime": "5〜10分",
        "amazonUrl": ""
    },
    {
        "title": "なにわのボブジテン",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ワード",
            "パーティー",
            "説明"
        ],
        "desc": "大阪限定のボブジテン。カタカナ語をカタカナなしで説明して当ててもらう関西テイストのワードパーティーゲーム。",
        "playTime": "30分",
        "amazonUrl": ""
    },
    {
        "title": "エレガンツ",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "コミカル",
            "カード"
        ],
        "desc": "カードを引くだけのシンプルな行動で「お上品さ」を競うコミカル系パーティーゲーム。マナー違反を指摘し合う。",
        "playTime": "3〜5分",
        "amazonUrl": ""
    },
    {
        "title": "擬人化総選挙",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "投票",
            "コミュニケーション"
        ],
        "desc": "生き物・無機物・概念などのお題に対してイメージに合うカードを投票し合うコミュニケーション系ゲーム。",
        "playTime": "15〜25分",
        "amazonUrl": ""
    },
    {
        "title": "YESマンをさがせ",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "心理戦",
            "質問"
        ],
        "desc": "質問に対して誰が「YES」で誰が「NO」と答えるかを予想する信頼と偏見の質問ゲーム。チキンレース形式。",
        "playTime": "20分",
        "amazonUrl": ""
    },
    {
        "title": "Poemo,",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ワード",
            "パーティー",
            "ストーリーテリング"
        ],
        "desc": "詩の断片カードを出し合い、協力して「一番エモいポエム」を完成させるゆる系ワードゲーム。大喜利が苦手でも遊べる。",
        "playTime": "5〜15分",
        "amazonUrl": ""
    },
    {
        "title": "インカの黄金",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "チキンレース",
            "パーティー",
            "ジレンマ"
        ],
        "desc": "遺跡を探索しながら財宝を集める引き時判断ゲーム。5ラウンド行いリスクと報酬を天秤にかける。",
        "playTime": "20〜40分",
        "amazonUrl": ""
    },
    {
        "title": "インサイダーゲーム",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "4〜8人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "正体隠匿",
            "ワード",
            "推理"
        ],
        "desc": "全員でYES/NOクイズに答えながら隠れた「インサイダー」を探す2段階の推理ゲーム。15分でできる万能パーティーゲーム。",
        "playTime": "15分",
        "amazonUrl": ""
    },
    {
        "title": "ito",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜10人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "協力",
            "コミュニケーション",
            "数字"
        ],
        "desc": "各自の秘密の数字(1〜100)を共通テーマで例えながら昇順に並べる協力型コミュニケーションゲーム。",
        "playTime": "10〜15分",
        "amazonUrl": "https://www.amazon.co.jp/dp/B07VG8VLL5"
    },
    {
        "title": "コヨーテ",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜10人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "ブラフ",
            "パーティー",
            "心理戦"
        ],
        "desc": "自分のカードだけ見えない状態で全員の合計数を推測してビッドし合うブラフゲーム（ライアーズダイスのカード版）。",
        "playTime": "15〜30分",
        "amazonUrl": ""
    },
    {
        "title": "ニムト男爵",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "2〜10人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "カード",
            "心理戦",
            "同時選択"
        ],
        "desc": "同時にカードを出し4つの列に並べ、6枚目を置くことになったら列を全部取るペナルティゲーム（6ニムト系列作）。",
        "playTime": "15〜30分",
        "amazonUrl": ""
    },
    {
        "title": "レンソービンゴ",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜10人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "連想",
            "パーティー",
            "コミュニケーション"
        ],
        "desc": "お題から連想する言葉を書き、他プレイヤーと一致した数でビンゴを狙う連想コミュニケーションゲーム。",
        "playTime": "10〜20分",
        "amazonUrl": ""
    },
    {
        "title": "クイズいいセン行きまSHOW!",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "3〜10人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "パーティー",
            "クイズ",
            "数字"
        ],
        "desc": "答えのないお題に数字で回答し、全員の回答の中でちょうど中央値を目指すコミュニケーション型クイズゲーム。",
        "playTime": "10〜30分",
        "amazonUrl": ""
    },
    {
        "title": "ゴリラ人狼",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "4〜21人",
        "weight": "軽量級",
        "category": "ボードゲーム",
        "tags": [
            "正体隠匿",
            "パーティー",
            "心理戦"
        ],
        "desc": "最初は「ウホッ」だけで議論するゴリラ人狼。追放されたプレイヤーの言葉を学びながら語彙が増えていく人狼系ゲーム。",
        "playTime": "5〜45分",
        "amazonUrl": ""
    },
    {
        "title": "リゾート島に沈む鍵",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "1〜4人",
        "weight": "中量級",
        "category": "推理ゲーム",
        "tags": [
            "協力",
            "推理",
            "ミステリー"
        ],
        "desc": "リゾート島でのオーナーの謎の死を1〜4人で協力して解き明かす協力型推理ゲーム（卓上探偵団シリーズ）。ソロ対応。",
        "playTime": "120分",
        "amazonUrl": ""
    },
    {
        "title": "京都異世界ツアー",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "4人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ロールプレイ"
        ],
        "desc": "修学旅行中、奇妙なお守りの力で異世界に転生してしまった高校生たち。王様の暗殺事件の犯人はこの中に！？笑いありのファンタジーマダミス。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    },
    {
        "title": "高速深夜便の殺人者",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "4人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ロールプレイ"
        ],
        "desc": "深夜バスという密室で起こった殺人事件。乗客全員が容疑者という王道シチュエーションで、限られた時間の中で真犯人をあぶり出す。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    },
    {
        "title": "キャンプ場の殺人鬼",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "4〜5人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ホラー"
        ],
        "desc": "山奥のキャンプ場で起きた惨劇。次々と起こる殺人事件に、プレイヤー同士の疑心暗鬼が加速するスリリングなホラーマダミス。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    },
    {
        "title": "最期のソワレ",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "5人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ロールプレイ"
        ],
        "desc": "舞台は19世紀のフランス。劇場の楽屋で起きた殺人事件をめぐり、華やかな演劇界の裏に潜む愛憎劇と嘘を解き明かす。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    },
    {
        "title": "棺呪-ヒツギノロイ-",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "5人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ホラー"
        ],
        "desc": "不気味な洋館で見つかった不可解な死体。館に伝わる「呪い」の噂と、それぞれの思惑が交差するオカルトミステリー。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    },
    {
        "title": "ウェンディ、大人になって",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "5人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ドラマ"
        ],
        "desc": "「私が殺されてしまいました」。破壊されたAI・ウェンディがモニターから語りかける、奇妙な実験施設を舞台にしたSFサスペンス。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    },
    {
        "title": "優しい死神の席",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "6人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ドラマ"
        ],
        "desc": "「死神」が同席する不思議な葬儀。参加者は死神から投げかけられる謎を解き、亡くなった人物の死の真相とそれぞれの秘密を解き明かす。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    },
    {
        "title": "マーダーミステリー：ザ・トリロジー",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "6人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ロールプレイ"
        ],
        "desc": "1970、1980、1990年。同じ6人のキャラクターが時代をまたぐ3つの連続したシナリオを通じて連続殺人鬼の謎に挑む壮大なミステリー。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    },
    {
        "title": "死の館に探偵二人",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "6人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ロールプレイ"
        ],
        "desc": "15年前の一家突然死事件の謎を解くため集められた6人。直後に管理人が殺害され、二人の探偵が真相を追う異色のミステリー。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    },
    {
        "title": "雪の砦に怪鳥が舞う",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "6人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ホラー"
        ],
        "desc": "近世中華風の世界が舞台。神の化身〈怪鳥〉の噂がある雪に閉ざされた砦で起きた殺人事件。皇位継承を巡る人間ドラマと謎解き。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    },
    {
        "title": "何度だって青い月に火を灯した",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "6〜7人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ドラマ"
        ],
        "desc": "マフィアのボスが殺害され、容疑者はファミリーの幹部たち。ハードボイルドな世界観で繰り広げられる、シリーズを代表する傑作。",
        "playTime": "60〜180分",
        "amazonUrl": ""
    },
    {
        "title": "最果亭の災禍",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "6〜8人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ロールプレイ"
        ],
        "desc": "世界の果てにある宿屋「最果亭」。人間やエルフなど様々な種族が集うファンタジー世界で起きた、不可解な殺人事件の謎を解く。",
        "playTime": "60〜180分",
        "amazonUrl": ""
    },
    {
        "title": "想いは満天の星に",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "7人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ドラマ"
        ],
        "desc": "七夕の夜、天文部に所属する高校生たちを襲った悲劇。青春の甘酸っぱさと、それぞれが抱える隠された秘密が交差するエモーショナルな作品。",
        "playTime": "60〜180分",
        "amazonUrl": ""
    },
    {
        "title": "九頭竜館の殺人",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "7〜9人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ロールプレイ"
        ],
        "desc": "クトゥルフ神話の要素を散りばめた館ミステリー。降霊会が行われた古館で起きる猟奇的な殺人事件。正気度を保ちながら真相に辿り着けるか。",
        "playTime": "120〜180分",
        "amazonUrl": ""
    },
    {
        "title": "探偵禁止領域",
        "image": "https://via.placeholder.com/400x300?text=NO+IMAGE",
        "players": "6人",
        "weight": "軽量級",
        "category": "マダミス",
        "tags": [
            "マダミス",
            "推理",
            "ロールプレイ"
        ],
        "desc": "探偵が禁止された世界で、連続殺人事件に挑む。個性豊かなキャラクターたちによる、スタイリッシュで謎めいた推理ミステリー。",
        "playTime": "60〜120分",
        "amazonUrl": ""
    }
];
