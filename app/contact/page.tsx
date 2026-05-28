'use client';

import React from 'react';
import ContactHero from '@/components/contact-us/ContactHero';
import LocationMap from '@/components/contact-us/LocationMap';
import Features from '@/components/contact-us/Features';
import FooterContact from '@/components/contact-us/FooterContact';

export default function CarbonSyncContact() {
  return (
    <>
      <ContactHero />
      <LocationMap />
      <Features />
      <FooterContact />
    </>
  );
}
