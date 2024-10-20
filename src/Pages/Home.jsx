
import React from 'react'
import HomeAbout from '../Components/HomeAbout'
import Achievements from '../Components/Achievements';
import Creators from '../Components/Creators';
import ContactUs from '../Components/ContactUs';

export default function Home() {
  return (
    <div>
      <HomeAbout/>
      <Achievements />
      <Creators />
      <ContactUs />
    </div>
  );
}
