import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Calendar as CalendarIcon, 
  Users, 
  CircleDollarSign, 
  Settings, 
  Search, 
  Plus, 
  Trash2, 
  MessageSquare, 
  Link2, 
  ChevronRight,
  Lock,
  FileText,
  Download,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

export default function SystemMockupShowcase() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'agenda' | 'pacientes' | 'financeiro'>('inicio');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Custom states for interactive demo
  const [marceloStatus, setMarceloStatus] = useState<'agendar' | 'agendado'>('agendar');
  const [gabrielStatus, setGabrielStatus] = useState<'agendar' | 'agendado'>('agendar');
  const [geanStatus, setGeanStatus] = useState<'agendar' | 'agendado'>('agendar');

  // Patients list matching Screenshot 5 exactly
  const patientsList = useMemo(() => [
    { id: 1, name: 'Roberto carlos', status: 'urgente', text: 'Agende restauracao no dente 24.', initials: 'R', accentColor: 'border-l-4 border-[#F87171]' },
    { id: 2, name: 'Moacir Gonçalves', status: 'atencao', text: 'Está sem acompanhamento definido.', initials: 'M', accentColor: 'border-l-4 border-[#FBBF24]' },
    { id: 3, name: 'Gean cardoso', status: 'atencao', text: 'Está sem acompanhamento definido.', initials: 'G', accentColor: 'border-l-4 border-[#FBBF24]' },
    { id: 4, name: 'Marcelo Lima', status: 'atencao', text: 'Está sem acompanhamento definido.', initials: 'M', accentColor: 'border-l-4 border-[#FBBF24]' },
    { id: 5, name: 'Gabriel Moreira', status: 'atencao', text: 'Está sem acompanhamento definido.', initials: 'G', accentColor: 'border-l-4 border-[#FBBF24]' },
    { id: 6, name: 'Maria Roberta', status: 'todos', text: 'Último atendimento há 1 mês.', initials: 'M', accentColor: 'border-l-4 border-slate-300' },
    { id: 7, name: 'Ricardo Avelar', status: 'todos', text: 'Último atendimento há 1 mês.', initials: 'R', accentColor: 'border-l-4 border-slate-300' },
    { id: 8, name: 'Silvio Santos', status: 'todos', text: 'Último atendimento há 1 mês.', initials: 'S', accentColor: 'border-l-4 border-slate-300' },
    { id: 9, name: 'Ricardo', status: 'todos', text: 'Último atendimento há 1 mês.', initials: 'R', accentColor: 'border-l-4 border-slate-300' },
    { id: 10, name: 'José Ribeiro', status: 'todos', text: 'Último atendimento há 4 semanas.', initials: 'J', accentColor: 'border-l-4 border-slate-300' },
  ], []);

  // Filter patients based on query matching Screenshot 5
  const filteredPatients = useMemo(() => {
    return patientsList.filter(p => {
      const query = searchQuery.toLowerCase();
      return p.name.toLowerCase().includes(query) || p.text.toLowerCase().includes(query);
    });
  }, [patientsList, searchQuery]);

  return (
    <div className="w-full max-w-5xl mx-auto my-8 px-4 sm:px-0">
      {/* Interactive Mockup Window with chrome skin */}
      <div className="bg-slate-950 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-800 overflow-hidden">
        
        {/* Browser Tabs/Top Bar */}
        <div className="bg-[#1E293B] px-4 pt-3 pb-2 flex flex-col gap-2 select-none border-b border-slate-800">
          <div className="flex items-center justify-between">
            {/* Window control circles */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/90 inline-block" />
            </div>
            {/* Chrome Tabs mockup matching Screenshot 1 */}
            <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 max-w-full overflow-x-auto scrollbar-none pl-4 shrink-0">
              <div className="hidden lg:block px-3 py-1.5 bg-slate-800/40 rounded-t-lg truncate max-w-[150px] opacity-60">OdontoHub Academy</div>
              <div className="hidden sm:block px-3 py-1.5 bg-slate-800/40 rounded-t-lg truncate max-w-[150px] opacity-60">OdontoHub — O Software</div>
              <div className="hidden md:block px-3 py-1.5 bg-slate-800/40 rounded-t-lg truncate max-w-[150px] opacity-60">OdontoHub | Google AI Studio</div>
              <div className="px-3.5 py-1.5 bg-[#FAF9F5] text-slate-800 rounded-t-lg truncate max-w-[170px] font-semibold shadow-xs flex items-center gap-1 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                OdontoHub Sistema
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-bold hidden md:block">OdontoHub Engine v1.4</div>
          </div>

          {/* Browser Address Bar */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-4 py-1.5 bg-slate-800/90 text-slate-400 rounded-md text-[11px] font-semibold font-mono w-full max-w-lg shadow-inner">
              <Lock size={11} className="text-emerald-500 shrink-0" />
              <span className="text-slate-300">sistema.odontohub.app.br</span>
            </div>
          </div>
        </div>

        {/* Live Simulator Viewport */}
        <div className="bg-[#FAFCFB] h-[580px] sm:h-[680px] md:h-[750px] flex flex-col relative overflow-hidden text-[#1F2937]">
          
          {/* Main Workspace Area with tab navigation views */}
          <div className="flex-1 pb-24 p-4 sm:p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
            <AnimatePresence mode="wait">
              
              {/* Tab: INÍCIO */}
              {activeTab === 'inicio' && (
                <motion.div
                  key="inicio"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-center max-w-3xl mx-auto"
                >
                  {/* Salutation Block */}
                  <div className="pt-4">
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block mb-1">Boa tarde, Samuel 🤝</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] tracking-tight leading-tight max-w-2xl mx-auto">
                      Tem um paciente que precisa de você agora.
                    </h2>
                  </div>

                  {/* Lavender Smart Notice Banner */}
                  <div className="inline-flex justify-center w-full px-2">
                    <div className="bg-[#F3E8FF] border border-[#E9D5FF] text-[#6B21A8] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-semibold inline-flex items-center gap-1.5 shadow-xs text-center justify-center max-w-full">
                      <span className="shrink-0">✨</span>
                      <span className="truncate max-w-[240px] sm:max-w-none">Encontrei 5 encaixes inteligentes. Quer que eu mostre?</span>
                    </div>
                  </div>

                  {/* Visual Agenda Checker Column */}
                  <div className="flex flex-col items-center justify-center my-6 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200 shadow-inner relative">
                      <CalendarIcon size={22} className="text-slate-500" />
                      <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white font-extrabold text-[9px] w-5 h-5 rounded-full flex items-center justify-center border border-white">
                        12
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-none">Agenda livre</h3>
                      <p className="text-xs text-slate-500 mt-1.5 font-medium">5 pacientes aguardando encaixe</p>
                    </div>

                    <button 
                      onClick={() => setActiveTab('agenda')}
                      className="px-6 py-2.5 bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-full font-bold text-xs shadow-sm shadow-[#0D9488]/10 hover:shadow-md transition-all flex items-center gap-2 uppercase tracking-wider scale-100 active:scale-95 cursor-pointer"
                    >
                      <Plus size={14} /> Agendar consulta
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab('agenda')}
                      className="text-xs text-[#0D9488] font-bold hover:underline"
                    >
                      Ver agenda completa
                    </button>
                  </div>

                  {/* Roberto carlos Active Alert Card */}
                  <div 
                    onClick={() => { setActiveTab('pacientes'); }}
                    className="p-4 bg-[#FFF5F5] border border-[#FFE3E3] rounded-2xl flex items-center justify-between gap-3 shadow-xs hover:border-red-300 hover:shadow-sm cursor-pointer transition-all text-left w-full mx-auto"
                  >
                    <div className="flex items-center gap-3">
                      {/* Grid Circle Avatar with green matching screenshot 1 */}
                      <div className="w-10 h-10 rounded-full bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] flex items-center justify-center font-bold text-sm relative shrink-0">
                        R
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#D93025] border border-white rounded-full" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-slate-900 leading-tight block hover:text-red-700 transition-colors">Roberto carlos</span>
                        <span className="text-xs text-slate-500 leading-none block mt-1">2 dias atrás • Precisa de atenção</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-bold text-[#D93025] uppercase tracking-wider">
                        URGENTE
                      </span>
                      <ChevronRight size={16} className="text-[#D93025]" />
                    </div>
                  </div>

                  {/* Precisam de atenção Section list */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center justify-between text-left">
                      <div className="flex items-center gap-2">
                        <span className="w-[3px] h-4 bg-[#F29900] rounded-full inline-block" />
                        <h4 className="text-sm font-bold text-slate-950">Precisam de atenção</h4>
                      </div>
                      <span className="text-xs text-slate-400 font-bold">4</span>
                    </div>

                    {/* Integrated single card list of attentive patients */}
                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 shadow-xs text-left">
                      {[
                        { name: 'Gean cardoso', initials: 'G' },
                        { name: 'Marcelo Lima', initials: 'M' },
                        { name: 'Moacir Gonçalves', initials: 'M' },
                        { name: 'Gabriel Moreira', initials: 'G', subtitle: 'Ontem • Precisa de atenção' }
                      ].map((pat, index) => (
                        <div 
                          key={index} 
                          onClick={() => setActiveTab('pacientes')}
                          className="p-4 hover:bg-slate-50/70 flex items-center justify-between gap-3 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] flex items-center justify-center font-bold text-sm relative shrink-0">
                              {pat.initials}
                              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#F29900] border border-white rounded-full" />
                            </div>
                            <div>
                              <span className="text-sm font-semibold block text-slate-900 leading-none">{pat.name}</span>
                              <span className="text-xs text-slate-500 block mt-1.5">{pat.subtitle || '2 dias atrás • Precisa de atenção'}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <button className="p-2 text-slate-400 hover:text-[#0D9488] hover:bg-emerald-50 rounded-lg transition-all" onClick={(e) => { e.stopPropagation(); alert(`Abrindo conversa de chat com ${pat.name}...`); }}>
                              <MessageSquare size={16} />
                            </button>
                            <ChevronRight size={16} className="text-slate-300" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sugestões de Encaixe List */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center justify-between text-left">
                      <div className="flex items-center gap-2">
                        <span className="w-[3px] h-4 bg-[#8B5CF6] rounded-full inline-block" />
                        <h4 className="text-sm font-bold text-slate-950">Sugestões de encaixe</h4>
                      </div>
                      <span className="text-xs text-slate-400 font-bold">5</span>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 shadow-xs text-left">
                      {/* Suggestion item 1 */}
                      <div className="p-3 sm:p-4 flex items-center justify-between gap-3 transition-colors">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F3E8FF] text-[#6B21A8] border border-[#E9D5FF] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                            M
                          </div>
                          <div className="min-w-0">
                            <span className="text-xs sm:text-sm font-semibold block text-slate-900 truncate">Marcelo Lima</span>
                            <span className="text-[10px] sm:text-xs text-slate-500 block mt-1 truncate">
                              {marceloStatus === 'agendado' ? '✓ Agendado' : 'Amanhã • 16:00 • Dente 14'}
                            </span>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            setMarceloStatus(prev => prev === 'agendar' ? 'agendado' : 'agendar');
                          }}
                          className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all uppercase tracking-wider shrink-0 cursor-pointer ${
                            marceloStatus === 'agendado' 
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                              : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
                          }`}
                        >
                          {marceloStatus === 'agendado' ? 'Agendado' : 'Agendar'}
                        </button>
                      </div>

                      {/* Suggestion item 2 */}
                      <div className="p-3 sm:p-4 flex items-center justify-between gap-3 transition-colors">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F3E8FF] text-[#6B21A8] border border-[#E9D5FF] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                            G
                          </div>
                          <div className="min-w-0">
                            <span className="text-xs sm:text-sm font-semibold block text-slate-900 truncate">Gabriel Moreira</span>
                            <span className="text-[10px] sm:text-xs text-slate-500 block mt-1 truncate">
                              {gabrielStatus === 'agendado' ? '✓ Agendado' : 'Amanhã • 15:00 • Dente 85'}
                            </span>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            setGabrielStatus(prev => prev === 'agendar' ? 'agendado' : 'agendar');
                          }}
                          className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all uppercase tracking-wider shrink-0 cursor-pointer ${
                            gabrielStatus === 'agendado' 
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                              : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
                          }`}
                        >
                          {gabrielStatus === 'agendado' ? 'Agendado' : 'Agendar'}
                        </button>
                      </div>

                      {/* Suggestion item 3 */}
                      <div className="p-3 sm:p-4 flex items-center justify-between gap-3 transition-colors">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F3E8FF] text-[#6B21A8] border border-[#E9D5FF] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                            G
                          </div>
                          <div className="min-w-0">
                            <span className="text-xs sm:text-sm font-semibold block text-slate-900 truncate">Gean cardoso</span>
                            <span className="text-[10px] sm:text-xs text-slate-500 block mt-1 truncate">
                              {geanStatus === 'agendado' ? '✓ Agendado' : 'Amanhã • 11:00 • Profilaxia'}
                            </span>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            setGeanStatus(prev => prev === 'agendar' ? 'agendado' : 'agendar');
                          }}
                          className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all uppercase tracking-wider shrink-0 cursor-pointer ${
                            geanStatus === 'agendado' 
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                              : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
                          }`}
                        >
                          {geanStatus === 'agendado' ? 'Agendado' : 'Agendar'}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab: AGENDA */}
              {activeTab === 'agenda' && (
                <motion.div
                  key="agenda"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left max-w-4xl mx-auto"
                >
                  {/* Title Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900">Agenda</h2>
                    <button className="p-1 px-1.5 text-slate-400 hover:text-slate-600 cursor-pointer" onClick={() => alert('Novo item de agenda...')}>
                      <Plus size={22} />
                    </button>
                  </div>

                  {/* Navigation and Date block */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-1">
                    <div className="flex items-center gap-3 text-xs">
                      <button className="text-slate-400 hover:text-slate-600 font-extrabold text-sm block cursor-pointer pr-1">‹</button>
                      <button className="px-5 py-1.5 bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold rounded-full shadow-xs uppercase tracking-wider cursor-pointer">
                        Hoje
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 font-extrabold text-sm block cursor-pointer pl-1">›</button>
                    </div>
                    <span className="font-bold text-slate-500 text-xs">7 jun. – 13 jun. de 2026</span>
                  </div>

                  {/* Week/Month Selector */}
                  <div className="inline-flex p-0.5 bg-slate-100/90 rounded-full text-xs font-semibold select-none">
                    <button className="text-slate-500 px-4 py-1 rounded-full font-semibold">Dia</button>
                    <button className="bg-white text-[#0D9488] px-4 py-1 rounded-full shadow-xs font-bold">Semana</button>
                    <button className="text-slate-500 px-4 py-1 rounded-full font-semibold">Mês</button>
                  </div>

                  {/* Interactive Grid matching Screenshot 3 exactly */}
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs overflow-x-auto">
                    <div className="min-w-[650px] divide-y divide-slate-100">
                      
                      {/* Grid header row */}
                      <div className="grid grid-cols-8 bg-slate-50/55 font-bold text-[10px] uppercase tracking-wider text-center py-3.5 divide-x divide-slate-100/60 text-slate-400">
                        <div className="text-left pl-4 text-slate-400 font-bold">Hora</div>
                        <div>Dom <span className="block text-slate-800 font-extrabold text-[12px] mt-1">7</span></div>
                        <div>Seg <span className="block text-slate-800 font-extrabold text-[12px] mt-1">8</span></div>
                        <div>Ter <span className="block text-slate-800 font-extrabold text-[12px] mt-1">9</span></div>
                        <div>Qua <span className="block text-slate-800 font-extrabold text-[12px] mt-1">10</span></div>
                        
                        {/* Selected Qui column highlight in green */}
                        <div className="bg-[#ECFDF5] text-[#0D9488] flex flex-col items-center justify-center py-0.5 rounded-xs">
                          Qui <span className="block font-black text-[#0D9488] text-[13px] mt-1 leading-none">11</span>
                          <span className="w-1.5 h-1.5 bg-[#0D9488] rounded-full mt-1.5" />
                        </div>
                        
                        <div>Sex <span className="block text-slate-800 font-extrabold text-[12px] mt-1">12</span></div>
                        <div>Sáb <span className="block text-slate-800 font-extrabold text-[12px] mt-1">13</span></div>
                      </div>

                      {/* Hourly Rows */}
                      {[
                        { time: '07:00', slots: [null, null, null, null, null, null, null] },
                        { 
                          time: '08:00', 
                          slots: [
                            null, 
                            { name: 'Benedito', details: '08:00' }, 
                            { name: 'Roberto', details: '08:00' }, 
                            null, 
                            null, 
                            null, 
                            null
                          ] 
                        },
                        { time: '09:00', slots: [null, null, null, null, null, null, null] },
                        { time: '10:00', slots: [null, null, null, null, null, null, null] },
                        { 
                          time: '11:00', 
                          slots: [
                            null, 
                            null, 
                            { name: 'Moacir', details: '11:00' }, 
                            null, 
                            null, 
                            null, 
                            null
                          ] 
                        },
                      ].map((row, idx) => (
                        <div key={idx} className="grid grid-cols-8 text-center text-xs h-[70px] divide-x divide-slate-100">
                          {/* Time label */}
                          <div className="flex items-center text-left pl-4 text-slate-400 font-semibold text-[11px] bg-slate-50/20">
                            {row.time}
                          </div>

                          {/* 7 Days blocks */}
                          {row.slots.map((slot, dayIdx) => {
                            // Render custom actions inside calendar quiet grid
                            const isQui = dayIdx === 4;
                            const showMarcelo = isQui && row.time === '08:00' && marceloStatus === 'agendado';
                            const showGabriel = isQui && row.time === '11:00' && gabrielStatus === 'agendado';

                            return (
                              <div key={dayIdx} className={`p-1 flex items-center justify-center relative ${isQui ? 'bg-[#ECFDF5]/20' : ''}`}>
                                {slot && (
                                  <div className="bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#0369A1] border-l-4 border-[#0284C7] rounded-lg p-2 w-full h-full flex flex-col justify-center text-left transition-all shadow-2xs leading-tight cursor-pointer">
                                    <span className="font-extrabold text-[10px] truncate block text-slate-900">{slot.name}</span>
                                    <span className="text-[9px] text-[#0284C7] font-semibold mt-1 block">{slot.details}</span>
                                  </div>
                                )}
                                {showMarcelo && (
                                  <motion.div 
                                    initial={{ scale: 0.8 }} 
                                    animate={{ scale: 1 }}
                                    className="bg-purple-100 hover:bg-purple-200 text-[#4C1D95] border-l-4 border-[#7C3AED] rounded-lg p-2 w-full h-full flex flex-col justify-center text-left transition-all shadow-2xs leading-tight cursor-pointer"
                                  >
                                    <span className="font-extrabold text-[10px] truncate block text-slate-900">Marcelo L.</span>
                                    <span className="text-[9px] text-[#7C3AED] font-semibold mt-1 block">08:00 Encaixe</span>
                                  </motion.div>
                                )}
                                {showGabriel && (
                                  <motion.div 
                                    initial={{ scale: 0.8 }} 
                                    animate={{ scale: 1 }}
                                    className="bg-purple-100 hover:bg-purple-200 text-[#4C1D95] border-l-4 border-[#7C3AED] rounded-lg p-2 w-full h-full flex flex-col justify-center text-left transition-all shadow-2xs leading-tight cursor-pointer"
                                  >
                                    <span className="font-extrabold text-[10px] truncate block text-slate-900">Gabriel M.</span>
                                    <span className="text-[9px] text-[#7C3AED] font-semibold mt-1 block">11:00 Encaixe</span>
                                  </motion.div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab: PACIENTES */}
              {activeTab === 'pacientes' && (
                <motion.div
                  key="pacientes"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left max-w-4xl mx-auto"
                >
                  {/* Patients Header matching screenshot 5 */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900">Pacientes</h2>
                    <button className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer" onClick={() => alert('Abrir cadastro de paciente')}>
                      <Plus size={22} />
                    </button>
                  </div>

                  {/* Search Bar Block with outer plus icon button */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-full">
                      <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Buscar paciente..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-xs font-semibold focus:outline-none focus:border-emerald-500/80 shadow-2xs placeholder-slate-400 text-slate-800"
                      />
                      {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold hover:text-slate-600">
                          Clear
                        </button>
                      )}
                    </div>
                    {/* Plus Icon next to search */}
                    <button className="flex items-center justify-center p-3.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-500 hover:text-slate-800 transition-colors shrink-0 outline-none cursor-pointer">
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Opportunities info sub-bar */}
                  <div className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5 px-0.5">
                    <span>0 hoje</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[#0D9488]">1 oportunidade ativa</span>
                  </div>

                  {/* Custom Filter chips */}
                  <div className="flex items-center gap-1.5 p-1 bg-slate-100/70 rounded-full max-w-full overflow-x-auto scrollbar-none text-[11px] font-semibold text-slate-500 whitespace-nowrap">
                    <button className="bg-white text-slate-800 border border-slate-200/50 shadow-2xs px-4 py-1.5 rounded-full font-bold shrink-0">Todos</button>
                    <button className="hover:text-slate-800 px-4 py-1.5 rounded-full shrink-0">Agir agora <span className="text-[10px] opacity-75 font-bold">1</span></button>
                    <button className="hover:text-slate-800 px-4 py-1.5 rounded-full shrink-0">Precisam de atenção <span className="text-[10px] opacity-75 font-bold">4</span></button>
                    <button className="hover:text-slate-800 px-4 py-1.5 rounded-full shrink-0">Em acompanhamento <span className="text-[10px] opacity-75 font-bold">1</span></button>
                  </div>

                  {/* Patients list grids matching layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {filteredPatients.length > 0 ? (
                      filteredPatients.map((pat) => (
                        <div 
                          key={pat.id} 
                          className={`p-3 sm:p-4 bg-white border border-slate-200 rounded-2xl flex items-start justify-between gap-3 shadow-2xs transition-all ${pat.accentColor} hover:border-[#CEEAD6] min-w-0`}
                        >
                          <div className="flex gap-2 sm:gap-3 min-w-0">
                            {/* Mint Green Circle Avatar matched with screenshot 5 */}
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                              {pat.initials}
                            </div>
                            <div className="min-w-0">
                              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight block truncate md:whitespace-normal">{pat.name}</span>
                              <span className={`text-[10px] sm:text-xs font-semibold leading-normal block mt-1.5 ${pat.status === 'urgente' ? 'text-[#D93025]' : 'text-slate-500'}`}>
                                {pat.text}
                              </span>
                            </div>
                          </div>
                          
                          {/* Patient item action icons */}
                          <div className="flex items-center gap-0.5 shrink-0">
                            <button className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer" onClick={() => alert(`Excluir paciente: ${pat.name}`)}>
                              <Trash2 size={13} />
                            </button>
                            <button className="p-1 text-slate-400 hover:text-[#0D9488] hover:bg-emerald-50 rounded-lg transition-all cursor-pointer" onClick={() => alert(`Enviar mensagem para ${pat.name}`)}>
                              <MessageSquare size={13} />
                            </button>
                            <button className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-purple-50 rounded-lg transition-all cursor-pointer" onClick={() => alert(`Cadernos e links para ${pat.name}`)}>
                              <Link2 size={13} />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-10 bg-white rounded-2xl border border-slate-200 border-dashed text-slate-400 text-xs font-semibold">
                        Nenhum paciente encontrado com essa busca.
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Tab: FINANCEIRO */}
              {activeTab === 'financeiro' && (
                <motion.div
                  key="financeiro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left max-w-4xl mx-auto"
                >
                  {/* Financial Controls layout matching Screenshot 4 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Financeiro</h2>
                    <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 sm:pb-0 text-[10px] font-black uppercase tracking-wider whitespace-nowrap max-w-full">
                      <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-full cursor-pointer flex items-center gap-1 font-bold hover:bg-slate-50 transition-colors shrink-0">
                        <FileText size={11} /> Relatório
                      </span>
                      <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-full cursor-pointer flex items-center gap-1 font-bold hover:bg-slate-50 transition-colors shrink-0">
                        <Download size={11} /> Exportar
                      </span>
                      <span className="px-3 py-1 bg-white border border-slate-200 text-slate-800 rounded-full cursor-pointer flex items-center gap-1 font-bold hover:bg-slate-50 transition-colors shrink-0">
                        + Despesa
                      </span>
                      <span className="px-3 py-1 bg-slate-900 text-white rounded-full cursor-pointer flex items-center gap-1 font-bold hover:bg-slate-800 transition-colors shrink-0">
                        + Receita
                      </span>
                    </div>
                  </div>

                  {/* Dark gray active capsule selection block matching Screenshot 4 */}
                  <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-full max-w-full overflow-x-auto scrollbar-none text-[11px] font-semibold text-slate-500 whitespace-nowrap">
                    <button className="bg-[#1F2937] text-white px-4 py-1.5 rounded-full shadow-xs font-bold shrink-0">Geral</button>
                    <button className="hover:text-slate-800 px-4 py-1.5 rounded-full shrink-0">Notas Fiscais</button>
                    <button className="hover:text-slate-800 px-4 py-1.5 rounded-full shrink-0">Convênios</button>
                    <button className="hover:text-slate-800 px-4 py-1.5 rounded-full shrink-0">Inadimplência</button>
                    <button className="hover:text-slate-800 px-4 py-1.5 rounded-full shrink-0">Pix</button>
                  </div>

                  {/* Mint Green Showcase Card matching Screenshot 4 */}
                  <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[1.75rem] p-6 space-y-4 shadow-2xs relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="space-y-1 relative z-10 text-left">
                      
                      {/* Growth indicator badge */}
                      <span className="px-3 py-1 bg-[#DCFCE7] text-[#15803D] text-[10px] font-extrabold rounded-full inline-flex items-center gap-1 border border-[#BBF7D0]">
                        +68% vs. mês passado. Tá voando 🔥
                      </span>
                      
                      {/* Big money display */}
                      <div className="text-3xl md:text-5xl font-black text-slate-900 leading-none mt-3 tracking-tight">
                        R$ 2.100,00
                      </div>
                      
                      {/* Projections */}
                      <p className="text-xs text-slate-500 font-medium">
                        Projeção: <span className="text-slate-800 font-bold">R$ 5.727,00</span> · Margem: <span className="text-slate-800 font-bold">90%</span>
                      </p>
                    </div>

                    {/* Bottom actions link styled as capsule */}
                    <button 
                      onClick={() => setActiveTab('agenda')}
                      className="px-4 py-2 bg-white hover:bg-slate-50 text-[#0D9488] border border-slate-100 text-xs font-black rounded-full shrink-0 shadow-sm uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer self-start sm:self-auto"
                    >
                      Ainda tem 8 horários hoje →
                    </button>
                  </div>

                  {/* Movimentações and filter elements */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">Movimentações</h4>
                      <button className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-full font-bold transition-all cursor-pointer">
                        Ver todas
                      </button>
                    </div>

                    {/* Filter Tags matching the design */}
                    <div className="flex items-center gap-1.5 flex-wrap text-[10px] font-bold text-slate-500">
                      <span className="px-3 py-1 bg-slate-100 hover:bg-slate-250 hover:text-slate-800 text-slate-700 rounded-md cursor-pointer transition-colors border border-slate-200/50">Hoje</span>
                      <span className="px-3 py-1 hover:bg-slate-100 hover:text-slate-800 rounded-md cursor-pointer transition-colors">Ontem</span>
                      <span className="px-3 py-1 hover:bg-slate-100 hover:text-slate-800 rounded-md cursor-pointer transition-colors">Data</span>
                      <span className="px-3 py-1 hover:bg-slate-100 hover:text-slate-800 rounded-md cursor-pointer transition-colors">Paciente</span>
                    </div>

                    {/* Movements table headers */}
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-extrabold tracking-wider border-t border-slate-100 pt-3">
                      <span>ÚLTIMOS DIAS</span>
                      <span>08/06/2026</span>
                    </div>

                    {/* Sample movements list cut-off matching design */}
                    <div className="space-y-2 opacity-80 pointer-events-none">
                      <div className="bg-white border border-slate-100 rounded-xl p-3 flex  items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-slate-800 block">Afonso Torres</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">Procedimento de profilaxia</span>
                        </div>
                        <span className="text-emerald-600 font-bold">+ R$ 150,00</span>
                      </div>
                      <div className="bg-white border border-slate-100 rounded-xl p-3 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-slate-800 block">Beatriz Helena</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">Procedimento de restauração</span>
                        </div>
                        <span className="text-emerald-600 font-bold">+ R$ 320,00</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Sticky Bottom Tablet/Phone Tab Bar (with beautiful exact styles) */}
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-18 bg-white border-t border-slate-200 flex items-center justify-around px-1 sm:px-2 md:px-6 z-40 shadow-lg select-none">
            {[
              { id: 'inicio', label: 'Início', icon: Home },
              { id: 'agenda', label: 'Agenda', icon: CalendarIcon },
              { id: 'pacientes', label: 'Pacientes', icon: Users },
              { id: 'financeiro', label: 'Financeiro', icon: CircleDollarSign },
              { id: 'mais', label: 'Mais', icon: Settings, isAction: true }
            ].map((tab, idx) => {
              const IconComp = tab.icon;
              const isSelected = activeTab === tab.id;
              
              if (tab.isAction) {
                return (
                  <button 
                    key={idx}
                    onClick={() => {
                      alert('OdontoHub: Painel de configurações rápidas, convênios parceiros, templates de receituários e suporte integrado.');
                    }}
                    className="flex flex-col items-center gap-0.5 text-[#9CA3AF] hover:text-slate-600 font-bold outline-none border-none cursor-pointer scale-100 active:scale-95 transition-all text-center min-w-[54px] sm:min-w-0"
                  >
                    <IconComp size={16} className="text-[#9CA3AF] sm:w-[18px] sm:h-[18px]" />
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-extrabold text-[#9CA3AF] mt-0.5 block">Mais</span>
                  </button>
                );
              }

              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex flex-col items-center gap-0.5 font-bold transition-all duration-200 outline-none border-none cursor-pointer scale-100 active:scale-95 text-center min-w-[54px] sm:min-w-0 ${
                    isSelected 
                      ? 'text-[#0D9488]' 
                      : 'text-[#9CA3AF] hover:text-[#4B5563]'
                  }`}
                >
                  <IconComp size={16} className={`${isSelected ? 'text-[#0D9488]' : 'text-[#9CA3AF]'} sm:w-[18px] sm:h-[18px]`} />
                  <span className={`text-[8px] sm:text-[9px] uppercase tracking-wider font-extrabold mt-0.5 block ${isSelected ? 'text-[#0D9488]' : 'text-[#9CA3AF]'}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </div>
      
      {/* Descriptive legend styling matches brand perfectly */}
      <div className="text-center mt-6 text-slate-500 text-xs font-semibold leading-relaxed px-4">
        💡 <span className="font-extrabold text-[#111827]">Simulação interativa em tempo real.</span> Clique nas abas 
        <strong className="text-[#0D9488]"> Início, Agenda, Pacientes e Financeiro </strong> da barra inferior para navegar e interagir com o fluxo real de trabalho.
      </div>
    </div>
  );
}
