import React, { useState } from "react";
import { createRoot } from "react-dom/client";

interface TimelineItemProps {
  time: string;
  children: React.ReactNode;
  dotColor?: string;
  isLast?: boolean;
}

const TimelineItem = ({ time, children, dotColor = "bg-gray-500", isLast = false }: TimelineItemProps) => {
  return (
    <div className="relative pl-14">
      {/* Timeline Line: Connects this time dot to the next one */}
      {!isLast && (
        <div 
          className="absolute bg-gray-200 z-0" 
          style={{ left: '23px', top: '10px', bottom: '-20px', width: '1px' }}
        />
      )}
      
      {/* Time Label */}
      <div className="absolute left-[-3px] top-[21px] w-12 text-right text-xs font-bold text-gray-600">
        {time}
      </div>
      
      {/* Status Dot */}
      <div className={`absolute left-[20px] top-2 w-2 h-2 rounded-full ${dotColor} z-10 ring-4 ring-[#F9F9F7]`}></div>
      
      {/* Content Area */}
      <div className="pb-8">
        {children}
      </div>
    </div>
  );
};

const FlightCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mt-3 mb-2">
      {/* Header Info */}
      <div className="text-xs text-gray-800 mb-3 font-bold flex items-center gap-2">
        華航航空 · CI12(經濟艙)
      </div>

      {/* Flight Details Row */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-3">
        <div className="text-left">
            <div className="text-[10px] text-gray-500 mb-1 font-bold">出發</div>
            <div className="text-sm font-bold text-gray-800 mb-1">12/6 13:05</div>
            <div className="text-[10px] text-gray-600">小港機場 T1</div>
        </div>
        
        <div className="text-gray-300 px-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>

        <div className="text-right">
            <div className="text-[10px] text-gray-500 mb-1 font-bold">抵達</div>
            <div className="text-sm font-bold text-gray-800 mb-1">12/6 17:25</div>
            <div className="text-[10px] text-gray-600">成田機場 T2</div>
        </div>
      </div>
    </div>
  );
};

const HotelBookingCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mt-3 mb-2">
      {/* Header Info */}
      <div className="text-xs text-gray-800 mb-2 font-medium">4 晚 · 2 位成人 · 1 間客房</div>
      <div className="text-[10px] text-gray-600 font-bold mb-4 flex items-center gap-2">
        Hotels.com 予約番号：72064139817302
        <svg className="w-3 h-3 text-blue-600 cursor-pointer hover:text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
      </div>

      {/* Dates Row */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-3">
        <div className="text-left">
            <div className="text-[10px] text-gray-500 mb-1 font-bold">入住</div>
            <div className="text-xs font-bold text-gray-800 mb-1">週六, 12 月 6 日</div>
            <div className="text-[10px] text-gray-600">2:00 pm</div>
        </div>
        
        <div className="text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>

        <div className="text-right">
            <div className="text-[10px] text-gray-500 mb-1 font-bold">退房</div>
            <div className="text-xs font-bold text-gray-800 mb-1">週三, 12 月 10 日</div>
            <div className="text-[10px] text-gray-600">12:00 pm</div>
        </div>
      </div>
    </div>
  );
};

const OshiageHotelCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mt-3 mb-2">
      <div className="text-xs text-gray-800 mb-1 font-bold">京成 Richmond Hotel 東京押上</div>
      <div className="text-[10px] text-gray-500 mb-3">Keisei Richmond Hotel Tokyo Oshiage</div>
      <div className="bg-red-100 text-red-700 px-2 py-1 rounded font-bold text-xs inline-block mt-1">予約番号：6147793772 (Japanican)</div>
      <div>.</div>
      <div className="flex gap-2 mb-3">
         <a 
            href="https://www.google.com/maps/search/?api=1&query=Keisei+Richmond+Hotel+Tokyo+Oshiage" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
         >
            📍 地圖導航
         </a>
      </div>

      <div className="flex justify-between items-center border-t border-gray-100 pt-3">
        <div className="text-left">
            <div className="text-[10px] text-gray-500 mb-1 font-bold">入住</div>
            <div className="text-xs font-bold text-gray-800 mb-1">12/10 (三)</div>
        </div>
        <div className="text-gray-300">➜</div>
        <div className="text-right">
            <div className="text-[10px] text-gray-500 mb-1 font-bold">退房</div>
            <div className="text-xs font-bold text-gray-800 mb-1">12/13 (六)</div>
        </div>
      </div>
    </div>
  );
};

const TransportCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border-l-4 border-red-800 transition-all duration-300 hover:shadow-lg overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none bg-white active:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
            <h4 className="text-sm font-bold text-gray-900 tracking-widest">機場前往飯店交通資訊</h4>
            <svg 
                className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">1號月台乘車</span>
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4 animate-fadeIn">
            {/* Station Image */}
            <div className="rounded-lg overflow-hidden mb-3 shadow-sm border border-gray-100">
                <img 
                    src="https://oreo.blog/wp-content/uploads/20190518193539_14.jpg" 
                    alt="Narita Airport Train Station Entrance" 
                    className="w-full h-40 object-cover object-top block"
                />
            </div>
            
            <p className="text-xs text-gray-500 mb-3">
                領完行李後找「鐵道」指示標，沿著指示往機場B1走。
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                <span className="font-bold text-gray-800">下到機場 B1 後，尋找橘色標示的「Access 特急」和「Skyliner」，</span>
                到閘口後開啟Google Map看最近的班次，或看現場人潮決定，搭橘色Access直接進站，搭藍色Skyliner要先買票。
                <span className="text-red-600 font-medium">（都在1號月台乘車)</span>
            </p>

            <a 
              href="https://maps.app.goo.gl/5aqEowurG6oNp3s98" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 text-white text-xs px-4 py-3 rounded-lg mb-6 hover:bg-slate-700 hover:shadow-lg transition-all font-bold tracking-wide w-full justify-center shadow-md transform active:scale-[0.99]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              查看Google Map看最近班次
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>

            <div className="space-y-4">
                {/* Plan A */}
                <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-orange-600 text-xs">Plan A</span>
                    <div className="font-bold text-gray-900 text-base bg-orange-50 px-2 py-1 rounded-md">Sky Access特急 往 羽田機場</div>
                    <div className="font-bold text-orange-500 text-xs tracking-wide">【橘色標示；直接suica進站】</div>
                    <div className="text-gray-600 text-xs mt-0.5 leading-relaxed">
                        搭乘 Access 特急 (往羽田機場) ➜ 直達 <span className="font-bold text-gray-800">大門站</span> ➜ 站內轉乘 大江戶線 ➜ <span className="font-bold text-gray-800">六本木站</span>。
                    </div>
                </div>

                <hr className="border-dashed border-gray-200" />

                {/* Plan B */}
                <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-orange-600 text-xs">Plan B</span>
                    <div className="font-bold text-gray-900 text-base bg-orange-50 px-2 py-1 rounded-md">Sky Access特急 往 西馬込</div>
                    <div className="font-bold text-orange-500 text-xs tracking-wide">【橘色標示；直接suica進站】</div>
                    <div className="text-gray-600 text-xs mt-0.5 leading-relaxed">
                        搭乘 Access 特急 (往西馬込) ➜ 直達 <span className="font-bold text-gray-800">東銀座站</span> ➜ 站內轉乘 日比谷線 ➜ <span className="font-bold text-gray-800">六本木站</span>。
                    </div>
                </div>

                <hr className="border-dashed border-gray-200" />

                {/* Plan C */}
                <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-blue-600 text-xs">Plan C</span>
                    <div className="font-bold text-gray-900 text-base bg-blue-50 px-2 py-1 rounded-md">Skyliner 往 上野</div>
                    <div className="font-bold text-blue-600 text-xs tracking-wide">【藍色標示；對號座，須先購票】</div>
                    <div className="text-gray-600 text-xs mt-0.5 leading-relaxed">
                        搭乘 Skyliner ➜ 抵達 <span className="font-bold text-gray-800">京城上野站</span> ➜ 轉乘 日比谷線 (走路約 5-8 分鐘，走連通道) ➜ <span className="font-bold text-gray-800">六本木站</span>。<br/>
                        <span className="text-gray-400 text-[10px] mt-0.5 block">(上野轉乘需走一段路)</span>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

const TaxiCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-yellow-500 overflow-hidden mb-4 mt-2">
      <div className="p-4">
        <h4 className="text-sm font-bold text-gray-800 mb-2">計程車移動：六本木 ➜ 押上</h4>
        <div className="text-xs text-gray-600 mb-4 space-y-1">
            <div className="flex justify-between">
                <span>預估時間：</span>
                <span className="font-bold">35 - 45 分鐘</span>
            </div>
            <div className="flex justify-between">
                <span>預估車資：</span>
                <span className="font-bold">¥4,500 - ¥5,800</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">*含高速公路過路費，建議走首都高</p>
        </div>

        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 relative">
             <div className="absolute -top-2 left-4 bg-yellow-500 text-white text-[10px] px-2 py-0.5 rounded font-bold tracking-wider">給司機看</div>
             <p className="font-serif text-lg font-bold text-gray-900 mb-2 mt-1">運転手さんへ</p>
             <p className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2">
                京成リッチモンドホテル東京押上 までお願いします。
             </p>
             <p className="text-xs text-gray-600">
                <span className="font-bold">住所：</span>東京都墨田区押上1丁目8-23
             </p>
             <p className="text-xs text-gray-500 mt-1">
                (スカイツリーのすぐ前です)
             </p>
        </div>
      </div>
    </div>
  );
};

const MapCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border-l-4 border-red-800 transition-all duration-300 hover:shadow-lg overflow-hidden mt-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none bg-white active:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
            <h4 className="text-sm font-bold text-gray-900 tracking-widest">開啟 GOOGLE MAP</h4>
            <svg 
                className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">MAP</span>
      </button>
      
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
            <div className="px-4 pb-4">
                <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src="https://maps.google.com/maps?q=remm%20Roppongi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="Remm Roppongi Map"
                    ></iframe>
                </div>
                <a 
                    href="https://maps.app.goo.gl/RhYkgsSUKacDXTHd8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center text-xs text-blue-600 font-bold hover:underline tracking-widest"
                >
                    點擊開啟 GOOGLE MAP
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

const TrainScheduleCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-emerald-600 overflow-hidden mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-emerald-900 tracking-widest">新宿↔大月 列車班次建議表</h4>
        </div>
        <div className="flex items-center gap-2">
             <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">時刻表</span>
             <svg 
                className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
      </button>
      
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
            <div className="px-4 pb-4 bg-emerald-50/30">
                <div className="mb-4">
                    <div className="font-bold text-emerald-800 mb-2 text-xs border-b border-emerald-100 pb-1">去程 (新宿 ➜ 河口湖)</div>
                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                        <table className="w-full text-[10px] text-center whitespace-nowrap bg-white">
                            <thead className="bg-emerald-50 text-emerald-900 font-bold">
                                <tr>
                                    <th className="p-2 text-left sticky left-0 bg-emerald-50">選項</th>
                                    <th className="p-2">班次</th>
                                    <th className="p-2">新宿發</th>
                                    <th className="p-2">大月抵</th>
                                    <th className="p-2">轉乘</th>
                                    <th className="p-2">大月發</th>
                                    <th className="p-2">河口湖抵</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-gray-600">
                                <tr>
                                    <td className="p-2 text-left sticky left-0 bg-white font-medium">早班</td>
                                    <td className="p-2">Azusa 1</td>
                                    <td className="p-2">07:00</td>
                                    <td className="p-2">07:57</td>
                                    <td className="p-2">21分</td>
                                    <td className="p-2">08:18</td>
                                    <td className="p-2">09:15</td>
                                </tr>
                                <tr className="bg-yellow-50">
                                    <td className="p-2 text-left sticky left-0 bg-yellow-50 font-bold text-orange-600">⭐推薦</td>
                                    <td className="p-2 font-bold text-gray-900">Azusa 5</td>
                                    <td className="p-2 font-bold text-gray-900">08:00</td>
                                    <td className="p-2">09:01</td>
                                    <td className="p-2 font-bold text-red-500">15分</td>
                                    <td className="p-2 font-bold text-gray-900">09:16</td>
                                    <td className="p-2 font-bold text-gray-900">10:09</td>
                                </tr>
                                <tr>
                                    <td className="p-2 text-left sticky left-0 bg-white font-medium">晚班</td>
                                    <td className="p-2">Kaiji 7</td>
                                    <td className="p-2">08:30</td>
                                    <td className="p-2">09:35</td>
                                    <td className="p-2">12分</td>
                                    <td className="p-2">09:47</td>
                                    <td className="p-2">10:46</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <div className="font-bold text-emerald-800 mb-2 text-xs border-b border-emerald-100 pb-1">回程 (河口湖 ➜ 新宿)</div>
                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                        <table className="w-full text-[10px] text-center whitespace-nowrap bg-white">
                            <thead className="bg-emerald-50 text-emerald-900 font-bold">
                                <tr>
                                    <th className="p-2 text-left sticky left-0 bg-emerald-50">選項</th>
                                    <th className="p-2">班次</th>
                                    <th className="p-2">河口湖發</th>
                                    <th className="p-2">大月抵</th>
                                    <th className="p-2">轉乘</th>
                                    <th className="p-2">大月發</th>
                                    <th className="p-2">新宿抵</th>
                                    <th className="p-2 text-gray-400">六本木</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-gray-600">
                                <tr>
                                    <td className="p-2 text-left sticky left-0 bg-white font-medium">早班</td>
                                    <td className="p-2">Kaiji 40</td>
                                    <td className="p-2">15:53</td>
                                    <td className="p-2">16:55</td>
                                    <td className="p-2">10分</td>
                                    <td className="p-2">17:05</td>
                                    <td className="p-2">18:04</td>
                                    <td className="p-2 text-gray-400">18:30</td>
                                </tr>
                                <tr className="bg-yellow-50">
                                    <td className="p-2 text-left sticky left-0 bg-yellow-50 font-bold text-orange-600">⭐推薦</td>
                                    <td className="p-2 font-bold text-gray-900">Azusa 44</td>
                                    <td className="p-2 font-bold text-gray-900">16:18</td>
                                    <td className="p-2">17:19</td>
                                    <td className="p-2 font-bold text-red-500">26分</td>
                                    <td className="p-2 font-bold text-gray-900">17:45</td>
                                    <td className="p-2 font-bold text-gray-900">18:45</td>
                                    <td className="p-2 text-gray-400">19:15</td>
                                </tr>
                                <tr>
                                    <td className="p-2 text-left sticky left-0 bg-white font-medium">晚班</td>
                                    <td className="p-2">Azusa 82</td>
                                    <td className="p-2">16:53</td>
                                    <td className="p-2">17:54</td>
                                    <td className="p-2">24分</td>
                                    <td className="p-2">18:18</td>
                                    <td className="p-2">19:22</td>
                                    <td className="p-2 text-gray-400">19:50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const TicketStrategyCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-indigo-600 overflow-hidden mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-indigo-900 tracking-widest">閘口票券使用攻略</h4>
        </div>
        <div className="flex items-center gap-2">
             <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">重要</span>
             <svg 
                className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
      </button>
      
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
            <div className="px-4 pb-4 bg-indigo-50/30">
                <div className="mb-3 text-xs text-gray-600 bg-white p-2 rounded border border-gray-100">
                    <span className="font-bold">您的憑證：</span> Suica (地鐵/巴士) + JR 紙本票 (4張)
                </div>
                
                <div className="space-y-4 text-xs">
                    {/* Outbound */}
                    <div>
                        <div className="font-bold text-indigo-800 mb-1 border-b border-indigo-100 pb-1">去程 (六本木 ➜ 河口湖)</div>
                        <ul className="space-y-2 pl-2">
                            <li className="grid grid-cols-[80px_1fr] gap-2 items-center">
                                <span className="font-bold text-gray-700">六本木站</span>
                                <div><span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[10px]">刷 Suica</span> 進站</div>
                            </li>
                            <li className="grid grid-cols-[80px_1fr] gap-2 items-start">
                                <span className="font-bold text-gray-700 pt-0.5">新宿站</span>
                                <div>
                                    <div className="mb-1"><span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[10px]">刷 Suica</span> 出都營地鐵</div>
                                    <div className="text-gray-500 text-[10px] mb-1 leading-tight">*走地下連通道 (約5-8分) 到 JR 改札口</div>
                                    <div><span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded text-[10px]">插 紙本票</span> 進 JR (去程2張)</div>
                                </div>
                            </li>
                            <li className="grid grid-cols-[80px_1fr] gap-2 items-start bg-yellow-50 p-2 rounded border border-yellow-100">
                                <span className="font-bold text-gray-700 pt-0.5">大月站</span>
                                <div>
                                    <div className="font-bold text-red-600 mb-0.5">⚠️ 轉乘閘口 (同一個閘門)</div>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                        <li>先插入 <span className="font-bold">去程 2 張 JR 紙本票</span> (機器回收)</li>
                                        <li>立刻 <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[10px]">刷 Suica</span> (進富士急行線)</li>
                                    </ol>
                                </div>
                            </li>
                             <li className="grid grid-cols-[80px_1fr] gap-2 items-center">
                                <span className="font-bold text-gray-700">河口湖站</span>
                                <div><span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[10px]">刷 Suica</span> 出站扣款</div>
                            </li>
                        </ul>
                    </div>

                    {/* Return */}
                    <div>
                        <div className="font-bold text-indigo-800 mb-1 border-b border-indigo-100 pb-1">回程 (河口湖 ➜ 六本木)</div>
                        <ul className="space-y-2 pl-2">
                            <li className="grid grid-cols-[80px_1fr] gap-2 items-center">
                                <span className="font-bold text-gray-700">河口湖站</span>
                                <div><span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[10px]">刷 Suica</span> 進站</div>
                            </li>
                            <li className="grid grid-cols-[80px_1fr] gap-2 items-start bg-yellow-50 p-2 rounded border border-yellow-100">
                                <span className="font-bold text-gray-700 pt-0.5">大月站</span>
                                <div>
                                    <div className="font-bold text-red-600 mb-0.5">⚠️ 轉乘閘口 (同一個閘門)</div>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                        <li>先 <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[10px]">刷 Suica</span> (扣款完成)</li>
                                        <li>立刻插入 <span className="font-bold">回程 2 張 JR 紙本票</span> (吐回請收好)</li>
                                    </ol>
                                </div>
                            </li>
                             <li className="grid grid-cols-[80px_1fr] gap-2 items-center">
                                <span className="font-bold text-gray-700">新宿站</span>
                                <div><span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded text-[10px]">插 紙本票</span> 出 JR (機器回收)</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const ShinjukuTransferCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-blue-500 overflow-hidden mt-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 text-left focus:outline-none hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold text-gray-800 tracking-wider">找「JR新宿站」＆藍色「中央特級線」</h4>
        </div>
        <div className="flex items-center gap-2">
             <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">指引</span>
             <svg 
                className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
      </button>
      
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
            <div className="px-4 pb-4 bg-blue-50/30">
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    尋找「ＪＲ」指標跟著往JR新宿的方向走，入閘口使用<span className="font-bold text-blue-700">兩張紙本票 (乘車票+特急票)</span>進站，進站後找藍色的「中央特級線9、10月台」指標，附近可採買各種早餐便當、餐盒、咖啡～
                </p>
                <div className="grid grid-cols-1 gap-2">
                    <div className="rounded overflow-hidden shadow-sm">
                        <img src="https://lazyjapan.com/images/jr-shinjuku-transfer-01.jpg" className="w-full h-auto object-cover" alt="Shinjuku Transfer 1" />
                    </div>
                    <div className="rounded overflow-hidden shadow-sm">
                        <img src="https://farm5.static.flickr.com/4351/37042875416_f19b82fa3d_b.jpg" className="w-full h-auto object-cover" alt="Shinjuku Transfer 2" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const OtsukiTransferCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-yellow-400 overflow-hidden mb-4 mt-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-gray-800 tracking-wider">大月站<span className="mx-1">⇄</span>河口湖站 富士急行線資訊</h4>
        </div>
        <div className="flex items-center gap-2">
             <span className="text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">重要</span>
             <svg 
                className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
      </button>
      
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
            <div className="px-4 pb-4 bg-yellow-50/50">
                <p className="text-xs text-gray-700 mb-3 font-medium">下車後沿著標示前往富士急行線 Fujiku Railway</p>
                <div className="rounded-lg overflow-hidden mb-4 shadow-sm">
                    <img src="http://farm5.static.flickr.com/4340/36418750993_72b0a128b2_b.jpg" alt="Otsuki Transfer" className="w-full h-auto object-cover" />
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-yellow-200 mb-4 shadow-sm">
                    <div className="font-bold text-red-600 mb-2 text-xs">⚠️ 轉乘閘口 (同一個閘門)</div>
                    <ol className="list-decimal list-inside space-y-1.5 text-xs text-gray-700">
                        <li>先插入 <span className="font-bold bg-amber-100 text-amber-800 px-1 rounded">去程 2 張 JR 紙本票</span> (機器回收)</li>
                        <li>立刻 <span className="font-bold bg-green-100 text-green-800 px-1 rounded">刷 Suica</span> (進富士急行線)</li>
                    </ol>
                    <p className="text-xs text-red-600 font-bold mt-2 pt-2 border-t border-dashed border-yellow-200">
                        ※或是找閘口先出大月站(插兩張紙本票)，可以去上廁所，回來再刷SUICA去搭富士急行線的普通區間車
                    </p>
                </div>

                <div className="space-y-2 mb-4">
                     <div className="flex gap-2 items-start text-xs text-gray-700">
                         <span className="font-bold text-red-500 text-sm leading-none">•</span>
                         <span>大月站到河口湖之間用SUICA可以直接搭LOCAL普通車，不要搭到任何特急特快車</span>
                     </div>
                     <div className="flex gap-2 items-start text-xs text-gray-700">
                         <span className="font-bold text-red-500 text-sm leading-none">•</span>
                         <span>大月站和河口湖站現場都會有班次表，可以拍下來，隨時都可搭車</span>
                     </div>
                     <div className="flex gap-2 items-start text-xs text-gray-700">
                         <span className="font-bold text-red-500 text-sm leading-none">•</span>
                         <span>兩站之間有富士山站、下吉田站，去完河口湖若有時間，也很不錯可以去，可以一站站往大月前進～</span>
                     </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="rounded overflow-hidden shadow-sm h-24">
                        <img src="http://farm5.static.flickr.com/4385/36418748913_d37497c740_b.jpg" className="w-full h-full object-cover" alt="Fujikyu Train" />
                    </div>
                    <div className="rounded overflow-hidden shadow-sm h-24">
                        <img src="http://farm5.static.flickr.com/4334/37061354842_3bb8a131bc_b.jpg" className="w-full h-full object-cover" alt="Fujikyu Station" />
                    </div>
                     <div className="col-span-2 rounded overflow-hidden shadow-sm h-32">
                        <img src="https://pic.pimg.tw/sanjeff/1455250516-3353671392_wn.jpg" className="w-full h-full object-cover" alt="Fujikyu Landscape" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const FujiTripNotesCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-rose-500 overflow-hidden mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-rose-50 transition-colors"
      >
        <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-rose-900 tracking-widest">富士山行重點筆記！<span className="text-red-600 ml-1">重要！</span></h4>
        </div>
        <div className="flex items-center gap-2">
             <span className="text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">必讀</span>
             <svg 
                className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
      </button>
      
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
            <div className="px-4 pb-4 bg-rose-50/50">
                
                <div className="bg-white border border-rose-200 rounded p-2 mb-3 text-center text-xs font-bold text-rose-800">
                    【新宿站】↔【大月站】↔【河口湖站】<br/>
                    <span className="text-[10px] font-normal text-gray-500">(高鐵對號座)　　　(普通區間車)</span><br/>
                    【Shinjuku】↔【Otsuki】↔【Kawaguchiko】<br/>
                </div>

                <div className="space-y-4 text-xs text-gray-700 leading-relaxed">
                    
                    <div>
                        <div className="font-bold text-rose-800 mb-1 border-b border-rose-200 pb-0.5 inline-block">※新宿站 ↔ 大月站</div>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                            <li>這段就像搭「高鐵對號座」要提前買票</li>
                            <li>可以搭的高鐵車種有 <span className="font-bold">AZUSA (阿梓號)</span> 或是 KAIJI (沒差別看時間買票)</li>
                            <li>一趟會有<span className="bg-blue-100 text-blue-800 px-1 rounded text-[10px] font-bold">兩張紙本票</span> (乘車票+特急票)，進出閘口兩張疊在一起插</li>
                            <li>提前兩天看富士山能見度確認要去後，先在JR大站機台買票，買好來回班次(共四張票)</li>
                        </ul>
                    </div>

                    <div>
                        <div className="font-bold text-rose-800 mb-1 border-b border-rose-200 pb-0.5 inline-block">※大月站 ↔ 河口湖站</div>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                            <li>大月以後要搭乘 <span className="font-bold">富士急行線</span>，就像一般區間車 (LOCAL普通車)，用 <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA</span> 就能搭</li>
                            <li>大月出站有一種方法是走「轉乘閘口」，插紙本票 (<span className="bg-blue-100 text-blue-800 px-1 rounded text-[10px] font-bold">去乘特急+乘車兩張票</span>疊在一起去乘特急+乘車兩張票，代表高鐵結束出站) 後，立刻原地刷閘口旁邊 <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA</span> 機台 (等於進站區間車)，直接可以到富士急行的月台 (或找站務走人工通道，給他看紙本票和手機SUICA)</li>
                            <li className="text-rose-700 font-bold">但其實可以走「出大月站的閘口」插<span className="bg-blue-100 text-blue-800 px-1 rounded text-[10px] font-bold">兩張紙本票</span> ，出去上廁所，走走看看，之後刷 <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA</span> 進「搭富士急行線的閘口」就不會混亂比較簡單</li>
                            <li> <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA</span> 可以直接搭「LOCAL普通車」，看好電子顯示牌上車，<span className="text-red-600 font-bold">不要搭到任何特急特快車 (會被查補票)</span></li>
                            <li>現場會有往河口湖站的班次表，可以拍下來，隨時都可搭車</li>
                        </ul>
                    </div>

                    <div>
                        <div className="font-bold text-rose-800 mb-1 border-b border-rose-200 pb-0.5 inline-block">※河口湖地區</div>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                            <li>到站現場會有往大月站的區間車班次表，可以先拍下來，隨時都可搭車</li>
                            <li>河口湖地區觀光要搭「巡迴觀光巴士」 (建議買 <span className="bg-red-100 text-red-800 px-1 rounded text-[10px] font-bold">一日票</span> ,刷 <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA</span> 也可比較貴)</li>
                            <li>第一次去搭巴士「紅線」最簡單，巡迴班次最多，基本點都在這條線</li>
                            <li>一出河口湖站，就會看到櫃檯排隊買巴士<span className="bg-red-100 text-red-800 px-1 rounded text-[10px] font-bold">一日票</span> 了，記得務必拿地圖和班次表</li>
                            <li>巴士排隊處，看好巴士顏色隊伍再排隊 (地上或站牌)</li>
                            <li>巴士不用一日票刷 <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA</span> 也可以，上下車都要刷，<span className="bg-red-100 text-red-800 px-1 rounded text-[10px] font-bold">一日票</span> 就是上下車拿給他看</li>
                            <li>巴士會一直巡迴，也有逆行，通常回程會在對面，GOOGLE地圖直接導航也很準!</li>
                            <li>河口湖站旁邊有很多置物櫃可用</li>
                        </ul>
                    </div>

                    <div>
                        <div className="font-bold text-rose-800 mb-1 border-b border-rose-200 pb-0.5 inline-block">※河口湖站 ↔ 大月站 (回程)</div>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                            <li>只要是搭普通車，就是刷 <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA</span> 進出，直接上下各站玩</li>
                            <li>富士山站、下吉田站 (拍街道盡頭有富士山的點) 可逛，去完河口湖若有時間，也很不錯可以去，可以一站站往大月前進～</li>
                            <li>到河口湖後就是注意回乘普通車班次的時間，要 <span className="font-bold text-red-600 bg-yellow-100 px-1 rounded">提前回到大月站</span></li>
                            <li>要從普通車轉乘去搭高鐵時，一樣是到閘口時看能不能先刷 <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA</span> (代表這段區間車結束)，然後插入 <span className="bg-blue-100 text-blue-800 px-1 rounded text-[10px] font-bold">兩張紙本票</span> 疊在一起 (高鐵開始)</li>
                            <li>若沒刷到 <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA</span> ，回新宿進出站有問題的話，找站務人員處理即可</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const TimelineView = ({ selectedDate }: { selectedDate: string }) => {
  // Day 1 Content (12/06)
  if (selectedDate === '06') {
    return (
      <>
        {/* Hero Image - Day 1 */}
        <div className="w-full h-40 rounded-xl overflow-hidden relative mb-8 shrink-0 shadow-sm group">
          <img 
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2994&auto=format&fit=crop" 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
            style={{ objectPosition: 'center 40%' }}
            alt="Tokyo Night"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
            <div className="flex items-center gap-2 mb-1 opacity-95">
                <span className="border border-white/70 px-2 py-0.5 text-xs tracking-widest rounded-sm font-medium">DAY 1</span>
                <span className="text-xs tracking-wider font-medium">成田機場 · 六本木</span>
            </div>
            <h2 className="text-2xl font-bold tracking-widest mb-1">東京、到着</h2>
            <p className="text-xs tracking-wide opacity-90 font-medium">開啟東京大冒險啦( •̀ᴗ•́ )و ̑̑♡̷̷̷</p>
          </div>
        </div>

        {/* Timeline Events - Day 1 */}
        <div className="space-y-0 relative">
          
          <TimelineItem time="13:05">
             <h3 className="text-lg font-bold text-gray-800">高雄小港機場➜東京成田機場</h3>
             <p className="text-xs text-gray-500 mt-1">前往東京</p>
             <FlightCard />
          </TimelineItem>

          <TimelineItem time="17:25">
             <h3 className="text-lg font-bold text-gray-800">抵達成田機場 (T2)</h3>
             <p className="text-xs text-gray-500 mt-1">Terminal2．空港第２ビル</p>
             <div className="mt-2 inline-flex gap-2">
                <a 
                    href="https://www.vjw.digital.go.jp/main/#/vjwplo001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded hover:bg-gray-300 transition-colors flex items-center gap-1"
                >
                    VJW 通關
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <span className="bg-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded">領行李</span>
             </div>
          </TimelineItem>

          <TimelineItem time="18:30" dotColor="bg-red-800">
             <h3 className="text-lg font-bold text-gray-800">前往六本木站</h3>
             <TransportCard />
          </TimelineItem>

          <TimelineItem time="20:00">
             <div className="flex flex-col">
                <h3 className="text-lg font-bold text-gray-800">六本木站 Remm Roppongi</h3>
                <p className="text-xs text-gray-500 mt-1">Check-in</p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                     出六本木站後，步行約 1 分鐘即達。記得出示護照。
                </p>
                <MapCard />
                <HotelBookingCard />
             </div>
          </TimelineItem>

          <TimelineItem time="20:30">
            <h3 className="text-lg font-bold text-gray-800">晚餐時間</h3>
            <p className="text-sm text-gray-600 mt-1">六本木周邊覓食</p>
            <div className="mt-3 bg-white p-4 rounded-lg shadow-sm space-y-3">
                <p className="text-xs text-gray-500 mb-1 tracking-widest border-b border-gray-100 pb-2">RECOMMEND</p>
                
                <div className="group">
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=Sobakiri+Roppongi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-bold text-gray-800 group-hover:text-red-800 transition-colors text-sm"
                    >
                        <span className="text-red-800 text-sm">♥</span>
                        <span>蕎麥六本</span>
                        <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span>
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5 ml-4 leading-relaxed">蕎麥麵&天婦羅好吃，飯店出去左手邊</p>
                </div>

                <div className="group">
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=AFURI+Roppongi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-bold text-gray-800 group-hover:text-red-800 transition-colors text-sm"
                    >
                         <span className="text-red-800 text-sm">♥</span>
                         <span>AFURI拉麵 (柚香)</span>
                         <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span>
                    </a>
                </div>

                <div className="group">
                    <a 
                        href="https://maps.app.goo.gl/sqSQJbDUhHRLh79U9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-bold text-gray-800 group-hover:text-red-800 transition-colors text-sm"
                    >
                        <span className="text-red-800 text-sm">♥</span>
                        <span>六本木燒肉MASU (讚燒肉6F)</span>
                        <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span>
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5 ml-4 leading-relaxed">和牛燒肉超讚，直接選套餐看是要幾種部位的或是看照片！點餐平板右上角可以改中英文</p>
                </div>

                <div className="group">
                    <a 
                        href="https://maps.app.goo.gl/aqkZZrjyMDJ4JPZc9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-bold text-gray-800 group-hover:text-red-800 transition-colors text-sm"
                    >
                        <span className="text-red-800 text-sm">♥</span>
                        <span>麵屋武藏 虎嘯 (拉麵)</span>
                        <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span>
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5 ml-4 leading-relaxed">大叉燒肉，沾面有名，也有醬油湯底的拉麵，排隊輪到後用點餐機有中文，點完餐店員會告訴位置</p>
                </div>

                <div className="group">
                    <a 
                        href="https://maps.app.goo.gl/bucAkj5wrh6udgbp6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-bold text-gray-800 group-hover:text-red-800 transition-colors text-sm"
                    >
                        <span className="text-red-800 text-sm">♥</span>
                        <span>入鹿拉麵(米其林)</span>
                        <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span>
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5 ml-4 leading-relaxed">菜單有中文，有名的柚子鹽拉麵、牛肝菌醬油拉麵！</p>
                </div>
            </div>
          </TimelineItem>

           <TimelineItem time="22:00" dotColor="bg-gray-300" isLast={true}>
              <h3 className="text-base font-bold text-gray-500">採購用品與食物</h3>
              <p className="text-xs text-gray-400 mt-1">採購需要的生活用品，和明日早餐</p>
              
              <div className="mt-3 space-y-3">
                 <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-xs text-gray-500 mb-2 tracking-widest font-bold">超市 RECOMMEND</h4>
                    <ul className="space-y-2 text-xs">
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=Seijo+Ishii+Roppongi+Hills" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="font-bold text-gray-800 group-hover:text-red-800 transition-colors">♥ 成城石井超市 <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span></div>
                                <div className="text-gray-500 mt-0.5">便宜的超市有食物，在Roppongi Hills North Tower的B1</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=Meidi-Ya+Roppongi" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="font-bold text-gray-800 group-hover:text-red-800 transition-colors">♥ Meidi-Ya 超市 <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span></div>
                                <div className="text-gray-500 mt-0.5">高級一點的超市有食物</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=Precce+Premium+Tokyo+Midtown" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="font-bold text-gray-800 group-hover:text-red-800 transition-colors">♥ Precce超市 <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span></div>
                                <div className="text-gray-500 mt-0.5">高級一點的超市有食物，飯店對面Tokyo Midtown B1</div>
                            </a>
                        </li>
                    </ul>
                 </div>

                 <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-xs text-gray-500 mb-2 tracking-widest font-bold">藥妝店 RECOMMEND</h4>
                    <ul className="space-y-2 text-xs">
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=Sugi+Pharmacy+Roppongi" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="font-bold text-gray-800 group-hover:text-red-800 transition-colors">♥ スギ薬局 六本木店 <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span></div>
                                <div className="text-gray-500 mt-0.5">24小時好逛可退稅，就在路口</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=Don+Quijote+Roppongi" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="font-bold text-gray-800 group-hover:text-red-800 transition-colors">♥ 唐吉軻德 六本木店 <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span></div>
                                <div className="text-gray-500 mt-0.5">24小時好逛可退稅，生活用品大採購</div>
                            </a>
                        </li>
                    </ul>
                 </div>

                 <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-xs text-gray-500 mb-2 tracking-widest font-bold">便利商店 RECOMMEND</h4>
                    <ul className="space-y-2 text-xs">
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=7-Eleven+Roppongi+Station+North" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="font-bold text-gray-800 group-hover:text-red-800 transition-colors">♥ 7-ELEVEN 六本木站北店 <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=FamilyMart+Roppongi+Station+Front" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="font-bold text-gray-800 group-hover:text-red-800 transition-colors">♥ 全家 六本木站前店 <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span></div>
                            </a>
                        </li>
                        <li>
                             <a href="https://www.google.com/maps/search/?api=1&query=FamilyMart+Roppongi+Subway+Station" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="font-bold text-gray-800 group-hover:text-red-800 transition-colors">♥ 全家便利商店 地下鐵六本木站店 <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span></div>
                            </a>
                        </li>
                    </ul>
                 </div>
              </div>
           </TimelineItem>
        </div>
      </>
    );
  }

  // Day 2 Content (12/07) - Ginza & Marunouchi
  if (selectedDate === '07') {
    return (
      <>
        {/* Hero Image - Day 2 */}
        <div className="w-full h-40 rounded-xl overflow-hidden relative mb-8 shrink-0 shadow-sm group">
          <img 
            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/466000/466658-Ginza.jpg" 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
            style={{ objectPosition: 'center 40%' }}
            alt="Ginza Street"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
            <div className="flex items-center gap-2 mb-1 opacity-95">
                <span className="border border-white/70 px-2 py-0.5 text-xs tracking-widest rounded-sm font-medium">DAY 2</span>
                <span className="text-xs tracking-wider font-medium">銀座 · 丸之內</span>
            </div>
            <h2 className="text-2xl font-bold tracking-widest mb-1">都會美食巡禮</h2>
            <p className="text-xs tracking-wide opacity-90 font-medium">高架橋下甜點與香檳金燈海 ✨</p>
          </div>
        </div>

        {/* Timeline Events - Day 2 */}
        <div className="space-y-0 relative">
          
          <TimelineItem time="10:00">
             <h3 className="text-lg font-bold text-gray-800">出發：REMM 六本木</h3>
             <p className="text-xs text-gray-500 mt-1">搭乘日比谷線 ➜ 日比谷站</p>
          </TimelineItem>

          <TimelineItem time="10:20" dotColor="bg-amber-600">
             <h3 className="text-lg font-bold text-gray-800">日比谷 OKUROJI</h3>
             <p className="text-xs text-gray-500 mt-1">高架橋下秘境 (A4/A13出口)</p>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=HIBIYA+OKUROJI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 地圖導航
                 </a>
             </div>
             <div className="bg-amber-50 p-3 rounded-lg mt-2 border border-amber-100">
                 <div className="font-bold text-amber-800 text-xs mb-1">😋必買外帶任務：PATISSERIE TEN&　<a href="https://maps.app.goo.gl/tSqnQndGRSfiY8HPA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a></div>
                 <p className="text-xs text-gray-600 leading-relaxed">
                     外帶必吃「爆漿泡芙 (Choux à la crème)」，皮薄酥脆內餡濃郁！
                     <br/><span className="text-[10px] text-gray-400">*僅收信用卡/電子支付</span>
                 </p>
             </div>
          </TimelineItem>

          <TimelineItem time="11:30">
             <h3 className="text-lg font-bold text-gray-800">銀座 步行者天國購物</h3>
             <p className="text-xs text-gray-500 mt-1">步行約 5-8 分鐘抵達銀座中心</p>
             
             <div className="mt-3 space-y-2">
                 <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                     <div className="flex justify-between items-center mb-1">
                         <span className="font-bold text-gray-800 text-xs">🛍️ UNIQLO 銀座旗艦店</span>
                         <a href="https://www.google.com/maps/search/?api=1&query=UNIQLO+Ginza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-gray-500">12層樓全球最大！12F有咖啡廳與限定銅鑼燒。</p>
                 </div>
                 <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                     <div className="flex justify-between items-center mb-1">
                         <span className="font-bold text-gray-800 text-xs">🛍️ Ginza Six (GSIX)</span>
                         <a href="https://www.google.com/maps/search/?api=1&query=GINZA+SIX" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-gray-500">B1有藍瓶咖啡！也有一些餅乾甜點伴手禮店！</p>
                 </div>
                 <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                     <div className="flex justify-between items-center mb-1">
                         <span className="font-bold text-gray-800 text-xs">🛍️ 伊東屋 (Itoya)</span>
                         <a href="https://www.google.com/maps/search/?api=1&query=G.Itoya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-gray-500">漂亮購物袋！整棟的質感文具。</p>
                 </div>
                 <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                     <div className="flex justify-between items-center mb-1">
                         <span className="font-bold text-gray-800 text-xs">🛍️ 無印良品 銀座</span>
                         <a href="https://www.google.com/maps/search/?api=1&query=MUJI+Ginza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-gray-500">世界旗艦店，B1食堂與1F麵包店都很棒。</p>
                 </div>
             </div>
          </TimelineItem>

          <TimelineItem time="14:00" dotColor="bg-indigo-600">
             <h3 className="text-lg font-bold text-gray-800">JR 有樂町站：購票任務</h3>
             <p className="text-xs text-gray-500 mt-1">從 UNIQLO 步行約 5 分鐘</p>
             <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg mt-2 shadow-sm">
                 <div className="flex items-center gap-2 mb-2">
                     <span className="bg-indigo-200 text-indigo-800 text-[10px] px-2 py-0.5 rounded font-bold">任務</span>
                     <span className="text-xs font-bold text-indigo-900">購買 新宿 ↔ 大月 Azusa 車票</span>
                 </div>
                 <p className="text-xs text-gray-600 leading-relaxed">
                     找到紫色/黑色售票機，依照教學購買。現在買好，去東京車站就不用人擠人找機器了！
                 </p>
             </div>
          </TimelineItem>

          <TimelineItem time="14:30">
             <h3 className="text-lg font-bold text-gray-800">移動至東京車站</h3>
             <p className="text-xs text-gray-500 mt-1">步行約 15 分鐘 (沿中央通順路散步)</p>
          </TimelineItem>

          <TimelineItem time="15:00" dotColor="bg-red-600">
             <h3 className="text-lg font-bold text-gray-800">離峰午餐：極味屋 (Kiwamiya)</h3>
             <p className="text-xs text-gray-500 mt-1">必吃漢堡排！(Gransta Yaekita 1F)</p>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kiwamiya+Tokyo+Station" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 地圖導航
                 </a>
             </div>
             
             <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mt-2">
                 <div className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded inline-block mb-2 font-bold">🌟 離峰攻略</div>
                 <p className="text-xs text-gray-600 mb-2">
                     15:00-15:30 是超級離峰時段，等待時間大幅縮短。
                     <br/>位置：八重洲北口改札外，往左手邊走。
                 </p>
                 <div className="text-xs text-gray-800 font-bold border-t border-gray-100 pt-2 mt-2">
                     推薦：漢堡排 (M/L) + 伊萬里牛牛排。
                     <br/><span className="font-normal text-gray-500">必加套餐 (飯/湯/沙拉/霜淇淋吃到飽)，霜淇淋超好吃！</span>
                 </div>
             </div>
          </TimelineItem>

          <TimelineItem time="16:30">
             <h3 className="text-lg font-bold text-gray-800">東京車站伴手禮掃貨</h3>
             <p className="text-xs text-gray-500 mt-1">Gransta Tokyo / Gift Palette</p>
             <ul className="mt-2 space-y-1 text-xs text-gray-600">
                 <li>• <span className="font-bold text-gray-800">NY Perfect Cheese</span> (南通路)：必買第一名。</li>
                 <li>• <span className="font-bold text-gray-800">PRESS BUTTER SAND</span> (丸之內南口)：現烤焦糖夾心。</li>
                 <li>• <span className="font-bold text-gray-800">TULIP ROSE</span> (八重洲中央口)：鬱金香餅乾。</li>
                 <li>• <span className="font-bold text-gray-800">Jaga Bould</span> (Gransta)：限定厚切洋芋片。</li>
             </ul>
          </TimelineItem>

          <TimelineItem time="18:00" dotColor="bg-yellow-500">
             <h3 className="text-lg font-bold text-gray-800">丸之內聖誕燈光秀</h3>
             <p className="text-xs text-gray-500 mt-1">香檳金燈海 (Marunouchi Illumination)</p>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Marunouchi+Naka-dori" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 丸之內仲通
                 </a>
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Gyoko-dori" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 行幸通
                 </a>
             </div>
             <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                 東京最具大人味的燈飾。行幸通可拍到完整東京車站紅磚建築。丸之內仲通整排香檳金 LED 燈海非常浪漫。
             </p>
          </TimelineItem>

          <TimelineItem time="19:30" isLast={true}>
             <h3 className="text-lg font-bold text-gray-800">歸賦</h3>
             <p className="text-xs text-gray-500 mt-1">搭乘千代田線/日比谷線返回六本木</p>
          </TimelineItem>

          <TimelineItem time="Note" dotColor="bg-gray-400" isLast={true}>
              <h3 className="text-base font-bold text-gray-500">行程小提醒</h3>
              <div className="bg-gray-50 p-4 rounded-lg mt-2 border-l-4 border-gray-300">
                  <ul className="space-y-2 text-xs text-gray-600">
                      <li>• <span className="font-bold">極味屋：</span> 即使離峰仍建議預留排隊時間。衣物易沾油煙，可帶除味噴霧。</li>
                      <li>• <span className="font-bold">PATISSERIE PAROLA：</span> 不收現金。</li>
                  </ul>
              </div>
          </TimelineItem>
        </div>
      </>
    );
  }

  // Day 3 Content (12/08) - Christmas Special
  if (selectedDate === '08') {
    return (
      <>
        {/* Hero Image - Day 3 */}
        <div className="w-full h-40 rounded-xl overflow-hidden relative mb-8 shrink-0 shadow-sm group">
          <img 
            src="https://resources.matcha-jp.com/resize/720x2000/2025/10/16-246936.webp" 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
            style={{ objectPosition: 'center 60%' }}
            alt="Roppongi Christmas Illumination"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
            <div className="flex items-center gap-2 mb-1 opacity-95">
                <span className="border border-white/70 px-2 py-0.5 text-xs tracking-widest rounded-sm font-medium">DAY 3</span>
                <span className="text-xs tracking-wider font-medium">聖誕限定版</span>
            </div>
            <h2 className="text-2xl font-bold tracking-widest mb-1">東京聖誕散策</h2>
            <p className="text-xs tracking-wide opacity-90 font-medium">璀璨燈飾與東京鐵塔的浪漫邂逅 🎄</p>
          </div>
        </div>

        {/* Timeline Events - Day 3 */}
        <div className="space-y-0 relative">

          <TimelineItem time="10:00" dotColor="bg-orange-600">
             <h3 className="text-lg font-bold text-gray-800">增上寺 & 芝公園</h3>
             <p className="text-xs text-gray-500 mt-1">與東京鐵塔的經典早晨</p>
             
             {/* Transport Info */}
             <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-3 rounded border-l-4 border-gray-300">
                 <div className="font-bold text-gray-800 mb-1">直達鐵塔腳下</div>
                 <div className="flex flex-col gap-1">
                     <div className="flex items-center gap-2">
                        <span className="bg-gray-200 px-1.5 rounded text-[10px]">出發</span>
                        <span>REMM 六本木大廳</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-800 px-1.5 rounded text-[10px]">交通</span>
                        <span>都營大江戶線 <span className="font-bold">赤羽橋站</span> (往大門/兩國)</span>
                     </div>
                 </div>
             </div>

             <div className="mt-4 space-y-3">
                 <h4 className="text-sm font-bold text-orange-800 border-b border-orange-100 pb-1">東京鐵塔經典三連拍</h4>
                 
                 {/* Spot 1 */}
                 <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                     <div className="flex justify-between items-start mb-1">
                        <div className="font-bold text-gray-800 text-sm">📸 芝公園 4號地</div>
                        <a href="https://www.google.com/maps/search/?api=1&query=Prince+Shiba+Park" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-gray-500">出站過馬路即達。大草皮適合拍「野餐風 + 完整鐵塔」。</p>
                 </div>

                 {/* Spot 2 */}
                 <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                     <div className="flex justify-between items-start mb-1">
                        <div className="font-bold text-gray-800 text-sm">📸 增上寺</div>
                        <a href="https://www.google.com/maps/search/?api=1&query=Zojoji+Temple" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-gray-500">穿過公園步行約 5 分鐘。拍「寺廟黑瓦屋頂 + 紅色鐵塔」。</p>
                 </div>

                 {/* Spot 3 */}
                 <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 ring-2 ring-orange-100">
                     <div className="flex justify-between items-start mb-1">
                        <div className="font-bold text-gray-800 text-sm">📸 豆腐屋 UKAI 前</div>
                        <a href="https://www.google.com/maps/search/?api=1&query=Tokyo+Shiba+Tofuya+Ukai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors"><span className="text-xs">📍</span></a>
                     </div>
                     <div className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded inline-block mb-1 font-bold">🔥 必拍網紅點</div>
                     <p className="text-xs text-gray-500">定位在豆腐屋正門，站在對面地下停車場樓梯中段仰拍，人像背後就是巨大鐵塔！</p>
                 </div>
             </div>
          </TimelineItem>

          <TimelineItem time="12:00" dotColor="bg-green-700">
             <h3 className="text-lg font-bold text-gray-800">麻布台之丘 (Azabudai Hills)</h3>
             <p className="text-xs text-gray-500 mt-1">步行約 15 分鐘 ➜ 探索東京新地標</p>
             
             <div className="mt-3 space-y-3">
                 <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-bold">午餐</span>
                            <span className="text-sm font-bold text-gray-800">麻布台之丘 Market</span>
                        </div>
                        <a href="https://www.google.com/maps/search/?api=1&query=Azabudai+Hills+Market" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">Garden Plaza C, B1</p>
                    <ul className="space-y-2 text-xs border-t border-gray-100 pt-2">
                        <li className="flex justify-between">
                            <span className="font-bold text-gray-700">鳥おか (Torioka)</span>
                            <span className="text-gray-500">米其林燒鳥便當</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-bold text-gray-700">Mr. CHEESECAKE</span>
                            <span className="text-gray-500">傳說起司蛋糕</span>
                        </li>
                    </ul>
                 </div>
             </div>
          </TimelineItem>

          <TimelineItem time="13:30">
              <h3 className="text-lg font-bold text-gray-800">必吃甜點：鈴懸 (Suzukake) 🍓</h3>
              <div className="flex items-center gap-2 mt-1">
                 <p className="text-xs text-gray-500">Garden Plaza C, B1</p>
                 <a href="https://www.google.com/maps/search/?api=1&query=Suzukake+Azabudai+Hills" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
              </div>
              
              <div className="mt-2 bg-red-50 border border-red-100 p-3 rounded-lg flex items-start gap-3">
                  <div className="text-2xl">🍓</div>
                  <div>
                      <div className="text-xs font-bold text-red-800 mb-1">任務：購買 草莓大福 & 鈴乃最中</div>
                      <p className="text-[10px] text-gray-600 leading-relaxed">
                          排隊名店！建議吃完午餐立刻買，拿到戶外「中央廣場」享用。
                      </p>
                  </div>
              </div>
          </TimelineItem>

          <TimelineItem time="14:15">
             <h3 className="text-lg font-bold text-gray-800">建築巡禮</h3>
             <div className="mt-2 grid grid-cols-2 gap-2">
                 <div className="bg-white p-2 rounded shadow-sm text-center border border-gray-100">
                     <div className="font-bold text-gray-800 text-xs mb-1">中央廣場</div>
                     <p className="text-[10px] text-gray-500">奈良美智《東京森林之子》</p>
                 </div>
                 <div className="bg-white p-2 rounded shadow-sm text-center border border-gray-100">
                     <div className="font-bold text-gray-800 text-xs mb-1">花園廣場</div>
                     <p className="text-[10px] text-gray-500">波浪網格建築 + 鐵塔合影</p>
                 </div>
             </div>
          </TimelineItem>

          <TimelineItem time="16:00" dotColor="bg-purple-600">
             <h3 className="text-lg font-bold text-gray-800">森JP塔 33F 展望台</h3>
             <p className="text-xs text-gray-500 mt-1">東京鐵塔最佳觀景位 (夕陽)</p>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Azabudai+Hills+Mori+JP+Tower" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 地圖導航
                 </a>
             </div>
             
             <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg mt-2 text-xs text-gray-700">
                 <div className="font-bold text-yellow-700 mb-1">⚠️ 入口與攻略</div>
                 <ul className="list-disc list-inside space-y-1">
                     <li>入口在 <span className="font-bold text-red-600">1樓 (1F)</span> 大廳，不要去 B1。</li>
                     <li>搭 「Hills House / Sky Room Cafe」 專用電梯。</li>
                     <li>每人入場費 ¥500 + 一杯飲料低消。</li>
                     <li><span className="font-bold">※不收現金</span>，請準備信用卡/Suica。</li>
                 </ul>
             </div>
          </TimelineItem>

          <TimelineItem time="17:30">
              <h3 className="text-lg font-bold text-gray-800">移動至六本木之丘</h3>
              <p className="text-xs text-gray-500 mt-1">步行約 15 分鐘</p>
          </TimelineItem>

          <TimelineItem time="18:00" dotColor="bg-blue-600">
             <h3 className="text-lg font-bold text-gray-800">六本木之丘燈飾</h3>
             <p className="text-xs text-gray-500 mt-1">雙燈飾巡禮 Part 1</p>
             
             <div className="mt-3 bg-[#0f172a] text-blue-100 p-4 rounded-xl shadow-lg relative overflow-hidden mb-3">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 opacity-10 rounded-bl-full"></div>
                <div className="mb-4">
                     <div className="flex justify-between items-center mb-1">
                        <div className="font-bold text-white text-sm">📸 欅坂通 (Keyakizaka Dori)</div>
                        <a href="https://maps.app.goo.gl/a8EFGpoDzFxkqY5n8" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-blue-200 opacity-80 leading-relaxed mb-2">
                        整排銀藍色燈海 + 正紅色東京鐵塔。
                     </p>
                     <div className="inline-block bg-blue-900/50 px-2 py-1 rounded text-[10px] text-blue-200 border border-blue-800">
                        拍照點：「CSW Meeting Point 2樓」（六本木商場外天橋），或在「六本木蔦屋書店附近」都是能將整片的藍色聖誕燈與背後的東京鐵塔一同拍進畫面的好地點。
                     </div>
                </div>

                <div>
                     <div className="flex justify-between items-center mb-1">
                        <div className="font-bold text-white text-sm">🎄 德國聖誕市集</div>
                        <a href="https://maps.app.goo.gl/ZgzGjtXcTJpYFnS38" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-blue-200 opacity-80 leading-relaxed">
                        大屋頂廣場。推薦：熱紅酒 (Glühwein) 暖暖身。
                     </p>
                </div>
             </div>
          </TimelineItem>

          <TimelineItem time="19:00">
             <h3 className="text-lg font-bold text-gray-800">晚餐：SHAKE SHACK</h3>
             <div className="flex items-center gap-2 mt-1">
                 <p className="text-xs text-gray-500">六本木之丘 North Tower 1F</p>
                 <a href="https://www.google.com/maps/search/?api=1&query=Shake+Shack+Roppongi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
             </div>
             <div className="bg-white p-3 rounded-lg shadow-sm mt-2 border border-green-100">
                 <div className="text-xs text-green-800 font-bold mb-1">🍔 推薦必吃 (平板中文點餐)</div>
                 <ul className="text-xs text-gray-600 space-y-1">
                     <li>• ShackBurger (經典招牌)</li>
                     <li>• Cheese Fries (起司薯條)</li>
                     <li>• Holiday Shake (聖誕限定奶昔)</li>
                 </ul>
             </div>
          </TimelineItem>

          <TimelineItem time="20:15" dotColor="bg-yellow-500">
             <h3 className="text-lg font-bold text-gray-800">東京中城 (Tokyo Midtown)</h3>
             <p className="text-xs text-gray-500 mt-1">雙燈飾巡禮 Part 2 (步行 10 分鐘)</p>
             <div className="mt-2 flex gap-2 mb-3">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Tokyo+Midtown+Roppongi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 地圖導航
                 </a>
             </div>

             <div className="bg-[#1a1a1a] text-gray-200 p-4 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500 opacity-10 rounded-bl-full"></div>
                <h4 className="text-sm font-bold text-yellow-400 mb-3 tracking-widest border-b border-gray-700 pb-2">三大必看亮點</h4>
                <ul className="space-y-4 text-xs">
                    <li className="flex items-start gap-2">
                        <span className="text-yellow-500 text-sm font-bold">A.</span>
                        <div>
                            <span className="font-bold text-white block mb-0.5">光之散步道 & 泡泡雪花秀</span>
                            <span className="text-gray-400 block mb-1">Midtown Garden 戶外花園</span>
                            <p>金黃色 LED 燈海。每 6-10 分鐘噴出肥皂泡泡，如降雪般浪漫！</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-yellow-500 text-sm font-bold">B.</span>
                        <div>
                            <span className="font-bold text-white block mb-0.5">聖誕老人樹</span>
                            <span className="text-gray-400 block mb-1">Galleria 1F 中庭</span>
                            <p>約 1,800 個迷你聖誕老人玩偶堆疊而成，尋找隱藏版角色！</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-yellow-500 text-sm font-bold">C.</span>
                        <div>
                            <span className="font-bold text-white block mb-0.5">戶外溜冰場</span>
                            <span className="text-gray-400 block mb-1">芝生廣場</span>
                            <p>東京最大戶外溜冰場之一，被金色燈海包圍。</p>
                        </div>
                    </li>
                </ul>
             </div>
          </TimelineItem>

          <TimelineItem time="21:00" isLast={true}>
             <h3 className="text-lg font-bold text-gray-800">散步回飯店</h3>
             <p className="text-xs text-gray-500 mt-1">就在斜對面 · 步行 5-8 分鐘</p>
             <p className="text-sm text-gray-600 mt-2">
                 看完最後一場燈光秀，過個馬路就能回到 REMM 六本木，完美結束這一天。
             </p>
          </TimelineItem>

          <TimelineItem time="Note" dotColor="bg-gray-400" isLast={true}>
              <h3 className="text-base font-bold text-gray-500">行程小提醒</h3>
              <div className="bg-gray-50 p-4 rounded-lg mt-2 border-l-4 border-gray-300">
                  <ul className="space-y-2 text-xs text-gray-600">
                      <li className="flex items-start gap-2">
                          <span className="text-gray-800 font-bold">🍓 鈴懸大福：</span>
                          <span>限量亮點，午餐後務必先買。</span>
                      </li>
                      <li className="flex items-start gap-2">
                          <span className="text-gray-800 font-bold">🏢 展望台：</span>
                          <span>森JP塔入口在 1F，不收現金。</span>
                      </li>
                      <li className="flex items-start gap-2">
                          <span className="text-gray-800 font-bold">🧣 保暖：</span>
                          <span>傍晚櫸坂通風大，備圍巾帽子。</span>
                      </li>
                  </ul>
              </div>
          </TimelineItem>

        </div>
      </>
    );
  }

  // Day 4 Content (12/09) - Mount Fuji Day Trip
  if (selectedDate === '09') {
    return (
      <>
        {/* Hero Image - Day 4 */}
        <div className="w-full h-40 rounded-xl overflow-hidden relative mb-8 shrink-0 shadow-sm group">
          <img 
            src="https://djbcard.com/wp-content/uploads/2025/04/autumn-season-mountain-fuji-kawaguchiko-lake-japan-1024x575.jpg" 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
            style={{ objectPosition: 'center 40%' }}
            alt="Mount Fuji"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
            <div className="flex items-center gap-2 mb-1 opacity-95">
                <span className="border border-white/70 px-2 py-0.5 text-xs tracking-widest rounded-sm font-medium">DAY 4</span>
                <span className="text-xs tracking-wider font-medium">河口湖 · 藝文散策</span>
            </div>
            <h2 className="text-2xl font-bold tracking-widest mb-1">富士山の日</h2>
            <p className="text-xs tracking-wide opacity-90 font-medium">絕美湖景與美術館的慢活時光 🗻</p>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
            <div className="grid grid-cols-3 gap-3">
                <a 
                    href="https://isfujivisible.com/zh-Hant" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 hover:shadow-md transition-all active:scale-95"
                >
                    <img src="https://isfujivisible.com/images/favicon/favicon.svg" alt="Fuji" className="w-5 h-5" />
                    <span className="text-xs font-bold text-gray-700">本週富士山能見度</span>
                </a>
                <a 
                    href="https://www.fujikyubus.co.jp/pdf/shuyu/omni_map_202509.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 hover:shadow-md transition-all active:scale-95"
                >
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                    <span className="text-xs font-bold text-gray-700">河口湖周遊巴士路線</span>
                </a>
                <a 
                    href="https://www.fujikyubus.co.jp/shuyu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 hover:shadow-md transition-all active:scale-95"
                >
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                    <span className="text-xs font-bold text-gray-700"><span className="bg-red-100 text-red-800 px-1 rounded text-[10px] font-bold">紅線</span> 周遊巴士班次表</span>
                </a>                
            </div>
        </div>

        <FujiTripNotesCard />

        <TrainScheduleCard />

        <TicketStrategyCard />

        {/* Timeline Events - Day 4 */}
        <div className="space-y-0 relative">

          <TimelineItem time="07:00">
             <h3 className="text-lg font-bold text-gray-800">出發！前往新宿</h3>
             <p className="text-xs text-gray-500 mt-1">在飯店左斜方對面的【都營大江戶線】六本木站搭車， <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA進站</span> (六本木站 ➜ 新宿站，乘車約15分鐘內)，刷 <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA出站</span> 後，從都營線尋找綠色「ＪＲ」指標跟著往JR新宿的方向走！接近JR新宿時，找藍色的「中央特級線9、10月台」指標！</p>
             <ShinjukuTransferCard />
          </TimelineItem>

          <TimelineItem time="08:00" dotColor="bg-blue-600">
             <h3 className="text-lg font-bold text-gray-800">JR 新宿站 (Shinjuku)</h3>
             <p className="text-xs text-gray-500 mt-1">抵達JR新宿站後 <span className="bg-blue-100 text-blue-800 px-1 rounded text-[10px] font-bold">兩張紙本票進站</span> 在藍色的「中央線本線」的9、10號月台搭乘 · 特急 Azusa 5號</p>
             
             <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mt-2 mb-2 flex justify-between items-center shadow-sm">
                <div>
                    <div className="text-[10px] text-blue-500 font-bold uppercase tracking-wider mb-0.5">OUTBOUND</div>
                    <div className="text-base font-bold text-blue-900">08:00 新宿 <span className="text-xs font-normal text-blue-400">➜</span> 09:01 大月</div>
                </div>
                <div className="text-right">
                     <span className="bg-blue-200 text-blue-800 text-[10px] px-2 py-0.5 rounded font-bold">指定席</span>
                     <div className="text-[10px] text-blue-500 mt-0.5">Azusa 5號</div>
                </div>
             </div>
             <p className="text-xs text-gray-500 mt-1 pl-1 border-l-2 border-gray-300">
                註：<span className="text-red-600 font-bold">中央線特急專用9、10月台</span>，務必抬頭看電子看板確認。
             </p>
          </TimelineItem>

          <TimelineItem time="09:01" dotColor="bg-yellow-500">
             <h3 className="text-lg font-bold text-gray-800">抵達 大月站 (Otzuki)</h3>
             <p className="text-xs text-gray-500 mt-1"> <span className="bg-blue-100 text-blue-800 px-1 rounded text-[10px] font-bold">兩張紙本票出站</span> 前往搭乘富士急行線 Fujiku Railway，當地的普通區間車，要轉乘時需用 <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA進站</span> </p>
             <div className="text-xs text-gray-600 mt-1 font-medium">！最近的普通車班次 09:16 大月站發車，以現場班次為準</div>
             <div className="bg-red-100 text-red-700 px-2 py-1 rounded font-bold text-xs inline-block mt-1">!! 大月到河口湖之間，SUICA只能搭LOCAL普通車 !!</div>
             <OtsukiTransferCard />
          </TimelineItem>

          <TimelineItem time="10:15">
             <h3 className="text-lg font-bold text-gray-800">抵達 河口湖站</h3>
             <p className="text-xs text-gray-500 mt-1"> <span className="bg-green-100 text-green-800 px-1 rounded text-[10px] font-bold">SUICA出站</span> 購買周遊巴士一日券(SUICA上下車刷也可以)</p>
             <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mt-2 text-xs text-gray-600">
                <span className="font-bold text-red-600">！！任務：</span> 至導覽櫃台拿巴士班次表，並購買「周遊巴士 1日乘車票 (紅線)」。
             </div>
          </TimelineItem>

          <TimelineItem time="10:45" dotColor="bg-red-500">
             <h3 className="text-lg font-bold text-gray-800">大石公園 (Oishi Park)</h3>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Oishi+Park+Kawaguchiko" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 地圖導航
                 </a>
             </div>
             <div className="mt-2 text-xs text-gray-600 leading-relaxed">
                 <span className="font-bold">📸 必拍：</span> 富士山 + 河口湖最經典角度。<br/>
                 <span className="font-bold">🍦 必吃：</span> 藍莓冰淇淋 (遊客中心)。
             </div>
          </TimelineItem>

          <TimelineItem time="12:00">
             <h3 className="text-lg font-bold text-gray-800">午餐：Houtou Fudou</h3>
             <p className="text-xs text-gray-500 mt-1">不動茶屋 · 河口湖北本店</p>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://maps.app.goo.gl/sample" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 地圖導航
                 </a>
             </div>
             <p className="text-xs text-gray-600 mt-2">
                必吃鄉土料理「餺飥麵 (Houtou)」，Q彈寬麵配南瓜味噌湯底。從大石公園步行約 5-10 分鐘。
             </p>
          </TimelineItem>

          <TimelineItem time="13:30" dotColor="bg-purple-600">
             <h3 className="text-lg font-bold text-gray-800">久保田一竹美術館</h3>
             <p className="text-xs text-gray-500 mt-1">米其林三星景點</p>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kubota+Itchiku+Art+Museum" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 地圖導航
                 </a>
             </div>
             <div className="bg-purple-50 p-3 rounded-lg mt-2 border border-purple-100 text-xs text-purple-900 leading-relaxed">
                 展示傳奇染織家的「辻街花」和服作品。建築與庭園融合富士山景，彷彿異世界。
             </div>
          </TimelineItem>

           <TimelineItem time="15:00">
             <h3 className="text-lg font-bold text-gray-800">音樂盒之森美術館</h3>
             <p className="text-xs text-gray-500 mt-1">Music Forest Museum</p>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kawaguchiko+Music+Forest+Museum" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 地圖導航
                 </a>
             </div>
             <p className="text-xs text-gray-600 mt-2">
                中世紀歐洲庭園風格，有世界級自動演奏樂器表演。玫瑰花園看富士山非常浪漫。
             </p>
          </TimelineItem>

          <TimelineItem time="16:00">
             <h3 className="text-lg font-bold text-gray-800">返回 河口湖站</h3>
             <p className="text-xs text-gray-500 mt-1">逛逛 Gateway Fujiyama 買伴手禮</p>
             <a 
                href="https://maps.app.goo.gl/VSRDi3Lpn8bffxVt9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between px-4 hover:shadow-md transition-all active:scale-95 mt-3"
            >
                 <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-xs font-bold text-gray-700">河口湖站➜大月站 導航看班次</span>
                 </div>
                 <span className="text-[10px] text-red-600 font-bold bg-red-50 px-2 py-1 rounded border border-red-100">搭普通車</span>
            </a>
          </TimelineItem>

          <TimelineItem time="16:18" dotColor="bg-blue-600">
             <h3 className="text-lg font-bold text-gray-800">搭車返程</h3>
             <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                 <div className=" font-bold text-gray-800">在河口湖站 <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[10px]">刷Suica進站</span>搭乘富士急行線回到大月站(可能約16:18 河口湖 ➜ 17:19 大月，實際班次依照現場拍照時刻表為準，或開啟GOOGLE導航看班次)</div>
                 <div className="inline-block bg-red-100 text-black font-bold px-1 rounded mt-0.5">!!!只能搭普通車(電子時刻表灰黑色LOCAL)!!!</div>                 
                 <div>. </div>
                 <div>在大月站 <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[10px]">刷Suica出站</span>，並轉乘時使用 <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-[10px]">兩張紙本票進站</span>到轉乘月台等AZUSA高鐵回新宿</div>
             </div>
             
             <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mt-2 mb-2 flex justify-between items-center shadow-sm">
                <div>
                    <div className="text-[10px] text-blue-500 font-bold uppercase tracking-wider mb-0.5">INBOUND</div>
                    <div className="text-base font-bold text-blue-900">17:45 大月 <span className="text-xs font-normal text-blue-400">➜</span> 18:43 新宿</div>
                </div>
                <div className="text-right">
                     <span className="bg-blue-200 text-blue-800 text-[10px] px-2 py-0.5 rounded font-bold">指定席</span>
                     <div className="text-[10px] text-blue-500 mt-0.5">Azusa 44</div>
                </div>
             </div>
          </TimelineItem>

          <TimelineItem time="19:15" isLast={true}>
             <h3 className="text-lg font-bold text-gray-800">抵達六本木</h3>
             <p className="text-xs text-gray-500 mt-1">抵達JR新宿站後，使用 <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-[10px]">兩張紙本票出站</span>，並且沿指示回到都營大江戶線  <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[10px]">刷Suica進站</span> 搭乘地鐵回到六本木站，如果SUICA進站有問題就找站務人員，給他看手機SUICA(手機電源點兩下叫出卡片)並告知我們上一趟是從河口湖站到大月站。</p>
          </TimelineItem>

        </div>
      </>
    );
  }

  // Day 5 Content (12/10) - Moving to Oshiage
  if (selectedDate === '10') {
    return (
      <>
        {/* Hero Image - Day 5 */}
        <div className="w-full h-40 rounded-xl overflow-hidden relative mb-8 shrink-0 shadow-sm group">
          <img 
            src="https://image.cdn-eztravel.com.tw/41RxYX-9rVxrXnx9mL7c9LVZv6WWTfwfeMhLnmmoxKQ/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L3BvaS9qcC9UWU8vVGhlIE5hdGlvbmFsIEFydCBDZW50ZXIvc2h1dHRlcnN0b2NrXzE2ODM0MTExNy5qcGc.jpg" 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
            style={{ objectPosition: 'center 60%' }}
            alt="Tokyo City"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
            <div className="flex items-center gap-2 mb-1 opacity-95">
                <span className="border border-white/70 px-2 py-0.5 text-xs tracking-widest rounded-sm font-medium">DAY 5</span>
                <span className="text-xs tracking-wider font-medium">六本木 · 表參道 · 押上</span>
            </div>
            <h2 className="text-2xl font-bold tracking-widest mb-1">城市移動日</h2>
            <p className="text-xs tracking-wide opacity-90 font-medium">藝術建築巡禮與晴空塔之夜 🌃</p>
          </div>
        </div>

        {/* Timeline Events - Day 5 */}
        <div className="space-y-0 relative">

          <TimelineItem time="10:30">
             <h3 className="text-lg font-bold text-gray-800">REMM 六本木退房</h3>
             <p className="text-xs text-gray-500 mt-1">寄放行李於櫃檯</p>
             <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded border border-gray-200">
                 👟 今日步行較多，建議輕裝出發，穿好走的鞋子。
             </div>
          </TimelineItem>

          <TimelineItem time="10:45">
             <h3 className="text-lg font-bold text-gray-800">國立新美術館</h3>
             <p className="text-xs text-gray-500 mt-1">The National Art Center</p>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=The+National+Art+Center+Tokyo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 地圖導航
                 </a>
             </div>
             <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                欣賞黑川紀章設計的波浪狀玻璃帷幕 (《你的名字》取景地)。穿過東京中城旁的檜町公園步行約 10 分鐘。
             </p>
             
             <div className="mt-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                 <div className="flex justify-between items-center mb-1">
                     <span className="font-bold text-gray-800 text-xs">☕ Salon de Thé ROND (2F)</span>
                     <a href="https://www.google.com/maps/search/?api=1&query=Salon+de+Thé+ROND" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
                 </div>
                 <p className="text-xs text-gray-500">飄浮在空中的圓形咖啡座。免門票，享受早晨藝術氛圍。</p>
             </div>
          </TimelineItem>

          <TimelineItem time="12:15">
             <h3 className="text-lg font-bold text-gray-800">移動：六本木 ➜ 表參道</h3>
             <div className="text-xs text-gray-600 mt-1 bg-gray-50 p-2 rounded inline-block">
                 美術館直通 <span className="font-bold">乃木坂站</span> ➜ 千代田線 (1站) ➜ <span className="font-bold">表參道站</span>
             </div>
          </TimelineItem>

          <TimelineItem time="12:30">
             <h3 className="text-lg font-bold text-gray-800">表參道散策 & 午餐</h3>
             <p className="text-xs text-gray-500 mt-1">東京最美街道 · 櫸木林燈飾</p>
             <div className="mt-3 space-y-2">
                 <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                     <div className="flex justify-between items-center mb-1">
                         <span className="font-bold text-gray-800 text-xs">🍽️ 舞泉豬排 青山本店</span>
                         <a href="https://www.google.com/maps/search/?api=1&query=Tonkatsu+Maisen+Aoyama" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-gray-500">老澡堂改建的傳奇炸豬排店。</p>
                 </div>
                 <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                     <div className="flex justify-between items-center mb-1">
                         <span className="font-bold text-gray-800 text-xs">🍽️ Napule 南青山</span>
                         <a href="https://www.google.com/maps/search/?api=1&query=Napule+Minami+Aoyama" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-gray-500">東京評價極高的窯烤披薩。</p>
                 </div>
             </div>
          </TimelineItem>

          <TimelineItem time="14:30">
             <h3 className="text-lg font-bold text-gray-800">渋谷：潮流新地標</h3>
             <p className="text-xs text-gray-500 mt-1">沿著 Cat Street 散步 (約15分)</p>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Miyashita+Park" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 宮下公園
                 </a>
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Shibuya+Scramble+Crossing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 澀谷十字路口
                 </a>
             </div>
          </TimelineItem>

          <TimelineItem time="16:00" dotColor="bg-blue-500">
             <h3 className="text-lg font-bold text-gray-800">青之洞窟 (Blue Grotto)</h3>
             <p className="text-xs text-gray-500 mt-1">✨ 聖誕必看：藍色LED隧道</p>
             <div className="mt-2 flex gap-2">
                 <a 
                    href="https://www.google.com/maps/search/?api=1&query=Shibuya+Blue+Grotto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] hover:bg-gray-200"
                 >
                    📍 地圖導航
                 </a>
             </div>
             <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                17:00 點燈。渋谷公園通 ➜ 代代木公園櫸木林蔭道。夢幻藍色隧道，一路延伸至原宿，非常順路。
             </p>
          </TimelineItem>

          <TimelineItem time="17:30">
             <h3 className="text-lg font-bold text-gray-800">原宿：新舊交融</h3>
             <div className="mt-3 space-y-2">
                 <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                     <div className="flex justify-between items-center mb-1">
                         <span className="font-bold text-gray-800 text-xs">東急 Plaza 原宿「Harakado」</span>
                         <a href="https://www.google.com/maps/search/?api=1&query=Tokyu+Plaza+Harajuku+Harakado" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-gray-500">2024 新開幕地標，鑽石切面外牆，頂樓可俯瞰十字路口。</p>
                 </div>
                 <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                     <div className="flex justify-between items-center mb-1">
                         <span className="font-bold text-gray-800 text-xs">WITH HARAJUKU</span>
                         <a href="https://www.google.com/maps/search/?api=1&query=WITH+HARAJUKU" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><span className="text-xs">📍</span></a>
                     </div>
                     <p className="text-xs text-gray-500">UNIQLO、IKEA 原宿店，適合快速補貨。</p>
                 </div>
             </div>
          </TimelineItem>

          <TimelineItem time="18:30">
             <h3 className="text-lg font-bold text-gray-800">移動：原宿 ➜ 六本木</h3>
             <div className="text-xs text-gray-600 mt-1 bg-gray-50 p-2 rounded inline-block">
                 明治神宮前〈原宿〉站 ➜ 千代田線 ➜ <span className="font-bold">乃木坂站</span>
             </div>
             <p className="text-xs text-gray-500 mt-1 ml-1">出站步行約 8 分鐘回飯店。</p>
          </TimelineItem>

          <TimelineItem time="19:00">
             <h3 className="text-lg font-bold text-gray-800">REMM 六本木取行李</h3>
             <p className="text-xs text-gray-500 mt-1">整理儀容、上洗手間</p>
          </TimelineItem>

          <TimelineItem time="19:15" dotColor="bg-yellow-500">
             <h3 className="text-lg font-bold text-gray-800">計程車移動 ➜ 押上</h3>
             <TaxiCard />
          </TimelineItem>

          <TimelineItem time="20:00">
             <h3 className="text-lg font-bold text-gray-800">抵達押上 & 聖誕晚餐</h3>
             <p className="text-xs text-gray-500 mt-1">Check-in & 東京晴空塔城 Solamachi</p>
             
             <OshiageHotelCard />

             <div className="mt-3 bg-white p-4 rounded-lg shadow-sm space-y-3">
                <p className="text-xs text-gray-500 mb-1 tracking-widest border-b border-gray-100 pb-2">晚餐推薦 (Solamachi 6F)</p>
                
                <div className="group">
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=Rokurinsha+Tokyo+Solamachi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-bold text-gray-800 group-hover:text-red-800 transition-colors text-sm"
                    >
                        <span className="text-red-800 text-sm">♥</span>
                        <span>六厘舍 (沾麵)</span>
                        <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span>
                    </a>
                </div>

                <div className="group">
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=Toriton+Sushi+Solamachi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-bold text-gray-800 group-hover:text-red-800 transition-colors text-sm"
                    >
                         <span className="text-red-800 text-sm">♥</span>
                         <span>回転寿し トリトン (迴轉壽司)</span>
                         <span className="text-[10px] text-gray-400 font-normal ml-1">📍</span>
                    </a>
                </div>
                
                <div className="bg-yellow-50 p-2 rounded text-xs text-gray-600 mt-2">
                    <span className="font-bold text-yellow-700">🎄 聖誕彩蛋：</span>
                    晴空塔下方廣場 (Sky Arena) 有聖誕市集與燈光秀，吃飽後可散步欣賞。
                </div>
            </div>
          </TimelineItem>

        </div>
      </>
    );
  }

  return <div>Select a date</div>;
};

const InfoView = () => (
    <div className="space-y-5 pt-3">
        {/* Google Map Button */}
        <a 
            href="https://www.google.com/maps/d/viewer?mid=1fNq5pjMAGuwb_TTccTN2DVsjoqCbQfs&ll=35.68624057131097%2C139.7719855&z=12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 text-white rounded-xl p-4 shadow-lg flex items-center justify-center gap-3 transform transition-all active:scale-95 hover:bg-emerald-700 hover:shadow-xl"
        >
            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="font-bold text-base tracking-wider">開啟我的 Google 導覽地圖</span>
        </a>

        {/* Visit Japan Web Card */}
        <div className="bg-gradient-to-r from-[#222] to-[#333] rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-[#A63C4F] text-white text-[10px] px-3 py-1 rounded-br-lg font-bold tracking-widest">MUST HAVE</div>
            <div className="flex justify-between items-center mt-4">
                <div>
                    <h2 className="text-2xl font-serif mb-1">Visit Japan Web</h2>
                    <p className="text-xs text-gray-300 tracking-wide">入境審查 & 海關申報 (請截圖 QR Code)</p>
                </div>
                <a 
                    href="https://www.vjw.digital.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            </div>
        </div>

        {/* Travel Note Section */}
        <div className="bg-white rounded-xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border-t-4 border-[#C1A47E]">
            <h3 className="text-sm font-bold text-[#C1A47E] tracking-[0.2em] mb-3 uppercase">TRAVEL NOTE</h3>
            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                    <span className="text-[#C1A47E] font-black text-base shrink-0 leading-none mt-0.5">.ᐟ</span>
                    <span>在LINE群組記事本可查看電子機票</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-[#C1A47E] font-black text-base shrink-0 leading-none mt-0.5">.ᐟ</span>
                    <span>入境時打開VISIT JAPAN WEB的QRCODE畫面(或可以先截圖)</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-[#C1A47E] font-black text-base shrink-0 leading-none mt-0.5">.ᐟ</span>
                    <span>隨身攜帶護照、證件、購物袋、小袋子裝垃圾</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-[#C1A47E] font-black text-base shrink-0 leading-none mt-0.5">.ᐟ</span>
                    <span>電車上手機要靜音、不可講話(或小小聲)</span>
                </li>
            </ul>
        </div>

        {/* Emergency Section */}
        <div>
            <div className="flex items-center gap-2 mb-3 text-[#8B2323]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <h3 className="font-bold tracking-widest text-sm">緊急聯絡 & 支援</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 text-center">
                    <div className="text-xs text-[#8B2323] font-bold mb-1 tracking-widest">警察 (POLICE)</div>
                    <div className="text-2xl font-serif text-[#8B2323]">110</div>
                </div>
                <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 text-center">
                    <div className="text-xs text-[#8B2323] font-bold mb-1 tracking-widest">救護/火警</div>
                    <div className="text-2xl font-serif text-[#8B2323]">119</div>
                </div>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 mb-3 flex justify-between items-center">
                <div>
                    <div className="text-sm font-bold text-gray-900 mb-1">訪日外國人<br/>醫療 & 急難熱線</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Japan Visitor Hotline (JNTO)</div>
                    <div className="text-lg font-bold text-gray-800 tracking-wider">050-3816-2787</div>
                </div>
                <a href="tel:05038162787" className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </a>
            </div>
             <p className="text-xs text-gray-400 mb-6">* 24小時對應 (英/中/韓)。生病受傷或發生事故時可撥打。</p>

             <div className="bg-[#EAE8E6] rounded-lg p-5">
                 <div className="inline-block bg-[#D3D0CD] text-gray-600 text-[10px] px-2 py-0.5 rounded-sm font-bold mb-2">外交部</div>
                 <h3 className="font-bold text-gray-800 mb-3 text-lg">台北駐日經濟文化代表處</h3>
                 <div className="space-y-2 text-sm text-gray-700">
                     <div className="flex justify-between items-center border-b border-gray-300 pb-2 border-dashed">
                         <span>03-3280-7111 <span className="text-xs text-gray-500 ml-1"> (上班時間)</span></span>
                     </div>
                     <div className="flex justify-between items-center text-[#8B2323] font-bold">
                         <span>080-1009-7179 <span className="text-xs ml-1 opacity-70"> (急難救助)</span></span>
                     </div>
                 </div>
             </div>
        </div>
    </div>
);

const VocabItem = ({ zh, jp, isOpen, onToggle }: { zh: string; jp: string; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div 
      onClick={onToggle}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer transition-all duration-200 active:scale-[0.99]"
    >
      <div className="p-4 flex justify-between items-center bg-white relative z-10">
        <h3 className={`font-bold text-lg transition-colors ${isOpen ? 'text-red-800' : 'text-gray-800'}`}>
            {zh}
        </h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-gray-400`}>
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </div>
      
      {/* Sliding Animation Wrapper */}
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
              <div className="bg-gray-50 p-6 border-t border-gray-100 text-center">
                 <p className="text-2xl font-bold text-gray-900 leading-snug break-words font-sans">
                    {jp}
                 </p>
              </div>
          </div>
      </div>
    </div>
  );
};

const VocabView = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const cards = [
        { zh: "我來自台灣", jp: "台湾から来ました" },
        { zh: "不好意思，能問路嗎？", jp: "すみません、道を教えていただけますか？" },
        { zh: "請問可以試穿嗎？", jp: "試着できますか？" },
        { zh: "2位，沒有預約", jp: "2人いるんですが、まだ予約をしていません。" },
        { zh: "不好意思，請問有英文或中文菜單嗎？", jp: "すみません、台湾語か英語のメニューはありますか？" }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(prev => prev === index ? null : index);
    };

    return (
        <div className="space-y-4 pt-2 pb-10">
            {cards.map((card, idx) => (
                <VocabItem 
                    key={idx} 
                    zh={card.zh} 
                    jp={card.jp} 
                    isOpen={openIndex === idx}
                    onToggle={() => handleToggle(idx)}
                />
            ))}
             <div className="text-center mt-6 text-gray-400 text-xs tracking-widest opacity-60">
                點擊卡片 ‧ 顯示日文
             </div>
        </div>
    );
};

const App = () => {
  const [currentView, setCurrentView] = useState<'timeline' | 'info' | 'vocab'>('timeline');
  const [selectedDate, setSelectedDate] = useState('06');

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    setCurrentView('timeline');
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#F9F9F7] text-[#333] font-['Shippori_Mincho'] selection:bg-red-100">
      
      {/* Header Section */}
      <header className="pt-6 text-center z-10 bg-[#F9F9F7] shrink-0">
        <div className="flex flex-col items-center justify-center mb-4 px-4">
            <div className="text-xs tracking-[0.25em] text-slate-500 font-medium mb-2 uppercase">
                KAOHSIUNG <span className="mx-1">⇄</span> TOKYO
            </div>
            <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-800 tracking-wider">日本 · 東京</h1>
                <span className="border border-slate-400 text-slate-500 text-xs px-3 py-0.5 rounded-full tracking-wider">2025</span>
            </div>
        </div>
        
        {/* Date Navigation */}
        <div className="flex items-center w-full border-b border-gray-200 pb-2 px-4">
            <div className="flex overflow-x-auto no-scrollbar space-x-6 text-gray-400 flex-1 pr-4">
            <div 
                className={`flex flex-col items-center min-w-[30px] cursor-pointer shrink-0 transition-all ${currentView === 'timeline' && selectedDate === '06' ? 'text-red-900 font-bold border-b-2 border-red-800 pb-1' : 'opacity-40 hover:opacity-70'}`}
                onClick={() => handleDateClick('06')}
            >
                <span className="text-[10px] tracking-widest">SAT</span>
                <span className="text-lg">06</span>
            </div>
            <div 
                className={`flex flex-col items-center min-w-[30px] cursor-pointer shrink-0 transition-all ${currentView === 'timeline' && selectedDate === '07' ? 'text-red-900 font-bold border-b-2 border-red-800 pb-1' : 'opacity-40 hover:opacity-70'}`}
                onClick={() => handleDateClick('07')}
            >
                <span className="text-[10px] tracking-widest">SUN</span>
                <span className="text-lg">07</span>
            </div>
            <div 
                className={`flex flex-col items-center min-w-[30px] cursor-pointer shrink-0 transition-all ${currentView === 'timeline' && selectedDate === '08' ? 'text-red-900 font-bold border-b-2 border-red-800 pb-1' : 'opacity-40 hover:opacity-70'}`}
                onClick={() => handleDateClick('08')}
            >
                <span className="text-[10px] tracking-widest">MON</span>
                <span className="text-lg">08</span>
            </div>
            <div 
                className={`flex flex-col items-center min-w-[30px] cursor-pointer shrink-0 transition-all ${currentView === 'timeline' && selectedDate === '09' ? 'text-red-900 font-bold border-b-2 border-red-800 pb-1' : 'opacity-40 hover:opacity-70'}`}
                onClick={() => handleDateClick('09')}
            >
                <span className="text-[10px] tracking-widest">TUE</span>
                <span className="text-lg">09</span>
            </div>
            <div 
                className={`flex flex-col items-center min-w-[30px] cursor-pointer shrink-0 transition-all ${currentView === 'timeline' && selectedDate === '10' ? 'text-red-900 font-bold border-b-2 border-red-800 pb-1' : 'opacity-40 hover:opacity-70'}`}
                onClick={() => handleDateClick('10')}
            >
                <span className="text-[10px] tracking-widest">WED</span>
                <span className="text-lg">10</span>
            </div>
            <div className="flex flex-col items-center min-w-[30px] opacity-40 cursor-pointer hover:opacity-70 transition-opacity shrink-0">
                <span className="text-[10px] tracking-widest">THU</span>
                <span className="text-lg">11</span>
            </div>
            <div className="flex flex-col items-center min-w-[30px] opacity-40 cursor-pointer hover:opacity-70 transition-opacity shrink-0">
                <span className="text-[10px] tracking-widest">FRI</span>
                <span className="text-lg">12</span>
            </div>
            <div className="flex flex-col items-center min-w-[30px] opacity-40 cursor-pointer hover:opacity-70 transition-opacity shrink-0">
                <span className="text-[10px] tracking-widest">SAT</span>
                <span className="text-lg">13</span>
            </div>
            </div>

            {/* Separator */}
            <div className="h-8 w-[1px] bg-gray-200 mx-2 shrink-0"></div>

            {/* Extra Tools */}
            <div className="flex space-x-4 pl-2 shrink-0">
                <div 
                    className={`flex flex-col items-center justify-between h-full cursor-pointer transition-colors group ${currentView === 'vocab' ? 'text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}
                    onClick={() => setCurrentView('vocab')}
                >
                     <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                     <span className="text-[10px] font-bold">詞</span>
                </div>
                <div 
                    className={`flex flex-col items-center justify-between h-full cursor-pointer transition-colors group ${currentView === 'info' ? 'text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}
                    onClick={() => setCurrentView('info')}
                >
                     <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     <span className="text-[10px] font-bold">訊</span>
                </div>
            </div>
        </div>
      </header>

      {/* Main Content Scrollable Area */}
      <main className="flex-1 overflow-y-auto px-5 pt-5 pb-20 relative no-scrollbar">
        {currentView === 'timeline' && <TimelineView selectedDate={selectedDate} />}
        {currentView === 'info' && <InfoView />}
        {currentView === 'vocab' && <VocabView />}
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);