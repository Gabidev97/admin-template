import { Sol, Moon } from "../icons/index";

interface BotaoProps {
  tema: string;
  alternarTema: () => void;
}

export default function BotaoAlternar(props: BotaoProps) {
  return props.tema === "dark" ? (
    <div
      onClick={props.alternarTema}
      className={`
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-red-400
       w-14 lg:w-24 h-8 p-1 rounded-full
        
        `}
    >
      <div
        className={`flex items-center justify-center
            bg-white text-yellow-600
            w-7 h-7 rounded-full

            `}
      >
        {Sol(4)}
      </div>
      <div
        className={`
            hidden lg:flex items-center ml-3
            `}
      >
        <span>Light</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={`
      hidden sm:flex items-center justify-end cursor-pointer
      bg-gradient-to-r from-gray-500 to-gray-900
     w-14 lg:w-24 h-8 p-1 rounded-full
      
      `}
    >
      <div
        className={`
          hidden lg:flex items-center mr-1 text-gray-200
          `}
      >
        <span>Dark</span>
      </div>

      <div
        className={`flex items-center justify-center
          bg-black text-yellow-300
          w-7 h-7 rounded-full

          `}
      >
        {Moon(4)}
      </div>
    </div>
  );
}
