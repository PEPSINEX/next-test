export default function DummyMainPage() {
  const weekDays = ["月", "火", "水", "木", "金", "土"];
  const dates = [
    { day: "21", active: false },
    { day: "22", active: false },
    { day: "23", active: false },
    { day: "24", active: true },
    { day: "25", active: false },
    { day: "26", active: false },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#dff7ee,_#f3fbf8_40%,_#f7fbfa_80%)] px-6 pb-12 pt-6 text-neutral-900">
      <main className="mx-auto w-full max-w-[380px] rounded-[28px] bg-white/90 p-6 shadow-[0_20px_60px_rgba(18,60,40,0.12)] backdrop-blur">
        <section className="space-y-4">
          <div className="text-sm text-neutral-500">10月24日 木曜日</div>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-semibold">今日</h2>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 11h18" />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-2 text-center text-sm text-neutral-400">
            {weekDays.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-2 text-center">
            {dates.map((date) => (
              <div key={date.day} className="flex items-center justify-center">
                <div
                  className={
                    date.active
                      ? "flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-semibold text-white shadow-[0_10px_20px_rgba(16,185,129,0.35)]"
                      : "text-lg font-semibold text-neutral-800"
                  }
                >
                  {date.day}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-emerald-500 p-6 text-white shadow-[0_16px_28px_rgba(16,185,129,0.35)]">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/30">
              <svg width="58" height="58" viewBox="0 0 72 72" className="text-white">
                <circle
                  cx="36"
                  cy="36"
                  r="28"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="36"
                  cy="36"
                  r="28"
                  stroke="white"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="175.9"
                  strokeDashoffset="59.8"
                  transform="rotate(-90 36 36)"
                />
                <text x="36" y="42" textAnchor="middle" fontSize="16" fill="white" fontWeight="600">
                  66%
                </text>
              </svg>
            </div>
            <div>
              <div className="text-xl font-semibold">その調子！</div>
              <div className="text-white/85">今日の目標: あと1つ</div>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <div className="flex items-center justify-between text-neutral-900">
            <h3 className="text-2xl font-semibold">習慣リスト</h3>
            <span className="text-sm text-neutral-400">全3件</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white px-4 py-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 21c1.7 0 3-2.5 3-5.5S7.7 10 6 10s-3 2.5-3 5.5S4.3 21 6 21z" />
                    <path d="M18 21c1.7 0 3-2.5 3-5.5S19.7 10 18 10s-3 2.5-3 5.5S16.3 21 18 21z" />
                    <path d="M6 10V5a2 2 0 0 1 4 0v5" />
                    <path d="M18 10V5a2 2 0 0 0-4 0v5" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-neutral-700">ランニング</div>
                  <div className="text-sm text-neutral-400">30分 ・ 朝7:00</div>
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white px-4 py-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20" />
                    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20" />
                    <path d="M6 2v20" />
                    <path d="M9 6h6" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-neutral-700">読書</div>
                  <div className="text-sm text-neutral-400">10ページ</div>
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl border-2 border-emerald-500 bg-white px-4 py-4 shadow-[0_12px_20px_rgba(16,185,129,0.18)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v6" />
                    <path d="M7 7h10" />
                    <path d="M5 9v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-neutral-900">英語の勉強</div>
                  <div className="text-sm text-neutral-500">1時間 ・ 夜20:00</div>
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-200 text-neutral-300" />
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-emerald-100 py-4 text-emerald-400">
              <span className="text-xl">+</span>
              <span className="text-base font-medium">習慣を追加</span>
            </button>
          </div>
        </section>

        <nav className="mt-8 flex items-center justify-around border-t border-neutral-100 pt-4 text-sm text-neutral-400">
          <button className="flex flex-col items-center gap-1 text-emerald-500">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="3" />
              <path d="M8 2v4M16 2v4M3 10h18" />
            </svg>
            今日
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19V5" />
              <path d="M12 19V9" />
              <path d="M20 19V13" />
            </svg>
            記録
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v3" />
              <path d="M12 19v3" />
              <path d="M4.9 4.9l2.1 2.1" />
              <path d="M17 17l2.1 2.1" />
              <path d="M2 12h3" />
              <path d="M19 12h3" />
              <path d="M4.9 19.1l2.1-2.1" />
              <path d="M17 7l2.1-2.1" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            設定
          </button>
        </nav>
      </main>
    </div>
  );
}
