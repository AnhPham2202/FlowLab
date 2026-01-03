import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Overview } from './page/Overview';
import { Playground } from './page/Playground';
import { Header } from './component/Header';
import KafkaPlayground from './page/KafkaPlayground.tsx';

export default function App() {
  const hideHeader = location.pathname.startsWith('/playground');

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {!hideHeader && <Header />}

        {/* Page content */}
        <main className={`pt-${hideHeader ? '0' : '24'}`}>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/playground/kafka" element={<KafkaPlayground />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
