import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import API from "../constants/api"; // Ton instance Axios

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef(null);

    // 1. Fetch des données
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await API.get("/projects");
                setProjects(response.data.data);
            } catch (error) {
                console.error("Erreur chargement projets:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // 2. Animation GSAP
    useGSAP(() => {
        if (projects.length === 0) return;

        // On sélectionne tous les éléments avec la classe 'project-item'
        const projectItems = gsap.utils.toArray(".project-item");

        projectItems.forEach((card, index) => {
            gsap.fromTo(card, {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2 * (index % 3), // Petit décalage basé sur l'index
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                }
            });
        });

        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
    }, [projects]); // Se déclenche quand les projets sont chargés

    if (loading) return null;

    // On sépare le premier projet (Grand à gauche) des autres (Petits à droite)
    const firstProject = projects[0];
    const otherProjects = projects.slice(1);

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    
                    {/* LE PREMIER PROJET (Grand format) */}
                    {firstProject && (
                        <div className='first-project-wrapper project-item'>
                            <div className='image-wrapper'>
                                <img src={firstProject.imgPath} alt={firstProject.title} />
                            </div>
                            <div className='text-content'>
                                <h2>{firstProject.title}</h2>
                                <p className='text-white-50 md:text-xl'>
                                    {firstProject.description}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* LES AUTRES PROJETS (Liste à droite) */}
                    <div className='project-list-wrapper overflow-hidden'>
                        {otherProjects.map((project, index) => (
                            <div key={project._id} className='project project-item'>
                                <div className={`image-wrapper ${index % 2 === 0 ? 'bg-[#ffefdb]' : 'bg-[#ffe7eb]'}`}>
                                    <img src={project.imgPath} alt={project.title} />
                                </div>
                                <h2>{project.title}</h2>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection;