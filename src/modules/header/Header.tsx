import React from "react";
import { ChangeEvent, useState } from "react"
import { changeLanguage } from "i18next";

const Header = () => {

  function changeSelect(e:ChangeEvent<HTMLSelectElement>){
    console.log(e.currentTarget.value)
    const language = e.currentTarget.value;
    changeLanguage(language)
  }

  return (
    <header className="flex p-10">
      <select onChange={(e)=>changeSelect(e)} name="language">
        <option value={'es'}>ES</option>
        <option value={'en'}>EN</option>
      </select>

      <h1 className="text-4xl font-bold">Guillermo Jiménez</h1>
    </header>
  );
};

export default Header;
