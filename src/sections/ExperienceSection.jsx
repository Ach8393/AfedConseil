import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import API from "../constants/api"; // Ton instance Axios
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const [expCards, setExpCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [showGallery, setShowGallery] = useState(false);

  // 1. Récupération des données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [artRes, galRes] = await Promise.all([
          API.get("/articles"),
          API.get("/gallery")
        ]);
        setExpCards(artRes.data.data);
        setGalleryPhotos(galRes.data.data);
      } catch (error) {
        console.error("Erreur API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 2. Animations GSAP (déclenchées seulement quand expCards change)
  useGSAP(() => {
    if (expCards.length === 0) return;

    // Animation des cartes (timeline-card ou exp-card-wrapper selon ton CSS)
    gsap.utils.toArray(".exp-card-wrapper").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // Animation de la ligne de temps (Height)
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
            overwrite: "auto", 
          });
        },
      },
    });

    // Animation du texte
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, { dependencies: [expCards], revertOnUpdate: true }); // Important pour recalculer après le fetch

  if (loading) return null; // Ou un loader discret pour éviter le saut visuel

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Expérience professionnelle"
          sub="💼 Aperçu de ma carrière"
        />
        {/* BOUTON TOGGLE GALERIE */}
        <div className="flex justify-center mt-10">
          <button 
            onClick={() => setShowGallery(!showGallery)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            {showGallery ? "📁 Cacher la Galerie" : "🖼️ Voir la Galerie Photos"}
          </button>
        </div>

        {/* SECTION GALERIE (Conditionnelle) */}
        {showGallery && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-black/20 rounded-3xl backdrop-blur-sm border border-white/10">
            {galleryPhotos.length > 0 ? (
              galleryPhotos.map((photo) => (
                <div key={photo._id} className="group relative overflow-hidden rounded-xl h-48">
                  <img 
                    src={photo.imgPath} 
                    alt={photo.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {photo.title && (
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 p-2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {photo.title}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="col-span-full text-center py-10 italic text-gray-400">La galerie est vide pour le moment...</p>
            )}
          </div>
        )}
        
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card._id || card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">Resumé:</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;