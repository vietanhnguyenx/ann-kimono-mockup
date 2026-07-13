/* ============================================================
   KIMONO RENTAL ANN — i18n Engine
   5 languages: EN · JA · VI · ZH · KO
   Currency auto-switch per language
   ============================================================ */

const CURRENCIES = {
  en: { symbol: '$',  rate: 1/155,   pos: 'before', dec: 0 },
  ja: { symbol: '¥',  rate: 1,       pos: 'before', dec: 0 },
  vi: { symbol: '₫',  rate: 161,     pos: 'after',  dec: 0 },
  zh: { symbol: '¥',  rate: 0.047,   pos: 'before', dec: 1 },
  ko: { symbol: '₩',  rate: 8.7,     pos: 'before', dec: 0 },
};

const TR = {

  /* ── ENGLISH ─────────────────────────────────────────── */
  en: {
    'nav.home': 'Home',
    'nav.collection': 'Collection',
    'nav.story': 'Story',
    'nav.atelier': 'Atelier',
    'nav.reservation': 'Reservation',

    'tb.walkin': 'Walk In OK — No reservation required',
    'tb.services': 'Kimono Rental · Hair Set · Photo Service',
    'tb.rental': 'Rental from $19 · B1, This Building',

    'h1.eyebrow': '着物レンタル · KIMONO RENTAL ANN',
    'h1.title': 'Step into<br><em>your</em><br>kimono<br>story',
    'h1.sub': 'Walk in, dress up, and let us handle everything else. Kimono rental, hair set, and photo — all under one roof. No reservation needed.',
    'h1.cta1': 'Browse Kimonos',
    'h1.cta2': 'View all lines →',

    'h2.eyebrow': 'ヘアセット · HAIR &amp; MAKEUP',
    'h2.title': 'Traditional<br><em>beauty</em><br>crafted<br>for you',
    'h2.sub': 'Hair set, makeup, and kitsuke by certified specialists. A complete traditional transformation in under 30 minutes.',
    'h2.cta1': 'Book Hair &amp; Makeup',
    'h2.cta2': 'About ANN →',

    'h3.eyebrow': '写真撮影 · PHOTO SERVICE',
    'h3.title': 'Capture<br>your<br><em>moment</em><br>forever',
    'h3.sub': 'Professional photo sessions at our studio or nearby scenic spots. 20+ edited digital photos, delivered within 3 days.',
    'h3.cta1': 'Book a Photo Session',
    'h3.cta2': 'Browse kimonos →',

    'pkg.eyebrow': 'Rental Packages · レンタルプラン',
    'pkg.title': 'Five <em>lines</em>, one visit',
    'pkg.titleJp': '五つのプラン · すべて１日レンタル',
    'pkg.subtitle': 'Every package includes kimono, obi, accessories, dressing by our specialists, and all accessories. Walk in — walk out beautiful.',
    'pkg.perday': 'per day · 1 day rental',
    'pkg.viewstyles': 'View styles',
    'pkg.furisode.en': 'Furisode Premium',
    'pkg.furisode.desc': 'Long-sleeved formal silk furisode for ceremonies, coming-of-age, and wedding guests.',
    'pkg.houmongi.en': 'Houmongi',
    'pkg.houmongi.desc': 'Elegant semi-formal visiting dress with flowing patterns. Perfect for tea ceremony and parties.',
    'pkg.komon.en': 'Komon',
    'pkg.komon.desc': 'Casual repeat-patterned kimono. Ideal for sightseeing, outings, and everyday photography.',
    'pkg.yukata.en': 'Yukata',
    'pkg.yukata.desc': 'Light cotton summer yukata. Great for festivals, evening walks, and warm-weather outings.',
    'pkg.kids.en': 'Kids Set',
    'pkg.kids.desc': 'Complete kids kimono sets for ages 3–9 (100–130 cm). Includes full accessories and kitsuke.',

    'feat.eyebrow': 'Popular Pieces · 人気着物',
    'feat.title': '<em>Guest</em> Favourites',
    'feat.titleJp': '今シーズン おすすめ',
    'feat.subtitle': 'Hand-picked styles across all rental lines. Every piece is professionally cleaned, pressed, and ready to wear the moment you arrive.',
    'feat.link': 'View Full Collection',

    'addon.eyebrow': 'Add-On Services',
    'addon.title': 'Enhance your <em>experience</em>',
    'addon.subtitle': 'Add hair &amp; makeup or a photo session to any rental. Bundle and save.',
    'addon.hair.en': 'Hair Set &amp; Makeup',
    'addon.hair.desc': 'Complete traditional hair styling and makeup by our in-house certified specialists. Complimentary with Furisode Premium package.',
    'addon.hair.link': 'Book hair &amp; makeup',
    'addon.photo.en': 'Photo Service',
    'addon.photo.desc': 'Professional photo sessions at our in-house studio or at nearby scenic spots. Includes 20+ hand-edited digital photos delivered within 3 days.',
    'addon.photo.link': 'Book a photo session',

    'story.eyebrow': 'About ANN · 私たちについて',
    'story.title': 'Where every guest feels <em>beautiful</em>.',
    'story.link': 'Our story',

    'ritual.eyebrow': 'Your Visit · ご来店の流れ',
    'ritual.title': 'Your <em>Five</em> Steps',
    'ritual.titleJp': '五つのステップ',
    'ritual.s1.en': 'Choose Your Kimono',
    'ritual.s1.p': 'Browse over 200 styles. Our staff help you find the perfect match for your style, season, and occasion.',
    'ritual.s2.en': 'Dressing',
    'ritual.s2.p': 'Our certified kitsuke specialists dress you beautifully in around 20 minutes — obi, accessories, and all finishing touches included.',
    'ritual.s3.en': 'Hair &amp; Makeup',
    'ritual.s3.p': 'Our makeup artists create a custom look that enhances your features and matches your kimono\'s palette.',
    'ritual.s4.en': 'Photo Time',
    'ritual.s4.p': 'Head out to explore the city or step into our photo studio. Our partner photographers are ready to capture your look.',
    'ritual.s5.en': 'Return',
    'ritual.s5.p': 'Simply return your kimono before closing time. No cleaning required — we take care of everything after you leave.',

    'test.eyebrow': 'Guest Reviews',
    'test.title': 'What our <em>guests</em> say',

    'contact.breadcrumb': 'Atelier · Contact',
    'contact.eyebrow': 'Connect With Us',
    'contact.find.eyebrow': 'Find Us',
    'contact.find.title': 'Come visit <em>us</em> in Asakusa.',
    'contact.form.title': 'Send a message',

    'sc.wa.cta': 'Book Now',
    'sc.line.cta': 'Chat on LINE',
    'sc.fb.cta': 'Visit Page',
    'sc.ig.cta': 'Follow Us',
    'sc.tt.cta': 'Watch',
    'sc.rn.cta': 'View Profile',
    'sc.wc.cta': 'Search on WeChat',
    'sc.ph.cta': 'Call Now',

    'checkout.breadcrumb': 'Checkout',
    'checkout.details.title': 'Your Details <small>— ご予約情報</small>',
    'checkout.date.title': 'Visit Date <small>— ご来店予定日</small>',
    'checkout.payment.title': 'Payment <small>— お支払い</small>',
    'checkout.summary.title': 'Booking Summary <small>ご予約内容</small>',

    'shop.breadcrumb': 'Rental Collection',
    'shop.title': 'Rental <em>Collection</em>',

    'cal.months': 'January,February,March,April,May,June,July,August,September,October,November,December',
    'cal.days': 'Sun,Mon,Tue,Wed,Thu,Fri,Sat',
    'cal.available': 'Available',
    'cal.few': 'Few spots',
    'cal.full': 'Fully booked',
    'cal.guests': '≤ 6 guests',
  },

  /* ── JAPANESE ─────────────────────────────────────────── */
  ja: {
    'nav.home': 'ホーム',
    'nav.collection': 'コレクション',
    'nav.story': 'ストーリー',
    'nav.atelier': 'アトリエ',
    'nav.reservation': 'ご予約',

    'tb.walkin': '手ぶらでOK！ — 予約不要でご来店できます',
    'tb.services': '着物レンタル · ヘアセット · 写真撮影',
    'tb.rental': 'レンタル ¥3,000〜 · 当ビルB1',

    'h1.eyebrow': '着物レンタル · KIMONO RENTAL ANN',
    'h1.title': '着物を身にまとい、<br><em>あなたの</em><br>物語を<br>歩もう',
    'h1.sub': 'ご来店から着付けまで、すべておまかせください。着物レンタル、ヘアセット、写真撮影を一か所で。予約不要。',
    'h1.cta1': '着物を選ぶ',
    'h1.cta2': '全ラインを見る →',

    'h2.eyebrow': 'ヘアセット · HAIR &amp; MAKEUP',
    'h2.title': '伝統美を<br><em>あなたに</em>',
    'h2.sub': '認定スタイリストによるヘアセット・メイク・着付け。30分以内に本格的な和装に変身。',
    'h2.cta1': 'ヘアセット予約',
    'h2.cta2': 'ANNについて →',

    'h3.eyebrow': '写真撮影 · PHOTO SERVICE',
    'h3.title': '思い出を<br><em>永遠に</em><br>残そう',
    'h3.sub': 'スタジオまたは周辺の観光地でプロカメラマンによる撮影。20枚以上の編集済みデジタル写真を3日以内にお届け。',
    'h3.cta1': '写真撮影予約',
    'h3.cta2': '着物を見る →',

    'pkg.eyebrow': 'レンタルプラン',
    'pkg.title': '五つの<em>ライン</em>、一回の来店',
    'pkg.titleJp': '五つのプラン · すべて１日レンタル',
    'pkg.subtitle': '全プランに着物・帯・小物・着付けサービスを含む。そのままお越しください。',
    'pkg.perday': '1日レンタル',
    'pkg.viewstyles': 'スタイルを見る',
    'pkg.furisode.en': '振袖 プレミアム',
    'pkg.furisode.desc': '成人式や結婚式などのフォーマルシーンに最適な正絹振袖。',
    'pkg.houmongi.en': '訪問着',
    'pkg.houmongi.desc': '流れる図柄が特徴的な上品な半礼装。茶道やパーティーにぴったり。',
    'pkg.komon.en': '小紋',
    'pkg.komon.desc': 'カジュアルな小紋着物。観光や外出、写真撮影に最適。',
    'pkg.yukata.en': '浴衣',
    'pkg.yukata.desc': '涼しい綿の夏浴衣。祭りや夕散歩にぴったり。',
    'pkg.kids.en': 'キッズセット',
    'pkg.kids.desc': '100〜130cmのお子様向けフルセット。小物・着付けサービス含む。',

    'feat.eyebrow': '人気着物 · おすすめ',
    'feat.title': 'お客様の<em>人気</em>着物',
    'feat.titleJp': '今シーズン おすすめ',
    'feat.subtitle': '全レンタルラインから手選びしたスタイル。ご来店時にはクリーニング済みですぐにお着りいただけます。',
    'feat.link': '全スタイルを見る',

    'addon.eyebrow': 'オプションサービス',
    'addon.title': '体験を<em>さらに</em>充実',
    'addon.subtitle': 'ヘアセットまたは写真撮影をレンタルに追加。セット割引あり。',
    'addon.hair.en': 'ヘアセット &amp; メイク',
    'addon.hair.desc': '認定スタイリストによる本格的なヘアセット・メイクアップ。振袖プレミアムにはコンプリメンタリー。',
    'addon.hair.link': 'ヘアセット予約',
    'addon.photo.en': '写真撮影サービス',
    'addon.photo.desc': 'スタジオまたは周辺観光地でのプロ撮影。20枚以上の編集済みデジタル写真を3日以内にお届け。',
    'addon.photo.link': '写真撮影予約',

    'story.eyebrow': 'About ANN · 私たちについて',
    'story.title': 'お客様全員に<em>美しく</em>。',
    'story.link': 'ANNのストーリー',

    'ritual.eyebrow': 'ご来店の流れ',
    'ritual.title': '五つの<em>ステップ</em>',
    'ritual.titleJp': '五つのステップ',
    'ritual.s1.en': '着物選び',
    'ritual.s1.p': '200点以上のスタイルからお好みの一枚を。スタッフが最適な着物をサポートします。',
    'ritual.s2.en': '着付け',
    'ritual.s2.p': '認定きつけ師が約20分で丁寧に着付け。帯や小物も全て含まれます。',
    'ritual.s3.en': 'メイク &amp; ヘアデザイン',
    'ritual.s3.p': 'メイクアーティストが着物の色に合わせたカスタムルックを作ります。',
    'ritual.s4.en': '写真撮影',
    'ritual.s4.p': '市内観光やスタジオでプロカメラマンがあなたの姿を撮影。',
    'ritual.s5.en': '返却',
    'ritual.s5.p': '閉店時間までにお返しいただくだけ。クリーニング不要です。',

    'test.eyebrow': 'お客様の声',
    'test.title': 'お客様の<em>レビュー</em>',

    'contact.breadcrumb': 'アトリエ · お問い合わせ',
    'contact.eyebrow': 'ご連絡はこちら',
    'contact.find.eyebrow': 'アクセス',
    'contact.find.title': '浅草でお待ちしています。',
    'contact.form.title': 'お問い合わせ',

    'sc.wa.cta': '予約する',
    'sc.line.cta': 'LINEでチャット',
    'sc.fb.cta': 'ページへ',
    'sc.ig.cta': 'フォロー',
    'sc.tt.cta': '動画を見る',
    'sc.rn.cta': 'プロフィール',
    'sc.wc.cta': 'WeChat IDで検索',
    'sc.ph.cta': '電話する',

    'checkout.breadcrumb': 'チェックアウト',
    'checkout.details.title': 'お客様情報 <small>— ご予約情報</small>',
    'checkout.date.title': '来店日 <small>— ご来店予定日</small>',
    'checkout.payment.title': 'お支払い',
    'checkout.summary.title': 'ご予約内容',

    'shop.breadcrumb': 'レンタルコレクション',
    'shop.title': 'レンタル <em>コレクション</em>',

    'cal.months': '1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月',
    'cal.days': '日,月,火,水,木,金,土',
    'cal.available': '予約可能',
    'cal.few': '残りわずか',
    'cal.full': '満席',
    'cal.guests': '≤ 6名',
  },

  /* ── VIETNAMESE ───────────────────────────────────────── */
  vi: {
    'nav.home': 'Trang Chủ',
    'nav.collection': 'Bộ Sưu Tập',
    'nav.story': 'Câu Chuyện',
    'nav.atelier': 'Liên Hệ',
    'nav.reservation': 'Đặt Chỗ',

    'tb.walkin': 'Không Cần Đặt Trước — Cứ Vào Thẳng!',
    'tb.services': 'Thuê Kimono · Trang Điểm · Chụp Ảnh',
    'tb.rental': 'Thuê từ 483.000₫ · Tầng B1, Tòa Nhà Này',

    'h1.eyebrow': 'Thuê Kimono · KIMONO RENTAL ANN',
    'h1.title': 'Mặc Kimono<br><em>Viết Nên</em><br>Câu Chuyện<br>Của Bạn',
    'h1.sub': 'Bước vào, mặc kimono và để chúng tôi lo phần còn lại. Thuê kimono, trang điểm và chụp ảnh — tất cả tại một nơi. Không cần đặt trước.',
    'h1.cta1': 'Xem Kimono',
    'h1.cta2': 'Xem tất cả →',

    'h2.eyebrow': 'Tóc &amp; Trang Điểm · HAIR &amp; MAKEUP',
    'h2.title': 'Vẻ Đẹp<br><em>Truyền Thống</em><br>Dành Cho<br>Bạn',
    'h2.sub': 'Tạo kiểu tóc, trang điểm và mặc kimono bởi chuyên gia được chứng nhận. Hoàn thành trong vòng 30 phút.',
    'h2.cta1': 'Đặt Tóc &amp; Trang Điểm',
    'h2.cta2': 'Về ANN →',

    'h3.eyebrow': 'Chụp Ảnh · PHOTO SERVICE',
    'h3.title': 'Lưu Giữ<br>Khoảnh Khắc<br><em>Mãi Mãi</em>',
    'h3.sub': 'Chụp ảnh chuyên nghiệp tại studio hoặc điểm đẹp gần đó. Hơn 20 ảnh kỹ thuật số đã chỉnh sửa, giao trong 3 ngày.',
    'h3.cta1': 'Đặt Chụp Ảnh',
    'h3.cta2': 'Xem kimono →',

    'pkg.eyebrow': 'Gói Thuê Kimono',
    'pkg.title': 'Năm <em>gói</em>, một lần đến',
    'pkg.titleJp': 'Năm Gói · Tất Cả Thuê Theo Ngày',
    'pkg.subtitle': 'Mọi gói bao gồm kimono, obi, phụ kiện và dịch vụ mặc kimono bởi chuyên gia. Vào thẳng — ra đẹp.',
    'pkg.perday': 'mỗi ngày · thuê 1 ngày',
    'pkg.viewstyles': 'Xem mẫu',
    'pkg.furisode.en': 'Furisode (Lễ Phục)',
    'pkg.furisode.desc': 'Kimono tay dài cho lễ trưởng thành, đám cưới và sự kiện trang trọng.',
    'pkg.houmongi.en': 'Houmongi (Bán Lễ)',
    'pkg.houmongi.desc': 'Kimono bán lễ thanh lịch với họa tiết. Đẹp cho trà đạo và tiệc.',
    'pkg.komon.en': 'Komon (Dạo Phố)',
    'pkg.komon.desc': 'Kimono họa tiết. Lý tưởng để đi chơi, tham quan và chụp ảnh.',
    'pkg.yukata.en': 'Yukata (Mùa Hè)',
    'pkg.yukata.desc': 'Yukata vải bông nhẹ nhàng. Tuyệt cho lễ hội và dạo bước buổi tối.',
    'pkg.kids.en': 'Bộ Trẻ Em',
    'pkg.kids.desc': 'Bộ kimono đầy đủ cho trẻ 100–130 cm. Bao gồm phụ kiện và dịch vụ mặc.',

    'feat.eyebrow': 'Phổ Biến',
    'feat.title': 'Khách Hàng <em>Yêu Thích</em>',
    'feat.titleJp': 'Mẫu Nổi Bật Mùa Này',
    'feat.subtitle': 'Các mẫu nổi bật từ tất cả các gói. Kimono được giặt sạch và sẵn sàng khi bạn đến.',
    'feat.link': 'Xem Toàn Bộ Bộ Sưu Tập',

    'addon.eyebrow': 'Dịch Vụ Bổ Sung',
    'addon.title': 'Nâng Cao <em>Trải Nghiệm</em>',
    'addon.subtitle': 'Thêm tóc &amp; trang điểm hoặc chụp ảnh vào gói thuê.',
    'addon.hair.en': 'Tóc &amp; Trang Điểm',
    'addon.hair.desc': 'Tạo kiểu tóc và trang điểm truyền thống bởi chuyên gia. Miễn phí khi thuê Furisode.',
    'addon.hair.link': 'Đặt tóc &amp; trang điểm',
    'addon.photo.en': 'Chụp Ảnh Chuyên Nghiệp',
    'addon.photo.desc': 'Chụp ảnh tại studio hoặc điểm đẹp gần đó. Hơn 20 ảnh đã chỉnh sửa, giao trong 3 ngày.',
    'addon.photo.link': 'Đặt chụp ảnh',

    'story.eyebrow': 'Về ANN',
    'story.title': 'Nơi mọi khách <em>toả sáng</em>.',
    'story.link': 'Câu chuyện ANN',

    'ritual.eyebrow': 'Hành Trình Của Bạn',
    'ritual.title': '<em>Năm</em> Bước Đơn Giản',
    'ritual.titleJp': 'Năm Bước',
    'ritual.s1.en': 'Chọn Kimono',
    'ritual.s1.p': 'Duyệt hơn 200 mẫu. Nhân viên giúp bạn chọn mẫu phù hợp nhất.',
    'ritual.s2.en': 'Mặc Kimono',
    'ritual.s2.p': 'Chuyên gia mặc kimono cho bạn trong khoảng 20 phút, bao gồm obi và phụ kiện.',
    'ritual.s3.en': 'Trang Điểm &amp; Tóc',
    'ritual.s3.p': 'Chuyên gia tạo kiểu tóc và trang điểm phù hợp với kimono của bạn.',
    'ritual.s4.en': 'Chụp Ảnh',
    'ritual.s4.p': 'Khám phá thành phố hoặc vào studio để chụp ảnh chuyên nghiệp.',
    'ritual.s5.en': 'Trả Đồ',
    'ritual.s5.p': 'Chỉ cần trả kimono trước giờ đóng cửa. Chúng tôi giặt sạch giúp bạn.',

    'test.eyebrow': 'Nhận Xét Khách',
    'test.title': 'Khách Hàng <em>Nói Gì</em>',

    'contact.breadcrumb': 'Liên Hệ',
    'contact.eyebrow': 'Liên Hệ Với Chúng Tôi',
    'contact.find.eyebrow': 'Tìm Chúng Tôi',
    'contact.find.title': 'Hãy đến thăm <em>chúng tôi</em> tại Asakusa.',
    'contact.form.title': 'Gửi tin nhắn',

    'sc.wa.cta': 'Đặt Ngay',
    'sc.line.cta': 'Nhắn LINE',
    'sc.fb.cta': 'Xem Trang',
    'sc.ig.cta': 'Theo Dõi',
    'sc.tt.cta': 'Xem Video',
    'sc.rn.cta': 'Xem Profile',
    'sc.wc.cta': 'Tìm ID WeChat',
    'sc.ph.cta': 'Gọi Ngay',

    'checkout.breadcrumb': 'Thanh Toán',
    'checkout.details.title': 'Thông Tin Của Bạn',
    'checkout.date.title': 'Ngày Đến',
    'checkout.payment.title': 'Thanh Toán',
    'checkout.summary.title': 'Tóm Tắt Đặt Chỗ',

    'shop.breadcrumb': 'Bộ Sưu Tập',
    'shop.title': 'Bộ Sưu Tập <em>Thuê</em>',

    'cal.months': 'Tháng 1,Tháng 2,Tháng 3,Tháng 4,Tháng 5,Tháng 6,Tháng 7,Tháng 8,Tháng 9,Tháng 10,Tháng 11,Tháng 12',
    'cal.days': 'CN,T2,T3,T4,T5,T6,T7',
    'cal.available': 'Có sẵn',
    'cal.few': 'Còn ít chỗ',
    'cal.full': 'Đã đầy',
    'cal.guests': '≤ 6 người',
  },

  /* ── CHINESE (Simplified) ─────────────────────────────── */
  zh: {
    'nav.home': '首页',
    'nav.collection': '系列',
    'nav.story': '故事',
    'nav.atelier': '工坊',
    'nav.reservation': '预约',

    'tb.walkin': '无需预约 — 随时光临！',
    'tb.services': '和服租借 · 发型造型 · 摄影服务',
    'tb.rental': '租借起价 ¥141 · 本楼B1层',

    'h1.eyebrow': '和服租借 · KIMONO RENTAL ANN',
    'h1.title': '穿上和服<br><em>走入</em><br>你的<br>故事',
    'h1.sub': '走进店内，尽情装扮，其余交给我们。和服租借、发型造型、摄影——一站式服务。无需预约。',
    'h1.cta1': '浏览和服',
    'h1.cta2': '查看全系列 →',

    'h2.eyebrow': '发型造型 · HAIR &amp; MAKEUP',
    'h2.title': '传统美学<br><em>为你</em><br>精心<br>打造',
    'h2.sub': '由认证专业人员提供发型、化妆及着装服务。30分钟内完成传统和风造型。',
    'h2.cta1': '预约发型造型',
    'h2.cta2': '关于 ANN →',

    'h3.eyebrow': '摄影服务 · PHOTO SERVICE',
    'h3.title': '留住<br>你的<br><em>美好</em><br>瞬间',
    'h3.sub': '在工作室或附近景点进行专业摄影。20张以上精修数码照片，3天内交付。',
    'h3.cta1': '预约摄影',
    'h3.cta2': '浏览和服 →',

    'pkg.eyebrow': '租借套餐',
    'pkg.title': '五大<em>系列</em>，一次到店',
    'pkg.titleJp': '五个套餐 · 均为日租',
    'pkg.subtitle': '每个套餐包含和服、带、配件及专业着装服务。走进店内，美丽离开。',
    'pkg.perday': '每天 · 日租',
    'pkg.viewstyles': '查看款式',
    'pkg.furisode.en': '振袖典藏版',
    'pkg.furisode.desc': '正式长袖丝绸振袖，适合成人礼、婚礼等正式场合。',
    'pkg.houmongi.en': '访问着',
    'pkg.houmongi.desc': '优雅半正式访问着，适合茶道和聚会。',
    'pkg.komon.en': '小纹',
    'pkg.komon.desc': '休闲小纹和服，适合观光和摄影。',
    'pkg.yukata.en': '浴衣（夏季）',
    'pkg.yukata.desc': '清凉棉质浴衣，适合夜晚散步和夏季活动。',
    'pkg.kids.en': '儿童套餐',
    'pkg.kids.desc': '适合身高100–130cm小朋友的完整和服套餐，包含配件。',

    'feat.eyebrow': '热门款式',
    'feat.title': '顾客<em>最爱</em>',
    'feat.titleJp': '本季推荐',
    'feat.subtitle': '精选自各系列的热门款式。您光临时即可穿着。',
    'feat.link': '查看全部系列',

    'addon.eyebrow': '增值服务',
    'addon.title': '提升体验<em>之旅</em>',
    'addon.subtitle': '在任何租借套餐上加选发型或摄影服务。',
    'addon.hair.en': '发型 &amp; 化妆',
    'addon.hair.desc': '认证专家提供传统发型造型和化妆。振袖套餐时免费提供。',
    'addon.hair.link': '预约发型',
    'addon.photo.en': '摄影服务',
    'addon.photo.desc': '在工作室或附近景点进行专业摄影，20张以上精修数码照片，3天内交付。',
    'addon.photo.link': '预约摄影',

    'story.eyebrow': '关于 ANN',
    'story.title': '每一位顾客都能<em>美丽变身</em>。',
    'story.link': '我们的故事',

    'ritual.eyebrow': '您的行程',
    'ritual.title': '简单<em>五</em>步骤',
    'ritual.titleJp': '五个步骤',
    'ritual.s1.en': '选择和服',
    'ritual.s1.p': '浏览200多款。工作人员帮您找到完美款式。',
    'ritual.s2.en': '穿着和服',
    'ritual.s2.p': '认证着装师在约20分钟内为您穿上和服，包含腰带和配件。',
    'ritual.s3.en': '化妆 &amp; 发型',
    'ritual.s3.p': '化妆师为您打造与和服配套的专属造型。',
    'ritual.s4.en': '摄影',
    'ritual.s4.p': '出去探索城市或进入工作室，专业摄影师捕捉您的美丽时刻。',
    'ritual.s5.en': '归还',
    'ritual.s5.p': '在关门前归还和服即可，无需清洗。',

    'test.eyebrow': '顾客评价',
    'test.title': '顾客<em>说</em>',

    'contact.breadcrumb': '联系我们',
    'contact.eyebrow': '与我们联系',
    'contact.find.eyebrow': '找到我们',
    'contact.find.title': '欢迎光临<em>浅草</em>门店。',
    'contact.form.title': '发送消息',

    'sc.wa.cta': '立即预约',
    'sc.line.cta': 'LINE 联系',
    'sc.fb.cta': '访问主页',
    'sc.ig.cta': '关注',
    'sc.tt.cta': '观看视频',
    'sc.rn.cta': '查看主页',
    'sc.wc.cta': '微信搜索ID',
    'sc.ph.cta': '立即致电',

    'checkout.breadcrumb': '结账',
    'checkout.details.title': '您的信息',
    'checkout.date.title': '到店日期',
    'checkout.payment.title': '支付',
    'checkout.summary.title': '预约摘要',

    'shop.breadcrumb': '租借系列',
    'shop.title': '租借<em>系列</em>',

    'cal.months': '1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月',
    'cal.days': '日,一,二,三,四,五,六',
    'cal.available': '可预约',
    'cal.few': '少量余位',
    'cal.full': '已满',
    'cal.guests': '≤ 6 位',
  },

  /* ── KOREAN ───────────────────────────────────────────── */
  ko: {
    'nav.home': '홈',
    'nav.collection': '콜렉션',
    'nav.story': '스토리',
    'nav.atelier': '아틀리에',
    'nav.reservation': '예약',

    'tb.walkin': '예약 없이 바로 방문 가능!',
    'tb.services': '기모노 렌탈 · 헤어 · 사진 서비스',
    'tb.rental': '렌탈 ₩26,100부터 · 본 건물 B1',

    'h1.eyebrow': '기모노 렌탈 · KIMONO RENTAL ANN',
    'h1.title': '기모노를<br><em>입고</em><br>당신만의<br>이야기를',
    'h1.sub': '입장하여 기모노를 입고 나머지는 저희가 모두 챙깁니다. 기모노 렌탈, 헤어 세트, 사진 서비스 — 한 곳에서 모두. 예약 불필요.',
    'h1.cta1': '기모노 보기',
    'h1.cta2': '전체 보기 →',

    'h2.eyebrow': '헤어 &amp; 메이크업',
    'h2.title': '전통의<br><em>아름다움</em><br>당신을<br>위해',
    'h2.sub': '인증된 전문가의 헤어 세트, 메이크업, 기쓰케. 30분 이내 완성.',
    'h2.cta1': '헤어 예약',
    'h2.cta2': 'ANN 소개 →',

    'h3.eyebrow': '사진 서비스 · PHOTO SERVICE',
    'h3.title': '당신의<br>순간을<br><em>영원히</em>',
    'h3.sub': '스튜디오 또는 근처 명소에서 전문 사진 촬영. 20장 이상 편집 완료, 3일 이내 전달.',
    'h3.cta1': '사진 예약',
    'h3.cta2': '기모노 보기 →',

    'pkg.eyebrow': '렌탈 패키지',
    'pkg.title': '다섯 <em>라인</em>, 한 번의 방문',
    'pkg.titleJp': '다섯 패키지 · 모두 1일 렌탈',
    'pkg.subtitle': '모든 패키지에 기모노, 오비, 액세서리, 전문가 착용 서비스 포함. 방문하여 아름답게 나가세요.',
    'pkg.perday': '하루 · 1일 렌탈',
    'pkg.viewstyles': '스타일 보기',
    'pkg.furisode.en': '후리소데 프리미엄',
    'pkg.furisode.desc': '성인식, 결혼식 등 공식 자리에 적합한 장소매 실크 후리소데.',
    'pkg.houmongi.en': '호몬기',
    'pkg.houmongi.desc': '우아한 반정장 호몬기. 다도에서 파티까지 여러 자리에 적합.',
    'pkg.komon.en': '코몬',
    'pkg.komon.desc': '일상적인 코몬. 관광, 외출, 사진 촬영에 적합.',
    'pkg.yukata.en': '유카타 (여름)',
    'pkg.yukata.desc': '가벼운 면 유카타. 축제와 저녁 산책에 안성맞춤.',
    'pkg.kids.en': '키즈 세트',
    'pkg.kids.desc': '100–130cm 어린이를 위한 완전한 기모노 세트. 액세서리 포함.',

    'feat.eyebrow': '인기 아이템',
    'feat.title': '고객 <em>인기</em>',
    'feat.titleJp': '이번 시즌 추천',
    'feat.subtitle': '모든 라인에서 선별된 스타일. 방문 시 세탁 완료된 상태로 준비되어 있습니다.',
    'feat.link': '전체 콜렉션 보기',

    'addon.eyebrow': '업그레이드 서비스',
    'addon.title': '더 특별한 <em>경험</em>',
    'addon.subtitle': '헤어 &amp; 메이크업 또는 사진 서비스를 추가하세요.',
    'addon.hair.en': '헤어 &amp; 메이크업',
    'addon.hair.desc': '인증 전문가의 헤어 세트 &amp; 메이크업. 후리소데 패키지에는 무료 제공.',
    'addon.hair.link': '헤어 예약',
    'addon.photo.en': '사진 서비스',
    'addon.photo.desc': '스튜디오 또는 인근 관광지에서 전문 사진 촬영. 20장 이상 편집 완료, 3일 이내 전달.',
    'addon.photo.link': '사진 예약',

    'story.eyebrow': 'ANN에 대해서',
    'story.title': '모든 고객이 <em>아름답게</em>.',
    'story.link': 'ANN 이야기',

    'ritual.eyebrow': '방문 과정',
    'ritual.title': '<em>다섯</em> 가지 단계',
    'ritual.titleJp': '다섯 단계',
    'ritual.s1.en': '기모노 선택',
    'ritual.s1.p': '200여 스타일 중 마음에 드는 한 벌을 선택하세요.',
    'ritual.s2.en': '기모노 착용',
    'ritual.s2.p': '인증된 전문가가 20분 안에 당신을 아름답게 차려 드립니다.',
    'ritual.s3.en': '메이크업 &amp; 헤어',
    'ritual.s3.p': '전문가가 기모노에 어울리는 맞춤 룩을 만들어 드립니다.',
    'ritual.s4.en': '사진 촬영',
    'ritual.s4.p': '도시를 탐험하거나 스튜디오에서 전문 사진 촬영을 부탁하세요.',
    'ritual.s5.en': '반납',
    'ritual.s5.p': '마감 전 기모노를 반납하세요. 세탁은 저희가 담당합니다.',

    'test.eyebrow': '고객 리뷰',
    'test.title': '고객이 <em>말하는</em>',

    'contact.breadcrumb': '아틀리에',
    'contact.eyebrow': '연락하세요',
    'contact.find.eyebrow': '위치 정보',
    'contact.find.title': '<em>아사쿠사</em>에서 만나요.',
    'contact.form.title': '메시지 보내기',

    'sc.wa.cta': '지금 예약',
    'sc.line.cta': 'LINE 상담',
    'sc.fb.cta': '페이지 방문',
    'sc.ig.cta': '팔로우',
    'sc.tt.cta': '동영상 보기',
    'sc.rn.cta': '프로필 보기',
    'sc.wc.cta': '위챗 ID 검색',
    'sc.ph.cta': '지금 전화',

    'checkout.breadcrumb': '결제',
    'checkout.details.title': '예약 정보',
    'checkout.date.title': '방문 날짜',
    'checkout.payment.title': '결제',
    'checkout.summary.title': '예약 요약',

    'shop.breadcrumb': '렌탈 콜렉션',
    'shop.title': '렌탈 <em>콜렉션</em>',

    'cal.months': '1월,2월,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월',
    'cal.days': '일,월,화,수,목,금,토',
    'cal.available': '예약 가능',
    'cal.few': '자리 얼마 없음',
    'cal.full': '마감',
    'cal.guests': '≤ 6명',
  },
};

/* ── Core functions ──────────────────────────────────────── */

let currentLang = localStorage.getItem('ann_lang') || 'en';

function t(key) {
  return TR[currentLang]?.[key] ?? TR.en?.[key] ?? key;
}
window.t = t;

function formatPrice(jpy) {
  const c = CURRENCIES[currentLang];
  const v = jpy * c.rate;
  let s;
  if (c.dec === 0) {
    s = Math.round(v).toLocaleString();
  } else {
    s = v.toFixed(c.dec).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return c.pos === 'before' ? c.symbol + s : s + ' ' + c.symbol;
}
window.fmt = formatPrice;

/* ── applyLang ───────────────────────────────────────────── */

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('ann_lang', lang);
  document.documentElement.lang = lang;

  // Active button
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );

  // All data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v != null) el.innerHTML = v;
  });

  // All data-price-jpy elements
  document.querySelectorAll('[data-price-jpy]').forEach(el => {
    const n = parseInt(el.dataset.priceJpy);
    if (isNaN(n)) return;
    const hasPlus = (el.textContent || '').trimStart().startsWith('+');
    el.textContent = (hasPlus ? '+' : '') + formatPrice(n);
  });

  // tb.rental with live price
  document.querySelectorAll('[data-i18n="tb.rental"]').forEach(el => {
    el.innerHTML = t('tb.rental');
  });

  // Package tiles (positional — 5 tiles in order)
  const pkgIds = ['furisode', 'houmongi', 'komon', 'yukata', 'kids'];
  document.querySelectorAll('.package-tile').forEach((tile, i) => {
    const id = pkgIds[i];
    if (!id) return;
    const enEl    = tile.querySelector('.package-en');
    const descEl  = tile.querySelector('.package-desc');
    const labelEl = tile.querySelector('.package-price-label');
    const ctaEl   = tile.querySelector('.package-cta');
    if (enEl)    enEl.textContent   = t('pkg.' + id + '.en');
    if (descEl)  descEl.textContent = t('pkg.' + id + '.desc');
    if (labelEl) labelEl.textContent = t('pkg.perday');
    if (ctaEl) {
      const svg = ctaEl.querySelector('svg');
      ctaEl.textContent = t('pkg.viewstyles') + ' ';
      if (svg) ctaEl.appendChild(svg);
    }
  });

  // Re-render JS-built sections
  const fg = document.getElementById('featuredGrid');
  if (fg && typeof featuredProducts !== 'undefined')
    fg.innerHTML = featuredProducts.map(p => productCard(p)).join('');

  if (typeof renderShopLines === 'function') renderShopLines();

  const rg = document.getElementById('relatedGrid');
  if (rg && typeof relatedProducts !== 'undefined')
    rg.innerHTML = relatedProducts.map(p => productCard(p)).join('');

  if (typeof renderCart === 'function') renderCart();

  if (typeof loadProductDetail === 'function' &&
      typeof currentLineId !== 'undefined') {
    loadProductDetail(currentLineId, currentVariantIdx);
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Social card CTAs
  const scMap = {
    'sc-wa':   'sc.wa.cta',
    'sc-line': 'sc.line.cta',
    'sc-fb':   'sc.fb.cta',
    'sc-ig':   'sc.ig.cta',
    'sc-tt':   'sc.tt.cta',
    'sc-rn':   'sc.rn.cta',
    'sc-wc':   'sc.wc.cta',
    'sc-ph':   'sc.ph.cta',
  };
  Object.entries(scMap).forEach(([cls, key]) => {
    document.querySelectorAll('.' + cls + ' .sc-cta').forEach(el => {
      const svg = el.querySelector('svg');
      el.textContent = t(key);
      if (svg) { el.appendChild(document.createTextNode(' ')); el.appendChild(svg); }
    });
  });

  // Ritual steps (positional)
  document.querySelectorAll('.ritual-step').forEach((step, i) => {
    const k = 'ritual.s' + (i + 1);
    const enEl = step.querySelector('.step-en');
    const pEl  = step.querySelector('p');
    if (enEl) enEl.innerHTML  = t(k + '.en');
    if (pEl)  pEl.textContent = t(k + '.p');
  });

  // Calendar locale
  if (window.CAL_MONTHS && window.CAL_DAYS) {
    const months = t('cal.months').split(',');
    const days   = t('cal.days').split(',');
    if (months.length === 12) window.CAL_MONTHS.splice(0, 12, ...months);
    if (days.length === 7)    window.CAL_DAYS.splice(0, 7, ...days);
    if (typeof window.calRender === 'function') window.calRender();
  }

  // Calendar slot labels & legend
  document.querySelectorAll('.slot-btn:not(.slot-full) small')
    .forEach(s => s.textContent = t('cal.guests'));
  const legend = document.querySelectorAll('.cal-legend span');
  if (legend[0]) legend[0].childNodes[1].textContent = ' ' + t('cal.available');
  if (legend[1]) legend[1].childNodes[1].textContent = ' ' + t('cal.few');
  if (legend[2]) legend[2].childNodes[1].textContent = ' ' + t('cal.full');
}

/* ── Wire buttons & init ─────────────────────────────────── */

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// Run after page JS has initialised everything
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));
} else {
  applyLang(currentLang);
}
