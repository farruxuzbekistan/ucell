import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        {/* Copyright Text */}
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. Barcha huquqlar himoyalangan.
        </p>

        {/* Social Media Icons */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>

        {/* Developed by Farrux Developer */}
        <p className="caption text-n-4 lg:block">
          Developed by{" "}
          <a
            href="https://www.youtube.com/@FarruxDeveloper"
            target="_blank"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Farrux Developer
          </a>
        </p>
      </div>
    </Section>
  );
};

export default Footer;
