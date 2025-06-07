"use client";

import { Lato, Poppins } from "next/font/google";
import ImageAuth from "@/img/bg-auth.jpg"
import Google from "@/img/google-logo.svg"
import Mail from "@/img/mail.png"

const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const poppins_bold = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const poppins_small = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Index = ({ onClose }) => {
  return (
    // Container qui couvre tout l'écran et centre la popup
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop semi-transparent */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose} // Ferme la popup si l'utilisateur clique sur le fond
      />

      {/* Fenêtre de la popup (50% largeur / 50% hauteur) */}
      <div
        className={`
          relative
          bg-white
          w-[59vw]
          h-[74vh]
          rounded-lg
          shadow-lg
          flex overflow-hidden
          ${lato.className}
        `}
      >
        <div className="w-1/2 h-full">
          <img src={ImageAuth.src} className="object-cover w-full h-full"></img>
        </div>
        
        <div className="flex flex-col w-1/2 px-10 pb-10 pt-16 h-full">

          <span className={`${poppins.className} text-gray-800 text-[23px] mb-2`}>Connectez-vous à wicca</span>
          <span className={`${poppins_small.className} text-gray-600 text-[15px]`}>Vous n'avez pas de compte ? Inscrivez-vous ici</span>

          <div className="flex items-center border-[1px] border-gray-200 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer mt-14">
            <img src={Google.src} className="h-6"></img>
            <div className="w-full flex justify-center">
              <span className={`${poppins.className} text-gray-800 text-[15px]`}>Continuer avec Google</span>
            </div>  
          </div>
          
          <div className="w-full flex items-center my-6">
            <hr className="border-t border-gray-300 flex-grow" />
            <span className={`${poppins_small.className} px-2 text-gray-500 text-[11px]`}>ou</span>
            <hr className="border-t border-gray-300 flex-grow" />
          </div>

          <div className="flex items-center border-[1px] border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <img src={Mail.src} className="h-6"></img>
            <div className="w-full flex justify-center">
              <span className={`${poppins.className} text-gray-800 text-[15px]`}>Continuer avec votre e-mail</span>
            </div>  
          </div>

          <div className="mt-auto">
            <span className={`${poppins_small.className} text-gray-600 text-[11px]`}>En vous inscrivant, vous acceptez les Conditions générales d'utilisation de Wicca et de recevoir occasionnellement des e-mails de notre part. Veuillez lire notre Politique de confidentialité pour savoir comment nous utilisons vos données personnelles.</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Index;
