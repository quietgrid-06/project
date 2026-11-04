import Image from 'next/image'
import { ArrowUpRight, ChevronRight, Radio, ShieldCheck, Wind } from 'lucide-react'

const sections = [
  { id: 'overview', label: '滝川とグライダー' },
  { id: 'voices', label: 'パイロットの声' },
  { id: 'setup', label: '設置と運用' },
  { id: 'safety', label: '空の安全へ' },
]

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span>{number}</span>
      <h2>{children}</h2>
    </div>
  )
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="FLARM Journal トップへ">
            <span className="brand-mark"><Radio size={18} strokeWidth={2.4} /></span>
            <span>FLARM <b>JOURNAL</b></span>
          </a>
          <nav aria-label="記事内ナビゲーション">
            {sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}
          </nav>
          <span className="issue">REPORT  —  2026.10</span>
        </div>
      </header>

      <div id="top" className="hero">
        <div className="hero-photo"><Image src="/article/image1.jpg" alt="滝川駅ロータリーのグライダー案内看板" fill priority sizes="(max-width: 800px) 100vw, 62vw" /></div>
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">FIELD REPORT / TAKIKAWA SKY PARK</p>
          <h1>空の安全は、<br /><em>機器と人</em>の両輪で。</h1>
          <p className="hero-lead">PowerFLARM flexと飛ぶ、<br />たきかわスカイパークの現在地。</p>
          <div className="hero-meta"><span>取材日 2026.10</span><span className="meta-line" /><span>北海道・滝川市</span></div>
        </div>
        <div className="hero-scroll">SCROLL <ChevronRight size={15} /></div>
      </div>

      <div className="article-shell">
        <aside className="toc" aria-label="目次"><p>CONTENTS</p>{sections.map((section, i) => <a key={section.id} href={`#${section.id}`}><span>0{i + 1}</span>{section.label}</a>)}</aside>
        <article>
          <section id="overview" className="intro">
            <p className="kicker">TAKIKAWA / HOKKAIDO</p>
            <p className="intro-lead">北海道・滝川市は「グライダーのまち」です。</p>
            <p>1981年からグライダーがまちの上空を飛び、1993年には本格的な航空公園「たきかわスカイパーク」が整備されました。河川敷に広がる広大な離着陸場は、上昇気流が得られやすい地形と気象条件に恵まれ、今も多くの人がここで空を楽しんでいます。</p>
            <p>2026年10月、たきかわスカイパークで、小型機向け空中衝突警報システム「PowerFLARM flex」を利用しているパイロットの方々にお話を伺いました。</p>
            <div className="product-note"><ShieldCheck size={28} /><div><strong>PowerFLARM flex</strong><span>自機と他機の予測飛行軌跡を比較し、衝突の可能性がある場合に警告を発するシステム。</span></div></div>
          </section>

          <figure className="wide-figure"><Image src="/article/image1.jpg" alt="たきかわスカイパークの広大な滑空場" width={1200} height={650} /><figcaption>たきかわスカイパーク。河川敷に広がる、空と地上がつながる場所。</figcaption></figure>

          <section className="facts"><div><b>85,000+</b><span>世界で装備されている<br />有人航空機</span></div><div><b>100+</b><span>日本全国で導入された<br />グライダー（2026年8月〜）</span></div><div><b>225g</b><span>電池を含む<br />軽量設計</span></div></section>

          <section id="voices" className="content-section">
            <SectionHeading number="01">機体の位置が「一目瞭然」に</SectionHeading>
            <div className="split-copy"><p>PowerFLARM flexは、周囲の機体の位置を画面に表示し、接近を知らせる機器です。社会人パイロットのAさんは、この機器の効果をこう語ります。</p><blockquote>「他の機体の場所が一目瞭然になるのはグライダーでは画期的です。もうPowerFLARM flexは手放せません」<cite>— 社会人パイロット Aさん</cite></blockquote></div>
            <Image className="inline-image" src="/article/image3.jpg" alt="グライダーに設置されたPowerFLARM flex" width={1000} height={650} />
            <SectionHeading number="02">機器に頼りすぎない「見張り」「聴き張り」</SectionHeading>
            <div className="split-copy"><p>大学で航空部に所属するパイロットのBさんからは、日々の運用についてコメントをいただきました。</p><blockquote>「PowerFLARM flexに頼りすぎず、見張りと聴き張りをしっかり行うことが大切です。ただ、やみくもに空を探す時間は減りました」<cite>— 大学航空部パイロット Bさん</cite></blockquote></div>
          </section>

          <section id="setup" className="content-section setup-section">
            <SectionHeading number="03">取り付けは「固定」と「設置位置」が肝心</SectionHeading>
            <p>実際にPowerFLARM flexがグライダーに取り付けられている様子を確認し、設置方法についても詳しくお話を伺いました。導入から間もない現在は、最適な設置位置を見極めるため、耐震ジェルを使用してグレアシールド上面に仮設置する方が多く見られます。</p>
            <p>本設置にはベルクロ（マジックテープ）やRAMマウントなどが検討されています。設置位置によって受信範囲が大きく変わるため、レンジアナライザーで受信状況を確認しながら最適な位置を探る利用者もいます。</p>
            <div className="image-grid"><figure><Image src="/article/image4.jpg" alt="グレアシールド上面に設置されたPowerFLARM flex" width={700} height={500} /><figcaption>グレアシールド上面に仮設置</figcaption></figure><figure><Image src="/article/image5.jpg" alt="フライト中のPowerFLARM flex画面" width={700} height={500} /><figcaption>フライト中の実際の画面</figcaption></figure></div>
            <div className="operation-card"><Wind size={25} /><div><p className="kicker">DAILY OPERATION</p><h3>次のフライトへ、確実につなぐ</h3><p>フライト終了後に充電し、次に利用する方がすぐに使えるよう共用の保管箱へ戻す。たきかわスカイパークでは、シンプルで確実な運用が続けられています。</p></div></div>
          </section>

          <section id="safety" className="closing content-section"><SectionHeading number="04">空の安全は「機器」と「人」の両輪で</SectionHeading><p>PowerFLARM flexは、パイロットの空間認識を助け、安全な飛行を支える心強い味方です。しかし、最終的に重要なのは、自らの目と耳で周囲の状況を確認する習慣を忘れないことです。</p><p>機器を適切に設置し、その機能を正しく活用する。そして、目視による見張りと無線交信による情報確認を怠らない。そうした一つひとつの積み重ねが空の安全を守ることにつながります。</p><p>今回のインタビューにご協力いただいた皆様、ならびに、たきかわスカイパーク様に心より御礼申し上げます。</p><div className="end-mark">FLARM JOURNAL <span>—</span> FIELD REPORT</div></section>
        </article>
      </div>
      <footer><span>FLARM JOURNAL</span><span>安全なフライトのために。</span><span>© 2026</span></footer>
    </main>
  )
}
