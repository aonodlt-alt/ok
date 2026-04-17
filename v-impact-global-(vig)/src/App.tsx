/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OperatingModel from './components/OperatingModel';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import SeasonOne from './components/SeasonOne';
import Team from './components/Team';
import Recruitment from './components/Recruitment';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <OperatingModel />
        <MissionVision />
        <CoreValues />
        <SeasonOne />
        <Team />
        <Recruitment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
