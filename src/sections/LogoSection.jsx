import React, { useEffect, useState } from 'react';
import API from "../constants/api"; // Ton instance Axios

// Fonction utilitaire rapide pour injecter l'optimisation Cloudinary
const getOptimizedUrl = (url) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/upload/', '/upload/f_auto,q_auto,h_150,c_limit/');
};

const LogoIcon = ({ icon }) => {
  return (
    <div className='flex-none flex-center marquee-item px-2'>
      <img 
        src={getOptimizedUrl(icon.imgPath)} 
        alt={icon.title || "gallery-item"} 
        className="h-28 w-auto object-contain rounded-xl shadow-md transition-all duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  )
}

const LogoSection = () => {
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await API.get("/gallery");
        setGalleryPhotos(res.data.data);
      } catch (error) {
        console.error("Erreur API Galerie Marquee:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // Si on charge encore ou s'il n'y a pas d'images, on évite d'afficher un espace vide
  if (loading || galleryPhotos.length === 0) return null;

  return (
    <div className='md:my-20 my-10 relative overflow-hidden'>
      <div className='gradient-edge left-0' />
      <div className='gradient-edge right-0' />
      
      <div className='marquee h-52 flex items-center'>
        <div className='marquee-box md:gap-12 gap-5'>
          {/* Première boucle */}
          {galleryPhotos.map((photo) => (
            <LogoIcon key={photo._id} icon={photo} />
          ))}
          {/* Deuxième boucle pour assurer l'effet de continuité infinie du scroll */}
          {galleryPhotos.map((photo) => (
            <LogoIcon key={`${photo._id}-clone`} icon={photo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSection;