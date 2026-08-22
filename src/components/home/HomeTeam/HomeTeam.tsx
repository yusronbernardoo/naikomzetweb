import React from 'react';
import Image from 'next/image';
import styles from './HomeTeam.module.css';
import { Reveal } from '@/components/ui/Reveal/Reveal';

export function HomeTeam() {
  const team = [
    {
      id: 1,
      name: "Muhammad Yusron Abdillah",
      role: "CEO & Founder",
      image: "/team/yusron.jpg",
    },
    {
      id: 2,
      name: "Jesica Patricia Tarigan",
      role: "Lead UI/UX Designer",
      image: "/team/jesica2.png",
    },
    {
      id: 3,
      name: "Arjuna Mulyonang Budi",
      role: "Lead Web Developer",
      image: "/team/arjuna.png",
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className="container">
        <Reveal>
          <div className="sectionHeader">
            <h2 className="sectionTitle">Tim Kami</h2>
            <p className="sectionSubtitle">
              Di balik solusi digital yang kami buat, ada tim profesional yang siap membantu memajukan bisnis Anda.
            </p>
          </div>
        </Reveal>

        <div className={styles.teamGrid}>
          {team.map((member, i) => (
            <Reveal key={member.id} transition={{ delay: i * 0.1 }} className={styles.revealWrapper}>
              <div className={styles.teamCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className={styles.teamImage}
                  />
                </div>
                <div className={styles.infoWrapper}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
