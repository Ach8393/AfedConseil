import React, { useEffect, useState } from "react";
import API from "../constants/api"; 
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]); // Changé de testimonials à reviews
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // On appelle l'endpoint défini dans ton backend
        const response = await API.get("/reviews"); 
        setReviews(response.data.data);
      } catch (error) {
        console.error("Erreur lors du chargement des avis:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return null;

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="ils ont dit?"
          sub="⭐️ Clients feedback"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-6">
          {reviews.map((item, index) => (
            <GlowCard 
              card={item} 
              key={item._id || index} 
              index={index}
            >
              <div className="flex flex-col gap-4">
                {/* Texte de l'avis */}
                <p className="text-white-80 leading-relaxed italic">
                  "{item.review}"
                </p>

                {/* Profil Client */}
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <img 
                      src={item.imgPath || "/default-avatar.png"} 
                      alt={item.name} 
                      className="w-12 h-12 rounded-full object-cover border border-white-10" 
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-white-50 text-sm">{item.mentions}</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;