import { ChangeEvent } from "react";
import { changeLanguage } from "i18next";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { routes } from "@/routes/routes";
import { SelectDropDown } from "@/components/SelectDropDown";

export const Navbar = () => {
  function changeSelect(option: string) {
    const language = option;
    changeLanguage(language);
  }

  const { t,i18n } = useTranslation();

  return (
    <nav className="flex p-5 items-center bg-white ">
      <SelectDropDown
        selected={i18n.language}
        Icon={<MdLanguage />}
        options={["ES", "EN"]}
        onValueSelect={(option) => changeSelect(option)}
      />

      <div className="flex-1" />

      <section className="flex gap-4">
        {routes.map((route,index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
            `px-2 py-1 rounded-sm hover:text-primary-500 duration-300 
            ${isActive && "text-primary-500"}`}
            to={route.route}>
            <span className="font-semibold">{t(route.name)}</span>
          </NavLink>
        ))}
      </section>
    </nav>
  );
};
