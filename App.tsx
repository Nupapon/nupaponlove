import React, { useState, useRef, type ReactNode } from "react";

const TO_NAME = "มุก";
const FROM_NAME = "วิน";

const INK = "#4b2e83";
const LILAC = "#e2d4fa";
const SOFT = "#f1eafd";
const ACCENT = "#b79bf0";

/* ---------- Illustrations ---------- */

const stroke = {
  stroke: INK,
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Rabbit({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 110" className={className} fill="none" aria-label="กระต่าย" role="img">
      <ellipse cx="43" cy="30" rx="11" ry="27" transform="rotate(-8 43 30)" fill="#fff" {...stroke} />
      <ellipse cx="43" cy="32" rx="5" ry="18" transform="rotate(-8 43 32)" fill={LILAC} />
      <ellipse cx="77" cy="30" rx="11" ry="27" transform="rotate(8 77 30)" fill="#fff" {...stroke} />
      <ellipse cx="77" cy="32" rx="5" ry="18" transform="rotate(8 77 32)" fill={LILAC} />
      <ellipse cx="60" cy="80" rx="35" ry="29" fill="#fff" {...stroke} />
      <circle cx="40" cy="88" r="6" fill={LILAC} />
      <circle cx="80" cy="88" r="6" fill={LILAC} />
      <circle cx="47" cy="76" r="3.2" fill={INK} />
      <circle cx="73" cy="76" r="3.2" fill={INK} />
      <path d="M56.5 84h7l-3.5 4z" fill={ACCENT} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M60 88c-1 4-5 5.5-8 3.5M60 88c1 4 5 5.5 8 3.5" {...stroke} strokeWidth="2" />
    </svg>
  );
}

function Cat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 110" className={className} fill="none" aria-label="แมว" role="img">
      <path d="M26 58 30 16 58 38z" fill="#fff" {...stroke} />
      <path d="M32 50 34.5 26 49 38z" fill={LILAC} />
      <path d="M94 58 90 16 62 38z" fill="#fff" {...stroke} />
      <path d="M88 50 85.5 26 71 38z" fill={LILAC} />
      <ellipse cx="60" cy="76" rx="38" ry="29" fill="#fff" {...stroke} />
      <path d="M60 49v8M52 50l2 7M68 50l-2 7" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="45" cy="74" rx="3.4" ry="4.2" fill={INK} />
      <ellipse cx="75" cy="74" rx="3.4" ry="4.2" fill={INK} />
      <circle cx="44" cy="72.5" r="1.1" fill="#fff" />
      <circle cx="74" cy="72.5" r="1.1" fill="#fff" />
      <circle cx="33" cy="84" r="5.5" fill={SOFT} />
      <circle cx="87" cy="84" r="5.5" fill={SOFT} />
      <path d="M56.5 82h7L60 86z" fill={ACCENT} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M60 86c-1 4-5 5-8 3M60 86c1 4 5 5 8 3" {...stroke} strokeWidth="2" />
      <path d="M22 80 6 77M22 86 8 90M98 80l16-3M98 86l14 4" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function Dog({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 110" className={className} fill="none" aria-label="หมา" role="img">
      <ellipse cx="25" cy="64" rx="12" ry="25" transform="rotate(14 25 64)" fill="#cdb8f6" {...stroke} />
      <ellipse cx="95" cy="64" rx="12" ry="25" transform="rotate(-14 95 64)" fill="#cdb8f6" {...stroke} />
      <ellipse cx="60" cy="72" rx="33" ry="31" fill="#fff" {...stroke} />
      <circle cx="46" cy="66" r="10" fill={LILAC} />
      <path d="M60 58v12" stroke={SOFT} strokeWidth="0" />
      <ellipse cx="60" cy="86" rx="17" ry="12" fill={SOFT} />
      <circle cx="46" cy="66" r="3.3" fill={INK} />
      <circle cx="74" cy="66" r="3.3" fill={INK} />
      <circle cx="45" cy="64.8" r="1" fill="#fff" />
      <circle cx="73" cy="64.8" r="1" fill="#fff" />
      <ellipse cx="60" cy="79" rx="6.5" ry="4.8" fill={INK} />
      <path d="M60 83.5v4.5M60 88c-2 3-6 3.5-8 1M60 88c2 3 6 3.5 8 1" {...stroke} strokeWidth="2" />
      <path d="M57 91.5c0 6 6 6 6 0z" fill="#e9a9d6" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function Heart({ className = "", fill = "currentColor", style }: { className?: string; fill?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path
        d="M12 21s-7-4.6-9.3-9C1 8.6 3 5 6.4 5c2 0 3.4 1 5.6 3 2.2-2 3.6-3 5.6-3C21 5 23 8.6 21.3 12 19 16.4 12 21 12 21z"
        fill={fill}
      />
    </svg>
  );
}

function Trio({ size = "w-24 sm:w-28" }: { size?: string }) {
  const items = [
    { C: Rabbit, r: "2deg", delay: "0s" },
    { C: Cat, r: "-2deg", delay: "-1.4s" },
    { C: Dog, r: "2deg", delay: "-2.8s" },
  ];
  return (
    <div className="flex items-end justify-center gap-1 sm:gap-3 -mb-5 relative z-0">
      {items.map(({ C, r, delay }, i) => (
        <div
          key={i}
          className="anim-bob"
          style={{ ["--r" as string]: r, animationDelay: delay }}
        >
          <C className={`${size} drop-shadow-[0_6px_10px_rgba(75,46,131,0.12)]`} />
        </div>
      ))}
    </div>
  );
}

/* ---------- Background ---------- */

const FLOATERS = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 37 + 8) % 100,
  size: 10 + ((i * 7) % 5) * 5,
  d: 16 + ((i * 3) % 9),
  delay: -((i * 2.3) % 20),
  o: 0.25 + ((i % 4) * 0.08),
}));

function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {FLOATERS.map((f, i) => (
        <Heart
          key={i}
          fill={i % 3 === 0 ? "#fff" : i % 3 === 1 ? "#c9b3f5" : "#a98ae8"}
          className="anim-drift absolute -bottom-10"
          style={{ left: `${f.left}%`, width: f.size, height: f.size, ["--d" as string]: `${f.d}s`, ["--delay" as string]: `${f.delay}s`, ["--o" as string]: f.o } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ---------- Page 1: Envelope ---------- */

function EnvelopePage({ onOpened }: { onOpened: () => void }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    setTimeout(onOpened, 2300);
  };

  return (
    <div className="flex flex-col items-center text-center px-6 anim-fade-up">
      <p className="font-display italic text-violet text-lg tracking-wide">a letter, just for you</p>
      <h1 className="mt-2 font-thai font-semibold text-2xl sm:text-3xl text-ink">
        มีจดหมายถึง{TO_NAME}
      </h1>

      <button
        type="button"
        onClick={handleOpen}
        aria-label="เปิดจดหมาย"
        className="relative mt-24 sm:mt-28 w-[min(84vw,380px)] aspect-[3/2] cursor-pointer [perspective:1200px] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-violet rounded-md group"
      >
        <div className="absolute inset-0 rounded-md bg-[#cdb8f6] shadow-[0_30px_50px_-20px_rgba(75,46,131,0.45)]" />

        {/* letter */}
        <div
          className="absolute left-[6%] right-[6%] top-[6%] bottom-[4%] rounded-sm bg-paper paper-grain border border-[#e4d8fa] z-10 transition-transform duration-[900ms] ease-[cubic-bezier(0.3,0.7,0.2,1)]"
          style={{ transform: open ? "translateY(-62%)" : "translateY(0)", transitionDelay: open ? "0.55s" : "0s" }}
        >
          <div className="px-5 pt-5 text-left">
            <p className="font-hand text-sm text-violet">ถึง {TO_NAME},</p>
            <div className="mt-3 space-y-2">
              <div className="h-1.5 w-11/12 rounded-full bg-mist" />
              <div className="h-1.5 w-8/12 rounded-full bg-mist" />
              <div className="h-1.5 w-10/12 rounded-full bg-mist" />
            </div>
          </div>
        </div>

        {/* front pocket */}
        <div
          className="absolute inset-0 z-20 rounded-md"
          style={{
            clipPath: "polygon(0 0, 50% 54%, 100% 0, 100% 100%, 0 100%)",
            background: "linear-gradient(160deg,#e4d6ff 0%,#d3c0f8 55%,#c4aaf3 100%)",
          }}
        />
        {/* pocket fold lines */}
        <svg className="absolute inset-0 z-20 w-full h-full pointer-events-none" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 200 L150 108 L300 200" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.2" fill="none" />
        </svg>

        {/* flap */}
        <div
          className="absolute inset-x-0 top-0 h-[60%] origin-top transition-[transform] duration-[700ms] ease-in-out"
          style={{
            transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
            zIndex: open ? 5 : 30,
            transitionProperty: "transform, z-index",
            transitionDelay: open ? "0s, 0.3s" : "0s",
            clipPath: "polygon(0 0, 100% 0, 50% 90%)",
            background: open
              ? "linear-gradient(180deg,#bfa4f0,#d6c4fa)"
              : "linear-gradient(180deg,#eadfff,#d8c6fa)",
          }}
        />

        {/* seal */}
        <div
          className="absolute left-1/2 top-[54%] z-40 w-12 h-12 rounded-full bg-violet grid place-items-center shadow-[0_6px_14px_-4px_rgba(75,46,131,0.6),inset_0_-3px_0_rgba(0,0,0,0.12)] transition-all duration-500 anim-seal"
          style={{
            opacity: open ? 0 : 1,
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }}
        >
          <Heart className="w-5 h-5 text-white" />
        </div>
      </button>

      <p
        className="mt-10 font-display italic text-ink/70 text-lg transition-opacity duration-500"
        style={{ opacity: open ? 0 : 1 }}
      >
        แตะที่ซองเพื่อเปิดอ่าน
      </p>
    </div>
  );
}

/* ---------- Shared card ---------- */

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 w-[min(92vw,520px)] rounded-[28px] bg-paper paper-grain border border-white shadow-[0_40px_70px_-30px_rgba(75,46,131,0.45),0_0_0_1px_rgba(124,92,214,0.12)] px-7 sm:px-12 py-10 text-center">
      <div className="pointer-events-none absolute inset-2.5 rounded-[20px] border border-dashed border-lilac/70" />
      <div className="relative">{children}</div>
    </div>
  );
}

function PrimaryButton({ children, onClick, className = "" }: { children: ReactNode; onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-violet text-white px-9 py-3.5 font-thai font-semibold text-base tracking-wide transition-transform duration-200 hover:scale-[1.04] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet anim-glow cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

/* ---------- Page 2: Preface ---------- */

function PrefacePage({ onNext }: { onNext: () => void }) {
  const lines = [
    "ตั้งแต่ที่เราได้กลับมาคุยกัน เรารู้สึกว่าทุกวันที่มี" + TO_NAME + "อยู่ มันมีความหมายมากขึ้น",
    "ทั้งเวลาที่ได้คุย ได้เจอกัน หรือแม้แต่เรื่องเล็ก ๆ ที่" + TO_NAME + "เล่าให้ฟัง มันก็ทำให้เรายิ้มได้เสมอ",
    "เราอาจไม่ได้เป็นคนที่พูดเก่งเรื่องความรู้สึก แต่มีอย่างหนึ่งที่เราแน่ใจมาก ๆ คือ เราชอบ" + TO_NAME + "จริง ๆ",
    "เราไม่รู้ว่า" + TO_NAME + "จะรู้สึกเหมือนกันไหม แต่เราอยากลองเดินไปข้าง ๆ " + TO_NAME + "มากกว่าเดิม ไม่ใช่แค่ในฐานะคนคุยหรือเพื่อน",
    "เราไม่ได้อยากกดดันอะไรเลย แค่อยากให้" + TO_NAME + "รู้ว่าความรู้สึกทั้งหมดที่เราให้ มันจริงนะ",
  ];
  return (
    <div className="flex flex-col items-center px-4 anim-fade-up">
      <Trio />
      <Card>
        <p className="font-display italic text-violet text-lg">preface</p>
        <h2 className="mt-1 font-thai font-bold text-3xl text-ink">คำนำ</h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-lilac">
          <span className="h-px w-12 bg-lilac" />
          <Heart className="w-3.5 h-3.5 text-violet" />
          <span className="h-px w-12 bg-lilac" />
        </div>

        <div className="mt-7 space-y-5 font-hand text-[17px] leading-[2] text-ink/90">
          <p className="anim-fade-up text-violet font-medium" style={{ animationDelay: "0.2s" }}>
            ถึง {TO_NAME},
          </p>
          {lines.map((l, i) => (
            <p key={i} className="anim-fade-up" style={{ animationDelay: `${0.5 + i * 0.5}s` }}>
              {l}
            </p>
          ))}
          <p className="anim-fade-up text-right text-violet font-medium" style={{ animationDelay: "3.1s" }}>
            — {FROM_NAME}
          </p>
        </div>

        <div className="mt-9 anim-fade-up" style={{ animationDelay: "2.5s" }}>
          <PrimaryButton onClick={onNext}>
            อ่านต่อ
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </PrimaryButton>
        </div>
      </Card>
    </div>
  );
}

/* ---------- Page 3: Ask ---------- */

const NO_LABELS = ["ขอคิดดูก่อน", "จริงเหรอ?", "ลองใหม่อีกที", "ใจเย็น ๆ ก่อน", "กดไม่ได้หรอก", "ตอบตกลงเถอะนะ"];

function AskPage() {
  const [yes, setYes] = useState(false);
  const [dodges, setDodges] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const last = useRef(1);

  const dodge = () => {
    last.current *= -1;
    setPos({
      x: last.current * (70 + Math.random() * 50),
      y: (Math.random() - 0.5) * 90,
    });
    setDodges((d) => d + 1);
  };

  if (yes) {
    return (
      <div className="flex flex-col items-center px-4">
        <div className="anim-pop">
          <Trio size="w-28 sm:w-36" />
        </div>
        <div className="anim-pop" style={{ animationDelay: "0.15s" }}>
          <Card>
            <div className="mx-auto w-16 h-16 rounded-full bg-mist grid place-items-center">
              <Heart className="w-8 h-8 text-violet anim-seal" />
            </div>
            <h2 className="mt-5 font-thai font-bold text-3xl text-ink leading-snug">ขอบคุณนะ<br />ที่เลือกเรา</h2>
            <p className="mt-4 font-hand text-[17px] leading-[2] text-ink/85">
              จากนี้ไป ขอดูแล{TO_NAME}ให้ดีที่สุด<br />
              และค่อย ๆ สร้างเรื่องราวดี ๆ ไปด้วยกันนะ
            </p>
            <p className="mt-6 font-display italic text-violet text-xl">— {FROM_NAME} &amp; {TO_NAME}</p>
          </Card>
        </div>
        {Array.from({ length: 22 }).map((_, i) => (
          <Heart
            key={i}
            fill={i % 2 ? "#a98ae8" : "#fff"}
            className="anim-drift fixed -bottom-10"
            style={{ left: `${(i * 23 + 5) % 100}%`, width: 14 + (i % 4) * 8, height: 14 + (i % 4) * 8, ["--d" as string]: `${6 + (i % 5) * 1.5}s`, ["--delay" as string]: `${-(i % 7)}s`, ["--o" as string]: 0.85 } as React.CSSProperties}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-4 anim-fade-up">
      <Trio />
      <Card>
        <p className="font-display italic text-violet text-lg">one little question</p>
        <h2 className="mt-3 font-thai font-bold text-3xl sm:text-4xl text-ink leading-snug">
          {TO_NAME}จะเป็นแฟน
          <br />
          กับเราไหม?
        </h2>
        <p className="mt-4 font-hand text-ink/75 text-base">เราไม่รู้ว่าคำตอบจะเป็นยังไง แต่เราตั้งใจรอคำตอบของมุกนะ</p>

        <div className="relative mt-10 h-32 sm:h-28 flex flex-col sm:flex-row items-center justify-center gap-5">
          <PrimaryButton
            onClick={() => setYes(true)}
            className="!px-12 !py-4 text-lg"
          >
            <Heart className="w-4 h-4 text-white" />
            ตกลง
          </PrimaryButton>
          <button
            type="button"
            onPointerEnter={dodge}
            onClick={dodge}
            className="rounded-full border border-lilac bg-white/80 text-ink/70 px-6 py-2.5 font-thai text-sm transition-transform duration-300 ease-out cursor-pointer"
            style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
          >
            {NO_LABELS[Math.min(dodges, NO_LABELS.length - 1)]}
          </button>
        </div>
      </Card>
    </div>
  );
}

/* ---------- App ---------- */

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <main className="stage-bg relative min-h-screen w-full overflow-x-hidden flex items-center justify-center py-12">
      <Backdrop />
      <div className="relative z-10 w-full flex justify-center">
        {step === 0 && <EnvelopePage onOpened={() => setStep(1)} />}
        {step === 1 && <PrefacePage onNext={() => setStep(2)} />}
        {step === 2 && <AskPage />}
      </div>
    </main>
  );
}
