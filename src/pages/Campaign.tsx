import React, { useEffect, useState } from 'react';
import { HelloCampaign } from './campaign/Hello';
import { OlaCampaign } from './campaign/Ola';
import { OfensivaCampaign } from './campaign/Ofensiva';
import { ContinuaCampaign } from './campaign/Continua';
import { EmbaixadoresCampaign } from './campaign/Embaixadores';
import { LARANJA, LIMA } from '../data/feeds';

export type CampaignTab = 'hello' | 'ofensiva' | 'embaixadores' | 'ola' | 'continua';

const TABS: { id: CampaignTab; label: string; note: string }[] = [
  { id: 'hello', label: 'Hello OdontoHub.', note: 'Agora' },
  { id: 'ofensiva', label: 'A Nina viu.', note: 'Agora' },
  { id: 'embaixadores', label: 'Embaixadores.', note: 'Nova' },
  { id: 'ola', label: 'Olá Academy.', note: 'Arquivo' },
  { id: 'continua', label: 'A clínica contínua.', note: 'Futuro' },
];

function tabFromHash(): CampaignTab {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'ofensiva' || hash === 'academy' || hash === 'nina') return 'ofensiva';
  if (hash === 'embaixadores' || hash === 'representantes') return 'embaixadores';
  if (hash === 'ola') return 'ola';
  if (hash === 'continua' || hash === 'futuro') return 'continua';
  return 'hello';
}

export default function Campaign(): React.ReactElement {
  const [tab, setTab] = useState<CampaignTab>(() => (typeof window === 'undefined' ? 'hello' : tabFromHash()));

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#hello');
    }
    const onHash = () => setTab(tabFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const select = (next: CampaignTab) => {
    setTab(next);
    window.history.replaceState(null, '', `#${next}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="fixed top-12 md:top-[44px] left-0 right-0 z-40 border-b border-white/10 bg-[rgba(22,22,23,0.92)] backdrop-blur-[20px]">
        <div className="max-w-[980px] mx-auto px-5 h-12 flex items-center gap-1 overflow-x-auto">
          {TABS.map((item) => {
            const on = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => select(item.id)}
                className="shrink-0 rounded-full px-3.5 py-1.5 text-[12px] transition-colors"
                style={
                  on
                    ? item.id === 'ofensiva' || item.id === 'embaixadores'
                      ? { background: LIMA.neo, color: '#0b0c10' }
                      : item.id === 'ola'
                        ? { background: LARANJA.neo, color: '#fff' }
                        : { background: '#f5f5f7', color: '#1d1d1f' }
                    : { color: 'rgba(245,245,247,0.7)' }
                }
              >
                {item.label}
                <span className="ml-2 text-[10px] opacity-60">{item.note}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="pt-12">
        {tab === 'hello' && <HelloCampaign />}
        {tab === 'ofensiva' && <OfensivaCampaign />}
        {tab === 'embaixadores' && <EmbaixadoresCampaign />}
        {tab === 'ola' && <OlaCampaign />}
        {tab === 'continua' && <ContinuaCampaign />}
      </div>
    </div>
  );
}
