import overallImage from "/src/assets/Images/9th_section_img.png";
import Button3 from "../../Common/Button3";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CryptoFreedomSection = () => {
  const sectionRef = useRef(null); // Ref for the section
  const triggers = useRef([]); // Store the scroll triggers

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.fade-in');

    // Fade-in animation for text elements
    if (elements) {
      elements.forEach((element) => {
        const trigger = gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 90, // Start from below
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current, // Trigger when the section is in view
              start: 'top 60%',
              toggleActions: 'play none none reset',
            },
          }
        );
        triggers.current.push(trigger.scrollTrigger); // Push the scrollTrigger instance
      });
    }

    // Image animation: From bottom to top
    const imageElement = sectionRef.current?.querySelector('.image-slide-up');
    if (imageElement) {
      const imageTrigger = gsap.fromTo(
        imageElement,
        {
          opacity: 0,
          y: 200, // Start from below
        },
        {
          opacity: 1,
          y: 0, // Slide up to its original position
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current, // Trigger when the section is in view
            start: 'top 60%',
            toggleActions: 'play none none reset',
          },
        }
      );
      triggers.current.push(imageTrigger.scrollTrigger);
    }

    // Cleanup function to kill specific ScrollTrigger instances on unmount
    return () => {
      triggers.current.forEach((trigger) => {
        if (trigger) trigger.kill(); // Kill individual scroll triggers
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="freedomSection-background pt-10 mb-32 px-5">
      <div className="container mx-auto pt-10 text-center">
        <h2 className="text-3xl font-bold mb-4 fade-in">
          The freedom of crypto for everyone, everywhere
        </h2>
        <p className="text-lg text-gray-600 font-century-gothic mb-8 fade-in">
          We&apos;re committed to creating more economic freedom through accessible,
          safe, and secure financial tools for everyone.
        </p>
        <div className="relative mx-auto max-w-[600px] image-slide-up">
          <img
            src={overallImage}
            alt="Conceptual graphic illustrating global financial freedom with diverse individuals engaged in cryptocurrency transactions"
            className="w-full h-auto mb-10 select-none"
          />
        </div>
        <Button3 title="Learn More" className="fade-in" />
      </div>
    </section>
  );
};

export default CryptoFreedomSection;
