import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Academy from './pages/Academy';
import Ambassadors from './pages/Ambassadors';
import InstagramPresets from './pages/InstagramPresets';
import AdminApplications from './pages/AdminApplications';
import Confirmation from './pages/Confirmation';
import Comparison from './pages/Comparison';
import Blog from './pages/Blog';
import SoftwareOdontologicoPage from './pages/SoftwareOdontologicoPage';
import SistemasParaDentistaPage from './pages/SistemasParaDentistaPage';
import AppsEstudantesOdontologiaPage from './pages/AppsEstudantesOdontologiaPage';
import SoftwareOdontologicoAutonomoPage from './pages/SoftwareOdontologicoAutonomoPage';
import ComoOrganizarRetornosPage from './pages/ComoOrganizarRetornosPage';
import ComoAdministrarSemSecretariaPage from './pages/ComoAdministrarSemSecretariaPage';
import ComoEvitarPacientesEsquecidosPage from './pages/ComoEvitarPacientesEsquecidosPage';
import AgendaRecemFormadosPage from './pages/AgendaRecemFormadosPage';
import SEOTemplatePage from './pages/SEOTemplatePage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Home />
          </motion.div>
        } />
        <Route path="/academy" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Academy />
          </motion.div>
        } />
        <Route path="/academy/embaixadores" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Ambassadors />
          </motion.div>
        } />
        <Route path="/presets" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <InstagramPresets />
          </motion.div>
        } />
        <Route path="/admin/embaixadores" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AdminApplications />
          </motion.div>
        } />
        <Route path="/confirmacao" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Confirmation />
          </motion.div>
        } />
        <Route path="/checkout/confirmado" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Confirmation />
          </motion.div>
        } />
        <Route path="/comparativo" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Comparison />
          </motion.div>
        } />
        <Route path="/odontohub-vs-concorrentes" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Comparison />
          </motion.div>
        } />
        <Route path="/blog" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Blog />
          </motion.div>
        } />
        <Route path="/software-odontologico" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SoftwareOdontologicoPage />
          </motion.div>
        } />
        <Route path="/sistemas-para-dentista" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SistemasParaDentistaPage />
          </motion.div>
        } />
        <Route path="/app-para-estudante-de-odontologia" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AppsEstudantesOdontologiaPage />
          </motion.div>
        } />
        <Route path="/software-odontologico-autonomo" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SoftwareOdontologicoAutonomoPage />
          </motion.div>
        } />
        <Route path="/como-organizar-retornos-de-pacientes" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ComoOrganizarRetornosPage />
          </motion.div>
        } />
        <Route path="/como-administrar-clinica-sem-secretaria" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ComoAdministrarSemSecretariaPage />
          </motion.div>
        } />
        <Route path="/como-evitar-pacientes-esquecidos" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ComoEvitarPacientesEsquecidosPage />
          </motion.div>
        } />
        <Route path="/agenda-odontologica-recem-formados" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AgendaRecemFormadosPage />
          </motion.div>
        } />
        <Route path="/:slug" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SEOTemplatePage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-green/20 selection:text-brand-green-dark overflow-x-hidden w-full relative">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

