'use client'

import Link from "next/link";
import Buttom from '@/components/Button/index'
import Image from "next/image";
import Background from '@/image/Texture.png'
import CardServiceInfo from '@/components/cardInfoService/index'
import ImgAfforai from '@/image/afforai.jpeg'
import ImgInter from '@/image/inter.jpeg'
import { MoveDown } from "lucide-react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import TypingEffect from "@/components/TypingEffect";
AOS.init({
  debounceDelay: 99,
  throttleDelay: 99,
});

export default function Home() {
  return (
    <>
      <header className="container_header">
        <div className="card_background">
          <Image src={Background} alt="" />
        </div>
        <div className="container">
          <nav className="card_navbar">
            <Link href='' className="logo">NM</Link>
            <Link href='https://nmprofile.vercel.app/ptbr' target="__blank" className="logo">All Works</Link>
            <Buttom
              title="Solicite um Orçamento"
              styleColor={true}
            />
          </nav>
          <div className="card_infosection">
            <div>
              <h1><TypingEffect description="Transforme Seu Negócio com Soluções Web de Alto Desempenho" /></h1>
              <h3><TypingEffect description="Desenvolvemos Páginas Web e Landing Pages de Alta Performance" /></h3>
              <p>Aumente sua conversão e engajamento com páginas rápidas, responsivas e otimizadas para SEO.</p>
            </div>
            <p className="arrow_animation"><MoveDown size={50} /></p>
            <div className="card_bluer"></div>
          </div>
        </div>
      </header>
      <main className="container_main">
        <section className="card_animation">
          <div>
            <ul>
              <li className="animation_skills-true">Transforme Seu Negócio com Soluções Web de Alto Desempenho</li>
              <li className="animation_skills-false">Transforme Seu Negócio com Soluções Web de Alto Desempenho</li>
              <li className="animation_skills-true">Transforme Seu Negócio com Soluções Web de Alto Desempenho</li>
              <li className="animation_skills-false">Transforme Seu Negócio com Soluções Web de Alto Desempenho</li>
            </ul>
            <ul>
              <li className="animation_skills-true">Transforme Seu Negócio com Soluções Web de Alto Desempenho</li>
              <li className="animation_skills-false">Transforme Seu Negócio com Soluções Web de Alto Desempenho</li>
              <li className="animation_skills-true">Transforme Seu Negócio com Soluções Web de Alto Desempenho</li>
              <li className="animation_skills-false">Transforme Seu Negócio com Soluções Web de Alto Desempenho</li>
            </ul>
          </div>
        </section>
        <section className="card_services">
          <h2 data-aos="flip-down">Serviços</h2>
          <div>
            <div className="box_services">
              <div data-aos="fade-right">
                <Image src={ImgAfforai} alt="" />
              </div>
              <div data-aos="fade-up-left">
                <CardServiceInfo

                  title="Landing Pages Personalizadas"
                  description="Crie uma primeira impressão inesquecível com landing pages que capturam a essência do seu negócio. Nossas páginas são otimizadas para conversão e projetadas para engajar seus visitantes desde o primeiro clique."
                  link="https://afforai-landingpage.vercel.app/"
                />
              </div>
            </div>
            <div className="box_services gridResponde">
              <div data-aos="fade-down-right">
                <CardServiceInfo
                  title="Desenvolvimento de Páginas Web"
                  description="De sites institucionais a portais complexos, desenvolvemos soluções completas e personalizadas que atendem às necessidades do seu negócio. Utilizamos as tecnologias mais recentes para garantir desempenho, segurança e escalabilidade."
                  link="https://webinter-gamma.vercel.app/"
                />
              </div>
              <div data-aos="fade-down">
                <Image src={ImgInter} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="card_contact">
          <div>
            <h2 data-aos="zoom-in-up">Pronto para Transformar Seu Negócio?</h2>
            <p data-aos="zoom-in-left">Qual projeto você tem em mente?</p>
            <p className="arrow_animation"><MoveDown size={50} /></p>
          </div>
          <Buttom
            title="Solicite um Orçamento"
            styleColor={false}
          />
          <span></span>
        </section>
      </main>
      <footer className="container_footer">
        <p>@Natã Martins - 2021 - Todos os diretos reservados.</p>
      </footer>
    </>
  );
}
