/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import AboutMe from '../components/aboutMe/aboutMe';
import Projects from '../components/projects/projects';
import Skills from '../components/skills/skills';
import Contact from '../components/contact/contact';

const Home = ({ observer }) => (
  <div className="container">
    <AboutMe observer={observer} />
    <Projects observer={observer} />
    <Skills observer={observer} />
    <Contact observer={observer} />
  </div>
);

export default Home;
