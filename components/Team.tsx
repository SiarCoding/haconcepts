'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- TypeScript-Interface für ein Teammitglied ---
interface Member {
    name: string;
    position: string;
    role: string;
    expertise: string;
    avatar: string;
}

// --- TypeScript-Interface für die Props der TeamCard ---
interface TeamCardProps {
    member: Member;
}

// Deine Team-Daten
const members: Member[] = [
    {
        name: 'Ali Alizadah',
        position: 'Geschäftsführer & Gründer',
        role: 'Visionary',
        expertise: 'Expert',
        avatar: '/ali3.png',
    },
    {
        name: 'Siar Alizadah',
        position: 'Mitgründer & IT Berater',
        role: 'Strategic',
        expertise: 'Mastermind',
        avatar: '/siarjaan.png',
    },
    {
        name: 'Cem Celik',
        position: 'Head of Marketing',
        role: 'Engaging',
        expertise: 'Genius',
        avatar: '/CemCelik1.png',
    }
];

// --- Team-Karten Unterkomponente ---
const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
    return (
        <div className="team-card">
            <div className="team-card-image-container">
                <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="team-card-image object-cover"
                    style={{
                        objectPosition: 'center 20%',
                    }}
                />
                
                <div className="team-card-title-container">
                    <p className="team-card-title-main">{member.role}</p>
                    <p className="team-card-title-sub">{member.expertise}</p>
                </div>
            </div>

            <div className="team-card-info">
                <h3 className="font-montserrat text-2xl font-normal text-white text-center">{member.name}</h3>
                <p className="font-inter text-base text-white/70 text-center">{member.position}</p>
            </div>
        </div>
    );
};

// --- Hauptkomponente für die Seite ---
export default function TeamSection() {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
      }
    };
    
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <section className="team-section-container">
            <div className="team-section-wrapper">
                <motion.div 
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white font-montserrat">
                        Unser <span className="text-[#ff5500]">Expertenteam</span>
                    </h2>
                    <p className="text-gray-400 text-lg sm:text-xl mt-8 max-w-2xl mx-auto font-inter">
                        Wir arbeiten eng mit unseren Kunden zusammen, um sicherzustellen, dass unsere Lösungen perfekt zu ihren Anforderungen passen. Unsere Expertise garantiert messbare Ergebnisse.
                    </p>
                </motion.div>

                <motion.div 
                    className="team-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {members.map((member) => (
                        <motion.div key={member.name} variants={itemVariants}>
                            <TeamCard member={member} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}