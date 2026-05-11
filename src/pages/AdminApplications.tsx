import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { db, auth, googleProvider, signInWithPopup, onAuthStateChanged } from '../lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import { Button, Section } from '../components/shared/UI';
import { 
  Table, 
  ChevronLeft, 
  Download, 
  ExternalLink, 
  Instagram, 
  LayoutDashboard,
  LogOut,
  Mail,
  Phone,
  Search,
  Users
} from 'lucide-react';

interface Application {
  id: string;
  fullName: string;
  instagram: string;
  tiktok: string;
  whatsapp: string;
  faculty: string;
  period: string;
  cityState: string;
  attendingClinic: string;
  postsPerWeek: number;
  followers: string;
  storyViews: string;
  motivation: string;
  contentStyle: string;
  createdAt: any;
}

export default function AdminApplications() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState<Application[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const adminEmail = 'samuelgodoylima@gmail.com';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u && u.email === adminEmail) {
        fetchApplications();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'ambassador_applications'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Application[];
      setApplications(docs);
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, 'ambassador_applications');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => auth.signOut();

  const filteredApplications = applications.filter(app => 
    app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.instagram.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.faculty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportCSV = () => {
    const headers = [
      'Nome', 'Instagram', 'TikTok', 'WhatsApp', 'Faculdade', 'Período', 
      'Cidade/UF', 'Atende Clínica', 'Posts/Semana', 'Seguidores', 'Views Stories', 
      'Motivação', 'Estilo Conteúdo', 'Data'
    ];
    
    const rows = applications.map(app => [
      app.fullName, app.instagram, app.tiktok, app.whatsapp, app.faculty, app.period,
      app.cityState, app.attendingClinic, app.postsPerWeek, app.followers, app.storyViews,
      `"${app.motivation.replace(/"/g, '""')}"`, `"${app.contentStyle.replace(/"/g, '""')}"`,
      app.createdAt?.toDate().toLocaleString() || ''
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "embaixadores_odontohub.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-brand-academy border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-5">
        <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 text-center">
          <div className="w-16 h-16 bg-brand-academy/10 text-brand-academy rounded-2xl flex items-center justify-center mx-auto mb-8">
            <LayoutDashboard size={32} />
          </div>
          <h2 className="text-2xl font-bold text-brand-text mb-4">Acesso Administrativo</h2>
          <p className="text-brand-text/50 font-medium mb-8">Faça login com sua conta do Google para acessar a planilha de embaixadores.</p>
          <Button onClick={handleLogin} className="w-full py-4 bg-brand-academy text-white font-bold rounded-2xl">
            Login com Google
          </Button>
        </div>
      </div>
    );
  }

  if (user.email !== adminEmail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-5">
        <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 text-center">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Users size={32} />
          </div>
          <h2 className="text-2xl font-bold text-brand-text mb-4">Acesso Negado</h2>
          <p className="text-brand-text/50 font-medium mb-8">Sua conta ({user.email}) não possui permissões administrativas.</p>
          <Button onClick={handleLogout} variant="outline" className="w-full py-4">
            Sair e trocar conta
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/academy" className="text-slate-400 hover:text-brand-academy transition-colors">
              <ChevronLeft size={24} />
            </a>
            <div className="h-8 w-px bg-slate-100" />
            <h1 className="font-black text-xl text-brand-text tracking-tight flex items-center gap-3">
              <Users size={20} className="text-brand-academy" />
              Inscrições Academy
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-xs font-bold text-brand-text">{user.displayName}</p>
              <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{user.email}</p>
            </div>
            <button 
              onClick={handleLogout}
              className="p-3 text-slate-300 hover:text-red-500 transition-colors bg-slate-50 rounded-xl"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      <Section className="pt-10">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar por nome, instagram, faculdade..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-brand-academy focus:border-brand-academy outline-none transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              onClick={exportCSV}
              variant="outline" 
              className="w-full md:w-auto px-6 py-4 flex items-center justify-center gap-2 font-bold"
            >
              <Download size={18} /> Exportar Planilha (.csv)
            </Button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1200px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Nome</th>
                    <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Social</th>
                    <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Acadêmico</th>
                    <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Atuação</th>
                    <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Métricas</th>
                    <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredApplications.length > 0 ? (
                    filteredApplications.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-6 py-6">
                          <p className="font-bold text-brand-text mb-0.5">{app.fullName}</p>
                          <p className="text-xs text-slate-400 font-medium">{app.cityState}</p>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex flex-col gap-1">
                            <a href={`https://instagram.com/${app.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-xs font-bold text-brand-academy flex items-center gap-1.5 hover:underline">
                              <Instagram size={14} /> {app.instagram}
                            </a>
                            <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                              <Phone size={14} /> {app.whatsapp}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <p className="text-xs font-bold text-brand-text mb-0.5">{app.faculty}</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase">{app.period}</p>
                        </td>
                        <td className="px-6 py-6">
                          <p className="text-xs font-bold text-brand-text mb-0.5">{app.attendingClinic}</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase">Período Clínico</p>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex gap-4">
                            <div className="text-center">
                              <p className="text-xs font-bold text-brand-text">{app.followers}</p>
                              <p className="text-[9px] font-black text-slate-300 uppercase">Segs</p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs font-bold text-brand-text">{app.storyViews}</p>
                              <p className="text-[9px] font-black text-slate-300 uppercase">Views</p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs font-bold text-brand-text">{app.postsPerWeek}</p>
                              <p className="text-[9px] font-black text-slate-300 uppercase">Posts/Sem</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6 text-right">
                           <button 
                            className="p-2.5 text-slate-200 hover:text-brand-academy hover:bg-white rounded-xl transition-all shadow-none hover:shadow-sm"
                            title="Ver Detalhes"
                           >
                            <ExternalLink size={20} />
                           </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-20 text-center">
                        <p className="text-sm font-bold text-slate-300 uppercase tracking-widest">Nenhuma inscrição encontrada</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
